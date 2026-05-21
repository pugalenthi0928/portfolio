# 01 · Site Map

## Discovered routes (full list)

### Top-level

| Route | Type | File | Lines | Notes |
|---|---|---|---|---|
| `/` | Homepage | `index.html` | 837 | Hero + Projects + Atlases + Guides + Build/Think/Study + About + Experience + Contact |
| `/404.html` | 404 | `404.html` | – | Present |
| `/sitemap.xml` | sitemap | `sitemap.xml` | 287 | 62 URLs; has drift (see 06-seo-accessibility-audit.md) |
| `/robots.txt` | robots | `robots.txt` | 4 | `User-agent: *`, sitemap referenced. OK. |
| `/CNAME` | GH-Pages | `CNAME` | – | `pugalenthimagendran.com` |

### Projects

| Route | Title | Lines | Status |
|---|---|---|---|
| `/projects/` | Projects | 276 | Grid + filter; hero card + small cards. |
| `/projects/retinal-disease-classifier/` | From Prompts to Probes | 957 | Strong case study. |
| `/projects/auth-microservice/` | Auth Microservice | 1023 | Strong case study with mode toggle. |

### Blog

| Route | Title | Notes |
|---|---|---|
| `/blog/` | Blog index | Loads `posts.json`; renders featured + topic groups + filterable archive. |
| `/blog/posts/*.html` | 45 essays | All present; range from 30 KB to 91 KB per essay. |
| `/blog/feed.xml` | RSS feed | Linked from `<head>` of homepage + blog index. |
| `/blog/_template.html` | Template | Author template (private). |

### Atlases (top-level)

| Route | Title | Lines | Sub-assets |
|---|---|---|---|
| `/ai-atlas/` | The AI Atlas (50 papers) | 271 | `atlas.js`, `atlas.css`, `data.js` |
| `/ai-map/` | The AI Map (5-layer stack) | **1948** | 6 layer-specific CSS files, 6 layer-specific JS files, 5 data files |
| `/accelerated-computing-atlas/` | Accelerated Computing Atlas (148 nodes) | 511 | `atlas.js`, `atlas.css`, `atlas-data.js` |
| `/applied-ai-atlas/` | Applied AI Atlas (52 domains) | 575 | `applied-ai.js`, `applied-ai.css`, `applied-ai-data.js` |
| `/biological-intelligence-atlas/` | Biological Intelligence Atlas | 624 | `bio.js`, `bio.css` |
| `/ai-field-manual/` | The AI Field Manual (170+ terms) | **3011** | All inline (no shared atlas pattern) |

### Guides (top-level)

| Route | Title | Lines | Sub-assets |
|---|---|---|---|
| `/ai-consulting-money-map/` | AI Consulting Money Map | 611 | `ai-consulting.js`, `ai-consulting.css`, `ai-consulting-data.js` |
| `/ai-questions/` | The AI Questions Canon (300+ Qs) | 334 | `questions.js`, `questions.css`, `questions-data.js` |
| `/ai-knowledge-bank/` | AI Knowledge Bank (Russell & Norvig) | 311 | (uses shared style.css + builder-os.css) |
| `/scientific-process/` | The Scientific Process | 705 | `scientific-process.css` (no JS) |
| `/peptides/` | The Peptide World | **977** | `peptides.js`, `peptides.css` |

### Build / Think / Study trio

| Route | Title | Lines | Notes |
|---|---|---|---|
| `/labs/` | Labs | 328 | Experiments. Uses `builder-os.css`. |
| `/founder-notes/` | Founder Notes | 273 | Placeholder structure. Uses `builder-os.css`. |
| `/reading-room/` | Reading Room | 334 | Skeleton library. Uses `builder-os.css`. |

### Global assets

| File | Lines | Purpose |
|---|---|---|
| `style.css` | 3105 | Global stylesheet (~64 KB) |
| `builder-os.css` | ~700 | Labs / Founder Notes / Reading Room shared styles (~20 KB) |
| `script.js` | 1450 | 18-feature global JS (~44 KB) |
| `favicon.svg` | – | Custom SVG favicon |

### Images at root

`pugalenthi-graduation.jpeg`, `retinal_disease_classifier.jpg`, `forgecover.png`, `gatecrown.jpg`, `ogimage.png`, `resume.pdf`. 19 image files in total across project.

---

## Page categories (current)

```
ROOT
├── Identity & contact
│   ├── /           (homepage, ~50KB)
│   └── /#contact
│
├── Work
│   ├── /projects/
│   ├── /projects/retinal-disease-classifier/
│   ├── /projects/auth-microservice/
│   └── /labs/
│
├── Writing
│   ├── /blog/                         (45 essays)
│   ├── /founder-notes/                (placeholder)
│   └── /reading-room/                 (placeholder)
│
├── Atlases (6)
│   ├── /ai-map/
│   ├── /ai-atlas/
│   ├── /accelerated-computing-atlas/
│   ├── /applied-ai-atlas/
│   ├── /biological-intelligence-atlas/
│   └── /ai-field-manual/
│
└── Guides (5)
    ├── /ai-consulting-money-map/
    ├── /ai-questions/
    ├── /ai-knowledge-bank/
    ├── /scientific-process/
    └── /peptides/
```

Total **20 distinct top-level / atlas / guide routes** + 45 blog post routes + 2 project deep-dives = **67 indexable HTML pages**.

---

## Current navigation structure (as built)

### Desktop header (8 visible slots, 2 dropdowns)
```
[ P. ]   Projects | Labs | Atlases ▾ | Guides ▾ | About | Blog | Notes | Contact
                              │              │
                              │              ├── Money (AI Consulting Money Map)
                              │              ├── Thinking (AI Questions Canon)
                              │              ├── Mastery (AI Knowledge Bank)
                              │              ├── Truth (Scientific Process)
                              │              └── Health (Peptide World)
                              │
                              ├── Foundations (AI Map)
                              ├── Papers (AI Atlas)
                              ├── Manufacture (Accelerated Computing Atlas)
                              ├── Application (Applied AI Atlas)
                              ├── Biology (Biological Intelligence Atlas)
                              └── Library (Reading Room)   ← ⚠ misfiled, see issues
```

### Mobile menu (19 flat items)
```
Projects · Labs · About · Experience · Blog · Founder Notes
  ─── Atlases ───
AI Map · AI Atlas · Accelerated Computing Atlas · Applied AI Atlas · Biological Intelligence Atlas · Reading Room
  ─── Guides ───
AI Consulting Money Map · AI Questions Canon · AI Knowledge Bank · Scientific Process · Peptide World
Contact
```

### Footer (16 links)
```
Projects · Labs · Atlases · About · Experience · Blog · Founder Notes ·
Reading Room · AI Map · AI Atlas · Accelerated Computing Atlas · Applied AI Atlas ·
Biological Intelligence Atlas · AI Consulting Money Map · Scientific Process · Contact
```

**Inconsistencies caught:**
- Reading Room is filed under "Atlases" in desktop nav but is a *library*, not an atlas.
- Footer omits Peptides and AI Questions / AI Knowledge Bank / AI Field Manual — does not match header.
- 4 of 14 atlas / guide pages (`applied-ai-atlas/`, `ai-consulting-money-map/`, `scientific-process/`, `ai-field-manual/`) use entirely custom in-page nav rather than the global header. A visitor inside those pages cannot easily return to Projects or Contact via the header.

---

## Suggested new structure (preview — full proposal in 07-recommended-new-architecture.md)

```
Home  ·  Work  ·  Writing  ·  Atlases  ·  About  ·  Contact

Home          → identity + 3-6 featured projects + 3 latest essays + 1 featured atlas + contact CTA
Work          → /work/ (lists projects + labs experiments)
  └─ Projects (Retinal · Auth · Forge · GateCrown · …)
  └─ Labs experiments (kept under /work/labs/ or /labs/)
Writing       → /blog/ (45 essays)
Atlases       → /atlases/ (6 cards: AI Map · AI Atlas · ACA · Applied AI · Bio · Field Manual)
About         → /about/ (story + experience + reading + notes if real, else hidden)
Contact       → /#contact

Demoted out of primary nav (still indexed, linked from related content):
  /ai-consulting-money-map/, /ai-questions/, /ai-knowledge-bank/  ← live under /atlases/ as a "Learning systems" subgroup
  /scientific-process/  ← convert into a blog post or delete
  /peptides/  ← delete or convert into a blog post; off-brand
  /founder-notes/  ← live under /about/notes/ once content exists, else hide
  /reading-room/  ← live under /about/reading/, light-weight
```

Net effect: visitor decisions go from **8 + dropdowns** to **5**. Off-brand pages (peptides, scientific process) leave the front door. Placeholder pages (founder-notes, reading-room) move under About until they have real content.
