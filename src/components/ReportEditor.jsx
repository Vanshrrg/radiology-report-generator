import { forwardRef, useImperativeHandle, useEffect, useRef, useState } from 'react';
import { formatReport, exportReportDocx } from '../utils/reportUtils.js';

const MIN_HEIGHT = 44; // px, roughly one line + padding
// Technique is usually short; findings/impression can legitimately run long,
// so give them more room to grow before they start scrolling internally.
const MAX_HEIGHT = { technique: 220, findings: 480, impression: 480 };

function autoResize(el, field) {
  if (!el) return;
  el.style.height = 'auto';
  const next = Math.min(Math.max(el.scrollHeight, MIN_HEIGHT), MAX_HEIGHT[field]);
  el.style.height = `${next}px`;
}

const ReportEditor = forwardRef(function ReportEditor(
  {
    patientInfo,
    setPatientInfo,
    fields,
    setFields,
    onSaveTemplate,
    onSaveTemplateAs,
    onDeleteCurrentTemplate,
    onClear,
  },
  ref,
) {
  const [activeField, setActiveField] = useState('findings');
  const [copied, setCopied] = useState(false);
  const textareaRefs = { technique: useRef(null), findings: useRef(null), impression: useRef(null) };

  useEffect(() => {
    autoResize(textareaRefs.technique.current, 'technique');
    autoResize(textareaRefs.findings.current, 'findings');
    autoResize(textareaRefs.impression.current, 'impression');
  }, [fields.technique, fields.findings, fields.impression]);

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
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleExportDocx = () => {
    exportReportDocx({
      patientName: patientInfo.name,
      patientDate: patientInfo.date,
      studyType: patientInfo.studyType,
      technique: fields.technique,
      findings: fields.findings,
      impression: fields.impression,
    });
  };

  const fieldConfig = [
    { key: 'technique', label: 'Technique' },
    { key: 'findings', label: 'Findings' },
    { key: 'impression', label: 'Impression' },
  ];

  return (
    <div className="h-full flex flex-col min-h-0">
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
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
        <div key={key} className="flex flex-col shrink-0">
          <label className="text-sm font-semibold text-slate-700 mb-1">{label}</label>
          <textarea
            ref={textareaRefs[key]}
            className="border border-slate-300 rounded p-2 text-sm resize-none overflow-y-auto focus:outline-none focus:ring-2 focus:ring-blue-300"
            style={{ height: MIN_HEIGHT }}
            value={fields[key] || ''}
            onFocus={() => setActiveField(key)}
            onChange={e => {
              setFields(f => ({ ...f, [key]: e.target.value }));
              autoResize(e.target, key);
            }}
          />
        </div>
      ))}

      </div>

      {/* Pinned so the primary actions stay reachable no matter how far the
          findings/impression fields grow. */}
      <div className="shrink-0 border-t border-slate-200 bg-white px-4 py-3 flex items-center gap-2 flex-wrap">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded"
          onClick={handleCopy}
        >
          {copied ? 'Copied!' : 'Copy Report'}
        </button>
        <button
          className="bg-slate-700 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded"
          onClick={handleExportDocx}
        >
          Export as DOCX
        </button>

        <div className="ml-auto flex items-center gap-2">
          <button
            className="text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-sm font-medium px-3 py-2 rounded"
            onClick={onSaveTemplate}
            title="Save to the template named in Study type"
          >
            Save
          </button>
          <button
            className="text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-sm font-medium px-3 py-2 rounded"
            onClick={onSaveTemplateAs}
            title="Save a copy under a new name"
          >
            Save As
          </button>
          <button
            className="text-red-600 hover:text-red-800 hover:bg-red-50 text-sm font-medium px-3 py-2 rounded"
            onClick={onDeleteCurrentTemplate}
            title="Delete the loaded template"
          >
            Delete
          </button>
          <span className="w-px h-5 bg-slate-200" />
          <button
            className="text-slate-500 hover:text-slate-800 hover:bg-slate-100 text-sm font-medium px-3 py-2 rounded"
            onClick={onClear}
            title="Clear all fields"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
});

export default ReportEditor;
