# Radiology Report Generator — Project Plan

## Overview

A single-file React web application deployed to GitHub Pages that allows radiologists to generate structured reports using premade templates and a searchable phrase library.

---

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | React + Vite |
| Styling | Tailwind CSS |
| Persistence | localStorage + JSON export/import |
| Deployment | GitHub Pages via `gh-pages` + GitHub Actions |
| Backend | None (fully client-side) |

---

## App Layout (3-Panel)

```
┌──────────────────────────────────────────────────────────────┐
│  HEADER: Radiology Report Generator          [Copy] [Clear]  │
├──────────────────┬───────────────────┬───────────────────────┤
│  LEFT PANEL      │  CENTER: EDITOR   │  RIGHT PANEL          │
│                  │                   │                        │
│  Modality        │  [Patient Info]   │  SEARCH BAR           │
│  ► X-ray         │                   │  ┌──────────────────┐ │
│  ► CT            │  Technique        │  │ 🔍 search...     │ │
│  ► MRI           │  [textarea]       │  └──────────────────┘ │
│  ► Ultrasound    │                   │                        │
│                  │  Findings         │  Tab: Templates        │
│  Body Region     │  [textarea]       │  Tab: Phrases          │
│  (submenu)       │                   │                        │
│                  │  Impression       │  List of items         │
│  Common Finding  │  [textarea]       │  (click to insert)     │
│  (submenu)       │                   │                        │
│                  │  [Copy Report]    │  [+ Save New]          │
└──────────────────┴───────────────────┴───────────────────────┘
```

---

## Data Model

```json
{
  "templates": {
    "xray": {
      "chest": {
        "Normal CXR": {
          "technique": "PA upright CXR",
          "findings": "Heart size normal. Mediastinum not widened. No pleural effusion or pneumothorax. Lungs clear bilaterally.",
          "impression": "No active cardiopulmonary disease."
        },
        "Pleural Effusion": {
          "technique": "PA upright CXR",
          "findings": "Blunting of the costophrenic angle noted on the right/left. Homogeneous opacity at the right/left base consistent with pleural effusion.",
          "impression": "Right/left pleural effusion."
        }
      }
    },
    "ct": {},
    "mri": {},
    "us": {}
  },
  "phrases": {
    "xray.chest": [
      "No pleural effusion.",
      "Cardiomegaly noted.",
      "Increased bronchovascular markings."
    ],
    "ct.abdomen": [
      "No free intraperitoneal air.",
      "Liver: homogeneous parenchyma, no focal lesion.",
      "No significant lymphadenopathy."
    ]
  }
}
```

---

## Premade Content (Starter Set)

| Modality | Body Regions | Templates per Region |
|----------|-------------|---------------------|
| X-ray | Chest, Abdomen, Spine, Extremity | 3–5 each |
| CT | Brain, Chest, Abdomen/Pelvis, Spine | 3–5 each |
| MRI | Brain, Spine, Knee, Liver | 3–5 each |
| Ultrasound | Abdomen, Pelvis, Thyroid, Soft tissue | 3–5 each |

Each region includes:
- **1 normal template** (complete, ready to use)
- **2–3 common abnormal findings** (e.g., pleural effusion, hepatic steatosis, disc herniation, renal stone)

---

## Feature Roadmap

### Phase 1 — Core (MVP)

- [x] 3-panel layout
- [x] Modality → Region → Finding template tree (left panel)
- [x] Structured editor: Technique / Findings / Impression textareas
- [x] Click template → auto-fills all 3 fields
- [x] Click phrase → inserts at cursor in the active field
- [x] Copy full formatted report to clipboard
- [x] All premade data bundled in `data/premadeData.js`

### Phase 2 — Search & Save

- [x] Right panel search bar: live-filters both templates and phrases
- [x] Two tabs in right panel: **Templates** | **Phrases**
- [x] "Save as new template" from current editor state (prompts for name → stores to localStorage)
- [x] "Save phrase" button appends to phrase list for current modality + region
- [x] Delete user-saved items

### Phase 3 — Export / Import & Deploy

- [x] Export all user data as `radiology-data.json`
- [x] Import JSON to restore saved templates and phrases
- [x] GitHub Actions: push to `main` → auto-build → deploy to GitHub Pages

---

## Project File Structure

```
radiology-report/
├── public/
│   └── favicon.ico
├── src/
│   ├── data/
│   │   └── premadeData.js        # All built-in templates & phrases
│   ├── components/
│   │   ├── LeftPanel.jsx         # Modality → Region → Finding tree
│   │   ├── ReportEditor.jsx      # Technique / Findings / Impression fields
│   │   └── RightPanel.jsx        # Search, Tabs, Phrase/Template lists
│   ├── hooks/
│   │   └── useLocalStorage.js    # Persistence hook
│   ├── utils/
│   │   └── reportUtils.js        # Copy, export, import helpers
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Actions deploy workflow
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## Claude Code Build Steps

### Step 1 — Scaffold Project

```bash
npm create vite@latest radiology-report -- --template react
cd radiology-report
npm install
npm install tailwindcss @tailwindcss/vite
npm install gh-pages
```

Configure `vite.config.js`:
```js
base: '/radiology-report/'
```

---

### Step 2 — Premade Data (`src/data/premadeData.js`)

Prompt for Claude Code:
> "Create `src/data/premadeData.js` exporting a JS object with modalities (xray, ct, mri, us), each containing body regions, each containing named templates with `technique`, `findings`, and `impression` string fields. Also export a `phrases` object keyed by `modality.region`. Include at least 3 templates and 5 phrases per region. Cover: xray (chest, abdomen, spine, extremity), ct (brain, chest, abdomen, spine), mri (brain, spine, knee, liver), us (abdomen, pelvis, thyroid, soft tissue)."

---

### Step 3 — Left Panel (`src/components/LeftPanel.jsx`)

Prompt for Claude Code:
> "Build a `LeftPanel` component with a collapsible accordion tree: top level = modalities (X-ray, CT, MRI, Ultrasound), second level = body regions, third level = named templates as clickable items. Clicking a template calls `onSelectTemplate(modality, region, templateData)`. Style with Tailwind. Highlight the selected item."

---

### Step 4 — Report Editor (`src/components/ReportEditor.jsx`)

Prompt for Claude Code:
> "Build a `ReportEditor` component with: patient info row (name, date, study type), then three labeled textareas (Technique, Findings, Impression). Track `activeField` (which textarea last had focus) in state. Expose `insertAtCursor(text)` via ref so the right panel can inject phrases. Include a 'Copy Report' button that assembles all fields into a formatted string and copies to clipboard."

---

### Step 5 — Right Panel (`src/components/RightPanel.jsx`)

Prompt for Claude Code:
> "Build a `RightPanel` with a search input and two tabs: Templates and Phrases. Filter both lists live as the user types. Clicking a phrase calls `onInsertPhrase(phrase)`. Clicking a template calls `onSelectTemplate(...)`. Show a '+ Save Phrase' and '+ Save Template' button at the bottom. Allow deleting user-saved items (show a trash icon on hover)."

---

### Step 6 — Persistence Hook (`src/hooks/useLocalStorage.js`)

Prompt for Claude Code:
> "Create a `useLocalStorage(key, initialValue)` hook that reads/writes to localStorage with JSON serialization. Use it in App.jsx to manage `userTemplates` and `userPhrases` state that merges on top of the premade data."

---

### Step 7 — Export / Import (`src/utils/reportUtils.js`)

Prompt for Claude Code:
> "Write `exportUserData(userTemplates, userPhrases)` that creates a JSON blob and triggers a download as `radiology-data.json`. Write `importUserData(file, setUserTemplates, setUserPhrases)` that reads a JSON file via FileReader and merges it into state and localStorage."

---

### Step 8 — GitHub Actions Deploy (`.github/workflows/deploy.yml`)

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## Copy Report Format (Output)

```
RADIOLOGY REPORT
================
Patient: [Name]          Date: [Date]
Study: [Study Type]

TECHNIQUE
---------
[Technique text]

FINDINGS
--------
[Findings text]

IMPRESSION
----------
[Impression text]

Report generated by Radiology Report Generator
```

---

## Suggested Claude Code Session Order

| Session | Goal | Components |
|---------|------|-----------|
| 1 | Scaffold + data | Vite setup, `premadeData.js` |
| 2 | Left panel + editor | `LeftPanel.jsx`, `ReportEditor.jsx` |
| 3 | Right panel + search | `RightPanel.jsx` |
| 4 | Persistence + save/delete | `useLocalStorage.js`, save buttons |
| 5 | Export/import + deploy | `reportUtils.js`, GitHub Actions |
