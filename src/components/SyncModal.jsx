import { useState } from 'react';
import { saveToGist, loadFromGist } from '../utils/gistSync.js';
import { applyImportedData } from '../utils/reportUtils.js';

// Lets the user push/pull their saved templates & phrases to a private
// GitHub Gist so the same set shows up on another device. The token and
// gist id are kept in this browser only (see App's radiology.gistToken /
// radiology.gistId) — nothing here talks to anywhere but api.github.com.
export default function SyncModal({
  onClose,
  token,
  setToken,
  gistId,
  setGistId,
  autoSync,
  setAutoSync,
  lastSyncedAt,
  userTemplates,
  userPhrases,
  addedWords,
  setUserTemplates,
  setUserPhrases,
  setAddedWords,
}) {
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSave = async () => {
    setBusy(true);
    setMessage(null);
    try {
      const id = await saveToGist({ token, gistId, userTemplates, userPhrases, addedWords });
      setGistId(id);
      setMessage({ type: 'ok', text: `Saved to gist ${id}.` });
    } catch (err) {
      setMessage({ type: 'error', text: err.message });
    } finally {
      setBusy(false);
    }
  };

  const handleLoad = async () => {
    setBusy(true);
    setMessage(null);
    try {
      const data = await loadFromGist({ token, gistId });
      const { templateCount, phraseCount } = applyImportedData(data, setUserTemplates, setUserPhrases, setAddedWords);
      setMessage({ type: 'ok', text: `Loaded ${templateCount} template(s) and ${phraseCount} phrase(s). Anything already saved here was kept.` });
    } catch (err) {
      setMessage({ type: 'error', text: err.message });
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={onClose}>
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-md p-5"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-slate-800">Sync via GitHub Gist</h2>
          <button className="text-slate-400 hover:text-slate-700" onClick={onClose} aria-label="Close">✕</button>
        </div>

        <p className="text-xs text-slate-500 mb-3">
          Save your templates & phrases to a private GitHub Gist, then load them on another
          device with the same token and Gist ID. Needs a{' '}
          <a
            className="underline"
            href="https://github.com/settings/tokens/new?description=Radiology%20Report%20Generator%20sync&scopes=gist"
            target="_blank"
            rel="noreferrer"
          >
            personal access token
          </a>{' '}
          with the "gist" scope.
        </p>

        <label className="block text-xs font-medium text-slate-600 mb-1">GitHub token</label>
        <input
          type="password"
          className="w-full border rounded px-2 py-1.5 text-sm mb-3"
          value={token}
          onChange={e => setToken(e.target.value)}
          placeholder="ghp_..."
          autoComplete="off"
        />

        <label className="block text-xs font-medium text-slate-600 mb-1">Gist ID (leave blank to create one)</label>
        <input
          type="text"
          className="w-full border rounded px-2 py-1.5 text-sm mb-4"
          value={gistId}
          onChange={e => setGistId(e.target.value)}
          placeholder="e.g. 8f3a9c2b1d4e5f6a7b8c9d0e1f2a3b4c"
        />

        {message && (
          <div className={`text-xs mb-3 ${message.type === 'error' ? 'text-red-600' : 'text-green-700'}`}>
            {message.text}
          </div>
        )}

        <div className="flex gap-2 mb-4">
          <button
            className="flex-1 bg-slate-800 text-white text-sm rounded px-3 py-2 disabled:opacity-50"
            onClick={handleSave}
            disabled={busy}
          >
            {busy ? 'Working…' : 'Save to gist'}
          </button>
          <button
            className="flex-1 border border-slate-300 text-sm rounded px-3 py-2 disabled:opacity-50"
            onClick={handleLoad}
            disabled={busy}
          >
            {busy ? 'Working…' : 'Load from gist'}
          </button>
        </div>

        <div className="border-t pt-3">
          <label className="flex items-center gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={autoSync}
              onChange={e => setAutoSync(e.target.checked)}
              disabled={!token || !gistId}
            />
            Sync automatically in the background
          </label>
          <p className="text-xs text-slate-500 mt-1">
            {!token || !gistId
              ? 'Save to (or load from) a gist at least once first, so there\'s a token and Gist ID to sync with.'
              : 'Pulls from the gist when this tab opens and every minute after, and pushes changes about 3 seconds after you make them.'}
          </p>
          {autoSync && lastSyncedAt && (
            <p className="text-xs text-slate-400 mt-1">Last synced {new Date(lastSyncedAt).toLocaleString()}</p>
          )}
        </div>
      </div>
    </div>
  );
}
