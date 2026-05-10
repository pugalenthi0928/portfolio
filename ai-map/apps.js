/* ============================================
   APPLICATIONS DEEP DIVE — Render + Interaction
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
    var sign = n < 0 ? '-' : '';
    n = Math.abs(n);
    if (n >= 1e9)  return sign + '$' + (Math.round(n / 1e8) / 10) + 'B';
    if (n >= 1e6)  return sign + '$' + (Math.round(n / 1e5) / 10) + 'M';
    if (n >= 1e3)  return sign + '$' + Math.round(n).toLocaleString();
    return sign + '$' + (Math.round(n * 100) / 100);
  }

  /* ============================================
     INTEL + FLOW + PILLS
     ============================================ */
  function renderIntel() {
    var el = $('#map-apps-intel');
    if (!el || typeof APPS_INTEL_SUMMARY === 'undefined') return;
    el.innerHTML = APPS_INTEL_SUMMARY.map(function (item, i) {
      var n = (i + 1).toString().padStart(2, '0');
      return '<article class="map-apps-intel-card">' +
        '<span class="map-apps-intel-num">' + n + '</span>' +
        '<h3 class="map-apps-intel-h">' + esc(item.h) + '</h3>' +
        '<p class="map-apps-intel-d">' + esc(item.d) + '</p>' +
      '</article>';
    }).join('');
  }
  function renderFlow() {
    var el = $('#map-apps-flow');
    if (!el || typeof APPS_FLOW === 'undefined') return;
    el.innerHTML = APPS_FLOW.map(function (s) {
      return '<div class="map-apps-flow-step">' +
        '<div class="map-apps-flow-dot"></div>' +
        '<h4 class="map-apps-flow-h">' + esc(s.h) + '</h4>' +
        '<p class="map-apps-flow-d">' + esc(s.d) + '</p>' +
      '</div>';
    }).join('');
  }
  function renderPills() {
    var el = $('#map-apps-pills');
    if (!el || typeof APPS_TOPICS === 'undefined') return;
    el.innerHTML = APPS_TOPICS.map(function (t) {
      return '<button class="map-apps-pill" type="button" data-tab="' + esc(t.tab) + '" aria-label="' + esc(t.label) + '">' +
        '<div class="map-apps-pill-label">' + esc(t.id.replace(/-/g, ' ')) + '</div>' +
        '<h3 class="map-apps-pill-title">' + esc(t.label) + '</h3>' +
        '<p class="map-apps-pill-text">' + esc(t.short) + '</p>' +
      '</button>';
    }).join('');
    el.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('.map-apps-pill');
      if (btn && btn.dataset.tab) selectTab(btn.dataset.tab, true);
    });
  }

  /* ============================================
     TABS
     ============================================ */
  function selectTab(id, scroll) {
    $$('.map-apps-tab').forEach(function (b) {
      var on = b.dataset.tab === id;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      b.setAttribute('tabindex', on ? '0' : '-1');
    });
    $$('.map-apps-pane').forEach(function (p) {
      p.classList.toggle('is-active', p.dataset.tab === id);
    });
    if (scroll) {
      var section = $('#apps-deep-dive');
      if (section) {
        var top = section.getBoundingClientRect().top + window.pageYOffset - 70;
        window.scrollTo(0, top);
      }
    }
  }
  function bindTabs() {
    $$('.map-apps-tab').forEach(function (b) {
      b.addEventListener('click', function () { selectTab(b.dataset.tab, false); });
      b.addEventListener('keydown', function (e) {
        if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
        e.preventDefault();
        var tabs = $$('.map-apps-tab');
        var i = tabs.indexOf(document.activeElement);
        if (i < 0) i = tabs.indexOf(b);
        var n = e.key === 'ArrowRight' ? (i + 1) % tabs.length : (i - 1 + tabs.length) % tabs.length;
        tabs[n].focus();
        selectTab(tabs[n].dataset.tab, false);
      });
    });
  }

  /* ============================================
     BASICS — primitives + confusions + maturity + misconceptions
     ============================================ */
  function renderPrimitives() {
    var el = $('#map-apps-prims');
    if (!el || typeof APPS_PRIMITIVES === 'undefined') return;
    el.innerHTML = APPS_PRIMITIVES.map(function (p) {
      return '<article class="map-apps-prim">' +
        '<h3 class="map-apps-prim-h">' + esc(p.h) + '</h3>' +
        '<p class="map-apps-prim-d">' + esc(p.d) + '</p>' +
      '</article>';
    }).join('');
  }
  function renderConfusions() {
    var el = $('#map-apps-confusion');
    if (!el || typeof APPS_CONFUSIONS === 'undefined') return;
    el.innerHTML = APPS_CONFUSIONS.map(function (c) {
      return '<article class="map-apps-conf">' +
        '<p class="map-apps-conf-wrong">' + esc(c.wrong) + '</p>' +
        '<p class="map-apps-conf-right">' + esc(c.right) + '</p>' +
      '</article>';
    }).join('');
  }
  function renderMisconceptions() {
    var el = $('#map-apps-myths');
    if (!el || typeof APPS_MISCONCEPTIONS === 'undefined') return;
    el.innerHTML = APPS_MISCONCEPTIONS.map(function (m) {
      return '<article class="map-apps-myth">' +
        '<p class="map-apps-myth-h"><span class="map-apps-myth-tag">Myth</span>' + esc(m.myth) + '</p>' +
        '<p class="map-apps-myth-d"><span class="map-apps-myth-tag map-apps-myth-tag--truth">Truth</span>' + m.truth + '</p>' +
      '</article>';
    }).join('');
  }
  function renderMaturity() {
    var el = $('#map-apps-maturity');
    if (!el || typeof APPS_MATURITY === 'undefined') return;
    el.innerHTML = APPS_MATURITY.map(function (m) {
      return '<div class="map-apps-mat-row">' +
        '<div class="map-apps-mat-lvl">L' + esc(m.lvl) + '</div>' +
        '<div>' +
          '<h4 class="map-apps-mat-name">' + esc(m.name) + '</h4>' +
          '<p class="map-apps-mat-d">' + esc(m.d) + '</p>' +
          '<p class="map-apps-mat-tells"><strong>Tells:</strong> ' + esc(m.tells) + '</p>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  /* ============================================
     STACK & DEMO-VS-PRODUCT
     ============================================ */
  function renderStack() {
    var el = $('#map-apps-stack');
    if (!el || typeof APPS_STACK === 'undefined') return;
    el.innerHTML = APPS_STACK.map(function (s) {
      return '<article class="map-apps-stack-row">' +
        '<div class="map-apps-stack-num">' + esc(s.n) + '</div>' +
        '<div>' +
          '<h3 class="map-apps-stack-h">' + esc(s.h) + '</h3>' +
          '<div class="map-apps-stack-items">' +
            s.items.map(function (i) { return '<span class="map-apps-stack-pill">' + esc(i) + '</span>'; }).join('') +
          '</div>' +
          '<p class="map-apps-stack-note">' + esc(s.note) + '</p>' +
        '</div>' +
      '</article>';
    }).join('');
  }
  function renderDemoVsProduct() {
    var el = $('#map-apps-dvp');
    if (!el || typeof APPS_DEMO_VS_PRODUCT === 'undefined') return;
    el.innerHTML =
      '<div class="map-apps-dvp-row map-apps-dvp-row--head">' +
        '<div>Axis</div><div>Demo</div><div>Product</div><div>Platform</div>' +
      '</div>' +
      APPS_DEMO_VS_PRODUCT.map(function (r) {
        return '<div class="map-apps-dvp-row">' +
          '<div class="map-apps-dvp-axis">' + esc(r.axis) + '</div>' +
          '<div data-col="Demo">' + esc(r.demo) + '</div>' +
          '<div data-col="Product">' + esc(r.product) + '</div>' +
          '<div data-col="Platform">' + esc(r.platform) + '</div>' +
        '</div>';
      }).join('') +
      '<p class="map-apps-block-call"><strong>Core idea</strong>A demo impresses once. A product earns repeated use. A platform becomes part of how work gets done.</p>';
  }

  /* ============================================
     PATTERNS + UX
     ============================================ */
  function renderPatterns() {
    var el = $('#map-apps-patterns');
    if (!el || typeof APPS_PATTERNS === 'undefined') return;
    el.innerHTML = APPS_PATTERNS.map(function (p) {
      return '<article class="map-apps-pat">' +
        '<div class="map-apps-pat-head">' +
          '<span class="map-apps-pat-num">' + esc(p.id) + '</span>' +
          '<h4 class="map-apps-pat-name">' + esc(p.name) + '</h4>' +
        '</div>' +
        '<p class="map-apps-pat-row"><strong>Best for</strong>' + esc(p.best) + '</p>' +
        '<p class="map-apps-pat-row"><strong>Risk</strong>' + esc(p.risk) + '</p>' +
        '<p class="map-apps-pat-eg">' + esc(p.example) + '</p>' +
      '</article>';
    }).join('');
  }
  function renderUx() {
    var el = $('#map-apps-ux');
    if (!el || typeof APPS_UX_PATTERNS === 'undefined') return;
    el.innerHTML =
      '<h3 class="map-apps-block-h">UX patterns for AI applications</h3>' +
      '<p class="map-apps-block-sub">AI UX is different — outputs are probabilistic. Use the right surface for the job; "chat" is one option of many.</p>' +
      '<div class="map-apps-ux-pills">' +
        APPS_UX_PATTERNS.map(function (p) { return '<span class="map-apps-ux-pill">' + esc(p) + '</span>'; }).join('') +
      '</div>' +
      '<h4 class="map-apps-econ-h" style="margin-top:18px">Design principles</h4>' +
      '<div class="map-apps-mini">' +
        APPS_UX_PRINCIPLES.map(function (p) {
          return '<div class="map-apps-mini-card">' +
            '<h5 class="map-apps-mini-h">' + esc(p.h) + '</h5>' +
            '<p class="map-apps-mini-d">' + esc(p.d) + '</p>' +
          '</div>';
        }).join('') +
      '</div>' +
      '<p class="map-apps-block-call"><strong>Warning</strong>Chat is not always the best interface. Many AI apps should feel like better workflows, not better conversations.</p>';
  }

  /* ============================================
     WORKFLOW WEDGES — start narrow
     ============================================ */
  function renderWedges() {
    var el = $('#map-apps-wedges');
    if (!el || typeof APPS_WEDGES === 'undefined') return;
    el.innerHTML =
      '<h3 class="map-apps-block-h">The workflow wedge</h3>' +
      '<p class="map-apps-block-sub">The best AI products usually start with one narrow workflow wedge, not a giant platform. Here is what those wedges look like across high-AI-leverage industries.</p>' +
      '<div class="map-apps-wedges">' +
        APPS_WEDGES.map(function (w) {
          return '<article class="map-apps-wedge">' +
            '<div class="map-apps-wedge-head">' +
              '<h4 class="map-apps-wedge-h">' + esc(w.h) + '</h4>' +
              '<p class="map-apps-wedge-d">' + esc(w.d) + '</p>' +
            '</div>' +
            '<div class="map-apps-wedge-chain">' +
              w.chain.map(function (s, i, arr) {
                return '<span class="map-apps-wedge-step">' + esc(s) + '</span>' +
                  (i < arr.length - 1 ? '<span class="map-apps-wedge-arrow">→</span>' : '');
              }).join('') +
            '</div>' +
          '</article>';
        }).join('') +
      '</div>' +
      '<p class="map-apps-block-call"><strong>Strong line</strong>' + esc(APPS_WEDGES_RULE) + '</p>';
  }

  /* ============================================
     VALUE & INDUSTRIES
     ============================================ */
  function renderValue() {
    var el = $('#map-apps-value');
    if (!el || typeof APPS_VALUE_LEVERS === 'undefined') return;
    el.innerHTML = APPS_VALUE_LEVERS.map(function (v) {
      return '<article class="map-apps-value-card">' +
        '<h4 class="map-apps-value-h">' + esc(v.h) + '</h4>' +
        '<p class="map-apps-value-d">' + esc(v.d) + '</p>' +
      '</article>';
    }).join('');
  }
  function renderValueTest() {
    var el = $('#map-apps-value-test');
    if (!el || typeof APPS_VALUE_TEST === 'undefined') return;
    el.innerHTML =
      '<h4 class="map-apps-econ-h">The value test</h4>' +
      '<p class="map-apps-block-sub">An AI application is valuable if it clearly improves at least one of:</p>' +
      '<ul class="map-apps-block-list">' +
        APPS_VALUE_TEST.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') +
      '</ul>';
  }
  function renderIndustries() {
    var el = $('#map-apps-industries');
    if (!el || typeof APPS_INDUSTRIES === 'undefined') return;
    el.innerHTML = APPS_INDUSTRIES.map(function (ind) {
      return '<article class="map-apps-ind-card">' +
        '<h4 class="map-apps-ind-h">' + esc(ind.h) + '</h4>' +
        '<dl class="map-apps-ind-meta">' +
          '<dt>Best AI use cases</dt><dd>' + esc(ind.cases) + '</dd>' +
          '<dt>Workflow wedge</dt><dd>' + esc(ind.wedge) + '</dd>' +
          '<dt>Data advantage</dt><dd>' + esc(ind.data) + '</dd>' +
          '<dt class="risk-h">Trust / risk</dt><dd>' + esc(ind.risk) + '</dd>' +
          '<dt>Monetisation</dt><dd>' + esc(ind.money) + '</dd>' +
          '<dt class="avoid-h">Avoid</dt><dd>' + esc(ind.avoid) + '</dd>' +
        '</dl>' +
      '</article>';
    }).join('');
  }

  /* ============================================
     VERTICAL vs HORIZONTAL
     ============================================ */
  function renderVerticalHorizontal() {
    var el = $('#map-apps-vh');
    if (!el || typeof APPS_VERTICAL_HORIZONTAL === 'undefined') return;
    var vh = APPS_VERTICAL_HORIZONTAL;
    el.innerHTML =
      '<div class="map-apps-vh-pair">' +
        '<div class="map-apps-vh-card h">' +
          '<h4 class="map-apps-vh-h">' + esc(vh.horizontal.h) + '</h4>' +
          '<p class="map-apps-vh-list-h">Best</p><p class="map-apps-block-sub">' + esc(vh.horizontal.best) + '</p>' +
          '<p class="map-apps-vh-list-h">Weak</p><p class="map-apps-block-sub">' + esc(vh.horizontal.weak) + '</p>' +
        '</div>' +
        '<div class="map-apps-vh-card v">' +
          '<h4 class="map-apps-vh-h">' + esc(vh.vertical.h) + '</h4>' +
          '<p class="map-apps-vh-list-h">Best</p><p class="map-apps-block-sub">' + esc(vh.vertical.best) + '</p>' +
          '<p class="map-apps-vh-list-h">Weak</p><p class="map-apps-block-sub">' + esc(vh.vertical.weak) + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="map-apps-vh-pair">' +
        '<div class="map-apps-vh-card v">' +
          '<h4 class="map-apps-vh-h">Vertical wins when…</h4>' +
          '<ul>' + vh.verticalWins.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>' +
        '</div>' +
        '<div class="map-apps-vh-card h">' +
          '<h4 class="map-apps-vh-h">Horizontal wins when…</h4>' +
          '<ul>' + vh.horizontalWins.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>' +
        '</div>' +
      '</div>' +
      '<h4 class="map-apps-econ-h" style="margin-top:14px">Concrete head-to-heads</h4>' +
      '<ul class="map-apps-block-list">' +
        vh.examples.map(function (e) { return '<li>' + esc(e) + '</li>'; }).join('') +
      '</ul>';
  }

  /* ============================================
     AGENTS — architecture + types + failures
     ============================================ */
  function renderAgents() {
    var el = $('#map-apps-agents');
    if (!el || typeof APPS_AGENT_ARCH === 'undefined') return;
    el.innerHTML =
      '<h3 class="map-apps-block-h">Useful agents are constrained workflow systems</h3>' +
      '<p class="map-apps-block-sub">Agents become useful when they are bounded, tool-connected, observable and integrated. The more power an agent has, the more guardrails it needs.</p>' +

      '<h4 class="map-apps-econ-h">The agent loop</h4>' +
      '<div class="map-apps-loop">' +
        APPS_AGENT_ARCH.map(function (s) {
          return '<div class="map-apps-loop-step">' +
            '<h5 class="map-apps-loop-h">' + esc(s.h) + '</h5>' +
            '<p class="map-apps-loop-d">' + esc(s.d) + '</p>' +
          '</div>';
        }).join('') +
      '</div>' +

      '<h4 class="map-apps-econ-h" style="margin-top:18px">Agent types</h4>' +
      '<div class="map-apps-mini">' +
        APPS_AGENT_TYPES.map(function (t) {
          return '<div class="map-apps-mini-card">' +
            '<h5 class="map-apps-mini-h">' + esc(t.h) + '</h5>' +
            '<p class="map-apps-mini-d">' + esc(t.d) + '</p>' +
          '</div>';
        }).join('') +
      '</div>' +

      '<h4 class="map-apps-econ-h" style="margin-top:18px">Where agents fail</h4>' +
      '<ul class="map-apps-block-list">' +
        APPS_AGENT_FAILURES.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') +
      '</ul>' +

      '<h4 class="map-apps-econ-h" style="margin-top:24px">Agent usefulness test</h4>' +
      '<p class="map-apps-block-sub">Before turning a workflow into an agent, answer these ten questions honestly. If most are "no", a deterministic pipeline or a copilot will out-ship the agent.</p>' +
      '<ol class="map-apps-agent-test">' +
        APPS_AGENT_TEST.map(function (t, i) {
          var n = (i + 1).toString().padStart(2, '0');
          return '<li class="map-apps-agent-test-row">' +
            '<span class="map-apps-agent-test-num">' + n + '</span>' +
            '<div>' +
              '<p class="map-apps-agent-test-q">' + esc(t.q) + '</p>' +
              '<p class="map-apps-agent-test-d">' + esc(t.d) + '</p>' +
            '</div>' +
          '</li>';
        }).join('') +
      '</ol>' +

      '<p class="map-apps-block-call"><strong>Strategic note</strong>' + esc(APPS_AGENT_TEST_PUNCHLINE) + '</p>';
  }

  /* ============================================
     ADOPTION + ARCH EXAMPLES + SELECTION + MOATS + PLAYBOOK
     ============================================ */
  function renderAdoption() {
    var el = $('#map-apps-adoption');
    if (!el || typeof APPS_ADOPTION === 'undefined') return;
    var A = APPS_ADOPTION;
    el.innerHTML =
      '<h3 class="map-apps-block-h">Why AI apps are hard to deploy inside companies</h3>' +
      '<p class="map-apps-block-sub">Enterprise blockers are rarely about the model. They are about trust, integration, governance and ROI.</p>' +

      '<h4 class="map-apps-econ-h">Common blockers</h4>' +
      '<ul class="map-apps-block-list">' +
        A.blockers.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') +
      '</ul>' +

      '<h4 class="map-apps-econ-h" style="margin-top:18px">The adoption path</h4>' +
      '<div class="map-apps-adoption-path">' +
        A.path.map(function (s, i) {
          var n = (i + 1).toString().padStart(2, '0');
          return '<div class="map-apps-adoption-step">' +
            '<div class="map-apps-adoption-num">' + n + '</div>' +
            '<div>' +
              '<h5 class="map-apps-adoption-h">' + esc(s.h) + '</h5>' +
              '<p class="map-apps-adoption-d">' + esc(s.d) + '</p>' +
            '</div>' +
          '</div>';
        }).join('') +
      '</div>' +

      '<h4 class="map-apps-econ-h" style="margin-top:18px">Buyer questions every product must answer</h4>' +
      '<ul class="map-apps-block-list">' +
        A.buyerQuestions.map(function (q) { return '<li>' + esc(q) + '</li>'; }).join('') +
      '</ul>' +

      '<p class="map-apps-block-call"><strong>Strong line</strong>' + esc(A.punchline) + '</p>';
  }

  function renderArchExamples() {
    var el = $('#map-apps-arch-examples');
    if (!el || typeof APPS_ARCH_EXAMPLES === 'undefined') return;
    el.innerHTML = APPS_ARCH_EXAMPLES.map(function (a) {
      return '<article class="map-apps-archex">' +
        '<div class="map-apps-archex-head">' +
          '<span class="map-apps-archex-letter">' + esc(a.id) + '</span>' +
          '<h4 class="map-apps-archex-h">' + esc(a.h) + '</h4>' +
        '</div>' +
        '<div class="map-apps-archex-flow">' +
          a.flow.map(function (s, i, arr) {
            return '<span class="map-apps-archex-step">' + esc(s) + '</span>' +
              (i < arr.length - 1 ? '<span class="map-apps-archex-arrow">→</span>' : '');
          }).join('') +
        '</div>' +
      '</article>';
    }).join('');
  }

  function renderSelection() {
    var el = $('#map-apps-selection');
    if (!el || typeof APPS_SELECTION_CRITERIA === 'undefined') return;
    el.innerHTML =
      '<h3 class="map-apps-block-h">Which AI app is worth building?</h3>' +
      '<p class="map-apps-block-sub">A practical scoring matrix. Score each criterion 1–5 for your candidate workflow. Add the scores; high totals point to an opportunity, low totals to a hobby project.</p>' +

      '<div class="map-apps-criteria">' +
        APPS_SELECTION_CRITERIA.map(function (c) {
          return '<div class="map-apps-crit">' +
            '<h5 class="map-apps-crit-h">' + esc(c.h) + '</h5>' +
            '<p class="map-apps-crit-d">' + esc(c.d) + '</p>' +
          '</div>';
        }).join('') +
      '</div>' +

      '<div class="map-apps-guide-pair">' +
        '<div class="map-apps-guide good">' +
          '<h4 class="map-apps-guide-h">Good AI app opportunity</h4>' +
          '<ul>' + APPS_SELECTION_GUIDE.good.map(function (g) { return '<li>' + esc(g) + '</li>'; }).join('') + '</ul>' +
        '</div>' +
        '<div class="map-apps-guide bad">' +
          '<h4 class="map-apps-guide-h">Bad AI app opportunity</h4>' +
          '<ul>' + APPS_SELECTION_GUIDE.bad.map(function (g) { return '<li>' + esc(g) + '</li>'; }).join('') + '</ul>' +
        '</div>' +
      '</div>' +

      '<p class="map-apps-block-call"><strong>Strong line</strong>' + esc(APPS_SELECTION_GUIDE.punchline) + '</p>';
  }

  function renderMoats() {
    var el = $('#map-apps-moats');
    if (!el || typeof APPS_MOATS_STRONG === 'undefined') return;
    el.innerHTML =
      '<h3 class="map-apps-block-h">What makes an AI app defensible?</h3>' +
      '<p class="map-apps-block-sub">A model API alone is not a moat. The durable AI app is closest to the user\'s recurring, valuable, high-context workflow.</p>' +
      '<div class="map-apps-moats">' +
        '<div class="map-apps-moat-card strong">' +
          '<h4 class="map-apps-moat-h">Strong moats</h4>' +
          '<ul>' + APPS_MOATS_STRONG.map(function (m) { return '<li>' + esc(m) + '</li>'; }).join('') + '</ul>' +
        '</div>' +
        '<div class="map-apps-moat-card weak">' +
          '<h4 class="map-apps-moat-h">Weak moats</h4>' +
          '<ul>' + APPS_MOATS_WEAK.map(function (m) { return '<li>' + esc(m) + '</li>'; }).join('') + '</ul>' +
        '</div>' +
      '</div>' +
      '<p class="map-apps-block-call"><strong>Punchline</strong>The durable AI app is not the one with the best prompt. It is the one closest to the user\'s recurring, valuable, high-context workflow.</p>';
  }

  function renderPlaybook() {
    var el = $('#map-apps-playbook');
    if (!el || typeof APPS_PLAYBOOK === 'undefined') return;
    el.innerHTML = APPS_PLAYBOOK.map(function (s) {
      return '<div class="map-apps-play-step">' +
        '<div class="map-apps-play-num">' + esc(s.n) + '</div>' +
        '<div>' +
          '<h5 class="map-apps-play-h">' + esc(s.h) + '</h5>' +
          '<p class="map-apps-play-d">' + esc(s.d) + '</p>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  function renderBadPatterns() {
    var el = $('#map-apps-bad');
    if (!el || typeof APPS_BAD_PATTERNS === 'undefined') return;
    el.innerHTML = APPS_BAD_PATTERNS.map(function (p) {
      return '<article class="map-apps-bad-card">' +
        '<h5 class="map-apps-bad-h">' + esc(p.h) + '</h5>' +
        '<p class="map-apps-bad-d">' + esc(p.d) + '</p>' +
      '</article>';
    }).join('');
  }

  /* ============================================
     METRICS + RISKS + BOTTLENECKS
     ============================================ */
  function renderMetrics() {
    var el = $('#map-apps-metrics');
    if (!el || typeof APPS_METRICS === 'undefined') return;
    var groups = [
      { key: 'user',        h: 'User metrics' },
      { key: 'quality',     h: 'Quality metrics' },
      { key: 'operational', h: 'Operational metrics' },
      { key: 'business',    h: 'Business metrics' },
      { key: 'risk',        h: 'Risk metrics' }
    ];
    el.innerHTML = groups.map(function (g) {
      var list = APPS_METRICS[g.key] || [];
      return '<article class="map-apps-metric">' +
        '<h4 class="map-apps-metric-h">' + esc(g.h) + '</h4>' +
        '<div class="map-apps-metric-list">' +
          list.map(function (m) { return '<span class="map-apps-metric-pill">' + esc(m) + '</span>'; }).join('') +
        '</div>' +
      '</article>';
    }).join('');
  }
  function renderRoi() {
    var el = $('#map-apps-roi');
    if (!el || typeof APPS_ROI_NOTE === 'undefined') return;
    el.innerHTML =
      '<p class="map-apps-block-call"><strong>ROI formula</strong>' + esc(APPS_ROI_NOTE) + '</p>' +
      '<p class="map-apps-block-call"><strong>Punchline</strong>' + esc(APPS_ROI_PUNCHLINE) + '</p>';
  }
  function renderRisks() {
    var el = $('#map-apps-risks');
    if (!el || typeof APPS_RISKS === 'undefined') return;
    el.innerHTML =
      '<div class="map-apps-risk-pair">' +
        '<div class="map-apps-risk-card risks">' +
          '<h4 class="map-apps-risk-h">Risks</h4>' +
          '<ul>' + APPS_RISKS.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ul>' +
        '</div>' +
        '<div class="map-apps-risk-card controls">' +
          '<h4 class="map-apps-risk-h">Controls</h4>' +
          '<ul>' + APPS_CONTROLS.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') + '</ul>' +
        '</div>' +
      '</div>' +
      '<p class="map-apps-block-call"><strong>Trust principle</strong>' + esc(APPS_TRUST_PRINCIPLE) + '</p>';
  }
  function renderBottlenecks() {
    var el = $('#map-apps-bottle');
    if (!el || typeof APPS_BOTTLENECKS === 'undefined') return;
    el.innerHTML =
      '<div class="map-apps-bottle-row map-apps-bottle-row--head"><div>Symptom</div><div>Likely cause</div><div>First check</div><div>Fix pattern</div></div>' +
      APPS_BOTTLENECKS.map(function (b) {
        return '<div class="map-apps-bottle-row">' +
          '<div class="map-apps-bottle-symptom">' + esc(b.symptom) + '</div>' +
          '<div>' + esc(b.cause) + '</div>' +
          '<div>' + esc(b.check) + '</div>' +
          '<div class="map-apps-bottle-fix">' + esc(b.fix) + '</div>' +
        '</div>';
      }).join('');
  }

  /* ============================================
     ECONOMICS — calculator + presets
     ============================================ */
  function bindCalculator() {
    var ids = ['users', 'tasks', 'minSaved', 'labour', 'revenue', 'modelCost', 'reviewCost', 'ops', 'errorCost', 'price'];
    var fields = ids.map(function (k) { return $('#map-apps-calc-' + k); });
    if (!fields.every(Boolean)) return;
    var outTime    = $('#map-apps-calc-time');
    var outGross   = $('#map-apps-calc-gross');
    var outOpCost  = $('#map-apps-calc-opcost');
    var outNet     = $('#map-apps-calc-net');
    var outBE      = $('#map-apps-calc-be');
    var outPerTask = $('#map-apps-calc-per-task');

    function recalc() {
      var users     = parseFloat(fields[0].value) || 0;
      var tasks     = parseFloat(fields[1].value) || 0;       // tasks per user per month (if users=0 use absolute)
      var minSaved  = parseFloat(fields[2].value) || 0;
      var labour    = parseFloat(fields[3].value) || 0;       // $ / hr
      var revenue   = parseFloat(fields[4].value) || 0;       // $ uplift per task
      var modelCost = parseFloat(fields[5].value) || 0;       // $ / task
      var reviewCost = parseFloat(fields[6].value) || 0;      // $ / task
      var ops       = parseFloat(fields[7].value) || 0;       // $ / month engineering / ops
      var errorCost = parseFloat(fields[8].value) || 0;       // $ / month rework
      var price     = parseFloat(fields[9].value) || 0;       // $ / user / month subscription

      var monthlyTasks = users > 0 ? users * tasks : tasks;   // fallback if users=0
      var minutesSaved = monthlyTasks * minSaved;
      var hoursSaved   = minutesSaved / 60;
      var grossValue   = hoursSaved * labour + monthlyTasks * revenue;
      var opCost       = monthlyTasks * (modelCost + reviewCost) + ops + errorCost;
      var net          = grossValue - opCost;
      var beUser       = users > 0 ? opCost / users : 0;
      var perTask      = monthlyTasks > 0 ? opCost / monthlyTasks : 0;

      function fmtMin(m) {
        if (m >= 60000) return (Math.round(m / 6000) / 10).toLocaleString() + 'k h';
        if (m >= 60)    return Math.round(m / 60).toLocaleString() + ' h';
        return Math.round(m) + ' min';
      }

      if (outTime)    outTime.textContent    = fmtMin(minutesSaved);
      if (outGross)   outGross.textContent   = money(grossValue) + ' / mo';
      if (outOpCost)  outOpCost.textContent  = money(opCost) + ' / mo';
      if (outNet)     outNet.textContent     = money(net) + ' / mo';
      if (outBE)      outBE.textContent      = users > 0 ? '$' + (Math.round(beUser * 100) / 100).toLocaleString() + ' / user' : '—';
      if (outPerTask) outPerTask.textContent = '$' + (Math.round(perTask * 100) / 100).toLocaleString();
    }
    fields.forEach(function (i) { i.addEventListener('input', recalc); });
    recalc();
  }

  function bindPresets() {
    var el = $('#map-apps-presets');
    if (!el || typeof APPS_CALC_PRESETS === 'undefined') return;
    el.innerHTML = APPS_CALC_PRESETS.map(function (p) {
      return '<button class="map-apps-preset" type="button" data-preset="' + esc(p.id) + '" title="' + esc(p.tag) + '">' + esc(p.label) + '</button>';
    }).join('');
    el.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('.map-apps-preset');
      if (!btn) return;
      var p = APPS_CALC_PRESETS.filter(function (x) { return x.id === btn.dataset.preset; })[0];
      if (!p) return;
      var fields = {
        users: p.users, tasks: p.tasks, minSaved: p.minSaved, labour: p.labour,
        revenue: p.revenue, modelCost: p.modelCost, reviewCost: p.reviewCost,
        ops: p.ops, errorCost: p.errorCost, price: p.price
      };
      Object.keys(fields).forEach(function (k) {
        var input = $('#map-apps-calc-' + k);
        if (input) {
          input.value = fields[k];
          input.dispatchEvent(new Event('input', { bubbles: true }));
        }
      });
      $$('.map-apps-preset').forEach(function (b) { b.classList.toggle('is-active', b === btn); });
    });
  }

  /* ============================================
     STRATEGIC + SOURCES
     ============================================ */
  function renderTakeaways() {
    var el = $('#map-apps-take-list');
    if (!el || typeof APPS_TAKEAWAYS === 'undefined') return;
    el.innerHTML = APPS_TAKEAWAYS.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
  }
  function renderSources() {
    var el = $('#map-apps-sources-grouped');
    if (!el || typeof APPS_SOURCES_GROUPED === 'undefined') return;
    el.innerHTML = APPS_SOURCES_GROUPED.map(function (g) {
      return '<div>' +
        '<h4 class="map-apps-srcgrp-h">' + esc(g.group) + '</h4>' +
        '<ul class="map-apps-srcgrp-list">' +
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
    renderConfusions();
    renderMisconceptions();
    renderMaturity();
    renderStack();
    renderDemoVsProduct();
    renderPatterns();
    renderUx();
    renderWedges();
    renderValue();
    renderValueTest();
    renderIndustries();
    renderVerticalHorizontal();
    renderAgents();
    renderAdoption();
    renderArchExamples();
    renderSelection();
    renderMoats();
    renderPlaybook();
    renderBadPatterns();
    renderMetrics();
    renderRoi();
    renderRisks();
    renderBottlenecks();
    bindPresets();
    bindCalculator();
    renderTakeaways();
    renderSources();

    selectTab('basics', false);

    var h = (window.location.hash || '').replace(/^#/, '');
    if (h.indexOf('apps-') === 0) {
      var t = h.replace('apps-', '');
      if (['basics', 'stack', 'patterns', 'value', 'agents', 'building', 'trust', 'economics'].indexOf(t) >= 0) {
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
