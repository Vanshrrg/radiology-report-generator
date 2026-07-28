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

const AGE_RE = /\b\d{1,3}[- ]?(year|y\/o|yo|yrs?)[- ]old\b|\b\d{1,3}[- ](year|y\/o|yo|yrs?)\b/gi;
const DATE_RE = /\b\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}\b/g;
const HN_RE = /\bHN[:.]?\s*\d+/gi;
const NAME_SIGNOFF_RE = /M\.?D\.?\s*$/;
// A standalone line that's a radiologist sign-off rather than a finding: either
// "Name M.D." or two-plus co-signing names chained with "/" and/or "," in any
// mix ("Waratchaya/ Siri-on, M.D.", "Natchalita,Waratchaya,/Piyapron,M.D."),
// with no other sentence punctuation. Findings/impressions always end in a
// period or have a colon-labeled subheader, so this doesn't collide with them.
const SIGNOFF_NAME = '[A-Z][a-zA-Z-]+';
const SIGNOFF_SEP = '[\\s,/]+';
const SIGNOFF_LINE_RE = new RegExp(
  `^(${SIGNOFF_NAME}(${SIGNOFF_SEP}${SIGNOFF_NAME})+\\s*,?\\s*(M\\.?D\\.?)?` +
    `|${SIGNOFF_NAME}\\s*,?\\s*M\\.?D\\.?)\\.?$`,
);
// Belt-and-suspenders: this specific radiologist's name gets dropped outright
// even if a line's punctuation doesn't match the general pattern above.
const KNOWN_SIGNOFF_NAME_RE = /waratchaya/i;
// A different sign-off style used elsewhere in the source: role-labeled
// co-signers, e.g. "Reporting: Aphittha, Thamonporn, M.D.".
const ROLE_SIGNOFF_LINE_RE = /^(reporting|learning|attending|reported by|read by)\s*:\s*.+M\.?D\.?\.?\s*$/i;
// Bare divider lines ("—----------") left over from a signature block.
const DIVIDER_LINE_RE = /^[-—_]{3,}$/;
// A patient-name stamp line, e.g. "Mr. HTET SHAR OO MYANMAR" — a title
// followed by two or more ALL-CAPS words. Findings/impressions are written in
// normal sentence case, so this shape doesn't occur in genuine content.
const PATIENT_NAME_LINE_RE = /^(Mr|Mrs|Ms|Miss|Master)\.?\s+[A-Z]+(\s+[A-Z]+)+\s*$/;

function looksLikeRealCase(text) {
  return AGE_RE.test(text) || DATE_RE.test(text) || HN_RE.test(text) || NAME_SIGNOFF_RE.test(text);
}

// Removes patient-identifying/case-specific fragments (ages, dates, HN numbers)
// entirely rather than leaving placeholder text like "[date]" or "HN [redacted]"
// behind, then tidies up the punctuation left over from the removal.
function genericize(text) {
  return text
    .replace(AGE_RE, '')
    .replace(DATE_RE, '')
    .replace(HN_RE, '')
    .replace(/\(\s*\)/g, '')
    .replace(/,\s*,/g, ',')
    .replace(/\(\s*,/g, '(')
    .replace(/,\s*\)/g, ')')
    .replace(/\s+,/g, ',')
    .replace(/,\s*\./g, '.')
    .replace(/^\s*,\s*/gm, '')
    .replace(/\bon\s*\./g, '.')
    .replace(/\bon\s*$/gm, '')
    .replace(/[ \t]{2,}/g, ' ')
    .replace(/\n{3,}/g, '\n\n');
}

const THAI_RE = /[฀-๿]/;
const EMOJI_RE = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu;

// Strips Thai-script lines, emoji artifacts, and radiologist sign-off lines
// (e.g. "Waratchaya M.D.", "Waratchaya/ Siriwan"). Applied to every entry
// unconditionally — not just ones flagged as a real case — since sign-off
// lines appear mid-document in otherwise-blank templates too.
function stripNoise(text) {
  return text
    .split('\n')
    .filter(line => {
      const trimmed = line.trim();
      if (THAI_RE.test(trimmed)) return false;
      if (SIGNOFF_LINE_RE.test(trimmed)) return false;
      if (KNOWN_SIGNOFF_NAME_RE.test(trimmed)) return false;
      if (ROLE_SIGNOFF_LINE_RE.test(trimmed)) return false;
      if (DIVIDER_LINE_RE.test(trimmed)) return false;
      if (PATIENT_NAME_LINE_RE.test(trimmed)) return false;
      return true;
    })
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
