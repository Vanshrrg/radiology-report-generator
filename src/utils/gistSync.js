// Syncs saved templates/phrases/words across devices via a private GitHub Gist.
// The user supplies their own Personal Access Token (needs the "gist" scope)
// and it's kept only in this browser's localStorage — never sent anywhere but
// api.github.com.

const GIST_FILENAME = 'radiology-report-generator-sync.json';
// Open (unfinished) report tabs live in their own file in the same gist, so
// the templates file keeps its old shape and older copies of the app still
// read it fine.
const TABS_FILENAME = 'radiology-report-generator-tabs.json';
const GIST_DESCRIPTION = 'Radiology Report Generator - saved templates & phrases (do not edit manually)';
const MAX_CLOSED = 20;

function buildPayload(userTemplates, userPhrases, addedWords = []) {
  return {
    version: 2,
    savedAt: new Date().toISOString(),
    templates: userTemplates,
    phrases: userPhrases,
    words: addedWords,
  };
}

async function githubRequest(url, token, options = {}) {
  const res = await fetch(url, {
    ...options,
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github+json',
      ...(options.headers || {}),
    },
  });
  if (!res.ok) await throwGithubError(res);
  return res.json();
}

async function throwGithubError(res) {
  if (res.status === 401) throw new Error('GitHub rejected that token — check it has the "gist" scope and hasn\'t expired.');
  if (res.status === 404) throw new Error("Gist not found — check the Gist ID, or leave it blank to create a new one.");
  const body = await res.json().catch(() => null);
  throw new Error(body?.message || `GitHub request failed (${res.status}).`);
}

async function fileContent(file) {
  if (!file.truncated) return file.content;
  const res = await fetch(file.raw_url);
  return res.text();
}

// Finds this token's own sync gist by filename, so a second device only
// needs the same token typed in — no Gist ID to copy around. Looks at the
// most recently updated 100 gists, which comfortably covers a personal
// account's history.
export async function findOwnGist(token) {
  if (!token) return null;
  const gists = await githubRequest('https://api.github.com/gists?per_page=100', token);
  const match = gists.find(g => g.files && GIST_FILENAME in g.files);
  return match ? match.id : null;
}

// Creates the gist on first save (when gistId is blank) and returns its id,
// otherwise updates the existing one in place. `openTabs` (from
// openTabsPayload) is optional — left out, the tabs file is left as it is.
export async function saveToGist({ token, gistId, userTemplates, userPhrases, addedWords, openTabs }) {
  if (!token) throw new Error('Enter your GitHub personal access token first.');
  const payload = buildPayload(userTemplates, userPhrases, addedWords);
  const files = { [GIST_FILENAME]: { content: JSON.stringify(payload, null, 2) } };
  if (openTabs) {
    files[TABS_FILENAME] = {
      content: JSON.stringify({ version: 1, savedAt: new Date().toISOString(), ...openTabs }, null, 2),
    };
  }
  const body = {
    description: GIST_DESCRIPTION,
    public: false,
    files,
  };
  if (gistId) {
    await githubRequest(`https://api.github.com/gists/${gistId}`, token, {
      method: 'PATCH',
      body: JSON.stringify(body),
    });
    return gistId;
  }
  const created = await githubRequest('https://api.github.com/gists', token, {
    method: 'POST',
    body: JSON.stringify(body),
  });
  return created.id;
}

// Returns the templates/phrases/words payload, plus `openTabs` ({tabs, closed})
// when the gist has a tabs file, and the response's `etag`.
// Pass the previous `etag` to poll cheaply: if nothing changed GitHub answers
// 304, which doesn't count against the token's rate limit, and this returns
// null. That's what makes checking every few seconds affordable.
export async function loadFromGist({ token, gistId, etag }) {
  if (!token) throw new Error('Enter your GitHub personal access token first.');
  if (!gistId) throw new Error('Enter the Gist ID to load from.');
  // Fetched by hand rather than through githubRequest, which would treat a
  // 304 as an error. no-store keeps the browser's own cache (GitHub sends
  // max-age=60) from answering with a stale copy.
  const res = await fetch(`https://api.github.com/gists/${gistId}`, {
    cache: 'no-store',
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github+json',
      ...(etag ? { 'If-None-Match': etag } : {}),
    },
  });
  if (res.status === 304) return null;
  if (!res.ok) await throwGithubError(res);
  const newEtag = res.headers.get('ETag');
  const gist = await res.json();
  const file = gist.files?.[GIST_FILENAME] ?? Object.values(gist.files || {})[0];
  if (!file) throw new Error('That gist has no sync data in it.');
  const content = await fileContent(file);
  let data;
  try {
    data = JSON.parse(content);
  } catch {
    throw new Error("That gist's content isn't valid sync data.");
  }
  if (!data || (!data.templates && !data.phrases && !data.words)) {
    throw new Error("That gist doesn't look like radiology sync data.");
  }
  const tabsFile = gist.files?.[TABS_FILENAME];
  if (tabsFile) {
    try {
      const tabsData = JSON.parse(await fileContent(tabsFile));
      if (Array.isArray(tabsData?.tabs)) data.openTabs = { tabs: tabsData.tabs, closed: tabsData.closed || [] };
    } catch {
      // A damaged tabs file shouldn't stop templates/phrases from syncing.
    }
  }
  data.etag = newEtag;
  return data;
}

// What goes up to the gist for open tabs: the report itself, not the undo
// history (large, and only meaningful on the device that made it). Closed tabs
// go up only as tombstones, so other devices close them too.
export function openTabsPayload(tabs, closedTabs) {
  return {
    tabs: tabs.map(({ id, patientInfo, fields, selected, fieldTimes, createdAt, updatedAt }) => ({
      id,
      patientInfo,
      fields,
      selected: selected || null,
      fieldTimes: fieldTimes || {},
      createdAt,
      updatedAt,
    })),
    closed: closedTabs.map(({ id, closedAt }) => ({ id, closedAt })),
  };
}

const REPORT_FIELDS = ['history', 'technique', 'comparison', 'findings', 'impression'];
const PATIENT_FIELDS = ['name', 'studyType'];

// When this field of the tab was last changed. Tabs saved before per-field
// times existed fall back to the whole tab's last edit.
const fieldTime = (tab, key) => tab.fieldTimes?.[key] || tab.updatedAt || '';

// Same report open on two devices: each field is taken from whichever side
// changed it last, so Findings typed on one device and Impression on another
// both survive. Returns `local` itself when the remote copy adds nothing new.
function mergeTab(local, remote) {
  let changed = false;
  const fields = { ...local.fields };
  const patientInfo = { ...local.patientInfo };
  const fieldTimes = { ...local.fieldTimes };
  let selected = local.selected || null;
  const take = (key, apply) => {
    const remoteTime = fieldTime(remote, key);
    if (remoteTime > fieldTime(local, key)) {
      apply();
      fieldTimes[key] = remoteTime;
      changed = true;
    }
  };
  for (const key of REPORT_FIELDS) take(key, () => (fields[key] = remote.fields?.[key] ?? ''));
  for (const key of PATIENT_FIELDS) take(key, () => (patientInfo[key] = remote.patientInfo?.[key] ?? ''));
  take('selected', () => (selected = remote.selected || null));
  if (!changed) return local;
  const updatedAt = [local.updatedAt || '', remote.updatedAt || ''].sort().pop();
  return { ...local, fields, patientInfo, selected, fieldTimes, updatedAt };
}

// Merges open tabs pulled from the gist into this device's. Same tab on both
// sides: merged field by field, newest edit of each field wins (this device's
// undo history is kept either way). A tab closed anywhere after its last edit stays closed. Remote
// tombstones join the local closed list so they keep propagating; a tab this
// device had open keeps its full copy there, so it can still be reopened here.
export function mergeOpenTabs(localTabs, localClosed, remote) {
  if (!remote) return { tabs: localTabs, closedTabs: localClosed };
  const closedAt = new Map();
  for (const c of [...localClosed, ...(remote.closed || [])]) {
    if (c?.id && (!closedAt.has(c.id) || (c.closedAt || '') > closedAt.get(c.id))) closedAt.set(c.id, c.closedAt || '');
  }
  const isClosed = t => closedAt.has(t.id) && closedAt.get(t.id) >= (t.updatedAt || '');

  const byId = new Map(localTabs.map(t => [t.id, t]));
  const order = localTabs.map(t => t.id);
  for (const r of remote.tabs || []) {
    if (!r?.id || !r.fields) continue;
    const local = byId.get(r.id);
    if (!local) {
      byId.set(r.id, { history: [], redo: [], ...r });
      order.push(r.id);
    } else {
      byId.set(r.id, mergeTab(local, r));
    }
  }
  const tabs = order.map(id => byId.get(id)).filter(t => !isClosed(t));

  const openIds = new Set(tabs.map(t => t.id));
  const knownClosed = new Set(localClosed.map(c => c.id));
  const closedTabs = [...localClosed];
  for (const c of remote.closed || []) {
    if (!c?.id || knownClosed.has(c.id) || openIds.has(c.id)) continue;
    const copy = byId.get(c.id);
    closedTabs.push(copy ? { ...copy, closedAt: c.closedAt } : { id: c.id, closedAt: c.closedAt });
    knownClosed.add(c.id);
  }
  closedTabs.sort((a, b) => (b.closedAt || '').localeCompare(a.closedAt || ''));
  return { tabs, closedTabs: closedTabs.slice(0, MAX_CLOSED) };
}

export { GIST_FILENAME, MAX_CLOSED };
