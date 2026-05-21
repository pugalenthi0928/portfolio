# 08 · Fix Roadmap

Six phases. Each phase is a single coherent edit set. Phases can be done sequentially or paused between phases. The site stays shippable at the end of each phase.

---

## Phase 1 — Critical cleanup

**Goal:** fix bugs that hurt SEO / a11y / brand without changing IA. Low risk, fast wins.

| # | Change | Files | Why it matters | Risk | Complexity | Acceptance |
|---|---|---|---|---|---|---|
| 1.1 | Add skip-link to all pages | `index.html`, all atlas/guide pages, blog/index, project pages (~60 files) — or, ideally, one shared partial | WCAG 2.4.1; first focusable item should be "skip to content" | Low | S | Tab from URL bar; first focused element is the skip-link. |
| 1.2 | Fix sitemap drift | `sitemap.xml` | SEO; ensures crawlers see all 45 essays and don't 404 on `hello-world` | Low | XS | `diff /blog/posts/*.html vs sitemap.xml` returns empty. |
| 1.3 | Add `<link rel="canonical">` to `accelerated-computing-atlas/index.html` and `ai-consulting-money-map/index.html` | both files | SEO; canonical URL signal | Low | XS | Both pages have `<link rel="canonical" href="...">` in head. |
| 1.4 | Add global nav header to `applied-ai-atlas/`, `ai-consulting-money-map/`, `scientific-process/`, `ai-field-manual/` | 4 files | UX consistency; visitors can navigate back | Low | M | All 4 pages have the same `<nav class="nav">` markup as `/labs/index.html`. |
| 1.5 | Rewrite homepage H1 to include role | `index.html` line 191 | SEO + 5-second clarity | Low | XS | H1 reads "Pugalenthi Magendran — AI / ML engineer" or similar. |
| 1.6 | Rewrite homepage hero subtitle | `index.html` lines 195-198 | Positioning | Low | XS | One sharp sentence; see 04 for drafts. |
| 1.7 | Replace stat counters with chips | `index.html` lines 572-597 | Credibility | Low | S | Three factual chips replace counter animation. |
| 1.8 | Add static `<ul>` of post links inside `<noscript>` on blog index | `blog/index.html` lines 146-150 | SEO; helps crawlers without JS | Low | S | `view-source` shows 45 `<li><a href=…>` lines in noscript. |
| 1.9 | Trim Coursera certifications block (or compress to one line) | `index.html` lines 691-738 | Brand strength (avoid junior signal) | Low | S | Cert block has 1-2 lines or is removed. |
| 1.10 | Bump mobile-nav row height to ≥ 48 px | `style.css` mobile nav rules | WCAG 2.5.5 | Low | XS | Tap targets ≥ 48 px on mobile. |

**Risk envelope:** none of these changes break the site. Each is reversible in 1 commit.

**Estimated total time:** 2-3 hours.

---

## Phase 2 — Homepage restructure

**Goal:** cut the homepage from 8 H2 sections + 14 supplementary cards to 7 sections + 3-5 supplementary cards. The visitor reads identity → projects → about → writing → atlases peek → experience → contact.

| # | Change | Files | Why it matters | Risk | Complexity | Acceptance |
|---|---|---|---|---|---|---|
| 2.1 | Reorder homepage: move About above Atlases | `index.html` move section block | Promotes strongest 60 words | Low | M | About appears at line ~240, before any atlas card. |
| 2.2 | Cut homepage Atlases section from 6 cards to 1 hero + 2 secondary cards | `index.html` lines 321-418 | Removes 4 atlas cards from homepage | Medium | M | Section renders 3 cards + "See all atlases" link to `/atlases/`. |
| 2.3 | Remove homepage Guides section entirely | `index.html` lines 421-505 | -5 supplementary cards | Medium | S | Section removed; corresponding `#guides` id removed. |
| 2.4 | Remove homepage "Build, Think, Study" trio | `index.html` lines 508-547 | -3 supplementary cards; collapse into 1 sentence in About | Medium | S | Section removed; one sentence in About references /about/notes/ and /about/reading/. |
| 2.5 | Remove marquee strips below hero | `index.html` lines 224-236 | Decorative noise; tech list duplicates Skills section | Low | S | Marquees removed; corresponding `.marquee` CSS demoted. |
| 2.6 | Reduce hero CTAs from 4 to 2 (Read essays + See projects) | `index.html` lines 199-216 | Clear primary action | Low | S | 2 buttons in hero; Resume + Social as small secondary links elsewhere. |
| 2.7 | Add "Latest writing" section pulling 5-6 posts from posts.json | `index.html` new section, `script.js` new init | Surfaces strongest asset (blog) | Medium | M | New section renders 5 most recent posts. |
| 2.8 | Replace 3 stat counters with 4 factual chips (already done in Phase 1) | confirm | Verify Phase 1.7 is rendering correctly | – | – | – |

**Risk envelope:** medium. Removes content from homepage that some inbound links may anchor to (`#atlases`, `#guides`, `#builder-os`). Add anchors / aliases if any inbound links use those IDs.

**Estimated total time:** 4-6 hours.

---

## Phase 3 — Navigation and IA cleanup

**Goal:** collapse global nav from 8 items + 2 dropdowns to 5 items. Decide which off-brand and placeholder pages stay live.

| # | Change | Files | Why it matters | Risk | Complexity | Acceptance |
|---|---|---|---|---|---|---|
| 3.1 | Create `/atlases/index.html` consolidating 6-8 atlas cards | new file | New IA landing page | Medium | M | Page exists at `/atlases/` with the design proposed in 07. |
| 3.2 | Create `/about/index.html` (replace homepage `#about` anchor or keep both) | new file | Canonical About page | Medium | M | Page exists at `/about/`. |
| 3.3 | Move `/founder-notes/` → `/about/notes/` (or hide it) | move directory | Demote placeholder | Medium | M | `/about/notes/` exists; redirect from `/founder-notes/` if folder rename. |
| 3.4 | Move `/reading-room/` → `/about/reading/` (or hide it) | move directory | Demote light content | Medium | M | `/about/reading/` exists; redirect if folder rename. |
| 3.5 | Update global nav to 5 items: Work / Writing / Atlases / About / Contact | `index.html` + all 60+ pages | Single source of truth needed | High (touches every page) | L | All pages show identical 5-item nav. |
| 3.6 | Update mobile nav to 5 collapsible groups | `index.html` + all 60+ pages | Better mobile UX | High | L | Mobile nav shows 5 groups (Work / Writing / Atlases / About / Contact). |
| 3.7 | Decide on `/peptides/`: delete OR `noindex` and unlink | `peptides/index.html`, sitemap, nav | Off-brand cleanup | Medium | S | Not in nav; either deleted or `<meta name="robots" content="noindex">` added. |
| 3.8 | Decide on `/scientific-process/`: convert to blog post OR delete OR `noindex` | folder + blog/posts/ | Off-brand cleanup | Medium | M | Not in nav; either converted or `noindex` added. |
| 3.9 | Refresh footer nav to 4-column grouped layout | `index.html` + all pages | Match new IA | Low | M | Footer renders 4 grouped columns: Work / Writing / Atlases / About. |

**Risk envelope:** high. Nav lives in 60+ files. Either invest in a tiny build step now or use careful find-and-replace on the exact `<nav class="nav">…</nav>` block.

**Mitigation:** apply nav changes to one page first (`index.html`), test thoroughly, then propagate.

**Estimated total time:** 8-12 hours.

---

## Phase 4 — Design-system cleanup

**Goal:** reduce design debt without changing the visual direction. Introduce real tokens.

| # | Change | Files | Why it matters | Risk | Complexity | Acceptance |
|---|---|---|---|---|---|---|
| 4.1 | Add spacing scale to `:root` (`--space-1 … --space-10`) | `style.css` | Replaces ad-hoc spacing | Low | M | All paddings / margins / gaps reference tokens. |
| 4.2 | Add type scale (`--text-xs … --text-3xl`) and line-height tokens | `style.css` | Replaces ad-hoc font-sizes | Low | M | Font sizes reference tokens. |
| 4.3 | Move all hardcoded hex colours to `:root` tokens | `style.css` | Themable; consistent | Low | M | `grep '#[0-9a-fA-F]' style.css` shows zero matches outside `:root`. |
| 4.4 | Add z-index scale (`--z-content / --z-nav / --z-overlay / --z-modal / --z-cursor`) | `style.css` | Replaces 14 distinct z values | Low | S | All z-index references use tokens. |
| 4.5 | Consolidate card patterns to one `.card` base + modifiers | `style.css` + HTML | Reduces 5 parallel CSS blocks to 1 | Medium | L | One `.card` base; modifiers handle project / atlas / essay / stat differences. |
| 4.6 | Consolidate button patterns to 3 styles (primary / secondary / ghost) | `style.css` + HTML | Removes 2 redundant button variants | Low | M | 3 button styles used everywhere. |
| 4.7 | Extract `essay-base.css` shared by all 45 essays | `blog/essay-base.css` (new) + 45 post files | Removes ~10 KB duplicated CSS per post | Medium | L | All essays load `essay-base.css` + their per-essay scoped CSS only. |
| 4.8 | Disable particle canvas on mobile and on prefers-reduced-motion | `script.js` particle init | Performance | Low | S | Particle canvas off on `(max-width: 768px)` and `(prefers-reduced-motion: reduce)`. |
| 4.9 | Disable mouse-glow effect on mobile | `style.css` + `script.js` | Performance | Low | XS | `.mouse-glow { display: none; }` on `(max-width: 768px)`. |
| 4.10 | Replace `style.background = '...'` inline styles in contact form success with `.btn--success` class | `script.js` lines ~615-640 | Separation of concerns | Low | S | No inline styles in JS for the success state. |
| 4.11 | Consolidate IntersectionObservers from 4 to 1-2 | `script.js` | Minor perf | Low | M | Single observer drives reveal + counters + sections. |

**Risk envelope:** medium. The refactor touches `style.css` extensively but no IA changes. Test on every key page.

**Estimated total time:** 12-16 hours.

---

## Phase 5 — Blog and content cleanup

**Goal:** make the writing surface scale. Keep the 45 essays. Tighten supporting metadata.

| # | Change | Files | Why it matters | Risk | Complexity | Acceptance |
|---|---|---|---|---|---|---|
| 5.1 | Ensure `posts.json` is the single source of truth; regenerate `sitemap.xml` from it | `sitemap.xml` (regen script) | Prevents future drift | Low | M | Sitemap generated from `posts.json`; no manual edits. |
| 5.2 | Add a 3-line summary description to each essay's blog index card | `posts.json` (verify all 45 have `excerpt`) | Index scannability | Low | M | Every post has a 1-3 sentence excerpt. |
| 5.3 | Add a "What I'm reading" sidebar to `/blog/` | `blog/index.html` + `blog.css` | Cross-link with Reading Room | Low | M | Sidebar present on `/blog/` showing 5 books. |
| 5.4 | Consider splitting the blog into 3 streams: Essays / Notes / Field Guides | `posts.json` schema + `blog/index.html` | Long-term scalability | Medium | L | Schema supports `type: essay/note/field-guide`; blog index filters by type. |
| 5.5 | Convert peptides + scientific process into blog posts (if kept) | `peptides/index.html` → `blog/posts/...html`, same for scientific-process | Off-brand cleanup | Medium | L | Both pages live as blog posts; original folders removed. |
| 5.6 | Trim long page titles (> 60 chars) | `scientific-process/index.html`, others | SEO | Low | XS | All `<title>` ≤ 60 chars. |
| 5.7 | Add `aria-current="page"` on active nav links | `script.js` active-nav function | Screen-reader clarity | Low | S | Active nav has aria-current set. |

**Risk envelope:** medium. Essay content stays intact; only metadata, structure, and a few pages are touched.

**Estimated total time:** 6-10 hours.

---

## Phase 6 — SEO, accessibility, and performance polish

**Goal:** measurable improvements on Lighthouse / axe. Minimal visual change.

| # | Change | Files | Why it matters | Risk | Complexity | Acceptance |
|---|---|---|---|---|---|---|
| 6.1 | Add minimal tooling: `package.json` with htmlhint / stylelint / linkinator / lighthouse / pa11y | `package.json` (new) | Quality gates | Low | M | `npm run lint:html`, `npm run lint:css`, `npm run audit:lh`, `npm run audit:a11y` all run. |
| 6.2 | Run linkinator on the live site, fix all 4xx links | various | No broken links | Low | M | Linkinator reports 0 broken links. |
| 6.3 | Run Lighthouse on homepage, target ≥ 95 perf / 100 a11y / 100 best-prac / 100 SEO | – | Quality | Low | L | Lighthouse scores meet targets on homepage. |
| 6.4 | Run pa11y on every top-level page, fix all WCAG AA issues | – | Accessibility | Low | L | pa11y reports 0 errors. |
| 6.5 | Minify `style.css` and `script.js` on deploy | tooling | Performance | Low | S | Minified versions referenced in production. |
| 6.6 | Optimise images at root (PNG → WebP where appropriate, JPG quality 80) | `*.png`, `*.jpg` | Performance | Low | M | Total image weight reduced ≥ 40 %. |
| 6.7 | Add `loading="lazy"` to all `<img>` below the fold (some already have it) | various | Performance | Low | S | All below-fold images have `loading="lazy"`. |
| 6.8 | Subset Google Fonts to only the weights actually used | `<head>` font links | Performance | Low | S | Font request URLs only carry weights in use. |
| 6.9 | Consider self-hosting fonts (optional) | – | Performance + privacy | Low | M | Fonts served from `/fonts/`; no external request. |
| 6.10 | Add `<link rel="alternate" hreflang>` if multi-language ever planned (no-op for now) | – | Future-proofing | – | – | – |

**Risk envelope:** low. All changes are performance / hygiene; visual change should be near-zero.

**Estimated total time:** 6-10 hours.

---

## Full roadmap summary

| Phase | Theme | Risk | Time | Visible change |
|---|---|---|---|---|
| 1 | Critical cleanup | Low | 2-3 h | Subtle (better hero, fewer ARIA gaps, no sitemap drift) |
| 2 | Homepage restructure | Medium | 4-6 h | **Large** (cuts 14 cards to 5, new ordering) |
| 3 | Navigation / IA cleanup | High | 8-12 h | **Large** (5-item nav, off-brand pages gone) |
| 4 | Design-system cleanup | Medium | 12-16 h | None (refactor only) |
| 5 | Blog + content cleanup | Medium | 6-10 h | Medium |
| 6 | SEO + a11y + perf polish | Low | 6-10 h | None visible; metric-driven |

**Total estimated work:** ~ 38-57 hours over 4-6 weeks part-time.

**Recommended order:** 1 → 2 → 3 → 5 → 4 → 6. Do the high-leverage IA cuts (1-3) before the cosmetic refactor (4) so the design work targets the new structure, not the old.

---

## Decisions needed from owner before starting

1. **Approve the new primary nav: Work · Writing · Atlases · About · Contact?**
2. **Approve hero rewrite direction (Draft A / B / C in 04, or a custom version)?**
3. **Approve cutting Guides + Build/Think/Study sections from homepage?**
4. **Decision on peptides:** delete · convert to blog post · keep but `noindex`?
5. **Decision on scientific-process:** delete · convert to blog post · keep but `noindex`?
6. **Decision on founder-notes + reading-room:** demote to `/about/...` and hide from primary nav, OR commit to a content cadence to fill them?
7. **Decision on URL reshuffle:** keep current flat URLs (zero migration) or move atlases under `/atlases/` (requires redirects)?
8. **Decision on tooling in Phase 6:** add minimal `package.json` + lint / a11y / lighthouse scripts, yes / no?

---

## Acceptance criteria for "audit roadmap complete"

The site is "redesigned" when all six phases are done **and**:

- A first-time visitor can identify Pugalenthi within 5 seconds (name + role + 1 proof point).
- Primary nav has exactly 5 items.
- Homepage has ≤ 7 H2 sections.
- No off-brand or placeholder pages in primary nav.
- Sitemap matches reality.
- Lighthouse ≥ 95 / 100 / 100 / 100 on homepage.
- pa11y reports 0 WCAG AA errors on every public page.
- linkinator reports 0 broken links.
- Mobile nav has 5 collapsible groups, not a 19-item flat list.
- All atlas pages share the global nav header.
- All blog essays share a base CSS file; no duplicated `<style>` blocks at the page level.
