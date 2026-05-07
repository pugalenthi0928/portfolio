(function () {
  'use strict';

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function escapeHtml(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]; }); }
  function confidenceClass(c) {
    if (!c) return 'mc-conf-context';
    if (c === 'sourced' || c === 'high') return 'mc-conf-sourced';
    if (c === 'inferred' || c === 'medium') return 'mc-conf-inferred';
    if (c === 'forwardLooking') return 'mc-conf-forward';
    if (c === 'needsVerification' || c === 'low') return 'mc-conf-needs';
    return 'mc-conf-context';
  }
  function confidenceLabel(c) {
    if (c === 'sourced' || c === 'high') return 'sourced';
    if (c === 'inferred' || c === 'medium') return 'inferred';
    if (c === 'forwardLooking') return 'forward-looking';
    if (c === 'needsVerification' || c === 'low') return 'needs verification';
    return 'market context';
  }

  /* ============================================
     STATS
     ============================================ */
  function setStats() {
    if (typeof CONSULTING_ATLAS_AUDIT === 'undefined') return;
    var a = CONSULTING_ATLAS_AUDIT;
    var totalSources = (a.sources || 0) + (a.australiaSources || 0);
    var map = {
      'mc-stat-services': a.services, 'mc-stat-buyers': a.buyerSegments,
      'mc-stat-workflows': a.workflowMaps, 'mc-stat-packages': a.pricingPackages,
      'mc-stat-tools': a.toolStacks, 'mc-stat-scripts': a.salesScripts,
      'mc-stat-retainers': a.retainerModels, 'mc-stat-risks': a.riskDossiers,
      'mc-stat-sources': totalSources, 'mc-stat-roi': a.roiTemplates,
      'mc-stat-bfo': a.bestFirstOffers, 'mc-stat-bsp': a.buyerSalesPlaybooks,
      'mc-stat-ladders': a.offerLadders, 'mc-stat-recipes': a.deliveryRecipes,
      'mc-stat-au': a.australiaGTM, 'mc-stat-demos': a.demos,
      'mc-stat-objections': a.objections, 'mc-stat-launch': a.launchPlanItems
    };
    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.textContent = map[id];
    });
  }

  /* ============================================
     PANEL
     ============================================ */
  var detailEl, overlayEl;
  function ensureDetail() {
    detailEl = document.getElementById('mc-detail');
    overlayEl = document.getElementById('mc-detail-overlay');
  }
  function openPanel(html) {
    ensureDetail();
    if (!detailEl) return;
    detailEl.innerHTML = html;
    detailEl.classList.add('open');
    if (overlayEl) overlayEl.classList.add('open');
    document.body.classList.add('mc-no-scroll');
  }
  function closePanel() {
    ensureDetail();
    if (detailEl) detailEl.classList.remove('open');
    if (overlayEl) overlayEl.classList.remove('open');
    document.body.classList.remove('mc-no-scroll');
  }

  function bulletList(label, items) {
    if (!items || !items.length) return '';
    return '<div class="mc-block"><div class="mc-block-h">' + escapeHtml(label) + '</div><ul class="mc-list">' +
      items.map(function (i) { return '<li>' + escapeHtml(i) + '</li>'; }).join('') + '</ul></div>';
  }
  function metaPair(label, val) {
    if (!val) return '';
    return '<div class="mc-block"><div class="mc-block-h">' + escapeHtml(label) + '</div><p class="mc-block-text">' + escapeHtml(val) + '</p></div>';
  }
  function srcChips(ids) {
    if (!ids || !ids.length) return '';
    var lib = {};
    if (typeof SOURCE_LIBRARY !== 'undefined') SOURCE_LIBRARY.forEach(function (s) { lib[s.id] = s; });
    if (typeof AUSTRALIA_SOURCE_LIBRARY !== 'undefined') AUSTRALIA_SOURCE_LIBRARY.forEach(function (s) { lib[s.id] = s; });
    var html = ids.map(function (id) {
      var s = lib[id];
      if (!s) return '<span class="mc-src-chip mc-src-chip--miss">' + escapeHtml(id) + '</span>';
      var auTag = (typeof AUSTRALIA_SOURCE_LIBRARY !== 'undefined' && AUSTRALIA_SOURCE_LIBRARY.some(function (x) { return x.id === id; })) ? ' mc-src-chip--au' : '';
      return '<a class="mc-src-chip' + auTag + '" href="' + escapeHtml(s.url) + '" target="_blank" rel="noopener">' + escapeHtml(s.title) + '</a>';
    }).join(' ');
    return '<div class="mc-block"><div class="mc-block-h">Sources</div><div class="mc-chip-row">' + html + '</div></div>';
  }

  /* ============================================
     SERVICES
     ============================================ */
  function buildServices() {
    var grid = document.getElementById('mc-svc-grid');
    if (!grid || typeof CONSULTING_SERVICES === 'undefined') return;
    var cat = document.getElementById('mc-svc-cat');
    var diff = document.getElementById('mc-svc-diff');
    var speed = document.getElementById('mc-svc-speed');
    var margin = document.getElementById('mc-svc-margin');
    var search = document.getElementById('mc-svc-search');

    /* unique categories */
    if (cat) {
      var seen = {};
      CONSULTING_SERVICES.forEach(function (s) { if (s.category && !seen[s.category]) { seen[s.category] = true; var o = document.createElement('option'); o.value = s.category; o.textContent = s.category; cat.appendChild(o); } });
    }

    var html = CONSULTING_SERVICES.map(function (s) {
      var search = ((s.name || '') + ' ' + (s.oneLineTakeaway || '') + ' ' + (s.category || '') + ' ' + (s.buyer || []).join(' ')).toLowerCase();
      return '<button class="mc-svc-card" data-svc-id="' + escapeHtml(s.id) + '" data-cat="' + escapeHtml(s.category || '') + '" data-diff="' + escapeHtml(s.difficulty || '') + '" data-speed="' + escapeHtml(s.speedToRevenue || '') + '" data-margin="' + escapeHtml(s.marginPotential || '') + '" data-search="' + escapeHtml(search) + '">' +
        '<div class="mc-card-meta">' +
          '<span class="mc-tag mc-tag-cat">' + escapeHtml(s.category || '') + '</span>' +
          '<span class="mc-tag">' + escapeHtml(s.difficulty || '') + '</span>' +
          '<span class="mc-tag">' + escapeHtml(s.speedToRevenue || '') + ' speed</span>' +
          '<span class="mc-tag">' + escapeHtml(s.marginPotential || '') + ' margin</span>' +
          '<span class="mc-conf ' + confidenceClass(s.confidence) + '">' + confidenceLabel(s.confidence) + '</span>' +
        '</div>' +
        '<div class="mc-card-title">' + escapeHtml(s.name || '') + '</div>' +
        '<div class="mc-card-take">' + escapeHtml(s.oneLineTakeaway || '') + '</div>' +
        '<div class="mc-card-foot">' + escapeHtml(s.priceRange || '') + ' &middot; ' + escapeHtml(s.timeline || '') + '</div>' +
      '</button>';
    }).join('');
    grid.innerHTML = html;

    function apply() {
      var s = (search && search.value || '').toLowerCase().trim();
      var c = cat && cat.value || '';
      var d = diff && diff.value || '';
      var sp = speed && speed.value || '';
      var mg = margin && margin.value || '';
      $$('.mc-svc-card', grid).forEach(function (card) {
        var pass = (!s || card.dataset.search.indexOf(s) !== -1) &&
                   (!c || card.dataset.cat === c) &&
                   (!d || card.dataset.diff === d) &&
                   (!sp || card.dataset.speed === sp) &&
                   (!mg || card.dataset.margin === mg);
        card.hidden = !pass;
      });
    }
    [search, cat, diff, speed, margin].forEach(function (el) { if (el) el.addEventListener('input', apply); });
  }

  function renderServiceProfile(s) {
    return '<button class="mc-detail-close" aria-label="Close">×</button>' +
      '<div class="mc-detail-meta">' +
        '<span class="mc-tag mc-tag-cat">' + escapeHtml(s.category || '') + '</span>' +
        '<span class="mc-conf ' + confidenceClass(s.confidence) + '">' + confidenceLabel(s.confidence) + '</span>' +
      '</div>' +
      '<h2 class="mc-detail-title">' + escapeHtml(s.name || '') + '</h2>' +
      '<p class="mc-detail-sub">' + escapeHtml(s.oneLineTakeaway || '') + '</p>' +
      metaPair('What you sell', s.whatYouSell) +
      bulletList('Buyer', s.buyer) +
      bulletList('User', s.user) +
      metaPair('Pain', s.pain) +
      metaPair('Outcome', s.outcome) +
      bulletList('Deliverables', s.deliverables) +
      bulletList('Implementation steps', s.implementationSteps) +
      bulletList('Tools used', s.toolsUsed) +
      metaPair('Price range', s.priceRange) +
      metaPair('Timeline', s.timeline) +
      metaPair('Retainer potential', s.retainerPotential) +
      bulletList('Proof of ROI', s.proofOfROI) +
      bulletList('Risks', s.risks) +
      metaPair('Sales angle', s.salesAngle) +
      srcChips(s.sourceIds);
  }

  /* ============================================
     BUYERS
     ============================================ */
  function buildBuyers() {
    var grid = document.getElementById('mc-buyer-grid');
    if (!grid || typeof BUYER_SEGMENTS === 'undefined') return;
    var html = BUYER_SEGMENTS.map(function (b) {
      var search = ((b.name || '') + ' ' + (b.bestHook || '') + ' ' + (b.pains || []).join(' ')).toLowerCase();
      return '<button class="mc-buyer-card" data-buyer-id="' + escapeHtml(b.id) + '" data-budget="' + escapeHtml(b.budgetLevel || '') + '" data-cycle="' + escapeHtml(b.salesCycle || '') + '" data-search="' + escapeHtml(search) + '">' +
        '<div class="mc-card-meta">' +
          '<span class="mc-tag">' + escapeHtml(b.budgetLevel || '') + ' budget</span>' +
          '<span class="mc-tag">' + escapeHtml(b.salesCycle || '') + ' cycle</span>' +
          '<span class="mc-conf ' + confidenceClass(b.confidence) + '">' + confidenceLabel(b.confidence) + '</span>' +
        '</div>' +
        '<div class="mc-card-title">' + escapeHtml(b.name || '') + '</div>' +
        '<div class="mc-card-take">' + escapeHtml(b.bestHook || '') + '</div>' +
        '<div class="mc-card-foot">First offer: ' + escapeHtml(b.easiestFirstOffer || '') + '</div>' +
      '</button>';
    }).join('');
    grid.innerHTML = html;

    var search = document.getElementById('mc-buyer-search');
    var budget = document.getElementById('mc-buyer-budget');
    var cycle = document.getElementById('mc-buyer-cycle');
    function apply() {
      var s = (search && search.value || '').toLowerCase().trim();
      var b = budget && budget.value || '';
      var c = cycle && cycle.value || '';
      $$('.mc-buyer-card', grid).forEach(function (card) {
        var pass = (!s || card.dataset.search.indexOf(s) !== -1) &&
                   (!b || card.dataset.budget === b) &&
                   (!c || card.dataset.cycle === c);
        card.hidden = !pass;
      });
    }
    [search, budget, cycle].forEach(function (el) { if (el) el.addEventListener('input', apply); });
  }

  function renderBuyerProfile(b) {
    return '<button class="mc-detail-close" aria-label="Close">×</button>' +
      '<div class="mc-detail-meta">' +
        '<span class="mc-tag">' + escapeHtml(b.budgetLevel || '') + ' budget</span>' +
        '<span class="mc-tag">' + escapeHtml(b.salesCycle || '') + ' cycle</span>' +
        '<span class="mc-conf ' + confidenceClass(b.confidence) + '">' + confidenceLabel(b.confidence) + '</span>' +
      '</div>' +
      '<h2 class="mc-detail-title">' + escapeHtml(b.name || '') + '</h2>' +
      '<p class="mc-detail-sub">' + escapeHtml(b.bestHook || '') + '</p>' +
      bulletList('What they care about', b.whatTheyCareAbout) +
      bulletList('Pains', b.pains) +
      bulletList('Services to sell', (b.servicesToSell || []).map(function (id) {
        if (typeof CONSULTING_SERVICES === 'undefined') return id;
        var s = CONSULTING_SERVICES.filter(function (x) { return x.id === id; })[0];
        return s ? s.name : id;
      })) +
      metaPair('Easiest first offer', b.easiestFirstOffer) +
      bulletList('Objections', b.objections) +
      bulletList('Proof needed', b.proofNeeded) +
      srcChips(b.sourceIds);
  }

  /* ============================================
     WORKFLOWS
     ============================================ */
  function buildWorkflows() {
    var grid = document.getElementById('mc-w2o-grid');
    if (!grid || typeof WORKFLOW_TO_OFFER_MAP === 'undefined') return;
    var indSel = document.getElementById('mc-w2o-industry');
    if (indSel) {
      var seen = {};
      WORKFLOW_TO_OFFER_MAP.forEach(function (w) { if (w.industry && !seen[w.industry]) { seen[w.industry] = true; var o = document.createElement('option'); o.value = w.industry; o.textContent = w.industry; indSel.appendChild(o); } });
    }
    var html = WORKFLOW_TO_OFFER_MAP.map(function (w) {
      var search = ((w.workflow || '') + ' ' + (w.industry || '') + ' ' + (w.salesHook || '') + ' ' + (w.bestServiceToSell || '')).toLowerCase();
      return '<button class="mc-w2o-card" data-w2o-id="' + escapeHtml(w.id) + '" data-industry="' + escapeHtml(w.industry || '') + '" data-search="' + escapeHtml(search) + '">' +
        '<div class="mc-card-meta">' +
          '<span class="mc-tag mc-tag-cat">' + escapeHtml(w.industry || '') + '</span>' +
          '<span class="mc-conf ' + confidenceClass(w.confidence) + '">' + confidenceLabel(w.confidence) + '</span>' +
        '</div>' +
        '<div class="mc-card-title">' + escapeHtml(w.workflow || '') + '</div>' +
        '<div class="mc-card-take">' + escapeHtml(w.salesHook || w.aiIntervention || '') + '</div>' +
        '<div class="mc-card-foot">' + escapeHtml(w.pricing || '') + ' &middot; ' + escapeHtml(w.roiMetric || '') + '</div>' +
      '</button>';
    }).join('');
    grid.innerHTML = html;
    var search = document.getElementById('mc-w2o-search');
    function apply() {
      var s = (search && search.value || '').toLowerCase().trim();
      var i = indSel && indSel.value || '';
      $$('.mc-w2o-card', grid).forEach(function (card) {
        var pass = (!s || card.dataset.search.indexOf(s) !== -1) && (!i || card.dataset.industry === i);
        card.hidden = !pass;
      });
    }
    [search, indSel].forEach(function (el) { if (el) el.addEventListener('input', apply); });
  }

  function renderWorkflowProfile(w) {
    var svc = '';
    if (w.bestServiceToSell && typeof CONSULTING_SERVICES !== 'undefined') {
      var s = CONSULTING_SERVICES.filter(function (x) { return x.id === w.bestServiceToSell; })[0];
      svc = s ? '<button class="mc-link-btn" data-svc-id="' + escapeHtml(s.id) + '">Open service: ' + escapeHtml(s.name) + ' →</button>' : '';
    }
    return '<button class="mc-detail-close" aria-label="Close">×</button>' +
      '<div class="mc-detail-meta">' +
        '<span class="mc-tag mc-tag-cat">' + escapeHtml(w.industry || '') + '</span>' +
        '<span class="mc-conf ' + confidenceClass(w.confidence) + '">' + confidenceLabel(w.confidence) + '</span>' +
      '</div>' +
      '<h2 class="mc-detail-title">' + escapeHtml(w.workflow || '') + '</h2>' +
      '<p class="mc-detail-sub">' + escapeHtml(w.salesHook || '') + '</p>' +
      svc +
      metaPair('Current pain', w.currentPain) +
      bulletList('Manual steps today', w.manualSteps) +
      metaPair('AI intervention', w.aiIntervention) +
      metaPair('Buyer', w.buyer) + metaPair('User', w.user) +
      bulletList('Tools used', w.toolsUsed) +
      bulletList('Delivery steps', w.deliverySteps) +
      metaPair('Pricing (indicative)', w.pricing) +
      metaPair('ROI metric', w.roiMetric) +
      metaPair('Retainer upsell', w.retainerUpsell) +
      metaPair('Risk', w.risk) +
      srcChips(w.sourceIds);
  }

  /* ============================================
     PRICING / PLAYBOOKS / TOOLS / SCRIPTS / ROI / RETAINERS / RISKS
     ============================================ */
  function buildPricing() {
    var grid = document.getElementById('mc-pkg-grid');
    if (!grid || typeof PRICING_PACKAGES === 'undefined') return;
    grid.innerHTML = PRICING_PACKAGES.map(function (p) {
      return '<button class="mc-pkg-card" data-pkg-id="' + escapeHtml(p.id) + '">' +
        '<div class="mc-card-meta"><span class="mc-tag">' + escapeHtml(p.priceRange || '') + '</span><span class="mc-tag">' + escapeHtml(p.duration || '') + '</span><span class="mc-conf ' + confidenceClass(p.confidence) + '">' + confidenceLabel(p.confidence) + '</span></div>' +
        '<div class="mc-card-title">' + escapeHtml(p.name) + '</div>' +
        '<div class="mc-card-take">' + escapeHtml(p.bestFor || '') + '</div>' +
      '</button>';
    }).join('');
  }
  function renderPricingProfile(p) {
    return '<button class="mc-detail-close" aria-label="Close">×</button>' +
      '<div class="mc-detail-meta"><span class="mc-tag">' + escapeHtml(p.priceRange) + '</span><span class="mc-tag">' + escapeHtml(p.duration) + '</span></div>' +
      '<h2 class="mc-detail-title">' + escapeHtml(p.name) + '</h2>' +
      '<p class="mc-detail-sub">' + escapeHtml(p.bestFor) + '</p>' +
      bulletList('Includes', p.includes) +
      bulletList('Excludes', p.excludes) +
      bulletList('Upsells', p.upsells) +
      metaPair('Margin notes', p.marginNotes) +
      metaPair('Risk notes', p.riskNotes) +
      metaPair('When to avoid', p.whenToAvoid);
  }

  function buildPlaybooks() {
    var grid = document.getElementById('mc-pb-grid');
    if (!grid || typeof DELIVERY_PLAYBOOKS === 'undefined') return;
    grid.innerHTML = DELIVERY_PLAYBOOKS.map(function (p) {
      return '<button class="mc-pkg-card" data-pb-id="' + escapeHtml(p.id) + '">' +
        '<div class="mc-card-meta"><span class="mc-tag">' + escapeHtml(p.duration || '') + '</span></div>' +
        '<div class="mc-card-title">' + escapeHtml(p.name) + '</div>' +
        '<div class="mc-card-take">Day-by-day playbook with deliverables, success metrics and risks.</div>' +
      '</button>';
    }).join('');
  }
  function renderPlaybookProfile(p) {
    return '<button class="mc-detail-close" aria-label="Close">×</button>' +
      '<div class="mc-detail-meta"><span class="mc-tag">' + escapeHtml(p.duration) + '</span></div>' +
      '<h2 class="mc-detail-title">' + escapeHtml(p.name) + '</h2>' +
      bulletList('Day by day', p.dayByDay) +
      bulletList('Deliverables', p.deliverables) +
      bulletList('Client inputs needed', p.clientInputsNeeded) +
      bulletList('Tools', p.tools) +
      bulletList('Success metrics', p.successMetrics) +
      bulletList('Risks', p.risks) +
      bulletList('Handover', p.handover) +
      metaPair('Retainer upsell', p.retainerUpsell);
  }

  function buildTools() {
    var grid = document.getElementById('mc-tool-grid');
    if (!grid || typeof TOOL_STACKS === 'undefined') return;
    grid.innerHTML = TOOL_STACKS.map(function (t, i) {
      return '<button class="mc-pkg-card" data-tool-i="' + i + '">' +
        '<div class="mc-card-meta"><span class="mc-tag mc-tag-cat">' + escapeHtml(t.category) + '</span></div>' +
        '<div class="mc-card-title">' + escapeHtml(t.category) + '</div>' +
        '<div class="mc-card-take">' + escapeHtml((t.tools || []).join(' &middot; ')) + '</div>' +
      '</button>';
    }).join('');
  }
  function renderToolProfile(t) {
    return '<button class="mc-detail-close" aria-label="Close">×</button>' +
      '<h2 class="mc-detail-title">' + escapeHtml(t.category) + '</h2>' +
      bulletList('Tools', t.tools) +
      metaPair('When to use', t.whenToUse) +
      metaPair('When NOT to use', t.whenNotToUse) +
      bulletList('Risks', t.risks) +
      metaPair('Client-friendly explanation', t.clientFriendlyExplanation);
  }

  function buildScripts() {
    var grid = document.getElementById('mc-script-grid');
    if (!grid || typeof SALES_SCRIPTS === 'undefined') return;
    grid.innerHTML = SALES_SCRIPTS.map(function (s) {
      return '<button class="mc-pkg-card" data-script-id="' + escapeHtml(s.id) + '">' +
        '<div class="mc-card-meta"><span class="mc-tag">' + escapeHtml(s.targetBuyer || '') + '</span></div>' +
        '<div class="mc-card-title">' + escapeHtml(s.useCase) + '</div>' +
        '<div class="mc-card-take">' + escapeHtml((s.message || '').slice(0, 150)) + '…</div>' +
      '</button>';
    }).join('');
  }
  function renderScriptProfile(s) {
    return '<button class="mc-detail-close" aria-label="Close">×</button>' +
      '<div class="mc-detail-meta"><span class="mc-tag">' + escapeHtml(s.targetBuyer || '') + '</span></div>' +
      '<h2 class="mc-detail-title">' + escapeHtml(s.useCase) + '</h2>' +
      '<div class="mc-block"><div class="mc-block-h">Message</div><pre class="mc-script-pre">' + escapeHtml(s.message) + '</pre></div>' +
      metaPair('Why it works', s.whyItWorks) +
      metaPair('Follow up', s.followUp) +
      bulletList('Objections handled', s.objectionsHandled);
  }

  function buildROI() {
    var grid = document.getElementById('mc-roi-grid');
    if (!grid || typeof CASE_STUDY_TEMPLATES === 'undefined') return;
    grid.innerHTML = CASE_STUDY_TEMPLATES.map(function (r) {
      return '<button class="mc-pkg-card" data-roi-id="' + escapeHtml(r.id) + '">' +
        '<div class="mc-card-title">' + escapeHtml(r.metric) + '</div>' +
        '<div class="mc-card-take">' + escapeHtml(r.exampleNarrative || '') + '</div>' +
      '</button>';
    }).join('');
  }
  function renderROIProfile(r) {
    return '<button class="mc-detail-close" aria-label="Close">×</button>' +
      '<h2 class="mc-detail-title">' + escapeHtml(r.metric) + '</h2>' +
      metaPair('How to measure before', r.howToMeasureBefore) +
      metaPair('How to measure after', r.howToMeasureAfter) +
      metaPair('Formula', r.formula) +
      metaPair('Example narrative', r.exampleNarrative) +
      metaPair('Risk of fake ROI', r.riskOfFakeROI);
  }

  function buildRetainers() {
    var grid = document.getElementById('mc-retainer-grid');
    if (!grid || typeof RETAINER_MODELS === 'undefined') return;
    grid.innerHTML = RETAINER_MODELS.map(function (r) {
      return '<button class="mc-pkg-card" data-rt-id="' + escapeHtml(r.id) + '">' +
        '<div class="mc-card-meta"><span class="mc-tag">' + escapeHtml(r.monthlyPriceRange || '') + '</span></div>' +
        '<div class="mc-card-title">' + escapeHtml(r.name) + '</div>' +
        '<div class="mc-card-take">' + escapeHtml(r.whyTheyKeepPaying || '') + '</div>' +
      '</button>';
    }).join('');
  }
  function renderRetainerProfile(r) {
    return '<button class="mc-detail-close" aria-label="Close">×</button>' +
      '<div class="mc-detail-meta"><span class="mc-tag">' + escapeHtml(r.monthlyPriceRange) + '</span></div>' +
      '<h2 class="mc-detail-title">' + escapeHtml(r.name) + '</h2>' +
      bulletList('Includes', r.includes) +
      metaPair('Client type', r.clientType) +
      metaPair('Why they keep paying', r.whyTheyKeepPaying) +
      bulletList('What to report monthly', r.whatToReportMonthly) +
      metaPair('Churn risk', r.churnRisk) +
      metaPair('Expansion path', r.expansionPath);
  }

  function buildRisks() {
    var grid = document.getElementById('mc-risk-grid');
    if (!grid || typeof RISK_DOSSIERS === 'undefined') return;
    grid.innerHTML = RISK_DOSSIERS.map(function (r) {
      return '<button class="mc-pkg-card" data-risk-id="' + escapeHtml(r.id) + '">' +
        '<div class="mc-card-title">' + escapeHtml(r.risk) + '</div>' +
        '<div class="mc-card-take">' + escapeHtml(r.howToExplainToClient || '') + '</div>' +
      '</button>';
    }).join('');
  }
  function renderRiskProfile(r) {
    return '<button class="mc-detail-close" aria-label="Close">×</button>' +
      '<h2 class="mc-detail-title">' + escapeHtml(r.risk) + '</h2>' +
      metaPair('Why it happens', r.whyItHappens) +
      bulletList('How to prevent', r.howToPrevent) +
      metaPair('How to explain to client', r.howToExplainToClient) +
      bulletList('Services where it matters', (r.serviceWhereItMatters || []).map(function (id) { var s = (typeof CONSULTING_SERVICES !== 'undefined') && CONSULTING_SERVICES.filter(function (x) { return x.id === id; })[0]; return s ? s.name : id; })) +
      srcChips(r.sourceIds);
  }

  /* ============================================
     RECOMMENDER
     ============================================ */
  /* ============================================
     BEST FIRST OFFERS LEADERBOARD
     ============================================ */
  function scoreSum(s) {
    if (!s) return 0;
    return (s.speedToClose || 0) + (s.easeOfDelivery || 0) + (s.margin || 0) + (s.retainerPotential || 0) + (s.risk || 0) + (s.proofNeeded || 0) + (s.smallTeamFeasibility || 0);
  }
  function buildBestFirstOffers() {
    var grid = document.getElementById('mc-bfo-grid');
    if (!grid || typeof BEST_FIRST_OFFERS === 'undefined') return;
    grid.innerHTML = BEST_FIRST_OFFERS.map(function (o) {
      var total = scoreSum(o.soloConsultantScore);
      return '<button class="mc-bfo-card" data-bfo-id="' + escapeHtml(o.serviceId) + '" data-rank="' + o.rank + '">' +
        '<div class="mc-bfo-rank">#' + o.rank + '</div>' +
        '<div class="mc-bfo-body">' +
          '<div class="mc-card-title">' + escapeHtml(o.title) + '</div>' +
          '<div class="mc-card-take">' + escapeHtml(o.whyItSells) + '</div>' +
          '<div class="mc-bfo-meta">' +
            '<span class="mc-tag">' + escapeHtml(o.priceRange) + '</span>' +
            '<span class="mc-tag">' + escapeHtml(o.deliveryTime) + '</span>' +
            '<span class="mc-tag mc-tag-cat">solo score ' + total + '/35</span>' +
          '</div>' +
          '<div class="mc-card-foot">Buyer: ' + escapeHtml(o.bestBuyer) + ' &middot; Retainer: ' + escapeHtml(o.retainerPath) + '</div>' +
        '</div>' +
      '</button>';
    }).join('');
  }
  function renderBestFirstOfferProfile(o) {
    var s = o.soloConsultantScore || {};
    function row(label, val) { return '<div class="mc-score-row"><span class="mc-score-label">' + escapeHtml(label) + '</span><span class="mc-score-bar"><span class="mc-score-fill" style="width:' + (val * 20) + '%"></span></span><span class="mc-score-val">' + val + '/5</span></div>'; }
    return '<button class="mc-detail-close" aria-label="Close">×</button>' +
      '<div class="mc-detail-meta"><span class="mc-tag mc-tag-cat">Best first offer #' + o.rank + '</span><span class="mc-tag">' + escapeHtml(o.priceRange) + '</span><span class="mc-tag">' + escapeHtml(o.deliveryTime) + '</span></div>' +
      '<h2 class="mc-detail-title">' + escapeHtml(o.title) + '</h2>' +
      '<p class="mc-detail-sub">' + escapeHtml(o.whyItSells) + '</p>' +
      '<button class="mc-link-btn" data-svc-id="' + escapeHtml(o.serviceId) + '">Open service profile →</button>' +
      metaPair('Best buyer', o.bestBuyer) +
      metaPair('Easiest niche', o.easiestNiche) +
      metaPair('First-customer strategy', o.firstCustomerStrategy) +
      metaPair('Proof needed', o.proofNeeded) +
      metaPair('Retainer path', o.retainerPath) +
      metaPair('Main risk', o.mainRisk) +
      metaPair('Avoid if', o.avoidIf) +
      '<div class="mc-block"><div class="mc-block-h">Solo consultant score</div>' +
        row('Speed to close', s.speedToClose) +
        row('Ease of delivery', s.easeOfDelivery) +
        row('Margin', s.margin) +
        row('Retainer potential', s.retainerPotential) +
        row('Low risk', s.risk) +
        row('Proof you have', s.proofNeeded) +
        row('Small-team feasibility', s.smallTeamFeasibility) +
      '</div>';
  }

  /* ============================================
     AVOID FIRST OFFERS
     ============================================ */
  function buildAvoidFirstOffers() {
    var grid = document.getElementById('mc-avoid-grid');
    if (!grid || typeof AVOID_FIRST_OFFERS === 'undefined') return;
    grid.innerHTML = AVOID_FIRST_OFFERS.map(function (o, i) {
      var risk = (o.riskLevel || '').toLowerCase();
      return '<button class="mc-avoid-card mc-avoid-' + risk + '" data-avoid-i="' + i + '">' +
        '<div class="mc-card-meta"><span class="mc-tag mc-tag-risk-' + risk + '">' + escapeHtml(o.riskLevel || '') + ' risk</span></div>' +
        '<div class="mc-card-title">' + escapeHtml(o.title) + '</div>' +
        '<div class="mc-card-take">' + escapeHtml(o.whyAvoidAtFirst) + '</div>' +
        '<div class="mc-card-foot">Better: ' + escapeHtml(o.betterAlternative) + '</div>' +
      '</button>';
    }).join('');
  }
  function renderAvoidProfile(o) {
    return '<button class="mc-detail-close" aria-label="Close">×</button>' +
      '<div class="mc-detail-meta"><span class="mc-tag mc-tag-risk-' + (o.riskLevel || '').toLowerCase() + '">' + escapeHtml(o.riskLevel || '') + ' risk</span></div>' +
      '<h2 class="mc-detail-title">Avoid first: ' + escapeHtml(o.title) + '</h2>' +
      '<p class="mc-detail-sub">' + escapeHtml(o.whyAvoidAtFirst) + '</p>' +
      bulletList('Hidden complexity', o.hiddenComplexity) +
      metaPair('Better alternative', o.betterAlternative) +
      metaPair('When it becomes a good offer', o.whenItBecomesGood);
  }

  /* ============================================
     BUYER SALES PLAYBOOKS
     ============================================ */
  function buildBuyerPlaybooks() {
    var grid = document.getElementById('mc-bsp-grid');
    if (!grid || typeof BUYER_SALES_PLAYBOOKS === 'undefined') return;
    grid.innerHTML = BUYER_SALES_PLAYBOOKS.map(function (b) {
      return '<button class="mc-pkg-card" data-bsp-id="' + escapeHtml(b.buyerId) + '">' +
        '<div class="mc-card-meta"><span class="mc-tag">' + escapeHtml(b.bestFirstOffer) + '</span></div>' +
        '<div class="mc-card-title">' + escapeHtml(b.buyerName) + '</div>' +
        '<div class="mc-card-take">' + escapeHtml(b.painHypothesis) + '</div>' +
      '</button>';
    }).join('');
  }
  function renderBuyerPlaybookProfile(b) {
    return '<button class="mc-detail-close" aria-label="Close">×</button>' +
      '<div class="mc-detail-meta"><span class="mc-tag">' + escapeHtml(b.bestFirstOffer) + '</span></div>' +
      '<h2 class="mc-detail-title">' + escapeHtml(b.buyerName) + '</h2>' +
      '<p class="mc-detail-sub">' + escapeHtml(b.painHypothesis) + '</p>' +
      '<div class="mc-block"><div class="mc-block-h">Cold email</div><pre class="mc-script-pre">' + escapeHtml(b.coldEmail) + '</pre></div>' +
      '<div class="mc-block"><div class="mc-block-h">LinkedIn DM</div><pre class="mc-script-pre">' + escapeHtml(b.linkedinDM) + '</pre></div>' +
      '<div class="mc-block"><div class="mc-block-h">Call opener</div><pre class="mc-script-pre">' + escapeHtml(b.callOpener) + '</pre></div>' +
      bulletList('Discovery questions', b.discoveryQuestions) +
      bulletList('Objection handling', b.objectionHandling) +
      metaPair('Follow-up', b.followUp) +
      metaPair('Close angle', b.closeAngle) +
      metaPair('Retainer upsell', b.retainerUpsell);
  }

  /* ============================================
     OFFER LADDERS
     ============================================ */
  function buildOfferLadders() {
    var grid = document.getElementById('mc-ladder-grid');
    if (!grid || typeof OFFER_LADDERS === 'undefined') return;
    grid.innerHTML = OFFER_LADDERS.map(function (l) {
      var steps = (l.steps || []).map(function (s) {
        return '<div class="mc-ladder-step">' +
          '<div class="mc-ladder-stage">' + escapeHtml(s.stage) + '</div>' +
          '<div class="mc-ladder-offer">' + escapeHtml(s.offer) + '</div>' +
          '<div class="mc-ladder-price">' + escapeHtml(s.price) + '</div>' +
          '<div class="mc-ladder-goal">' + escapeHtml(s.goal) + '</div>' +
        '</div>';
      }).join('<div class="mc-ladder-arrow">→</div>');
      return '<div class="mc-ladder-card">' +
        '<div class="mc-ladder-head">' +
          '<div class="mc-card-title">' + escapeHtml(l.name) + '</div>' +
          '<div class="mc-card-take">For: ' + escapeHtml(l.targetBuyer) + '</div>' +
        '</div>' +
        '<div class="mc-ladder-steps">' + steps + '</div>' +
        '<div class="mc-ladder-foot">' + escapeHtml(l.whyItWorks) + '</div>' +
      '</div>';
    }).join('');
  }

  /* ============================================
     DELIVERY RECIPES
     ============================================ */
  function buildDeliveryRecipes() {
    var grid = document.getElementById('mc-recipe-grid');
    if (!grid || typeof DELIVERY_RECIPES === 'undefined') return;
    grid.innerHTML = DELIVERY_RECIPES.map(function (r, i) {
      return '<button class="mc-pkg-card" data-recipe-i="' + i + '">' +
        '<div class="mc-card-title">' + escapeHtml(r.title) + '</div>' +
        '<div class="mc-card-take">' + escapeHtml(r.scopeBoundary) + '</div>' +
      '</button>';
    }).join('');
  }
  function renderRecipeProfile(r) {
    return '<button class="mc-detail-close" aria-label="Close">×</button>' +
      '<h2 class="mc-detail-title">' + escapeHtml(r.title) + '</h2>' +
      '<button class="mc-link-btn" data-svc-id="' + escapeHtml(r.serviceId) + '">Open service profile →</button>' +
      metaPair('Scope boundary', r.scopeBoundary) +
      bulletList('Client inputs needed', r.clientInputsNeeded) +
      bulletList('Tools needed', r.toolsNeeded) +
      bulletList('Day-by-day plan', r.dayByDayPlan) +
      bulletList('Deliverables', r.deliverables) +
      bulletList('Acceptance criteria', r.acceptanceCriteria) +
      bulletList('Handover checklist', r.handoverChecklist) +
      metaPair('Retainer upsell', r.retainerUpsell) +
      bulletList('What can go wrong', r.whatCanGoWrong) +
      bulletList('How to avoid scope creep', r.howToAvoidScopeCreep);
  }

  /* ============================================
     AUSTRALIA SMB GTM
     ============================================ */
  function buildAustraliaGTM() {
    var grid = document.getElementById('mc-au-grid');
    if (!grid || typeof AUSTRALIA_SMB_GTM === 'undefined') return;
    var search = document.getElementById('mc-au-search');
    var html = AUSTRALIA_SMB_GTM.map(function (b) {
      var s = ((b.buyer || '') + ' ' + (b.bestFirstOffer || '') + ' ' + (b.painfulWorkflows || []).join(' ')).toLowerCase();
      return '<button class="mc-au-card" data-au-id="' + escapeHtml(b.id) + '" data-search="' + escapeHtml(s) + '">' +
        '<div class="mc-card-meta"><span class="mc-tag mc-tag-au">AU</span><span class="mc-tag">' + escapeHtml(b.priceRange || '') + '</span></div>' +
        '<div class="mc-card-title">' + escapeHtml(b.buyer || '') + '</div>' +
        '<div class="mc-card-take">' + escapeHtml((b.painfulWorkflows || []).slice(0, 2).join(' &middot; ')) + '</div>' +
        '<div class="mc-card-foot">First offer: ' + escapeHtml(b.bestFirstOffer || '') + '</div>' +
      '</button>';
    }).join('');
    grid.innerHTML = html;
    function apply() {
      var s = (search && search.value || '').toLowerCase().trim();
      Array.prototype.forEach.call(grid.querySelectorAll('.mc-au-card'), function (card) {
        card.hidden = !(!s || card.dataset.search.indexOf(s) !== -1);
      });
    }
    if (search) search.addEventListener('input', apply);
  }
  function renderAUProfile(b) {
    return '<button class="mc-detail-close" aria-label="Close">×</button>' +
      '<div class="mc-detail-meta"><span class="mc-tag mc-tag-au">AU SMB</span><span class="mc-tag">' + escapeHtml(b.priceRange || '') + '</span></div>' +
      '<h2 class="mc-detail-title">' + escapeHtml(b.buyer || '') + '</h2>' +
      '<p class="mc-detail-sub">' + escapeHtml(b.whyTheyBuy || '') + '</p>' +
      bulletList('Painful workflows', b.painfulWorkflows) +
      metaPair('Best first offer', b.bestFirstOffer) +
      metaPair('Demo to show', b.demoToShow) +
      '<div class="mc-block"><div class="mc-block-h">First message</div><pre class="mc-script-pre">' + escapeHtml(b.firstMessage || '') + '</pre></div>' +
      bulletList('Discovery questions', b.discoveryQuestions) +
      bulletList('Objection handling', b.objectionHandling) +
      bulletList('5-day delivery plan', b.fiveDayDeliveryPlan) +
      metaPair('Retainer path', b.retainerPath) +
      (b.avoidSellingThisFirst ? '<div class="mc-block"><div class="mc-block-h mc-launch-h--warn">Avoid selling this first</div><div class="mc-block-text">' + escapeHtml(b.avoidSellingThisFirst) + '</div></div>' : '') +
      (b.fastestProofOfROI ? '<div class="mc-block"><div class="mc-block-h">Fastest proof of ROI</div><div class="mc-block-text">' + escapeHtml(b.fastestProofOfROI) + '</div></div>' : '') +
      bulletList('Risks', b.risks) +
      srcChips(b.sourceIds);
  }

  /* ============================================
     DEMO LIBRARY
     ============================================ */
  function buildDemoLibrary() {
    var grid = document.getElementById('mc-demo-grid');
    if (!grid || typeof DEMO_LIBRARY === 'undefined') return;
    grid.innerHTML = DEMO_LIBRARY.map(function (d) {
      return '<button class="mc-pkg-card" data-demo-id="' + escapeHtml(d.id) + '">' +
        '<div class="mc-card-meta"><span class="mc-tag">' + escapeHtml(d.timeToBuild || '') + '</span></div>' +
        '<div class="mc-card-title">' + escapeHtml(d.title) + '</div>' +
        '<div class="mc-card-take">' + escapeHtml(d.whatItShows || '') + '</div>' +
        '<div class="mc-card-foot">Buyer: ' + escapeHtml(d.targetBuyer || '') + '</div>' +
      '</button>';
    }).join('');
  }
  function renderDemoProfile(d) {
    return '<button class="mc-detail-close" aria-label="Close">×</button>' +
      '<div class="mc-detail-meta"><span class="mc-tag">' + escapeHtml(d.timeToBuild || '') + '</span></div>' +
      '<h2 class="mc-detail-title">' + escapeHtml(d.title || '') + '</h2>' +
      '<p class="mc-detail-sub">' + escapeHtml(d.whatItShows || '') + '</p>' +
      (d.serviceId ? '<button class="mc-link-btn" data-svc-id="' + escapeHtml(d.serviceId) + '">Open service profile →</button>' : '') +
      metaPair('Target buyer', d.targetBuyer) +
      bulletList('Demo inputs', d.demoInputs) +
      bulletList('Demo flow', d.demoFlow) +
      bulletList('Tools needed', d.toolsNeeded) +
      metaPair('Why it sells', d.whyItSells) +
      bulletList('Risks', d.risks);
  }

  /* ============================================
     OBJECTION LIBRARY
     ============================================ */
  function buildObjectionLibrary() {
    var grid = document.getElementById('mc-obj-grid');
    if (!grid || typeof OBJECTION_LIBRARY === 'undefined') return;
    grid.innerHTML = OBJECTION_LIBRARY.map(function (o) {
      return '<button class="mc-pkg-card" data-obj-id="' + escapeHtml(o.id) + '">' +
        '<div class="mc-card-title">&ldquo;' + escapeHtml(o.objection || '') + '&rdquo;</div>' +
        '<div class="mc-card-take"><strong>Better:</strong> ' + escapeHtml((o.betterResponse || '').slice(0, 140)) + '…</div>' +
      '</button>';
    }).join('');
  }
  function renderObjectionProfile(o) {
    return '<button class="mc-detail-close" aria-label="Close">×</button>' +
      '<h2 class="mc-detail-title">&ldquo;' + escapeHtml(o.objection || '') + '&rdquo;</h2>' +
      '<div class="mc-block"><div class="mc-block-h">Bad response</div><div class="mc-block-text mc-block-bad">' + escapeHtml(o.badResponse || '') + '</div></div>' +
      '<div class="mc-block"><div class="mc-block-h">Better response</div><div class="mc-block-text">' + escapeHtml(o.betterResponse || '') + '</div></div>' +
      '<div class="mc-block"><div class="mc-block-h">Close question</div><div class="mc-block-text mc-block-close">' + escapeHtml(o.closeQuestion || '') + '</div></div>';
  }

  /* ============================================
     30-DAY LAUNCH PLAN
     ============================================ */
  function buildLaunchPlan() {
    var grid = document.getElementById('mc-launch-grid');
    if (!grid || typeof FIRST_30_DAYS_PLAN === 'undefined') return;
    grid.innerHTML = FIRST_30_DAYS_PLAN.map(function (w, i) {
      var daysHtml = '';
      if (w.days && w.days.length) {
        daysHtml = '<div class="mc-launch-section"><div class="mc-launch-h">Day-by-day</div>' +
          w.days.map(function (d) {
            return '<div class="mc-launch-day"><strong>' + escapeHtml(d.day) + '</strong><ul class="mc-list">' + (d.actions || []).map(function (a) { return '<li>' + escapeHtml(a) + '</li>'; }).join('') + '</ul></div>';
          }).join('') +
        '</div>';
      }
      var minimumsHtml = w.minimums ? '<div class="mc-launch-section"><div class="mc-launch-h">Minimums</div><ul class="mc-list">' + w.minimums.map(function (m) { return '<li>' + escapeHtml(m) + '</li>'; }).join('') + '</ul></div>' : '';
      var nicheTBHtml = w.niche_tie_breakers ? '<div class="mc-launch-section"><div class="mc-launch-h">Niche tie-breakers</div><ul class="mc-list">' + w.niche_tie_breakers.map(function (m) { return '<li>' + escapeHtml(m) + '</li>'; }).join('') + '</ul></div>' : '';
      var ifNoRepliesHtml = w.if_no_replies ? '<div class="mc-launch-section"><div class="mc-launch-h mc-launch-h--warn">If no replies</div><ul class="mc-list">' + w.if_no_replies.map(function (m) { return '<li>' + escapeHtml(m) + '</li>'; }).join('') + '</ul></div>' : '';
      var nicheChoiceHtml = w.niche_choice_after_week_1 ? '<div class="mc-launch-section"><div class="mc-launch-h">Niche choice after week 1</div><div class="mc-block-text">' + escapeHtml(w.niche_choice_after_week_1) + '</div></div>' : '';
      return '<div class="mc-launch-card">' +
        '<div class="mc-launch-num">' + (i + 1) + '</div>' +
        '<div class="mc-launch-body">' +
          '<div class="mc-card-title">' + escapeHtml(w.week || '') + '</div>' +
          '<div class="mc-card-take">' + escapeHtml(w.goal || '') + '</div>' +
          daysHtml +
          (w.tasks ? '<div class="mc-launch-section"><div class="mc-launch-h">Tasks</div><ul class="mc-list">' + w.tasks.map(function (t) { return '<li>' + escapeHtml(t) + '</li>'; }).join('') + '</ul></div>' : '') +
          minimumsHtml +
          nicheTBHtml +
          ifNoRepliesHtml +
          nicheChoiceHtml +
          (w.outcomes ? '<div class="mc-launch-section"><div class="mc-launch-h">Outcomes</div><ul class="mc-list">' + w.outcomes.map(function (t) { return '<li>' + escapeHtml(t) + '</li>'; }).join('') + '</ul></div>' : '') +
          (w.commonFailures ? '<div class="mc-launch-section"><div class="mc-launch-h mc-launch-h--warn">Common failures</div><ul class="mc-list">' + w.commonFailures.map(function (t) { return '<li>' + escapeHtml(t) + '</li>'; }).join('') + '</ul></div>' : '') +
        '</div>' +
      '</div>';
    }).join('');
  }

  /* ============================================
     PERSONAL FIRST MOVE
     ============================================ */
  function buildPersonalFirstMove() {
    var c = document.getElementById('mc-pfm-card');
    if (!c || typeof PERSONAL_FIRST_MOVE === 'undefined') return;
    var p = PERSONAL_FIRST_MOVE;
    c.innerHTML = '<div class="mc-pfm-head">' +
        '<div class="mc-pfm-tag">Operator pick</div>' +
        '<div class="mc-pfm-title">' + escapeHtml(p.title || '') + '</div>' +
      '</div>' +
      '<p class="mc-pfm-rec">' + escapeHtml(p.recommendation || '') + '</p>' +
      '<div class="mc-pfm-grid">' +
        '<div class="mc-pfm-cell"><div class="mc-pfm-label">Niche 1</div><div class="mc-pfm-val">' + escapeHtml(p.niche1) + '</div></div>' +
        '<div class="mc-pfm-cell"><div class="mc-pfm-label">Niche 2</div><div class="mc-pfm-val">' + escapeHtml(p.niche2) + '</div></div>' +
        '<div class="mc-pfm-cell"><div class="mc-pfm-label">Offer</div><div class="mc-pfm-val">' + escapeHtml(p.offer) + '</div></div>' +
        '<div class="mc-pfm-cell"><div class="mc-pfm-label">Price</div><div class="mc-pfm-val">' + escapeHtml(p.price) + '</div></div>' +
        '<div class="mc-pfm-cell"><div class="mc-pfm-label">Demo</div><div class="mc-pfm-val">' + escapeHtml(p.demo) + '</div></div>' +
        '<div class="mc-pfm-cell"><div class="mc-pfm-label">Delivery plan</div><div class="mc-pfm-val">' + escapeHtml(p.deliveryPlan) + '</div></div>' +
        '<div class="mc-pfm-cell"><div class="mc-pfm-label">Retainer path</div><div class="mc-pfm-val">' + escapeHtml(p.retainerPath) + '</div></div>' +
        '<div class="mc-pfm-cell"><div class="mc-pfm-label">Fastest proof of ROI</div><div class="mc-pfm-val">' + escapeHtml(p.fastestProofOfROI) + '</div></div>' +
      '</div>' +
      '<div class="mc-block"><div class="mc-block-h">First message template</div><pre class="mc-script-pre">' + escapeHtml(p.firstMessage) + '</pre></div>' +
      bulletList('Why this, not other offers', p.whyThisNotOtherOffers) +
      '<div class="mc-block"><div class="mc-block-h mc-launch-h--warn">Avoid for now</div><ul class="mc-list">' + (p.avoidForNow || []).map(function (a) { return '<li>' + escapeHtml(a) + '</li>'; }).join('') + '</ul></div>' +
      bulletList('Alternate niches if niche 1 + 2 do not click', p.alternateNiches);
  }

  function buildRecommender() {
    var grid = document.getElementById('mc-rec-grid');
    if (!grid || typeof FIRST_OFFER_RECOMMENDER === 'undefined') return;
    grid.innerHTML = FIRST_OFFER_RECOMMENDER.paths.map(function (p) {
      return '<div class="mc-pkg-card mc-pkg-card--static">' +
        '<div class="mc-card-meta"><span class="mc-tag">' + escapeHtml(p.id) + '</span></div>' +
        '<div class="mc-card-title">' + escapeHtml(p.profile) + '</div>' +
        '<div class="mc-rec-row"><strong>Easiest first offer:</strong> ' + escapeHtml(p.easiestFirstOffer) + '</div>' +
        '<div class="mc-rec-row"><strong>Best upsell:</strong> ' + escapeHtml(p.bestUpsell) + '</div>' +
        '<div class="mc-rec-row"><strong>Retainer path:</strong> ' + escapeHtml(p.retainerPath) + '</div>' +
        '<div class="mc-rec-row mc-rec-warn"><strong>Avoid:</strong> ' + escapeHtml(p.whatToAvoid) + '</div>' +
      '</div>';
    }).join('');
  }

  /* ============================================
     SOURCES + AUDIT
     ============================================ */
  function buildSources() {
    var grid = document.getElementById('mc-src-grid');
    if (!grid || typeof SOURCE_LIBRARY === 'undefined') return;
    grid.innerHTML = SOURCE_LIBRARY.map(function (s) {
      return '<a class="mc-src-card" href="' + escapeHtml(s.url) + '" target="_blank" rel="noopener">' +
        '<div class="mc-card-meta"><span class="mc-tag mc-tag-cat">' + escapeHtml(s.type || '') + '</span><span class="mc-conf ' + confidenceClass(s.confidence) + '">' + confidenceLabel(s.confidence) + '</span></div>' +
        '<div class="mc-card-title">' + escapeHtml(s.title) + '</div>' +
        '<div class="mc-card-foot">' + escapeHtml(s.publisher) + ' &middot; ' + escapeHtml(s.year) + '</div>' +
      '</a>';
    }).join('');
  }

  /* ============================================
     EVENTS
     ============================================ */
  function bindClicks() {
    document.addEventListener('click', function (e) {
      var t = e.target;
      var close = t.closest('.mc-detail-close');
      var overlay = t.closest('#mc-detail-overlay');
      if (close || overlay) { closePanel(); return; }
      var svcBtn = t.closest('[data-svc-id]');
      if (svcBtn) {
        var svc = CONSULTING_SERVICES.filter(function (x) { return x.id === svcBtn.dataset.svcId; })[0];
        if (svc) { e.preventDefault(); openPanel(renderServiceProfile(svc)); return; }
      }
      var bBtn = t.closest('[data-buyer-id]');
      if (bBtn) {
        var b = BUYER_SEGMENTS.filter(function (x) { return x.id === bBtn.dataset.buyerId; })[0];
        if (b) { e.preventDefault(); openPanel(renderBuyerProfile(b)); return; }
      }
      var wBtn = t.closest('[data-w2o-id]');
      if (wBtn) {
        var w = WORKFLOW_TO_OFFER_MAP.filter(function (x) { return x.id === wBtn.dataset.w2oId; })[0];
        if (w) { e.preventDefault(); openPanel(renderWorkflowProfile(w)); return; }
      }
      var pkgBtn = t.closest('[data-pkg-id]');
      if (pkgBtn) { var p = PRICING_PACKAGES.filter(function (x) { return x.id === pkgBtn.dataset.pkgId; })[0]; if (p) { e.preventDefault(); openPanel(renderPricingProfile(p)); return; } }
      var pbBtn = t.closest('[data-pb-id]');
      if (pbBtn) { var pb = DELIVERY_PLAYBOOKS.filter(function (x) { return x.id === pbBtn.dataset.pbId; })[0]; if (pb) { e.preventDefault(); openPanel(renderPlaybookProfile(pb)); return; } }
      var toolBtn = t.closest('[data-tool-i]');
      if (toolBtn) { var ti = parseInt(toolBtn.dataset.toolI, 10); var tool = TOOL_STACKS[ti]; if (tool) { e.preventDefault(); openPanel(renderToolProfile(tool)); return; } }
      var scriptBtn = t.closest('[data-script-id]');
      if (scriptBtn) { var sc = SALES_SCRIPTS.filter(function (x) { return x.id === scriptBtn.dataset.scriptId; })[0]; if (sc) { e.preventDefault(); openPanel(renderScriptProfile(sc)); return; } }
      var roiBtn = t.closest('[data-roi-id]');
      if (roiBtn) { var r2 = CASE_STUDY_TEMPLATES.filter(function (x) { return x.id === roiBtn.dataset.roiId; })[0]; if (r2) { e.preventDefault(); openPanel(renderROIProfile(r2)); return; } }
      var rtBtn = t.closest('[data-rt-id]');
      if (rtBtn) { var rt = RETAINER_MODELS.filter(function (x) { return x.id === rtBtn.dataset.rtId; })[0]; if (rt) { e.preventDefault(); openPanel(renderRetainerProfile(rt)); return; } }
      var riskBtn = t.closest('[data-risk-id]');
      if (riskBtn) { var rk = RISK_DOSSIERS.filter(function (x) { return x.id === riskBtn.dataset.riskId; })[0]; if (rk) { e.preventDefault(); openPanel(renderRiskProfile(rk)); return; } }
      var bfoBtn = t.closest('[data-bfo-id]');
      if (bfoBtn) { var bfo = BEST_FIRST_OFFERS.filter(function (x) { return x.serviceId === bfoBtn.dataset.bfoId; })[0]; if (bfo) { e.preventDefault(); openPanel(renderBestFirstOfferProfile(bfo)); return; } }
      var avoidBtn = t.closest('[data-avoid-i]');
      if (avoidBtn) { var ai = parseInt(avoidBtn.dataset.avoidI, 10); var av = AVOID_FIRST_OFFERS[ai]; if (av) { e.preventDefault(); openPanel(renderAvoidProfile(av)); return; } }
      var bspBtn = t.closest('[data-bsp-id]');
      if (bspBtn) { var bsp = BUYER_SALES_PLAYBOOKS.filter(function (x) { return x.buyerId === bspBtn.dataset.bspId; })[0]; if (bsp) { e.preventDefault(); openPanel(renderBuyerPlaybookProfile(bsp)); return; } }
      var rcpBtn = t.closest('[data-recipe-i]');
      if (rcpBtn) { var ri = parseInt(rcpBtn.dataset.recipeI, 10); var rcp = DELIVERY_RECIPES[ri]; if (rcp) { e.preventDefault(); openPanel(renderRecipeProfile(rcp)); return; } }
      var auBtn = t.closest('[data-au-id]');
      if (auBtn) { var au = AUSTRALIA_SMB_GTM.filter(function (x) { return x.id === auBtn.dataset.auId; })[0]; if (au) { e.preventDefault(); openPanel(renderAUProfile(au)); return; } }
      var demoBtn = t.closest('[data-demo-id]');
      if (demoBtn) { var dm = DEMO_LIBRARY.filter(function (x) { return x.id === demoBtn.dataset.demoId; })[0]; if (dm) { e.preventDefault(); openPanel(renderDemoProfile(dm)); return; } }
      var objBtn = t.closest('[data-obj-id]');
      if (objBtn) { var ob = OBJECTION_LIBRARY.filter(function (x) { return x.id === objBtn.dataset.objId; })[0]; if (ob) { e.preventDefault(); openPanel(renderObjectionProfile(ob)); return; } }
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closePanel(); });
  }

  /* ============================================
     DEV INTEGRITY CHECK
     ============================================ */
  function devCheck() {
    if (!console || !console.warn) return;
    var warnings = 0;
    function warn(m) { console.warn('[ai-consulting] ' + m); warnings++; }
    var srcIds = new Set();
    if (typeof SOURCE_LIBRARY !== 'undefined') SOURCE_LIBRARY.forEach(function (s) { srcIds.add(s.id); });
    if (typeof AUSTRALIA_SOURCE_LIBRARY !== 'undefined') AUSTRALIA_SOURCE_LIBRARY.forEach(function (s) { srcIds.add(s.id); });
    var serviceIds = new Set(CONSULTING_SERVICES.map(function (s) { return s.id; }));
    var buyerIds = new Set(BUYER_SEGMENTS.map(function (b) { return b.id; }));
    function checkSrc(label, e, key) {
      var ids = e[key] || [];
      ids.forEach(function (id) { if (id !== 'needs-verification' && !srcIds.has(id)) warn(label + ' "' + e.id + '" references missing source "' + id + '".'); });
    }
    CONSULTING_SERVICES.forEach(function (s) { checkSrc('service', s, 'sourceIds'); });
    WORKFLOW_TO_OFFER_MAP.forEach(function (w) {
      checkSrc('workflow', w, 'sourceIds');
      if (w.bestServiceToSell && !serviceIds.has(w.bestServiceToSell)) warn('workflow "' + w.id + '" references missing service "' + w.bestServiceToSell + '".');
    });
    BUYER_SEGMENTS.forEach(function (b) {
      checkSrc('buyer', b, 'sourceIds');
      (b.servicesToSell || []).forEach(function (id) { if (!serviceIds.has(id)) warn('buyer "' + b.id + '" references missing service "' + id + '".'); });
    });
    RISK_DOSSIERS.forEach(function (r) { checkSrc('risk', r, 'sourceIds'); (r.serviceWhereItMatters || []).forEach(function (id) { if (!serviceIds.has(id)) warn('risk "' + r.id + '" references missing service "' + id + '".'); }); });

    /* Best-first / avoid / ladders / recipes referential checks */
    if (typeof BEST_FIRST_OFFERS !== 'undefined') BEST_FIRST_OFFERS.forEach(function (o) {
      if (o.serviceId && !serviceIds.has(o.serviceId) && !(typeof PRICING_PACKAGES !== 'undefined' && PRICING_PACKAGES.some(function (p) { return p.id === o.serviceId; }))) {
        warn('best-first "' + (o.title || '?') + '" references missing service "' + o.serviceId + '".');
      }
    });
    if (typeof AVOID_FIRST_OFFERS !== 'undefined') AVOID_FIRST_OFFERS.forEach(function (o) {
      if (o.serviceId && !serviceIds.has(o.serviceId) && !(typeof PRICING_PACKAGES !== 'undefined' && PRICING_PACKAGES.some(function (p) { return p.id === o.serviceId; }))) {
        warn('avoid-first "' + (o.title || '?') + '" references missing service "' + o.serviceId + '".');
      }
    });
    if (typeof BUYER_SALES_PLAYBOOKS !== 'undefined') BUYER_SALES_PLAYBOOKS.forEach(function (b) {
      if (b.buyerId && !buyerIds.has(b.buyerId)) warn('buyer-playbook "' + b.buyerId + '" references missing buyer segment.');
    });
    if (typeof DELIVERY_RECIPES !== 'undefined') DELIVERY_RECIPES.forEach(function (r) {
      if (r.serviceId && !serviceIds.has(r.serviceId)) warn('delivery-recipe "' + r.title + '" references missing service "' + r.serviceId + '".');
    });
    if (typeof DEMO_LIBRARY !== 'undefined') DEMO_LIBRARY.forEach(function (d) {
      if (d.serviceId && !serviceIds.has(d.serviceId)) warn('demo "' + d.id + '" references missing service "' + d.serviceId + '".');
    });

    /* AU GTM hard-required fields */
    if (typeof AUSTRALIA_SMB_GTM !== 'undefined') AUSTRALIA_SMB_GTM.forEach(function (b) {
      if (!b.bestFirstOffer) warn('au-gtm "' + b.id + '" missing bestFirstOffer.');
      if (!b.demoToShow) warn('au-gtm "' + b.id + '" missing demoToShow.');
      if (!b.priceRange) warn('au-gtm "' + b.id + '" missing priceRange.');
      if (!b.avoidSellingThisFirst) warn('au-gtm "' + b.id + '" missing avoidSellingThisFirst.');
      if (!b.fastestProofOfROI) warn('au-gtm "' + b.id + '" missing fastestProofOfROI.');
      checkSrc('au-gtm', b, 'sourceIds');
    });

    /* Audit count consistency */
    if (typeof CONSULTING_ATLAS_AUDIT !== 'undefined' && typeof SOURCE_LIBRARY !== 'undefined') {
      if (CONSULTING_ATLAS_AUDIT.sources !== SOURCE_LIBRARY.length) warn('audit.sources (' + CONSULTING_ATLAS_AUDIT.sources + ') does not match SOURCE_LIBRARY.length (' + SOURCE_LIBRARY.length + ').');
      if (typeof AUSTRALIA_SOURCE_LIBRARY !== 'undefined' && CONSULTING_ATLAS_AUDIT.australiaSources !== AUSTRALIA_SOURCE_LIBRARY.length) warn('audit.australiaSources (' + CONSULTING_ATLAS_AUDIT.australiaSources + ') does not match AUSTRALIA_SOURCE_LIBRARY.length (' + AUSTRALIA_SOURCE_LIBRARY.length + ').');
    }

    /* duplicate-id detection */
    [['CONSULTING_SERVICES', CONSULTING_SERVICES], ['BUYER_SEGMENTS', BUYER_SEGMENTS], ['WORKFLOW_TO_OFFER_MAP', WORKFLOW_TO_OFFER_MAP], ['PRICING_PACKAGES', PRICING_PACKAGES], ['DELIVERY_PLAYBOOKS', DELIVERY_PLAYBOOKS], ['SALES_SCRIPTS', SALES_SCRIPTS], ['CASE_STUDY_TEMPLATES', CASE_STUDY_TEMPLATES], ['RETAINER_MODELS', RETAINER_MODELS], ['RISK_DOSSIERS', RISK_DOSSIERS], ['SOURCE_LIBRARY', SOURCE_LIBRARY], ['NEEDS_VERIFICATION_QUEUE', NEEDS_VERIFICATION_QUEUE], ['AUSTRALIA_SMB_GTM', typeof AUSTRALIA_SMB_GTM !== 'undefined' ? AUSTRALIA_SMB_GTM : []], ['AUSTRALIA_SOURCE_LIBRARY', typeof AUSTRALIA_SOURCE_LIBRARY !== 'undefined' ? AUSTRALIA_SOURCE_LIBRARY : []], ['BEST_FIRST_OFFERS', typeof BEST_FIRST_OFFERS !== 'undefined' ? BEST_FIRST_OFFERS : []], ['DEMO_LIBRARY', typeof DEMO_LIBRARY !== 'undefined' ? DEMO_LIBRARY : []], ['OBJECTION_LIBRARY', typeof OBJECTION_LIBRARY !== 'undefined' ? OBJECTION_LIBRARY : []]].forEach(function (pair) {
      var seen = {};
      (pair[1] || []).forEach(function (e) { if (e && e.id && seen[e.id]) warn('duplicate id in ' + pair[0] + ': "' + e.id + '"'); seen[e.id] = true; });
    });
    if (warnings === 0) console.info('[ai-consulting] devCheck: no issues found.');
    else console.info('[ai-consulting] devCheck: ' + warnings + ' warning(s).');
  }

  /* ============================================
     INIT
     ============================================ */
  function init() {
    setStats();
    buildServices();
    buildBuyers();
    buildWorkflows();
    buildPricing();
    buildPlaybooks();
    buildTools();
    buildScripts();
    buildROI();
    buildRetainers();
    buildRisks();
    buildBestFirstOffers();
    buildAvoidFirstOffers();
    buildBuyerPlaybooks();
    buildOfferLadders();
    buildDeliveryRecipes();
    buildAustraliaGTM();
    buildPersonalFirstMove();
    buildDemoLibrary();
    buildObjectionLibrary();
    buildLaunchPlan();
    buildRecommender();
    buildSources();
    bindClicks();
    if (window.location.search.indexOf('devcheck=1') !== -1 || window.MC_DEV_CHECK) {
      try { devCheck(); } catch (e) { console.warn('[ai-consulting] devCheck failed:', e); }
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
