// Builds public/dictionary.txt — the word list the in-app spell checker uses.
//
// The app can't rely on the browser's own spell checker: Chrome only scans a
// field after a real user interaction focuses it, so template text, inserted
// phrases and restored drafts are never checked (verified on Chrome 2026-09).
// This list makes the check ours, so it behaves the same in every browser.
//
// Sources, in the order they're layered (order matters — position in the file
// doubles as a frequency rank, which is how suggestions get ranked):
//   1. en_50k       — 50k English words by real-world frequency
//   2. google-10k   — the most common English words, as a safety net
//   3. medical      — ~98k medical/anatomical terms
//   4. the app's own templates and phrases — the vocabulary actually dictated
//      here, which is the part a general English dictionary always gets wrong
//
// Network is only needed to refresh the sources; they're cached in
// scripts/.dict-cache/ and the built dictionary is committed, so an ordinary
// npm run build / deploy never touches the network.
//
//   node scripts/build-dictionary.cjs

const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = path.join(__dirname, '..');
const CACHE = path.join(__dirname, '.dict-cache');
const OUT = path.join(ROOT, 'public', 'dictionary.txt');

const SOURCES = [
  { file: 'freq.txt', url: 'https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2018/en/en_50k.txt' },
  { file: 'common.txt', url: 'https://raw.githubusercontent.com/first20hours/google-10000-english/master/google-10000-english-usa.txt' },
  { file: 'med.txt', url: 'https://raw.githubusercontent.com/glutanimate/wordlist-medicalterms-en/master/wordlist.txt' },
];

function fetchToCache({ file, url }) {
  const dest = path.join(CACHE, file);
  if (fs.existsSync(dest)) return Promise.resolve(fs.readFileSync(dest, 'utf8'));
  return new Promise((resolve, reject) => {
    https
      .get(url, res => {
        if (res.statusCode !== 200) return reject(new Error(`${url} -> HTTP ${res.statusCode}`));
        let body = '';
        res.setEncoding('utf8');
        res.on('data', c => (body += c));
        res.on('end', () => {
          fs.mkdirSync(CACHE, { recursive: true });
          fs.writeFileSync(dest, body);
          resolve(body);
        });
      })
      .on('error', reject);
  });
}

// Words are stored lowercase, letters only, with internal hyphens and
// apostrophes kept (so "t-tube" and "patient's" are known). Anything with a
// digit is dropped — the checker skips those tokens anyway.
function normalize(raw) {
  const word = raw.trim().toLowerCase();
  if (!word || /[0-9]/.test(word)) return null;
  if (!/^[a-z][a-z'-]*$/.test(word)) return null;
  if (word.length < 2 && word !== 'a' && word !== 'i') return null;
  if (word.length > 30) return null;
  return word;
}

// Multi-word entries (common in the medical list) contribute each of their
// component words — the checker works one word at a time.
function* wordsOf(line) {
  for (const piece of line.split(/[\s/,()]+/)) {
    const w = normalize(piece);
    if (w) yield w;
  }
}

// The medical source list is American, so British forms this user actually
// writes — haemangioma, oedema, paediatric — came out as "misspelled". These
// rules generate the British spelling of a word alongside the American one.
// Over-generating is harmless: a bogus extra entry can only cause a missed
// typo, never a false accusation against a correctly spelled word.
const BRITISH_RULES = [
  [/^hem(?!i)/, 'haem'], // hemorrhage, hematoma — but not hemisphere/hemithorax
  [/edema/g, 'oedema'], // edema, lymphedema
  [/esophag/g, 'oesophag'],
  [/estrogen/g, 'oestrogen'],
  [/^fet/, 'foet'], // fetal, fetus
  [/pedia/g, 'paedia'], // pediatric
  [/anesthe/g, 'anaesthe'],
  [/gynec/g, 'gynaec'],
  [/ische/g, 'ischae'], // ischemia, ischemic
  [/kemia/g, 'kaemia'], // leukemia
  [/kemic/g, 'kaemic'],
  [/^cec/, 'caec'], // cecum
  [/celiac/g, 'coeliac'],
  [/orrhea/g, 'orrhoea'], // amenorrhea, steatorrhea
  [/orrheic/g, 'orrhoeic'],
];

function britishVariants(word) {
  const out = [];
  for (const [pattern, replacement] of BRITISH_RULES) {
    if (pattern.test(word)) {
      const variant = word.replace(pattern, replacement);
      if (variant !== word) out.push(variant);
    }
  }
  return out;
}

function harvestAppVocabulary() {
  const src = fs.readFileSync(path.join(ROOT, 'src', 'data', 'premadeData.js'), 'utf8');
  const found = [];
  for (const match of src.matchAll(/[A-Za-z][A-Za-z'-]{1,29}/g)) {
    const w = normalize(match[0]);
    if (w) found.push(w);
  }
  return found;
}

async function main() {
  const [freq, common, med] = await Promise.all(SOURCES.map(fetchToCache));

  const words = new Set();
  const add = list => {
    for (const w of list) words.add(w);
  };

  // Order is the ranking. This app's own template vocabulary goes first: it is
  // the language actually dictated here, so when a typo could be corrected
  // several ways the report word wins ("livver" -> "liver", not "lover").
  add(harvestAppVocabulary());
  // en_50k is "word count" per line, already ordered by frequency.
  add(freq.split('\n').flatMap(line => [...wordsOf(line.split(' ')[0] || '')]));
  add(common.split('\n').flatMap(line => [...wordsOf(line)]));
  add(med.split('\n').flatMap(line => [...wordsOf(line)]));

  // Applied last so the American form keeps the better suggestion rank.
  for (const word of [...words]) add(britishVariants(word));

  const out = [...words].join('\n') + '\n';
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, out);
  console.log(`dictionary.txt: ${words.size} words, ${(out.length / 1024 / 1024).toFixed(2)} MB`);
}

main().catch(err => {
  console.error(err.message);
  process.exit(1);
});
