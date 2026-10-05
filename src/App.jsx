import { useEffect, useMemo, useRef, useState } from 'react';
import LeftPanel from './components/LeftPanel.jsx';
import ReportEditor from './components/ReportEditor.jsx';
import RightPanel from './components/RightPanel.jsx';
import SyncModal from './components/SyncModal.jsx';
import { useLocalStorage } from './hooks/useLocalStorage.js';
import { templates as premadeTemplates, phrases as premadePhrases } from './data/premadeData.js';
import { exportUserData, importUserData, applyImportedData, DEFAULT_SIGNATURE } from './utils/reportUtils.js';
import ReportTabs from './components/ReportTabs.jsx';
import { saveToGist, loadFromGist, mergeOpenTabs, openTabsPayload, MAX_CLOSED } from './utils/gistSync.js';
import { modalityLabel, regionLabel, tabLabel } from './utils/labels.js';
import { collectUserWords } from './utils/spellcheck.js';

function slugify(text) {
  return text.trim().toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
}

// Reuses an existing modality/region key if the typed text matches its key or
// display label (case-insensitive), otherwise slugifies the text into a new key.
function findExistingModalityKey(input, templates) {
  const norm = input.trim().toLowerCase();
  for (const key of Object.keys(templates)) {
    if (key.toLowerCase() === norm || modalityLabel(key).toLowerCase() === norm) return key;
  }
  return slugify(input);
}

function findExistingRegionKey(input, templates, modalityKey) {
  const norm = input.trim().toLowerCase();
  const regions = templates[modalityKey] || {};
  for (const key of Object.keys(regions)) {
    if (key.toLowerCase() === norm || regionLabel(key).toLowerCase() === norm) return key;
  }
  return slugify(input);
}

const EMPTY_FIELDS = { history: '', technique: '', comparison: 'None.', findings: '', impression: '' };
const EMPTY_PATIENT = { name: '', studyType: '' };

const resolve = (updater, prev) => (typeof updater === 'function' ? updater(prev) : updater);

// Not crypto.randomUUID — that's missing on plain-http LAN addresses, which is
// how the app gets opened on a phone during development.
const newId = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;

function makeTab(init = {}) {
  const now = new Date().toISOString();
  return {
    id: newId(),
    patientInfo: EMPTY_PATIENT,
    fields: EMPTY_FIELDS,
    selected: null,
    history: [],
    redo: [],
    createdAt: now,
    updatedAt: now,
    ...init,
  };
}

// A blank tab with nothing typed in it isn't worth keeping in "recently closed".
function tabHasContent(tab) {
  const f = tab.fields || {};
  return Boolean(
    tab.patientInfo?.name?.trim() ||
      tab.patientInfo?.studyType?.trim() ||
      ['history', 'technique', 'findings', 'impression'].some(k => f[k]?.trim()) ||
      (f.comparison && f.comparison !== EMPTY_FIELDS.comparison),
  );
}

// Before tabs there was one draft under these keys; it becomes the first tab.
const LEGACY_DRAFT_KEYS = [
  'radiology.draft.patientInfo',
  'radiology.draft.fields',
  'radiology.draft.history',
  'radiology.draft.redo',
];

function loadLegacyDraft() {
  const read = key => {
    try {
      const raw = localStorage.getItem(key);
      return raw !== null ? JSON.parse(raw) : undefined;
    } catch {
      return undefined;
    }
  };
  const [patientInfo, fields, history, redo] = LEGACY_DRAFT_KEYS.map(read);
  return makeTab({
    patientInfo: patientInfo || EMPTY_PATIENT,
    fields: fields || EMPTY_FIELDS,
    history: history || [],
    redo: redo || [],
  });
}

export default function App() {
  const [userTemplates, setUserTemplates] = useLocalStorage('radiology.userTemplates', {});
  const [userPhrases, setUserPhrases] = useLocalStorage('radiology.userPhrases', {});

  // Report tabs: every unfinished report is its own tab, each holding its own
  // draft, loaded template and undo/redo history. All of it is kept in
  // localStorage, not just React state, so an accidental refresh, browser
  // crash or power cut brings every open report back. useLocalStorage writes
  // on every change, so at most the last keystroke is ever at risk.
  // The first load after this was added carries the old single draft over.
  const [firstTab] = useState(loadLegacyDraft);
  const [tabs, setTabs] = useLocalStorage('radiology.tabs', [firstTab]);
  const [activeTabId, setActiveTabId] = useLocalStorage('radiology.activeTabId', firstTab.id);
  // Closed tabs, newest first, so an accidental close can be undone. They also
  // travel to the gist as tombstones so a tab closed on one device closes on
  // the others.
  const [closedTabs, setClosedTabs] = useLocalStorage('radiology.closedTabs', []);
  useEffect(() => {
    for (const key of LEGACY_DRAFT_KEYS) localStorage.removeItem(key);
  }, []);

  const activeTab = tabs.find(t => t.id === activeTabId) || tabs[0] || firstTab;
  const activeIdRef = useRef(activeTab.id);
  activeIdRef.current = activeTab.id;
  // Never leave zero tabs or point at one that's gone (e.g. closed by a sync).
  useEffect(() => {
    if (!tabs.length) {
      const tab = makeTab();
      setTabs([tab]);
      setActiveTabId(tab.id);
    } else if (!tabs.some(t => t.id === activeTabId)) {
      setActiveTabId(tabs[0].id);
    }
  }, [tabs, activeTabId]);

  const { patientInfo, fields } = activeTab;
  const selected = activeTab.selected || null;
  // Undo history: a stack of {fields, patientInfo} snapshots taken before each
  // change, so Ctrl+Z / the Undo button can step back through edits, template
  // loads, and clears alike. Checkpoints are debounced so a burst of typing
  // becomes one undo step instead of one per keystroke. Kept per tab.
  const history = activeTab.history || [];
  // Redo is the other half of undo: without it, one Ctrl+Z too many loses text
  // with no way back. Any fresh edit invalidates it, as usual.
  const redoStack = activeTab.redo || [];

  // These setters keep the same value-or-updater shape as useState, but write
  // into the active tab. Each changed field gets its own timestamp in
  // fieldTimes — sync merges field by field on those, so edits to different
  // fields on two devices both survive. Undo/redo history changes aren't
  // content and don't touch them.
  const updateActiveTab = fn => {
    const id = activeIdRef.current;
    setTabs(ts => ts.map(t => (t.id === id ? fn(t) : t)));
  };
  const stampChanges = (t, key, next) => {
    const prev = t[key] || {};
    if (next === prev) return t;
    const now = new Date().toISOString();
    const fieldTimes = { ...t.fieldTimes };
    for (const k of Object.keys(next)) if (next[k] !== prev[k]) fieldTimes[k] = now;
    return { ...t, [key]: next, fieldTimes, updatedAt: now };
  };
  const setFieldsRaw = u => updateActiveTab(t => stampChanges(t, 'fields', resolve(u, t.fields)));
  const setPatientInfoRaw = u => updateActiveTab(t => stampChanges(t, 'patientInfo', resolve(u, t.patientInfo)));
  const setHistory = u => updateActiveTab(t => ({ ...t, history: resolve(u, t.history || []) }));
  const setRedoStack = u => updateActiveTab(t => ({ ...t, redo: resolve(u, t.redo || []) }));
  const setSelected = u =>
    updateActiveTab(t => {
      const next = resolve(u, t.selected || null);
      if (JSON.stringify(next) === JSON.stringify(t.selected || null)) return t;
      return { ...t, selected: next, fieldTimes: { ...t.fieldTimes, selected: new Date().toISOString() } };
    });
  // The sign-off is per-user, not per-install — editable in the editor and kept
  // in this browser rather than hard-coded in the source.
  const [signature, setSignature] = useLocalStorage('radiology.signature', DEFAULT_SIGNATURE);
  // The in-app spell checker, and the words this user has taught it. Kept on by
  // default: the browser's own checker never looks at template text.
  const [spellOn, setSpellOn] = useLocalStorage('radiology.spellcheck', true);
  const [addedWords, setAddedWords] = useLocalStorage('radiology.userWords', []);
  // GitHub Gist sync: token and gist id live only in this browser, same as
  // everything else here — see SyncModal.
  const [gistToken, setGistToken] = useLocalStorage('radiology.gistToken', '');
  const [gistId, setGistId] = useLocalStorage('radiology.gistId', '');
  const [autoSync, setAutoSync] = useLocalStorage('radiology.autoSync', false);
  const [lastSyncedAt, setLastSyncedAt] = useLocalStorage('radiology.gistLastSyncedAt', '');
  const [syncStatus, setSyncStatus] = useState(null); // 'syncing' | 'error' | null
  const [syncModalOpen, setSyncModalOpen] = useState(false);

  // Everything in the user's own templates and phrases counts as spelled
  // correctly — it's the house vocabulary, and it's exactly what a general
  // dictionary is missing.
  const extraWords = useMemo(
    () => collectUserWords(userTemplates, userPhrases, addedWords),
    [userTemplates, userPhrases, addedWords],
  );

  const handleAddWord = word => {
    const clean = String(word || '').trim().toLowerCase();
    if (!clean) return;
    setAddedWords(prev => (prev.includes(clean) ? prev : [...prev, clean]));
  };

  // Automatic gist sync, near-live: push about a second after any change, and
  // check the gist every few seconds while this window is visible (and
  // straight away on coming back to it) so another device's edits show up
  // here quickly. Checks send the last ETag, so "nothing changed" is a 304
  // that GitHub doesn't count against the token's rate limit.
  // A ref guards against a pull's own changes being pushed straight back at
  // the gist — two devices would otherwise bounce the same data forever.
  const skipNextAutoPushRef = useRef(false);
  const autoPushTimerRef = useRef(null);
  // Last local change and last push, so a pull that lands while a local edit
  // is still waiting to go up doesn't swallow that push.
  const localChangeAtRef = useRef(0);
  const lastPushAtRef = useRef(0);
  const etagRef = useRef(null);
  const pullingRef = useRef(false);

  // Open tabs ride along in the same gist. The payload leaves out undo history,
  // and its JSON is the push trigger — so moving through undo, or switching
  // tabs, doesn't cause a push, only real report changes do.
  const openTabsJson = useMemo(() => JSON.stringify(openTabsPayload(tabs, closedTabs)), [tabs, closedTabs]);
  const tabsRef = useRef(tabs);
  const closedTabsRef = useRef(closedTabs);
  tabsRef.current = tabs;
  closedTabsRef.current = closedTabs;
  const applyRemoteTabs = remote => {
    if (!remote) return;
    const merged = mergeOpenTabs(tabsRef.current, closedTabsRef.current, remote);
    setTabs(merged.tabs);
    setClosedTabs(merged.closedTabs);
  };

  const pullFromGist = () => {
    if (pullingRef.current) return;
    pullingRef.current = true;
    loadFromGist({ token: gistToken, gistId, etag: etagRef.current })
      .then(data => {
        setSyncStatus(null);
        if (!data) return; // unchanged since the last check
        etagRef.current = data.etag;
        // Don't echo what was just pulled back up — unless a local change is
        // still waiting to go up, which the merged state now carries.
        skipNextAutoPushRef.current = localChangeAtRef.current <= lastPushAtRef.current;
        applyImportedData(data, setUserTemplates, setUserPhrases, setAddedWords);
        applyRemoteTabs(data.openTabs);
        setLastSyncedAt(new Date().toISOString());
      })
      .catch(() => setSyncStatus('error'))
      .finally(() => {
        pullingRef.current = false;
      });
  };
  const pullFromGistRef = useRef(pullFromGist);
  pullFromGistRef.current = pullFromGist;

  useEffect(() => {
    if (!autoSync || !gistToken || !gistId) return;
    etagRef.current = null;
    skipNextAutoPushRef.current = true;
    pullFromGistRef.current();
    const pullIfVisible = () => {
      if (!document.hidden) pullFromGistRef.current();
    };
    const interval = setInterval(pullIfVisible, 5000);
    window.addEventListener('focus', pullIfVisible);
    document.addEventListener('visibilitychange', pullIfVisible);
    return () => {
      clearInterval(interval);
      window.removeEventListener('focus', pullIfVisible);
      document.removeEventListener('visibilitychange', pullIfVisible);
    };
    // Only meant to run when auto-sync is turned on/off or credentials change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoSync, gistToken, gistId]);

  useEffect(() => {
    if (!autoSync || !gistToken) return;
    if (skipNextAutoPushRef.current) {
      skipNextAutoPushRef.current = false;
      return;
    }
    localChangeAtRef.current = Date.now();
    if (autoPushTimerRef.current) clearTimeout(autoPushTimerRef.current);
    autoPushTimerRef.current = setTimeout(() => {
      setSyncStatus('syncing');
      lastPushAtRef.current = Date.now();
      saveToGist({
        token: gistToken,
        gistId,
        userTemplates,
        userPhrases,
        addedWords,
        openTabs: JSON.parse(openTabsJson),
      })
        .then(id => {
          if (id !== gistId) setGistId(id);
          setLastSyncedAt(new Date().toISOString());
          setSyncStatus(null);
        })
        .catch(() => {
          // Still unsent — keep it pending so the next pull doesn't skip it.
          lastPushAtRef.current = 0;
          setSyncStatus('error');
        });
    }, 1000);
    return () => clearTimeout(autoPushTimerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoSync, userTemplates, userPhrases, addedWords, openTabsJson]);

  const fieldsRef = useRef(fields);
  const patientInfoRef = useRef(patientInfo);
  const lastCheckpointRef = useRef(0);
  fieldsRef.current = fields;
  patientInfoRef.current = patientInfo;

  const checkpoint = () => {
    const now = Date.now();
    if (now - lastCheckpointRef.current < 800) return;
    lastCheckpointRef.current = now;
    setHistory(h => [...h.slice(-49), { fields: fieldsRef.current, patientInfo: patientInfoRef.current }]);
  };

  const setFields = updater => {
    checkpoint();
    setRedoStack([]);
    setFieldsRaw(updater);
  };
  const setPatientInfo = updater => {
    checkpoint();
    setRedoStack([]);
    setPatientInfoRaw(updater);
  };

  // Reads `history` from render scope rather than a setHistory functional
  // updater — calling other setters as a side effect from inside a setState
  // updater is unsafe (React 18 StrictMode double-invokes updaters to catch
  // exactly this, which was silently dropping the restored state).
  const handleUndo = () => {
    if (!history.length) return;
    const prev = history[history.length - 1];
    setHistory(h => h.slice(0, -1));
    setRedoStack(r => [...r.slice(-49), { fields: fieldsRef.current, patientInfo: patientInfoRef.current }]);
    setFieldsRaw(prev.fields);
    setPatientInfoRaw(prev.patientInfo);
  };

  // Mirror image of handleUndo: the state being left behind goes back onto the
  // undo stack, so you can step forwards and backwards through the same edits.
  const handleRedo = () => {
    if (!redoStack.length) return;
    const next = redoStack[redoStack.length - 1];
    setRedoStack(r => r.slice(0, -1));
    setHistory(h => [...h.slice(-49), { fields: fieldsRef.current, patientInfo: patientInfoRef.current }]);
    setFieldsRaw(next.fields);
    setPatientInfoRaw(next.patientInfo);
  };

  // The listener is registered once ([] deps) so it must reach the latest
  // handleUndo via a ref — capturing it directly would freeze the closure on
  // the first render's (always-empty) history and Ctrl+Z would never undo
  // anything past that.
  const handleUndoRef = useRef(handleUndo);
  handleUndoRef.current = handleUndo;
  const handleRedoRef = useRef(handleRedo);
  handleRedoRef.current = handleRedo;

  useEffect(() => {
    const onKeyDown = e => {
      if (!(e.ctrlKey || e.metaKey)) return;
      const key = e.key.toLowerCase();
      // Ctrl+Shift+Z and Ctrl+Y are both redo — Windows apps are split between
      // the two conventions, so accept either.
      // Ctrl+Shift+T reopens the last closed report, like a browser tab.
      if (key === 't' && e.shiftKey) {
        e.preventDefault();
        handleReopenTabRef.current();
      } else if ((key === 'z' && e.shiftKey) || key === 'y') {
        e.preventDefault();
        handleRedoRef.current();
      } else if (key === 'z') {
        e.preventDefault();
        handleUndoRef.current();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // Brief, non-blocking confirmations — used where an action silently replaces
  // what's on screen (loading a template) and the way back isn't obvious.
  const [toast, setToast] = useState(null);
  const toastTimerRef = useRef(null);
  const showToast = message => {
    setToast(message);
    clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setToast(null), 4000);
  };
  useEffect(() => () => clearTimeout(toastTimerRef.current), []);

  // "Saved" timestamp for the editor's autosave hint. Skipped on the first
  // render — restoring a draft isn't a save the user just made.
  // Switching tabs isn't a save either, so the hint resets instead.
  const [savedAt, setSavedAt] = useState(null);
  const savedForTabRef = useRef(null);
  useEffect(() => {
    if (savedForTabRef.current !== activeTab.id) {
      savedForTabRef.current = activeTab.id;
      setSavedAt(null);
      return;
    }
    setSavedAt(Date.now());
  }, [fields, patientInfo, activeTab.id]);

  // Tabs. Switching resets the undo debounce so the first edit in the newly
  // shown report gets its own checkpoint, and opens the left menu on the
  // template that report was started from.
  const switchToTab = tab => {
    lastCheckpointRef.current = 0;
    setActiveTabId(tab.id);
    if (tab.selected) setOpenScope({ modality: tab.selected.modality, region: tab.selected.region });
  };
  const handleSwitchTab = id => {
    const tab = tabs.find(t => t.id === id);
    if (tab && id !== activeTab.id) switchToTab(tab);
  };

  // New report = new tab; whatever was open stays open in its own tab.
  const handleNewReport = () => {
    const tab = makeTab();
    setTabs(ts => [...ts, tab]);
    switchToTab(tab);
  };

  // Closing never asks — it's always one click away from coming back via
  // "Recently closed" or Ctrl+Shift+T. Blank tabs aren't worth remembering.
  const handleCloseTab = id => {
    const index = tabs.findIndex(t => t.id === id);
    if (index === -1) return;
    const tab = tabs[index];
    const rest = tabs.filter(t => t.id !== id);
    if (tabHasContent(tab)) {
      setClosedTabs(cs => [{ ...tab, closedAt: new Date().toISOString() }, ...cs.filter(c => c.id !== id)].slice(0, MAX_CLOSED));
      showToast(`Closed "${tabLabel(tab)}" — Ctrl+Shift+T to reopen`);
    }
    if (!rest.length) {
      const blank = makeTab();
      setTabs([blank]);
      switchToTab(blank);
      return;
    }
    setTabs(rest);
    if (id === activeTab.id) switchToTab(rest[Math.min(index, rest.length - 1)]);
  };

  // Brings a closed tab back (the most recent one if none is given). It gets a
  // fresh updatedAt so sync treats it as open again everywhere, not as closed.
  const handleReopenTab = id => {
    const entry = closedTabs.find(c => (id ? c.id === id : c.fields));
    if (!entry?.fields) return;
    const { closedAt, ...tab } = entry;
    const reopened = { history: [], redo: [], ...tab, updatedAt: new Date().toISOString() };
    setClosedTabs(cs => cs.filter(c => c.id !== entry.id));
    setTabs(ts => [...ts.filter(t => t.id !== entry.id), reopened]);
    switchToTab(reopened);
  };
  const handleReopenTabRef = useRef(handleReopenTab);
  handleReopenTabRef.current = handleReopenTab;
  // Which modality/region is expanded in the left menu — the phrase list is
  // scoped to match it.
  const [openScope, setOpenScope] = useState(null);
  // Collapsing the side panels frees up width for the editor on narrower
  // windows — user-toggled, not automatic.
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);
  // Phone-width layout: templates & phrases live in slide-in drawers instead
  // of side columns, so the report fields get the full screen. null | 'templates' | 'phrases'.
  const [mobilePanel, setMobilePanel] = useState(null);

  const editorRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleSelectTemplate = (modality, region, name, data) => {
    setSelected({ modality, region, name });
    setOpenScope({ modality, region });
    setMobilePanel(null);
    setFields({
      history: data.history || '',
      technique: data.technique || '',
      comparison: data.comparison || 'None.',
      findings: data.findings || '',
      impression: data.impression || '',
    });
    // Study type is the exam performed (e.g. "CT Whole Abdomen"), not the
    // template's name — templates filed under a disease name (e.g. "Hepatocellular
    // Carcinoma") still carry their own real study type separately.
    setPatientInfo(p => ({ ...p, studyType: data.studyType || name }));
    // Loading a template overwrites all five fields at once. It's undoable, but
    // nothing on screen said so — a stray click used to look like lost work.
    showToast(`Loaded "${name}" — press Ctrl+Z to undo`);
  };

  // Deliberately leaves the phone drawer open — phrases are inserted several at
  // a time, and closing after each one meant reopening it for every insert.
  const handleInsertPhrase = phrase => {
    editorRef.current?.insertAtCursor(phrase);
  };

  const saveTemplateTo = (modality, region, name) => {
    setUserTemplates(prev => ({
      ...prev,
      [modality]: {
        ...(prev[modality] || {}),
        [region]: {
          ...((prev[modality] || {})[region] || {}),
          [name]: { ...fields, studyType: patientInfo.studyType },
        },
      },
    }));
    setSelected({ modality, region, name });
    setOpenScope({ modality, region });
  };

  // Prompts for a modality and region, typed as free text so a new one can be
  // created on the spot — matched back to an existing key/label when it matches
  // one, otherwise slugified into a new key. Returns null if the user cancels.
  const promptModalityRegion = (defaultModality, defaultRegion) => {
    const merged = mergeTemplateTrees(premadeTemplates, userTemplates);
    const modalityInput = window.prompt(
      'Modality (e.g. CT, MRI, X-ray, Ultrasound — type a new one to create it):',
      defaultModality ? modalityLabel(defaultModality) : ''
    );
    if (!modalityInput?.trim()) return null;
    const modality = findExistingModalityKey(modalityInput, merged);

    const regionInput = window.prompt(
      'Region (e.g. Abdomen, Chest, Brain — type a new one to create it):',
      defaultRegion ? regionLabel(defaultRegion) : ''
    );
    if (!regionInput?.trim()) return null;
    const region = findExistingRegionKey(regionInput, merged, modality);

    return { modality, region };
  };

  // Save: updates the currently loaded template in place. The template's name
  // comes from what's loaded (or a prompt if nothing is), not from Study type —
  // Study type is the exam performed, not the template's identity. Use the ✏️
  // icon in the left menu to rename a template. If nothing is loaded and no
  // modality/region is open on the left, prompts for one (new or existing).
  const handleSaveTemplate = () => {
    let modality = selected?.modality || openScope?.modality;
    let region = selected?.region || openScope?.region;
    if (!modality || !region) {
      const picked = promptModalityRegion(modality, region);
      if (!picked) return;
      ({ modality, region } = picked);
    }
    const name = selected?.name || window.prompt('Template name:');
    if (!name?.trim()) return;
    saveTemplateTo(modality, region, name.trim());
  };

  // Save As: saves a copy under a new name, in a modality/region you choose —
  // pick an existing one or type a new one to create it — leaving the
  // original template untouched.
  const handleSaveTemplateAs = () => {
    const picked = promptModalityRegion(selected?.modality || openScope?.modality, selected?.region || openScope?.region);
    if (!picked) return;
    const { modality, region } = picked;
    const name = window.prompt('Save as new template named:', selected?.name || '');
    if (!name?.trim()) return;
    saveTemplateTo(modality, region, name.trim());
  };

  const handleDeleteUserTemplate = (modality, region, name) => {
    setUserTemplates(prev => {
      const next = structuredClone(prev);
      delete next?.[modality]?.[region]?.[name];
      return next;
    });
  };

  // Removes every custom template saved under this modality/region. Built-in
  // templates in the same region (if any) are untouched, since they live in
  // premadeTemplates, not userTemplates.
  const handleDeleteUserRegion = (modality, region) => {
    const count = Object.keys(userTemplates[modality]?.[region] || {}).length;
    if (!count) return;
    if (!window.confirm(`Delete all ${count} custom template(s) saved under "${regionLabel(region)}"? This can't be undone.`)) return;
    setUserTemplates(prev => {
      const next = structuredClone(prev);
      delete next?.[modality]?.[region];
      return next;
    });
    if (selected?.modality === modality && selected?.region === region) setSelected(null);
    if (openScope?.modality === modality && openScope?.region === region) setOpenScope({ modality, region: null });
  };

  // Removes every custom region/template saved under this modality entirely.
  const handleDeleteUserModality = modality => {
    const regions = userTemplates[modality] || {};
    const count = Object.values(regions).reduce((n, r) => n + Object.keys(r || {}).length, 0);
    if (!count) return;
    if (!window.confirm(`Delete all ${count} custom template(s) saved under "${modalityLabel(modality)}"? This can't be undone.`)) return;
    setUserTemplates(prev => {
      const next = structuredClone(prev);
      delete next?.[modality];
      return next;
    });
    if (selected?.modality === modality) setSelected(null);
    if (openScope?.modality === modality) setOpenScope(null);
  };

  const handleDeleteCurrentTemplate = () => {
    if (!selected) {
      window.alert('Select a template first, then Delete.');
      return;
    }
    const exists = userTemplates[selected.modality]?.[selected.region]?.[selected.name];
    if (!exists) {
      window.alert("This is a built-in template and can't be deleted — only custom-saved templates can be.");
      return;
    }
    if (!window.confirm(`Delete "${selected.name}"? This can't be undone.`)) return;
    handleDeleteUserTemplate(selected.modality, selected.region, selected.name);
    setSelected(null);
  };

  // Adds a phrase to whichever modality/region is open on the left. Deleting is
  // done from the 🗑 on the phrase row itself.
  const handleSavePhrase = () => {
    if (!openScope?.region) return;
    const phrase = window.prompt('New phrase:');
    if (!phrase?.trim()) return;
    const key = `${openScope.modality}.${openScope.region}`;
    setUserPhrases(prev => ({ ...prev, [key]: [...(prev[key] || []), phrase.trim()] }));
  };

  // Renaming only applies to custom-saved templates — built-in ones can't be
  // renamed since they'd just be re-created under the old name on next load.
  const handleRenameUserTemplate = (modality, region, oldName) => {
    const data = userTemplates[modality]?.[region]?.[oldName];
    if (!data) {
      window.alert("This is a built-in template and can't be renamed — only custom-saved templates can be.");
      return;
    }
    const newName = window.prompt('New name:', oldName);
    if (!newName || newName === oldName) return;
    if (userTemplates[modality]?.[region]?.[newName]) {
      window.alert(`"${newName}" already exists in this region.`);
      return;
    }
    setUserTemplates(prev => {
      const next = structuredClone(prev);
      delete next[modality][region][oldName];
      next[modality][region][newName] = data;
      return next;
    });
    if (selected && selected.modality === modality && selected.region === region && selected.name === oldName) {
      setSelected({ modality, region, name: newName });
    }
  };

  const handleDeleteUserPhrase = (key, phrase) => {
    setUserPhrases(prev => ({ ...prev, [key]: (prev[key] || []).filter(p => p !== phrase) }));
  };

  const mergedTemplates = mergeTemplateTrees(premadeTemplates, userTemplates);

  return (
    <div className="h-screen flex flex-col">
      <header
        className="px-2 sm:px-4 py-2.5 bg-slate-900 text-white flex items-center justify-between gap-2 shrink-0"
        style={{ paddingTop: 'max(0.625rem, env(safe-area-inset-top))' }}
      >
        {/* Templates trigger — drawer on phones, redundant with the always-visible
            left column on md+ screens (hidden there). */}
        <button
          className="md:hidden shrink-0 text-white/90 hover:bg-slate-800 rounded p-2 -ml-1"
          title="Templates"
          aria-label="Open templates"
          onClick={() => setMobilePanel('templates')}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <h1 className="text-sm sm:text-lg font-semibold truncate min-w-0">
          <span className="sm:hidden">Report Generator</span>
          <span className="hidden sm:inline">Radiology Report Generator</span>
        </h1>

        <div className="flex items-center gap-1 text-xs shrink-0">
          {/* Saved templates/phrases only live in this browser, so these are the
              way to carry them to another PC. Kept low-key — they're occasional,
              and hidden on phones to keep the header uncluttered. */}
          <button
            className="hidden md:inline text-slate-400 hover:text-white hover:bg-slate-800 px-2 py-1 rounded"
            onClick={() => exportUserData(userTemplates, userPhrases, addedWords)}
            title="Download your saved templates & phrases as a backup file"
          >
            Back up
          </button>
          <button
            className="hidden md:inline text-slate-400 hover:text-white hover:bg-slate-800 px-2 py-1 rounded"
            onClick={() => fileInputRef.current?.click()}
            title="Restore saved templates & phrases from a backup file"
          >
            Restore
          </button>
          <button
            className="hidden md:inline text-slate-400 hover:text-white hover:bg-slate-800 px-2 py-1 rounded relative"
            onClick={() => setSyncModalOpen(true)}
            title="Sync your saved templates & phrases across devices via a GitHub Gist"
          >
            Sync
            {autoSync && (
              <span
                className={`absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full ${
                  syncStatus === 'error' ? 'bg-red-500' : syncStatus === 'syncing' ? 'bg-amber-400' : 'bg-green-400'
                }`}
                title={syncStatus === 'error' ? 'Last sync failed' : syncStatus === 'syncing' ? 'Syncing…' : 'Auto-sync on'}
              />
            )}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="application/json,.json"
            className="hidden"
            onChange={e => {
              const file = e.target.files?.[0];
              if (file) importUserData(file, setUserTemplates, setUserPhrases, setAddedWords);
              e.target.value = '';
            }}
          />
          {/* Phrases trigger — drawer on phones. */}
          <button
            className="md:hidden shrink-0 text-white/90 hover:bg-slate-800 rounded p-2 -mr-1"
            title="Phrases"
            aria-label="Open phrases"
            onClick={() => setMobilePanel('phrases')}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      <ReportTabs
        tabs={tabs}
        activeTabId={activeTab.id}
        closedTabs={closedTabs}
        onSwitch={handleSwitchTab}
        onClose={handleCloseTab}
        onNew={handleNewReport}
        onReopen={handleReopenTab}
        onClearClosed={() => setClosedTabs(cs => cs.map(({ id, closedAt }) => ({ id, closedAt })))}
      />

      {/* grid-rows-[minmax(0,1fr)] forces the single row to the container's
          actual height instead of auto-sizing to content — required so each
          panel's own h-full/overflow-y-auto can scroll independently now that
          the editor's fields stretch instead of capping their own height.
          Side columns use clamp() so they shrink automatically as the window
          narrows (down to a usable minimum) instead of forcing the editor
          (middle, 1fr — the priority field) to a sliver; collapsing either
          side panel goes further, shrinking it to a thin strip.
          Below the md breakpoint this collapses to a single column — the
          report fields are the priority on a phone, templates/phrases move
          into the slide-in drawers below instead of side columns. */}
      <div
        className={`flex-1 grid grid-cols-1 ${leftCollapsed ? 'md:grid-cols-[36px_1fr_var(--right-w)]' : 'md:grid-cols-[var(--left-w)_1fr_var(--right-w)]'} grid-rows-[minmax(0,1fr)] min-h-0`}
        style={{
          '--left-w': 'clamp(180px, 20vw, 260px)',
          '--right-w': rightCollapsed ? '36px' : 'clamp(200px, 22vw, 300px)',
        }}
      >
        <div className="hidden md:block h-full min-h-0">
          <LeftPanel
            templates={mergedTemplates}
            userTemplates={userTemplates}
            onSelectTemplate={handleSelectTemplate}
            selected={selected}
            openScope={openScope}
            onOpenScopeChange={setOpenScope}
            onDeleteUserTemplate={handleDeleteUserTemplate}
            onRenameUserTemplate={handleRenameUserTemplate}
            onDeleteUserRegion={handleDeleteUserRegion}
            onDeleteUserModality={handleDeleteUserModality}
            collapsed={leftCollapsed}
            onToggleCollapsed={() => setLeftCollapsed(c => !c)}
          />
        </div>
        <ReportEditor
          ref={editorRef}
          patientInfo={patientInfo}
          setPatientInfo={setPatientInfo}
          fields={fields}
          setFields={setFields}
          onSaveTemplate={handleSaveTemplate}
          onSaveTemplateAs={handleSaveTemplateAs}
          onDeleteCurrentTemplate={handleDeleteCurrentTemplate}
          onUndo={handleUndo}
          canUndo={history.length > 0}
          onRedo={handleRedo}
          canRedo={redoStack.length > 0}
          onNewReport={handleNewReport}
          savedAt={savedAt}
          signature={signature}
          setSignature={setSignature}
          spellOn={spellOn}
          onToggleSpell={() => setSpellOn(on => !on)}
          extraWords={extraWords}
          onAddWord={handleAddWord}
        />
        <div className="hidden md:block h-full min-h-0">
          <RightPanel
            premadePhrases={premadePhrases}
            userPhrases={userPhrases}
            openScope={openScope}
            onInsertPhrase={handleInsertPhrase}
            onSavePhrase={handleSavePhrase}
            onDeleteUserPhrase={handleDeleteUserPhrase}
            collapsed={rightCollapsed}
            onToggleCollapsed={() => setRightCollapsed(c => !c)}
          />
        </div>
      </div>

      {toast && (
        <div
          className="fixed left-1/2 -translate-x-1/2 z-[60] bg-slate-900 text-white text-sm px-4 py-2 rounded-full shadow-lg"
          style={{ bottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}
          role="status"
        >
          {toast}
        </div>
      )}

      {syncModalOpen && (
        <SyncModal
          onClose={() => setSyncModalOpen(false)}
          token={gistToken}
          setToken={setGistToken}
          gistId={gistId}
          setGistId={setGistId}
          autoSync={autoSync}
          setAutoSync={setAutoSync}
          lastSyncedAt={lastSyncedAt}
          userTemplates={userTemplates}
          userPhrases={userPhrases}
          addedWords={addedWords}
          setUserTemplates={setUserTemplates}
          setUserPhrases={setUserPhrases}
          setAddedWords={setAddedWords}
          tabs={tabs}
          closedTabs={closedTabs}
          setTabs={setTabs}
          setClosedTabs={setClosedTabs}
        />
      )}

      {/* Phone drawers: templates (left) & phrases (right) slide over the
          editor instead of sharing the screen with it, so the report fields
          keep the full width the rest of the time. */}
      {mobilePanel && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobilePanel(null)} />
          <div
            className={`absolute inset-y-0 ${mobilePanel === 'templates' ? 'left-0' : 'right-0'} w-[86vw] max-w-sm bg-white shadow-xl flex flex-col`}
          >
            <div className="flex items-center justify-between px-3 py-2.5 border-b border-slate-200 shrink-0">
              <span className="font-semibold text-slate-700">
                {mobilePanel === 'templates' ? 'Templates' : 'Phrases'}
              </span>
              <button
                className="text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded p-1.5"
                aria-label="Close"
                onClick={() => setMobilePanel(null)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="4" y1="4" x2="20" y2="20" />
                  <line x1="20" y1="4" x2="4" y2="20" />
                </svg>
              </button>
            </div>
            <div className="flex-1 min-h-0">
              {mobilePanel === 'templates' ? (
                <LeftPanel
                  templates={mergedTemplates}
                  userTemplates={userTemplates}
                  onSelectTemplate={handleSelectTemplate}
                  selected={selected}
                  openScope={openScope}
                  onOpenScopeChange={setOpenScope}
                  onDeleteUserTemplate={handleDeleteUserTemplate}
                  onRenameUserTemplate={handleRenameUserTemplate}
                  onDeleteUserRegion={handleDeleteUserRegion}
                  onDeleteUserModality={handleDeleteUserModality}
                  collapsed={false}
                  onToggleCollapsed={() => setMobilePanel(null)}
                />
              ) : (
                <RightPanel
                  premadePhrases={premadePhrases}
                  userPhrases={userPhrases}
                  openScope={openScope}
                  onInsertPhrase={handleInsertPhrase}
                  onSavePhrase={handleSavePhrase}
                  onDeleteUserPhrase={handleDeleteUserPhrase}
                  collapsed={false}
                  onToggleCollapsed={() => setMobilePanel(null)}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function mergeTemplateTrees(premade, user) {
  const result = structuredClone(premade);
  for (const modality of Object.keys(user)) {
    result[modality] = result[modality] || {};
    for (const region of Object.keys(user[modality])) {
      result[modality][region] = { ...(result[modality][region] || {}), ...user[modality][region] };
    }
  }
  return result;
}
