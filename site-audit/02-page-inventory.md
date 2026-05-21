# 02 · Page Inventory

**Scoring (1–10):** Content quality, Design quality, Clarity, SEO. Higher = better.
**Brand impact:** Helps / Neutral / **Hurts** = does it strengthen the "AI engineer / founder / researcher" positioning?
**Action:** Keep · Improve · Merge · Hide · Rewrite · Delete.

---

## Identity / contact

| Page | Title | Purpose | Audience | Main CTA | Content | Design | Clarity | SEO | Brand | Action |
|---|---|---|---|---|---|---|---|---|---|---|
| `/` | Pugalenthi Magendran \| AI / ML Engineer | Identity, projects, atlases, guides, about, contact | Recruiters · clients · readers | GitHub / Resume (4 ties) | 6 | 7 | **4** | 7 | Neutral | **Rewrite** — invert hierarchy, cut 14 supplementary cards down to 6, sharpen hero |
| `/#contact` | Contact section | Email + form | All | "Send Message" | 7 | 7 | 8 | – | Helps | Keep |
| `/404.html` | 404 | Error page | All | Home | – | – | – | – | Neutral | Keep |

**Notes on `/`:**
- Hero h1 is "Hi, I'm Pugalenthi Magendran." — generic.
- Tagline ("I build intelligent systems, from foundation models and LLM pipelines to real-world AI tools") is passive AI-portfolio template.
- 3 hero stat counters are not credible (`5+ Models Trained`, `92% AUROC`, `3 Production Tools`).
- "About me" paragraph at line 560 is the strongest credibility moment on the site but it is buried under 6 atlas cards + 5 guide cards + 3 build-think-study cards.

---

## Work

| Page | Title | Purpose | Audience | Main CTA | Content | Design | Clarity | SEO | Brand | Action |
|---|---|---|---|---|---|---|---|---|---|---|
| `/projects/` | Projects | Project grid + filter | Recruiters / clients | View project | 7 | 7 | 7 | 7 | Helps | **Improve** — promote, add 1-2 more projects, simplify filter |
| `/projects/retinal-disease-classifier/` | From Prompts to Probes | Detailed case study | Technical readers | GitHub / paper | 9 | 8 | 8 | 8 | **Helps strongly** | Keep |
| `/projects/auth-microservice/` | Auth Microservice | Detailed case study (simple / technical toggle) | Technical / non-technical | GitHub | 9 | 8 | 8 | 8 | **Helps strongly** | Keep |
| `/labs/` | Labs | Experiments + build logs | Engineers / founders | Open experiment | 6 | 7 | 6 | 6 | Helps | **Improve** — add 2-3 real experiments, ship a write-up cadence |

---

## Writing

| Page | Title | Purpose | Audience | Main CTA | Content | Design | Clarity | SEO | Brand | Action |
|---|---|---|---|---|---|---|---|---|---|---|
| `/blog/` | Blog | 45-essay archive (featured + topic groups + filterable archive) | Researchers / engineers / investors | Read essay | 9 | 8 | 8 | 7 | **Helps strongly** | Keep |
| `/blog/posts/*.html` | Individual essays (×45) | Long-form analysis | Domain readers | Next essay / further reading | 8-9 | 8 | 8 | 7 | **Helps strongly** | Keep |
| `/founder-notes/` | Founder Notes | Short-form working notes | Founders / readers | – | **3 (placeholder)** | 6 | 5 | 6 | **Hurts** | **Hide or delete** until real content; or fold into `/about/notes/` |
| `/reading-room/` | Reading Room | Curated library (6 shelves) | All | – | **4 (light)** | 6 | 6 | 6 | Neutral | **Demote** → `/about/reading/` until shelves have full content |

---

## Atlases

| Page | Title | Purpose | Audience | Main CTA | Content | Design | Clarity | SEO | Brand | Action |
|---|---|---|---|---|---|---|---|---|---|---|
| `/ai-map/` | The AI Map (5-layer) | Mental model of AI stack | Learners / engineers | Explore layer | 8 | 8 | 7 | 7 | **Helps strongly** | Keep · consolidate layer CSS / JS |
| `/ai-atlas/` | The AI Atlas (50 papers) | Knowledge graph of foundational papers | Researchers / students | Open atlas | 9 | 8 | 8 | 8 | **Helps strongly** | Keep — flagship asset |
| `/accelerated-computing-atlas/` | Accelerated Computing Atlas | 148-node NVIDIA / chip ecosystem | Infrastructure readers | Open atlas | 9 | 8 | 7 | 6 | **Helps strongly** | Keep — but add missing canonical link |
| `/applied-ai-atlas/` | Applied AI Atlas | 52-domain applied-AI map | Industry readers | Open atlas | 9 | 8 | 7 | 7 | Helps | **Improve** — fix nav (no global header today) |
| `/biological-intelligence-atlas/` | Biological Intelligence Atlas | 10 kinds of biological intelligence | Researchers / curious | Open atlas | 8 | 8 | 7 | 7 | Helps (niche) | Keep — demote from top nav |
| `/ai-field-manual/` | The AI Field Manual | Living glossary, 170+ terms | Learners | Search term | 8 | 8 | 7 | 7 | Helps | **Improve** — add global nav header |

---

## Guides (the most cluttered shelf)

| Page | Title | Purpose | Audience | Main CTA | Content | Design | Clarity | SEO | Brand | Action |
|---|---|---|---|---|---|---|---|---|---|---|
| `/ai-questions/` | AI Questions Canon | 300+ Qs, 25 domains, flashcards / quiz | Learners | Explore | 8 | 8 | 7 | 7 | Helps | Keep · move under `/atlases/` |
| `/ai-knowledge-bank/` | AI Knowledge Bank | Russell & Norvig structured | Learners | Open the bank | 7 | 7 | 6 | 6 | Helps | Keep · move under `/atlases/` · clarify relationship to AI Questions |
| `/ai-consulting-money-map/` | AI Consulting Money Map | What AI consultants sell · 56 services | Solo consultants / founders | Open guide | 9 | 8 | 8 | 6 | Helps (specialist) | **Demote** — not for first-time visitors. Add global nav header. |
| `/scientific-process/` | The Scientific Process | Evidence / bias / belief framework | General | Open guide | 8 | 8 | 7 | 7 | **Hurts (off-brand)** | **Convert to a blog post** or delete from primary nav |
| `/peptides/` | The Peptide World | Peptide science / hype / safety | General | Open guide | 8 | 8 | 8 | 7 | **Hurts (off-brand)** | **Delete from primary nav** — keep file only if you want it indexed; otherwise unlink |

---

## Discovery findings worth flagging

### Files that exist on disk but are not on a homepage path
- `blog/_template.html` — author template (fine, but should be `noindex` or removed from sitemap if ever added).
- `404.html` — fine.

### Sitemap drift (also covered in 06)
| Slug | In `/blog/posts/`? | In `posts.json`? | In `sitemap.xml`? |
|---|:---:|:---:|:---:|
| `hello-world` | ❌ | ❌ | ✅ — **STALE** |
| `no-alexander-without-aristotle` | ✅ | ✅ | ❌ — **MISSING** |
| `the-title-was-wrong` | ✅ | ✅ | ❌ — **MISSING** |

3 small bugs, 5-minute fix.

### Pages with **no** global nav header
- `applied-ai-atlas/index.html`
- `ai-consulting-money-map/index.html`
- `scientific-process/index.html`
- `ai-field-manual/index.html`

A visitor landing on any of these has no "back to Projects / Home / Contact" affordance in the header.

### Pages missing canonical
- `accelerated-computing-atlas/index.html` — no `<link rel="canonical">`.

### Pages whose homepage card description over-promises
- "Founder Notes — Field notes on products, sales, markets, compliance, and trust. Sketches before they become essays or companies." → Actual content is a skeleton.
- "Reading Room — Six shelves, twelve seed resources, three reading passes." → Numbers exist but the resources behind them are thin.

### Page-level recommendations summary

| Decision | Pages |
|---|---|
| **Keep as-is** | `/blog/` + 45 posts, `/projects/retinal-disease-classifier/`, `/projects/auth-microservice/`, `/ai-atlas/`, `/ai-map/`, `/accelerated-computing-atlas/`, `/biological-intelligence-atlas/`, `/ai-field-manual/`, `/ai-questions/`, `/labs/`, `/404.html`, `/robots.txt` |
| **Improve in place** | `/`, `/projects/`, `/applied-ai-atlas/`, `/ai-knowledge-bank/`, `/ai-consulting-money-map/` |
| **Demote from top nav (keep file)** | `/founder-notes/`, `/reading-room/`, `/ai-consulting-money-map/`, `/ai-knowledge-bank/`, `/biological-intelligence-atlas/`, `/ai-field-manual/`, `/accelerated-computing-atlas/`, `/applied-ai-atlas/` |
| **Convert to blog post** | `/scientific-process/`, `/peptides/` |
| **Hide or delete entirely** | (none yet — wait for owner decision) |

---

## Per-page issue snapshot (severity = severity in homepage journey)

| Page | Top issue | Severity |
|---|---|---|
| `/` | Inverted hierarchy: 14 supplementary cards before About | **Critical** |
| `/` | 4 hero CTAs with no priority | High |
| `/` | Stat counters not credible | High |
| `/founder-notes/` | Placeholder content, but in primary nav | High |
| `/reading-room/` | Light content, but in primary nav | High |
| `/peptides/` | Off-brand, in primary nav | High |
| `/scientific-process/` | Off-brand, in primary nav | High |
| `/sitemap.xml` | Stale + missing entries | Medium |
| `/accelerated-computing-atlas/` | Missing canonical link | Medium |
| `/applied-ai-atlas/`, `/ai-consulting-money-map/`, `/scientific-process/`, `/ai-field-manual/` | No global nav | Medium |
| `/projects/` | Only 3 projects on homepage; could push 4-6 | Medium |
| `/labs/` | Light content for the prominence it gets | Medium |
| All atlas pages | Each ships its own CSS / JS bundle; no shared design system for atlas pages | Medium (tech debt) |

---

## Page-level acceptance criteria for "fixed"

A page is "fixed" when:
1. Its purpose is one sentence and the page proves that sentence in the first screen.
2. It has the global nav header consistent with the rest of the site.
3. It has `<title>`, meta description, canonical, OG/Twitter, JSON-LD as appropriate.
4. Mobile layout works at 320 px width with no horizontal scroll.
5. The primary CTA is unambiguous.
6. It links back to at least one related page in the site (avoid dead-end pages).
