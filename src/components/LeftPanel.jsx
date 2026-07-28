import { modalityLabel, regionLabel } from '../utils/labels.js';

export default function LeftPanel({
  templates,
  userTemplates,
  onSelectTemplate,
  selected,
  openScope,
  onOpenScopeChange,
  onDeleteUserTemplate,
  onRenameUserTemplate,
}) {
  const openModality = openScope?.modality ?? null;
  const openRegion = openScope ? `${openScope.modality}.${openScope.region}` : null;

  const modalities = Object.keys(templates).filter(m => Object.keys(templates[m]).length > 0);

  return (
    <div className="h-full overflow-y-auto bg-slate-50 border-r border-slate-200">
      {modalities.map(modality => {
        const regions = Object.keys(templates[modality]);
        const modalityOpen = openModality === modality;
        return (
          <div key={modality} className="border-b border-slate-200">
            <button
              className="w-full text-left px-3 py-2 font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 sticky top-0 flex items-center justify-between"
              onClick={() => onOpenScopeChange(modalityOpen ? null : { modality, region: null })}
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
                      >
                        <span>{regionLabel(region)}</span>
                        <span className="text-xs text-slate-400">{regionOpen ? '▾' : '▸'}</span>
                      </button>
                      {regionOpen && (
                        <ul>
                          {names.map(name => {
                            const isSelected =
                              selected &&
                              selected.modality === modality &&
                              selected.region === region &&
                              selected.name === name;
                            const isUserOwned = Boolean(userTemplates?.[modality]?.[region]?.[name]);
                            return (
                              <li key={name} className="group flex items-center">
                                <button
                                  className={`flex-1 text-left pl-8 pr-3 py-1.5 text-sm hover:bg-blue-50 ${
                                    isSelected ? 'bg-blue-100 text-blue-800 font-medium' : 'text-slate-700'
                                  }`}
                                  onClick={() =>
                                    onSelectTemplate(modality, region, name, templates[modality][region][name])
                                  }
                                >
                                  {name}
                                </button>
                                {isUserOwned && (
                                  <div className="opacity-0 group-hover:opacity-100 flex gap-1 pr-2">
                                    <button
                                      className="text-slate-400 hover:text-slate-700 text-xs"
                                      title="Rename"
                                      onClick={() => onRenameUserTemplate(modality, region, name)}
                                    >
                                      ✏️
                                    </button>
                                    <button
                                      className="text-red-500 hover:text-red-700 text-xs"
                                      title="Delete"
                                      onClick={() => onDeleteUserTemplate(modality, region, name)}
                                    >
                                      🗑
                                    </button>
                                  </div>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
