import { forwardRef, useImperativeHandle, useEffect, useRef, useState } from 'react';
import { formatReport, exportReportDocx, REPORT_SIGNATURE } from '../utils/reportUtils.js';
import { HISTORY_STARTERS } from '../utils/historyStarters.js';

const MIN_HEIGHT = 44; // px, roughly one line + padding
// Fields grow with their content up to MAX_HEIGHT, then scroll internally —
// keeps a single long field from pushing every other field off-screen.
const MAX_HEIGHT = 320; // px
const DEFAULT_VALUE = { history: '', technique: '', comparison: 'None.', findings: '', impression: '' };

function autoResize(el) {
  if (!el) return;
  el.style.height = 'auto';
  const next = Math.min(Math.max(el.scrollHeight, MIN_HEIGHT), MAX_HEIGHT);
  el.style.height = `${next}px`;
  el.style.overflowY = el.scrollHeight > MAX_HEIGHT ? 'auto' : 'hidden';
}

const ReportEditor = forwardRef(function ReportEditor(
  { patientInfo, setPatientInfo, fields, setFields, onSaveTemplate, onSaveTemplateAs, onDeleteCurrentTemplate },
  ref,
) {
  const [activeField, setActiveField] = useState('findings');
  const [copied, setCopied] = useState(false);
  const scrollRef = useRef(null);
  const textareaRefs = {
    history: useRef(null),
    technique: useRef(null),
    comparison: useRef(null),
    findings: useRef(null),
    impression: useRef(null),
  };

  // Resizing a textarea to 'auto' first (to shrink-to-fit) then back up can
  // momentarily shrink the whole scrollable area below the current
  // scrollTop, which makes the browser clamp it back near the top — and it
  // never recovers once heights grow back. Recording/restoring scrollTop
  // around any resize keeps the view from jumping while typing.
  const withScrollPreserved = fn => {
    const container = scrollRef.current;
    const prevScrollTop = container?.scrollTop;
    fn();
    if (container && prevScrollTop != null) container.scrollTop = prevScrollTop;
  };

  useEffect(() => {
    withScrollPreserved(() => {
      Object.values(textareaRefs).forEach(r => autoResize(r.current));
    });
  }, [fields.history, fields.technique, fields.comparison, fields.findings, fields.impression]);

  const insertIntoField = (field, text) => {
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
  };

  useImperativeHandle(ref, () => ({
    insertAtCursor(text) {
      insertIntoField(activeField, text);
    },
  }));

  const clearField = key => {
    setFields(f => ({ ...f, [key]: DEFAULT_VALUE[key] }));
  };

  const handleCopy = async () => {
    const report = formatReport({
      studyType: patientInfo.studyType,
      patientName: patientInfo.name,
      history: fields.history,
      technique: fields.technique,
      comparison: fields.comparison,
      findings: fields.findings,
      impression: fields.impression,
    });
    await navigator.clipboard.writeText(report);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleExportDocx = () => {
    exportReportDocx({
      studyType: patientInfo.studyType,
      patientName: patientInfo.name,
      history: fields.history,
      technique: fields.technique,
      comparison: fields.comparison,
      findings: fields.findings,
      impression: fields.impression,
    });
  };

  const fieldConfig = [
    { key: 'history', label: 'History' },
    { key: 'technique', label: 'Technique' },
    { key: 'comparison', label: 'Comparison' },
    { key: 'findings', label: 'Findings' },
    { key: 'impression', label: 'Impression' },
  ];

  return (
    <div className="h-full flex flex-col min-h-0">
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border border-slate-300 rounded px-2 py-1 text-sm"
            placeholder="Patient name"
            value={patientInfo.name}
            onChange={e => setPatientInfo(p => ({ ...p, name: e.target.value }))}
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
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="text-[11px] text-slate-400 hover:text-red-600 hover:bg-red-50 px-1.5 py-0.5 rounded border border-slate-200"
                  title={`Clear ${label}`}
                  onClick={() => clearField(key)}
                >
                  Clear
                </button>
                <label className="text-sm font-semibold text-slate-700">{label}</label>
              </div>
            </div>
            {key === 'history' && (
              <div className="flex flex-wrap gap-x-3 gap-y-1 mb-1">
                {HISTORY_STARTERS.map(({ group, items }) => (
                  <div key={group} className="flex items-center gap-1 flex-wrap">
                    <span className="text-[11px] text-slate-400">{group}:</span>
                    {items.map(({ label: chipLabel, text }) => (
                      <button
                        key={chipLabel}
                        type="button"
                        className="text-xs bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-700 px-2 py-0.5 rounded-full border border-slate-200"
                        title={`Insert "${text.trim()}"`}
                        onClick={() => insertIntoField('history', text)}
                      >
                        {chipLabel}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            )}
            <textarea
              ref={textareaRefs[key]}
              className="border border-slate-300 rounded p-2 text-sm resize-none overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-300"
              style={{ height: MIN_HEIGHT }}
              value={fields[key] || ''}
              onFocus={() => setActiveField(key)}
              onChange={e => {
                setFields(f => ({ ...f, [key]: e.target.value }));
                withScrollPreserved(() => autoResize(e.target));
              }}
              spellCheck="true"
              lang="en"
            />
          </div>
        ))}

        {/* Fixed sign-off appended to every report — shown so it's clear it's
            included, but it isn't an editable field. */}
        <div className="flex flex-col shrink-0">
          <span className="text-sm font-semibold text-slate-700 mb-1">Signature</span>
          <div className="px-2 py-1.5 text-sm text-slate-500 italic bg-slate-50 border border-dashed border-slate-200 rounded">
            {REPORT_SIGNATURE}
          </div>
        </div>

        {/* Directly under Signature, in normal flow — not pinned, since fields
            now stretch to full height instead of scrolling internally. */}
        <div className="flex items-center gap-2 flex-wrap pt-1">
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
          <button
            className="text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-sm font-medium px-3 py-2 rounded"
            onClick={onSaveTemplate}
            title="Save changes to the loaded template"
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
        </div>
      </div>
    </div>
  );
});

export default ReportEditor;
