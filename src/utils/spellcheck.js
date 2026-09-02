// In-app spell checker.
//
// Chrome only spell-checks a field once a real user interaction has focused it,
// so text that arrives from a template load, a phrase insert or a restored
// draft is never scanned — which is why spelling looked broken on some
// machines and fine on others. Doing the check ourselves makes it behave the
// same in every browser and version, on desktop and phone alike, and lets us
// check the whole report at once instead of field by field.
//
// The word list is built by scripts/build-dictionary.cjs into
// public/dictionary.txt (English by frequency + medical terms + the vocabulary
// used by this app's own templates).

let ranks = null; // word -> position in the list, i.e. rough frequency rank
let loading = null;

// Position in the file doubles as a frequency rank, so suggestions can be
// ordered by how common they are rather than alphabetically.
function parse(text) {
  const map = new Map();
  const words = text.split('\n');
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    if (w) map.set(w, i);
  }
  return map;
}

export function loadDictionary() {
  if (ranks) return Promise.resolve(true);
  if (loading) return loading;
  const url = `${import.meta.env.BASE_URL}dictionary.txt`;
  loading = fetch(url)
    .then(res => (res.ok ? res.text() : Promise.reject(new Error(`HTTP ${res.status}`))))
    .then(text => {
      ranks = parse(text);
      return true;
    })
    .catch(() => {
      // No dictionary means no highlights — the editor stays fully usable.
      ranks = null;
      return false;
    });
  return loading;
}

export function isDictionaryReady() {
  return ranks !== null;
}

// Tokens are runs of letters, keeping internal hyphens and apostrophes so
// "T-tube" and "patient's" stay whole.
const TOKEN = /[A-Za-z][A-Za-z'’-]*/g;

// Deliberately skipped, because flagging these is noise rather than help:
//   - anything under 3 letters (cm, mm, IV, of)
//   - ALL-CAPS tokens: section headers (LIVER:) and acronyms (CT, AML, IVC)
//   - tokens holding a digit, which the token regex already excludes
function isCheckable(token) {
  if (token.length < 3) return false;
  if (token === token.toUpperCase()) return false;
  return true;
}

function baseForms(token) {
  const lower = token.toLowerCase().replace(/’/g, "'");
  const forms = [lower];
  if (lower.endsWith("'s")) forms.push(lower.slice(0, -2));
  return forms;
}

export function isKnown(token, extraWords) {
  if (!ranks) return true;
  for (const form of baseForms(token)) {
    if (ranks.has(form)) return true;
    if (extraWords?.has(form)) return true;
  }
  return false;
}

// Returns [{ start, end, word }] for every misspelled token in `text`.
export function findMisspellings(text, extraWords) {
  if (!ranks || !text) return [];
  const out = [];
  TOKEN.lastIndex = 0;
  let m;
  while ((m = TOKEN.exec(text)) !== null) {
    const word = m[0];
    if (!isCheckable(word)) continue;
    if (isKnown(word, extraWords)) continue;
    out.push({ start: m.index, end: m.index + word.length, word });
  }
  return out;
}

// Returns the misspelled token containing `caret`, or null. Used to decide
// whether clicking in the text should open the suggestion popover.
export function misspellingAt(misspellings, caret) {
  return misspellings.find(m => caret >= m.start && caret <= m.end) || null;
}

const LETTERS = 'abcdefghijklmnopqrstuvwxyz';

function edits1(word) {
  const out = new Set();
  for (let i = 0; i <= word.length; i++) {
    const before = word.slice(0, i);
    const after = word.slice(i);
    if (after) out.add(before + after.slice(1)); // deletion
    if (after.length > 1) out.add(before + after[1] + after[0] + after.slice(2)); // transposition
    for (const c of LETTERS) {
      if (after) out.add(before + c + after.slice(1)); // substitution
      out.add(before + c + after); // insertion
    }
  }
  out.delete(word);
  return out;
}

// Matches the casing of the original so replacing "Livver" gives "Liver".
function matchCase(original, suggestion) {
  if (original[0] === original[0].toUpperCase()) {
    return suggestion[0].toUpperCase() + suggestion.slice(1);
  }
  return suggestion;
}

export function suggest(word, extraWords, limit = 6) {
  if (!ranks) return [];
  const lower = word.toLowerCase().replace(/’/g, "'");
  const known = candidate => ranks.has(candidate) || extraWords?.has(candidate);
  // Lower is better. Rank comes from the word list's order (report vocabulary,
  // then common English, then the long tail of medical terms). Typos rarely
  // change the first letter or the length much, so candidates that do are
  // pushed down — it's what keeps "silver" from outranking "liver".
  const score = candidate => {
    let value = ranks.has(candidate) ? ranks.get(candidate) : 0; // words you taught it rank first
    if (candidate[0] !== lower[0]) value += 40000;
    value += Math.abs(candidate.length - lower.length) * 3000;
    return value;
  };

  const first = [...edits1(lower)].filter(known);
  let pool = first;

  // Two edits away is a big candidate set, so it's only worth generating when
  // one edit found little and the word is short enough to stay quick.
  if (pool.length < 3 && lower.length <= 12) {
    const second = new Set();
    for (const candidate of edits1(lower)) {
      for (const deeper of edits1(candidate)) {
        if (known(deeper)) second.add(deeper);
      }
    }
    pool = [...new Set([...first, ...second])];
  }

  return pool
    .sort((a, b) => score(a) - score(b))
    .slice(0, limit)
    .map(s => matchCase(word, s));
}

// Every word the user has typed into their own templates and phrases counts as
// known — they wrote it deliberately, and it's usually the house vocabulary a
// general dictionary lacks.
export function collectUserWords(userTemplates, userPhrases, addedWords) {
  const set = new Set();
  const addText = text => {
    if (typeof text !== 'string') return;
    TOKEN.lastIndex = 0;
    let m;
    while ((m = TOKEN.exec(text)) !== null) set.add(m[0].toLowerCase());
  };
  for (const regions of Object.values(userTemplates || {})) {
    for (const named of Object.values(regions || {})) {
      for (const data of Object.values(named || {})) {
        for (const value of Object.values(data || {})) addText(value);
      }
    }
  }
  for (const list of Object.values(userPhrases || {})) {
    for (const phrase of list || []) addText(phrase);
  }
  for (const word of addedWords || []) set.add(String(word).toLowerCase());
  return set;
}
