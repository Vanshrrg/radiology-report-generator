import { useEffect, useRef, useState } from 'react';
import LeftPanel from './components/LeftPanel.jsx';
import ReportEditor from './components/ReportEditor.jsx';
import RightPanel from './components/RightPanel.jsx';
import { useLocalStorage } from './hooks/useLocalStorage.js';
import { templates as premadeTemplates, phrases as premadePhrases } from './data/premadeData.js';
import { exportUserData, importUserData } from './utils/reportUtils.js';
import { modalityLabel, regionLabel } from './utils/labels.js';

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

export default function App() {
  const [userTemplates, setUserTemplates] = useLocalStorage('radiology.userTemplates', {});
  const [userPhrases, setUserPhrases] = useLocalStorage('radiology.userPhrases', {});

  // Draft autosave: the report being typed is kept in localStorage, not just
  // in React state, so an accidental refresh, tab close, browser crash or power
  // cut brings the text back instead of losing it. useLocalStorage writes on
  // every change, so at most the last keystroke is ever at risk.
  const [patientInfo, setPatientInfoRaw] = useLocalStorage('radiology.draft.patientInfo', {
    name: '',
    studyType: '',
  });
  const [fields, setFieldsRaw] = useLocalStorage('radiology.draft.fields', EMPTY_FIELDS);
  const [selected, setSelected] = useState(null);
  // Undo history: a stack of {fields, patientInfo} snapshots taken before each
  // change, so Ctrl+Z / the Undo button can step back through edits, template
  // loads, and clears alike. Checkpoints are debounced so a burst of typing
  // becomes one undo step instead of one per keystroke.
  // Persisted alongside the draft so undo still works after a reload.
  const [history, setHistory] = useLocalStorage('radiology.draft.history', []);
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
    setFieldsRaw(updater);
  };
  const setPatientInfo = updater => {
    checkpoint();
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
    setFieldsRaw(prev.fields);
    setPatientInfoRaw(prev.patientInfo);
  };

  // The listener is registered once ([] deps) so it must reach the latest
  // handleUndo via a ref — capturing it directly would freeze the closure on
  // the first render's (always-empty) history and Ctrl+Z would never undo
  // anything past that.
  const handleUndoRef = useRef(handleUndo);
  handleUndoRef.current = handleUndo;

  useEffect(() => {
    const onKeyDown = e => {
      if ((e.ctrlKey || e.metaKey) && !e.shiftKey && e.key.toLowerCase() === 'z') {
        e.preventDefault();
        handleUndoRef.current();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // "Saved" timestamp for the editor's autosave hint. Skipped on the first
  // render — restoring a draft isn't a save the user just made.
  const [savedAt, setSavedAt] = useState(null);
  const firstRenderRef = useRef(true);
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    setSavedAt(Date.now());
  }, [fields, patientInfo]);

  // Starts a blank report. Goes through setFields/setPatientInfo so it lands on
  // the undo stack — clearing by accident is recoverable with Ctrl+Z.
  const handleNewReport = () => {
    if (!window.confirm('Clear the current report and start a new one? (Undo can bring it back.)')) return;
    setFields(EMPTY_FIELDS);
    setPatientInfo({ name: '', studyType: '' });
    setSelected(null);
  };
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
  };

  const handleInsertPhrase = phrase => {
    editorRef.current?.insertAtCursor(phrase);
    setMobilePanel(null);
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
            onClick={() => exportUserData(userTemplates, userPhrases)}
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
          <input
            ref={fileInputRef}
            type="file"
            accept="application/json,.json"
            className="hidden"
            onChange={e => {
              const file = e.target.files?.[0];
              if (file) importUserData(file, setUserTemplates, setUserPhrases);
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
          onNewReport={handleNewReport}
          savedAt={savedAt}
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
