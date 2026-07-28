const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

const TITLE_RE = /^(EMERGENCY\s+)?(LOW\s+DOSE\s+)?(TRIPLE\s+PHASE\s+)?(MDCT|CT|CTA|MRA|MRI|ULTRASOUND)\b.*$/;

function isTitleLine(line) {
  const trimmed = line.trim();
  if (!trimmed) return false;
  if (trimmed.includes(':')) return false;
  const letters = trimmed.replace(/[^A-Za-z]/g, '');
  if (letters.length < 4) return false;
  const upper = letters.replace(/[^A-Z]/g, '');
  if (upper.length / letters.length < 0.9) return false;
  return TITLE_RE.test(trimmed);
}

function normalizeTitle(title) {
  return title
    .replace(/\(.*?\)/g, '')
    .replace(/\s[-–—=]{1,2}\s.*$/, '')
    .replace(/={2,}.*$/, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toUpperCase();
}

const AGE_RE = /\b\d{1,3}[- ]?(year|y\/o|yo|yrs?)\b/i;
const DATE_RE = /\b\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}\b/;
const HN_RE = /\bHN[:.]?\s*\d+/i;
const NAME_SIGNOFF_RE = /M\.?D\.?\s*$/;

function looksLikeRealCase(text) {
  return AGE_RE.test(text) || DATE_RE.test(text) || HN_RE.test(text) || NAME_SIGNOFF_RE.test(text);
}

function genericize(text) {
  return text
    .replace(AGE_RE, '[age]-year-old')
    .replace(DATE_RE, '[date]')
    .replace(HN_RE, 'HN [redacted]')
    .split('\n')
    .filter(line => !NAME_SIGNOFF_RE.test(line.trim()))
    .join('\n');
}

const THAI_RE = /[฀-๿]/;
const EMOJI_RE = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu;

// Strips Thai-script lines (stray clinician annotations / patient names left in
// the dictation exports) and emoji artifacts. Applied to every entry, not just
// ones flagged as real cases, since these can appear in otherwise-blank templates.
function stripNoise(text) {
  return text
    .split('\n')
    .filter(line => !THAI_RE.test(line))
    .join('\n')
    .replace(EMOJI_RE, '')
    .replace(/[ \t]{2,}/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

async function extractFile(filePath) {
  const { value: text } = await mammoth.extractRawText({ path: filePath });
  const lines = text.split('\n');

  const entries = [];
  let current = null;

  for (const rawLine of lines) {
    const line = rawLine.replace(/\r/g, '');
    if (isTitleLine(line)) {
      if (current) entries.push(current);
      current = { title: line.trim(), lines: [] };
    } else if (current) {
      current.lines.push(line);
    }
  }
  if (current) entries.push(current);

  return entries.map(e => ({
    title: e.title,
    normalizedTitle: normalizeTitle(e.title),
    body: e.lines.join('\n').trim(),
  })).filter(e => e.body.length > 20);
}

async function extractAll(templateDir) {
  const files = fs.readdirSync(templateDir).filter(f => f.endsWith('.docx'));
  const groups = {}; // sourceFile -> { normalizedTitle -> entries[] }

  for (const file of files) {
    const filePath = path.join(templateDir, file);
    const entries = await extractFile(filePath);
    if (!groups[file]) groups[file] = {};
    for (const entry of entries) {
      if (!groups[file][entry.normalizedTitle]) groups[file][entry.normalizedTitle] = [];
      groups[file][entry.normalizedTitle].push(entry);
    }
  }
  return groups;
}

module.exports = { extractAll, isTitleLine, normalizeTitle, looksLikeRealCase, genericize, stripNoise };
