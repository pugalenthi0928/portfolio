# 07 · Recommended New Architecture

## Design principles

1. **Five top-level slots, no more.** Every visitor should be able to read the nav and pick a path within 2 seconds.
2. **One purpose per page.** A page tells a visitor one thing well.
3. **Identity first.** Hero answers "who is this person and what do they do" before showing 14 supplementary cards.
4. **Off-brand pages off the front door.** Peptides, Scientific Process, generic "thinking systems" content should not compete for nav space with Projects and Blog.
5. **Placeholders don't get top-nav slots.** Founder Notes / Reading Room stay in About until they have real content.
6. **Atlases are the unique asset; consolidate, not multiply.** 6 atlases + 5 guides + a field manual + a knowledge bank → one Atlases page with 7-8 cards.

---

## Proposed primary navigation

```
[ P. ]    Work   ·   Writing   ·   Atlases   ·   About   ·   Contact
```

**Why these five:**

- **Work** = projects + labs. The "shipping" pillar.
- **Writing** = the 45-essay blog. The "thinking" pillar.
- **Atlases** = the 6-8 source-backed maps. The "synthesis" pillar — this is genuinely differentiated and worth its own slot.
- **About** = bio · experience · reading list · working notes. The "who" pillar.
- **Contact** = email · form · social. The "reach me" pillar.

Compare with current nav: **Projects · Labs · Atlases ▾ (6 items) · Guides ▾ (5 items) · About · Blog · Notes · Contact** → 8 items + 11 dropdown items + Blog ambiguity.

---

## Proposed site map

```
/                                    HOME
├── /work/                            WORK (lists projects + labs)
│   ├── /projects/                    Projects index (filterable grid)
│   │   ├── /projects/retinal-disease-classifier/
│   │   ├── /projects/auth-microservice/
│   │   ├── /projects/forge/            (new — pull out of homepage card)
│   │   └── /projects/gatecrown/        (new — pull out of homepage card)
│   └── /labs/                        Labs (live experiments)
│
├── /blog/                            WRITING (45 essays)
│   ├── /blog/posts/{slug}.html
│   └── /blog/feed.xml
│
├── /atlases/                         ATLASES (single landing for all 7-8 maps)
│   ├── /atlases/ai-map/                  (currently /ai-map/)
│   ├── /atlases/ai-atlas/                (currently /ai-atlas/)
│   ├── /atlases/accelerated-computing/   (currently /accelerated-computing-atlas/)
│   ├── /atlases/applied-ai/              (currently /applied-ai-atlas/)
│   ├── /atlases/biological-intelligence/ (currently /biological-intelligence-atlas/)
│   ├── /atlases/field-manual/            (currently /ai-field-manual/)
│   ├── /atlases/questions/               (currently /ai-questions/)
│   └── /atlases/knowledge-bank/          (currently /ai-knowledge-bank/)
│
├── /about/                           ABOUT
│   ├── /about/                          Bio + experience + photo
│   ├── /about/reading/                  (currently /reading-room/)
│   ├── /about/notes/                    (currently /founder-notes/)
│   └── /about/resume.pdf                (download)
│
├── /#contact                         CONTACT (section on home)
│
├── /404.html
├── /robots.txt
└── /sitemap.xml
```

### Removed from primary nav (but optionally kept as files)

- `/ai-consulting-money-map/` → either move under `/atlases/` as a specialist atlas, or convert to a long-form blog post.
- `/scientific-process/` → convert into one strong essay under `/blog/`, or hide entirely.
- `/peptides/` → convert into one essay under `/blog/`, or delete. **Off-brand for AI-engineer positioning.**

### Decisions to make before implementation

1. **Move atlas pages under `/atlases/` prefix, or keep current top-level URLs?**
   - **Move:** cleaner long-term IA, but creates ~6 redirects (301 from `/ai-map/` → `/atlases/ai-map/`, etc.).
   - **Keep current URLs:** preserves existing inbound links / SEO equity, but URL structure stays flat.
   - **Recommendation:** keep current URLs for now (zero migration cost), add `/atlases/` as a landing page that links to them. Decide on a folder reshuffle in a separate, future phase if SEO data supports it.

2. **Keep `/ai-knowledge-bank/` and `/ai-questions/` as separate atlases?**
   - They overlap thematically. Either present them as two related learning systems on `/atlases/`, or merge into a single page with two sections.
   - **Recommendation:** keep separate for now, link them prominently from each other.

3. **Founder Notes and Reading Room — hide, demote, or finish?**
   - Both are placeholder structures with skeleton content.
   - **Recommendation:** move under `/about/notes/` and `/about/reading/`, mark them clearly as "in progress" with a date, and decide in 4-6 weeks whether to invest in content or remove.

4. **Peptides and Scientific Process — delete, convert, or keep but hide?**
   - Both are substantial pages (700-1000 lines) but **off-brand**.
   - **Recommendation:** delete from primary nav immediately. Optionally convert the most valuable parts into 1-2 blog posts. Keep the files as long as `noindex` is added, or delete entirely if no future reuse.

---

## Proposed homepage structure

```
1. HERO  (~ 1 screen)
   Eyebrow:   AI engineer · Melbourne · Perplexity AI fellow
   H1:        Pugalenthi Magendran
   Subtitle:  One-line proposition (see 04-content-positioning-audit.md drafts A/B/C)
   CTAs:      [Read essays] (primary)   [See projects] (secondary)
   Stat row:  · Master of AI, Monash · Business Fellow, Perplexity AI · 45 essays · 6 atlases
              (chips, not animated counters)

2. FEATURED PROJECTS  (3-6 cards in a tight bento)
   Each card: title · one-sentence pitch · one metric · link.

3. SHORT ABOUT  (move from line 550 to line ~ 240)
   Two paragraphs + portrait.
   Currently the strongest 60 words on the site — promote them.

4. LATEST WRITING  (5-6 essay cards, newest from posts.json)
   "Read all 45 essays →"

5. ATLASES PEEK  (1 hero card + 2 secondary cards)
   "I also maintain a public atlas of the AI stack."
   Featured: AI Map · AI Atlas · Accelerated Computing.
   "See all atlases →"

6. EXPERIENCE  (compact timeline, 4 items)
   Drop the Coursera cert block. Compress to a single line:
   "Coursera specialisations in ML, DL, NLP, Data Analytics (2023-2024)."

7. CONTACT
   Email + form (current implementation; keep).
```

This is **7 sections**, down from 8 (Atlases + Guides + Build-Think-Study merge into one "Atlases peek"). The visitor's path goes Identity → Proof → Person → Thinking → Context → Receipts → Reach me. That's a story.

---

## Proposed `/atlases/` landing page

A new dedicated `/atlases/` route that consolidates all 6-8 atlases on one page. It replaces the homepage Atlases section + the homepage Guides section.

```
/atlases/

  H1: Atlases
  Subtitle: Source-backed maps of the AI field. Six interactive atlases, two learning systems, one field manual — all designed to be audited and updated.

  Atlas cards (one consistent template, current /atlas-card/ pattern):

  Foundations
    AI Map · 5-layer taxonomy of AI techniques  →
    AI Atlas · 50 landmark papers, graph view  →

  Manufacture
    Accelerated Computing Atlas · 148 nodes across the AI hardware stack  →

  Application
    Applied AI Atlas · Where AI is deployed across 52 domains  →

  Biology
    Biological Intelligence Atlas · 10 kinds of biological intelligence, 8 deep dives  →

  Reference
    AI Field Manual · 170+ terms explained from first principles  →

  Learning systems  (subgroup)
    AI Questions Canon · 300+ questions across 25 domains  →
    AI Knowledge Bank · Russell & Norvig structured into 28 domains  →
```

If `/ai-consulting-money-map/` is kept, it sits as its own card under a "Specialist" subgroup, or moves out entirely.

---

## Proposed `/about/` landing page

`/about/` becomes the canonical "who is Pugalenthi" page. It absorbs Founder Notes and Reading Room as sub-pages.

```
/about/

  H1: About
  Photo + 3-4 paragraph bio (expansion of current About section)
  Education + experience (current timeline, compact)
  Skills (current tag grid, compressed)
  Reading list link  → /about/reading/
  Working notes link → /about/notes/
  Resume link        → /about/resume.pdf
```

---

## Mobile nav for the proposed structure

```
[ P. ]    ☰

When opened:
  Work
    └── Projects
    └── Labs
  Writing
    └── Blog
  Atlases
    └── AI Map · AI Atlas · Accelerated Computing · Applied AI · Biological Intelligence · Field Manual · Questions · Knowledge Bank
  About
    └── Bio · Reading · Notes · Resume
  Contact
```

5 top groups, each collapsible. Compared to current 19-item flat list, this drops the average tap count from 4-5 (scroll to find item) to 2 (open group → tap item).

---

## URL strategy

### Keep current URLs (preferred — zero migration)

- All atlas URLs stay at `/ai-map/`, `/ai-atlas/`, etc.
- A new `/atlases/` landing page is added with cards linking to them.
- Update the global nav to point at `/atlases/` instead of opening a dropdown.

### Optional folder reshuffle (later phase)

If you want clean URLs:
- `/ai-map/` → `/atlases/ai-map/` (301 redirect via Netlify `_redirects` or GitHub Pages config)
- ... etc.

But this requires SEO equity transfer. Don't do this in the first round; do it later, after content cleanup, if SEO data justifies it.

### Decisions for off-brand pages

| Page | Action | Why |
|---|---|---|
| `/peptides/` | **Delete** from nav. **Add `noindex`** if file remains. | Off-brand. Strong content but unrelated to AI engineering. |
| `/scientific-process/` | **Convert** to 1 blog post (or delete). | Off-brand. Strong content but not AI-specific. |
| `/founder-notes/` | **Move** to `/about/notes/`. **Hide from primary nav** until 10+ real notes exist. | Placeholder. |
| `/reading-room/` | **Move** to `/about/reading/`. **Demote** from primary nav. | Lightweight. |

---

## Footer

Reduce footer nav from 16 links to a structured 4-column block:

```
Footer
  ─ Work          ─ Writing       ─ Atlases       ─ About
    Projects        Blog            AI Map          Bio
    Labs            RSS feed        AI Atlas        Reading list
                                    + 6 more        Working notes
                                                    Resume

[© 2026 Pugalenthi Magendran · GitHub · LinkedIn · Email]
```

Same density as today but grouped, scannable, and consistent with the new IA.

---

## Migration risk and rollback

### Low-risk steps (can be done in any order)

- Add a skip link.
- Fix sitemap drift.
- Add missing canonicals.
- Trim homepage hero CTAs to 2.
- Rewrite hero H1 and subtitle.
- Replace stat counters with chips.

### Medium-risk steps (need careful execution)

- Cut homepage Atlases / Guides / Build-Think-Study from 14 cards to 3-5.
- Reduce global nav from 8 to 5 items.
- Demote Founder Notes and Reading Room out of primary nav.

### Higher-risk steps (defer until later)

- Folder reshuffle to `/atlases/...` and `/about/...` (requires 301 redirects).
- Delete peptides and scientific-process pages (requires content migration if any is to be preserved).
- Component refactor of CSS / JS to eliminate duplication.

### Rollback plan

Each phase corresponds to a single commit (per the roadmap in 08). Any phase can be reverted with `git revert <sha>`. The homepage cuts (Phase 2) and the nav cuts (Phase 3) carry the highest visual change and are the easiest to roll back.

---

## Acceptance criteria for "new architecture is live"

1. Primary nav has exactly 5 items: Work · Writing · Atlases · About · Contact.
2. Homepage has 7 H2 sections or fewer.
3. Homepage hero passes the 5-second test: identity + role + 1-2 proof points.
4. Off-brand pages (`/peptides/`, `/scientific-process/`) are not in primary nav.
5. Placeholder pages (`/founder-notes/`, `/reading-room/`) are not in primary nav.
6. `/atlases/` exists as a landing page consolidating 6-8 atlas cards.
7. `/about/` exists as a single canonical About page.
8. Sitemap matches reality (no stale, no missing entries).
9. All atlas pages have global nav header + canonical link.
10. Mobile nav has 5 collapsible groups, not a 19-item flat list.

If all 10 are true, the new architecture is in place.
