// Rebuilds ct.abdomen as a disease-indexed menu instead of a scan-type list.
// Every excerpt below is real dictated text pulled from Template/Abdo.docx
// (via the shared extractor), not authored/fabricated — each spec just says
// which real entry and which bullet/paragraph within it to use.
const fs = require('fs');
const path = require('path');
const { extractAll, stripNoise, genericize, looksLikeRealCase } = require('./lib/extract.cjs');
const { parseSections } = require('./build-data.cjs');

const TEMPLATE_DIR = path.join(__dirname, '..', 'Template');
const PREMADE_FILE = path.join(__dirname, '..', 'src', 'data', 'premadeData.js');

// A generic, non-case-specific CT whole-abdomen technique line (shared across
// all disease templates in this region — technique doesn't vary by disease).
const GENERIC_TECHNIQUE =
  'Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.';

function pickImpressionBullets(impression, re) {
  return impression
    .split(/\n+/)
    .map(l => l.replace(/^-\s*/, '').trim())
    .filter(l => re.test(l))
    .join('\n');
}

function pickFindingsParagraphs(findings, re) {
  return findings
    .split(/\n{2,}/)
    .map(p => p.trim())
    .filter(p => re.test(p))
    .join('\n\n');
}

// { name, entry: index into the harvested entries array, impression: regex,
//   findings: regex } — entry indices refer to the deterministic extraction
// order produced by extractAll() over Abdo.docx (excluding kidney/liver titles).
const DISEASE_SPECS = [
  {
    name: 'Hepatocellular Carcinoma (HCC)',
    entry: 22,
    impression: /HCC|cirrhosis|fatty liver/i,
    findings: /HCC|hepatocellular|hepatic lobe|liver cirrhosis|fatty liver/i,
  },
  {
    name: 'Cholangiocarcinoma',
    entry: 28,
    impression: /cholangiocarcinoma/i,
    findings: /cholangiocarcinoma|IHD dilatation/i,
  },
  {
    name: 'Liver Cirrhosis with Portal Hypertension',
    entry: 23,
    impression: /cirrhosis|portal hypertension|HCC/i,
    findings: /cirrho|portal hypertension|varices/i,
  },
  {
    name: 'Hepatic Cyst',
    entry: 2,
    impression: /liver cyst/i,
    findings: /liver cyst|hepatic.*cyst/i,
  },
  {
    name: 'Cholelithiasis / Cholecystitis',
    entry: 7,
    impression: /gallstone|cholecystitis/i,
    findings: /gallstone|cholecystitis|gallbladder/i,
  },
  {
    name: 'Acute Pancreatitis',
    entry: 5,
    impression: /pancrea|necrotic|ascites|^#/im,
    findings: /pancrea/i,
  },
  {
    name: 'Splenomegaly',
    entry: 18,
    impression: /splenomegaly/i,
    findings: /spleen|splenomegaly/i,
  },
  {
    name: 'Splenic Lymphangioma',
    entry: 16,
    impression: /lymphangioma/i,
    findings: /spleen|lymphangioma/i,
  },
  {
    name: 'Adrenal Nodule / Metastasis',
    entry: 22,
    impression: /adrenal/i,
    findings: /adrenal/i,
  },
  {
    name: 'Renal Cyst',
    entry: 4,
    impression: /renal cyst/i,
    findings: /renal cyst|kidney.*cyst/i,
  },
  {
    name: 'Nephrolithiasis with Hydronephrosis',
    entry: 26,
    impression: /stone|hydronephrosis|hydroureter/i,
    findings: /stone|hydronephrosis|hydroureter|UVJ|kidney/i,
  },
  {
    name: 'Acute Appendicitis',
    entry: 25,
    impression: /appendicitis/i,
    findings: /appendi/i,
  },
  {
    name: 'Malakoplakia',
    entry: 31,
    impression: /malakoplakia|abscess/i,
    findings: /malakoplakia|adnexa|iliacus|psoas/i,
  },
  {
    name: 'Intra-abdominal Lymphadenopathy / Lymphoma',
    entry: 8,
    impression: /lymphoma|lymphadenopath/i,
    findings: /lymph|spleen/i,
  },
  {
    name: 'Bony Metastasis',
    entry: 20,
    impression: /bone metastasis|metastasis/i,
    findings: /bone|spine|metasta|fixation|laminectomy/i,
  },
  {
    name: 'Abdominal Aortic Aneurysm / Dissection',
    entry: 32,
    impression: /aortic dissection|aneurysm|atherosclerosis/i,
    findings: /aorta|dissection|aneurysm/i,
  },
  {
    name: 'Incisional / Abdominal Wall Hernia',
    entry: 1,
    impression: /hernia|strangulation|obstruction/i,
    findings: /hernia|abdominal wall|strangulat/i,
  },
  {
    name: 'Bowel Obstruction',
    entry: 1,
    impression: /obstruction|bowel/i,
    findings: /bowel|jejun|obstruct/i,
  },
  {
    name: 'Acute Pyelonephritis',
    entry: 26,
    impression: /pyelonephritis|pyeloureteritis/i,
    findings: /pyelonephritis|pyeloureteritis|kidney/i,
  },
  {
    name: 'Polycystic Kidney / Liver Disease',
    entry: 29,
    impression: /polycystic/i,
    findings: /polycystic|kidney|liver/i,
  },
];

async function main() {
  const groups = await extractAll(TEMPLATE_DIR);
  const abdo = groups['Abdo.docx'];

  const entries = [];
  for (const title of Object.keys(abdo)) {
    if (/KIDNEY|LIVER/.test(title)) continue;
    for (const e of abdo[title]) {
      const body = stripNoise(looksLikeRealCase(e.body) ? genericize(e.body) : e.body);
      entries.push({ title, ...parseSections(body) });
    }
  }

  const diseaseTemplates = {};
  const skipped = [];

  for (const spec of DISEASE_SPECS) {
    const entry = entries[spec.entry];
    if (!entry) {
      skipped.push(spec.name + ' (bad entry index)');
      continue;
    }
    const impression = pickImpressionBullets(entry.impression, spec.impression);
    const findings = pickFindingsParagraphs(entry.findings, spec.findings);
    if (!impression || !findings) {
      skipped.push(`${spec.name} (impression:${impression.length} findings:${findings.length} from entry ${spec.entry} "${entry.title}")`);
      continue;
    }
    diseaseTemplates[spec.name] = {
      history: '',
      technique: GENERIC_TECHNIQUE,
      comparison: 'None.',
      findings,
      impression,
    };
  }

  if (skipped.length) {
    console.log('SKIPPED (needs a source fix):');
    skipped.forEach(s => console.log('  -', s));
  }
  console.log(`Built ${Object.keys(diseaseTemplates).length}/${DISEASE_SPECS.length} disease templates`);

  // Splice into the existing generated file's ct.abdomen region.
  const src = fs.readFileSync(PREMADE_FILE, 'utf-8');
  const module_ = { exports: {} };
  new Function('module', 'exports', src.replace(/^export const/gm, 'module.exports.'))(module_, module_.exports);
  const { templates, phrases } = module_.exports;
  templates.ct.abdomen = diseaseTemplates;

  const fileContents = `// Auto-generated from Template/*.docx by scripts/build-data.js and
// scripts/build-abdomen-diseases.cjs (ct.abdomen only — organized by disease).
// Content is auto-selected/genericized from radiologist dictation templates —
// review and edit freely, this file is the source of truth going forward.

export const templates = ${JSON.stringify(templates, null, 2)};

export const phrases = ${JSON.stringify(phrases, null, 2)};
`;
  fs.writeFileSync(PREMADE_FILE, fileContents, 'utf-8');
  console.log('Wrote', PREMADE_FILE);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
