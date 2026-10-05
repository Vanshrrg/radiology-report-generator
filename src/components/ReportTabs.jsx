import { useEffect, useRef, useState } from 'react';
import { tabLabel } from '../utils/labels.js';

// One tab per unfinished report, plus a "Recently closed" menu to bring back a
// tab closed by accident. Scrolls sideways when there are more tabs than fit,
// which is also how it works at phone width.
export default function ReportTabs({ tabs, activeTabId, closedTabs, onSwitch, onClose, onNew, onReopen, onClearClosed }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeRef = useRef(null);
  // Entries without fields are sync tombstones (closed on another device, or
  // after "Clear list") — nothing there to reopen.
  const reopenable = closedTabs.filter(c => c.fields);

  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }, [activeTabId]);

  return (
    <div className="flex items-stretch bg-slate-100 border-b border-slate-200 shrink-0 text-sm">
      <div className="flex-1 min-w-0 flex items-end gap-0.5 overflow-x-auto px-1 pt-1" role="tablist">
        {tabs.map(tab => {
          const active = tab.id === activeTabId;
          return (
            <div
              key={tab.id}
              ref={active ? activeRef : null}
              role="tab"
              aria-selected={active}
              title={[tab.patientInfo?.name, tab.patientInfo?.studyType].filter(Boolean).join(' — ') || 'Untitled report'}
              className={`group flex items-center gap-1 shrink-0 max-w-[12rem] pl-3 pr-1 py-1.5 rounded-t-md border border-b-0 cursor-pointer select-none ${
                active
                  ? 'bg-white border-slate-200 text-slate-900 font-medium'
                  : 'bg-transparent border-transparent text-slate-500 hover:bg-slate-200/70 hover:text-slate-800'
              }`}
              onClick={() => onSwitch(tab.id)}
              onMouseDown={e => {
                // Middle-click closes, like browser tabs.
                if (e.button === 1) {
                  e.preventDefault();
                  onClose(tab.id);
                }
              }}
            >
              <span className="truncate">{tabLabel(tab)}</span>
              <button
                className={`shrink-0 rounded p-0.5 text-slate-400 hover:text-slate-800 hover:bg-slate-200 ${
                  active ? '' : 'md:opacity-0 md:group-hover:opacity-100'
                }`}
                aria-label={`Close ${tabLabel(tab)}`}
                title="Close tab"
                onClick={e => {
                  e.stopPropagation();
                  onClose(tab.id);
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              </button>
            </div>
          );
        })}
        <button
          className="shrink-0 self-center ml-1 rounded p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200"
          onClick={onNew}
          title="New report tab"
          aria-label="New report tab"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>

      <div className="relative shrink-0 flex items-center px-1 border-l border-slate-200">
        <button
          className="rounded p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200 disabled:opacity-40 disabled:hover:bg-transparent"
          onClick={() => setMenuOpen(o => !o)}
          disabled={!reopenable.length}
          title={reopenable.length ? 'Recently closed reports (Ctrl+Shift+T reopens the last one)' : 'No recently closed reports'}
          aria-label="Recently closed reports"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12a9 9 0 1 0 3-6.7" />
            <polyline points="3 3 3 9 9 9" />
            <polyline points="12 7 12 12 15 14" />
          </svg>
        </button>
        {menuOpen && reopenable.length > 0 && (
          <>
            <div className="fixed inset-0 z-40" onMouseDown={() => setMenuOpen(false)} />
            <div className="absolute right-1 top-full mt-1 z-50 w-64 max-w-[85vw] bg-white border border-slate-200 rounded-lg shadow-lg py-1">
              <div className="px-3 py-1 text-[11px] text-slate-400 border-b border-slate-100">Recently closed</div>
              <div className="max-h-72 overflow-y-auto">
                {reopenable.map(c => (
                  <button
                    key={c.id}
                    className="w-full text-left px-3 py-1.5 hover:bg-slate-100 flex items-baseline gap-2"
                    onClick={() => {
                      setMenuOpen(false);
                      onReopen(c.id);
                    }}
                  >
                    <span className="truncate flex-1 text-slate-700">{tabLabel(c)}</span>
                    <span className="shrink-0 text-[11px] text-slate-400">{formatClosedAt(c.closedAt)}</span>
                  </button>
                ))}
              </div>
              <button
                className="w-full text-left px-3 py-1.5 text-xs text-slate-500 hover:bg-slate-100 border-t border-slate-100"
                onClick={() => {
                  setMenuOpen(false);
                  onClearClosed();
                }}
              >
                Clear list
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function formatClosedAt(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toDateString() === new Date().toDateString()
    ? d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    : d.toLocaleDateString([], { month: 'short', day: 'numeric' });
}
