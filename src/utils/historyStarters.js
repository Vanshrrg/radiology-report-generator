// Quick-insert building blocks for the History field, derived from a frequency
// scan of the actual HISTORY: lines across every source dictation template
// (272 lines total) — these are the connector words/phrases that show up over
// and over, not any single patient's real history. Counts are from that scan.
export const HISTORY_STARTERS = [
  { group: 'Age & sex', items: [
    { label: '-year-old male', text: 'A -year-old male ' },
    { label: '-year-old female', text: 'A -year-old female ' },
    { label: '-year-old boy', text: 'A -year-old boy ' },
    { label: '-year-old girl', text: 'A -year-old girl ' },
  ]},
  { group: 'Connectors', items: [
    { label: 'known case of', text: 'known case of ' },
    { label: 'with history of', text: 'with history of ' },
    { label: 'S/P', text: 'S/P ' },
    { label: 'presented with', text: 'presented with ' },
    { label: 'physical examination showed', text: 'Physical examination showed ' },
  ]},
  { group: 'Reason for study', items: [
    { label: 'sent to evaluate', text: 'This study was sent to evaluate ' },
    { label: 'sent to follow up', text: 'This study was sent to follow up.' },
    { label: 'sent to rule out', text: 'This study was sent to rule out ' },
    { label: 'requested for surveillance', text: 'This study was requested for surveillance.' },
  ]},
];
