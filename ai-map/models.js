/* ============================================
   MODELS DEEP DIVE — Render + Interaction
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
    return '$' + (Math.round(n * 100) / 100);
  }

  /* ============================================
     INTEL SUMMARY + FLOW + PILLS
     ============================================ */
  function renderIntel() {
    var el = $('#map-models-intel');
    if (!el || typeof MODELS_INTEL_SUMMARY === 'undefined') return;
    el.innerHTML = MODELS_INTEL_SUMMARY.map(function (item, i) {
      var n = (i + 1).toString().padStart(2, '0');
      return '<article class="map-models-intel-card">' +
        '<span class="map-models-intel-num">' + n + '</span>' +
        '<h3 class="map-models-intel-h">' + esc(item.h) + '</h3>' +
        '<p class="map-models-intel-d">' + esc(item.d) + '</p>' +
      '</article>';
    }).join('');
  }

  function renderFlow() {
    var el = $('#map-models-flow');
    if (!el || typeof MODELS_FLOW === 'undefined') return;
    el.innerHTML = MODELS_FLOW.map(function (s) {
      return '<div class="map-models-flow-step">' +
        '<div class="map-models-flow-dot"></div>' +
        '<h4 class="map-models-flow-h">' + esc(s.h) + '</h4>' +
        '<p class="map-models-flow-d">' + esc(s.d) + '</p>' +
      '</div>';
    }).join('');
  }

  function renderPills() {
    var el = $('#map-models-pills');
    if (!el || typeof MODELS_TOPICS === 'undefined') return;
    el.innerHTML = MODELS_TOPICS.map(function (t) {
      return '<button class="map-models-pill" type="button" data-tab="' + esc(t.tab) + '" aria-label="' + esc(t.label) + '">' +
        '<div class="map-models-pill-label">' + esc(t.id.replace(/-/g, ' ')) + '</div>' +
        '<h3 class="map-models-pill-title">' + esc(t.label) + '</h3>' +
        '<p class="map-models-pill-text">' + esc(t.short) + '</p>' +
      '</button>';
    }).join('');
    el.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('.map-models-pill');
      if (btn && btn.dataset.tab) selectTab(btn.dataset.tab, true);
    });
  }

  /* ============================================
     TABS
     ============================================ */
  function selectTab(id, scroll) {
    $$('.map-models-tab').forEach(function (b) {
      var on = b.dataset.tab === id;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      b.setAttribute('tabindex', on ? '0' : '-1');
    });
    $$('.map-models-pane').forEach(function (p) {
      p.classList.toggle('is-active', p.dataset.tab === id);
    });
    if (scroll) {
      var section = $('#models-deep-dive');
      if (section) {
        var top = section.getBoundingClientRect().top + window.pageYOffset - 70;
        window.scrollTo(0, top);
      }
    }
  }
  function bindTabs() {
    $$('.map-models-tab').forEach(function (b) {
      b.addEventListener('click', function () { selectTab(b.dataset.tab, false); });
      b.addEventListener('keydown', function (e) {
        if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
        e.preventDefault();
        var tabs = $$('.map-models-tab');
        var i = tabs.indexOf(document.activeElement);
        if (i < 0) i = tabs.indexOf(b);
        var n = e.key === 'ArrowRight' ? (i + 1) % tabs.length : (i - 1 + tabs.length) % tabs.length;
        tabs[n].focus();
        selectTab(tabs[n].dataset.tab, false);
      });
    });
  }

  /* ============================================
     BASICS — primitives + confusions + misconceptions
     ============================================ */
  function renderPrimitives() {
    var el = $('#map-models-prims');
    if (!el || typeof MODELS_PRIMITIVES === 'undefined') return;
    el.innerHTML = MODELS_PRIMITIVES.map(function (p) {
      return '<article class="map-models-prim">' +
        '<h3 class="map-models-prim-h">' + esc(p.h) + '</h3>' +
        '<p class="map-models-prim-d">' + esc(p.d) + '</p>' +
      '</article>';
    }).join('');
  }

  function renderConfusions() {
    var el = $('#map-models-confusion');
    if (!el || typeof MODELS_CONFUSIONS === 'undefined') return;
    el.innerHTML = MODELS_CONFUSIONS.map(function (c) {
      return '<article class="map-models-conf">' +
        '<p class="map-models-conf-wrong">' + esc(c.wrong) + '</p>' +
        '<p class="map-models-conf-right">' + esc(c.right) + '</p>' +
      '</article>';
    }).join('');
  }

  function renderMisconceptions() {
    var el = $('#map-models-myths');
    if (!el || typeof MODELS_MISCONCEPTIONS === 'undefined') return;
    el.innerHTML = MODELS_MISCONCEPTIONS.map(function (m) {
      return '<article class="map-models-myth">' +
        '<p class="map-models-myth-h"><span class="map-models-myth-tag">Myth</span>' + esc(m.myth) + '</p>' +
        '<p class="map-models-myth-d"><span class="map-models-myth-tag map-models-myth-tag--truth">Truth</span>' + m.truth + '</p>' +
      '</article>';
    }).join('');
  }

  /* ============================================
     STACK
     ============================================ */
  function renderStack() {
    var el = $('#map-models-stack');
    if (!el || typeof MODELS_STACK === 'undefined') return;
    el.innerHTML = MODELS_STACK.map(function (s) {
      return '<article class="map-models-stack-row">' +
        '<div class="map-models-stack-num">' + esc(s.n) + '</div>' +
        '<div>' +
          '<h3 class="map-models-stack-h">' + esc(s.h) + '</h3>' +
          '<div class="map-models-stack-items">' +
            s.items.map(function (i) { return '<span class="map-models-stack-pill">' + esc(i) + '</span>'; }).join('') +
          '</div>' +
          '<p class="map-models-stack-note">' + esc(s.note) + '</p>' +
        '</div>' +
      '</article>';
    }).join('');
  }

  /* ============================================
     TRANSFORMER
     ============================================ */
  function renderTransformer() {
    var el = $('#map-models-transformer');
    if (!el || typeof MODELS_TRANSFORMER === 'undefined') return;
    var t = MODELS_TRANSFORMER;
    el.innerHTML =
      '<h3 class="map-models-block-h">' + esc(t.headline) + '</h3>' +
      '<p class="map-models-block-sub">' + esc(t.framing) + '</p>' +

      '<h4 class="map-models-econ-h">From text to next-token</h4>' +
      '<div class="map-models-mini">' +
        t.flow.map(function (s) {
          return '<div class="map-models-mini-card">' +
            '<h5 class="map-models-mini-h">' + esc(s.h) + '</h5>' +
            '<p class="map-models-mini-d">' + esc(s.d) + '</p>' +
          '</div>';
        }).join('') +
      '</div>' +

      '<h4 class="map-models-econ-h" style="margin-top:18px">Key concepts</h4>' +
      '<div class="map-models-mini">' +
        t.concepts.map(function (c) {
          return '<div class="map-models-mini-card">' +
            '<h5 class="map-models-mini-h">' + esc(c.h) + '</h5>' +
            '<p class="map-models-mini-d">' + esc(c.d) + '</p>' +
          '</div>';
        }).join('') +
      '</div>' +

      '<p class="map-models-block-call"><strong>Why it matters</strong>' + esc(t.punchline) + '</p>';
  }

  /* ============================================
     FAMILIES
     ============================================ */
  function renderFamilies() {
    var el = $('#map-models-families');
    if (!el || typeof MODELS_FAMILIES === 'undefined') return;
    el.innerHTML = MODELS_FAMILIES.map(function (f) {
      return '<article class="map-models-fam">' +
        '<p class="map-models-fam-tag">' + esc(f.short) + '</p>' +
        '<h3 class="map-models-fam-h">' + esc(f.name) + '</h3>' +
        '<p class="map-models-fam-row"><strong>Best</strong>' + esc(f.best) + '</p>' +
        '<p class="map-models-fam-row"><strong>Weak</strong>' + esc(f.weak) + '</p>' +
        '<p class="map-models-fam-eg">' + esc(f.examples) + '</p>' +
      '</article>';
    }).join('');
  }

  /* ============================================
     TRAINING PIPELINE
     ============================================ */
  function renderTrainingPipeline() {
    var el = $('#map-models-pipeline');
    if (!el || typeof MODELS_TRAINING_PIPELINE === 'undefined') return;
    el.innerHTML = MODELS_TRAINING_PIPELINE.map(function (s, i) {
      var n = (i + 1).toString().padStart(2, '0');
      return '<div class="map-models-mini-card">' +
        '<h5 class="map-models-mini-h"><span class="map-models-mini-n">' + n + '</span>' + esc(s.h) + '</h5>' +
        '<p class="map-models-mini-d">' + esc(s.d) + '</p>' +
      '</div>';
    }).join('');
  }

  /* ============================================
     REASONING
     ============================================ */
  function renderReasoning() {
    var el = $('#map-models-reasoning');
    if (!el || typeof MODELS_REASONING === 'undefined') return;
    var r = MODELS_REASONING;
    el.innerHTML =
      '<h3 class="map-models-block-h">' + esc(r.headline) + '</h3>' +
      '<p class="map-models-block-sub">' + esc(r.framing) + '</p>' +

      '<h4 class="map-models-econ-h">Key concepts</h4>' +
      '<div class="map-models-mini">' +
        r.concepts.map(function (c) {
          return '<div class="map-models-mini-card">' +
            '<h5 class="map-models-mini-h">' + esc(c.h) + '</h5>' +
            '<p class="map-models-mini-d">' + esc(c.d) + '</p>' +
          '</div>';
        }).join('') +
      '</div>' +

      '<h4 class="map-models-econ-h" style="margin-top:18px">Fast model vs reasoning model</h4>' +
      '<div class="map-models-rtable">' +
        '<div class="map-models-rrow map-models-rrow--head"><div>Dimension</div><div>Fast model</div><div>Reasoning model</div></div>' +
        r.comparison.map(function (row) {
          return '<div class="map-models-rrow">' +
            '<div class="map-models-rrow-axis">' + esc(row.axis) + '</div>' +
            '<div>' + esc(row.fast) + '</div>' +
            '<div>' + esc(row.reason) + '</div>' +
          '</div>';
        }).join('') +
      '</div>' +

      '<div class="map-models-when">' +
        '<div class="map-models-when-card use">' +
          '<h4 class="map-models-when-h">Use reasoning for</h4>' +
          '<ul>' + r.whenUse.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>' +
        '</div>' +
        '<div class="map-models-when-card avoid">' +
          '<h4 class="map-models-when-h">Avoid reasoning for</h4>' +
          '<ul>' + r.whenAvoid.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>' +
        '</div>' +
      '</div>' +

      '<p class="map-models-block-call"><strong>Why it matters</strong>' + esc(r.punchline) + '</p>';
  }

  /* ============================================
     MULTIMODAL
     ============================================ */
  function renderMultimodal() {
    var el = $('#map-models-multimodal');
    if (!el || typeof MODELS_MULTIMODAL === 'undefined') return;
    var m = MODELS_MULTIMODAL;
    el.innerHTML =
      '<h3 class="map-models-block-h">' + esc(m.headline) + '</h3>' +
      '<p class="map-models-block-sub">' + esc(m.framing) + '</p>' +

      '<h4 class="map-models-econ-h">Modalities</h4>' +
      '<div class="map-models-mini">' +
        m.modalities.map(function (M) {
          return '<div class="map-models-mini-card">' +
            '<h5 class="map-models-mini-h">' + esc(M.h) + '</h5>' +
            '<p class="map-models-mini-d">' + esc(M.d) + '</p>' +
          '</div>';
        }).join('') +
      '</div>' +

      '<h4 class="map-models-econ-h" style="margin-top:18px">Concepts</h4>' +
      '<ul class="map-models-block-list">' +
        m.concepts.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') +
      '</ul>' +

      '<h4 class="map-models-econ-h" style="margin-top:8px">Use cases</h4>' +
      '<ul class="map-models-block-list">' +
        m.useCases.map(function (u) { return '<li>' + esc(u) + '</li>'; }).join('') +
      '</ul>' +

      '<p class="map-models-block-call"><strong>Warning</strong>' + esc(m.warning) + '</p>';
  }

  /* ============================================
     OPEN vs CLOSED + LANDSCAPE
     ============================================ */
  function renderOpenClosed() {
    var el = $('#map-models-oc');
    var dec = $('#map-models-decision');
    if (!el || typeof MODELS_OPEN_CLOSED === 'undefined') return;
    var oc = MODELS_OPEN_CLOSED;

    function card(o, cls) {
      return '<div class="map-models-oc-card ' + cls + '">' +
        '<h4 class="map-models-oc-h">' + esc(o.h) + '</h4>' +
        '<p class="map-models-oc-eg">' + esc(o.examples) + '</p>' +
        '<p class="map-models-oc-list-h">Strength</p>' +
        '<ul>' + o.strong.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
        '<p class="map-models-oc-list-h weak-h">Weakness</p>' +
        '<ul>' + o.weak.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
      '</div>';
    }

    el.innerHTML = card(oc.closed, 'closed') + card(oc.open, 'open') + card(oc.edge, 'edge');

    if (dec) {
      dec.innerHTML =
        '<div class="map-models-dec-card closed"><h4 class="map-models-dec-h">Closed API when…</h4>' +
          '<ul>' + oc.decisionClose.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul></div>' +
        '<div class="map-models-dec-card open"><h4 class="map-models-dec-h">Open / self-host when…</h4>' +
          '<ul>' + oc.decisionOpen.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul></div>' +
        '<div class="map-models-dec-card hybrid"><h4 class="map-models-dec-h">Hybrid (most realistic)</h4>' +
          '<ul>' + oc.decisionHybrid.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul></div>';
    }
  }

  function renderLandscape() {
    var el = $('#map-models-landscape');
    if (!el || typeof MODELS_LANDSCAPE === 'undefined') return;
    var L = MODELS_LANDSCAPE;
    function card(c, cls) {
      return '<article class="map-models-ls-card' + (cls ? ' ' + cls : '') + '">' +
        '<h4 class="map-models-ls-name">' + esc(c.h) + '</h4>' +
        '<p class="map-models-ls-row"><strong>Strong</strong>' + esc(c.strong || c.d) + '</p>' +
        (c.why ? '<p class="map-models-ls-row"><strong>Why it matters</strong>' + esc(c.why) + '</p>' : '') +
        (c.risk ? '<p class="map-models-ls-row"><strong>Risk</strong>' + esc(c.risk) + '</p>' : '') +
      '</article>';
    }
    el.innerHTML =
      '<h4 class="map-models-econ-h">Closed frontier labs</h4>' +
      '<div class="map-models-landscape-row">' + L.closed.map(function (c) { return card(c); }).join('') + '</div>' +
      '<h4 class="map-models-econ-h" style="margin-top:18px">Open-weight ecosystems</h4>' +
      '<div class="map-models-landscape-row">' + L.open.map(function (c) { return card(c); }).join('') + '</div>' +
      '<h4 class="map-models-econ-h" style="margin-top:18px">Specialist categories</h4>' +
      '<div class="map-models-landscape-row">' + L.specialists.map(function (c) { return card(c, 'specialist'); }).join('') + '</div>';
  }

  /* ============================================
     SELECTION MATRIX
     ============================================ */
  function pillFor(value) {
    var cls = 'map-models-sel-pill ';
    var key = String(value).toLowerCase();
    if (key === 'low' || key === 'very low') cls += 'map-models-sel-pill--low';
    else if (key === 'medium') cls += 'map-models-sel-pill--med';
    else cls += 'map-models-sel-pill--high';
    return '<span class="' + cls + '">' + esc(value) + '</span>';
  }

  function renderSelection() {
    var el = $('#map-models-selection');
    if (!el || typeof MODELS_SELECTION_MATRIX === 'undefined') return;
    el.innerHTML =
      '<table class="map-models-sel-table">' +
        '<thead><tr>' +
          '<th>Workload</th>' +
          '<th>Best model type</th>' +
          '<th>Key capability</th>' +
          '<th>Latency sensitivity</th>' +
          '<th>Cost sensitivity</th>' +
          '<th>Risk</th>' +
          '<th>Evaluation</th>' +
          '<th>What to avoid</th>' +
        '</tr></thead>' +
        '<tbody>' +
          MODELS_SELECTION_MATRIX.map(function (r) {
            return '<tr>' +
              '<td class="map-models-sel-workload">' + esc(r.workload) + '</td>' +
              '<td class="map-models-sel-type">' + esc(r.type) + '</td>' +
              '<td class="map-models-sel-cap">' + esc(r.cap) + '</td>' +
              '<td>' + pillFor(r.latency) + '</td>' +
              '<td>' + pillFor(r.cost) + '</td>' +
              '<td>' + pillFor(r.risk) + '</td>' +
              '<td>' + esc(r.eval) + '</td>' +
              '<td>' + esc(r.avoid) + '</td>' +
            '</tr>';
          }).join('') +
        '</tbody>' +
      '</table>';
  }

  /* ============================================
     KNOWLEDGE — RAG/FT/LC/MEM/TOOL
     ============================================ */
  function renderKnowledge() {
    var el = $('#map-models-knowledge');
    if (!el || typeof MODELS_KNOWLEDGE === 'undefined') return;
    var K = MODELS_KNOWLEDGE;
    function card(c) {
      return '<article class="map-models-know-card">' +
        '<h4 class="map-models-know-h">' + esc(c.h) + '</h4>' +
        '<p class="map-models-know-row"><strong>Best</strong>' + esc(c.best) + '</p>' +
        '<p class="map-models-know-row"><strong>Weak</strong>' + esc(c.weak) + '</p>' +
      '</article>';
    }
    el.innerHTML =
      '<div class="map-models-know">' +
        card(K.rag) + card(K.ft) + card(K.lc) + card(K.mem) + card(K.tool) +
      '</div>' +
      '<p class="map-models-block-call"><strong>Misconception</strong>' + esc(K.punchline) + '</p>';
  }

  /* ============================================
     AGENTS
     ============================================ */
  function renderAgents() {
    var el = $('#map-models-agents');
    if (!el || typeof MODELS_AGENTS === 'undefined') return;
    var A = MODELS_AGENTS;
    el.innerHTML =
      '<h3 class="map-models-block-h">' + esc(A.headline) + '</h3>' +
      '<p class="map-models-block-sub">' + esc(A.framing) + '</p>' +

      '<h4 class="map-models-econ-h">The agent loop</h4>' +
      '<div class="map-models-loop">' +
        A.loop.map(function (s) {
          return '<div class="map-models-loop-step">' +
            '<h5 class="map-models-loop-h">' + esc(s.h) + '</h5>' +
            '<p class="map-models-loop-d">' + esc(s.d) + '</p>' +
          '</div>';
        }).join('') +
      '</div>' +

      '<h4 class="map-models-econ-h" style="margin-top:18px">Concepts</h4>' +
      '<ul class="map-models-block-list">' +
        A.concepts.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') +
      '</ul>' +

      '<h4 class="map-models-econ-h" style="margin-top:8px">Where agents fail</h4>' +
      '<ul class="map-models-block-list">' +
        A.failures.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') +
      '</ul>' +

      '<p class="map-models-block-call"><strong>Strategic note</strong>' + esc(A.punchline) + '</p>';
  }

  /* ============================================
     EVALUATION
     ============================================ */
  function renderEval() {
    var el = $('#map-models-eval');
    if (!el || typeof MODELS_EVAL === 'undefined') return;
    var E = MODELS_EVAL;
    el.innerHTML =
      '<h3 class="map-models-block-h">' + esc(E.headline) + '</h3>' +
      '<p class="map-models-block-sub">Benchmarks measure narrow skills. Real products need a portfolio.</p>' +

      '<h4 class="map-models-econ-h">Benchmark categories</h4>' +
      '<div class="map-models-eval">' +
        E.categories.map(function (c) {
          return '<div class="map-models-eval-card">' +
            '<h5 class="map-models-eval-h">' + esc(c.h) + '</h5>' +
            '<p class="map-models-eval-d">' + esc(c.d) + '</p>' +
          '</div>';
        }).join('') +
      '</div>' +

      '<h4 class="map-models-econ-h" style="margin-top:18px">The evaluation stack</h4>' +
      '<div class="map-models-eval">' +
        E.evalStack.map(function (s) {
          return '<div class="map-models-eval-card">' +
            '<h5 class="map-models-eval-h">' + esc(s.h) + '</h5>' +
            '<p class="map-models-eval-d">' + esc(s.d) + '</p>' +
          '</div>';
        }).join('') +
      '</div>' +

      '<p class="map-models-block-call"><strong>Warning</strong>' + esc(E.warning) + '</p>';
  }

  /* ============================================
     SAFETY
     ============================================ */
  function renderSafety() {
    var el = $('#map-models-safety');
    if (!el || typeof MODELS_SAFETY === 'undefined') return;
    var S = MODELS_SAFETY;
    el.innerHTML =
      '<h3 class="map-models-block-h">' + esc(S.headline) + '</h3>' +
      '<p class="map-models-block-sub">' + esc(S.framing) + '</p>' +

      '<div class="map-models-safety">' +
        '<div class="map-models-safety-card risks">' +
          '<h4 class="map-models-safety-h">Risks</h4>' +
          '<ul>' + S.risks.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>' +
        '</div>' +
        '<div class="map-models-safety-card controls">' +
          '<h4 class="map-models-safety-h">Controls</h4>' +
          '<ul>' + S.controls.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>' +
        '</div>' +
      '</div>' +

      '<p class="map-models-block-call"><strong>Strategic note</strong>' + esc(S.punchline) + '</p>';
  }

  /* ============================================
     ECONOMICS — calculator
     ============================================ */
  function renderBottlenecks() {
    var el = $('#map-models-bottle');
    if (!el || typeof MODELS_BOTTLENECKS === 'undefined') return;
    el.innerHTML =
      '<div class="map-models-bottle-row map-models-bottle-row--head"><div>Symptom</div><div>Likely cause</div><div>First check</div><div>Fix pattern</div></div>' +
      MODELS_BOTTLENECKS.map(function (b) {
        return '<div class="map-models-bottle-row">' +
          '<div class="map-models-bottle-symptom">' + esc(b.symptom) + '</div>' +
          '<div>' + esc(b.cause) + '</div>' +
          '<div>' + esc(b.check) + '</div>' +
          '<div class="map-models-bottle-fix">' + esc(b.fix) + '</div>' +
        '</div>';
      }).join('');
  }

  function bindCalculator() {
    var ids = ['intok', 'outtok', 'reqday', 'inprice', 'outprice', 'reasonmul', 'cache', 'retrieval', 'review'];
    var fields = ids.map(function (k) { return $('#map-models-calc-' + k); });
    var outIn = $('#map-models-calc-daily-in');
    var outOut = $('#map-models-calc-daily-out');
    var outMonthly = $('#map-models-calc-monthly');
    var outPerUser = $('#map-models-calc-per-user');
    var outPerTask = $('#map-models-calc-per-task');
    if (!fields.every(Boolean)) return;

    function recalc() {
      var inTok  = parseFloat(fields[0].value) || 0;
      var outTok = parseFloat(fields[1].value) || 0;
      var reqDay = parseFloat(fields[2].value) || 0;
      var inPrice  = parseFloat(fields[3].value) || 0; // $ per million input tokens
      var outPrice = parseFloat(fields[4].value) || 0; // $ per million output tokens
      var reasonMul = parseFloat(fields[5].value) || 1; // multiplies output tokens
      var cache  = (parseFloat(fields[6].value) || 0) / 100;
      var retrieval = parseFloat(fields[7].value) || 0; // $ per request
      var review = (parseFloat(fields[8].value) || 0) / 100;

      var effIn = inTok * (1 - cache);
      var effOut = outTok * reasonMul;
      var dailyInTokens = reqDay * effIn;
      var dailyOutTokens = reqDay * effOut;
      var monthlyInTokens = dailyInTokens * 30;
      var monthlyOutTokens = dailyOutTokens * 30;
      var monthlyTokenCost = (monthlyInTokens / 1e6) * inPrice + (monthlyOutTokens / 1e6) * outPrice;
      var monthlyRetrievalCost = retrieval * reqDay * 30;
      var monthlyReviewCost = review * reqDay * 30 * 0.50; // assume $0.50 / human-touch (illustrative)
      var monthlyTotal = monthlyTokenCost + monthlyRetrievalCost + monthlyReviewCost;

      var assumedDAU = 1000;
      var perUser = monthlyTotal / assumedDAU;
      var perTask = reqDay > 0 ? monthlyTotal / (reqDay * 30) : 0;

      function fmtTok(n) {
        if (n >= 1e9) return (Math.round(n / 1e8) / 10) + 'B tok';
        if (n >= 1e6) return (Math.round(n / 1e5) / 10) + 'M tok';
        if (n >= 1e3) return (Math.round(n / 1e2) / 10) + 'K tok';
        return Math.round(n) + ' tok';
      }
      if (outIn) outIn.textContent = fmtTok(dailyInTokens);
      if (outOut) outOut.textContent = fmtTok(dailyOutTokens);
      if (outMonthly) outMonthly.textContent = money(monthlyTotal) + ' / mo';
      if (outPerUser) outPerUser.textContent = '$' + (Math.round(perUser * 100) / 100).toLocaleString() + ' / DAU';
      if (outPerTask) outPerTask.textContent = '$' + (Math.round(perTask * 1000) / 1000).toLocaleString() + ' / task';
    }
    fields.forEach(function (i) { i.addEventListener('input', recalc); });
    recalc();
  }

  function bindPresets() {
    var el = $('#map-models-presets');
    if (!el || typeof MODELS_CALC_PRESETS === 'undefined') return;
    el.innerHTML = MODELS_CALC_PRESETS.map(function (p) {
      return '<button class="map-models-preset" type="button" data-preset="' + esc(p.id) + '" title="' + esc(p.tag) + '">' +
        '<span>' + esc(p.label) + '</span>' +
      '</button>';
    }).join('');
    el.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('.map-models-preset');
      if (!btn) return;
      var p = MODELS_CALC_PRESETS.filter(function (x) { return x.id === btn.dataset.preset; })[0];
      if (!p) return;
      var fields = {
        intok: p.inTok, outtok: p.outTok, reqday: p.reqDay,
        inprice: p.inPrice, outprice: p.outPrice, reasonmul: p.reasonMul,
        cache: p.cache * 100, retrieval: p.retrieval, review: p.review * 100
      };
      Object.keys(fields).forEach(function (k) {
        var input = $('#map-models-calc-' + k);
        if (input) {
          input.value = fields[k];
          input.dispatchEvent(new Event('input', { bubbles: true }));
        }
      });
      $$('.map-models-preset').forEach(function (b) { b.classList.toggle('is-active', b === btn); });
    });
  }

  /* ============================================
     REFERENCE ARCHITECTURES
     ============================================ */
  function renderRefArchs() {
    var el = $('#map-models-refarch');
    if (!el || typeof MODELS_REFERENCE_ARCHS === 'undefined') return;
    el.innerHTML = MODELS_REFERENCE_ARCHS.map(function (a) {
      return '<article class="map-models-arch-card">' +
        '<div class="map-models-arch-head">' +
          '<span class="map-models-arch-letter">' + esc(a.id) + '</span>' +
          '<div>' +
            '<h4 class="map-models-arch-title">' + esc(a.title) + '</h4>' +
            '<p class="map-models-arch-when">' + esc(a.when) + '</p>' +
          '</div>' +
        '</div>' +
        '<ul class="map-models-arch-blocks">' +
          a.blocks.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') +
        '</ul>' +
      '</article>';
    }).join('');
  }

  /* ============================================
     STRATEGIC SUMMARY + SOURCES
     ============================================ */
  function renderTakeaways() {
    var el = $('#map-models-take-list');
    if (!el || typeof MODELS_TAKEAWAYS === 'undefined') return;
    el.innerHTML = MODELS_TAKEAWAYS.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
  }

  function renderSources() {
    var el = $('#map-models-sources-grouped');
    if (!el || typeof MODELS_SOURCES_GROUPED === 'undefined') return;
    el.innerHTML = MODELS_SOURCES_GROUPED.map(function (g) {
      return '<div>' +
        '<h4 class="map-models-srcgrp-h">' + esc(g.group) + '</h4>' +
        '<ul class="map-models-srcgrp-list">' +
          g.items.map(function (s) {
            return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.label) + '</a></li>';
          }).join('') +
        '</ul>' +
      '</div>';
    }).join('');
  }

  /* ============================================
     PROMPT-TO-OUTCOME FLOW
     ============================================ */
  function renderOutcomeFlow() {
    var el = $('#map-models-outcome-flow');
    if (!el || typeof MODELS_OUTCOME_FLOW === 'undefined') return;
    el.innerHTML = MODELS_OUTCOME_FLOW.map(function (s, i) {
      var n = (i + 1).toString().padStart(2, '0');
      return '<div class="map-models-mini-card">' +
        '<h5 class="map-models-mini-h"><span class="map-models-mini-n">' + n + '</span>' + esc(s.h) + '</h5>' +
        '<p class="map-models-mini-d">' + esc(s.d) + '</p>' +
      '</div>';
    }).join('');
  }

  /* ============================================
     SYSTEM PATTERNS — 7 cards
     ============================================ */
  function renderSystemPatterns() {
    var el = $('#map-models-patterns');
    if (!el || typeof MODELS_SYSTEM_PATTERNS === 'undefined') return;
    el.innerHTML = MODELS_SYSTEM_PATTERNS.map(function (p) {
      return '<article class="map-models-pat">' +
        '<div class="map-models-pat-head">' +
          '<span class="map-models-pat-letter">' + esc(p.id) + '</span>' +
          '<h4 class="map-models-pat-name">' + esc(p.name) + '</h4>' +
        '</div>' +
        '<ul class="map-models-pat-blocks">' +
          p.blocks.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') +
        '</ul>' +
        '<dl class="map-models-pat-meta">' +
          '<dt>Best for</dt><dd>' + esc(p.best) + '</dd>' +
          '<dt>Breaks when</dt><dd class="map-models-pat-breaks">' + esc(p.breaks) + '</dd>' +
        '</dl>' +
      '</article>';
    }).join('');
  }

  /* ============================================
     RAG / FT / LC / MEM / TOOLS DECISION TREE
     ============================================ */
  function renderDecisionTree() {
    var el = $('#map-models-tree');
    if (!el || typeof MODELS_DECISION_TREE === 'undefined') return;
    var t = MODELS_DECISION_TREE;
    el.innerHTML =
      '<h3 class="map-models-block-h">' + esc(t.headline) + '</h3>' +
      '<div class="map-models-tree">' +
        t.steps.map(function (s, i) {
          var n = (i + 1).toString().padStart(2, '0');
          return '<div class="map-models-tree-step">' +
            '<div class="map-models-tree-num">Q' + n + '</div>' +
            '<div>' +
              '<p class="map-models-tree-q">' + esc(s.q) + '</p>' +
              '<p class="map-models-tree-a">' + esc(s.a) + '</p>' +
            '</div>' +
          '</div>';
        }).join('') +
      '</div>' +
      '<p class="map-models-block-call"><strong>Strong line</strong>' + esc(t.punchline) + '</p>';
  }

  /* ============================================
     MODEL ROUTING LADDER
     ============================================ */
  function renderRoutingLadder() {
    var el = $('#map-models-routing');
    if (!el || typeof MODELS_ROUTING_LADDER === 'undefined') return;
    el.innerHTML =
      '<h3 class="map-models-block-h">Model routing strategy — the escalation ladder</h3>' +
      '<p class="map-models-block-sub">Strong AI products rarely send every request to the most expensive model. Each rung adds capability and cost; escalate only when the previous rung does not earn its keep.</p>' +
      '<div class="map-models-ladder">' +
        MODELS_ROUTING_LADDER.map(function (r) {
          return '<div class="map-models-ladder-row">' +
            '<div class="map-models-ladder-num">' + esc(r.lvl) + '</div>' +
            '<div>' +
              '<h4 class="map-models-ladder-h">' + esc(r.name) + '</h4>' +
              '<p class="map-models-ladder-d">' + esc(r.d) + '</p>' +
            '</div>' +
          '</div>';
        }).join('') +
      '</div>' +
      '<h4 class="map-models-econ-h" style="margin-top:18px">When to escalate</h4>' +
      '<ul class="map-models-block-list">' +
        MODELS_ROUTING_ESCALATE.map(function (e) { return '<li>' + esc(e) + '</li>'; }).join('') +
      '</ul>';
  }

  /* ============================================
     REASONING — when helps / when wastes / 4-tier comparison
     ============================================ */
  function renderReasoningTiers() {
    var el = $('#map-models-reasoning-tiers');
    if (!el || typeof MODELS_REASONING_TIERS === 'undefined') return;
    el.innerHTML =
      '<h3 class="map-models-block-h">Fast · reasoning · tool-assisted · human review</h3>' +
      '<p class="map-models-block-sub">When to spend reasoning, when to use tools, when to involve a person. Cost and risk go up the line; latency goes down (in the bad way).</p>' +
      '<div class="map-models-tiers">' +
        '<div class="map-models-tiers-row map-models-tiers-row--head"><div>Dimension</div><div>Fast model</div><div>Reasoning model</div><div>Tool-assisted reasoning</div><div>Human review</div></div>' +
        MODELS_REASONING_TIERS.map(function (r) {
          return '<div class="map-models-tiers-row">' +
            '<div class="map-models-tiers-axis">' + esc(r.axis) + '</div>' +
            '<div>' + esc(r.fast) + '</div>' +
            '<div>' + esc(r.reason) + '</div>' +
            '<div>' + esc(r.tool) + '</div>' +
            '<div>' + esc(r.human) + '</div>' +
          '</div>';
        }).join('') +
      '</div>' +

      '<div class="map-models-when">' +
        '<div class="map-models-when-card use">' +
          '<h4 class="map-models-when-h">When reasoning helps</h4>' +
          '<ul>' + MODELS_REASONING_HELPS.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>' +
        '</div>' +
        '<div class="map-models-when-card avoid">' +
          '<h4 class="map-models-when-h">When reasoning wastes money</h4>' +
          '<ul>' + MODELS_REASONING_WASTES.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>' +
        '</div>' +
      '</div>' +

      '<p class="map-models-block-call"><strong>Warning</strong>More reasoning tokens do not guarantee truth. Reasoning improves search through possible answers, but the model can still reason from false assumptions or bad context.</p>';
  }

  /* ============================================
     EVALUATION HARNESS
     ============================================ */
  function renderEvalHarness() {
    var el = $('#map-models-eval-harness');
    if (!el || typeof MODELS_EVAL_HARNESS === 'undefined') return;
    var H = MODELS_EVAL_HARNESS;
    el.innerHTML =
      '<h3 class="map-models-block-h">Evaluation harness</h3>' +
      '<p class="map-models-block-sub">A repeatable pipeline. Build it once; reuse it for every model decision the team makes.</p>' +

      '<h4 class="map-models-econ-h">The pipeline</h4>' +
      '<div class="map-models-mini">' +
        H.pipeline.map(function (s) {
          return '<div class="map-models-mini-card">' +
            '<h5 class="map-models-mini-h">' + esc(s.h) + '</h5>' +
            '<p class="map-models-mini-d">' + esc(s.d) + '</p>' +
          '</div>';
        }).join('') +
      '</div>' +

      '<h4 class="map-models-econ-h" style="margin-top:18px">Evaluation types</h4>' +
      '<div class="map-models-mini">' +
        H.types.map(function (t) {
          return '<div class="map-models-mini-card">' +
            '<h5 class="map-models-mini-h">' + esc(t.h) + '</h5>' +
            '<p class="map-models-mini-d">' + esc(t.d) + '</p>' +
          '</div>';
        }).join('') +
      '</div>' +

      '<h4 class="map-models-econ-h" style="margin-top:18px">Minimum viable eval set</h4>' +
      '<p class="map-models-block-sub">If you have nothing else, ship this. Total: 110 examples. Hand-curated, locked, versioned.</p>' +
      '<div class="map-models-mvp">' +
        H.minViable.map(function (m) {
          return '<div class="map-models-mvp-row">' +
            '<div class="map-models-mvp-n">' + esc(String(m.n)) + '</div>' +
            '<div>' +
              '<h5 class="map-models-mvp-h">' + esc(m.label) + '</h5>' +
              '<p class="map-models-mvp-d">' + esc(m.d) + '</p>' +
            '</div>' +
          '</div>';
        }).join('') +
      '</div>' +

      '<p class="map-models-block-call"><strong>Strong line</strong>' + esc(H.punchline) + '</p>';
  }

  /* ============================================
     OBSERVABILITY CONTROL ROOM
     ============================================ */
  function renderObservability() {
    var el = $('#map-models-obs');
    if (!el || typeof MODELS_OBSERVABILITY === 'undefined') return;
    var O = MODELS_OBSERVABILITY;
    el.innerHTML =
      '<h3 class="map-models-block-h">Model observability — production control room</h3>' +
      '<p class="map-models-block-call"><strong>Mantra</strong>' + esc(O.headline) + '</p>' +
      '<div class="map-models-obs-grid">' +
        O.metrics.map(function (m) {
          return '<div class="map-models-obs-card">' +
            '<h5 class="map-models-obs-h">' + esc(m.h) + '</h5>' +
            '<p class="map-models-obs-d">' + esc(m.d) + '</p>' +
          '</div>';
        }).join('') +
      '</div>' +
      '<p class="map-models-block-call"><strong>Punchline</strong>' + esc(O.punchline) + '</p>';
  }

  /* ============================================
     BAD PATTERNS
     ============================================ */
  function renderBadPatterns() {
    var el = $('#map-models-bad');
    if (!el || typeof MODELS_BAD_PATTERNS === 'undefined') return;
    el.innerHTML = MODELS_BAD_PATTERNS.map(function (p) {
      return '<article class="map-models-bad-card">' +
        '<h5 class="map-models-bad-h">' + esc(p.h) + '</h5>' +
        '<p class="map-models-bad-d">' + esc(p.d) + '</p>' +
      '</article>';
    }).join('');
  }

  /* ============================================
     MATURITY MODEL
     ============================================ */
  function renderMaturity() {
    var el = $('#map-models-maturity');
    if (!el || typeof MODELS_MATURITY === 'undefined') return;
    el.innerHTML = MODELS_MATURITY.map(function (m) {
      return '<div class="map-models-mat-row">' +
        '<div class="map-models-mat-lvl">L' + esc(m.lvl) + '</div>' +
        '<div>' +
          '<h4 class="map-models-mat-name">' + esc(m.name) + '</h4>' +
          '<p class="map-models-mat-d">' + esc(m.d) + '</p>' +
          '<p class="map-models-mat-tells"><strong>Tells:</strong> ' + esc(m.tells) + '</p>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  /* ============================================
     LANDSCAPE BY ROLE
     ============================================ */
  function renderLandscapeByRole() {
    var el = $('#map-models-landscape-role');
    if (!el || typeof MODELS_LANDSCAPE_BY_ROLE === 'undefined') return;
    el.innerHTML = MODELS_LANDSCAPE_BY_ROLE.map(function (r) {
      return '<article class="map-models-role-card">' +
        '<h4 class="map-models-role-h">' + esc(r.h) + '</h4>' +
        '<p class="map-models-role-d">' + esc(r.d) + '</p>' +
        '<dl class="map-models-role-meta">' +
          '<dt>Where it fits</dt><dd>' + esc(r.fits) + '</dd>' +
          '<dt>Main trade-off</dt><dd>' + esc(r.tradeoff) + '</dd>' +
          '<dt>What to evaluate</dt><dd>' + esc(r.evaluate) + '</dd>' +
        '</dl>' +
      '</article>';
    }).join('');
  }

  /* ============================================
     ARCHITECTURE EXAMPLES — flow lanes
     ============================================ */
  function renderArchExamples() {
    var el = $('#map-models-arch-examples');
    if (!el || typeof MODELS_ARCH_EXAMPLES === 'undefined') return;
    el.innerHTML = MODELS_ARCH_EXAMPLES.map(function (a) {
      return '<article class="map-models-archex">' +
        '<div class="map-models-archex-head">' +
          '<span class="map-models-archex-letter">' + esc(a.id) + '</span>' +
          '<h4 class="map-models-archex-h">' + esc(a.h) + '</h4>' +
        '</div>' +
        '<div class="map-models-archex-flow">' +
          a.flow.map(function (s, i, arr) {
            return '<span class="map-models-archex-step">' + esc(s) + '</span>' + (i < arr.length - 1 ? '<span class="map-models-archex-arrow">→</span>' : '');
          }).join('') +
        '</div>' +
      '</article>';
    }).join('');
  }

  /* ============================================
     ECONOMICS INTERPRETATION
     ============================================ */
  function renderEconInterpret() {
    var el = $('#map-models-econ-interpret');
    if (!el || typeof MODELS_ECON_INTERPRET === 'undefined') return;
    var E = MODELS_ECON_INTERPRET;
    el.innerHTML =
      '<h3 class="map-models-block-h">' + esc(E.headline) + '</h3>' +
      '<div class="map-models-mini">' +
        E.questions.map(function (q) {
          return '<div class="map-models-mini-card">' +
            '<h5 class="map-models-mini-h">' + esc(q.q) + '</h5>' +
            '<p class="map-models-mini-d">' + esc(q.d) + '</p>' +
          '</div>';
        }).join('') +
      '</div>' +
      '<p class="map-models-block-call"><strong>Punchline</strong>' + E.punchline + '</p>';
  }

  /* ============================================
     SAFETY AS SYSTEM DESIGN
     ============================================ */
  function renderSafetySystem() {
    var el = $('#map-models-safety-system');
    if (!el || typeof MODELS_SAFETY_SYSTEM === 'undefined') return;
    var S = MODELS_SAFETY_SYSTEM;
    el.innerHTML =
      '<h3 class="map-models-block-h">Safety as system design</h3>' +
      '<p class="map-models-block-sub">' + esc(S.headline) + '</p>' +

      '<h4 class="map-models-econ-h">Nine control surfaces</h4>' +
      '<div class="map-models-mini">' +
        S.surfaces.map(function (s) {
          return '<div class="map-models-mini-card">' +
            '<h5 class="map-models-mini-h">' + esc(s.h) + '</h5>' +
            '<p class="map-models-mini-d">' + esc(s.d) + '</p>' +
          '</div>';
        }).join('') +
      '</div>' +

      '<h4 class="map-models-econ-h" style="margin-top:18px">Controls to put in place</h4>' +
      '<ul class="map-models-block-list">' +
        S.controls.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') +
      '</ul>';
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
    renderConfusions();
    renderMisconceptions();
    renderStack();
    renderTransformer();
    renderFamilies();
    renderTrainingPipeline();
    renderReasoning();
    renderMultimodal();
    renderOpenClosed();
    renderLandscape();
    renderSelection();
    renderKnowledge();
    renderAgents();
    renderEval();
    renderSafety();
    renderBottlenecks();
    renderOutcomeFlow();
    renderSystemPatterns();
    renderDecisionTree();
    renderRoutingLadder();
    renderReasoningTiers();
    renderEvalHarness();
    renderObservability();
    renderBadPatterns();
    renderMaturity();
    renderLandscapeByRole();
    renderArchExamples();
    renderEconInterpret();
    renderSafetySystem();
    bindPresets();
    bindCalculator();
    renderRefArchs();
    renderTakeaways();
    renderSources();

    selectTab('basics', false);

    var h = (window.location.hash || '').replace(/^#/, '');
    if (h.indexOf('models-') === 0) {
      var t = h.replace('models-', '');
      if (['basics', 'stack', 'training', 'building', 'open-closed', 'evaluation', 'safety', 'economics'].indexOf(t) >= 0) {
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
