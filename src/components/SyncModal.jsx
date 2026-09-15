import { useState } from 'react';
import { saveToGist, loadFromGist, findOwnGist } from '../utils/gistSync.js';
import { mergeTemplates, mergePhrases } from '../utils/reportUtils.js';

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

  // One button, two-way: find this token's own sync gist (so a second device
  // needs only the same token, not a copied ID), pull whatever's already in
  // it, merge with what's here (computed directly rather than via React
  // state, so the push right after doesn't race a state update that hasn't
  // landed yet), apply that merge locally, then push the combined result
  // back up. On the very first run anywhere, with no gist yet, one gets created.
  const handleSync = async () => {
    setBusy(true);
    setMessage(null);
    try {
      let currentGistId = gistId;
      if (!currentGistId) {
        currentGistId = await findOwnGist(token);
        if (currentGistId) setGistId(currentGistId);
      }
      let mergedTemplates = userTemplates;
      let mergedPhrases = userPhrases;
      let mergedWords = addedWords;
      let pulledTemplateCount = 0;
      let pulledPhraseCount = 0;
      if (currentGistId) {
        const data = await loadFromGist({ token, gistId: currentGistId });
        if (data.templates) mergedTemplates = mergeTemplates(userTemplates, data.templates);
        if (data.phrases) mergedPhrases = mergePhrases(userPhrases, data.phrases);
        if (data.words?.length) mergedWords = Array.from(new Set([...(addedWords || []), ...data.words]));
        pulledTemplateCount = Object.values(data.templates || {}).reduce(
          (n, regions) => n + Object.values(regions || {}).reduce((m, named) => m + Object.keys(named || {}).length, 0),
          0,
        );
        pulledPhraseCount = Object.values(data.phrases || {}).reduce((n, list) => n + (list?.length || 0), 0);
        setUserTemplates(mergedTemplates);
        setUserPhrases(mergedPhrases);
        setAddedWords(mergedWords);
      }
      const id = await saveToGist({
        token,
        gistId: currentGistId,
        userTemplates: mergedTemplates,
        userPhrases: mergedPhrases,
        addedWords: mergedWords,
      });
      setGistId(id);
      // Once a sync has succeeded there's a token and gist to keep syncing
      // with, so background auto-sync switches on right away — no separate
      // toggle to remember.
      setAutoSync(true);
      setMessage({
        type: 'ok',
        text: currentGistId
          ? `Synced — merged in ${pulledTemplateCount} template(s) and ${pulledPhraseCount} phrase(s). Auto-sync is now on.`
          : `First sync on this account — saved your templates & phrases. Auto-sync is now on.`,
      });
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
          Syncs your templates & phrases with a private GitHub Gist — merging in whatever's
          already there, then saving the combined set back. Enter the same token on another
          device to sync it too — it finds your existing gist automatically. Needs a{' '}
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
          className="w-full border rounded px-2 py-1.5 text-sm mb-4"
          value={token}
          onChange={e => setToken(e.target.value)}
          placeholder="ghp_..."
          autoComplete="off"
        />

        {message && (
          <div className={`text-xs mb-3 ${message.type === 'error' ? 'text-red-600' : 'text-green-700'}`}>
            {message.text}
          </div>
        )}

        <button
          className="w-full bg-slate-800 text-white text-sm rounded px-3 py-2 disabled:opacity-50 mb-4"
          onClick={handleSync}
          disabled={busy}
        >
          {busy ? 'Syncing…' : 'Sync now'}
        </button>

        <div className="border-t pt-3">
          <p className="text-xs text-slate-500">
            {autoSync
              ? 'Auto-sync is on: pulls from the gist when this tab opens and every minute after, and pushes changes about 3 seconds after you make them.'
              : 'After the first "Sync now", this device keeps syncing in the background automatically.'}
          </p>
          {autoSync && lastSyncedAt && (
            <p className="text-xs text-slate-400 mt-1">Last synced {new Date(lastSyncedAt).toLocaleString()}</p>
          )}
        </div>
      </div>
    </div>
  );
}
