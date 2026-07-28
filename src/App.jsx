import { useRef, useState } from 'react';
import LeftPanel from './components/LeftPanel.jsx';
import ReportEditor from './components/ReportEditor.jsx';
import RightPanel from './components/RightPanel.jsx';
import { useLocalStorage } from './hooks/useLocalStorage.js';
import { templates as premadeTemplates, phrases as premadePhrases } from './data/premadeData.js';
import { exportUserData, importUserData } from './utils/reportUtils.js';

const EMPTY_FIELDS = { technique: '', findings: '', impression: '' };

export default function App() {
  const [userTemplates, setUserTemplates] = useLocalStorage('radiology.userTemplates', {});
  const [userPhrases, setUserPhrases] = useLocalStorage('radiology.userPhrases', {});

  const [patientInfo, setPatientInfo] = useState({ name: '', date: '', studyType: '' });
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
    setFields({ technique: data.technique || '', findings: data.findings || '', impression: data.impression || '' });
    setPatientInfo(p => ({ ...p, studyType: name }));
  };

  const handleInsertPhrase = phrase => {
    editorRef.current?.insertAtCursor(phrase);
  };

  // Clears the report being written; leaves the left menu where it is so you
  // can start a fresh report in the same region.
  const handleClear = () => {
    setFields(EMPTY_FIELDS);
    setPatientInfo({ name: '', date: '', studyType: '' });
    setSelected(null);
  };

  const saveTemplateTo = (modality, region, name) => {
    setUserTemplates(prev => ({
      ...prev,
      [modality]: {
        ...(prev[modality] || {}),
        [region]: {
          ...((prev[modality] || {})[region] || {}),
          [name]: { ...fields },
        },
      },
    }));
    setSelected({ modality, region, name });
    setOpenScope({ modality, region });
    setPatientInfo(p => ({ ...p, studyType: name }));
  };

  // The Study type field doubles as the template's name. If it's been edited
  // since the template was loaded, saving renames it everywhere (left menu,
  // right panel) instead of leaving a stale duplicate under the old name.
  const renameIfNeeded = (modality, region, newName) => {
    if (
      selected &&
      selected.modality === modality &&
      selected.region === region &&
      selected.name !== newName &&
      userTemplates[modality]?.[region]?.[selected.name]
    ) {
      setUserTemplates(prev => {
        const next = structuredClone(prev);
        delete next[modality][region][selected.name];
        return next;
      });
    }
  };

  // Save: updates the currently loaded template in place when possible,
  // renaming it if the Study type field has been changed.
  const handleSaveTemplate = () => {
    const modality = selected?.modality || openScope?.modality;
    const region = selected?.region || openScope?.region;
    if (!modality || !region) {
      window.alert('Open a modality & region on the left (or load a template) before saving.');
      return;
    }
    const name = patientInfo.studyType.trim();
    if (!name) {
      window.alert('Enter a name in the Study type field before saving.');
      return;
    }
    renameIfNeeded(modality, region, name);
    saveTemplateTo(modality, region, name);
  };

  // Save As: saves a copy under a new name in the same region, leaving the
  // original untouched. To file it elsewhere, open that region on the left first.
  const handleSaveTemplateAs = () => {
    const modality = selected?.modality || openScope?.modality;
    const region = selected?.region || openScope?.region;
    if (!modality || !region) {
      window.alert('Open a modality & region on the left before saving.');
      return;
    }
    const name = window.prompt('Save as new template named:', patientInfo.studyType.trim());
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
      setPatientInfo(p => ({ ...p, studyType: newName }));
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

      <div className="flex-1 grid grid-cols-[260px_1fr_300px] min-h-0">
        <LeftPanel
          templates={mergeTemplateTrees(premadeTemplates, userTemplates)}
          userTemplates={userTemplates}
          onSelectTemplate={handleSelectTemplate}
          selected={selected}
          openScope={openScope}
          onOpenScopeChange={setOpenScope}
          onDeleteUserTemplate={handleDeleteUserTemplate}
          onRenameUserTemplate={handleRenameUserTemplate}
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
          onClear={handleClear}
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
