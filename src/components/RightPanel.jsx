import { useMemo, useState } from 'react';
import { modalityLabel, regionLabel } from '../utils/labels.js';

function flattenPhrases(phrases, source) {
  const items = [];
  for (const key of Object.keys(phrases)) {
    const [modality, region] = key.split('.');
    for (const phrase of phrases[key]) {
      items.push({ modality, region, key, phrase, source, searchText: phrase.toLowerCase() });
    }
  }
  return items;
}

export default function RightPanel({
  premadePhrases,
  userPhrases,
  openScope,
  onInsertPhrase,
  onSavePhrase,
  onDeleteUserPhrase,
}) {
  const [query, setQuery] = useState('');

  const allPhrases = useMemo(
    () => [...flattenPhrases(premadePhrases, 'premade'), ...flattenPhrases(userPhrases, 'user')],
    [premadePhrases, userPhrases],
  );

  // Scoped to whichever modality/region is currently expanded in the left
  // menu — e.g. opening CT > Abdomen only shows CT abdomen phrases here.
  const hasScope = openScope && openScope.region;
  const scopedPhrases = hasScope
    ? allPhrases.filter(p => p.modality === openScope.modality && p.region === openScope.region)
    : [];

  const q = query.trim().toLowerCase();
  const filteredPhrases = q ? scopedPhrases.filter(p => p.searchText.includes(q)) : scopedPhrases;

  return (
    <div className="h-full flex flex-col bg-slate-50 border-l border-slate-200">
      <div className="p-3 border-b border-slate-200">
        <h2 className="text-sm font-semibold text-slate-700 mb-2">Phrases</h2>
        <input
          className="w-full border border-slate-300 rounded px-3 py-1.5 text-sm"
          placeholder="🔍 Search phrases..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        {!hasScope && (
          <div className="p-4 text-sm text-slate-400">Open a modality &amp; region on the left to see its phrases.</div>
        )}

        {hasScope && filteredPhrases.length === 0 && (
          <div className="p-4 text-sm text-slate-400">
            No phrases yet for {modalityLabel(openScope.modality)} · {regionLabel(openScope.region)}.
          </div>
        )}
        {filteredPhrases.map((p, i) => (
          <div
            key={`${p.source}-${p.key}-${i}`}
            className="group flex items-center justify-between px-3 py-2 text-sm hover:bg-blue-50 cursor-pointer border-b border-slate-100"
            onClick={() => onInsertPhrase(p.phrase)}
            title="Click to insert at cursor"
          >
            <div className="text-slate-800">{p.phrase}</div>
            {p.source === 'user' && (
              <button
                className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 text-xs px-2 shrink-0"
                title="Delete phrase"
                onClick={e => {
                  e.stopPropagation();
                  onDeleteUserPhrase(p.key, p.phrase);
                }}
              >
                🗑
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-slate-200">
        <button
          className="w-full bg-slate-800 hover:bg-slate-900 disabled:bg-slate-300 text-white text-xs font-medium py-2 rounded"
          onClick={onSavePhrase}
          disabled={!hasScope}
        >
          + Add Phrase
        </button>
      </div>
    </div>
  );
}
