# 06 · SEO & Accessibility Audit

## SEO

### Things that already work

| Check | Status |
|---|---|
| Unique `<title>` per page | ✅ — Verified on 14 of 14 atlas pages + homepage + projects + blog |
| Unique `<meta name="description">` per page | ✅ — Present everywhere checked |
| `rel="canonical"` on most pages | ⚠ — Missing on `accelerated-computing-atlas/index.html` and `ai-consulting-money-map/index.html` |
| Open Graph tags | ✅ — Homepage + blog + atlas pages |
| Twitter card tags | ✅ — Homepage + blog + atlas pages |
| `application/ld+json` structured data | ✅ — `Person` on homepage, `Blog` on `/blog/`, `BlogPosting` on each essay, `CollectionPage` on labs / notes / reading |
| Robots / sitemap | ✅ — `robots.txt` present and references sitemap |
| RSS feed | ✅ — `/blog/feed.xml`, referenced from `<head>` of homepage + `/blog/` |

### Bugs / drift

#### 1. Sitemap drift

| Slug | In `/blog/posts/`? | In `posts.json`? | In `sitemap.xml`? |
|---|:---:|:---:|:---:|
| `hello-world` | ❌ | ❌ | ✅ — **STALE** |
| `no-alexander-without-aristotle` | ✅ | ✅ | ❌ — **MISSING** |
| `the-title-was-wrong` | ✅ | ✅ | ❌ — **MISSING** |

**Severity:** Medium. **Fix:** in `sitemap.xml`, remove the `hello-world` block, add entries for the two missing posts. 5-minute change. Out of scope for this audit; deferred to Phase 1.

#### 2. Missing canonical link

- `accelerated-computing-atlas/index.html` has no `<link rel="canonical">` in `<head>`. Severity: Medium.
- `ai-consulting-money-map/index.html` has no `<link rel="canonical">` in `<head>`. Severity: Medium.

#### 3. Page titles

| Page | Current title | Comment |
|---|---|---|
| `/` | "Pugalenthi Magendran \| AI / ML Engineer" | Fine. |
| `/blog/` | "Blog \| Pugalenthi Magendran" | Fine. |
| `/projects/` | "Projects \| Pugalenthi Magendran" | Fine. |
| `/ai-atlas/` | "The AI Atlas \| Pugalenthi Magendran" | Fine. |
| `/scientific-process/` | "The Scientific Process: Humanity's Best Tool for Finding Truth \| Pugalenthi Magendran" | **Long (90 chars)**. Trim. |
| `/applied-ai-atlas/` | "The Applied AI Atlas \| Pugalenthi Magendran" | Fine. |
| `/peptides/` | "The Peptide World \| Pugalenthi Magendran" | Fine, but consider if you want this indexed at all. |

#### 4. Heading hierarchy on homepage

- 1 × H1 ("Hi, I'm Pugalenthi Magendran.") ✅ exactly one
- 7 × H2 — Featured Projects, Atlases, Guides, Build/Think/Study, About Me, Experience, Contact "Let's work together"
- 27 × H3 — distributed across sections

That's correct H1 → H2 → H3 nesting. But:
- H1 is the visitor's name, not a description. Google sees this as the page's main topic.
- "Hi, I'm Pugalenthi Magendran." has only one indexable keyword: the name itself. The H1 should also carry the role.

**Fix:** rewrite H1 to include the role explicitly. Example: `<h1>Pugalenthi Magendran — AI / ML engineer at Perplexity AI</h1>` with hero subtitle below for the rest.

#### 5. Image alt text

Homepage spot-check:
- Project thumbnails: alt text present and descriptive ("Retinal Disease Classifier - FLAIR vision-language model for diabetic retinopathy and glaucoma detection"). Good.
- About photo: `alt="Pugalenthi Magendran at graduation"` — good.
- All SVG icons: `aria-hidden="true"`. Correct (they are decorative).
- OG image: `https://pugalenthimagendran.com/ogimage.png` is referenced but I didn't open the file — confirm it exists and renders well on Twitter / LinkedIn share previews.

#### 6. Internal linking

The footer carries 16 links → good for crawl depth. The "View All Projects" link from homepage → good. The atlas dropdown → good. But:
- Footer omits `ai-questions/`, `ai-knowledge-bank/`, `peptides/`, `ai-field-manual/` while header includes them. **Inconsistent.**
- 4 atlas pages have no global nav → orphan-like (still in sitemap, still linked from homepage, but a visitor inside the page can't navigate back via header).

#### 7. JS-only content

- **Blog index** (`/blog/`) renders the 45-post list client-side from `posts.json`. Google JS-renders fine these days, but the `<noscript>` fallback only shows a message; it does **not** list the 45 posts. Add a static `<ul>` of links inside `<noscript>` so search engines without JS still index the archive.
- **Individual essays** are fully static HTML. ✅

#### 8. Duplicate / thin content

- `founder-notes/`, `reading-room/`, `ai-knowledge-bank/` are thin (mostly structure, not body). Risk: Google may treat them as low-value pages. Either bulk them up or `noindex` until ready.
- `ai-questions/`, `ai-consulting-money-map/`, `scientific-process/`, `peptides/` carry their data in adjacent `*-data.js` files. Make sure the rendered HTML for these pages includes the actual question / table content statically or is server-rendered into the HTML, not only in JS.

#### 9. Homepage keyword focus

Currently the homepage targets: *AI / ML engineer · foundation models · LLM systems · computer vision · Master of AI · Monash · Perplexity AI Fellow*.

That's a reasonable keyword profile. But it's competing with itself: every atlas / guide on the page adds its own keywords (peptides, scientific method, AI consulting, ASIA, etc.) into the page body, diluting the topical focus.

**Fix:** by removing the 14 supplementary cards from the homepage, the page becomes laser-focused on "AI engineer / writer".

---

## Accessibility

### Things that already work

| Check | Status | Notes |
|---|---|---|
| `lang="en"` on `<html>` | ✅ | Verified |
| `<meta name="viewport">` | ✅ | Present |
| `:focus-visible` styles | ✅ | Defined globally in `style.css` lines 2625-2647 |
| `prefers-reduced-motion` | ✅ | Honoured in 3 media queries |
| `aria-hidden="true"` on decorative SVGs | ✅ | Used consistently (>48 occurrences on homepage) |
| `aria-label` on icon-only buttons | ✅ | Back-to-top, nav toggle, etc. |
| Form labels | ✅ | All `<input>` / `<textarea>` have `<label for>` |
| Honeypot anti-spam | ✅ | `_honey` hidden input present |

### Issues

#### 1. No skip link

**Severity: Medium (WCAG 2.4.1).** First focusable element on every page is the nav logo, then up to 19 menu items. Keyboard / screen-reader users have no way to jump to main content.

**Fix:**
```html
<a class="skip-link" href="#main">Skip to content</a>
```
with CSS:
```css
.skip-link { position: absolute; top: -40px; left: 0; padding: 8px 16px; background: var(--accent); color: var(--bg); z-index: 9999; }
.skip-link:focus { top: 0; }
```

#### 2. Mobile menu is a 19-item flat list

When opened, the mobile menu fills the screen with 19 items in a single column. Screen-reader users have to step through every one. Worse, the section dividers (`<span class="nav-mobile-group">Atlases</span>`) are spans, not `<h2>` or `<button>`, so they aren't part of the navigation landmarks.

**Fix:** Either collapse to 5 collapsible top-level groups, or — better — collapse the nav structure to 5 items (Work / Writing / Atlases / About / Contact) and let the sub-pages live on those landing pages.

#### 3. Decorative effects on every page

- Custom cursor (`.cursor-dot`, `.cursor-ring`)
- Grain overlay (`.grain-overlay`)
- Mouse glow (`.mouse-glow`)
- Particle canvas (homepage hero only)

All four are `aria-hidden="true"`, which is correct for assistive tech. But they exercise `requestAnimationFrame` on every interaction. On low-end devices the cursor + glow + canvas + grain combination causes noticeable jank that hurts perceived accessibility.

**Fix:** keep grain + cursor, drop mouse-glow + particle canvas, gate everything visual behind `prefers-reduced-motion`.

#### 4. Colour contrast

The dark theme uses:
- Body text `#E7E5E4` on `#0F0E0D` → contrast ratio ≈ 14.0. ✅ AAA.
- Secondary text `#B5B0AB` on `#0F0E0D` → ≈ 9.4. ✅ AAA.
- Tertiary text `#A8A29E` on `#0F0E0D` → ≈ 8.3. ✅ AAA.
- Accent `#F0784A` on `#0F0E0D` → ≈ 6.0. ✅ AA Large, AA Normal.
- Tags / chips `--tag-text #B5B0AB` on `--tag-bg #272320` → ≈ 7.9. ✅ AAA.

Contrast is good on dark theme. **No issues found.**

#### 5. Focus order

Homepage focus order:
1. Skip-link target (currently missing).
2. Preloader (hidden after 1.6s).
3. Cursor dot / ring (focusable? no — `<div>` not focusable).
4. Grain / mouse-glow (`<div>` not focusable).
5. Back-to-top button (`<button>` — focusable, but only useful after scrolling).
6. Nav logo `a`.
7. 8 desktop nav items + 11 dropdown items.

That's 19+ focus stops before the visitor reaches the hero CTAs. **Add skip-link** as priority A.

#### 6. ARIA misuse

Spot-check:
- `<nav class="nav" id="nav">` — top-level nav is a landmark, but a second `<nav class="nav-mobile" id="nav-mobile" aria-label="Mobile navigation">` exists below. Two `<nav>` landmarks per page; the second only renders on mobile. Acceptable since the mobile one has `aria-label`. Good practice.
- `<div class="nav-dropdown-menu" role="menu">` — has `role="menu"` and children have `role="menuitem"`. That's WAI-ARIA *menu* widget semantics, which implies arrow-key navigation. The current JS handles hover and click but **not** arrow keys. Either implement keyboard arrows or remove the `role="menu"` (treat as a plain disclosure widget).

#### 7. Form usability

The contact form uses floating-label pattern. Labels stack above input on focus. Required attribute present. Good.

Missing:
- No inline validation. If the user submits empty, the browser's default tooltip appears (which is fine, but not styled to match the site).
- No success state shown to screen-readers (the "Message Sent!" feedback is visual only). Add `aria-live="polite"` on a success region.
- The `_next` field redirects back to `https://pugalenthimagendran.com/#contact`, which means submitting the form drops users back at the same place. Consider redirecting to a `/thanks/` page or showing an inline success.

#### 8. Screen-reader readability

Quick scan:
- H1 announces "Hi, I'm Pugalenthi Magendran." — screen readers will read the name correctly.
- Marquees are `aria-hidden="true"` ✅.
- Section eyebrows like `<div class="hero-eyebrow">AI / Machine Learning Engineer</div>` are visible to screen-readers. Good.

No major issues. The site is well-marked-up; the IA problems are visual / cognitive, not assistive-tech.

#### 9. Tap target size

Mobile nav links sit ~24-32 px tall depending on row height. WCAG 2.5.5 (Level AAA) requires 44 × 44 CSS pixels. **Minor:** bump mobile nav row height to ≥ 48 px.

Project card link targets are large (the whole card) — good.

#### 10. Motion / reduced motion

Confirmed `prefers-reduced-motion: reduce` triggers in 3 places. Particles, cursor follow, and parallax should also gate on this. Verified that some do (grain overlay) but some don't (marquee). **Fix:** apply the `prefers-reduced-motion` gate consistently across all decorative animations.

---

## Fix priority

### Critical / quick win (do in Phase 1)

1. **Add skip link** — 1 line of HTML, 5 lines of CSS. Affects every page.
2. **Fix sitemap drift** — Remove stale `hello-world`, add 2 missing posts.
3. **Add canonical link to `accelerated-computing-atlas/` and `ai-consulting-money-map/`** — 1 line each.
4. **Rewrite homepage H1 to include role + name.**

### High priority (Phase 2-3)

5. **Add static `<ul>` of post links inside `<noscript>` on `/blog/`** — Helps crawlers without JS rendering.
6. **Make mobile nav 5 groups with proper headings** — Better SR navigation.
7. **Remove `role="menu"` from `.nav-dropdown-menu`** (or implement arrow keys).
8. **Bump mobile nav row height to ≥ 48 px.**

### Medium (Phase 4-6)

9. **Cut homepage hero CTAs to 2.** Reduces ARIA / focus noise.
10. **Gate particle canvas + mouse-glow on mobile.**
11. **Apply `prefers-reduced-motion` to marquee + parallax + particle canvas consistently.**
12. **Add `aria-live="polite"` success region on contact form.**

### Low

13. **Trim long page titles to ≤ 60 characters** (currently `scientific-process/` is ~90 chars).
14. **Add `aria-current="page"` on active nav links** for screen-reader clarity.

---

## SEO + a11y summary in one line

> SEO scaffolding is mostly correct (canonical, OG, Twitter, JSON-LD, RSS, sitemap). The sitemap has minor drift, two pages are missing canonical, the homepage H1 sells too little, and there's no skip-link anywhere. Accessibility scaffolding is mostly correct (focus-visible, aria-hidden, reduced-motion, form labels, AAA contrast). The 19-item mobile menu and the always-on decorative effects are the only real a11y / UX concerns.
