import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { formatReport } from '../utils/reportUtils.js';

const ReportEditor = forwardRef(function ReportEditor({ patientInfo, setPatientInfo, fields, setFields }, ref) {
  const [activeField, setActiveField] = useState('findings');
  const textareaRefs = { technique: useRef(null), findings: useRef(null), impression: useRef(null) };

  useImperativeHandle(ref, () => ({
    insertAtCursor(text) {
      const field = activeField;
      const el = textareaRefs[field].current;
      const current = fields[field] || '';
      if (!el) {
        setFields(f => ({ ...f, [field]: (current ? current + ' ' : '') + text }));
        return;
      }
      const start = el.selectionStart ?? current.length;
      const end = el.selectionEnd ?? current.length;
      const next = current.slice(0, start) + text + current.slice(end);
      setFields(f => ({ ...f, [field]: next }));
      requestAnimationFrame(() => {
        el.focus();
        const pos = start + text.length;
        el.setSelectionRange(pos, pos);
      });
    },
  }));

  const handleCopy = async () => {
    const report = formatReport({
      patientName: patientInfo.name,
      patientDate: patientInfo.date,
      studyType: patientInfo.studyType,
      technique: fields.technique,
      findings: fields.findings,
      impression: fields.impression,
    });
    await navigator.clipboard.writeText(report);
  };

  const fieldConfig = [
    { key: 'technique', label: 'Technique' },
    { key: 'findings', label: 'Findings' },
    { key: 'impression', label: 'Impression' },
  ];

  return (
    <div className="h-full flex flex-col overflow-y-auto p-4 gap-3">
      <div className="grid grid-cols-3 gap-2">
        <input
          className="border border-slate-300 rounded px-2 py-1 text-sm"
          placeholder="Patient name"
          value={patientInfo.name}
          onChange={e => setPatientInfo(p => ({ ...p, name: e.target.value }))}
        />
        <input
          className="border border-slate-300 rounded px-2 py-1 text-sm"
          placeholder="Date"
          value={patientInfo.date}
          onChange={e => setPatientInfo(p => ({ ...p, date: e.target.value }))}
        />
        <input
          className="border border-slate-300 rounded px-2 py-1 text-sm"
          placeholder="Study type"
          value={patientInfo.studyType}
          onChange={e => setPatientInfo(p => ({ ...p, studyType: e.target.value }))}
        />
      </div>

      {fieldConfig.map(({ key, label }) => (
        <div key={key} className="flex flex-col flex-1 min-h-[100px]">
          <label className="text-sm font-semibold text-slate-700 mb-1">{label}</label>
          <textarea
            ref={textareaRefs[key]}
            className="flex-1 border border-slate-300 rounded p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={fields[key] || ''}
            onFocus={() => setActiveField(key)}
            onChange={e => setFields(f => ({ ...f, [key]: e.target.value }))}
          />
        </div>
      ))}

      <button
        className="self-start bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded"
        onClick={handleCopy}
      >
        Copy Report
      </button>
    </div>
  );
});

export default ReportEditor;
