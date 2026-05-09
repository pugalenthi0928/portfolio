/* ============================================
   INFRASTRUCTURE DEEP DIVE — Render + Interaction
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
  function fmtPower(mw) {
    if (mw >= 1000) return (Math.round((mw / 1000) * 100) / 100) + ' GW';
    if (mw >= 10)   return (Math.round(mw * 10) / 10) + ' MW';
    return (Math.round(mw * 100) / 100) + ' MW';
  }
  function fmtEnergy(twh) {
    if (twh >= 1)   return (Math.round(twh * 100) / 100).toLocaleString() + ' TWh';
    if (twh >= 0.001) {
      var gwh = twh * 1000;
      var rounded = gwh >= 100 ? Math.round(gwh) : (Math.round(gwh * 10) / 10);
      return rounded.toLocaleString() + ' GWh';
    }
    var mwh = twh * 1e6;
    return (Math.round(mwh)).toLocaleString() + ' MWh';
  }

  /* ============================================
     INTEL SUMMARY + FLOW + PILLS
     ============================================ */
  function renderIntel() {
    var el = $('#map-infra-intel');
    if (!el || typeof INFRA_INTEL_SUMMARY === 'undefined') return;
    el.innerHTML = INFRA_INTEL_SUMMARY.map(function (item, i) {
      var n = (i + 1).toString().padStart(2, '0');
      return '<article class="map-infra-intel-card">' +
        '<span class="map-infra-intel-num">' + n + '</span>' +
        '<h3 class="map-infra-intel-h">' + esc(item.h) + '</h3>' +
        '<p class="map-infra-intel-d">' + esc(item.d) + '</p>' +
      '</article>';
    }).join('');
  }

  function renderFlow() {
    var el = $('#map-infra-flow');
    if (!el || typeof INFRA_FLOW === 'undefined') return;
    el.innerHTML = INFRA_FLOW.map(function (s) {
      return '<div class="map-infra-flow-step">' +
        '<div class="map-infra-flow-dot"></div>' +
        '<h4 class="map-infra-flow-h">' + esc(s.h) + '</h4>' +
        '<p class="map-infra-flow-d">' + esc(s.d) + '</p>' +
      '</div>';
    }).join('');
  }

  function renderPills() {
    var el = $('#map-infra-pills');
    if (!el || typeof INFRA_TOPICS === 'undefined') return;
    el.innerHTML = INFRA_TOPICS.map(function (t) {
      return '<button class="map-infra-pill" type="button" data-tab="' + esc(t.tab) + '" aria-label="' + esc(t.label) + '">' +
        '<div class="map-infra-pill-label">' + esc(t.id.replace(/-/g, ' ')) + '</div>' +
        '<h3 class="map-infra-pill-title">' + esc(t.label) + '</h3>' +
        '<p class="map-infra-pill-text">' + esc(t.short) + '</p>' +
      '</button>';
    }).join('');
    el.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('.map-infra-pill');
      if (btn && btn.dataset.tab) selectTab(btn.dataset.tab, true);
    });
  }

  /* ============================================
     TABS
     ============================================ */
  function selectTab(id, scroll) {
    $$('.map-infra-tab').forEach(function (b) {
      var on = b.dataset.tab === id;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      b.setAttribute('tabindex', on ? '0' : '-1');
    });
    $$('.map-infra-pane').forEach(function (p) {
      p.classList.toggle('is-active', p.dataset.tab === id);
    });
    if (scroll) {
      var section = $('#infra-deep-dive');
      if (section) {
        var top = section.getBoundingClientRect().top + window.pageYOffset - 70;
        window.scrollTo(0, top);
      }
    }
  }
  function bindTabs() {
    $$('.map-infra-tab').forEach(function (b) {
      b.addEventListener('click', function () { selectTab(b.dataset.tab, false); });
      b.addEventListener('keydown', function (e) {
        if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
        e.preventDefault();
        var tabs = $$('.map-infra-tab');
        var i = tabs.indexOf(document.activeElement);
        if (i < 0) i = tabs.indexOf(b);
        var n = e.key === 'ArrowRight' ? (i + 1) % tabs.length : (i - 1 + tabs.length) % tabs.length;
        tabs[n].focus();
        selectTab(tabs[n].dataset.tab, false);
      });
    });
  }

  /* ============================================
     BASICS — primitives + ladder + misconceptions
     ============================================ */
  function renderPrimitives() {
    var el = $('#map-infra-prims');
    if (!el || typeof INFRA_PRIMITIVES === 'undefined') return;
    el.innerHTML = INFRA_PRIMITIVES.map(function (p) {
      return '<article class="map-infra-prim">' +
        '<h3 class="map-infra-prim-h">' + esc(p.h) + '</h3>' +
        '<p class="map-infra-prim-d">' + esc(p.d) + '</p>' +
      '</article>';
    }).join('');
  }

  function renderLadder() {
    var el = $('#map-infra-ladder');
    if (!el || typeof INFRA_LADDER === 'undefined') return;
    el.innerHTML = INFRA_LADDER.map(function (l, i) {
      var n = (i + 1).toString().padStart(2, '0');
      return '<div class="map-infra-ladder-row">' +
        '<div class="map-infra-ladder-num">' + n + '</div>' +
        '<div class="map-infra-ladder-h">' + esc(l.h) + '</div>' +
        '<div class="map-infra-ladder-d">' + esc(l.d) + '</div>' +
      '</div>';
    }).join('');
  }

  function renderMisconceptions() {
    var el = $('#map-infra-myths');
    if (!el || typeof INFRA_MISCONCEPTIONS === 'undefined') return;
    el.innerHTML = INFRA_MISCONCEPTIONS.map(function (m) {
      return '<article class="map-infra-myth">' +
        '<p class="map-infra-myth-h"><span class="map-infra-myth-tag">Myth</span>' + esc(m.myth) + '</p>' +
        '<p class="map-infra-myth-d"><span class="map-infra-myth-tag map-infra-myth-tag--truth">Truth</span>' + m.truth + '</p>' +
      '</article>';
    }).join('');
  }

  /* ============================================
     STACK
     ============================================ */
  function renderStack() {
    var el = $('#map-infra-stack');
    if (!el || typeof INFRA_STACK === 'undefined') return;
    el.innerHTML = INFRA_STACK.map(function (s) {
      return '<article class="map-infra-stack-row">' +
        '<div class="map-infra-stack-num">' + esc(s.n) + '</div>' +
        '<div>' +
          '<h3 class="map-infra-stack-h">' + esc(s.h) + '</h3>' +
          '<div class="map-infra-stack-items">' +
            s.items.map(function (i) { return '<span class="map-infra-stack-pill">' + esc(i) + '</span>'; }).join('') +
          '</div>' +
          '<p class="map-infra-stack-note">' + esc(s.note) + '</p>' +
        '</div>' +
      '</article>';
    }).join('');
  }

  /* ============================================
     TRAINING
     ============================================ */
  function renderTraining() {
    var el = $('#map-infra-training');
    if (!el || typeof INFRA_TRAINING === 'undefined') return;
    var t = INFRA_TRAINING;
    el.innerHTML =
      '<h3 class="map-infra-block-h">' + esc(t.headline) + '</h3>' +
      '<p class="map-infra-block-sub">' + esc(t.framing) + '</p>' +

      '<h4 class="map-infra-econ-h">Forms of parallelism</h4>' +
      '<div class="map-infra-mini">' +
        t.parallelism.map(function (p) {
          return '<div class="map-infra-mini-card">' +
            '<h5 class="map-infra-mini-h">' + esc(p.h) + '</h5>' +
            '<p class="map-infra-mini-d">' + esc(p.d) + '</p>' +
          '</div>';
        }).join('') +
      '</div>' +

      '<h4 class="map-infra-econ-h" style="margin-top:18px">The hard problems</h4>' +
      '<ul class="map-infra-block-list">' +
        t.hardProblems.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') +
      '</ul>' +

      '<h4 class="map-infra-econ-h" style="margin-top:18px">A training step, end to end</h4>' +
      '<div class="map-infra-mini">' +
        t.flow.map(function (s) {
          return '<div class="map-infra-mini-card">' +
            '<h5 class="map-infra-mini-h">' + esc(s.h) + '</h5>' +
            '<p class="map-infra-mini-d">' + esc(s.d) + '</p>' +
          '</div>';
        }).join('') +
      '</div>' +

      '<p class="map-infra-block-call"><strong>Why it matters</strong>' + esc(t.punchline) + '</p>';
  }

  /* ============================================
     INFERENCE
     ============================================ */
  function renderInference() {
    var el = $('#map-infra-inference');
    if (!el || typeof INFRA_INFERENCE === 'undefined') return;
    var i = INFRA_INFERENCE;
    el.innerHTML =
      '<h3 class="map-infra-block-h">' + esc(i.headline) + '</h3>' +
      '<p class="map-infra-block-sub">' + esc(i.framing) + '</p>' +

      '<h4 class="map-infra-econ-h">The serving pipeline</h4>' +
      '<div class="map-infra-mini">' +
        i.pipeline.map(function (s) {
          return '<div class="map-infra-mini-card">' +
            '<h5 class="map-infra-mini-h">' + esc(s.h) + '</h5>' +
            '<p class="map-infra-mini-d">' + esc(s.d) + '</p>' +
          '</div>';
        }).join('') +
      '</div>' +

      '<h4 class="map-infra-econ-h" style="margin-top:18px">Concepts every serving stack lives or dies on</h4>' +
      '<div class="map-infra-mini">' +
        i.concepts.map(function (c) {
          return '<div class="map-infra-mini-card">' +
            '<h5 class="map-infra-mini-h">' + esc(c.h) + '</h5>' +
            '<p class="map-infra-mini-d">' + esc(c.d) + '</p>' +
          '</div>';
        }).join('') +
      '</div>' +

      '<h4 class="map-infra-econ-h" style="margin-top:22px">Serving systems — comparison cards</h4>' +
      '<div class="map-infra-serving">' +
        i.servingSystems.map(function (s) {
          return '<article class="map-infra-serving-card">' +
            '<p class="map-infra-serving-name">' + esc(s.name) + '</p>' +
            '<p class="map-infra-serving-best">' + esc(s.best) + '</p>' +
            '<p class="map-infra-serving-row"><strong>Strength</strong>' + esc(s.strength) + '</p>' +
            '<p class="map-infra-serving-row"><strong>Weakness</strong>' + esc(s.weakness) + '</p>' +
            '<p class="map-infra-serving-row"><strong>Mental model</strong>' + esc(s.take) + '</p>' +
          '</article>';
        }).join('') +
      '</div>' +

      '<p class="map-infra-block-call"><strong>Why it matters</strong>' + esc(i.punchline) + '</p>';
  }

  /* ============================================
     NETWORKING + STORAGE
     ============================================ */
  function renderFabric() {
    var n = (typeof INFRA_NETWORK !== 'undefined') ? INFRA_NETWORK : null;
    var s = (typeof INFRA_STORAGE !== 'undefined') ? INFRA_STORAGE : null;
    var el = $('#map-infra-fabric');
    if (!el || !n || !s) return;

    el.innerHTML =
      '<div class="map-infra-block">' +
        '<h3 class="map-infra-block-h">' + esc(n.headline) + '</h3>' +
        '<p class="map-infra-block-sub">' + esc(n.framing) + '</p>' +

        '<h4 class="map-infra-econ-h">Traffic types</h4>' +
        '<div class="map-infra-mini">' +
          n.trafficTypes.map(function (t) {
            return '<div class="map-infra-mini-card">' +
              '<h5 class="map-infra-mini-h">' + esc(t.h) + '</h5>' +
              '<p class="map-infra-mini-d">' + esc(t.d) + '</p>' +
            '</div>';
          }).join('') +
        '</div>' +

        '<h4 class="map-infra-econ-h" style="margin-top:18px">Metrics that decide whether a fabric works</h4>' +
        '<div class="map-infra-mini">' +
          n.metrics.map(function (m) {
            return '<div class="map-infra-mini-card">' +
              '<h5 class="map-infra-mini-h">' + esc(m.h) + '</h5>' +
              '<p class="map-infra-mini-d">' + esc(m.d) + '</p>' +
            '</div>';
          }).join('') +
        '</div>' +

        '<h4 class="map-infra-econ-h" style="margin-top:18px">Hierarchy of fabrics</h4>' +
        '<div class="map-infra-hierarchy">' +
          n.hierarchy.map(function (h) {
            return '<div class="map-infra-hier-row">' +
              '<div class="map-infra-hier-h">' + esc(h.h) + '</div>' +
              '<div>' + esc(h.d) + '</div>' +
            '</div>';
          }).join('') +
        '</div>' +

        '<h4 class="map-infra-econ-h" style="margin-top:18px">Major fabrics today</h4>' +
        '<div class="map-infra-mini">' +
          n.fabrics.map(function (f) {
            return '<div class="map-infra-mini-card">' +
              '<h5 class="map-infra-mini-h">' + esc(f.name) + '</h5>' +
              '<p class="map-infra-mini-d">' + esc(f.use) + '</p>' +
            '</div>';
          }).join('') +
        '</div>' +

        '<p class="map-infra-block-call"><strong>Why it matters</strong>' + esc(n.punchline) + '</p>' +
      '</div>' +

      '<div class="map-infra-block">' +
        '<h3 class="map-infra-block-h">' + esc(s.headline) + '</h3>' +
        '<p class="map-infra-block-sub">' + esc(s.framing) + '</p>' +

        '<h4 class="map-infra-econ-h">Storage layers</h4>' +
        '<div class="map-infra-mini">' +
          s.layers.map(function (L) {
            return '<div class="map-infra-mini-card">' +
              '<h5 class="map-infra-mini-h">' + esc(L.h) + '</h5>' +
              '<p class="map-infra-mini-d">' + esc(L.d) + '</p>' +
            '</div>';
          }).join('') +
        '</div>' +

        '<h4 class="map-infra-econ-h" style="margin-top:18px">The training data pipeline</h4>' +
        '<div class="map-infra-mini">' +
          s.pipeline.map(function (p) {
            return '<div class="map-infra-mini-card">' +
              '<h5 class="map-infra-mini-h">' + esc(p.h) + '</h5>' +
              '<p class="map-infra-mini-d">' + esc(p.d) + '</p>' +
            '</div>';
          }).join('') +
        '</div>' +

        '<p class="map-infra-block-call"><strong>Why it matters</strong>' + esc(s.punchline) + '</p>' +
      '</div>';
  }

  /* ============================================
     ORCHESTRATION + MLOPS
     ============================================ */
  function renderOrchestration() {
    var o = (typeof INFRA_ORCHESTRATION !== 'undefined') ? INFRA_ORCHESTRATION : null;
    var m = (typeof INFRA_MLOPS !== 'undefined') ? INFRA_MLOPS : null;
    var el = $('#map-infra-orchestration');
    if (!el || !o || !m) return;

    el.innerHTML =
      '<div class="map-infra-block">' +
        '<h3 class="map-infra-block-h">' + esc(o.headline) + '</h3>' +
        '<p class="map-infra-block-sub">Different orchestrators for different jobs. Most large AI orgs run more than one — Slurm for big training, K8s for serving, Ray for AI-shaped Python.</p>' +

        '<div class="map-infra-sched">' +
          '<div class="map-infra-sched-row map-infra-sched-row--head"><div>Tool</div><div>Purpose</div><div>Best for</div><div>Weak</div><div>Mental model</div></div>' +
          o.schedulers.map(function (s) {
            return '<div class="map-infra-sched-row">' +
              '<div class="map-infra-sched-name">' + esc(s.name) + '</div>' +
              '<div>' + esc(s.purpose) + '</div>' +
              '<div>' + esc(s.best) + '</div>' +
              '<div>' + esc(s.weak) + '</div>' +
              '<div>' + esc(s.take) + '</div>' +
            '</div>';
          }).join('') +
        '</div>' +

        '<h4 class="map-infra-econ-h" style="margin-top:18px">Workload → execution flow</h4>' +
        '<div class="map-infra-mini">' +
          o.flow.map(function (s) {
            return '<div class="map-infra-mini-card">' +
              '<h5 class="map-infra-mini-h">' + esc(s.h) + '</h5>' +
              '<p class="map-infra-mini-d">' + esc(s.d) + '</p>' +
            '</div>';
          }).join('') +
        '</div>' +
      '</div>' +

      '<div class="map-infra-block">' +
        '<h3 class="map-infra-block-h">' + esc(m.headline) + '</h3>' +
        '<p class="map-infra-block-sub">MLOps is the discipline that makes model work repeatable, safe, testable, deployable and monitorable. Twelve numbered steps; skip any of them and the system regresses to "demo".</p>' +

        '<div class="map-infra-lifecycle">' +
          m.lifecycle.map(function (l) {
            return '<div class="map-infra-life-step">' +
              '<div class="map-infra-life-num">' + esc(l.n) + '</div>' +
              '<div>' +
                '<h5 class="map-infra-life-h">' + esc(l.h) + '</h5>' +
                '<p class="map-infra-life-d">' + esc(l.d) + '</p>' +
              '</div>' +
            '</div>';
          }).join('') +
        '</div>' +

        '<h4 class="map-infra-econ-h" style="margin-top:18px">Concepts every team needs</h4>' +
        '<ul class="map-infra-block-list">' +
          m.concepts.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') +
        '</ul>' +

        '<h4 class="map-infra-econ-h">Tools commonly seen in production</h4>' +
        '<div class="map-infra-tools">' +
          m.tools.map(function (t) { return '<span class="map-infra-tool-pill">' + esc(t) + '</span>'; }).join('') +
        '</div>' +

        '<p class="map-infra-block-call"><strong>Why it matters</strong>' + esc(m.punchline) + '</p>' +
      '</div>';
  }

  /* ============================================
     AI FACTORY + RELIABILITY
     ============================================ */
  function renderFactory() {
    var f = (typeof INFRA_FACTORY !== 'undefined') ? INFRA_FACTORY : null;
    var r = (typeof INFRA_RELIABILITY !== 'undefined') ? INFRA_RELIABILITY : null;
    var el = $('#map-infra-factory');
    if (!el || !f || !r) return;

    el.innerHTML =
      '<div class="map-infra-block">' +
        '<h3 class="map-infra-block-h">' + esc(f.headline) + '</h3>' +
        '<p class="map-infra-block-sub">' + esc(f.framing) + '</p>' +

        '<h4 class="map-infra-econ-h">What an AI factory contains</h4>' +
        '<ul class="map-infra-block-list">' +
          f.components.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') +
        '</ul>' +

        '<h4 class="map-infra-econ-h" style="margin-top:18px">Cloud DC vs AI factory</h4>' +
        '<div class="map-infra-compare">' +
          '<div class="map-infra-compare-row map-infra-compare-row--head"><div>Axis</div><div>Cloud data centre</div><div>AI factory</div></div>' +
          f.comparison.map(function (c) {
            return '<div class="map-infra-compare-row">' +
              '<div class="map-infra-compare-axis">' + esc(c.axis) + '</div>' +
              '<div>' + esc(c.cloud) + '</div>' +
              '<div>' + esc(c.factory) + '</div>' +
            '</div>';
          }).join('') +
        '</div>' +

        '<p class="map-infra-block-call"><strong>Why it matters</strong>' + esc(f.punchline) + '</p>' +
      '</div>' +

      '<div class="map-infra-block">' +
        '<h3 class="map-infra-block-h">' + esc(r.headline) + '</h3>' +
        '<p class="map-infra-block-sub">Production AI must handle uptime, failover, regional outages, data privacy, abuse monitoring, audit logs and compliance. The metrics below are what the on-call SRE actually watches.</p>' +

        '<h4 class="map-infra-econ-h">Reliability metrics</h4>' +
        '<div class="map-infra-metrics">' +
          r.metrics.map(function (m) {
            return '<div class="map-infra-metric">' +
              '<h5 class="map-infra-metric-h">' + esc(m.h) + '</h5>' +
              '<p class="map-infra-metric-d">' + esc(m.d) + '</p>' +
            '</div>';
          }).join('') +
        '</div>' +

        '<h4 class="map-infra-econ-h" style="margin-top:18px">Security + governance topics</h4>' +
        '<ul class="map-infra-block-list">' +
          r.topics.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') +
        '</ul>' +

        '<h4 class="map-infra-econ-h" style="margin-top:18px">Incident flow</h4>' +
        '<div class="map-infra-mini">' +
          r.incidentFlow.map(function (s) {
            return '<div class="map-infra-mini-card">' +
              '<h5 class="map-infra-mini-h">' + esc(s.h) + '</h5>' +
              '<p class="map-infra-mini-d">' + esc(s.d) + '</p>' +
            '</div>';
          }).join('') +
        '</div>' +

        '<p class="map-infra-block-call"><strong>Why it matters</strong>' + esc(r.punchline) + '</p>' +
      '</div>';
  }

  /* ============================================
     ECONOMICS — calculator + bottlenecks
     ============================================ */
  function bindCalculator() {
    var ids = ['gpus', 'watts', 'util', 'pue', 'price', 'hwcost', 'depr', 'tps'];
    var fields = ids.map(function (k) { return $('#map-infra-calc-' + k); });
    var outIT = $('#map-infra-calc-itpower');
    var outFac = $('#map-infra-calc-facpower');
    var outTwh = $('#map-infra-calc-twh');
    var outElec = $('#map-infra-calc-elec');
    var outDepr = $('#map-infra-calc-depr-y');
    var outGph = $('#map-infra-calc-gph');
    var outCpm = $('#map-infra-calc-cpm');
    if (!fields.every(Boolean)) return;

    function recalc() {
      var gpus  = parseFloat(fields[0].value)  || 0;
      var watts = parseFloat(fields[1].value)  || 0;
      var util  = (parseFloat(fields[2].value) || 0) / 100;
      var pue   = parseFloat(fields[3].value)  || 1;
      var price = parseFloat(fields[4].value)  || 0;
      var hwCost = parseFloat(fields[5].value) || 0;
      var deprY = parseFloat(fields[6].value) || 1;
      var tps   = parseFloat(fields[7].value)  || 0;

      var itPowerMW  = (gpus * watts) / 1e6;
      var facMW = itPowerMW * pue;
      var twh = facMW * util * 8760 / 1e6;
      var kwh = twh * 1e9;
      var elecCost = kwh * price;
      var deprAnnual = (gpus * hwCost) / Math.max(deprY, 0.5);
      var totalAnnual = elecCost + deprAnnual;
      var gpuHours = gpus * util * 8760;
      var gphCost = gpuHours > 0 ? totalAnnual / gpuHours : 0;
      var annualTokens = gpus * util * tps * 31536000; // tokens/sec/GPU × seconds/year
      var costPerMTokens = annualTokens > 0 ? totalAnnual / (annualTokens / 1e6) : 0;

      if (outIT)   outIT.textContent   = fmtPower(itPowerMW);
      if (outFac)  outFac.textContent  = fmtPower(facMW);
      if (outTwh)  outTwh.textContent  = fmtEnergy(twh);
      if (outElec) outElec.textContent = money(elecCost) + ' / yr';
      if (outDepr) outDepr.textContent = money(deprAnnual) + ' / yr';
      if (outGph)  outGph.textContent  = '$' + (Math.round(gphCost * 100) / 100).toLocaleString();
      if (outCpm)  outCpm.textContent  = '$' + (Math.round(costPerMTokens * 100) / 100).toLocaleString();
    }
    fields.forEach(function (i) { i.addEventListener('input', recalc); });
    recalc();
  }

  function bindPresets() {
    var el = $('#map-infra-presets');
    if (!el || typeof INFRA_CALC_PRESETS === 'undefined') return;
    el.innerHTML = INFRA_CALC_PRESETS.map(function (p) {
      var label = p.gpus >= 10000 ? Math.round(p.gpus / 1000) + 'k GPUs'
                : p.gpus >= 1000  ? Math.round(p.gpus / 1000) + 'k GPUs'
                : p.gpus + ' GPUs';
      return '<button class="map-infra-preset" type="button" data-preset="' + esc(p.id) + '" title="' + esc(p.tag) + '">' +
        '<span class="map-infra-preset-mw">' + label + '</span>' +
        '<span class="map-infra-preset-name">' + esc(p.label) + '</span>' +
      '</button>';
    }).join('');

    el.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('.map-infra-preset');
      if (!btn) return;
      var p = INFRA_CALC_PRESETS.filter(function (x) { return x.id === btn.dataset.preset; })[0];
      if (!p) return;
      var fields = { gpus: p.gpus, watts: p.watts, util: p.util, pue: p.pue, price: p.price, hwcost: p.hwCost, depr: p.deprYears, tps: p.tps };
      Object.keys(fields).forEach(function (k) {
        var input = $('#map-infra-calc-' + k);
        if (input) {
          input.value = fields[k];
          input.dispatchEvent(new Event('input', { bubbles: true }));
        }
      });
      $$('.map-infra-preset').forEach(function (b) { b.classList.toggle('is-active', b === btn); });
    });
  }

  function renderBottlenecks() {
    var el = $('#map-infra-bottle');
    if (!el || typeof INFRA_BOTTLENECKS === 'undefined') return;
    el.innerHTML =
      '<div class="map-infra-bottle-row map-infra-bottle-row--head"><div>Symptom</div><div>Likely cause</div></div>' +
      INFRA_BOTTLENECKS.map(function (b) {
        return '<div class="map-infra-bottle-row">' +
          '<div class="map-infra-bottle-symptom">' + esc(b.symptom) + '</div>' +
          '<div>' + esc(b.causes) + '</div>' +
        '</div>';
      }).join('');
  }

  /* ============================================
     STRATEGIC SUMMARY + SOURCES
     ============================================ */
  function renderTakeaways() {
    var el = $('#map-infra-take-list');
    if (!el || typeof INFRA_TAKEAWAYS === 'undefined') return;
    el.innerHTML = INFRA_TAKEAWAYS.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
  }

  function renderSources() {
    var el = $('#map-infra-sources-grouped');
    if (!el || typeof INFRA_SOURCES_GROUPED === 'undefined') return;
    el.innerHTML = INFRA_SOURCES_GROUPED.map(function (g) {
      return '<div>' +
        '<h4 class="map-infra-srcgrp-h">' + esc(g.group) + '</h4>' +
        '<ul class="map-infra-srcgrp-list">' +
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
    renderPrimitives();
    renderLadder();
    renderMisconceptions();
    renderStack();
    renderTraining();
    renderInference();
    renderFabric();
    renderOrchestration();
    renderFactory();
    bindPresets();
    bindCalculator();
    renderBottlenecks();
    renderTakeaways();
    renderSources();

    selectTab('basics', false);

    var h = (window.location.hash || '').replace(/^#/, '');
    if (h.indexOf('infra-') === 0) {
      var t = h.replace('infra-', '');
      if (['basics', 'stack', 'training', 'inference', 'fabric', 'orchestration', 'factory', 'economics'].indexOf(t) >= 0) {
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
