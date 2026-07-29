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

// The Study type field must reflect the exam actually performed (e.g. "CT
// Whole Abdomen"), never the disease — the disease is what the menu is
// organized by, not what was ordered. Keyed by source entry title.
const STUDY_TYPE_BY_TITLE = {
  'EMERGENCY MDCT OF THE WHOLE ABDOMEN': 'CT Whole Abdomen (Emergency)',
  'CT SCAN OF WHOLE ABDOMEN': 'CT Whole Abdomen',
  'CT UROGRAPHY': 'CT Urography',
  'CT OF WHOLE ABDOMEN': 'CT Whole Abdomen',
  'CT SCAN OF UPPER ABDOMEN': 'CT Upper Abdomen',
  'EMERGENCY CT SCAN OF WHOLE ABDOMEN': 'CT Whole Abdomen (Emergency)',
  'CT SCAN OF CHEST AND WHOLE ABDOMEN': 'CT Chest & Whole Abdomen',
  'CT WHOLE ABDOMEN': 'CT Whole Abdomen',
  'CT NECK, CHEST AND UPPER ABDOMEN': 'CT Neck, Chest & Upper Abdomen',
};

function pickImpressionBullets(impression, re) {
  return impression
    .split(/\n+/)
    .map(l => l.replace(/^-\s*/, '').trim())
    .filter(l => re.test(l))
    .join('\n');
}

// { name, entry: index into the harvested entries array, impression: regex }
// — entry indices refer to the deterministic extraction order produced by
// extractAll() over Abdo.docx (excluding kidney/liver titles). Findings uses
// the source entry's full findings section, unfiltered — see the note above
// the `findings` assignment in main().
const DISEASE_SPECS = [
  {
    name: 'Hepatocellular Carcinoma (HCC)',
    entry: 22,
    impression: /HCC|cirrhosis|fatty liver/i,
  },
  {
    name: 'Cholangiocarcinoma',
    entry: 28,
    impression: /cholangiocarcinoma/i,
  },
  {
    name: 'Liver Cirrhosis with Portal Hypertension',
    entry: 23,
    impression: /cirrhosis|portal hypertension|HCC/i,
  },
  {
    name: 'Hepatic Cyst',
    entry: 2,
    impression: /liver cyst/i,
  },
  {
    name: 'Cholelithiasis / Cholecystitis',
    entry: 7,
    impression: /gallstone|cholecystitis/i,
  },
  {
    name: 'Acute Pancreatitis',
    entry: 5,
    impression: /pancrea|necrotic|ascites|^#/im,
  },
  {
    name: 'Splenomegaly',
    entry: 18,
    impression: /splenomegaly/i,
  },
  {
    name: 'Splenic Lymphangioma',
    entry: 16,
    impression: /lymphangioma/i,
  },
  {
    name: 'Adrenal Nodule / Metastasis',
    entry: 22,
    impression: /adrenal/i,
  },
  {
    name: 'Renal Cyst',
    entry: 4,
    impression: /renal cyst/i,
  },
  {
    name: 'Nephrolithiasis with Hydronephrosis',
    entry: 26,
    impression: /stone|hydronephrosis|hydroureter/i,
  },
  {
    name: 'Acute Appendicitis',
    entry: 25,
    impression: /appendicitis/i,
  },
  {
    name: 'Malakoplakia',
    entry: 31,
    impression: /malakoplakia|abscess/i,
  },
  {
    name: 'Intra-abdominal Lymphadenopathy / Lymphoma',
    entry: 8,
    impression: /lymphoma|lymphadenopath/i,
  },
  {
    name: 'Bony Metastasis',
    entry: 20,
    impression: /bone metastasis|metastasis/i,
  },
  {
    name: 'Abdominal Aortic Aneurysm / Dissection',
    entry: 32,
    impression: /aortic dissection|aneurysm|atherosclerosis/i,
  },
  {
    name: 'Incisional / Abdominal Wall Hernia',
    entry: 1,
    impression: /hernia|strangulation|obstruction/i,
  },
  {
    name: 'Bowel Obstruction',
    entry: 1,
    impression: /obstruction|bowel/i,
  },
  {
    name: 'Acute Pyelonephritis',
    entry: 26,
    impression: /pyelonephritis|pyeloureteritis/i,
  },
  {
    name: 'Liver Metastasis',
    entry: 15,
    impression: /liver metastasis/i,
  },
  {
    name: 'Hepatic Hemangioma',
    entry: 12,
    impression: /hemangioma/i,
  },
  {
    name: 'Gallbladder Polyps',
    entry: 23,
    impression: /polyp/i,
  },
  {
    name: 'Renal Angiomyolipoma (AML)',
    entry: 14,
    impression: /AML|angiomyolipoma/i,
    // This entry appends an unrelated fluoroscopic upper-GI series report
    // after the CT findings — cut it off so a CT template doesn't carry
    // findings from a different modality.
    findingsCutoffMarker: 'Flu',
  },
  {
    name: 'Pulmonary Metastasis (Incidental)',
    entry: 14,
    impression: /lung metastasis/i,
    findingsCutoffMarker: 'Flu',
  },
  {
    name: 'Cystitis / Bladder Wall Thickening',
    entry: 9,
    impression: /cystitis/i,
  },
  {
    name: 'Bladder Outlet Obstruction',
    entry: 17,
    impression: /bladder outlet obstruction/i,
  },
  {
    name: 'Psoas Abscess',
    entry: 6,
    impression: /psoas abscess/i,
  },
  {
    name: 'Right-Sided Heart Failure (Abdominal Signs)',
    entry: 6,
    impression: /heart failure/i,
  },
  {
    name: 'Splenic Lipoma',
    entry: 19,
    impression: /splenic lipoma/i,
  },
  {
    name: 'Uterine Myoma (Fibroid)',
    entry: 19,
    impression: /myoma/i,
  },
  {
    name: 'Colonic Mass / Suspected Colorectal Malignancy',
    entry: 19,
    impression: /mucosal lesion/i,
  },
  {
    name: 'Prostate Cancer (CT Correlate)',
    entry: 20,
    impression: /prostate/i,
  },
  {
    name: 'Umbilical Hernia',
    entry: 10,
    impression: /umbilical hernia/i,
  },
  {
    name: 'Inguinal Hernia',
    entry: 4,
    impression: /inguinal hernia/i,
  },
  {
    name: 'Retroperitoneal Fibrosis',
    entry: 18,
    impression: /retroperitoneal fibrosis/i,
  },
  {
    name: 'Staghorn Renal Calculus',
    entry: 18,
    impression: /staghorn/i,
  },
  {
    name: 'Ovarian Lymphoma',
    entry: 30,
    impression: /ovarian lymphoma/i,
  },
  {
    name: 'Polycystic Kidney / Liver Disease',
    entry: 29,
    impression: /polycystic/i,
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
    // Findings is the full systematic organ-by-organ review from the source
    // report, not just the disease-relevant paragraph — a real findings
    // section always documents every organ, positive or negative, and
    // trimming it down to only the "positive" finding misrepresents what a
    // findings section looks like.
    const findings = (spec.findingsCutoffMarker
      ? entry.findings.split(spec.findingsCutoffMarker)[0]
      : entry.findings
    ).trim();
    if (!impression || !findings) {
      skipped.push(`${spec.name} (impression:${impression.length} findings:${findings.length} from entry ${spec.entry} "${entry.title}")`);
      continue;
    }
    diseaseTemplates[spec.name] = {
      history: '',
      studyType: STUDY_TYPE_BY_TITLE[entry.title] || 'CT Whole Abdomen',
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
