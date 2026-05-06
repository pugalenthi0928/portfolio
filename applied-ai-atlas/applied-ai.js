/* ============================================
   THE APPLIED AI ATLAS — UI
   Vanilla JS. No build, no libraries. Wrapped in IIFE.
   ============================================ */
(function () {
  'use strict';

  /* ── Helpers ─────────────────────────────── */
  function $(sel) { return document.querySelector(sel); }
  function $$(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }
  function el(html) { var t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstChild; }
  function escapeHtml(s) {
    if (s === null || s === undefined) return '';
    return String(s)
      .replace(/&(?!(amp|lt|gt|quot|apos|#\d+|[a-z]+);)/g, '&amp;')
      .replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function maturityClass(m) {
    if (!m) return 'mat-early';
    var s = m.toLowerCase();
    if (s.indexOf('production') === 0) return 'mat-prod';
    if (s.indexOf('early') === 0) return 'mat-early';
    if (s.indexOf('research') === 0) return 'mat-research';
    if (s.indexOf('experimental') === 0) return 'mat-exp';
    return 'mat-spec';
  }
  function confidenceClass(c) {
    if (!c) return 'conf-context';
    if (c === 'sourced') return 'conf-sourced';
    if (c === 'inferred') return 'conf-inferred';
    if (c === 'forwardLooking' || c === 'forward-looking') return 'conf-forward';
    if (c === 'needsVerification' || c === 'needs-verification') return 'conf-needs';
    return 'conf-context';
  }
  function confidenceLabel(c) {
    if (c === 'sourced') return 'sourced';
    if (c === 'inferred') return 'inferred';
    if (c === 'forwardLooking' || c === 'forward-looking') return 'forward-looking';
    if (c === 'needsVerification' || c === 'needs-verification') return 'needs verification';
    return 'market context';
  }
  function getCategoryMeta(id) {
    if (typeof APPLIED_CATEGORIES === 'undefined') return null;
    for (var i = 0; i < APPLIED_CATEGORIES.length; i++) if (APPLIED_CATEGORIES[i].id === id) return APPLIED_CATEGORIES[i];
    return null;
  }
  function getDomain(id) {
    if (typeof AI_DOMAINS === 'undefined') return null;
    for (var i = 0; i < AI_DOMAINS.length; i++) if (AI_DOMAINS[i].id === id) return AI_DOMAINS[i];
    return null;
  }
  function getArchitecture(id) {
    if (typeof AI_ARCHITECTURES === 'undefined') return null;
    for (var i = 0; i < AI_ARCHITECTURES.length; i++) if (AI_ARCHITECTURES[i].id === id) return AI_ARCHITECTURES[i];
    return null;
  }
  function getQuestion(id) {
    if (typeof DOMAIN_QUESTIONS === 'undefined') return null;
    for (var i = 0; i < DOMAIN_QUESTIONS.length; i++) if (DOMAIN_QUESTIONS[i].id === id) return DOMAIN_QUESTIONS[i];
    return null;
  }
  function getPaper(id) {
    if (typeof DOMAIN_PAPERS === 'undefined') return null;
    for (var i = 0; i < DOMAIN_PAPERS.length; i++) if (DOMAIN_PAPERS[i].id === id) return DOMAIN_PAPERS[i];
    return null;
  }
  function getBottleneck(id) {
    if (typeof DOMAIN_BOTTLENECKS === 'undefined') return null;
    for (var i = 0; i < DOMAIN_BOTTLENECKS.length; i++) if (DOMAIN_BOTTLENECKS[i].id === id) return DOMAIN_BOTTLENECKS[i];
    return null;
  }

  /* ============================================
     STATS
     ============================================ */
  function setStats() {
    var d = (typeof AI_DOMAINS !== 'undefined') ? AI_DOMAINS.length : 0;
    var a = (typeof AI_ARCHITECTURES !== 'undefined') ? AI_ARCHITECTURES.length : 0;
    var q = (typeof DOMAIN_QUESTIONS !== 'undefined') ? DOMAIN_QUESTIONS.length : 0;
    var p = (typeof DOMAIN_PAPERS !== 'undefined') ? DOMAIN_PAPERS.length : 0;
    if ($('#applied-stat-domains'))      $('#applied-stat-domains').textContent = d;
    if ($('#applied-stat-architectures')) $('#applied-stat-architectures').textContent = a;
    if ($('#applied-stat-questions'))    $('#applied-stat-questions').textContent = q;
    if ($('#applied-stat-papers'))       $('#applied-stat-papers').textContent = p;
  }

  /* ============================================
     FEATURED QUESTIONS
     ============================================ */
  var FEATURED_BEGINNER = [
    'q-bio-vs-finance', 'q-rag-everywhere', 'q-medicine-vs-marketing',
    'q-medicine-imaging-mature', 'q-foundation-vs-gbdt', 'q-diffusion-everywhere'
  ];
  var FEATURED_BUILDER = [
    'q-startup-opps', 'q-painful-workflows', 'q-near-term-monetization',
    'q-data-moat', 'q-feature-creep', 'q-overpriced-domains'
  ];
  var FEATURED_TECHNICAL = [
    'q-pick-architecture', 'q-rag-vs-finetune', 'q-when-gnn',
    'q-when-rl', 'q-evaluation-debt', 'q-still-unsolved-architecture'
  ];

  function buildFeatured(containerId, ids) {
    var c = $(containerId);
    if (!c) return;
    var html = '';
    for (var i = 0; i < ids.length; i++) {
      var q = getQuestion(ids[i]);
      if (!q) continue;
      html += '<button class="applied-fq-card" data-qid="' + escapeHtml(q.id) + '">' +
                '<div class="applied-fq-q">' + escapeHtml(q.question) + '</div>' +
                '<div class="applied-q-short">' + escapeHtml(q.shortAnswer) + '</div>' +
                '<div class="applied-fq-meta">' +
                  '<span class="applied-q-pill" data-aud="' + escapeHtml(q.audience) + '">' + escapeHtml(q.audience) + '</span>' +
                  '<span class="applied-q-pill">' + escapeHtml(q.difficulty || 'Beginner') + '</span>' +
                  '<span class="applied-conf ' + confidenceClass(q.confidence) + '">' + confidenceLabel(q.confidence) + '</span>' +
                '</div>' +
              '</button>';
    }
    c.innerHTML = html;
  }

  /* ============================================
     DOMAIN MAP (grouped by category)
     ============================================ */
  function buildDomainMap() {
    var c = $('#applied-domain-map');
    if (!c || typeof APPLIED_CATEGORIES === 'undefined') return;
    var html = '';
    for (var ci = 0; ci < APPLIED_CATEGORIES.length; ci++) {
      var cat = APPLIED_CATEGORIES[ci];
      var domains = AI_DOMAINS.filter(function (d) { return d.category === cat.id; });
      if (!domains.length) continue;
      html += '<div class="applied-dm-cat" data-cat="' + escapeHtml(cat.id) + '">' +
                '<div class="applied-dm-cathead">' +
                  '<span class="applied-dm-catlabel">' + escapeHtml(cat.label) + '</span>' +
                  '<span class="applied-dm-catdesc">' + escapeHtml(cat.description) + '</span>' +
                '</div>' +
                '<div class="applied-dm-grid">';
      for (var di = 0; di < domains.length; di++) {
        var d = domains[di];
        var topArch = (d.mainArchitectures && d.mainArchitectures[0]) ? d.mainArchitectures[0] : '';
        var topBn = (d.bottlenecks && d.bottlenecks[0]) ? d.bottlenecks[0] : '';
        html += '<button class="applied-dm-tile" data-cat="' + escapeHtml(cat.id) + '" data-domain="' + escapeHtml(d.id) + '">' +
                  '<div class="applied-dm-tile-name">' + escapeHtml(d.name) + '</div>' +
                  '<div class="applied-dm-tile-take">' + escapeHtml(d.oneLineTakeaway || '') + '</div>' +
                  '<div class="applied-dm-tile-meta">' +
                    '<span class="applied-mat ' + maturityClass(d.maturity) + '">' + escapeHtml(d.maturity || '') + '</span>' +
                    (topArch ? '<span class="applied-tag applied-tag-arch">' + escapeHtml(topArch) + '</span>' : '') +
                    (topBn ? '<span class="applied-tag applied-tag-bn">' + escapeHtml(topBn) + '</span>' : '') +
                  '</div>' +
                '</button>';
      }
      html += '</div></div>';
    }
    c.innerHTML = html;
  }

  /* ============================================
     DOMAIN EXPLORER (search + filters)
     ============================================ */
  function buildExplorerControls() {
    /* Categories */
    var catSel = $('#applied-filter-category');
    if (catSel && typeof APPLIED_CATEGORIES !== 'undefined') {
      for (var i = 0; i < APPLIED_CATEGORIES.length; i++) {
        var c = APPLIED_CATEGORIES[i];
        var opt = document.createElement('option');
        opt.value = c.id; opt.textContent = c.label;
        catSel.appendChild(opt);
      }
    }
    /* Architectures */
    var archSel = $('#applied-filter-architecture');
    if (archSel && typeof AI_ARCHITECTURES !== 'undefined') {
      for (var j = 0; j < AI_ARCHITECTURES.length; j++) {
        var a = AI_ARCHITECTURES[j];
        var opt2 = document.createElement('option');
        opt2.value = a.id; opt2.textContent = a.name;
        archSel.appendChild(opt2);
      }
    }
    /* Bottlenecks */
    var bnSel = $('#applied-filter-bottleneck');
    if (bnSel && typeof DOMAIN_BOTTLENECKS !== 'undefined') {
      for (var k = 0; k < DOMAIN_BOTTLENECKS.length; k++) {
        var b = DOMAIN_BOTTLENECKS[k];
        var opt3 = document.createElement('option');
        opt3.value = b.id; opt3.textContent = b.label;
        bnSel.appendChild(opt3);
      }
    }
  }

  function buildExplorer() {
    var c = $('#applied-explorer-grid');
    if (!c) return;
    var html = '';
    for (var i = 0; i < AI_DOMAINS.length; i++) {
      var d = AI_DOMAINS[i];
      var topArch = (d.mainArchitectures && d.mainArchitectures[0]) ? d.mainArchitectures[0] : '';
      html += '<button class="applied-explorer-card" data-domain="' + escapeHtml(d.id) + '" data-cat="' + escapeHtml(d.category) + '" data-maturity="' + escapeHtml(d.maturity || '') + '" data-archs="' + escapeHtml((d.mainArchitectures || []).join('|')) + '" data-bns="' + escapeHtml((d.bottlenecks || []).join('|')) + '" data-search="' + escapeHtml((d.name + ' ' + (d.thesis || '') + ' ' + (d.companies || []).join(' ')).toLowerCase()) + '">' +
                '<div class="applied-dm-tile-name">' + escapeHtml(d.name) + '</div>' +
                '<div class="applied-dm-tile-take">' + escapeHtml(d.oneLineTakeaway || '') + '</div>' +
                '<div class="applied-dm-tile-meta">' +
                  '<span class="applied-mat ' + maturityClass(d.maturity) + '">' + escapeHtml(d.maturity || '') + '</span>' +
                  '<span class="applied-conf ' + confidenceClass(d.confidence) + '">' + confidenceLabel(d.confidence) + '</span>' +
                  (topArch ? '<span class="applied-tag applied-tag-arch">' + escapeHtml(topArch) + '</span>' : '') +
                '</div>' +
              '</button>';
    }
    c.innerHTML = html;
  }

  function applyDomainFilters() {
    var s = ($('#applied-domain-search').value || '').toLowerCase().trim();
    var cat = $('#applied-filter-category').value;
    var mat = $('#applied-filter-maturity').value;
    var archId = $('#applied-filter-architecture').value;
    var arch = archId ? (getArchitecture(archId) ? getArchitecture(archId).name.toLowerCase() : archId) : '';
    var bnId = $('#applied-filter-bottleneck').value;

    $$('#applied-explorer-grid .applied-explorer-card').forEach(function (card) {
      var passSearch = !s || (card.dataset.search.indexOf(s) !== -1);
      var passCat = !cat || (card.dataset.cat === cat);
      var passMat = !mat || (card.dataset.maturity === mat);
      /* Architecture: match domain.mainArchitectures (string list) against architecture name */
      var archs = (card.dataset.archs || '').toLowerCase();
      var passArch = !arch || (archs.indexOf(arch) !== -1) ||
        (archId && AI_ARCHITECTURES.some(function (a) { return a.id === archId && (a.domains || []).indexOf(card.dataset.domain) !== -1; }));
      var bn = bnId ? getBottleneck(bnId) : null;
      var passBn = !bn || (bn.domains || []).indexOf(card.dataset.domain) !== -1 ||
        (card.dataset.bns || '').toLowerCase().indexOf(bn.label.toLowerCase()) !== -1;
      card.hidden = !(passSearch && passCat && passMat && passArch && passBn);
    });
  }

  /* ============================================
     ARCHITECTURE EXPLORER
     ============================================ */
  function buildArchitectures() {
    var c = $('#applied-arch-grid');
    if (!c || typeof AI_ARCHITECTURES === 'undefined') return;
    var html = '';
    for (var i = 0; i < AI_ARCHITECTURES.length; i++) {
      var a = AI_ARCHITECTURES[i];
      html += '<button class="applied-arch-card" data-arch="' + escapeHtml(a.id) + '">' +
                '<div class="applied-arch-fam">' + escapeHtml(a.family || '') + '</div>' +
                '<div class="applied-arch-name">' + escapeHtml(a.name) + '</div>' +
                '<div class="applied-arch-what">' + escapeHtml(a.whatItIs || '') + '</div>' +
                '<div class="applied-fq-meta">' +
                  '<span class="applied-mat ' + maturityClass(a.maturity) + '">' + escapeHtml(a.maturity || '') + '</span>' +
                '</div>' +
              '</button>';
    }
    c.innerHTML = html;
  }

  /* ============================================
     WORKFLOWS
     ============================================ */
  function buildWorkflows() {
    var c = $('#applied-wf-grid');
    if (!c || typeof DOMAIN_WORKFLOWS === 'undefined') return;
    var html = '';
    for (var i = 0; i < DOMAIN_WORKFLOWS.length; i++) {
      var w = DOMAIN_WORKFLOWS[i];
      var stepsHtml = '';
      for (var s = 0; s < w.steps.length; s++) {
        if (s > 0) stepsHtml += '<span class="applied-wf-arrow">&#8250;</span>';
        stepsHtml += '<span class="applied-wf-step">' + escapeHtml(w.steps[s]) + '</span>';
      }
      html += '<div class="applied-wf-card">' +
                '<div class="applied-wf-title">' + escapeHtml(w.title) + '</div>' +
                '<div class="applied-wf-summary">' + escapeHtml(w.summary || '') + '</div>' +
                '<div class="applied-wf-steps">' + stepsHtml + '</div>' +
              '</div>';
    }
    c.innerHTML = html;
  }

  /* ============================================
     PAPERS
     ============================================ */
  function buildPaperFilters() {
    var sel = $('#applied-filter-paper-domain');
    if (!sel || typeof DOMAIN_PAPERS === 'undefined') return;
    var seen = {};
    for (var i = 0; i < DOMAIN_PAPERS.length; i++) {
      var d = DOMAIN_PAPERS[i].domain;
      if (d && !seen[d]) {
        seen[d] = true;
        var opt = document.createElement('option');
        opt.value = d; opt.textContent = d;
        sel.appendChild(opt);
      }
    }
  }

  function buildPapers() {
    var c = $('#applied-paper-grid');
    if (!c || typeof DOMAIN_PAPERS === 'undefined') return;
    var html = '';
    for (var i = 0; i < DOMAIN_PAPERS.length; i++) {
      var p = DOMAIN_PAPERS[i];
      var conf = confidenceClass(p.confidence);
      html += '<div class="applied-paper-card" data-domain="' + escapeHtml(p.domain || '') + '" data-search="' + escapeHtml(((p.title || '') + ' ' + (p.authors || '') + ' ' + (p.architecture || '')).toLowerCase()) + '">' +
                '<div class="applied-paper-title">' + escapeHtml(p.title || '') + '</div>' +
                '<div class="applied-paper-meta">' + escapeHtml((p.authors || '') + ' &middot; ' + (p.year || '') + ' &middot; ' + (p.venue || '')) + '</div>' +
                '<div class="applied-paper-why">' + escapeHtml(p.whyItMatters || '') + '</div>' +
                '<div class="applied-paper-foot">' +
                  '<span class="applied-conf ' + conf + '">' + confidenceLabel(p.confidence) + '</span>' +
                  (p.sourceUrl ? '<a class="applied-paper-link" href="' + escapeHtml(p.sourceUrl) + '" target="_blank" rel="noopener noreferrer">source &nearr;</a>' : '') +
                '</div>' +
              '</div>';
    }
    c.innerHTML = html;
  }

  function applyPaperFilters() {
    var s = ($('#applied-paper-search').value || '').toLowerCase().trim();
    var dom = $('#applied-filter-paper-domain').value;
    $$('#applied-paper-grid .applied-paper-card').forEach(function (card) {
      var passS = !s || card.dataset.search.indexOf(s) !== -1;
      var passD = !dom || card.dataset.domain === dom;
      card.hidden = !(passS && passD);
    });
  }

  /* ============================================
     BOTTLENECKS
     ============================================ */
  function buildBottlenecks() {
    var c = $('#applied-bn-grid');
    if (!c || typeof DOMAIN_BOTTLENECKS === 'undefined') return;
    var html = '';
    for (var i = 0; i < DOMAIN_BOTTLENECKS.length; i++) {
      var b = DOMAIN_BOTTLENECKS[i];
      var domsHtml = '';
      for (var d = 0; d < (b.domains || []).length; d++) {
        var dom = getDomain(b.domains[d]);
        if (dom) {
          domsHtml += '<span class="applied-bn-dom" data-domain="' + escapeHtml(dom.id) + '">' + escapeHtml(dom.name) + '</span>';
        }
      }
      html += '<div class="applied-bn-card">' +
                '<div class="applied-bn-title">' + escapeHtml(b.label) + '</div>' +
                '<div class="applied-bn-desc">' + escapeHtml(b.description || '') + '</div>' +
                '<div class="applied-bn-domains">' + domsHtml + '</div>' +
              '</div>';
    }
    c.innerHTML = html;
  }

  /* ============================================
     HYPE VS REAL
     ============================================ */
  var HYPE_DOMAINS = [
    'drug-discovery', 'clinical-medicine', 'radiology', 'banking', 'quant-finance',
    'software-engineering', 'cybersecurity', 'legal', 'education', 'robotics',
    'autonomous-vehicles', 'climate-weather', 'materials-science', 'media-entertainment',
    'consumer-search', 'defence'
  ];

  function buildHype() {
    var c = $('#applied-hype-grid');
    if (!c) return;
    var html = '';
    for (var i = 0; i < HYPE_DOMAINS.length; i++) {
      var d = getDomain(HYPE_DOMAINS[i]);
      if (!d || !d.hypeVsReal) continue;
      var realList = (d.hypeVsReal.real || []).map(function (r) { return '<li>' + escapeHtml(r) + '</li>'; }).join('');
      var overList = (d.hypeVsReal.overhyped || []).map(function (r) { return '<li>' + escapeHtml(r) + '</li>'; }).join('');
      html += '<div class="applied-hype-card">' +
                '<div class="applied-hype-domain" data-domain="' + escapeHtml(d.id) + '">' + escapeHtml(d.name) + ' &rarr;</div>' +
                '<div class="applied-hype-row applied-hype-real">' +
                  '<div class="applied-hype-label">Real</div>' +
                  '<ul class="applied-hype-list">' + realList + '</ul>' +
                '</div>' +
                '<div class="applied-hype-row applied-hype-over">' +
                  '<div class="applied-hype-label">Overhyped</div>' +
                  '<ul class="applied-hype-list">' + overList + '</ul>' +
                '</div>' +
              '</div>';
    }
    c.innerHTML = html;
  }

  /* ============================================
     OPPORTUNITIES TABLE
     ============================================ */
  function tagClass(value) {
    if (!value) return '';
    var s = String(value).toLowerCase();
    if (s.indexOf('high') !== -1 || s.indexOf('very high') !== -1) return 'applied-opps-cell--high';
    if (s.indexOf('medium') !== -1) return 'applied-opps-cell--medium';
    if (s.indexOf('low') !== -1) return 'applied-opps-cell--low';
    return '';
  }

  function buildOpps() {
    var c = $('#applied-opps-table');
    if (!c || typeof DOMAIN_OPPORTUNITIES === 'undefined') return;
    var html = '<div class="applied-opps-row applied-opps-row--head">' +
                 '<div>Opportunity / domain</div>' +
                 '<div>Buyer</div>' +
                 '<div>Pain</div>' +
                 '<div>Data</div>' +
                 '<div>Reg</div>' +
                 '<div>Comp</div>' +
               '</div>';
    for (var i = 0; i < DOMAIN_OPPORTUNITIES.length; i++) {
      var o = DOMAIN_OPPORTUNITIES[i];
      var dom = getDomain(o.domainId);
      html += '<div class="applied-opps-row">' +
                '<div>' +
                  '<div class="applied-opps-title">' + escapeHtml(o.title || '') + '</div>' +
                  '<div class="applied-opps-domain">' + (dom ? '<button class="applied-source-pill" data-domain="' + escapeHtml(dom.id) + '">' + escapeHtml(dom.name) + ' &rarr;</button>' : '') + '</div>' +
                '</div>' +
                '<div class="applied-opps-cell" data-label="Buyer">' + escapeHtml(o.buyer || '') + '</div>' +
                '<div class="applied-opps-cell ' + tagClass(o.painIntensity) + '" data-label="Pain">' + escapeHtml(o.painIntensity || '') + '</div>' +
                '<div class="applied-opps-cell ' + tagClass(o.dataAccess) + '" data-label="Data">' + escapeHtml(o.dataAccess || '') + '</div>' +
                '<div class="applied-opps-cell ' + tagClass(o.regulatoryRisk) + '" data-label="Reg">' + escapeHtml(o.regulatoryRisk || '') + '</div>' +
                '<div class="applied-opps-cell ' + tagClass(o.competition) + '" data-label="Comp">' + escapeHtml(o.competition || '') + '</div>' +
              '</div>';
    }
    c.innerHTML = html;
  }

  /* ============================================
     RESEARCH FRONTIER
     ============================================ */
  function buildFrontier() {
    var c = $('#applied-frontier-grid');
    if (!c || typeof AI_DOMAINS === 'undefined') return;
    var html = '';
    for (var i = 0; i < AI_DOMAINS.length; i++) {
      var d = AI_DOMAINS[i];
      if (!/research|experimental|speculative/i.test(d.maturity || '')) continue;
      html += '<button class="applied-frontier-card" data-domain="' + escapeHtml(d.id) + '">' +
                '<div class="applied-frontier-name">' + escapeHtml(d.name) + '</div>' +
                '<div class="applied-frontier-take">' + escapeHtml(d.thesis || '') + '</div>' +
                '<div class="applied-fq-meta">' +
                  '<span class="applied-mat ' + maturityClass(d.maturity) + '">' + escapeHtml(d.maturity || '') + '</span>' +
                '</div>' +
              '</button>';
    }
    c.innerHTML = html;
  }

  /* ============================================
     QUESTION EXPLORER
     ============================================ */
  function buildQuestionFilters() {
    var sel = $('#applied-q-category');
    if (!sel || typeof DOMAIN_QUESTIONS === 'undefined') return;
    var seen = {};
    for (var i = 0; i < DOMAIN_QUESTIONS.length; i++) {
      var c = DOMAIN_QUESTIONS[i].category;
      if (c && !seen[c]) {
        seen[c] = true;
        var opt = document.createElement('option');
        opt.value = c; opt.textContent = c;
        sel.appendChild(opt);
      }
    }
  }

  function buildQuestions() {
    var c = $('#applied-q-list');
    if (!c || typeof DOMAIN_QUESTIONS === 'undefined') return;
    var html = '';
    for (var i = 0; i < DOMAIN_QUESTIONS.length; i++) {
      var q = DOMAIN_QUESTIONS[i];
      html += '<button class="applied-q-card" data-qid="' + escapeHtml(q.id) + '" data-aud="' + escapeHtml(q.audience) + '" data-cat="' + escapeHtml(q.category) + '" data-diff="' + escapeHtml(q.difficulty) + '" data-search="' + escapeHtml((q.question + ' ' + (q.shortAnswer || '') + ' ' + q.audience + ' ' + q.category).toLowerCase()) + '">' +
                '<div class="applied-q-q">' + escapeHtml(q.question) + '</div>' +
                '<div class="applied-q-short">' + escapeHtml(q.shortAnswer || '') + '</div>' +
                '<div class="applied-q-meta">' +
                  '<span class="applied-q-pill" data-aud="' + escapeHtml(q.audience) + '">' + escapeHtml(q.audience) + '</span>' +
                  '<span class="applied-q-pill">' + escapeHtml(q.category) + '</span>' +
                  '<span class="applied-q-pill">' + escapeHtml(q.difficulty || '') + '</span>' +
                  '<span class="applied-conf ' + confidenceClass(q.confidence) + '">' + confidenceLabel(q.confidence) + '</span>' +
                '</div>' +
              '</button>';
    }
    c.innerHTML = html;
  }

  function applyQuestionFilters() {
    var s = ($('#applied-q-search').value || '').toLowerCase().trim();
    var aud = $('#applied-q-audience').value;
    var cat = $('#applied-q-category').value;
    var diff = $('#applied-q-difficulty').value;
    $$('#applied-q-list .applied-q-card').forEach(function (card) {
      var passS = !s || card.dataset.search.indexOf(s) !== -1;
      var passA = !aud || card.dataset.aud === aud;
      var passC = !cat || card.dataset.cat === cat;
      var passD = !diff || card.dataset.diff === diff;
      card.hidden = !(passS && passA && passC && passD);
    });
  }

  /* ============================================
     SOURCES + AUDIT
     ============================================ */
  function buildSources() {
    var c = $('#applied-source-grid');
    if (c && typeof SOURCE_LIBRARY !== 'undefined') {
      var html = '';
      for (var i = 0; i < SOURCE_LIBRARY.length; i++) {
        var s = SOURCE_LIBRARY[i];
        html += '<div class="applied-source-item">' +
                  '<div class="applied-source-item-title">' + escapeHtml(s.title) + '</div>' +
                  '<div class="applied-source-item-meta">' + escapeHtml(s.publisher || '') + ' &middot; ' + escapeHtml(String(s.year || '')) + ' &middot; ' + escapeHtml(s.type || '') + '</div>' +
                  (s.url ? '<a href="' + escapeHtml(s.url) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(s.url) + '</a>' : '') +
                '</div>';
      }
      c.innerHTML = html;
    }
    var au = $('#applied-audit-grid');
    if (au && typeof CLAIM_AUDIT_LOG !== 'undefined') {
      var ahtml = '';
      for (var j = 0; j < CLAIM_AUDIT_LOG.length; j++) {
        var a = CLAIM_AUDIT_LOG[j];
        ahtml += '<div class="applied-audit-item">' +
                   '<div class="applied-audit-claim">' + escapeHtml(a.claim) + '</div>' +
                   '<div>' + escapeHtml(a.issue || '') + '</div>' +
                   '<div class="applied-audit-action">&rarr; ' + escapeHtml(a.action || '') + '</div>' +
                 '</div>';
      }
      au.innerHTML = ahtml;
    }
  }

  /* ============================================
     DETAIL PANEL — domain / architecture / question
     ============================================ */
  var lastFocus = null;
  function openPanel(html) {
    var panel = $('#applied-detail');
    var overlay = $('#applied-detail-overlay');
    var inner = $('#applied-detail-inner');
    if (!panel || !inner) return;
    inner.innerHTML = '<button class="applied-detail-close" aria-label="Close panel">&times;</button>' + html;
    lastFocus = document.activeElement;
    void panel.offsetWidth;
    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    var close = inner.querySelector('.applied-detail-close');
    if (close) close.focus({ preventScroll: true });
    bindTabs(inner);
  }
  function closePanel() {
    var panel = $('#applied-detail');
    var overlay = $('#applied-detail-overlay');
    if (!panel) return;
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
    if (window.location.hash) history.replaceState(null, '', window.location.pathname);
  }
  function bindTabs(inner) {
    var tabs = inner.querySelectorAll('.applied-detail-tab');
    var panels = inner.querySelectorAll('.applied-detail-tabpanel');
    if (!tabs.length) return;
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var id = tab.dataset.tab;
        tabs.forEach(function (t) { t.classList.toggle('active', t.dataset.tab === id); });
        panels.forEach(function (p) { p.classList.toggle('active', p.dataset.tabpanel === id); });
      });
    });
  }

  function chipList(label, items, type) {
    if (!items || !items.length) return '';
    var html = '<div class="applied-detail-block"><div class="applied-detail-block-title">' + escapeHtml(label) + '</div><div class="applied-detail-chip-row">';
    for (var i = 0; i < items.length; i++) {
      var v = items[i];
      var attr = type ? ' data-' + type + '="' + escapeHtml(v) + '"' : '';
      html += '<span class="applied-detail-chip"' + attr + '>' + escapeHtml(v) + '</span>';
    }
    html += '</div></div>';
    return html;
  }

  function bulletList(label, items) {
    if (!items || !items.length) return '';
    var html = '<div class="applied-detail-block"><div class="applied-detail-block-title">' + escapeHtml(label) + '</div><ul class="applied-detail-list">';
    for (var i = 0; i < items.length; i++) html += '<li>' + escapeHtml(items[i]) + '</li>';
    html += '</ul></div>';
    return html;
  }

  function paperRefList(ids) {
    if (!ids || !ids.length) return '';
    var html = '<div class="applied-detail-block"><div class="applied-detail-block-title">Papers</div>';
    for (var i = 0; i < ids.length; i++) {
      var p = getPaper(ids[i]);
      if (!p) continue;
      html += '<div style="font-size:12px;color:var(--text-secondary);margin-bottom:6px;">' +
                '<strong style="color:var(--text);">' + escapeHtml(p.title) + '</strong><br/>' +
                '<span style="color:var(--text-tertiary);">' + escapeHtml((p.authors || '') + ' · ' + (p.year || '') + ' · ' + (p.venue || '')) + '</span>' +
                (p.sourceUrl ? ' &middot; <a class="applied-paper-link" href="' + escapeHtml(p.sourceUrl) + '" target="_blank" rel="noopener noreferrer">source &nearr;</a>' : '') +
                ' <span class="applied-conf ' + confidenceClass(p.confidence) + '">' + confidenceLabel(p.confidence) + '</span>' +
              '</div>';
    }
    html += '</div>';
    return html;
  }

  function relatedQuestionsBlock(qids) {
    if (!qids || !qids.length) return '';
    var html = '<div class="applied-detail-block"><div class="applied-detail-block-title">Related questions</div><div class="applied-detail-chip-row">';
    for (var i = 0; i < qids.length; i++) {
      var q = getQuestion(qids[i]);
      if (!q) continue;
      html += '<button class="applied-detail-chip" data-qid="' + escapeHtml(q.id) + '">' + escapeHtml(q.question) + ' &rarr;</button>';
    }
    html += '</div></div>';
    return html;
  }

  function renderDomainProfile(d) {
    var cat = getCategoryMeta(d.category);
    var catColor = cat ? cat.color : '#5EEAD4';
    var catLabel = cat ? cat.label : d.category;

    var brief =
      '<p class="applied-detail-summary">' + escapeHtml(d.thesis || '') + '</p>' +
      (d.commonMisunderstanding ? '<div class="applied-callout applied-callout--warn"><span class="applied-callout-label">Common misunderstanding</span>' + escapeHtml(d.commonMisunderstanding) + '</div>' : '') +
      bulletList('What AI is used for', d.whatAIIsUsedFor) +
      chipList('Main architectures', d.mainArchitectures, 'arch') +
      bulletList('Workflow', d.workflow);

    var archs = '';
    if (d.mainArchitectures && d.mainArchitectures.length) {
      archs += chipList('Main architectures', d.mainArchitectures, 'arch');
    }
    if (d.keyModels && d.keyModels.length) {
      archs += bulletList('Key models / tools', d.keyModels);
    }

    var papers = '';
    var paperIds = (d.sourceIds || []).filter(function (id) { return id && id.indexOf('paper-') === 0; });
    if (paperIds.length) papers += paperRefList(paperIds);
    if (d.importantPapers && d.importantPapers.length) {
      papers += '<div class="applied-detail-block"><div class="applied-detail-block-title">Landmark papers</div>';
      for (var p = 0; p < d.importantPapers.length; p++) {
        var pp = d.importantPapers[p];
        papers += '<div style="font-size:12px;color:var(--text-secondary);margin-bottom:6px;"><strong style="color:var(--text);">' + escapeHtml(pp.title) + '</strong><br/>' +
                  '<span style="color:var(--text-tertiary);">' + escapeHtml((pp.authors || '') + ' · ' + (pp.year || '') + ' · ' + (pp.venue || '')) + '</span>' +
                  (pp.whyItMatters ? '<br/>' + escapeHtml(pp.whyItMatters) : '') +
                  '</div>';
      }
      papers += '</div>';
    }
    if (!papers) papers = '<p class="applied-detail-block-text" style="color:var(--text-tertiary);">No specific papers logged for this domain.</p>';

    var datasets = bulletList('Key datasets', d.keyDatasets) || '<p class="applied-detail-block-text" style="color:var(--text-tertiary);">No datasets recorded for this domain.</p>';
    var companies = bulletList('Companies / labs (market context)', d.companies) || '<p class="applied-detail-block-text" style="color:var(--text-tertiary);">No companies recorded.</p>';
    var bottlenecks = bulletList('Bottlenecks', d.bottlenecks) || '';

    var hype = '';
    if (d.hypeVsReal) {
      hype += '<div class="applied-detail-hyperow"><div class="applied-callout-label" style="color:var(--c-sourced);">Real</div><div>';
      (d.hypeVsReal.real || []).forEach(function (r) { hype += '&bull; ' + escapeHtml(r) + '<br/>'; });
      hype += '</div></div>';
      hype += '<div class="applied-detail-hyperow"><div class="applied-callout-label" style="color:var(--c-needs);">Overhyped</div><div>';
      (d.hypeVsReal.overhyped || []).forEach(function (r) { hype += '&bull; ' + escapeHtml(r) + '<br/>'; });
      hype += '</div></div>';
    }
    if (d.commonMisunderstanding) {
      hype += '<div class="applied-callout applied-callout--warn"><span class="applied-callout-label">Common misunderstanding</span>' + escapeHtml(d.commonMisunderstanding) + '</div>';
    }

    var opps = '';
    if (typeof DOMAIN_OPPORTUNITIES !== 'undefined') {
      var matched = DOMAIN_OPPORTUNITIES.filter(function (o) { return o.domainId === d.id; });
      if (matched.length) {
        opps = '<div class="applied-detail-block"><div class="applied-detail-block-title">Founder opportunities</div>';
        for (var oi = 0; oi < matched.length; oi++) {
          var o = matched[oi];
          opps += '<div style="font-size:12px;color:var(--text-secondary);margin-bottom:8px;">' +
                    '<strong style="color:var(--text);">' + escapeHtml(o.title) + '</strong><br/>' +
                    '<span>Buyer: ' + escapeHtml(o.buyer || '') + '</span><br/>' +
                    (o.note ? escapeHtml(o.note) : '') +
                  '</div>';
        }
        opps += '</div>';
      }
    }
    if (d.founderOpportunities && d.founderOpportunities.length) {
      opps += bulletList('Wedge opportunities', d.founderOpportunities);
    }
    if (!opps) opps = '<p class="applied-detail-block-text" style="color:var(--text-tertiary);">No opportunities logged.</p>';

    var questions = relatedQuestionsBlock(d.relatedQuestions);
    if (!questions) questions = '<p class="applied-detail-block-text" style="color:var(--text-tertiary);">No related questions yet.</p>';

    var sources = '';
    var srcIds = d.sourceIds || [];
    if (srcIds.length) {
      sources = '<div class="applied-detail-block"><div class="applied-detail-block-title">Sources</div><div>';
      for (var si = 0; si < srcIds.length; si++) {
        var sid = srcIds[si];
        var src = (typeof SOURCE_LIBRARY !== 'undefined') ? SOURCE_LIBRARY.filter(function (s) { return s.id === sid; })[0] : null;
        var paper = getPaper(sid);
        if (src) {
          sources += '<a class="applied-source-pill" href="' + escapeHtml(src.url || '#') + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(src.title) + ' &nearr;</a>';
        } else if (paper) {
          sources += '<a class="applied-source-pill" href="' + escapeHtml(paper.sourceUrl || '#') + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(paper.title) + ' &nearr;</a>';
        } else if (sid === 'needs-verification') {
          sources += '<span class="applied-source-pill applied-conf conf-needs">needs verification</span>';
        }
      }
      sources += '</div></div>';
    } else {
      sources = '<p class="applied-detail-block-text" style="color:var(--text-tertiary);">No sources logged for this domain entry. Treat as inferred / market context.</p>';
    }

    return '<div class="applied-detail-badges">' +
             '<span class="applied-detail-badge" style="color:' + catColor + ';border-color:' + catColor + ';">' + escapeHtml(catLabel) + '</span>' +
             '<span class="applied-mat ' + maturityClass(d.maturity) + '">' + escapeHtml(d.maturity || '') + '</span>' +
             '<span class="applied-conf ' + confidenceClass(d.confidence) + '">' + confidenceLabel(d.confidence) + '</span>' +
           '</div>' +
           '<h2 id="applied-detail-title" class="applied-detail-name">' + escapeHtml(d.name) + '</h2>' +
           '<div class="applied-detail-sub">' + escapeHtml(d.oneLineTakeaway || '') + '</div>' +
           '<div class="applied-detail-tabs" role="tablist">' +
             '<button class="applied-detail-tab active" data-tab="brief">Brief</button>' +
             '<button class="applied-detail-tab" data-tab="archs">Architectures</button>' +
             '<button class="applied-detail-tab" data-tab="papers">Papers</button>' +
             '<button class="applied-detail-tab" data-tab="datasets">Datasets</button>' +
             '<button class="applied-detail-tab" data-tab="companies">Companies</button>' +
             '<button class="applied-detail-tab" data-tab="bottlenecks">Bottlenecks</button>' +
             '<button class="applied-detail-tab" data-tab="hype">Hype vs real</button>' +
             '<button class="applied-detail-tab" data-tab="opps">Opportunities</button>' +
             '<button class="applied-detail-tab" data-tab="questions">Questions</button>' +
             '<button class="applied-detail-tab" data-tab="sources">Sources</button>' +
           '</div>' +
           '<div class="applied-detail-tabpanel active" data-tabpanel="brief">' + brief + '</div>' +
           '<div class="applied-detail-tabpanel" data-tabpanel="archs">' + (archs || '<p class="applied-detail-block-text" style="color:var(--text-tertiary);">No architectures logged.</p>') + '</div>' +
           '<div class="applied-detail-tabpanel" data-tabpanel="papers">' + papers + '</div>' +
           '<div class="applied-detail-tabpanel" data-tabpanel="datasets">' + datasets + '</div>' +
           '<div class="applied-detail-tabpanel" data-tabpanel="companies">' + companies + '</div>' +
           '<div class="applied-detail-tabpanel" data-tabpanel="bottlenecks">' + (bottlenecks || '<p class="applied-detail-block-text" style="color:var(--text-tertiary);">No bottlenecks logged.</p>') + '</div>' +
           '<div class="applied-detail-tabpanel" data-tabpanel="hype">' + (hype || '<p class="applied-detail-block-text" style="color:var(--text-tertiary);">No hype-vs-real logged.</p>') + '</div>' +
           '<div class="applied-detail-tabpanel" data-tabpanel="opps">' + opps + '</div>' +
           '<div class="applied-detail-tabpanel" data-tabpanel="questions">' + questions + '</div>' +
           '<div class="applied-detail-tabpanel" data-tabpanel="sources">' + sources + '</div>';
  }

  function renderArchitectureProfile(a) {
    var domains = (a.domains || []).map(function (id) {
      var d = getDomain(id);
      return d ? '<button class="applied-detail-chip" data-domain="' + escapeHtml(d.id) + '">' + escapeHtml(d.name) + ' &rarr;</button>' : '';
    }).join('');

    var papers = paperRefList(a.landmarkPapers || []);

    return '<div class="applied-detail-badges">' +
             '<span class="applied-detail-badge" style="color:var(--applied-warm);border-color:var(--applied-warm);">' + escapeHtml(a.family || '') + '</span>' +
             '<span class="applied-mat ' + maturityClass(a.maturity) + '">' + escapeHtml(a.maturity || '') + '</span>' +
           '</div>' +
           '<h2 id="applied-detail-title" class="applied-detail-name">' + escapeHtml(a.name) + '</h2>' +
           '<p class="applied-detail-summary">' + escapeHtml(a.whatItIs || '') + '</p>' +
           (a.commonMisunderstanding ? '<div class="applied-callout applied-callout--warn"><span class="applied-callout-label">Common misunderstanding</span>' + escapeHtml(a.commonMisunderstanding) + '</div>' : '') +
           bulletList('Where used', a.whereUsed) +
           bulletList('Strengths', a.strengths) +
           bulletList('Weaknesses', a.weaknesses) +
           (domains ? '<div class="applied-detail-block"><div class="applied-detail-block-title">Domains</div><div class="applied-detail-chip-row">' + domains + '</div></div>' : '') +
           papers;
  }

  function renderQuestionProfile(q) {
    var related = (q.relatedDomains || []).map(function (id) {
      var d = getDomain(id);
      return d ? '<button class="applied-detail-chip" data-domain="' + escapeHtml(d.id) + '">' + escapeHtml(d.name) + ' &rarr;</button>' : '';
    }).join('');

    var arches = (q.relatedArchitectures || []).map(function (id) {
      var a = getArchitecture(id);
      return a ? '<button class="applied-detail-chip" data-arch="' + escapeHtml(a.id) + '">' + escapeHtml(a.name) + '</button>' : '';
    }).join('');

    var detailed = '';
    if (q.detailedAnswer && q.detailedAnswer.length) {
      detailed = '<div class="applied-detail-block"><div class="applied-detail-block-title">Detailed answer</div>';
      for (var i = 0; i < q.detailedAnswer.length; i++) {
        detailed += '<p style="font-size:13px;color:var(--text-secondary);line-height:1.6;margin:0 0 10px;">' + q.detailedAnswer[i] + '</p>';
      }
      detailed += '</div>';
    }

    return '<div class="applied-detail-badges">' +
             '<span class="applied-q-pill" data-aud="' + escapeHtml(q.audience) + '">' + escapeHtml(q.audience) + '</span>' +
             '<span class="applied-q-pill">' + escapeHtml(q.category) + '</span>' +
             '<span class="applied-q-pill">' + escapeHtml(q.difficulty || '') + '</span>' +
             '<span class="applied-conf ' + confidenceClass(q.confidence) + '">' + confidenceLabel(q.confidence) + '</span>' +
           '</div>' +
           '<h2 id="applied-detail-title" class="applied-detail-name">' + escapeHtml(q.question) + '</h2>' +
           (q.shortAnswer ? '<p class="applied-detail-summary">' + escapeHtml(q.shortAnswer) + '</p>' : '') +
           (q.mentalModel ? '<div class="applied-callout"><span class="applied-callout-label">Mental model</span>' + escapeHtml(q.mentalModel) + '</div>' : '') +
           detailed +
           (q.commonMisunderstanding ? '<div class="applied-callout applied-callout--warn"><span class="applied-callout-label">Common misunderstanding</span>' + escapeHtml(q.commonMisunderstanding) + '</div>' : '') +
           (q.whyItMatters ? '<div class="applied-callout applied-callout--why"><span class="applied-callout-label">Why it matters</span>' + escapeHtml(q.whyItMatters) + '</div>' : '') +
           (related ? '<div class="applied-detail-block"><div class="applied-detail-block-title">Related domains</div><div class="applied-detail-chip-row">' + related + '</div></div>' : '') +
           (arches ? '<div class="applied-detail-block"><div class="applied-detail-block-title">Related architectures</div><div class="applied-detail-chip-row">' + arches + '</div></div>' : '') +
           paperRefList(q.relatedPapers) +
           relatedQuestionsBlock(q.relatedQuestions);
  }

  /* ============================================
     OPEN BY ID
     ============================================ */
  function openDomain(id) {
    var d = getDomain(id);
    if (!d) return;
    openPanel(renderDomainProfile(d));
    history.replaceState(null, '', '#domain:' + id);
  }
  function openArch(id) {
    var a = getArchitecture(id);
    if (!a) return;
    openPanel(renderArchitectureProfile(a));
    history.replaceState(null, '', '#arch:' + id);
  }
  function openQuestionPanel(id) {
    var q = getQuestion(id);
    if (!q) return;
    openPanel(renderQuestionProfile(q));
    history.replaceState(null, '', '#question:' + id);
  }

  /* ============================================
     EVENTS
     ============================================ */
  function bindClicks() {
    document.addEventListener('click', function (e) {
      var t = e.target;
      var domainBtn = t.closest('[data-domain]');
      var archBtn = t.closest('[data-arch]');
      var qBtn = t.closest('[data-qid]');
      var close = t.closest('.applied-detail-close');
      var overlay = t.closest('#applied-detail-overlay');
      if (close || overlay) { closePanel(); return; }
      if (qBtn && qBtn.dataset.qid) { e.preventDefault(); openQuestionPanel(qBtn.dataset.qid); return; }
      if (domainBtn && domainBtn.dataset.domain) { e.preventDefault(); openDomain(domainBtn.dataset.domain); return; }
      if (archBtn && archBtn.dataset.arch) { e.preventDefault(); openArch(archBtn.dataset.arch); return; }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closePanel();
    });
  }

  function bindFilters() {
    var ds = $('#applied-domain-search');
    var dc = $('#applied-filter-category');
    var dm = $('#applied-filter-maturity');
    var da = $('#applied-filter-architecture');
    var db = $('#applied-filter-bottleneck');
    [ds, dc, dm, da, db].forEach(function (input) {
      if (input) input.addEventListener('input', applyDomainFilters);
    });

    var ps = $('#applied-paper-search');
    var pd = $('#applied-filter-paper-domain');
    [ps, pd].forEach(function (input) { if (input) input.addEventListener('input', applyPaperFilters); });

    var qs = $('#applied-q-search');
    var qa = $('#applied-q-audience');
    var qc = $('#applied-q-category');
    var qd = $('#applied-q-difficulty');
    [qs, qa, qc, qd].forEach(function (input) { if (input) input.addEventListener('input', applyQuestionFilters); });
  }

  function handleHash() {
    var h = window.location.hash.replace('#', '');
    if (!h) return;
    if (h.indexOf('domain:') === 0) { setTimeout(function () { openDomain(h.slice(7)); }, 200); return; }
    if (h.indexOf('arch:') === 0) { setTimeout(function () { openArch(h.slice(5)); }, 200); return; }
    if (h.indexOf('question:') === 0) { setTimeout(function () { openQuestionPanel(h.slice(9)); }, 200); return; }
  }

  /* ============================================
     INIT
     ============================================ */
  function init() {
    setStats();
    buildFeatured('#applied-featured-beginner', FEATURED_BEGINNER);
    buildFeatured('#applied-featured-builder', FEATURED_BUILDER);
    buildFeatured('#applied-featured-technical', FEATURED_TECHNICAL);
    buildDomainMap();
    buildExplorerControls();
    buildExplorer();
    buildArchitectures();
    buildWorkflows();
    buildPaperFilters();
    buildPapers();
    buildBottlenecks();
    buildHype();
    buildOpps();
    buildFrontier();
    buildQuestionFilters();
    buildQuestions();
    buildSources();
    bindClicks();
    bindFilters();
    handleHash();
    window.addEventListener('hashchange', handleHash);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
