# 03 · UX / Design Audit

## Visual hierarchy issues

### Homepage

The homepage has **8 H2-level sections** before the footer:

```
Hero → Marquee → Featured Projects → Atlases (6 cards) → Guides (5 cards)
     → Build, Think, Study (3 cards) → About Me → Experience → Contact
```

The visual weight given to each section is roughly equal. That is the problem.

- The hero is decorated (particle canvas + 4 CTAs + marquee underneath) but the H1 is *"Hi, I'm Pugalenthi Magendran."* — it's a name announcement, not a proposition.
- Featured Projects gets **3 cards** in a bento grid. Then the screen explodes into **6 atlas cards + 5 guide cards + 3 build-think-study cards = 14 supplementary cards** before About Me.
- That 14-card middle of the page is what makes the site read as a content archive. It is a portfolio masquerading as a publishing platform.
- About Me is at line 550 of 838 (66 % of the way down). It has the best paragraph on the site ("Master of AI from Monash. Currently Business Fellow at Perplexity AI.") and almost no one reads it.

**Fix:** Move About Me + a 2-line credibility paragraph above Atlases. Cut the Guides section entirely from the homepage. Replace the Atlases section with a single editorial card pointing to `/atlases/`. Drop the "Build, Think, Study" trio in favour of one sentence ("I also keep working notes and a reading list — see /about").

### Section labels

| Section | Label | Verdict |
|---|---|---|
| Hero | "AI / Machine Learning Engineer" | Bland. Redundant with H1. |
| Projects | "Featured Projects" | Fine. |
| Atlases | "Atlases" | Fine but the sub-line is 50 words long. Cut to 12. |
| Guides | "Guides" | Generic. The 5 things behind it have nothing in common. |
| Build/Think/Study | "Build, Think, Study" | Cute but unnecessary section. |
| About | "About Me" | Fine. |
| Experience | "Experience" | Fine. |
| Contact | "Let's work together." | Fine, but italic "work" is dated. |

---

## Layout issues

### Homepage

1. **Bento grid for projects is half-used.** Three project cards + one "View all" tile. The bento format invites 6 cards. Either add 3 more featured projects (Forge, retinal classifier, auth, plus 3 more) or switch to a simple 3-up grid.
2. **`container-wide` (1100 px) vs `container` (800 px)** alternates between sections. Hero is narrow, projects wide, atlases wide, guides wide, build wide, about *narrow*, experience narrow, contact narrow. The visual rhythm bounces left-right.
3. **Marquees (×2)** under the hero stuff in a tech-stack ticker. This is decorative noise; it offers no information that the Skills tag-grid in About doesn't already give. Remove or move into the About section.
4. **Footer has 16 links across one row of nav** — wraps awkwardly on tablet. The header has 8 + dropdowns; the footer has 16 flat. The two are out of sync.

### Atlas pages

- 4 of 14 atlas / guide pages don't load the global nav header (`applied-ai-atlas/`, `ai-consulting-money-map/`, `scientific-process/`, `ai-field-manual/`).
- 3 of those 4 (`applied-ai-atlas/`, `ai-consulting-money-map/`, `scientific-process/`) **do not load `style.css` either**. They are visually inconsistent with the rest of the site: different button styles, different spacing rhythm, different focus rings.
- `ai-map/index.html` is **1948 lines and loads 14 scripts + 9 stylesheets**. It's the heaviest page on the site and its CSS / JS are not minified.

### Project pages

- `projects/retinal-disease-classifier/index.html` and `projects/auth-microservice/index.html` are well-built. Both use `project-detail.css`. The mode-toggle on Auth ("simple / technical") is a nice editorial touch — copy that pattern to other technical pages.

---

## Typography issues

### Current font stack

| Family | Where | Weight |
|---|---|---|
| Inter | Body, headings, UI | 300 / 400 / 500 / 600 / 700 |
| JetBrains Mono | Eyebrows, labels, code | 400 (+ 500 on some pages) |
| Playfair Display | Blog hero / contact / editorial titles | 400 / 700 / italic |
| Source Serif 4 | Blog body / About text | 300 / 400 / italic |

Four type families is on the edge of acceptable. The combinations are well-chosen, but:

1. **Inconsistent loading.** The homepage loads Playfair + Source Serif via a `<link>` *after* the main fonts; blog pages load them in the same `<link>`. Result: the homepage hero shows a FOIT/FOUT flash for serif on first paint.
2. **No type scale.** Sizes are ad-hoc: `clamp(32px, 5vw, 48px)`, 42px, 28px, 22px, 17px, 15px, 14px, 13px. Line-heights vary 1.15 / 1.3 / 1.4 / 1.5 / 1.6 / 1.7 / 1.8 — no system.
3. **No `--font-serif` or `--font-display` tokens.** Inter and JetBrains Mono get tokens; the serif families do not, which is why they get re-declared inline on every essay page.
4. **Italic-only emphasis on hero subtitle** (`<em>foundation models</em>`, `<em>AI tools</em>`) is good editorial styling, but on mobile the italics break the line awkwardly.

---

## Spacing issues

`style.css` defines `--section-padding: 120px` and `--container-width: 800px`. That's the whole spacing system. Everything else is hardcoded:

- Section gaps: 120 px / 100 px / 80 px / 60 px (no rule).
- Card gaps: 24 px / 20 px / 18 px / 16 px / 12 px / 10 px / 8 px / 6 px.
- Padding around hero CTAs: 16 px desktop, 12 px mobile (no token).

Recommendation: introduce a 4-step spacing scale (`--space-1` 4 px, `--space-2` 8 px, `--space-3` 12 px, `--space-4` 16 px, `--space-5` 24 px, `--space-6` 32 px, `--space-7` 48 px, `--space-8` 64 px, `--space-9` 96 px, `--space-10` 128 px). Refactor in a single pass during Phase 4.

---

## Component consistency

### Cards

Five distinct "card" patterns are in use:

| Class | Used on | Visual |
|---|---|---|
| `.project-card` (+ `bento-hero` / `bento-small`) | Homepage projects | Image thumbnail + tags + title + desc + arrow link |
| `.atlas-card` (× 11 modifiers) | Atlases + Guides | Label + title + desc + meta chips + CTA arrow |
| `.bos-trio-card` (× 3 modifiers) | Build/Think/Study | Label + title + desc + CTA arrow |
| `.highlight-card` | About stats | Big number + icon + title + desc |
| `.cert-card` | About certifications | Icon + title + issuer + date |

Different paddings, borders, hover states, and gradients on every card style. A single `--card` token set (radius, padding, border, hover) would simplify the whole CSS.

### Buttons

Five button patterns:
- `.btn .btn-primary` (filled orange)
- `.btn .btn-secondary` (outlined)
- `.btn .btn-resume` (different again)
- `.btn .btn-large` (variant)
- `.project-link`, `.atlas-card-cta`, `.bos-trio-cta` (link styles disguised as buttons, different per section)

Three button styles maximum is enough.

### Tags

`.tag` is well-defined and used consistently (Projects, About, Blog). Good.

### Lists / chips

`.atlas-card-meta` chips are inconsistent — sometimes contain numbers (`50 papers`), sometimes adjectives (`graph view`), sometimes both. Pick one style.

---

## Mobile audit

### Header

- Logo + hamburger; clean.
- The hamburger opens a 19-item flat list (`/nav-mobile`). On a 375 px iPhone screen, the list takes 100 % viewport height. Users have to scroll within the menu to find Contact. **Fix:** Re-organise into 5 groups: Work / Writing / Atlases / About / Contact, collapsible.

### Hero

- H1 sets at `clamp(32px, 5vw, 48px)`. On 320 px width: `5vw = 16 px`, clamp falls back to 32 px. Hero takes 70 % of viewport. Acceptable but tight.
- 4 hero CTAs wrap to two rows. They are full-width on mobile. Reduce to 2 (Resume + Contact).

### Marquee

- The two marquees auto-scroll. On mobile they're decorative noise and consume vertical space. Hide on `(max-width: 768px)`.

### Project bento

- Stacks vertically to 3 cards + view-all. Each project card image is 16:9 → 234 px tall on iPhone 13. OK, but the second card image cuts subject in the centre. Worth re-cropping.

### Atlases / Guides

- 6-card grid and 5-card grid both stack to 1 column on mobile = 11 vertical cards. With 32 px gap each, that's 11 × ~280 px ≈ 3,000 px of vertical scroll. Painful.
- **Fix:** Mobile shows max 2 atlas cards then a "View all atlases" link.

### About

- About photo + bio stack vertically. Photo at 75 % width, fine.
- Highlight cards (3 stats) stack 1-up on mobile — good.

### Experience

- Timeline collapses fine. Dates wrap correctly.

### Contact

- Email link + 3 socials + form, all stack. Form labels float, focus states present. Good.

### Custom cursor

- Disabled on touch (`@media (hover: none)`), correct.

### Mouse glow / grain / particle canvas

- Mouse glow has `@media (max-width: 768px) { display: none; }` — good.
- Grain overlay always-on. On mobile this is a fixed SVG noise pattern repainted on scroll. Not a critical issue, but worth gating behind `prefers-reduced-motion` and `hover: none`.
- Particle canvas runs on mobile too. 300+ particles × 60 fps = noticeable CPU on low-end Android. Worth disabling on small viewports or reducing particle count.

---

## Visual-design assessment in one line

> The aesthetic is correct (dark editorial, sharp serif headlines, JetBrains Mono accents). The execution is hurt by: too many simultaneous decorative layers, no spacing scale, no type scale, hardcoded hex colours, 5 card styles, 4 atlas pages that look like a different site, and a homepage that asks for 14 supplementary decisions before introducing the person.

---

## Suggested visual direction

1. **Treat the homepage as a magazine cover.** One identity statement. Three featured projects. Two-line bio with a portrait. A single sentence linking to atlases. Done.
2. **Make atlas / guide pages share one chrome.** Each one keeps its scoped CSS for its unique viz, but the header / footer / breadcrumb / typography / focus rings come from the shared design tokens.
3. **Introduce design tokens for spacing + radius + shadow + type-scale.** A single `:root` block at the top of `style.css` replaces ~ 200 hardcoded values.
4. **Cut decorative layers from 4 to 2.** Keep the grain (subtle character). Keep the cursor. Drop mouse-glow and the particle canvas — they don't add information and they cost performance.
5. **Standardise to 1 card pattern with modifiers.** `.card` + `.card--project / --atlas / --essay / --stat` instead of 5 separate classes with parallel CSS.
