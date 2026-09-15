// Syncs saved templates/phrases/words across devices via a private GitHub Gist.
// The user supplies their own Personal Access Token (needs the "gist" scope)
// and it's kept only in this browser's localStorage — never sent anywhere but
// api.github.com.

const GIST_FILENAME = 'radiology-report-generator-sync.json';
const GIST_DESCRIPTION = 'Radiology Report Generator - saved templates & phrases (do not edit manually)';

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
  if (!res.ok) {
    if (res.status === 401) throw new Error('GitHub rejected that token — check it has the "gist" scope and hasn\'t expired.');
    if (res.status === 404) throw new Error("Gist not found — check the Gist ID, or leave it blank to create a new one.");
    const body = await res.json().catch(() => null);
    throw new Error(body?.message || `GitHub request failed (${res.status}).`);
  }
  return res.json();
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
// otherwise updates the existing one in place.
export async function saveToGist({ token, gistId, userTemplates, userPhrases, addedWords }) {
  if (!token) throw new Error('Enter your GitHub personal access token first.');
  const payload = buildPayload(userTemplates, userPhrases, addedWords);
  const body = {
    description: GIST_DESCRIPTION,
    public: false,
    files: { [GIST_FILENAME]: { content: JSON.stringify(payload, null, 2) } },
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

export async function loadFromGist({ token, gistId }) {
  if (!token) throw new Error('Enter your GitHub personal access token first.');
  if (!gistId) throw new Error('Enter the Gist ID to load from.');
  const gist = await githubRequest(`https://api.github.com/gists/${gistId}`, token);
  const file = gist.files?.[GIST_FILENAME] ?? Object.values(gist.files || {})[0];
  if (!file) throw new Error('That gist has no sync data in it.');
  let content = file.content;
  if (file.truncated) {
    const res = await fetch(file.raw_url);
    content = await res.text();
  }
  let data;
  try {
    data = JSON.parse(content);
  } catch {
    throw new Error("That gist's content isn't valid sync data.");
  }
  if (!data || (!data.templates && !data.phrases && !data.words)) {
    throw new Error("That gist doesn't look like radiology sync data.");
  }
  return data;
}

export { GIST_FILENAME };
