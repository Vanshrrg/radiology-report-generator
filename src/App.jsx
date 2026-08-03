import { useRef, useState } from 'react';
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

  const [patientInfo, setPatientInfo] = useState({ name: '', studyType: '' });
  const [fields, setFields] = useState(EMPTY_FIELDS);
  const [selected, setSelected] = useState(null);
  // Which modality/region is expanded in the left menu — the phrase list is
  // scoped to match it.
  const [openScope, setOpenScope] = useState(null);

  const editorRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleSelectTemplate = (modality, region, name, data) => {
    setSelected({ modality, region, name });
    setOpenScope({ modality, region });
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

  return (
    <div className="h-screen flex flex-col">
      <header className="px-4 py-3 bg-slate-900 text-white flex items-center justify-between">
        <h1 className="text-lg font-semibold">Radiology Report Generator</h1>
        {/* Saved templates/phrases only live in this browser, so these are the
            way to carry them to another PC. Kept low-key — they're occasional. */}
        <div className="flex items-center gap-1 text-xs">
          <button
            className="text-slate-400 hover:text-white hover:bg-slate-800 px-2 py-1 rounded"
            onClick={() => exportUserData(userTemplates, userPhrases)}
            title="Download your saved templates & phrases as a backup file"
          >
            Back up
          </button>
          <button
            className="text-slate-400 hover:text-white hover:bg-slate-800 px-2 py-1 rounded"
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
        </div>
      </header>

      {/* grid-rows-[minmax(0,1fr)] forces the single row to the container's
          actual height instead of auto-sizing to content — required so each
          panel's own h-full/overflow-y-auto can scroll independently now that
          the editor's fields stretch instead of capping their own height. */}
      <div className="flex-1 grid grid-cols-[260px_1fr_300px] grid-rows-[minmax(0,1fr)] min-h-0">
        <LeftPanel
          templates={mergeTemplateTrees(premadeTemplates, userTemplates)}
          userTemplates={userTemplates}
          onSelectTemplate={handleSelectTemplate}
          selected={selected}
          openScope={openScope}
          onOpenScopeChange={setOpenScope}
          onDeleteUserTemplate={handleDeleteUserTemplate}
          onRenameUserTemplate={handleRenameUserTemplate}
          onDeleteUserRegion={handleDeleteUserRegion}
          onDeleteUserModality={handleDeleteUserModality}
        />
        <ReportEditor
          ref={editorRef}
          patientInfo={patientInfo}
          setPatientInfo={setPatientInfo}
          fields={fields}
          setFields={setFields}
          onSaveTemplate={handleSaveTemplate}
          onSaveTemplateAs={handleSaveTemplateAs}
          onDeleteCurrentTemplate={handleDeleteCurrentTemplate}
        />
        <RightPanel
          premadePhrases={premadePhrases}
          userPhrases={userPhrases}
          openScope={openScope}
          onInsertPhrase={handleInsertPhrase}
          onSavePhrase={handleSavePhrase}
          onDeleteUserPhrase={handleDeleteUserPhrase}
        />
      </div>
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
