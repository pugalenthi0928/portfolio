# 05 · Technical / Frontend Audit

## Toolchain

Discovered:
- No `package.json`, no bundler, no build step, no lint config, no test runner.
- No CI config. No GitHub Actions in repo.
- Vanilla HTML / CSS / JS, served as static files (GitHub Pages via `CNAME` → `pugalenthimagendran.com`).

This is fine for the size and audience. But it means:
- **No automated quality gates** (no Lighthouse CI, no axe checks, no link checker, no spellchecker).
- **No CSS minification or PurgeCSS** — `style.css` (3105 lines / 64 KB) ships as-is.
- **No image optimisation pipeline** — JPGs / PNGs ship at uploaded size. (Counted 19 images at project root.)

**Recommendation (Phase 6 only, do not block current work):**

```json
// minimal package.json
{
  "scripts": {
    "lint:html": "npx -y htmlhint **/*.html",
    "lint:css":  "npx -y stylelint **/*.css --config-basedir .",
    "audit:lh":  "npx -y lighthouse http://localhost:8000 --output html --output-path ./lighthouse-report.html",
    "audit:a11y":"npx -y pa11y http://localhost:8000",
    "linkcheck": "npx -y linkinator . --recurse"
  }
}
```

Zero runtime dependency. Each tool runs on demand via `npx`. Don't commit `node_modules`.

---

## HTML issues

### Homepage (`index.html`, 837 lines)

| Issue | Where | Severity | Fix |
|---|---|---|---|
| H1 says "Hi, I'm Pugalenthi Magendran." — name only, no proposition. Search engines and screen readers see this as the page title. | line 191 | High | Rewrite H1 to a proposition. (See 04-content-positioning-audit.md.) |
| 8 H2s on one page — Atlases / Guides / Build, Think, Study compete with Projects, About, Experience for `<h2>` weight. | lines 241 / 323 / 423 / 510 / 552 / 622 / 748 | Medium | Cut to 5-6 H2s. |
| No `<header>` or `<main>` skip-link target inside the actual content area for keyboard users. Yes, `<main>` exists at line 183, but the first focusable element of the page is the nav logo. | line 183 | Medium | Add a `<a class="skip-link" href="#main">Skip to content</a>` before `<nav>`, hidden until focused. |
| Hero CTAs include both an Email button and a Resume button outside a clear primary/secondary grouping. | lines 199-216 | Medium | Reduce to 2 CTAs in hero. |
| 4 timeline items but `script.js` only animates dots for the first 3 with hardcoded delays. | (from script audit) | Medium | Make the animation loop over all `.timeline-dot` elements. |
| Two `marquee` strips of generic tech buzzwords occupy ~80 px of hero-adjacent screen space and add no information. | lines 224-236 | Medium | Remove or move into About skills section. |
| Stat counters use `data-target` attributes (`5`, `92`, `3`) — numbers are not credible, see Content audit. | lines 574 / 582 / 590 | High | Replace with sharper, defensible chips. |
| Form lacks `aria-describedby` or inline validation messaging. | lines 771-794 | Medium | Add validation hints + visible success state without injecting inline `style.background` from JS. |

### Atlas / guide pages

| File | Lines | Issue |
|---|---|---|
| `applied-ai-atlas/index.html` | 575 | Does **not** load `style.css`. Loads only its own `applied-ai.css`. Result: visually inconsistent with rest of site, custom topbar. |
| `ai-consulting-money-map/index.html` | 611 | Same — no `style.css`, custom topbar, no canonical link in `<head>`. |
| `scientific-process/index.html` | 705 | Same — no `style.css`, custom topbar. |
| `ai-field-manual/index.html` | 3011 | Does not include the global nav header. Visitor cannot click back to Projects / Home from header. |
| `accelerated-computing-atlas/index.html` | 511 | Missing `<link rel="canonical">` in head. |
| `ai-map/index.html` | 1948 | Loads 14 `<script>` tags + 9 stylesheets. Largest page on site. Worth splitting into per-layer subpages or lazy-loading layer JS. |

### Header / footer duplication

Both nav and footer are **hardcoded into every page** rather than rendered from a template / partial. With 16 atlas pages + 45 blog posts + projects = 60+ copies of essentially the same nav. When the nav structure changes, **every page has to be edited**.

**Severity:** Medium. **Fix:** Either (a) introduce a tiny build step (e.g., `eleventy` or a shell script that does HTML includes), or (b) accept the duplication and add a simple `find-and-replace` checklist to the redesign roadmap.

### Inline `<style>` blocks duplicated across pages

Every blog post embeds a 200-line `<style>` block of scoped essay CSS in `<head>`. That's intentional (per-essay CSS namespace) and it works — but the base `.essay-format / .essay-page / .essay-hed / .essay-deck / .essay-meta` rules are repeated **44 times** across 45 essays. About 8 KB × 44 ≈ 350 KB of duplicated CSS over the blog. **Fix:** Extract the shared base into `blog/essay-base.css`, keep only the per-essay scoped CSS inline.

---

## CSS issues

`style.css` is 3105 lines / 64 KB.

### What works

- Custom properties for colour tokens (`--bg`, `--text`, `--accent`, `--border`, `--card-shadow`, etc.) — well-named and consistently used in most places.
- `prefers-reduced-motion` is honoured (lines 381 / 2564 / 2980).
- `:focus-visible` is defined globally with sensible offsets (lines 2625-2647).
- Hover-only effects gated behind `@media (hover: hover)` (line 345).
- Dark-only design is correctly committed (no half-built light theme).

### What doesn't

| Issue | Evidence | Fix |
|---|---|---|
| **No spacing scale.** Only `--section-padding: 120px` defined. All other spacing is hardcoded (24px / 20px / 18px / 16px / 12px / 10px). | lines 38-41 | Add `--space-1` … `--space-10` (4 → 128 px). |
| **Hardcoded hex colours scattered through file.** `#22c55e`, `#16a34a`, `#1E1A17`, `#2A2118` etc. not referenced via `var(--…)`. | (50+ locations) | Move all hex colours into `:root` tokens. |
| **Z-index chaos.** Values: -1, 0, 1, 2, 3, 50, 100, 101, 102, 9999, 10000, 10001, 10002. | scattered | Define `--z-content`, `--z-overlay`, `--z-nav`, `--z-modal`, `--z-cursor`. |
| **No type scale.** Sizes are clamp / px on a per-element basis. | scattered | Define `--text-xs … --text-3xl`. |
| **20+ `@keyframes`** — divider-activate, divider-breathe, badge-pulse, btn-glow-pulse, draw-check, marquee-scroll, nameShimmer, aurora-drift-1, aurora-drift-2, rotate-gradient, clip-up, fade-up, slide-left, scale-in, etc. | scattered | Audit which are still in use; remove the rest. |
| **5 distinct card patterns** (`.project-card`, `.atlas-card`, `.bos-trio-card`, `.highlight-card`, `.cert-card`). | – | Refactor to one `.card` base + modifiers. |
| **5 distinct button styles** (`.btn-primary`, `.btn-secondary`, `.btn-resume`, `.btn-large`, plus inline-arrow link styles). | – | Reduce to 3. |
| **CSS not minified.** | – | Add a `npx clean-css` step on deploy, or accept 64 KB as small. |

### Dead CSS

Spot-checks for classes referenced in CSS but not in HTML:
- `.project-compact-card` referenced in `script.js` line 324 — no occurrence in any HTML. Dead path.
- `.nav-dropdown-item--money-map`, `--questions`, `--bank`, `--science`, `--peptides` exist as modifier classes but most don't have distinct visual treatment.

Recommendation: run `purgecss` (one-off) to identify unused rules.

---

## JS issues

`script.js` is 1450 lines / 44 KB. 18 features initialised on `DOMContentLoaded`:

1. Preloader
2. Custom cursor
3. Scroll reveal (IntersectionObserver)
4. Magnetic buttons
5. Navbar scroll effect
6. Smooth scroll for nav anchors
7. Active nav link on scroll
8. Contact form handler
9. Hero parallax
10. Mobile menu
11. Atlases dropdown
12. Back to top
13. Smooth momentum scroll (uses `smoothScroller` global)
14. 3D card tilt + cursor glow
15. Section heading character reveal
16. Parallax depth layers
17. Neural network particle canvas
18. Stat counter animation
19. Marquee scroll velocity boost
20. Section arrival glow
21. Clickable project cards

(Some are sub-features. ~18 distinct surfaces.)

### What works

- All wrapped in functions; only init on `DOMContentLoaded`.
- `prefers-reduced-motion` checked in preloader and elsewhere.
- Particle canvas pauses on tab hidden.
- Custom cursor hides on touch devices.
- No `console.log` / `console.warn` / `console.error` in code (verified). Production-clean.
- Contact form is a real `<form>` POST to FormSubmit.co — works without JS.

### What doesn't

| Issue | Severity | Fix |
|---|---|---|
| Timeline dot reveal hardcodes delays for items 1-3 only. 4th item is built but its dot doesn't animate. | Medium | Replace hardcoded delays with a `forEach` that uses index × delay-step. |
| Contact form success state injects inline `style.background = '...'` and `style.boxShadow`. Mixes concerns; can't be themed. | Medium | Add `.btn--success` class instead. Toggle the class. |
| `smoothScroller` is referenced but its full implementation is not visible at scroll. If it errors, falls back to `window.scrollTo`. | Low | Verify it exists or remove the dead reference. |
| Particle canvas runs on mobile by default; on low-end Android this is the heaviest thing on the page. | Medium | Disable canvas on `(max-width: 768px)` and on `prefers-reduced-motion`. |
| 4 separate `IntersectionObserver` instances (general, cards, stats, sections). | Low | Consolidate into 1-2 observers. |
| Preloader runs for 1.6 s on first visit. Subjective annoyance on fast connections. | Low | Either tie the duration to actual asset load (e.g., listen to `load` event) or shorten to 600-800 ms. |
| Magnetic-button mousemove handler does not throttle. Fires at full mousemove rate. | Low | Wrap in `requestAnimationFrame`. |

### JS-dependent content

**None.** Static HTML carries everything important (hero, projects, about, experience, contact). Search engines and screen readers see the page even with JS off. This is good and worth preserving in any redesign.

Exception: the **blog index** renders the post list client-side from `posts.json`. Without JS, the visitor sees a `<noscript>` message but no list. This is acceptable for the blog index but worth noting:

```html
<noscript>
  <p class="blog-empty">Please enable JavaScript to view blog posts, or visit individual post pages directly under /blog/posts/.</p>
</noscript>
```

→ The `<noscript>` should at least list all 45 post links statically, so search engines without JS rendering still get the archive.

---

## Component duplication

| Element | Where it's hardcoded | Copies | Fix |
|---|---|---|---|
| Global nav header | every HTML page | ~60+ | Build-step include, or single-source-of-truth `nav.html` fragment to copy carefully |
| Footer | every HTML page | ~60+ | Same |
| Custom cursor / grain / mouse-glow / back-to-top markup | every page | ~60+ | Move to a shared partial or accept the markup duplication and only enforce class consistency |
| Essay-base CSS in `<head>` | every blog post | 45 | Extract to `blog/essay-base.css` |

---

## Performance risks

### Homepage

- ~50 KB HTML + 64 KB CSS + 20 KB builder-os.css + 44 KB JS = ~178 KB pre-fonts.
- 4 Google Fonts families loaded (Inter, JetBrains Mono, Playfair Display, Source Serif 4) — fonts dominate page weight. ~200 KB more from font subsets.
- Hero particle canvas + grain overlay + cursor + mouse-glow = 4 always-on layers.
- LCP element is likely the H1 + hero subtitle, rendered after preloader hides at 1600 ms. **First Contentful Paint is gated by the preloader.**

### Atlas pages

- `ai-map/index.html` is 1948 lines + 14 scripts + 9 stylesheets.
- `ai-field-manual/index.html` is 3011 lines, single-page document.
- `peptides/index.html` is 977 lines + own JS for the table interactions.
- These would benefit from `loading="lazy"` on imagery, code-splitting (if any), and `defer` on non-critical scripts.

### Blog post pages

Each post file is 30-91 KB of HTML. The `<style>` block in `<head>` is 8-12 KB of repeated CSS. Extracting `essay-base.css` saves ~10 KB per post.

---

## Maintainability problems

1. **Nav structure lives in 60+ HTML files.** Any restructure requires touching every page.
2. **No single source of truth for the global stylesheet path.** Some pages use `style.css?v=21`, some use `../style.css?v=21`, atlas-specific pages skip it entirely.
3. **Cache-buster query strings are managed by hand.** `script.js?v=13`, `style.css?v=21`, `blog.js?v=49`, `blog.css?v=15` — different version numbers everywhere, all bumped manually on edit.
4. **`posts.json` is the source of truth for the blog**, but `sitemap.xml` is maintained by hand. They drift (see SEO audit).
5. **No 404 → 200 status check for the projects in projects/index.html.** If a project deep-dive is removed, links may break silently.

---

## Build / test recommendations (Phase 6 only)

Minimal acceptable tooling for a vanilla static site of this size:

```bash
# at project root
npm init -y
npm i -D htmlhint stylelint stylelint-config-standard

# package.json scripts
"scripts": {
  "lint:html": "htmlhint '**/*.html' --ignore 'node_modules/**'",
  "lint:css":  "stylelint '**/*.css' --ignore-pattern 'node_modules/**'",
  "linkcheck": "npx -y linkinator https://pugalenthimagendran.com --recurse --skip 'mailto:|^javascript:'",
  "audit:lh":  "npx -y lighthouse https://pugalenthimagendran.com --output html --output-path ./lh-report.html",
  "audit:a11y":"npx -y pa11y https://pugalenthimagendran.com"
}
```

Cost: zero runtime. Run on demand. Don't commit `node_modules`.

---

## Technical-audit summary in one line

> The static site is competently built, but `style.css` is 3105 lines with no spacing scale, no type scale, and hardcoded colours; `script.js` runs 18 visual-effect initializers including a 300-particle canvas; the global nav lives in 60+ duplicated HTML copies; 4 of 14 atlas pages don't load the shared stylesheet; `sitemap.xml` drifts vs reality. None of it is broken, but the **maintenance debt is real** and worth paying down during a refresh.
