/* ============================================================
   THE AI ATLAS — Interactive Knowledge Graph (Enhanced)
   Depends on: D3.js v7, data.js (ATLAS_DATA)
   ============================================================ */
(function () {
  'use strict';

  const { eras, paths, papers, featuredIds } = ATLAS_DATA;

  /* ---- Helpers ---- */
  const $ = (s, p) => (p || document).querySelector(s);
  const $$ = (s, p) => [...(p || document).querySelectorAll(s)];
  const paperMap = new Map(papers.map((p) => [p.id, p]));
  const byId = (id) => paperMap.get(id);
  const eraOf = (id) => eras.find((e) => e.id === byId(id)?.era);
  const isFeatured = (id) => featuredIds.includes(id);
  const STORAGE_KEY = 'atlas-progress';

  /* ---- Progress Tracker ---- */
  const progress = {
    _data: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
    has(id) { return this._data.includes(id); },
    toggle(id) {
      if (this.has(id)) this._data = this._data.filter((x) => x !== id);
      else this._data.push(id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this._data));
      this.update();
    },
    count() { return this._data.length; },
    update() {
      const c = this.count();
      const pct = (c / papers.length) * 100;
      const el = $('#atlas-progress-fill');
      if (el) el.style.width = pct + '%';
      const cnt = $('#atlas-read-count');
      if (cnt) cnt.textContent = c;
      const stat = $('#atlas-progress-stat');
      if (stat) stat.textContent = c;
      updatePathProgress();
    },
  };

  /* ---- Animated Counters ---- */
  function animateCounters() {
    const counters = $$('[data-count]');
    counters.forEach((el) => {
      const target = parseInt(el.dataset.count, 10);
      const duration = 1600;
      const start = performance.now();
      function step(now) {
        const elapsed = now - start;
        const ratio = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - ratio, 4); // ease-out quartic
        el.textContent = Math.round(target * eased);
        if (ratio < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }

  /* ---- Hero Cinematic Reveal ---- */
  function initAtlasHeroReveal() {
    const hero = $('.atlas-hero');
    if (!hero) return;

    const lineInners = hero.querySelectorAll('.atlas-line-inner');
    const timelineDots = hero.querySelectorAll('.atlas-era-timeline-dot');
    const timelineSegments = hero.querySelectorAll('.atlas-era-timeline-segment');
    const statsBar = hero.querySelector('.atlas-stats-bar');
    const howTo = hero.querySelector('.atlas-how-to-use');

    // Reduced motion — show everything immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      lineInners.forEach(el => el.classList.add('atlas-revealed'));
      timelineDots.forEach(el => el.classList.add('atlas-revealed'));
      timelineSegments.forEach(el => el.classList.add('atlas-revealed'));
      if (statsBar) statsBar.classList.add('atlas-revealed');
      if (howTo) howTo.classList.add('atlas-revealed');
      animateCounters();
      return;
    }

    // Deep-link guard — if hero is off-screen, skip animation
    const rect = hero.getBoundingClientRect();
    if (rect.top >= window.innerHeight) {
      lineInners.forEach(el => el.classList.add('atlas-revealed'));
      timelineDots.forEach(el => el.classList.add('atlas-revealed'));
      timelineSegments.forEach(el => el.classList.add('atlas-revealed'));
      if (statsBar) statsBar.classList.add('atlas-revealed');
      if (howTo) howTo.classList.add('atlas-revealed');
      animateCounters();
      return;
    }

    // Sequenced reveal (~1.2s total)
    // 0ms — Label reveals
    setTimeout(() => {
      if (lineInners[0]) lineInners[0].classList.add('atlas-revealed');
    }, 0);

    // 200ms — Title reveals (the big moment)
    setTimeout(() => {
      if (lineInners[1]) lineInners[1].classList.add('atlas-revealed');
    }, 200);

    // 400ms — Subtitle lines 1 & 2 (together)
    setTimeout(() => {
      if (lineInners[2]) lineInners[2].classList.add('atlas-revealed');
      if (lineInners[3]) lineInners[3].classList.add('atlas-revealed');
    }, 400);

    // 600ms — Era timeline draws in (dots + segments as a group)
    setTimeout(() => {
      timelineDots.forEach(dot => dot.classList.add('atlas-revealed'));
      timelineSegments.forEach(seg => seg.classList.add('atlas-revealed'));
    }, 600);

    // 700ms — Stats bar fades up + counters start
    setTimeout(() => {
      if (statsBar) statsBar.classList.add('atlas-revealed');
      animateCounters();
    }, 700);

    // 850ms — How-to strip fades up
    setTimeout(() => {
      if (howTo) howTo.classList.add('atlas-revealed');
    }, 850);
  }

  /* ---- Scroll Animations ---- */
  function initScrollAnimations() {
    const elements = $$('[data-atlas-animate]');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('atlas-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => {
      // For very tall sections, check immediately if already in view
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('atlas-visible');
      } else {
        observer.observe(el);
      }
    });
  }

  /* ---- Card Entrance Animations ---- */
  function animateCards() {
    const cards = $$('.atlas-paper-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.dataset.stagger || '0', 10);
            setTimeout(() => {
              entry.target.classList.add('atlas-card-visible');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    cards.forEach((card, i) => {
      card.dataset.stagger = (i % 6) * 60; // stagger within viewport batch
      observer.observe(card);
    });
  }

  /* ---- Era Legend ---- */
  function buildEraLegend() {
    const wrap = $('#atlas-era-legend');
    if (!wrap) return;
    eras.forEach((era) => {
      const tag = document.createElement('button');
      tag.className = 'atlas-era-tag';
      tag.dataset.era = era.id;
      tag.innerHTML = `<span class="atlas-era-dot" style="background:${era.color}"></span>${era.name}`;
      tag.addEventListener('click', () => filterByEra(era.id, tag));
      wrap.appendChild(tag);
    });
  }

  let activeEra = null;
  function filterByEra(eraId, btn) {
    cancelJourney();
    const tags = $$('.atlas-era-tag');
    if (activeEra === eraId) {
      activeEra = null;
      tags.forEach((t) => t.classList.remove('active'));
      resetGraphHighlights();
      showAllCards();
      return;
    }
    activeEra = eraId;
    tags.forEach((t) => t.classList.toggle('active', Number(t.dataset.era) === eraId));
    highlightEra(eraId);
    $$('.atlas-paper-card').forEach((card) => {
      const pid = Number(card.dataset.paperId);
      const paper = byId(pid);
      card.style.display = paper && paper.era === eraId ? '' : 'none';
    });
  }

  function showAllCards() {
    const filterState = $$('.atlas-filter-btn').find((b) => b.classList.contains('active'));
    const mode = filterState?.dataset.filter || 'all';
    $$('.atlas-paper-card').forEach((card) => {
      const pid = Number(card.dataset.paperId);
      if (mode === 'featured') card.style.display = isFeatured(pid) ? '' : 'none';
      else card.style.display = '';
    });
  }

  /* ---- Filter Bar ---- */
  function initFilterBar() {
    $$('.atlas-filter-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        cancelJourney();
        $$('.atlas-filter-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        activeEra = null;
        activePath = null;
        $$('.atlas-era-tag').forEach((t) => t.classList.remove('active'));
        $$('.atlas-path-card').forEach((c) => c.classList.remove('active'));
        resetGraphHighlights();
        clearSearch();

        const mode = btn.dataset.filter;
        $$('.atlas-paper-card').forEach((card) => {
          const pid = Number(card.dataset.paperId);
          if (mode === 'featured') card.style.display = isFeatured(pid) ? '' : 'none';
          else card.style.display = '';
        });
      });
    });

    // Add era filter buttons
    eras.forEach((era) => {
      const btn = document.createElement('button');
      btn.className = 'atlas-filter-btn';
      btn.dataset.filter = 'era-' + era.id;
      btn.textContent = era.name;
      btn.addEventListener('click', () => {
        $$('.atlas-filter-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        activeEra = era.id;
        activePath = null;
        $$('.atlas-path-card').forEach((c) => c.classList.remove('active'));
        clearSearch();
        $$('.atlas-paper-card').forEach((card) => {
          const pid = Number(card.dataset.paperId);
          const paper = byId(pid);
          card.style.display = paper && paper.era === era.id ? '' : 'none';
        });
        highlightEra(era.id);
      });
      $('#atlas-filter-bar')?.appendChild(btn);
    });
  }

  /* ---- Search ---- */
  function initSearch() {
    const input = $('#atlas-search-input');
    const clearBtn = $('#atlas-search-clear');
    const countEl = $('#atlas-search-count');
    const emptyEl = $('#atlas-search-empty');
    if (!input) return;

    let debounceTimer;
    input.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const q = input.value.trim().toLowerCase();
        clearBtn.hidden = !q;

        if (!q) {
          clearSearch();
          return;
        }

        // Cancel any running journey and reset filters
        cancelJourney();
        $$('.atlas-filter-btn').forEach((b) => b.classList.remove('active'));
        activeEra = null;
        activePath = null;
        $$('.atlas-era-tag').forEach((t) => t.classList.remove('active'));
        $$('.atlas-path-card').forEach((c) => c.classList.remove('active'));
        resetGraphHighlights();

        let visible = 0;
        $$('.atlas-paper-card').forEach((card) => {
          const pid = Number(card.dataset.paperId);
          const paper = byId(pid);
          if (!paper) return;
          const haystack = [
            paper.title, paper.shortTitle, paper.authors,
            paper.oneLiner, paper.venue, paper.year.toString(),
            ...paper.tags
          ].join(' ').toLowerCase();

          if (haystack.includes(q)) {
            card.style.display = '';
            visible++;
          } else {
            card.style.display = 'none';
          }
        });

        countEl.textContent = visible + ' found';
        if (emptyEl) emptyEl.hidden = visible > 0;
        const grid = $('#atlas-cards-grid');
        if (grid) grid.style.display = visible > 0 ? '' : 'none';
      }, 150);
    });

    clearBtn.addEventListener('click', () => {
      input.value = '';
      clearBtn.hidden = true;
      clearSearch();
      input.focus();
    });

    // Keyboard shortcut: / to focus search
    document.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== input && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        input.focus();
        input.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      if (e.key === 'Escape' && document.activeElement === input) {
        input.blur();
        input.value = '';
        clearBtn.hidden = true;
        clearSearch();
      }
    });
  }

  function clearSearch() {
    const countEl = $('#atlas-search-count');
    const emptyEl = $('#atlas-search-empty');
    const grid = $('#atlas-cards-grid');
    if (countEl) countEl.textContent = '';
    if (emptyEl) emptyEl.hidden = true;
    if (grid) grid.style.display = '';
    showAllCards();
  }

  /* ---- Learning Paths ---- */
  let activePath = null;
  let journeyInProgress = false;
  let journeyTimeouts = [];

  // Determine a dominant accent color for a path based on the eras of its papers
  function getPathAccent(path) {
    const eraCounts = {};
    path.papers.forEach(pid => {
      const p = byId(pid);
      if (p) eraCounts[p.era] = (eraCounts[p.era] || 0) + 1;
    });
    let maxEra = 1, maxCount = 0;
    Object.entries(eraCounts).forEach(([eraId, count]) => {
      if (count > maxCount) { maxCount = count; maxEra = Number(eraId); }
    });
    const era = eras.find(e => e.id === maxEra);
    return era ? era.color : '#4a9eff';
  }

  function buildPaths() {
    const grid = $('#atlas-paths-grid');
    if (!grid) return;
    paths.forEach((path, idx) => {
      const card = document.createElement('div');
      card.className = 'atlas-path-card';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');

      const readCount = path.papers.filter((id) => progress.has(id)).length;
      const total = path.papers.length;
      const accent = getPathAccent(path);

      // Set CSS custom properties for per-card accent
      card.style.setProperty('--path-accent', accent);
      card.style.setProperty('--path-glow', accent + '12');
      card.style.setProperty('--path-number-bg', accent + '18');
      card.style.setProperty('--path-number-border', accent + '35');

      // Build paper dots trail
      const dots = path.papers.map(pid => {
        const isRead = progress.has(pid);
        const paper = byId(pid);
        const era = paper ? eras.find(e => e.id === paper.era) : null;
        const dotColor = era ? era.color : accent;
        return `<span class="atlas-path-dot${isRead ? ' read' : ''}" style="background:${dotColor}" title="${paper ? paper.title : ''}"></span>`;
      }).join('');

      card.innerHTML = `
        <div class="atlas-path-header">
          <span class="atlas-path-number">0${idx + 1}</span>
          <div class="atlas-path-name">${path.name}</div>
          <span class="atlas-path-count">${total} papers</span>
        </div>
        <div class="atlas-path-desc">${path.desc}</div>
        <div class="atlas-path-trail">
          ${dots}
          <span class="atlas-path-progress" data-path-progress>${readCount}/${total}</span>
        </div>
      `;

      const activate = () => {
        cancelJourney();
        if (activePath === path.id) {
          activePath = null;
          card.classList.remove('active');
          resetGraphHighlights();
          showAllCards();
          return;
        }
        activePath = path.id;
        activeEra = null;
        $$('.atlas-path-card').forEach((c) => c.classList.remove('active'));
        $$('.atlas-era-tag').forEach((t) => t.classList.remove('active'));
        card.classList.add('active');
        animatePathJourney(path.papers);
        $$('.atlas-filter-btn').forEach((b) => b.classList.remove('active'));
        clearSearch();
        $$('.atlas-paper-card').forEach((c) => {
          const pid = Number(c.dataset.paperId);
          c.style.display = path.papers.includes(pid) ? '' : 'none';
        });
      };

      card.addEventListener('click', activate);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
      });
      grid.appendChild(card);
    });
  }

  function updatePathProgress() {
    $$('.atlas-path-card').forEach((card, i) => {
      const path = paths[i];
      if (!path) return;
      const readCount = path.papers.filter((id) => progress.has(id)).length;
      const total = path.papers.length;
      // Update dots
      const dots = card.querySelectorAll('.atlas-path-dot');
      path.papers.forEach((pid, j) => {
        if (dots[j]) {
          dots[j].classList.toggle('read', progress.has(pid));
        }
      });
      // Update fraction label
      const progressLabel = card.querySelector('[data-path-progress]');
      if (progressLabel) progressLabel.textContent = `${readCount}/${total}`;
    });
  }

  /* ---- Paper Cards ---- */
  function buildCards() {
    const grid = $('#atlas-cards-grid');
    if (!grid) return;

    papers.forEach((paper) => {
      const era = eraOf(paper.id);
      const featured = isFeatured(paper.id);
      const card = document.createElement('article');
      card.className = 'atlas-paper-card';
      card.dataset.paperId = paper.id;
      card.dataset.era = paper.era;
      card.id = 'paper-' + paper.id;

      // Impact dots
      const impactLabel = ['Low', 'Medium', 'High'][paper.impact - 1] || 'Unknown';
      const dots = [1, 2, 3].map(
        (i) => `<span class="atlas-card-impact-dot${i <= paper.impact ? ' filled' : ''}"></span>`
      ).join('');

      // Era badge
      const badgeStyle = era
        ? `background:${era.color}14;color:${era.color};border:1px solid ${era.color}30`
        : '';

      // Featured badge
      const featuredBadge = featured
        ? `<span class="atlas-featured-badge"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>Featured</span>`
        : '';

      card.innerHTML = `
        <div class="atlas-card-header" tabindex="0" role="button" aria-expanded="false">
          <div class="atlas-card-top-row">
            <div style="display:flex;align-items:center;gap:0.4rem;flex-wrap:wrap;">
              <span class="atlas-card-era-badge" style="${badgeStyle}">${era ? era.name : ''}</span>
              ${featuredBadge}
            </div>
            <div class="atlas-card-impact" title="Impact: ${impactLabel}" aria-label="Impact: ${impactLabel}">${dots}</div>
          </div>
          <h3 class="atlas-card-title">${paper.title}</h3>
          <div class="atlas-card-meta">
            <span class="atlas-card-year">${paper.year}</span>
            <span>${paper.venue}</span>
            <span>${paper.authors}</span>
          </div>
          <p class="atlas-card-oneliner">${paper.oneLiner}</p>
          <div class="atlas-card-actions">
            <button class="atlas-read-toggle${progress.has(paper.id) ? ' read' : ''}" data-id="${paper.id}" aria-label="${progress.has(paper.id) ? 'Mark as unread' : 'Mark as read'}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              ${progress.has(paper.id) ? 'Read' : 'Mark read'}
            </button>
            <span class="atlas-expand-hint">
              ${featured ? 'Expand' : 'Info'}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </span>
          </div>
        </div>
        <div class="atlas-card-body">
          <div class="atlas-card-body-wrap">
            ${paper.problem ? buildFeaturedBody(paper) : buildComingSoonBody(paper)}
          </div>
        </div>
      `;

      // Expand / collapse
      const header = card.querySelector('.atlas-card-header');
      const toggleExpand = (e) => {
        if (e && e.target.closest('.atlas-read-toggle')) return;
        const expanded = card.classList.toggle('expanded');
        header.setAttribute('aria-expanded', expanded);
      };
      header.addEventListener('click', toggleExpand);
      header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleExpand(); }
      });

      // Read toggle
      const readBtn = card.querySelector('.atlas-read-toggle');
      readBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        progress.toggle(paper.id);
        readBtn.classList.toggle('read');
        readBtn.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          ${progress.has(paper.id) ? 'Read' : 'Mark read'}
        `;
        readBtn.setAttribute('aria-label', progress.has(paper.id) ? 'Mark as unread' : 'Mark as read');
        updateNodeReadState(paper.id);
      });

      grid.appendChild(card);
    });
  }

  function buildFeaturedBody(paper) {
    const depsHtml = paper.deps.length
      ? `<div class="atlas-card-section">
           <div class="atlas-card-section-title">Builds On</div>
           <div class="atlas-card-links">${paper.deps.map((d) => {
             const dep = byId(d);
             return dep ? `<a class="atlas-card-dep-link" data-paper="${d}">${dep.shortTitle || dep.title}</a>` : '';
           }).join('')}</div>
         </div>`
      : '';

    const unlocksHtml = paper.unlocks.length
      ? `<div class="atlas-card-section">
           <div class="atlas-card-section-title">Unlocks</div>
           <div class="atlas-card-links">${paper.unlocks.map((u) => {
             const un = byId(u);
             return un ? `<a class="atlas-card-dep-link" data-paper="${u}">${un.shortTitle || un.title}</a>` : '';
           }).join('')}</div>
         </div>`
      : '';

    const tagsHtml = paper.tags.length
      ? `<div class="atlas-card-tags">${paper.tags.map((t) => `<span class="atlas-card-tag">${t}</span>`).join('')}</div>`
      : '';

    return `
      <div class="atlas-card-body-inner">
        <div class="atlas-card-section">
          <div class="atlas-card-section-title">The Problem</div>
          <p>${paper.problem}</p>
        </div>
        <div class="atlas-card-section">
          <div class="atlas-card-section-title">Key Insight</div>
          <p>${paper.insight}</p>
        </div>
        <div class="atlas-card-section">
          <div class="atlas-card-section-title">Why It Matters</div>
          <div class="atlas-verdict">
            <div class="atlas-verdict-item">
              <div class="atlas-verdict-label">Still Holds</div>
              <div class="atlas-verdict-text">${paper.holds}</div>
            </div>
            <div class="atlas-verdict-item">
              <div class="atlas-verdict-label">Superseded By</div>
              <div class="atlas-verdict-text">${paper.superseded}</div>
            </div>
          </div>
        </div>
        <div class="atlas-card-section">
          <div class="atlas-card-section-title">Practitioner Takeaway</div>
          <p>${paper.practitioner}</p>
        </div>
        ${depsHtml}
        ${unlocksHtml}
        ${tagsHtml}
        <a href="${paper.link}" target="_blank" rel="noopener" class="atlas-paper-link">
          Read Paper
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </a>
      </div>
    `;
  }

  function buildComingSoonBody(paper) {
    const tagsHtml = paper.tags.length
      ? `<div class="atlas-card-tags">${paper.tags.map((t) => `<span class="atlas-card-tag">${t}</span>`).join('')}</div>`
      : '';

    const depsHtml = paper.deps.length
      ? `<div class="atlas-card-section">
           <div class="atlas-card-section-title">Builds On</div>
           <div class="atlas-card-links">${paper.deps.map((d) => {
             const dep = byId(d);
             return dep ? `<a class="atlas-card-dep-link" data-paper="${d}">${dep.shortTitle || dep.title}</a>` : '';
           }).join('')}</div>
         </div>`
      : '';

    return `
      <div class="atlas-card-body-inner">
        ${depsHtml}
        ${tagsHtml}
        <div class="atlas-coming-soon">Full analysis coming soon</div>
        <div class="atlas-card-section" style="padding-top:0;">
          <a href="${paper.link}" target="_blank" rel="noopener" class="atlas-paper-link">
            Read Paper
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </a>
        </div>
      </div>
    `;
  }

  /* ---- Dep link clicks ---- */
  function initDepLinks() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('.atlas-card-dep-link');
      if (!link) return;
      e.preventDefault();
      const pid = Number(link.dataset.paper);
      navigateToPaper(pid);
    });
  }

  function navigateToPaper(pid) {
    cancelJourney();
    const target = $(`#paper-${pid}`);
    if (!target) return;
    target.style.display = '';
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    target.classList.add('atlas-card-highlight');
    target.classList.add('expanded');
    target.querySelector('.atlas-card-header')?.setAttribute('aria-expanded', 'true');
    // Update URL hash without triggering hashchange
    history.replaceState(null, '', '#paper-' + pid);
    setTimeout(() => target.classList.remove('atlas-card-highlight'), 2000);
  }

  /* ---- Deep Linking ---- */
  function initDeepLinks() {
    const hash = window.location.hash;
    if (!hash) return;

    const match = hash.match(/^#paper-(\d+)$/);
    if (match) {
      const pid = parseInt(match[1], 10);
      // Delay to let cards render
      setTimeout(() => navigateToPaper(pid), 300);
    }
  }

  /* ---- Progress bar visibility ---- */
  function initProgressBar() {
    const bar = $('#atlas-progress-bar');
    const section = $('#atlas-cards-section');
    if (!bar || !section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        bar.classList.toggle('visible', entry.isIntersecting);
      },
      { threshold: 0 }
    );
    observer.observe(section);
  }

  /* ---- Mobile list ---- */
  function buildMobileList() {
    const wrap = $('#atlas-mobile-list');
    if (!wrap) return;

    eras.forEach((era) => {
      const eraPapers = papers.filter((p) => p.era === era.id);
      if (!eraPapers.length) return;

      const block = document.createElement('div');
      block.className = 'atlas-mobile-era';
      block.innerHTML = `
        <div class="atlas-mobile-era-title">
          <span class="atlas-mobile-era-dot" style="background:${era.color}"></span>
          ${era.name} <span style="color:var(--atlas-text-dim);font-weight:400">(${era.period})</span>
        </div>
      `;
      eraPapers.forEach((paper) => {
        const impactDots = [1, 2, 3].map(
          (i) => `<span${i <= paper.impact ? ' class="filled"' : ''}></span>`
        ).join('');

        const row = document.createElement('div');
        row.className = 'atlas-mobile-paper';
        row.innerHTML = `
          <span class="atlas-mobile-paper-name">${paper.shortTitle || paper.title}</span>
          <span class="atlas-mobile-paper-impact">${impactDots}</span>
          <span class="atlas-mobile-paper-year">${paper.year}</span>
        `;
        row.addEventListener('click', () => navigateToPaper(paper.id));
        block.appendChild(row);
      });
      wrap.appendChild(block);
    });
  }

  /* ============================================================
     D3 KNOWLEDGE GRAPH (Enhanced)
     ============================================================ */

  let graphSvg, graphG, simulation, tooltip, journeyLabel;
  let nodeSelection, linkSelection;
  let graphWidth, graphHeight;

  function buildGraph() {
    const wrap = $('#atlas-graph-wrap');
    if (!wrap || window.innerWidth < 769) return;

    wrap.innerHTML = '';

    graphWidth = wrap.clientWidth;
    graphHeight = wrap.clientHeight;

    // Tooltip
    tooltip = document.createElement('div');
    tooltip.className = 'atlas-tooltip';
    wrap.appendChild(tooltip);

    // Journey progress label
    journeyLabel = document.createElement('div');
    journeyLabel.className = 'atlas-journey-label';
    wrap.appendChild(journeyLabel);

    // SVG
    graphSvg = d3.select(wrap)
      .append('svg')
      .attr('viewBox', `0 0 ${graphWidth} ${graphHeight}`)
      .attr('preserveAspectRatio', 'xMidYMid meet');

    graphG = graphSvg.append('g');

    // No zoom or pan — static graph, interaction is hover/click only

    // Build links from deps
    const links = [];
    papers.forEach((paper) => {
      paper.deps.forEach((depId) => {
        if (byId(depId)) {
          links.push({ source: depId, target: paper.id });
        }
      });
    });

    // Nodes
    const nodes = papers.map((p) => ({
      id: p.id,
      era: p.era,
      impact: p.impact,
      title: p.shortTitle || p.title,
      fullTitle: p.title,
      year: p.year,
      oneLiner: p.oneLiner,
      featured: isFeatured(p.id),
    }));

    // Era band positions (x)
    const eraBands = {};
    const bandWidth = graphWidth / eras.length;
    eras.forEach((era, i) => {
      eraBands[era.id] = bandWidth * i + bandWidth / 2;
    });

    function nodeRadius(d) {
      if (d.impact === 3) return 12;
      if (d.impact === 2) return 9;
      return 6;
    }

    // Force simulation with better parameters
    simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id((d) => d.id).distance(70).strength(0.25))
      .force('charge', d3.forceManyBody().strength(-150))
      .force('x', d3.forceX((d) => eraBands[d.era]).strength(0.75))
      .force('y', d3.forceY(graphHeight / 2).strength(0.12))
      .force('collision', d3.forceCollide().radius((d) => nodeRadius(d) + 10))
      .alphaDecay(0.018);

    // Arrow marker
    const defs = graphG.append('defs');
    defs.append('marker')
      .attr('id', 'atlas-arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 20)
      .attr('refY', 0)
      .attr('markerWidth', 5)
      .attr('markerHeight', 5)
      .attr('orient', 'auto')
      .append('path')
      .attr('d', 'M0,-4L10,0L0,4')
      .attr('fill', 'var(--atlas-border-hover)');

    // Glow filter for featured nodes
    const glowFilter = defs.append('filter')
      .attr('id', 'atlas-glow')
      .attr('x', '-50%').attr('y', '-50%')
      .attr('width', '200%').attr('height', '200%');
    glowFilter.append('feGaussianBlur')
      .attr('stdDeviation', '3')
      .attr('result', 'blur');
    glowFilter.append('feMerge')
      .selectAll('feMergeNode')
      .data(['blur', 'SourceGraphic'])
      .join('feMergeNode')
      .attr('in', (d) => d);

    // Draw links
    linkSelection = graphG.append('g')
      .selectAll('path')
      .data(links)
      .join('path')
      .attr('class', 'atlas-link')
      .attr('marker-end', 'url(#atlas-arrow)');

    // Draw nodes
    nodeSelection = graphG.append('g')
      .selectAll('g')
      .data(nodes)
      .join('g')
      .attr('class', (d) => 'atlas-node' + (d.featured ? ' atlas-featured' : ''))
      .call(d3.drag()
        .on('start', dragStarted)
        .on('drag', dragged)
        .on('end', dragEnded));

    // Featured outer ring (pulsing)
    nodeSelection.filter((d) => d.featured)
      .append('circle')
      .attr('class', 'atlas-node-featured-ring')
      .attr('r', (d) => nodeRadius(d) + 6)
      .attr('stroke', (d) => {
        const era = eras.find((e) => e.id === d.era);
        return era ? era.color : '#555';
      });

    // Main circle
    nodeSelection.append('circle')
      .attr('class', 'atlas-node-circle')
      .attr('r', (d) => nodeRadius(d))
      .attr('fill', (d) => {
        const era = eras.find((e) => e.id === d.era);
        return era ? era.color + '30' : '#333';
      })
      .attr('stroke', (d) => {
        const era = eras.find((e) => e.id === d.era);
        return era ? era.color : '#555';
      })
      .attr('filter', (d) => d.featured ? 'url(#atlas-glow)' : null);

    // Read indicator ring
    nodeSelection.append('circle')
      .attr('class', 'atlas-node-read-ring')
      .attr('r', (d) => nodeRadius(d) + 3)
      .attr('fill', 'none')
      .attr('stroke', 'var(--atlas-accent)')
      .attr('stroke-width', 2)
      .attr('stroke-dasharray', '3,3')
      .attr('opacity', (d) => progress.has(d.id) ? 1 : 0);

    // Labels
    nodeSelection.append('text')
      .attr('dy', (d) => nodeRadius(d) + 14)
      .text((d) => d.title.length > 18 ? d.title.slice(0, 16) + '\u2026' : d.title);

    // Hover interactions
    nodeSelection
      .on('mouseenter', function (event, d) {
        if (!journeyInProgress) {
          highlightConnections(d.id);
          showTooltip(event, d);
        }
      })
      .on('mouseleave', function () {
        if (!activePath && !activeEra && !journeyInProgress) resetGraphHighlights();
        hideTooltip();
      })
      .on('click', function (event, d) {
        navigateToPaper(d.id);
      });

    // Era band backgrounds
    const bandG = graphG.insert('g', ':first-child');
    eras.forEach((era, i) => {
      bandG.append('rect')
        .attr('x', bandWidth * i)
        .attr('y', 0)
        .attr('width', bandWidth)
        .attr('height', graphHeight)
        .attr('fill', era.color)
        .attr('opacity', 0.03);

      bandG.append('text')
        .attr('x', bandWidth * i + bandWidth / 2)
        .attr('y', 18)
        .attr('text-anchor', 'middle')
        .attr('fill', era.color)
        .attr('opacity', 0.35)
        .attr('font-size', '9px')
        .attr('font-family', 'JetBrains Mono, monospace')
        .attr('letter-spacing', '0.05em')
        .text(era.name);
    });

    // Tick
    simulation.on('tick', () => {
      linkSelection.attr('d', (d) => {
        const dx = d.target.x - d.source.x;
        const dy = d.target.y - d.source.y;
        const dr = Math.sqrt(dx * dx + dy * dy) * 1.5;
        return `M${d.source.x},${d.source.y}A${dr},${dr} 0 0,1 ${d.target.x},${d.target.y}`;
      });

      nodeSelection.attr('transform', (d) => {
        d.x = Math.max(25, Math.min(graphWidth - 25, d.x));
        d.y = Math.max(35, Math.min(graphHeight - 25, d.y));
        return `translate(${d.x},${d.y})`;
      });
    });

    function dragStarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragEnded(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  }

  /* ---- Graph Resize Handler ---- */
  let resizeTimer;
  function initResizeHandler() {
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const wrap = $('#atlas-graph-wrap');
        if (!wrap) return;

        if (window.innerWidth >= 769 && !wrap.querySelector('svg')) {
          buildGraph();
        }
      }, 300);
    });
  }

  /* Tooltip — fixed-position pill at top of graph */
  function showTooltip(event, d) {
    if (!tooltip) return;
    const era = eras.find((e) => e.id === d.era);
    const dotColor = era ? era.color : 'var(--atlas-text)';
    tooltip.innerHTML = `<span class="atlas-tooltip-dot" style="background:${dotColor}"></span><span class="atlas-tooltip-title">${d.fullTitle}</span><span class="atlas-tooltip-year">${d.year}</span>`;
    tooltip.classList.add('visible');
  }

  function hideTooltip() {
    if (tooltip) tooltip.classList.remove('visible');
  }

  /* Graph highlights */
  function highlightConnections(paperId) {
    if (!nodeSelection || !linkSelection) return;
    const paper = byId(paperId);
    if (!paper) return;
    const connected = new Set([paperId, ...paper.deps, ...paper.unlocks]);

    nodeSelection.classed('dimmed', (d) => !connected.has(d.id));
    nodeSelection.classed('highlighted', (d) => connected.has(d.id));
    nodeSelection.classed('atlas-hovered', (d) => d.id === paperId);
    linkSelection.classed('dimmed', (d) => !connected.has(d.source.id) || !connected.has(d.target.id));
    linkSelection.classed('highlighted', (d) => connected.has(d.source.id) && connected.has(d.target.id));
  }

  function highlightEra(eraId) {
    if (!nodeSelection || !linkSelection) return;
    nodeSelection.classed('dimmed', (d) => d.era !== eraId);
    nodeSelection.classed('highlighted', (d) => d.era === eraId);
    linkSelection.classed('dimmed', (d) => d.source.era !== eraId && d.target.era !== eraId);
    linkSelection.classed('highlighted', (d) => d.source.era === eraId || d.target.era === eraId);
  }

  function highlightPath(paperIds) {
    if (!nodeSelection || !linkSelection) return;
    const set = new Set(paperIds);
    nodeSelection.classed('dimmed', (d) => !set.has(d.id));
    nodeSelection.classed('highlighted', (d) => set.has(d.id));
    linkSelection.classed('dimmed', (d) => !set.has(d.source.id) || !set.has(d.target.id));
    linkSelection.classed('highlighted', (d) => set.has(d.source.id) && set.has(d.target.id));
  }

  function resetGraphHighlights() {
    if (!nodeSelection || !linkSelection) return;
    nodeSelection.classed('dimmed', false).classed('highlighted', false).classed('atlas-hovered', false);
    linkSelection.classed('dimmed', false).classed('highlighted', false);
  }

  /* ---- Cancel Journey ---- */
  function cancelJourney() {
    if (!journeyInProgress && !journeyTimeouts.length) return;
    journeyTimeouts.forEach(clearTimeout);
    journeyTimeouts = [];
    journeyInProgress = false;

    if (journeyLabel) journeyLabel.classList.remove('visible');

    if (nodeSelection) {
      nodeSelection
        .classed('atlas-journey-pending', false)
        .classed('atlas-journey-active', false);
    }
    if (linkSelection) {
      linkSelection
        .classed('atlas-journey-drawing', false)
        .classed('atlas-journey-complete', false);
      linkSelection.each(function () {
        this.style.removeProperty('stroke-dasharray');
        this.style.removeProperty('stroke-dashoffset');
      });
    }
  }

  /* ---- Animated Path Journey ---- */
  function animatePathJourney(paperIds) {
    if (!nodeSelection || !linkSelection) return;

    // Guard: reduced motion or mobile — fall back to instant highlight
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || window.innerWidth < 769) {
      highlightPath(paperIds);
      return;
    }

    // Cancel any existing journey
    cancelJourney();

    journeyInProgress = true;
    const pathSet = new Set(paperIds);
    const activatedSet = new Set();
    const STEP_DELAY = 400;
    const INITIAL_DELAY = 200;

    // Dim ALL elements first
    nodeSelection.classed('dimmed', true).classed('highlighted', false);
    linkSelection.classed('dimmed', true).classed('highlighted', false);

    // Mark path nodes as journey-pending (barely visible)
    nodeSelection
      .filter((d) => pathSet.has(d.id))
      .classed('dimmed', false)
      .classed('atlas-journey-pending', true);

    // Hide non-path links completely
    linkSelection
      .filter((d) => !pathSet.has(d.source.id) || !pathSet.has(d.target.id))
      .classed('dimmed', true);

    // Path links: start hidden (they'll draw in)
    linkSelection
      .filter((d) => pathSet.has(d.source.id) && pathSet.has(d.target.id))
      .classed('dimmed', true);

    // Animate each paper in path order
    paperIds.forEach((paperId, i) => {
      const t = journeyTimeouts.push(setTimeout(() => {
        // Activate this node
        nodeSelection
          .filter((d) => d.id === paperId)
          .classed('atlas-journey-pending', false)
          .classed('atlas-journey-active', true);

        // Update journey label
        const paper = byId(paperId);
        if (paper && journeyLabel) {
          const era = eraOf(paperId);
          const dotColor = era ? era.color : 'var(--atlas-accent)';
          journeyLabel.innerHTML = `<span class="atlas-journey-label-dot" style="background:${dotColor}"></span>${paper.shortTitle || paper.title} <span style="opacity:0.5">${paper.year}</span>`;
          journeyLabel.classList.add('visible');
        }

        // Find edges connecting this paper to already-activated papers
        linkSelection.each(function (d) {
          const srcId = d.source.id;
          const tgtId = d.target.id;

          // Edge must connect current paper to an already-activated paper
          const connectsCurrent =
            (srcId === paperId && activatedSet.has(tgtId)) ||
            (tgtId === paperId && activatedSet.has(srcId));

          if (!connectsCurrent) return;

          const el = this;
          const length = el.getTotalLength();

          // Set up the draw animation
          el.style.strokeDasharray = length;
          el.style.strokeDashoffset = length;

          // Un-dim this edge and add drawing class
          d3.select(el)
            .classed('dimmed', false)
            .classed('atlas-journey-drawing', true);

          // Force reflow
          el.getBoundingClientRect();

          // Trigger draw: transition dashoffset to 0
          el.style.strokeDashoffset = '0';

          // After draw completes, transition to flowing dash
          const completeTimer = setTimeout(() => {
            d3.select(el)
              .classed('atlas-journey-drawing', false)
              .classed('atlas-journey-complete', true);
            el.style.removeProperty('stroke-dasharray');
            el.style.removeProperty('stroke-dashoffset');
          }, 550);
          journeyTimeouts.push(completeTimer);
        });

        activatedSet.add(paperId);
      }, INITIAL_DELAY + i * STEP_DELAY));
    });

    // Cleanup after full journey: transition to steady-state
    const cleanupDelay = INITIAL_DELAY + paperIds.length * STEP_DELAY + 600;
    journeyTimeouts.push(setTimeout(() => {
      // Remove all journey classes
      nodeSelection
        .classed('atlas-journey-pending', false)
        .classed('atlas-journey-active', false);
      linkSelection
        .classed('atlas-journey-drawing', false)
        .classed('atlas-journey-complete', false);
      linkSelection.each(function () {
        this.style.removeProperty('stroke-dasharray');
        this.style.removeProperty('stroke-dashoffset');
      });

      // Hide journey label
      if (journeyLabel) journeyLabel.classList.remove('visible');

      // Apply normal highlighted steady-state
      highlightPath(paperIds);
      journeyInProgress = false;
      journeyTimeouts = [];
    }, cleanupDelay));
  }

  function updateNodeReadState(paperId) {
    if (!nodeSelection) return;
    nodeSelection.select('.atlas-node-read-ring')
      .attr('opacity', (d) => progress.has(d.id) ? 1 : 0);
  }

  /* ============================================================
     GRAPH ERA-BY-ERA ENTRANCE
     ============================================================ */
  let graphRevealed = false;

  function initGraphReveal() {
    const wrap = $('#atlas-graph-wrap');
    const section = $('#atlas-graph-section');
    if (!wrap || !section || !wrap.querySelector('svg')) return;

    // Reduced motion — show everything immediately
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      wrap.classList.add('atlas-graph-complete');
      graphRevealed = true;
      return;
    }

    function runGraphEntrance() {
      if (graphRevealed) return;
      graphRevealed = true;

      eras.forEach((era, i) => {
        // Reveal nodes for this era
        setTimeout(() => {
          if (nodeSelection) {
            nodeSelection
              .filter((d) => d.era === era.id)
              .classed('atlas-graph-revealed', true);
          }
        }, i * 450);

        // Reveal edges whose target node belongs to this era (200ms after nodes)
        setTimeout(() => {
          if (linkSelection) {
            linkSelection
              .filter((d) => d.target.era === era.id)
              .classed('atlas-graph-revealed', true);
          }
        }, i * 450 + 200);
      });

      // Cleanup: add complete class after all eras are done
      setTimeout(() => {
        wrap.classList.add('atlas-graph-complete');
      }, eras.length * 450);
    }

    // Deep-link guard: if graph is already in viewport, run immediately
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      runGraphEntrance();
      return;
    }

    // Otherwise, observe for scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runGraphEntrance();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    observer.observe(section);
  }

  /* ============================================================
     SECTION HEADING CHARACTER REVEALS
     ============================================================ */
  function initAtlasCharReveal() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const headings = document.querySelectorAll('.atlas-section-title');
    if (!headings.length) return;

    headings.forEach((heading) => {
      const text = heading.textContent;
      // Remove data-atlas-animate so the generic scroll animation doesn't also run
      heading.removeAttribute('data-atlas-animate');
      heading.style.opacity = '1';
      heading.innerHTML = '';
      let charIndex = 0;

      for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.classList.add('char');
        if (text[i] === ' ') {
          span.classList.add('space-char');
          span.innerHTML = '&nbsp;';
        } else {
          span.textContent = text[i];
          span.style.setProperty('--i', charIndex);
          charIndex++;
        }
        heading.appendChild(span);
      }
    });

    // Observe for scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    headings.forEach((h) => observer.observe(h));
  }

  /* ============================================================
     INIT
     ============================================================ */
  function init() {
    initAtlasHeroReveal();
    initAtlasCharReveal();
    initScrollAnimations();
    buildEraLegend();
    buildPaths();
    buildCards();
    initFilterBar();
    initSearch();
    initDepLinks();
    initProgressBar();
    buildMobileList();
    buildGraph();
    initGraphReveal();
    initResizeHandler();
    progress.update();
    animateCards();

    // Deep links — after a short delay for rendering
    setTimeout(initDeepLinks, 100);

    // Re-bind cursor hover for new elements
    if (typeof window.bindCursorHover === 'function') {
      window.bindCursorHover();
    }
  }

  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
