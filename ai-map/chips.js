/* ============================================
   CHIPS DEEP DIVE — Render + Interaction
   ============================================ */

(function () {
  'use strict';

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
    });
  }
  function money(n) {
    if (n == null || isNaN(n)) return '—';
    if (n >= 1e9)  return '$' + (Math.round(n / 1e8) / 10) + 'B';
    if (n >= 1e6)  return '$' + (Math.round(n / 1e5) / 10) + 'M';
    if (n >= 1e3)  return '$' + Math.round(n).toLocaleString();
    return '$' + Math.round(n);
  }

  /* ============================================
     INTEL SUMMARY
     ============================================ */
  function renderIntel() {
    var el = $('#map-chips-intel');
    if (!el || typeof CHIPS_INTEL_SUMMARY === 'undefined') return;
    el.innerHTML = CHIPS_INTEL_SUMMARY.map(function (item, i) {
      var n = (i + 1).toString().padStart(2, '0');
      return '<article class="map-chips-intel-card">' +
        '<span class="map-chips-intel-num">' + n + '</span>' +
        '<h3 class="map-chips-intel-h">' + esc(item.h) + '</h3>' +
        '<p class="map-chips-intel-d">' + esc(item.d) + '</p>' +
      '</article>';
    }).join('');
  }

  /* ============================================
     FLOW CHAIN — electricity to tokens
     ============================================ */
  function renderFlow() {
    var el = $('#map-chips-flow');
    if (!el || typeof CHIPS_FLOW === 'undefined') return;
    el.innerHTML = CHIPS_FLOW.map(function (s) {
      return '<div class="map-chips-flow-step">' +
        '<div class="map-chips-flow-dot"></div>' +
        '<h4 class="map-chips-flow-h">' + esc(s.h) + '</h4>' +
        '<p class="map-chips-flow-d">' + esc(s.d) + '</p>' +
      '</div>';
    }).join('');
  }

  /* ============================================
     OVERVIEW PILLS
     ============================================ */
  function renderPills() {
    var el = $('#map-chips-pills');
    if (!el || typeof CHIPS_TOPICS === 'undefined') return;
    el.innerHTML = CHIPS_TOPICS.map(function (t) {
      return '<button class="map-chips-pill" type="button" data-topic="' + esc(t.id) + '" data-tab="' + esc(t.tab) + '" aria-label="' + esc(t.label) + '">' +
        '<div class="map-chips-pill-label">' + esc(t.id.replace(/-/g, ' ')) + '</div>' +
        '<h3 class="map-chips-pill-title">' + esc(t.label) + '</h3>' +
        '<p class="map-chips-pill-text">' + esc(t.short) + '</p>' +
      '</button>';
    }).join('');

    el.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('.map-chips-pill');
      if (!btn) return;
      if (btn.dataset.tab) selectTab(btn.dataset.tab, true);
    });
  }

  /* ============================================
     TABS
     ============================================ */
  function selectTab(id, scroll) {
    $$('.map-chips-tab').forEach(function (b) {
      var on = b.dataset.tab === id;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      b.setAttribute('tabindex', on ? '0' : '-1');
    });
    $$('.map-chips-pane').forEach(function (p) {
      p.classList.toggle('is-active', p.dataset.tab === id);
    });
    if (scroll) {
      var section = $('#chips-deep-dive');
      if (section) {
        var top = section.getBoundingClientRect().top + window.pageYOffset - 70;
        window.scrollTo(0, top);
      }
    }
  }

  function bindTabs() {
    $$('.map-chips-tab').forEach(function (b) {
      b.addEventListener('click', function () { selectTab(b.dataset.tab, false); });
      b.addEventListener('keydown', function (e) {
        if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
        e.preventDefault();
        var tabs = $$('.map-chips-tab');
        var i = tabs.indexOf(document.activeElement);
        if (i < 0) i = tabs.indexOf(b);
        var n = e.key === 'ArrowRight' ? (i + 1) % tabs.length : (i - 1 + tabs.length) % tabs.length;
        tabs[n].focus();
        selectTab(tabs[n].dataset.tab, false);
      });
    });
  }

  /* ============================================
     BASICS — chip type cards + which-chip-for-which-job + misconceptions
     ============================================ */
  function renderTypes() {
    var el = $('#map-chips-types');
    if (!el || typeof CHIPS_TYPES === 'undefined') return;
    el.innerHTML = CHIPS_TYPES.map(function (t) {
      return '<article class="map-chips-type">' +
        '<p class="map-chips-type-name">' + esc(t.id) + '</p>' +
        '<h3 class="map-chips-type-h">' + esc(t.name) + '</h3>' +
        '<p class="map-chips-type-row"><strong>Best</strong>' + esc(t.best) + '</p>' +
        '<p class="map-chips-type-row"><strong>Weak</strong>' + esc(t.weak) + '</p>' +
        '<p class="map-chips-type-eg">' + esc(t.examples) + '</p>' +
      '</article>';
    }).join('');
  }

  function renderJobMatrix() {
    var el = $('#map-chips-jobs');
    if (!el || typeof CHIPS_JOB_MATRIX === 'undefined') return;
    el.innerHTML = CHIPS_JOB_MATRIX.map(function (j) {
      return '<div class="map-chips-jobs-row">' +
        '<div class="map-chips-jobs-job">' + esc(j.job) + '</div>' +
        '<div class="map-chips-jobs-pick">' + esc(j.pick) + '</div>' +
      '</div>';
    }).join('');
  }

  function renderMisconceptions() {
    var el = $('#map-chips-myths');
    if (!el || typeof CHIPS_MISCONCEPTIONS === 'undefined') return;
    el.innerHTML = CHIPS_MISCONCEPTIONS.map(function (m) {
      return '<article class="map-chips-myth">' +
        '<p class="map-chips-myth-h"><span class="map-chips-myth-tag">Myth</span>' + esc(m.myth) + '</p>' +
        '<p class="map-chips-myth-d"><span class="map-chips-myth-tag map-chips-myth-tag--truth">Truth</span>' + m.truth + '</p>' +
      '</article>';
    }).join('');
  }

  /* ============================================
     STACK
     ============================================ */
  function renderStack() {
    var el = $('#map-chips-stack');
    if (!el || typeof CHIPS_STACK === 'undefined') return;
    el.innerHTML = CHIPS_STACK.map(function (s) {
      return '<article class="map-chips-stack-row">' +
        '<div class="map-chips-stack-num">' + esc(s.n) + '</div>' +
        '<div>' +
          '<h3 class="map-chips-stack-h">' + esc(s.h) + '</h3>' +
          '<div class="map-chips-stack-items">' +
            s.items.map(function (i) { return '<span class="map-chips-stack-pill">' + esc(i) + '</span>'; }).join('') +
          '</div>' +
          '<p class="map-chips-stack-note">' + esc(s.note) + '</p>' +
        '</div>' +
      '</article>';
    }).join('');
  }

  /* ============================================
     HARDWARE — search/filter + render
     ============================================ */
  function renderHardware() {
    var rows = (typeof CHIPS_HARDWARE !== 'undefined') ? CHIPS_HARDWARE : [];
    var sel = $('#map-chips-vendor');
    if (sel) {
      var vendors = ['All'].concat(rows.map(function (r) { return r.vendor; }).filter(function (v, i, a) { return a.indexOf(v) === i; }));
      sel.innerHTML = vendors.map(function (v) { return '<option value="' + esc(v) + '">' + esc(v) + '</option>'; }).join('');
    }

    function matches(row) {
      var q = (($('#map-chips-search') || {}).value || '').toLowerCase().trim();
      var v = (($('#map-chips-vendor') || {}).value || 'All');
      if (v !== 'All' && row.vendor !== v) return false;
      if (!q) return true;
      var hay = (row.vendor + ' ' + row.name + ' ' + row.use + ' ' + row.strength + ' ' + row.weakness + ' ' + (row.generation || '')).toLowerCase();
      return hay.indexOf(q) !== -1;
    }

    function renderCards() {
      var grid = $('#map-chips-hw');
      if (!grid) return;
      var visible = rows.filter(matches);
      var count = $('#map-chips-count');
      if (count) count.textContent = visible.length + ' / ' + rows.length;
      grid.innerHTML = visible.map(function (h) {
        return '<article class="map-chips-hw-card">' +
          '<div class="map-chips-hw-head">' +
            '<span class="map-chips-hw-vendor">' + esc(h.vendor) + '</span>' +
            '<span class="map-chips-hw-gen">' + esc(h.generation || '') + '</span>' +
          '</div>' +
          '<h3 class="map-chips-hw-name">' + esc(h.name) + '</h3>' +
          '<p class="map-chips-hw-use">' + esc(h.use) + '</p>' +
          '<dl class="map-chips-hw-grid">' +
            '<dt>Memory</dt><dd>' + esc(h.mem) + '</dd>' +
            '<dt>Bandwidth</dt><dd>' + esc(h.memBW) + '</dd>' +
            '<dt>BF16/FP16 (dense)</dt><dd>' + esc(h.fp16) + '</dd>' +
            '<dt>FP8 / FP4</dt><dd>' + esc(h.fp8) + '</dd>' +
            '<dt>Interconnect</dt><dd>' + esc(h.interconnect) + '</dd>' +
            '<dt>Precisions</dt><dd>' + esc(h.precisions) + '</dd>' +
            '<dt>System</dt><dd>' + esc(h.system) + '</dd>' +
            '<dt>Software</dt><dd>' + esc(h.software) + '</dd>' +
          '</dl>' +
          '<p class="map-chips-hw-take"><strong>Strength</strong>' + esc(h.strength) + '</p>' +
          '<p class="map-chips-hw-take"><strong>Weakness</strong>' + esc(h.weakness) + '</p>' +
          '<p class="map-chips-hw-take"><strong>Mental model</strong>' + esc(h.take) + '</p>' +
          '<div class="map-chips-hw-meta">' +
            '<span class="map-chips-hw-source">' + esc(h.source || '') + '</span>' +
            '<span>' + esc(h.use || '') + '</span>' +
          '</div>' +
        '</article>';
      }).join('');
    }

    var search = $('#map-chips-search');
    if (search) search.addEventListener('input', renderCards);
    if (sel) sel.addEventListener('change', renderCards);
    renderCards();
  }

  /* ============================================
     BOTTLENECKS — memory + interconnect
     ============================================ */
  function renderMemory() {
    var el = $('#map-chips-memory');
    if (!el || typeof CHIPS_MEMORY === 'undefined') return;
    var m = CHIPS_MEMORY;
    el.innerHTML =
      '<h3 class="map-chips-block-h">' + esc(m.headline) + '</h3>' +
      '<p class="map-chips-block-sub">Frontier AI is increasingly bound by where the bytes are, not how many transistors switch.</p>' +
      '<ul class="map-chips-block-list">' +
        m.whyMemory.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') +
      '</ul>' +
      '<div class="map-chips-hbm-gens">' +
        m.hbmGenerations.map(function (g) {
          return '<div class="map-chips-hbm-gen">' +
            '<p class="map-chips-hbm-gen-h">' + esc(g.name) + '</p>' +
            '<p class="map-chips-hbm-gen-d">' + esc(g.note) + '</p>' +
          '</div>';
        }).join('') +
      '</div>' +
      '<p class="map-chips-block-call"><strong>Supply read</strong>' + esc(m.supplyTake) + '</p>' +
      '<p class="map-chips-block-call"><strong>Misconception</strong>' + esc(m.misconception) + '</p>';
  }

  function renderInterconnect() {
    var el = $('#map-chips-interconnect');
    if (!el || typeof CHIPS_INTERCONNECT === 'undefined') return;
    var i = CHIPS_INTERCONNECT;
    el.innerHTML =
      '<h3 class="map-chips-block-h">' + esc(i.headline) + '</h3>' +
      '<p class="map-chips-block-sub">Frontier AI is distributed computing. The fabric is half the system.</p>' +

      '<h4 class="map-chips-econ-h" style="margin-top:8px">Forms of parallelism</h4>' +
      '<ul class="map-chips-block-list">' +
        i.parallelism.map(function (p) { return '<li><strong style="color:var(--text)">' + esc(p.h) + ':</strong> ' + esc(p.d) + '</li>'; }).join('') +
      '</ul>' +

      '<h4 class="map-chips-econ-h" style="margin-top:8px">Hierarchy of fabrics</h4>' +
      '<div class="map-chips-hierarchy">' +
        i.hierarchy.map(function (h) {
          return '<div class="map-chips-hier-row">' +
            '<div class="map-chips-hier-h">' + esc(h.h) + '</div>' +
            '<div>' + esc(h.d) + '</div>' +
          '</div>';
        }).join('') +
      '</div>' +

      '<h4 class="map-chips-econ-h" style="margin-top:14px">Major fabrics today</h4>' +
      '<div class="map-chips-fabrics">' +
        i.fabrics.map(function (f) {
          return '<div class="map-chips-fabric">' +
            '<p class="map-chips-fabric-h">' + esc(f.name) + '</p>' +
            '<p class="map-chips-fabric-d">' + esc(f.use) + '</p>' +
          '</div>';
        }).join('') +
      '</div>' +

      '<p class="map-chips-block-call"><strong>Why it matters</strong>' + esc(i.punchline) + '</p>';
  }

  /* ============================================
     SUPPLY CHAIN
     ============================================ */
  function renderSupplyMap() {
    var el = $('#map-chips-supply-map');
    if (!el || typeof CHIPS_SUPPLY_MAP === 'undefined') return;
    el.innerHTML = CHIPS_SUPPLY_MAP.map(function (s) {
      return '<div class="map-chips-supply-stage">' +
        '<p class="map-chips-supply-stage-h">' + esc(s.h) + '</p>' +
        '<p class="map-chips-supply-stage-d">' + esc(s.d) + '</p>' +
      '</div>';
    }).join('');
  }

  function renderCountries() {
    var el = $('#map-chips-countries');
    if (!el || typeof CHIPS_SUPPLY === 'undefined') return;
    el.innerHTML = CHIPS_SUPPLY.map(function (c) {
      return '<article class="map-chips-country">' +
        '<p class="map-chips-country-name">' + esc(c.name) + '</p>' +
        '<dl class="map-chips-country-grid">' +
          '<dt>Strong</dt><dd>' + esc(c.strong) + '</dd>' +
          '<dt>Weak</dt><dd>' + esc(c.weak) + '</dd>' +
          '<dt>Why it matters for AI</dt><dd>' + esc(c.matter) + '</dd>' +
          '<dt>Bottleneck</dt><dd>' + esc(c.bottleneck) + '</dd>' +
        '</dl>' +
        (c.source ? '<p class="map-chips-country-src">Source: ' + esc(c.source) + '</p>' : '') +
      '</article>';
    }).join('');
  }

  /* ============================================
     ECONOMICS — cost stack + train vs inference + calculator
     ============================================ */
  function renderEconomics() {
    var econ = (typeof CHIPS_ECONOMICS !== 'undefined') ? CHIPS_ECONOMICS : null;
    if (!econ) return;

    var costEl = $('#map-chips-econ-stack');
    if (costEl) {
      costEl.innerHTML = econ.costStack.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('');
    }

    var tviEl = $('#map-chips-tvi');
    if (tviEl) {
      tviEl.innerHTML = econ.trainingVsInference.map(function (t) {
        return '<article class="map-chips-tvi-card">' +
          '<h4 class="map-chips-tvi-h">' + esc(t.h) + '</h4>' +
          '<p class="map-chips-tvi-d">' + esc(t.d) + '</p>' +
        '</article>';
      }).join('');
    }

    var puncEl = $('#map-chips-tvi-punch');
    if (puncEl && econ.punchline) puncEl.textContent = econ.punchline;
  }

  function bindCalculator() {
    var fields = ['gpus', 'watts', 'util', 'price', 'hourly'].map(function (k) { return $('#map-chips-calc-' + k); });
    var outIT = $('#map-chips-calc-itpower');
    var outTWh = $('#map-chips-calc-twh');
    var outCost = $('#map-chips-calc-cost');
    var outAnnual = $('#map-chips-calc-annual');
    if (!fields.every(Boolean) || !outIT || !outTWh || !outCost || !outAnnual) return;

    function recalc() {
      var gpus  = parseFloat(fields[0].value)  || 0;
      var watts = parseFloat(fields[1].value)  || 0;
      var util  = (parseFloat(fields[2].value) || 0) / 100;
      var price = parseFloat(fields[3].value)  || 0;
      var hourly = parseFloat(fields[4].value) || 0; // approximate $ per GPU per hour, allocated cost
      var itPowerMW = (gpus * watts) / 1e6;
      var twh = itPowerMW * util * 8760 / 1e6;
      var kwh = twh * 1e9;
      var energyCost = kwh * price;
      var hardwareCost = gpus * util * 8760 * hourly;
      outIT.textContent = (Math.round(itPowerMW * 100) / 100) + ' MW';
      outTWh.textContent = (Math.round(twh * 1000) / 1000) + ' TWh';
      outCost.textContent = money(energyCost) + ' / yr';
      outAnnual.textContent = money(energyCost + hardwareCost) + ' / yr';
    }
    fields.forEach(function (i) { i.addEventListener('input', recalc); });
    recalc();
  }

  function bindPresets() {
    var el = $('#map-chips-presets');
    if (!el || typeof CHIPS_CALC_PRESETS === 'undefined') return;
    el.innerHTML = CHIPS_CALC_PRESETS.map(function (p) {
      return '<button class="map-chips-preset" type="button" data-preset="' + esc(p.id) + '" title="' + esc(p.tag) + '">' +
        '<span class="map-chips-preset-mw">' + (p.gpus >= 1000 ? (p.gpus / 1000) + 'k GPUs' : p.gpus + ' GPUs') + '</span>' +
        '<span class="map-chips-preset-name">' + esc(p.label.replace(/^\d+\-?GPU\s*/i, '').replace(/^\d+,?\d*-?GPU\s*/i, '')) + '</span>' +
      '</button>';
    }).join('');

    el.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('.map-chips-preset');
      if (!btn) return;
      var p = CHIPS_CALC_PRESETS.filter(function (x) { return x.id === btn.dataset.preset; })[0];
      if (!p) return;
      var fields = { gpus: p.gpus, watts: p.watts, util: p.util, price: p.price, hourly: p.hourly };
      Object.keys(fields).forEach(function (k) {
        var input = $('#map-chips-calc-' + k);
        if (input) {
          input.value = fields[k];
          input.dispatchEvent(new Event('input', { bubbles: true }));
        }
      });
      $$('.map-chips-preset').forEach(function (b) { b.classList.toggle('is-active', b === btn); });
    });
  }

  /* ============================================
     TAKEAWAYS + SOURCES
     ============================================ */
  function renderTakeaways() {
    var el = $('#map-chips-take-list');
    if (!el || typeof CHIPS_TAKEAWAYS === 'undefined') return;
    el.innerHTML = CHIPS_TAKEAWAYS.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
  }

  function renderSources() {
    var el = $('#map-chips-sources-grouped');
    if (!el || typeof CHIPS_SOURCES_GROUPED === 'undefined') return;
    el.innerHTML = CHIPS_SOURCES_GROUPED.map(function (g) {
      return '<div class="map-chips-srcgrp">' +
        '<h4 class="map-chips-srcgrp-h">' + esc(g.group) + '</h4>' +
        '<ul class="map-chips-srcgrp-list">' +
          g.items.map(function (s) {
            return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.label) + '</a></li>';
          }).join('') +
        '</ul>' +
      '</div>';
    }).join('');
  }

  /* ============================================
     INIT
     ============================================ */
  function init() {
    renderIntel();
    renderFlow();
    renderPills();
    bindTabs();
    renderTypes();
    renderJobMatrix();
    renderMisconceptions();
    renderStack();
    renderHardware();
    renderMemory();
    renderInterconnect();
    renderSupplyMap();
    renderCountries();
    renderEconomics();
    bindPresets();
    bindCalculator();
    renderTakeaways();
    renderSources();

    selectTab('basics', false);

    var h = (window.location.hash || '').replace(/^#/, '');
    if (h.indexOf('chips-') === 0) {
      var t = h.replace('chips-', '');
      if (['basics', 'stack', 'hardware', 'bottlenecks', 'supply', 'economics'].indexOf(t) >= 0) {
        selectTab(t, false);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
