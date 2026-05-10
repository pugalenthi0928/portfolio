/* ============================================
   ENERGY DEEP DIVE — Render + Interaction
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
  function fmt(n) {
    if (n == null || isNaN(n)) return '—';
    if (n >= 10000) return (Math.round(n / 100) / 10).toLocaleString() + 'k';
    if (n >= 1000)  return Math.round(n).toLocaleString();
    if (n >= 100)   return Math.round(n).toString();
    if (n >= 10)    return (Math.round(n * 10) / 10).toString();
    return (Math.round(n * 100) / 100).toString();
  }
  function pct(n) {
    if (n == null || isNaN(n)) return '—';
    return (Math.round(n * 10) / 10) + '%';
  }
  function money(n) {
    if (n == null || isNaN(n)) return '—';
    if (n >= 1e9)  return '$' + (Math.round(n / 1e8) / 10) + 'B';
    if (n >= 1e6)  return '$' + (Math.round(n / 1e5) / 10) + 'M';
    if (n >= 1e3)  return '$' + Math.round(n).toLocaleString();
    return '$' + Math.round(n);
  }

  /* ============================================
     OVERVIEW PILLS
     ============================================ */
  function renderPills() {
    var el = $('#map-energy-pills');
    if (!el || typeof ENERGY_TOPICS === 'undefined') return;
    el.innerHTML = ENERGY_TOPICS.map(function (t) {
      return '<button class="map-energy-pill" data-topic="' + esc(t.id) + '" data-tab="' + esc(t.tab) + '" type="button" aria-label="' + esc(t.label) + '">' +
        '<div class="map-energy-pill-label">' + esc(t.id.replace(/-/g, ' ')) + '</div>' +
        '<h3 class="map-energy-pill-title">' + esc(t.label) + '</h3>' +
        '<p class="map-energy-pill-text">' + esc(t.short) + '</p>' +
      '</button>';
    }).join('');

    el.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('.map-energy-pill');
      if (!btn) return;
      var tab = btn.dataset.tab;
      if (tab) selectTab(tab, true);
    });
  }

  /* ============================================
     TABS
     ============================================ */
  function selectTab(id, scroll) {
    $$('.map-energy-tab').forEach(function (b) {
      var active = b.dataset.tab === id;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-selected', active ? 'true' : 'false');
      b.setAttribute('tabindex', active ? '0' : '-1');
    });
    $$('.map-energy-pane').forEach(function (p) {
      p.classList.toggle('is-active', p.dataset.tab === id);
    });
    if (scroll) {
      var section = $('#energy-deep-dive');
      if (section) {
        var top = section.getBoundingClientRect().top + window.pageYOffset - 70;
        window.scrollTo(0, top);
      }
    }
  }

  function bindTabs() {
    $$('.map-energy-tab').forEach(function (b) {
      b.addEventListener('click', function () { selectTab(b.dataset.tab, false); });
      b.addEventListener('keydown', function (e) {
        if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
        e.preventDefault();
        var tabs = $$('.map-energy-tab');
        var i = tabs.indexOf(document.activeElement);
        if (i < 0) i = tabs.indexOf(b);
        var n = e.key === 'ArrowRight' ? (i + 1) % tabs.length : (i - 1 + tabs.length) % tabs.length;
        tabs[n].focus();
        selectTab(tabs[n].dataset.tab, false);
      });
    });
  }

  /* ============================================
     BASICS — glossary cards
     ============================================ */
  function renderGlossary() {
    var el = $('#map-energy-glossary');
    if (!el || typeof ENERGY_GLOSSARY === 'undefined') return;
    el.innerHTML = ENERGY_GLOSSARY.map(function (g) {
      return '<article class="map-energy-card" id="' + esc(g.id) + '">' +
        '<h3 class="map-energy-card-h">' + esc(g.h) + '</h3>' +
        '<p class="map-energy-card-body">' + esc(g.body) + '</p>' +
        (g.example ? '<p class="map-energy-card-eg">' + esc(g.example) + '</p>' : '') +
      '</article>';
    }).join('');
  }

  /* ============================================
     WORLD — global dashboard
     ============================================ */
  function renderGlobal() {
    var g = (typeof ENERGY_GLOBAL !== 'undefined') ? ENERGY_GLOBAL : null;
    if (!g) return;

    /* Headline stat */
    var statBig = $('#map-energy-total');
    if (statBig) statBig.innerHTML = '~' + Math.round(g.totalGenerationTWh).toLocaleString() + '<span class="map-energy-stat-unit">TWh / yr</span>';
    var statNote = $('#map-energy-total-note');
    if (statNote) statNote.textContent = g.totalGenerationNote;

    var clean = $('#map-energy-clean');
    if (clean) clean.innerHTML = fmt(g.cleanShare) + '<span class="map-energy-stat-unit">%</span>';
    var cleanNote = $('#map-energy-clean-note');
    if (cleanNote) cleanNote.textContent = g.cleanShareNote;

    /* Mix bar */
    var mix = $('#map-energy-mix');
    if (mix) {
      mix.innerHTML = g.mix.map(function (s) {
        return '<span class="map-energy-mix-seg" style="width:' + s.share + '%; background:' + s.color + ';" data-label="' + esc(s.label) + '" data-share="' + s.share + '" title="' + esc(s.label + ' — ' + s.share + '% — ' + (s.note || '')) + '"></span>';
      }).join('');
    }
    var legend = $('#map-energy-mix-legend');
    if (legend) {
      legend.innerHTML = g.mix.map(function (s) {
        return '<span><span class="map-energy-mix-dot" style="background:' + s.color + '"></span>' + esc(s.label) + ' ' + s.share + '%</span>';
      }).join('');
    }

    /* Growth rows */
    var grow = $('#map-energy-growth');
    if (grow) {
      grow.innerHTML = g.growth.map(function (r) {
        return '<div class="map-energy-growth-row">' +
          '<span class="map-energy-growth-label">' + esc(r.label) + '</span>' +
          '<span class="map-energy-growth-val">' + esc(r.value) + '<span class="map-energy-growth-src"> · ' + esc(r.src) + '</span></span>' +
        '</div>';
      }).join('');
    }

    /* Punchlines */
    var punch = $('#map-energy-punchlines');
    if (punch) {
      punch.innerHTML = g.punchlines.map(function (p) {
        return '<li>' + esc(p) + '</li>';
      }).join('');
    }

    /* DC callout */
    if (g.dataCentres) {
      var dc = g.dataCentres;
      var dcEl = $('#map-energy-dc');
      if (dcEl) {
        var bodyText  = dc.body || dc.note || '';
        var dcGrowthHtml = '';
        if (dc.growth && dc.growth.length) {
          dcGrowthHtml = '<div class="map-energy-growth" style="margin-top: 12px">' +
            dc.growth.map(function (r) {
              return '<div class="map-energy-growth-row">' +
                '<span class="map-energy-growth-label">' + esc(r.label) + '</span>' +
                '<span class="map-energy-growth-val">' + esc(r.value) + '<span class="map-energy-growth-src"> · ' + esc(r.src) + '</span></span>' +
              '</div>';
            }).join('') +
          '</div>';
        }
        var supportingHtml = '';
        if (dc.supportingFacts && dc.supportingFacts.length) {
          supportingHtml = '<ul class="map-energy-econ-list" style="margin-top: 12px">' +
            dc.supportingFacts.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') +
          '</ul>';
        }
        var punchHtml = '';
        if (dc.punchline) {
          punchHtml = '<p class="map-energy-stat-note" style="margin-top: 12px; color: var(--text); font-weight: 600;">' + esc(dc.punchline) + '</p>';
        }
        var localHtml = '';
        if (dc.localPunchline) {
          localHtml = '<p class="map-energy-stat-note" style="margin-top: 6px"><strong style="color:var(--text)">Local picture: </strong>' + esc(dc.localPunchline) + '</p>';
        }
        dcEl.innerHTML =
          '<p class="map-energy-dc-h">Data centres — globally small, locally enormous</p>' +
          '<div class="map-energy-dc-grid">' +
            '<div class="map-energy-dc-stat"><span class="map-energy-dc-stat-num">~' + fmt(dc.nowTWh) + ' TWh</span><span class="map-energy-dc-stat-label">data-centre electricity, ' + dc.nowYear + '</span></div>' +
            '<div class="map-energy-dc-stat"><span class="map-energy-dc-stat-num">~' + dc.nowShare + '%</span><span class="map-energy-dc-stat-label">of global electricity, ' + dc.nowYear + '</span></div>' +
            '<div class="map-energy-dc-stat"><span class="map-energy-dc-stat-num">~' + fmt(dc.projectedTWh2030) + ' TWh</span><span class="map-energy-dc-stat-label">projected 2030 (IEA)</span></div>' +
            '<div class="map-energy-dc-stat"><span class="map-energy-dc-stat-num">~' + dc.projectedShare2030 + '%</span><span class="map-energy-dc-stat-label">projected share 2030</span></div>' +
          '</div>' +
          '<p class="map-energy-stat-note">' + esc(bodyText) + '</p>' +
          dcGrowthHtml +
          supportingHtml +
          punchHtml +
          localHtml;
      }
    }
  }

  /* ============================================
     COUNTRIES — table + deep dives
     ============================================ */
  function renderCountries() {
    var rows = (typeof ENERGY_COUNTRIES !== 'undefined') ? ENERGY_COUNTRIES : [];
    var deep = (typeof ENERGY_COUNTRY_DEEP !== 'undefined') ? ENERGY_COUNTRY_DEEP : [];

    /* Region select */
    var regions = ['All'].concat(rows.map(function (r) { return r.region; }).filter(function (v, i, a) { return a.indexOf(v) === i; }));
    var sel = $('#map-energy-region');
    if (sel) sel.innerHTML = regions.map(function (r) { return '<option value="' + esc(r) + '">' + esc(r) + '</option>'; }).join('');

    function matches(row) {
      var q = (($('#map-energy-search') || {}).value || '').toLowerCase().trim();
      var region = (($('#map-energy-region') || {}).value || 'All');
      if (region !== 'All' && row.region !== region) return false;
      if (!q) return true;
      var hay = (row.name + ' ' + row.region + ' ' + row.dc + ' ' + row.read + ' ' + row.bottleneck).toLowerCase();
      return hay.indexOf(q) !== -1;
    }

    function mixSummary(m) {
      var parts = [];
      if (m.coal)    parts.push('coal '    + m.coal + '%');
      if (m.gas)     parts.push('gas '     + m.gas + '%');
      if (m.nuclear) parts.push('nuc '     + m.nuclear + '%');
      if (m.hydro)   parts.push('hydro '   + m.hydro + '%');
      var ws = (m.wind || 0) + (m.solar || 0);
      if (ws)        parts.push('w+s '     + ws + '%');
      return parts.join(' · ');
    }

    function renderRows() {
      var tbody = $('#map-energy-tbody');
      if (!tbody) return;
      var visible = rows.filter(matches);
      var count = $('#map-energy-count');
      if (count) count.textContent = visible.length + ' / ' + rows.length;
      tbody.innerHTML = visible.map(function (r) {
        return '<tr>' +
          '<td class="col-name">' + esc(r.name) + '<div class="col-region">' + esc(r.region) + ' · ' + r.year + '</div></td>' +
          '<td class="col-readiness">' + (r.readiness ? readinessBadge(r.readiness) : '') + '</td>' +
          '<td class="col-num">' + fmt(r.gen) + '</td>' +
          '<td class="col-num">' + (r.peakGW != null ? fmt(r.peakGW) : '—') + '</td>' +
          '<td class="col-mix">' + esc(mixSummary(r.mix)) + '</td>' +
          '<td>' + esc(r.dc) + '</td>' +
          '<td class="col-read">' + esc(r.read) + '</td>' +
          '<td class="col-bottleneck">' + esc(r.bottleneck) + '</td>' +
        '</tr>';
      }).join('');
    }

    renderRows();
    var search = $('#map-energy-search');
    if (search) search.addEventListener('input', renderRows);
    if (sel) sel.addEventListener('change', renderRows);

    /* Deep dive cards (Strong / Weak / Why it matters / Bottleneck) */
    var deepEl = $('#map-energy-deep');
    if (deepEl) {
      deepEl.innerHTML = deep.map(function (d) {
        return '<article class="map-energy-deep-card">' +
          '<div class="map-energy-deep-head">' +
            '<p class="map-energy-deep-name">' + esc(d.name) + '</p>' +
            (d.readiness ? readinessBadge(d.readiness) : '') +
          '</div>' +
          '<h3 class="map-energy-deep-headline">' + esc(d.headline) + '</h3>' +
          '<dl class="map-energy-deep-grid">' +
            '<dt>Strong</dt><dd>' + esc(d.strong) + '</dd>' +
            '<dt>Weak</dt><dd>' + esc(d.weak) + '</dd>' +
            '<dt>Why it matters for AI</dt><dd>' + esc(d.matter) + '</dd>' +
            '<dt>Bottleneck</dt><dd>' + esc(d.bottleneck) + '</dd>' +
          '</dl>' +
        '</article>';
      }).join('');
    }
  }

  /* Render a small readiness badge for a given readiness key */
  function readinessBadge(key) {
    if (typeof ENERGY_READINESS === 'undefined') return '';
    var def = ENERGY_READINESS[key];
    if (!def) return '';
    return '<span class="map-energy-ready map-energy-ready--' + esc(def.tone || 'mid') + '" title="' + esc(def.note || '') + '">' + esc(def.label) + '</span>';
  }

  /* ============================================
     COMPUTE — calculator + comparison
     ============================================ */
  function bindCalculator() {
    var inputs = ['it', 'pue', 'util', 'price'].map(function (k) { return $('#map-energy-calc-' + k); });
    var outTWh = $('#map-energy-calc-twh');
    var outCost = $('#map-energy-calc-cost');
    var outFacility = $('#map-energy-calc-facility');
    if (!inputs.every(Boolean) || !outTWh || !outCost || !outFacility) return;

    function recalc() {
      var it = parseFloat(inputs[0].value) || 0;       // IT load MW
      var pue = parseFloat(inputs[1].value) || 1;
      var util = (parseFloat(inputs[2].value) || 0) / 100; // %
      var price = parseFloat(inputs[3].value) || 0;     // $/kWh
      var facilityMW = it * pue;
      var twh = facilityMW * util * 8760 / 1e6;         // (MW * h) / 1e6 = TWh
      var kwh = twh * 1e9;
      var cost = kwh * price;
      outTWh.textContent = (Math.round(twh * 100) / 100) + ' TWh';
      outCost.textContent = money(cost) + ' / yr';
      outFacility.textContent = (Math.round(facilityMW * 10) / 10) + ' MW';
    }
    inputs.forEach(function (i) { i.addEventListener('input', recalc); });
    recalc();
  }

  /* "Where to put a 500 MW campus?" qualitative comparison
     Each row: country, scores from 1-10 across four axes:
     power_avail, time_to_power (10 = fastest), price (10 = cheapest),
     carbon_clean (10 = cleanest grid).
     Scores are deliberately qualitative; they encode the read above. */
  var WHERE_DATA = [
    { name: 'United States (Texas, ERCOT)',  power: 7, speed: 7, price: 8, clean: 5 },
    { name: 'United States (Virginia, PJM)', power: 5, speed: 4, price: 6, clean: 5 },
    { name: 'China (mainland)',              power: 9, speed: 7, price: 8, clean: 5 },
    { name: 'European Union (FLAP-D)',       power: 4, speed: 3, price: 4, clean: 8 },
    { name: 'France',                        power: 6, speed: 5, price: 6, clean: 9 },
    { name: 'Singapore',                     power: 3, speed: 3, price: 4, clean: 5 },
    { name: 'Malaysia (Johor)',              power: 6, speed: 6, price: 7, clean: 4 },
    { name: 'India (south + west)',          power: 6, speed: 5, price: 7, clean: 4 },
    { name: 'UAE',                           power: 8, speed: 7, price: 8, clean: 6 }
  ];

  function renderWhere() {
    var el = $('#map-energy-where-grid');
    if (!el) return;
    function bar(label, val) {
      var pct = Math.max(0, Math.min(100, val * 10));
      return '<div class="map-energy-where-bar">' +
        '<span style="width:84px">' + label + '</span>' +
        '<span class="map-energy-where-bar-track"><span class="map-energy-where-bar-fill" style="width:' + pct + '%"></span></span>' +
        '<span class="map-energy-where-bar-num">' + val + '/10</span>' +
      '</div>';
    }
    el.innerHTML = WHERE_DATA.map(function (r) {
      return '<div class="map-energy-where-row">' +
        '<div class="map-energy-where-name">' + esc(r.name) + '</div>' +
        '<div class="map-energy-where-bars">' +
          bar('MW now',      r.power) +
          bar('Time-to-power', r.speed) +
          bar('Price',       r.price) +
          bar('Clean grid',  r.clean) +
        '</div>' +
      '</div>';
    }).join('');
  }

  /* ============================================
     CONSTRAINTS
     ============================================ */
  function renderConstraints() {
    var el = $('#map-energy-checklist');
    if (!el || typeof ENERGY_CONSTRAINTS === 'undefined') return;
    el.innerHTML = ENERGY_CONSTRAINTS.map(function (c, i) {
      var n = (i + 1).toString().padStart(2, '0');
      return '<div class="map-energy-check">' +
        '<span class="map-energy-check-num">' + n + '</span>' +
        '<div><h4 class="map-energy-check-h">' + esc(c.h) + '</h4>' +
        '<p class="map-energy-check-d">' + esc(c.d) + '</p></div>' +
      '</div>';
    }).join('');
  }

  function renderTakeaways() {
    var el = $('#map-energy-take-list');
    if (!el || typeof ENERGY_TAKEAWAYS === 'undefined') return;
    el.innerHTML = ENERGY_TAKEAWAYS.map(function (t) {
      return '<li>' + esc(t) + '</li>';
    }).join('');
  }

  /* ============================================
     SOURCES
     ============================================ */
  function renderSources() {
    var el = $('#map-energy-sources-list');
    if (!el || typeof ENERGY_SOURCES === 'undefined') return;
    el.innerHTML = ENERGY_SOURCES.map(function (s) {
      return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.label) + '</a></li>';
    }).join('');
  }

  /* ============================================
     INTEL SUMMARY — top-of-section briefing
     ============================================ */
  function renderIntel() {
    var el = $('#map-energy-intel');
    if (!el || typeof ENERGY_INTEL_SUMMARY === 'undefined') return;
    el.innerHTML = ENERGY_INTEL_SUMMARY.map(function (item, i) {
      var n = (i + 1).toString().padStart(2, '0');
      return '<article class="map-energy-intel-card">' +
        '<span class="map-energy-intel-num">' + n + '</span>' +
        '<h3 class="map-energy-intel-h">' + esc(item.h) + '</h3>' +
        '<p class="map-energy-intel-d">' + esc(item.d) + '</p>' +
      '</article>';
    }).join('');
  }

  /* ============================================
     FLOW CHAIN — power plant to token
     ============================================ */
  function renderFlow() {
    var el = $('#map-energy-flow');
    if (!el || typeof ENERGY_FLOW === 'undefined') return;
    el.innerHTML = ENERGY_FLOW.map(function (s, i) {
      return '<div class="map-energy-flow-step" style="--i:' + i + '">' +
        '<div class="map-energy-flow-dot"></div>' +
        '<div class="map-energy-flow-body">' +
          '<h4 class="map-energy-flow-h">' + esc(s.h) + '</h4>' +
          '<p class="map-energy-flow-d">' + esc(s.d) + '</p>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  /* ============================================
     MISCONCEPTIONS
     ============================================ */
  function renderMisconceptions() {
    var el = $('#map-energy-myths');
    if (!el || typeof ENERGY_MISCONCEPTIONS === 'undefined') return;
    el.innerHTML = ENERGY_MISCONCEPTIONS.map(function (m) {
      return '<article class="map-energy-myth">' +
        '<p class="map-energy-myth-h"><span class="map-energy-myth-tag">Myth</span>' + esc(m.myth) + '</p>' +
        '<p class="map-energy-myth-d"><span class="map-energy-myth-tag map-energy-myth-tag--truth">Truth</span>' + m.truth + '</p>' +
      '</article>';
    }).join('');
  }

  /* ============================================
     CALCULATOR PRESETS + SIZE GUIDE
     ============================================ */
  function bindPresets() {
    var el = $('#map-energy-presets');
    if (!el || typeof ENERGY_CALC_PRESETS === 'undefined') return;
    el.innerHTML = ENERGY_CALC_PRESETS.map(function (p) {
      return '<button class="map-energy-preset" type="button" data-preset="' + esc(p.id) + '" title="' + esc(p.tag) + '">' +
        '<span class="map-energy-preset-mw">' + p.it + ' MW</span>' +
        '<span class="map-energy-preset-name">' + esc(p.label.replace(/^\d+\s*MW\s*/i, '').replace(/^\d+\s*GW\s*/i, '')) + '</span>' +
      '</button>';
    }).join('');

    el.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('.map-energy-preset');
      if (!btn) return;
      var preset = ENERGY_CALC_PRESETS.filter(function (p) { return p.id === btn.dataset.preset; })[0];
      if (!preset) return;
      var fields = { it: preset.it, pue: preset.pue, util: preset.util, price: preset.price };
      Object.keys(fields).forEach(function (k) {
        var input = $('#map-energy-calc-' + k);
        if (input) {
          input.value = fields[k];
          input.dispatchEvent(new Event('input', { bubbles: true }));
        }
      });
      $$('.map-energy-preset').forEach(function (b) { b.classList.toggle('is-active', b === btn); });
    });
  }

  function renderSizeGuide() {
    var el = $('#map-energy-size');
    if (!el || typeof ENERGY_SIZE_GUIDE === 'undefined') return;
    el.innerHTML = ENERGY_SIZE_GUIDE.map(function (s) {
      var unit = s.mw >= 1000 ? (s.mw / 1000) + ' GW' : s.mw + ' MW';
      return '<div class="map-energy-size-row">' +
        '<span class="map-energy-size-mw">' + esc(unit) + '</span>' +
        '<span class="map-energy-size-name">' + esc(s.label) + '</span>' +
        '<span class="map-energy-size-text">' + esc(s.text) + '</span>' +
      '</div>';
    }).join('');
  }

  /* ============================================
     TIME-TO-POWER TIMELINE
     ============================================ */
  function renderTimeline() {
    var el = $('#map-energy-timeline');
    if (!el || typeof ENERGY_TIMELINE === 'undefined') return;
    el.innerHTML = ENERGY_TIMELINE.map(function (s, i) {
      var n = (i + 1).toString().padStart(2, '0');
      var last = i === ENERGY_TIMELINE.length - 1;
      return '<div class="map-energy-tl-step' + (last ? ' is-final' : '') + '">' +
        '<div class="map-energy-tl-num">' + n + '</div>' +
        '<div class="map-energy-tl-body">' +
          '<h4 class="map-energy-tl-h">' + esc(s.h) + '</h4>' +
          '<p class="map-energy-tl-d">' + esc(s.d) + '</p>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  /* ============================================
     READINESS LEGEND
     ============================================ */
  function renderReadinessLegend() {
    var el = $('#map-energy-ready-legend');
    if (!el || typeof ENERGY_READINESS === 'undefined') return;
    el.innerHTML = Object.keys(ENERGY_READINESS).map(function (k) {
      var def = ENERGY_READINESS[k];
      return '<div class="map-energy-ready-leg-row">' +
        '<span class="map-energy-ready map-energy-ready--' + esc(def.tone) + '">' + esc(def.label) + '</span>' +
        '<span class="map-energy-ready-leg-note">' + esc(def.note) + '</span>' +
      '</div>';
    }).join('');
  }

  /* ============================================
     GROUPED SOURCES
     ============================================ */
  function renderGroupedSources() {
    var el = $('#map-energy-sources-grouped');
    if (!el || typeof ENERGY_SOURCES_GROUPED === 'undefined') return;
    el.innerHTML = ENERGY_SOURCES_GROUPED.map(function (g) {
      return '<div class="map-energy-srcgrp">' +
        '<h4 class="map-energy-srcgrp-h">' + esc(g.group) + '</h4>' +
        '<ul class="map-energy-srcgrp-list">' +
          g.items.map(function (s) {
            return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.label) + '</a></li>';
          }).join('') +
        '</ul>' +
      '</div>';
    }).join('');
  }

  /* ============================================
     LAST-UPDATED BADGE
     ============================================ */
  function renderBadge() {
    var el = $('#map-energy-badge');
    if (!el) return;
    var stamp = (typeof ENERGY_GLOBAL !== 'undefined' && ENERGY_GLOBAL.asOf) ? ENERGY_GLOBAL.asOf : 'latest available';
    el.textContent = stamp;
  }

  /* ============================================
     INIT
     ============================================ */
  function init() {
    renderIntel();
    renderFlow();
    renderPills();
    bindTabs();
    renderGlossary();
    renderMisconceptions();
    renderGlobal();
    renderReadinessLegend();
    renderCountries();
    bindCalculator();
    bindPresets();
    renderSizeGuide();
    renderWhere();
    renderConstraints();
    renderTimeline();
    renderTakeaways();
    renderSources();
    renderGroupedSources();
    renderBadge();

    /* Default tab */
    selectTab('basics', false);

    /* Hash deep-link: #energy-basics, #energy-world, etc. */
    var h = (window.location.hash || '').replace(/^#/, '');
    if (h.indexOf('energy-') === 0) {
      var t = h.replace('energy-', '');
      if (['basics', 'world', 'countries', 'compute', 'constraints'].indexOf(t) >= 0) {
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
