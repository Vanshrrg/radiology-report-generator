const fs = require('fs');
const path = require('path');
const { extractAll, looksLikeRealCase, genericize, stripNoise } = require('./lib/extract.cjs');

const TEMPLATE_DIR = path.join(__dirname, '..', 'Template');
const OUT_FILE = path.join(__dirname, '..', 'src', 'data', 'premadeData.js');

const TOP_LEVEL_LABELS = new Set([
  'HISTORY', 'TECHNIQUE', 'TECHNIQUES', 'COMPARISON', 'FINDINGS',
  'LIMITATIONS', 'IMPRESSION', 'IMPRESSIONS',
]);

function titleCase(str) {
  return str
    .toLowerCase()
    .replace(/\b\w/g, c => c.toUpperCase());
}

function pickBestEntry(entries) {
  const clean = entries.filter(e => !looksLikeRealCase(e.body));
  const body = clean.length > 0
    ? clean.reduce((a, b) => (b.body.length > a.body.length ? b : a)).body
    : genericize(entries.reduce((a, b) => (b.body.length > a.body.length ? b : a)).body);
  return stripNoise(body);
}

function parseSections(body) {
  const lines = body.split('\n');
  const buckets = { technique: [], comparison: [], findings: [], impression: [], limitations: [] };
  let current = null;

  const bucketFor = label => {
    if (label === 'TECHNIQUE' || label === 'TECHNIQUES') return 'technique';
    if (label === 'COMPARISON') return 'comparison';
    if (label === 'FINDINGS') return 'findings';
    if (label === 'LIMITATIONS') return 'limitations';
    if (label === 'IMPRESSION' || label === 'IMPRESSIONS') return 'impression';
    if (label === 'HISTORY') return 'skip';
    return null;
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    const m = line.match(/^([A-Za-z][A-Za-z\/ ]{1,40}):\s*(.*)$/);
    if (m) {
      const label = m[1].trim().toUpperCase();
      if (TOP_LEVEL_LABELS.has(label)) {
        current = bucketFor(label);
        if (current && current !== 'skip' && m[2]) buckets[current].push(m[2]);
        continue;
      }
    }
    if (current && current !== 'skip') {
      buckets[current].push(rawLine.trimEnd());
    }
  }

  const clean = arr => arr.join('\n').replace(/\n{3,}/g, '\n\n').trim();

  const technique = [clean(buckets.technique), clean(buckets.comparison) ? `Comparison: ${clean(buckets.comparison)}` : '']
    .filter(Boolean).join('\n');
  const findings = [clean(buckets.limitations) ? `Limitations: ${clean(buckets.limitations)}` : '', clean(buckets.findings)]
    .filter(Boolean).join('\n');
  const impression = clean(buckets.impression);

  return { technique, findings, impression };
}

function mapAbdo(title) {
  if (/KIDNEY/.test(title)) return { modality: 'ct', region: 'kidney' };
  if (/LIVER/.test(title)) return { modality: 'ct', region: 'liver' };
  return { modality: 'ct', region: 'abdomen' };
}

function mapChest(title) {
  if (/ABDOMEN/.test(title)) return { modality: 'ct', region: 'chest_abdomen' };
  return { modality: 'ct', region: 'chest' };
}

function mapCTA(title) {
  const modality = /^MRA/.test(title) ? 'mri' : 'ct';
  if (/AORTA/.test(title)) return { modality, region: 'angio_aorta' };
  if (/CORONARY/.test(title)) return { modality, region: 'angio_coronary' };
  if (/CAROTID|BRAIN/.test(title)) return { modality, region: 'angio_carotid_brain' };
  if (/EXTREMIT/.test(title)) return { modality, region: 'angio_extremities' };
  return { modality, region: 'angio_other' };
}

function mapNeuro(title) {
  // Neuro.docx is mostly MRI, but a handful of CT brain/neck entries are mixed in.
  const modality = /^(CT|MDCT|EMERGENCY CT|EMERGENCY MDCT)\b/.test(title) ? 'ct' : 'mri';
  if (/SPINE/.test(title)) return { modality, region: 'spine' };
  return { modality, region: 'brain' };
}

function mapUS(title) {
  if (/KUB|KIDNEY/.test(title)) return { modality: 'us', region: 'kub' };
  if (/NECK|THYROID/.test(title)) return { modality: 'us', region: 'neck' };
  if (/EXTREMIT|VENOUS|DOPPLER/.test(title)) return { modality: 'us', region: 'doppler_extremity' };
  if (/ABDOMEN/.test(title)) return { modality: 'us', region: 'abdomen' };
  return { modality: 'us', region: 'abdomen' };
}

const FILE_MAPPERS = {
  'Abdo.docx': mapAbdo,
  'Chest.docx': mapChest,
  'CTA.docx': mapCTA,
  'Neuro.docx': mapNeuro,
  'US.docx': mapUS,
};

// Manual dedup map for regions with many near-duplicate protocol names that the
// generic title-normalizer can't merge (e.g. "MRI PITUITARY PROTOCOL" vs
// "MRI OF PITUITARY" vs "MRI PITUITARY GLAND" are the same exam, worded differently).
// Keyed by "modality.region", mapping raw normalizedTitle -> canonical display name.
const CANONICAL_MAPS = {
  'mri.brain': {
    'MRI OF BRAIN': 'MRI of Brain',
    'MRI BRAIN': 'MRI of Brain',
    'MRI OF THE BRAIN': 'MRI of Brain',
    'MRI BRAIN WITH CONTRAST': 'MRI of Brain (With Contrast)',
    'MRI BRAIN WITH GD': 'MRI of Brain (With Contrast)',
    'MRI OF BRAIN EPILEPSY PROTOCOL': 'MRI of Brain (Epilepsy Protocol)',
    'MRI DEMENTIA PROTOCOL': 'MRI of Brain (Dementia Protocol)',
    'MRI BRAIN- DEMENTIA PROTOCOL': 'MRI of Brain (Dementia Protocol)',
    'MRI OF BRAIN BASE OF SKULL PROTOCOL': 'MRI of Brain (Base of Skull Protocol)',
    'MRI SKULL BASE': 'MRI of Brain (Base of Skull Protocol)',
    'MRI OF BASE OF SKULL': 'MRI of Brain (Base of Skull Protocol)',
    'MRI OF BRAIN IAC PROTOCOL': 'MRI of Brain (IAC Protocol)',
    'MRI IAC PROTOCOL': 'MRI of Brain (IAC Protocol)',
    'MRI OF BRAIN-NMO PROTOCOL': 'MRI of Brain (NMO Protocol)',
    'MRI OF BRAIN WITH PNS': 'MRI of Brain (with PNS)',
    'MRI PITUITARY PROTOCOL': 'MRI of Pituitary',
    'MRI PITUITARY GLAND': 'MRI of Pituitary',
    'MRI OF PITUITARY': 'MRI of Pituitary',
    'MRI PITUITARY': 'MRI of Pituitary',
    'MRI OF PITUITARY GLAND': 'MRI of Pituitary',
    'MRI BRAIN WITH PITUITARY GLAND': 'MRI of Brain & Pituitary',
    'MRI OF BRAIN AND PITUITARY': 'MRI of Brain & Pituitary',
    'MRI ORBIT AND BRAIN': 'MRI of Brain & Orbit',
    'MRI OF BRAIN AND ORBIT': 'MRI of Brain & Orbit',
    'MRI BRAIN AND ORBIT': 'MRI of Brain & Orbit',
    'MRI ORBITS': 'MRI of Orbits',
    'MRA BRAIN': 'MRI/MRA of Brain',
    'MRI BRAIN & MRA BRAIN': 'MRI/MRA of Brain',
    'MRI, MRA OF BRAIN': 'MRI/MRA of Brain',
    'MRI AND MRA BRAIN': 'MRI/MRA of Brain',
    'MRI BRAIN AND MRA BRAIN': 'MRI/MRA of Brain',
    'MRI AND MRA BRAIN WITH VESSEL WALL PROTOCOL': 'MRI/MRA of Brain (Vessel Wall Protocol)',
    'MRI AND MRA BRAIN VESSEL WALL PROTOCOL': 'MRI/MRA of Brain (Vessel Wall Protocol)',
    'MRA OF BRAIN VESSEL WALL': 'MRI/MRA of Brain (Vessel Wall Protocol)',
    'MRA VESSEL WALL': 'MRI/MRA of Brain (Vessel Wall Protocol)',
    'MRI WITH MRA BRAIN WITH VESSEL WALL PROTOCOL': 'MRI/MRA of Brain (Vessel Wall Protocol)',
    'MRI OF BRAIN AND MRA BRAIN WITH CAROTID VESSEL WALL PROTOCOL':
      'MRI/MRA of Brain with Carotid (Vessel Wall Protocol)',
    'MRI AND MRA BRAIN, CAROTID WITH VESSEL WALL PROTOCOL':
      'MRI/MRA of Brain with Carotid (Vessel Wall Protocol)',
    'MRI AND MRA BRAIN WITH CAROTID ARTERY': 'MRI/MRA of Brain with Carotid Artery',
    'MRI BRAIN AVM PROTOCOL': 'MRI/MRA of Brain (AVM Protocol)',
    'MRI AND MRA BRAIN AVM PROTOCOL': 'MRI/MRA of Brain (AVM Protocol)',
    'MRI NASOPHARYNX': 'MRI of Nasopharynx',
    'MRI BRAIN AND NASOPHARYNX': 'MRI of Nasopharynx',
    'MRI NASOPHARYNX WITH SCREENING NECK': 'MRI of Nasopharynx (with Screening Neck)',
    'MRI NASOPHARYNX AND SCREENING NECK': 'MRI of Nasopharynx (with Screening Neck)',
    'MRI OF THE BRACHIAL PLEXUS': 'MRI of Brachial Plexus',
    'MRI NECK': 'MRI of Neck',
    'EMERGENCY MRI NECK': 'MRI of Neck (Emergency)',
  },

  'ct.abdomen': {
    'EMERGENCY MDCT OF THE WHOLE ABDOMEN': 'CT of Whole Abdomen (Emergency)',
    'EMERGENCY CT SCAN OF WHOLE ABDOMEN': 'CT of Whole Abdomen (Emergency)',
    'CT SCAN OF WHOLE ABDOMEN': 'CT of Whole Abdomen',
    'CT SCAN OF THE WHOLE ABDOMEN': 'CT of Whole Abdomen',
    'CT OF WHOLE ABDOMEN': 'CT of Whole Abdomen',
    'CT WHOLE ABDOMEN': 'CT of Whole Abdomen',
    'CT UROGRAPHY': 'CT Urography',
    'CT SCAN OF UPPER ABDOMEN': 'CT of Upper Abdomen',
    'CT SCAN OF CHEST AND WHOLE ABDOMEN': 'CT of Chest & Whole Abdomen',
    'CT NECK, CHEST AND UPPER ABDOMEN': 'CT of Neck, Chest & Upper Abdomen',
    'EMERGENCY MDCT SCAN OF THE LOWER ABDOMEN': 'CT of Lower Abdomen (Emergency)',
  },

  'ct.chest': {
    'CT SCAN OF CHEST': 'CT of Chest',
    'CT CHEST': 'CT of Chest',
    'MDCT OF THE CHEST': 'CT of Chest',
    'MDCT SCAN OF THE CHEST WITHOUT IV CONTRAST': 'CT of Chest (Without Contrast)',
    'CT CHEST NON CONTRAST': 'CT of Chest (Without Contrast)',
    'CT SCAN OF CHEST WITH CONTRAST': 'CT of Chest (With Contrast)',
    'EMERGENCY MDCT SCAN OF THE CHEST': 'CT of Chest (Emergency)',
    'LOW DOSE CT CHEST': 'Low-Dose CT of Chest',
    'LOW DOSE CT SCAN OF CHEST': 'Low-Dose CT of Chest',
  },

  'ct.chest_abdomen': {
    'CT SCAN OF CHEST AND UPPER ABDOMEN': 'CT of Chest & Upper Abdomen',
    'CT SCAN OF THE CHEST AND UPPER ABDOMEN': 'CT of Chest & Upper Abdomen',
    'CT SCAN OF CHEST AND WHOLE ABDOMEN': 'CT of Chest & Whole Abdomen',
    'MDCT CHEST AND WHOLE ABDOMEN NON CONTRAST': 'CT of Chest & Whole Abdomen (Without Contrast)',
  },

  'ct.angio_aorta': {
    'CT SCAN OF WHOLE AORTA': 'CTA of Whole Aorta',
    'CTA OF WHOLE AORTA': 'CTA of Whole Aorta',
    'EMERGENCY CTA WHOLE AORTA': 'CTA of Whole Aorta (Emergency)',
    'EMERGENCY CTA OF WHOLE AORTA': 'CTA of Whole Aorta (Emergency)',
    'EMERGENCY CTA THORACIC AORTA': 'CTA of Thoracic Aorta (Emergency)',
  },

  'ct.brain': {
    'EMERGENCY CT BRAIN WITHOUT CONTRAST': 'CT of Brain (Without Contrast)',
    'CT SCAN OF THE BRAIN NON-CONTRAST': 'CT of Brain (Without Contrast)',
    'EMERGENCY CT BRAIN WITH CONTRAST': 'CT of Brain (With Contrast)',
    'CT BRAIN WITH CONTRAST': 'CT of Brain (With Contrast)',
    'CT NECK WITH CONTRAST': 'CT of Neck (With Contrast)',
    'CT TEMPORAL BONE': 'CT of Temporal Bone',
    'CT BRAIN INCLUDED FACIAL BONE WITHOUT CONTRAST': 'CT of Brain & Facial Bone (Without Contrast)',
  },

  'mri.spine': {
    'MRI OF C-SPINE': 'MRI of C-Spine',
    'MRI OF C-SPINE AND SCREENING WHOLE SPINE': 'MRI of C-Spine (with Screening Whole Spine)',
    'MRI OF C-SPINE WITH SCREENING WHOLE SPINE': 'MRI of C-Spine (with Screening Whole Spine)',
    'EMERGENCY MRI OF THE CERVICAL AND LUMBAR SPINE': 'MRI of Cervical & Lumbar Spine (Emergency)',
    'MRI OF CERVICAL AND THORACIC SPINES': 'MRI of Cervical & Thoracic Spine',
    'MRI BRAIN WITH CERVICAL SPINE, SCREEN WHOLE SPINE': 'MRI of Brain & Cervical Spine (with Screening Whole Spine)',
    'MRI OF THORACIC SPINE': 'MRI of Thoracic Spine',
    'MRI OF THORACIC SPINE WITH SCREENING WHOLE SPINE': 'MRI of Thoracic Spine (with Screening Whole Spine)',
    'MRI OF T-L SPINE WITH SCREENING WHOLE SPINE': 'MRI of T-L Spine (with Screening Whole Spine)',
    'MRI OF L-S SPINE': 'MRI of L-S Spine',
    'MRI LS SPINE': 'MRI of L-S Spine',
    'MRI OF LS SPINE': 'MRI of L-S Spine',
    'MRI OF L-S SPINE WITH SCREENING WHOLE SPINE': 'MRI of L-S Spine (with Screening Whole Spine)',
    'MRI OF LS SPINE WITH SCREENING WHOLE SPINE': 'MRI of L-S Spine (with Screening Whole Spine)',
    'MRI BRAIN AND SCREENING WHOLE SPINE WITH CONTRAST': 'MRI of Brain & Whole Spine (With Contrast)',
    'MRI OF WHOLE SPINE': 'MRI of Whole Spine',
    'MRI OF BRAIN WITH WHOLE SPINE': 'MRI of Brain & Whole Spine',
  },

  'us.kub': {
    'ULTRASOUND OF THE KUB': 'Ultrasound of KUB',
    'ULTRASOUND OF THE KUB SYSTEM': 'Ultrasound of KUB',
    'EMERGENCY ULTRASOUND OF THE KUB SYSTEM': 'Ultrasound of KUB (Emergency)',
  },
};

function extractPhrases(findingsText) {
  return findingsText
    .split(/\n|(?<=\.)\s+/)
    .map(s => s.replace(/^[-•\s]+/, '').trim())
    .filter(s => s.length > 12 && s.length < 100 && /[.]$/.test(s) && !/=/.test(s));
}

async function main() {
  const groups = await extractAll(TEMPLATE_DIR);

  const templates = {}; // modality -> region -> name -> {technique,findings,impression}
  const phraseSets = {}; // "modality.region" -> Set

  for (const file of Object.keys(groups)) {
    const mapper = FILE_MAPPERS[file];
    for (const normalizedTitle of Object.keys(groups[file])) {
      const entries = groups[file][normalizedTitle];
      const bestBody = pickBestEntry(entries);
      const { technique, findings, impression } = parseSections(bestBody);
      const { modality, region } = mapper(normalizedTitle);

      const canonicalMap = CANONICAL_MAPS[`${modality}.${region}`];
      const name = (canonicalMap && canonicalMap[normalizedTitle]) || titleCase(normalizedTitle);

      templates[modality] = templates[modality] || {};
      templates[modality][region] = templates[modality][region] || {};
      const existing = templates[modality][region][name];
      const candidate = { technique, findings, impression };
      const candidateLen = technique.length + findings.length + impression.length;
      const existingLen = existing ? existing.technique.length + existing.findings.length + existing.impression.length : -1;
      if (candidateLen > existingLen) {
        templates[modality][region][name] = candidate;
      }

      const key = `${modality}.${region}`;
      phraseSets[key] = phraseSets[key] || new Set();
      for (const p of extractPhrases(findings)) {
        if (phraseSets[key].size < 8) phraseSets[key].add(p);
      }
    }
  }

  // ensure all planned modalities exist even if empty
  for (const m of ['xray', 'ct', 'mri', 'us']) {
    templates[m] = templates[m] || {};
  }

  const phrases = {};
  for (const key of Object.keys(phraseSets)) {
    phrases[key] = Array.from(phraseSets[key]);
  }

  const fileContents = `// Auto-generated from Template/*.docx by scripts/build-data.js.
// Content is auto-selected/genericized from radiologist dictation templates —
// review and edit freely, this file is the source of truth going forward.

export const templates = ${JSON.stringify(templates, null, 2)};

export const phrases = ${JSON.stringify(phrases, null, 2)};
`;

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, fileContents, 'utf-8');
  console.log(`Wrote ${OUT_FILE}`);
  for (const m of Object.keys(templates)) {
    for (const r of Object.keys(templates[m])) {
      console.log(`  ${m}.${r}: ${Object.keys(templates[m][r]).length} templates`);
    }
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
