import { useMemo, useState } from 'react';
import { modalityLabel, regionLabel } from '../utils/labels.js';

function flattenTemplates(templates, source) {
  const items = [];
  for (const modality of Object.keys(templates)) {
    for (const region of Object.keys(templates[modality])) {
      for (const name of Object.keys(templates[modality][region])) {
        const data = templates[modality][region][name];
        items.push({
          modality,
          region,
          name,
          data,
          source,
          searchText: [name, data.technique, data.findings, data.impression].join(' ').toLowerCase(),
        });
      }
    }
  }
  return items;
}

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
  premadeTemplates,
  userTemplates,
  premadePhrases,
  userPhrases,
  onSelectTemplate,
  onInsertPhrase,
  onSaveTemplate,
  onSavePhrase,
  onDeleteUserTemplate,
  onDeleteUserPhrase,
}) {
  const [tab, setTab] = useState('templates');
  const [query, setQuery] = useState('');

  const allTemplates = useMemo(
    () => [...flattenTemplates(premadeTemplates, 'premade'), ...flattenTemplates(userTemplates, 'user')],
    [premadeTemplates, userTemplates],
  );
  const allPhrases = useMemo(
    () => [...flattenPhrases(premadePhrases, 'premade'), ...flattenPhrases(userPhrases, 'user')],
    [premadePhrases, userPhrases],
  );

  const q = query.trim().toLowerCase();
  const filteredTemplates = q ? allTemplates.filter(t => t.searchText.includes(q)) : allTemplates;
  const filteredPhrases = q ? allPhrases.filter(p => p.searchText.includes(q)) : allPhrases;

  return (
    <div className="h-full flex flex-col bg-slate-50 border-l border-slate-200">
      <div className="p-3 border-b border-slate-200">
        <input
          className="w-full border border-slate-300 rounded px-3 py-1.5 text-sm"
          placeholder="🔍 Search templates & phrases..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>

      <div className="flex border-b border-slate-200">
        <button
          className={`flex-1 py-2 text-sm font-medium ${tab === 'templates' ? 'border-b-2 border-blue-600 text-blue-700' : 'text-slate-500'}`}
          onClick={() => setTab('templates')}
        >
          Templates
        </button>
        <button
          className={`flex-1 py-2 text-sm font-medium ${tab === 'phrases' ? 'border-b-2 border-blue-600 text-blue-700' : 'text-slate-500'}`}
          onClick={() => setTab('phrases')}
        >
          Phrases
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {tab === 'templates' &&
          filteredTemplates.map(t => (
            <div
              key={`${t.source}-${t.modality}-${t.region}-${t.name}`}
              className="group flex items-center justify-between px-3 py-2 text-sm hover:bg-blue-50 cursor-pointer border-b border-slate-100"
              onClick={() => onSelectTemplate(t.modality, t.region, t.name, t.data)}
            >
              <div>
                <div className="font-medium text-slate-800">{t.name}</div>
                <div className="text-xs text-slate-400">
                  {modalityLabel(t.modality)} · {regionLabel(t.region)}
                </div>
              </div>
              {t.source === 'user' && (
                <button
                  className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 text-xs px-2"
                  onClick={e => {
                    e.stopPropagation();
                    onDeleteUserTemplate(t.modality, t.region, t.name);
                  }}
                >
                  🗑
                </button>
              )}
            </div>
          ))}

        {tab === 'phrases' &&
          filteredPhrases.map((p, i) => (
            <div
              key={`${p.source}-${p.key}-${i}`}
              className="group flex items-center justify-between px-3 py-2 text-sm hover:bg-blue-50 cursor-pointer border-b border-slate-100"
              onClick={() => onInsertPhrase(p.phrase)}
            >
              <div>
                <div className="text-slate-800">{p.phrase}</div>
                <div className="text-xs text-slate-400">
                  {modalityLabel(p.modality)} · {regionLabel(p.region)}
                </div>
              </div>
              {p.source === 'user' && (
                <button
                  className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 text-xs px-2"
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

      <div className="p-3 border-t border-slate-200 flex gap-2">
        {tab === 'templates' ? (
          <button
            className="flex-1 bg-slate-800 hover:bg-slate-900 text-white text-xs font-medium py-2 rounded"
            onClick={onSaveTemplate}
          >
            + Save New Template
          </button>
        ) : (
          <button
            className="flex-1 bg-slate-800 hover:bg-slate-900 text-white text-xs font-medium py-2 rounded"
            onClick={onSavePhrase}
          >
            + Save Phrase
          </button>
        )}
      </div>
    </div>
  );
}
