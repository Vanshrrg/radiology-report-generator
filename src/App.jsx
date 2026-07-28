import { useRef, useState } from 'react';
import LeftPanel from './components/LeftPanel.jsx';
import ReportEditor from './components/ReportEditor.jsx';
import RightPanel from './components/RightPanel.jsx';
import { useLocalStorage } from './hooks/useLocalStorage.js';
import { templates as premadeTemplates, phrases as premadePhrases } from './data/premadeData.js';
import { exportUserData, importUserData } from './utils/reportUtils.js';
import { modalityLabel, regionLabel } from './utils/labels.js';

const EMPTY_FIELDS = { technique: '', findings: '', impression: '' };

export default function App() {
  const [userTemplates, setUserTemplates] = useLocalStorage('radiology.userTemplates', {});
  const [userPhrases, setUserPhrases] = useLocalStorage('radiology.userPhrases', {});

  const [patientInfo, setPatientInfo] = useState({ name: '', date: '', studyType: '' });
  const [fields, setFields] = useState(EMPTY_FIELDS);
  const [selected, setSelected] = useState(null);

  const editorRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleSelectTemplate = (modality, region, name, data) => {
    setSelected({ modality, region, name });
    setFields({ technique: data.technique || '', findings: data.findings || '', impression: data.impression || '' });
    setPatientInfo(p => ({ ...p, studyType: `${modalityLabel(modality)} — ${regionLabel(region)} — ${name}` }));
  };

  const handleInsertPhrase = phrase => {
    editorRef.current?.insertAtCursor(phrase);
  };

  const handleClear = () => {
    setFields(EMPTY_FIELDS);
    setPatientInfo({ name: '', date: '', studyType: '' });
    setSelected(null);
  };

  const handleSaveTemplate = () => {
    const modality = window.prompt('Modality key (e.g. ct, mri, us, xray):', selected?.modality || 'ct');
    if (!modality) return;
    const region = window.prompt('Region key (e.g. chest, abdomen):', selected?.region || 'abdomen');
    if (!region) return;
    const name = window.prompt('Template name:');
    if (!name) return;
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
  };

  const handleSavePhrase = () => {
    const modality = window.prompt('Modality key (e.g. ct, mri, us, xray):', selected?.modality || 'ct');
    if (!modality) return;
    const region = window.prompt('Region key (e.g. chest, abdomen):', selected?.region || 'abdomen');
    if (!region) return;
    const phrase = window.prompt('Phrase text:');
    if (!phrase) return;
    const key = `${modality}.${region}`;
    setUserPhrases(prev => ({ ...prev, [key]: [...(prev[key] || []), phrase] }));
  };

  const handleDeleteUserTemplate = (modality, region, name) => {
    setUserTemplates(prev => {
      const next = structuredClone(prev);
      delete next?.[modality]?.[region]?.[name];
      return next;
    });
  };

  const handleDeleteUserPhrase = (key, phrase) => {
    setUserPhrases(prev => ({ ...prev, [key]: (prev[key] || []).filter(p => p !== phrase) }));
  };

  return (
    <div className="h-screen flex flex-col">
      <header className="flex items-center justify-between px-4 py-3 bg-slate-900 text-white">
        <h1 className="text-lg font-semibold">Radiology Report Generator</h1>
        <div className="flex gap-2">
          <button
            className="text-xs font-medium bg-slate-700 hover:bg-slate-600 px-3 py-1.5 rounded"
            onClick={() => exportUserData(userTemplates, userPhrases)}
          >
            Export
          </button>
          <button
            className="text-xs font-medium bg-slate-700 hover:bg-slate-600 px-3 py-1.5 rounded"
            onClick={() => fileInputRef.current?.click()}
          >
            Import
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="application/json"
            className="hidden"
            onChange={e => {
              const file = e.target.files?.[0];
              if (file) importUserData(file, setUserTemplates, setUserPhrases);
              e.target.value = '';
            }}
          />
          <button
            className="text-xs font-medium bg-red-700 hover:bg-red-600 px-3 py-1.5 rounded"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </header>

      <div className="flex-1 grid grid-cols-[260px_1fr_300px] min-h-0">
        <LeftPanel
          templates={mergeTemplateTrees(premadeTemplates, userTemplates)}
          onSelectTemplate={handleSelectTemplate}
          selected={selected}
        />
        <ReportEditor
          ref={editorRef}
          patientInfo={patientInfo}
          setPatientInfo={setPatientInfo}
          fields={fields}
          setFields={setFields}
        />
        <RightPanel
          premadeTemplates={premadeTemplates}
          userTemplates={userTemplates}
          premadePhrases={premadePhrases}
          userPhrases={userPhrases}
          onSelectTemplate={handleSelectTemplate}
          onInsertPhrase={handleInsertPhrase}
          onSaveTemplate={handleSaveTemplate}
          onSavePhrase={handleSavePhrase}
          onDeleteUserTemplate={handleDeleteUserTemplate}
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
