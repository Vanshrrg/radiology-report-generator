import { useEffect, useState } from 'react';
import { modalityLabel, regionLabel } from '../utils/labels.js';

function flattenTemplates(templates) {
  const items = [];
  for (const modality of Object.keys(templates)) {
    for (const region of Object.keys(templates[modality])) {
      for (const name of Object.keys(templates[modality][region])) {
        items.push({ modality, region, name, data: templates[modality][region][name] });
      }
    }
  }
  return items;
}

export default function LeftPanel({
  templates,
  userTemplates,
  onSelectTemplate,
  selected,
  openScope,
  onOpenScopeChange,
  onDeleteUserTemplate,
  onRenameUserTemplate,
  onDeleteUserRegion,
  onDeleteUserModality,
}) {
  const [query, setQuery] = useState('');
  // Right-click menu, scoped to a template, region, or modality row:
  // { x, y, type: 'template'|'region'|'modality', modality, region, name }.
  const [contextMenu, setContextMenu] = useState(null);
  const openModality = openScope?.modality ?? null;
  const openRegion = openScope ? `${openScope.modality}.${openScope.region}` : null;

  const modalities = Object.keys(templates).filter(m => Object.keys(templates[m]).length > 0);

  const q = query.trim().toLowerCase();
  const searchResults = q
    ? flattenTemplates(templates).filter(t => t.name.toLowerCase().includes(q))
    : null;

  useEffect(() => {
    if (!contextMenu) return;
    const close = () => setContextMenu(null);
    window.addEventListener('click', close);
    window.addEventListener('scroll', close, true);
    return () => {
      window.removeEventListener('click', close);
      window.removeEventListener('scroll', close, true);
    };
  }, [contextMenu]);

  const openTemplateContextMenu = (e, modality, region, name) => {
    e.preventDefault();
    if (!userTemplates?.[modality]?.[region]?.[name]) return;
    setContextMenu({ x: e.clientX, y: e.clientY, type: 'template', modality, region, name });
  };

  const openRegionContextMenu = (e, modality, region) => {
    e.preventDefault();
    if (!Object.keys(userTemplates?.[modality]?.[region] || {}).length) return;
    setContextMenu({ x: e.clientX, y: e.clientY, type: 'region', modality, region });
  };

  const openModalityContextMenu = (e, modality) => {
    e.preventDefault();
    const regions = userTemplates?.[modality] || {};
    const hasAny = Object.values(regions).some(r => Object.keys(r || {}).length > 0);
    if (!hasAny) return;
    setContextMenu({ x: e.clientX, y: e.clientY, type: 'modality', modality });
  };

  const renderTemplateRow = (modality, region, name) => {
    const isSelected =
      selected && selected.modality === modality && selected.region === region && selected.name === name;
    return (
      <li key={`${modality}-${region}-${name}`}>
        <button
          className={`w-full text-left pl-8 pr-3 py-1.5 text-sm hover:bg-blue-50 ${
            isSelected ? 'bg-blue-100 text-blue-800 font-medium' : 'text-slate-700'
          }`}
          onClick={() => onSelectTemplate(modality, region, name, templates[modality][region][name])}
          onContextMenu={e => openTemplateContextMenu(e, modality, region, name)}
        >
          {name}
        </button>
      </li>
    );
  };

  return (
    <div className="h-full min-h-0 flex flex-col bg-slate-50 border-r border-slate-200">
      <div className="p-2 border-b border-slate-200 shrink-0">
        <input
          className="w-full border border-slate-300 rounded px-2 py-1.5 text-sm"
          placeholder="🔍 Search templates..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        {searchResults ? (
          searchResults.length === 0 ? (
            <div className="p-4 text-sm text-slate-400">No templates match "{query.trim()}".</div>
          ) : (
            <ul>
              {searchResults.map(t => (
                <li key={`${t.modality}-${t.region}-${t.name}`} className="border-b border-slate-100">
                  <button
                    className="w-full text-left px-3 py-1.5 text-sm hover:bg-blue-50 text-slate-700"
                    onClick={() => onSelectTemplate(t.modality, t.region, t.name, t.data)}
                    onContextMenu={e => openTemplateContextMenu(e, t.modality, t.region, t.name)}
                  >
                    <div>{t.name}</div>
                    <div className="text-xs text-slate-400">
                      {modalityLabel(t.modality)} · {regionLabel(t.region)}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )
        ) : (
          modalities.map(modality => {
            const regions = Object.keys(templates[modality]);
            const modalityOpen = openModality === modality;
            return (
              <div key={modality} className="border-b border-slate-200">
                <button
                  className="w-full text-left px-3 py-2 font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 sticky top-0 flex items-center justify-between"
                  onClick={() => onOpenScopeChange(modalityOpen ? null : { modality, region: null })}
                  onContextMenu={e => openModalityContextMenu(e, modality)}
                >
                  <span>{modalityLabel(modality)}</span>
                  <span className="text-xs text-slate-500">{modalityOpen ? '▾' : '▸'}</span>
                </button>
                {modalityOpen && (
                  <div>
                    {regions.map(region => {
                      const regionKey = `${modality}.${region}`;
                      const regionOpen = openRegion === regionKey;
                      const names = Object.keys(templates[modality][region]);
                      return (
                        <div key={region}>
                          <button
                            className="w-full text-left pl-5 pr-3 py-1.5 text-sm font-medium text-slate-600 uppercase tracking-wide hover:bg-slate-100 flex items-center justify-between"
                            onClick={() =>
                              onOpenScopeChange(regionOpen ? { modality, region: null } : { modality, region })
                            }
                            onContextMenu={e => openRegionContextMenu(e, modality, region)}
                          >
                            <span>{regionLabel(region)}</span>
                            <span className="text-xs text-slate-400">{regionOpen ? '▾' : '▸'}</span>
                          </button>
                          {regionOpen && <ul>{names.map(name => renderTemplateRow(modality, region, name))}</ul>}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {contextMenu && (
        <div
          className="fixed z-50 bg-white border border-slate-200 rounded shadow-lg py-1 text-sm min-w-[120px]"
          style={{ top: contextMenu.y, left: contextMenu.x }}
          onClick={e => e.stopPropagation()}
        >
          {contextMenu.type === 'template' && (
            <>
              <button
                className="w-full text-left px-3 py-1.5 hover:bg-slate-100 text-slate-700"
                onClick={() => {
                  onRenameUserTemplate(contextMenu.modality, contextMenu.region, contextMenu.name);
                  setContextMenu(null);
                }}
              >
                Rename
              </button>
              <button
                className="w-full text-left px-3 py-1.5 hover:bg-red-50 text-red-600"
                onClick={() => {
                  onDeleteUserTemplate(contextMenu.modality, contextMenu.region, contextMenu.name);
                  setContextMenu(null);
                }}
              >
                Delete
              </button>
            </>
          )}
          {contextMenu.type === 'region' && (
            <button
              className="w-full text-left px-3 py-1.5 hover:bg-red-50 text-red-600"
              onClick={() => {
                onDeleteUserRegion(contextMenu.modality, contextMenu.region);
                setContextMenu(null);
              }}
            >
              Delete region
            </button>
          )}
          {contextMenu.type === 'modality' && (
            <button
              className="w-full text-left px-3 py-1.5 hover:bg-red-50 text-red-600"
              onClick={() => {
                onDeleteUserModality(contextMenu.modality);
                setContextMenu(null);
              }}
            >
              Delete modality
            </button>
          )}
        </div>
      )}
    </div>
  );
}
