const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

const TEMPLATE_DIR = path.join(__dirname, '..', 'Template');
const OUT_DIR = process.env.OUT_DIR || path.join(__dirname, '..', 'scratchpad');

const TITLE_RE = /^(EMERGENCY\s+)?(LOW\s+DOSE\s+)?(TRIPLE\s+PHASE\s+)?(MDCT|CT|CTA|MRA|MRI|ULTRASOUND)\b.*$/;

function isTitleLine(line) {
  const trimmed = line.trim();
  if (!trimmed) return false;
  if (trimmed.includes(':')) return false;
  // must be mostly uppercase letters
  const letters = trimmed.replace(/[^A-Za-z]/g, '');
  if (letters.length < 4) return false;
  const upper = letters.replace(/[^A-Z]/g, '');
  if (upper.length / letters.length < 0.9) return false;
  return TITLE_RE.test(trimmed);
}

function normalizeTitle(title) {
  return title
    .replace(/\(.*?\)/g, '')
    .replace(/[-–—].*$/, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toUpperCase();
}

// crude PHI detectors
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

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  const files = fs.readdirSync(TEMPLATE_DIR).filter(f => f.endsWith('.docx'));
  const allGroups = {}; // normalizedTitle -> { sourceFile, entries: [] }

  for (const file of files) {
    const filePath = path.join(TEMPLATE_DIR, file);
    const entries = await extractFile(filePath);
    for (const entry of entries) {
      const key = `${file}::${entry.normalizedTitle}`;
      if (!allGroups[key]) {
        allGroups[key] = { sourceFile: file, title: entry.normalizedTitle, entries: [] };
      }
      allGroups[key].entries.push(entry);
    }
  }

  // Build review markdown, grouped by source file then by normalized title
  const byFile = {};
  for (const key of Object.keys(allGroups)) {
    const g = allGroups[key];
    if (!byFile[g.sourceFile]) byFile[g.sourceFile] = [];
    byFile[g.sourceFile].push(g);
  }

  let md = `# Template Review\n\nGenerated from ${files.length} docx files. For each group, pick which variant number(s) to keep by editing the "SELECTED:" line, or reply inline in chat with your picks.\n\n`;
  let groupCounter = 0;

  for (const file of Object.keys(byFile).sort()) {
    md += `\n---\n\n# FILE: ${file}\n`;
    const groups = byFile[file].sort((a, b) => a.title.localeCompare(b.title));
    for (const g of groups) {
      groupCounter++;
      md += `\n## [G${groupCounter}] ${g.title}  (${g.entries.length} variant${g.entries.length > 1 ? 's' : ''})\n`;
      md += `SELECTED: <!-- fill in variant number(s), e.g. 1 -->\n`;
      g.entries.forEach((entry, i) => {
        const realCase = looksLikeRealCase(entry.body);
        md += `\n### Variant ${i + 1}${realCase ? ' — REAL CASE DETECTED, genericized version shown below original' : ''}\n`;
        md += '```\n' + entry.body + '\n```\n';
        if (realCase) {
          md += `\n#### Variant ${i + 1} — genericized draft\n`;
          md += '```\n' + genericize(entry.body) + '\n```\n';
        }
      });
    }
  }

  const outPath = path.join(OUT_DIR, 'template-review.md');
  fs.writeFileSync(outPath, md, 'utf-8');
  console.log(`Wrote ${outPath}`);
  console.log(`Total groups: ${groupCounter}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
