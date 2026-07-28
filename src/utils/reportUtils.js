import { Document, Packer, Paragraph, TextRun } from 'docx';

// Fixed reporting signature appended to every report. Not exposed as an
// editable field on purpose — it isn't part of the report content the user
// edits, it's the sign-off every report carries regardless.
export const REPORT_SIGNATURE = 'Waratchaya M.D.';

// Collapses blank lines within a field's own text so lines that belong
// together (e.g. a bulleted findings list) aren't spaced apart from each other.
function tighten(text) {
  return (text || '').split('\n').filter(line => line.trim() !== '').join('\n');
}

export function formatReport({ patientName, patientDate, history, technique, comparison, findings, impression }) {
  return `Patient: ${patientName || ''}          Date: ${patientDate || ''}

HISTORY
${tighten(history)}

TECHNIQUE
${tighten(technique)}

COMPARISON
${tighten(comparison)}

FINDINGS
${tighten(findings)}

IMPRESSION
${tighten(impression)}

${REPORT_SIGNATURE}`;
}

// Matches the source dictation templates' own layout: a plain "LABEL: content"
// paragraph (label bold, inline with the first line), with any further lines
// of that section as their own plain paragraphs — no headings, rulers, or footer.
function sectionParagraphs(label, body) {
  const lines = (body || '').split('\n');
  const firstLine = lines[0] || '';
  const paragraphs = [
    new Paragraph({
      children: [new TextRun({ text: `${label}: `, bold: true }), new TextRun(firstLine)],
    }),
  ];
  for (let i = 1; i < lines.length; i++) {
    paragraphs.push(new Paragraph({ children: [new TextRun(lines[i])] }));
  }
  return paragraphs;
}

// studyType is only used to name the downloaded file — it isn't printed in
// the document itself.
export async function exportReportDocx({
  studyType,
  patientName,
  patientDate,
  history,
  technique,
  comparison,
  findings,
  impression,
}) {
  const doc = new Document({
    sections: [
      {
        children: [
          new Paragraph({
            children: [
              new TextRun({ text: `Patient: ${patientName || ''}` }),
              new TextRun({ text: `          Date: ${patientDate || ''}` }),
            ],
          }),
          new Paragraph({ children: [] }),
          ...sectionParagraphs('HISTORY', history),
          new Paragraph({ children: [] }),
          ...sectionParagraphs('TECHNIQUE', technique),
          new Paragraph({ children: [] }),
          ...sectionParagraphs('COMPARISON', comparison),
          new Paragraph({ children: [] }),
          ...sectionParagraphs('FINDINGS', findings),
          new Paragraph({ children: [] }),
          ...sectionParagraphs('IMPRESSION', impression),
          new Paragraph({ children: [] }),
          new Paragraph({ children: [new TextRun(REPORT_SIGNATURE)] }),
        ],
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  const safeName = (studyType || 'report').replace(/[^\w\- ]/g, '').trim().replace(/\s+/g, '-') || 'report';
  downloadBlob(blob, `${safeName}.docx`);
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function countTemplates(templates) {
  let n = 0;
  for (const m of Object.values(templates || {})) {
    for (const region of Object.values(m || {})) n += Object.keys(region || {}).length;
  }
  return n;
}

function countPhrases(phrases) {
  return Object.values(phrases || {}).reduce((n, list) => n + (list?.length || 0), 0);
}

// Custom templates/phrases live in this browser's localStorage, so moving them
// to another machine means writing them out to a file and reading it back in.
export function exportUserData(userTemplates, userPhrases) {
  const templateCount = countTemplates(userTemplates);
  const phraseCount = countPhrases(userPhrases);
  if (templateCount === 0 && phraseCount === 0) {
    window.alert('Nothing to back up yet — you have no saved templates or phrases.');
    return;
  }
  const payload = { version: 1, savedAt: new Date().toISOString(), templates: userTemplates, phrases: userPhrases };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const stamp = new Date().toISOString().slice(0, 10);
  downloadBlob(blob, `radiology-backup-${stamp}.json`);
}

export function importUserData(file, setUserTemplates, setUserPhrases) {
  const reader = new FileReader();
  reader.onload = () => {
    let data;
    try {
      data = JSON.parse(reader.result);
    } catch {
      window.alert("That file isn't valid backup data — it couldn't be read as JSON.");
      return;
    }
    if (!data || (!data.templates && !data.phrases)) {
      window.alert("That file doesn't look like a radiology backup — no templates or phrases found in it.");
      return;
    }
    if (data.templates) setUserTemplates(prev => mergeTemplates(prev, data.templates));
    if (data.phrases) setUserPhrases(prev => mergePhrases(prev, data.phrases));
    window.alert(
      `Restored ${countTemplates(data.templates)} template(s) and ${countPhrases(data.phrases)} phrase(s). ` +
        'Anything already saved here was kept.',
    );
  };
  reader.onerror = () => window.alert("Couldn't read that file.");
  reader.readAsText(file);
}

// Imported entries win on a name clash; everything already saved is preserved.
function mergeTemplates(target, source) {
  const result = structuredClone(target || {});
  for (const [modality, regions] of Object.entries(source)) {
    result[modality] = result[modality] || {};
    for (const [region, named] of Object.entries(regions || {})) {
      result[modality][region] = { ...(result[modality][region] || {}), ...named };
    }
  }
  return result;
}

function mergePhrases(target, source) {
  const result = { ...(target || {}) };
  for (const [key, list] of Object.entries(source)) {
    result[key] = Array.from(new Set([...(result[key] || []), ...(list || [])]));
  }
  return result;
}

