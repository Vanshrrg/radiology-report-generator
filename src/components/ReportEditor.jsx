import { forwardRef, useImperativeHandle, useEffect, useRef, useState } from 'react';
import { formatReport, exportReportDocx } from '../utils/reportUtils.js';
import { HISTORY_STARTERS } from '../utils/historyStarters.js';

const MIN_HEIGHT = 44; // px, roughly one line + padding
// Fields grow with their content up to MAX_HEIGHT, then scroll internally —
// keeps a single long field from pushing every other field off-screen.
const MAX_HEIGHT = 320; // px
const DEFAULT_VALUE = { history: '', technique: '', comparison: 'None.', findings: '', impression: '' };

// Phrases are whole sentences/lines, so they get their own line ('block');
// history chips are sentence fragments typed inline, so they only get a space
// ('inline'). Without this, clicking a phrase produced runs like
// "...no focal lesion.LIVER: Normal size." with no separator at all.
function isSpace(ch) {
  return ch === ' ' || ch === '\n' || ch === '\r' || ch === '\t';
}

function separated(before, after, text, mode) {
  let out = text;
  const lead = out[0];
  const tail = out[out.length - 1];
  if (mode === 'block') {
    if (before.length && !isSpace(before[before.length - 1])) out = '\n' + out;
    if (after.length && !isSpace(after[0]) && !isSpace(tail)) out = out + '\n';
  } else {
    if (before.length && !isSpace(before[before.length - 1]) && !isSpace(lead)) out = ' ' + out;
    if (after.length && !isSpace(after[0]) && !isSpace(tail)) out = out + ' ';
  }
  return out;
}

function autoResize(el) {
  if (!el) return;
  el.style.height = 'auto';
  const next = Math.min(Math.max(el.scrollHeight, MIN_HEIGHT), MAX_HEIGHT);
  el.style.height = `${next}px`;
  el.style.overflowY = el.scrollHeight > MAX_HEIGHT ? 'auto' : 'hidden';
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
    onUndo,
    canUndo,
    onNewReport,
    savedAt,
    onRedo,
    canRedo,
    signature,
    setSignature,
  },
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

  const insertIntoField = (field, text, mode = 'inline') => {
    const el = textareaRefs[field].current;
    const current = fields[field] || '';
    if (!el) {
      const piece = separated(current, '', text, mode);
      setFields(f => ({ ...f, [field]: current + piece }));
      return;
    }
    const start = el.selectionStart ?? current.length;
    const end = el.selectionEnd ?? current.length;
    const piece = separated(current.slice(0, start), current.slice(end), text, mode);
    const next = current.slice(0, start) + piece + current.slice(end);
    setFields(f => ({ ...f, [field]: next }));
    // Focusing and moving the caret both make the browser scroll the element
    // into view, which yanks the page (and the field's own scroll) around when
    // a phrase is inserted. preventScroll stops the page-level jump; recording
    // and restoring both scroll positions covers the caret move as well, so the
    // text simply appears where it was typed.
    const container = scrollRef.current;
    const prevScrollTop = container?.scrollTop;
    const prevFieldScrollTop = el.scrollTop;
    requestAnimationFrame(() => {
      el.focus({ preventScroll: true });
      const pos = start + piece.length;
      el.setSelectionRange(pos, pos);
      el.scrollTop = prevFieldScrollTop;
      if (container && prevScrollTop != null) container.scrollTop = prevScrollTop;
    });
  };

  useImperativeHandle(ref, () => ({
    insertAtCursor(text) {
      insertIntoField(activeField, text, 'block');
    },
  }));

  const clearField = key => {
    setFields(f => ({ ...f, [key]: DEFAULT_VALUE[key] }));
  };

  // navigator.clipboard rejects when the page isn't in a secure context or the
  // permission is denied — unhandled, the button simply looked dead. Falls back
  // to the old execCommand path, and says so plainly if even that fails.
  const legacyCopy = text => {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } catch {
      ok = false;
    }
    document.body.removeChild(ta);
    return ok;
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
      signature,
    });
    let ok = false;
    try {
      await navigator.clipboard.writeText(report);
      ok = true;
    } catch {
      ok = legacyCopy(report);
    }
    if (!ok) {
      window.alert("Couldn't copy to the clipboard — your browser blocked it. Use Export as DOCX, or select the text and copy manually.");
      return;
    }
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
      signature,
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
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-3 md:p-4 flex flex-col gap-3"
        style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      >
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border border-slate-300 rounded px-2 py-1.5 md:py-1 text-base md:text-sm"
            placeholder="Patient name"
            value={patientInfo.name}
            onChange={e => setPatientInfo(p => ({ ...p, name: e.target.value }))}
          />
          <input
            className="border border-slate-300 rounded px-2 py-1.5 md:py-1 text-base md:text-sm"
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
                        onClick={() => insertIntoField('history', text, 'inline')}
                      >
                        {chipLabel}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            )}
            {/* Chrome only shows red squiggles and its right-click spelling
                suggestions when the field opts in explicitly; writingsuggestions
                turns on Chrome's inline writing suggestions on top of that. */}
            <textarea
              ref={textareaRefs[key]}
              className="border border-slate-300 rounded p-2 text-base md:text-sm resize-none overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-300"
              style={{ height: MIN_HEIGHT }}
              value={fields[key] || ''}
              onFocus={() => setActiveField(key)}
              onChange={e => {
                setFields(f => ({ ...f, [key]: e.target.value }));
                withScrollPreserved(() => autoResize(e.target));
              }}
              spellCheck={true}
              writingsuggestions="true"
              autoCorrect="on"
              autoCapitalize="sentences"
              lang="en-US"
            />
          </div>
        ))}

        {/* Sign-off appended to every report. Editable and remembered in this
            browser, so it isn't part of the report content that Clear/New wipe. */}
        <div className="flex flex-col shrink-0">
          <span className="text-sm font-semibold text-slate-700 mb-1">Signature</span>
          <input
            className="px-2 py-1.5 text-base md:text-sm italic bg-slate-50 border border-dashed border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={signature}
            placeholder="Your name, M.D."
            title="Appears at the end of every report — saved in this browser"
            onChange={e => setSignature(e.target.value)}
          />
        </div>

        {/* Directly under Signature, in normal flow — not pinned, since fields
            now stretch to full height instead of scrolling internally. */}
        <div className="flex items-center gap-2 flex-wrap pt-1">
          <button
            className="text-slate-600 hover:text-slate-900 hover:bg-slate-100 disabled:text-slate-300 disabled:hover:bg-transparent text-sm font-medium px-3 py-2 rounded"
            onClick={onUndo}
            disabled={!canUndo}
            title="Undo (Ctrl+Z)"
          >
            ↺ Undo
          </button>
          <button
            className="text-slate-600 hover:text-slate-900 hover:bg-slate-100 disabled:text-slate-300 disabled:hover:bg-transparent text-sm font-medium px-3 py-2 rounded"
            onClick={onRedo}
            disabled={!canRedo}
            title="Redo (Ctrl+Shift+Z or Ctrl+Y)"
          >
            ↻ Redo
          </button>
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
          <button
            className="text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-sm font-medium px-3 py-2 rounded"
            onClick={onNewReport}
            title="Clear the report and start a new one (undoable)"
          >
            New
          </button>
          {/* Makes the autosave visible — otherwise there's no way to tell the
              draft survives a refresh. */}
          <span className="text-xs text-slate-400 ml-auto" title="Your draft is saved in this browser and restored automatically">
            {savedAt ? `Draft saved ${new Date(savedAt).toLocaleTimeString()}` : 'Draft autosaved'}
          </span>
        </div>
      </div>
    </div>
  );
});

export default ReportEditor;
