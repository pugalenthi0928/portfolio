/* ============================================
   ACCELERATED COMPUTING ATLAS — Interactions
   ============================================ */

(function () {
  'use strict';

  var activeMode = null;
  var activeNodeId = null;
  var searchTerm = '';
  var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var RING_MAP = {
    core: 0,
    hardware: 1,
    networking: 2,
    software: 3,
    manufacturing: 4,
    upstream: 5,
    physical: 6,
    cloud: 7,
    quantum: 8,
    endmarket: 9,
    concept: 10
  };

  var RING_RADII = [0, 0.12, 0.20, 0.28, 0.38, 0.48, 0.56, 0.65, 0.74, 0.84, 0.94];

  function getLayerColor(layerId) {
    for (var i = 0; i < ATLAS_LAYERS.length; i++) {
      if (ATLAS_LAYERS[i].id === layerId) return ATLAS_LAYERS[i].color;
    }
    return '#A0AEC0';
  }

  function getLayerBg(layerId) {
    for (var i = 0; i < ATLAS_LAYERS.length; i++) {
      if (ATLAS_LAYERS[i].id === layerId) return ATLAS_LAYERS[i].bg;
    }
    return 'rgba(160,174,192,0.07)';
  }

  function getLayerLabel(layerId) {
    for (var i = 0; i < ATLAS_LAYERS.length; i++) {
      if (ATLAS_LAYERS[i].id === layerId) return ATLAS_LAYERS[i].label;
    }
    return layerId;
  }

  function getNode(id) {
    for (var i = 0; i < ATLAS_NODES.length; i++) {
      if (ATLAS_NODES[i].id === id) return ATLAS_NODES[i];
    }
    return null;
  }

  /* Lookups for the new entity types. */
  function getCompany(id) {
    if (typeof COMPANY_PROFILES === 'undefined') return null;
    for (var i = 0; i < COMPANY_PROFILES.length; i++) {
      if (COMPANY_PROFILES[i].id === id) return COMPANY_PROFILES[i];
    }
    return null;
  }

  function getProduct(id) {
    if (typeof PRODUCT_PROFILES === 'undefined') return null;
    for (var i = 0; i < PRODUCT_PROFILES.length; i++) {
      if (PRODUCT_PROFILES[i].id === id) return PRODUCT_PROFILES[i];
    }
    return null;
  }

  function getPath(id) {
    if (typeof RELATIONSHIP_PATHS === 'undefined') return null;
    for (var i = 0; i < RELATIONSHIP_PATHS.length; i++) {
      if (RELATIONSHIP_PATHS[i].id === id) return RELATIONSHIP_PATHS[i];
    }
    return null;
  }

  function getScenario(id) {
    if (typeof SCENARIOS === 'undefined') return null;
    for (var i = 0; i < SCENARIOS.length; i++) {
      if (SCENARIOS[i].id === id) return SCENARIOS[i];
    }
    return null;
  }

  function getQuestion(id) {
    var bank = (typeof QUESTION_BANK !== 'undefined') ? QUESTION_BANK
             : (typeof QUESTIONS      !== 'undefined') ? QUESTIONS
             : null;
    if (!bank) return null;
    for (var i = 0; i < bank.length; i++) {
      if (bank[i].id === id) return bank[i];
    }
    return null;
  }

  /* Resolve a "type:id" reference used in paths, learning tracks and edges. */
  function resolveRef(ref) {
    if (!ref || ref.indexOf(':') === -1) return null;
    var parts = ref.split(':');
    var type = parts[0];
    var id = parts.slice(1).join(':');
    if (type === 'node')     return { type: 'node',     entity: getNode(id),     id: id };
    if (type === 'company')  return { type: 'company',  entity: getCompany(id),  id: id };
    if (type === 'product')  return { type: 'product',  entity: getProduct(id),  id: id };
    if (type === 'path')     return { type: 'path',     entity: getPath(id),     id: id };
    if (type === 'scenario') return { type: 'scenario', entity: getScenario(id), id: id };
    if (type === 'question') return { type: 'question', entity: getQuestion(id), id: id };
    if (type === 'learn') {
      if (typeof LEARNING_PATHS === 'undefined') return null;
      for (var i = 0; i < LEARNING_PATHS.length; i++) {
        if (LEARNING_PATHS[i].id === id) return { type: 'learn', entity: LEARNING_PATHS[i], id: id };
      }
      return null;
    }
    return null;
  }

  function getCompanyCategory(id) {
    if (typeof COMPANY_CATEGORIES === 'undefined') return null;
    for (var i = 0; i < COMPANY_CATEGORIES.length; i++) {
      if (COMPANY_CATEGORIES[i].id === id) return COMPANY_CATEGORIES[i];
    }
    return null;
  }

  function getProductCategory(id) {
    if (typeof PRODUCT_CATEGORIES === 'undefined') return null;
    for (var i = 0; i < PRODUCT_CATEGORIES.length; i++) {
      if (PRODUCT_CATEGORIES[i].id === id) return PRODUCT_CATEGORIES[i];
    }
    return null;
  }

  function getRelationshipMeta(id) {
    if (typeof RELATIONSHIP_TYPES === 'undefined') return null;
    return RELATIONSHIP_TYPES[id] || null;
  }

  /* Map a ref to a confidence tier + display label.
     Order of precedence:
       1. Explicit confidence in FLAGSHIP_OVERRIDES.
       2. Forward-looking list (roadmap entities).
       3. Whether the underlying entity has cited sources.
  */
  function resolveConfidence(ref, flagship) {
    if (flagship && flagship.confidence) {
      return tierToBadge(flagship.confidence);
    }
    if (typeof isForwardLooking === 'function' && isForwardLooking(ref)) {
      return tierToBadge('speculative');
    }
    var resolved = resolveRef(ref);
    if (resolved && resolved.entity) {
      var e = resolved.entity;
      var hasSources = (e.sources && e.sources.length) || (e.sourceIds && e.sourceIds.length);
      return tierToBadge(hasSources ? 'sourced' : 'context');
    }
    return tierToBadge('context');
  }

  function tierToBadge(tier) {
    switch (tier) {
      case 'sourced':     return { tier: 'sourced',     label: 'Sourced',          note: 'Directly stated in cited material.' };
      case 'inferred':    return { tier: 'inferred',    label: 'Inferred',         note: 'Reasoned across multiple sources.' };
      case 'speculative': return { tier: 'speculative', label: 'Forward-looking',  note: 'Roadmap or research-stage claim.' };
      default:            return { tier: 'context',     label: 'Market context',   note: 'Industry common knowledge.' };
    }
  }

  function escapeHtml(s) {
    if (s == null) return '';
    return String(s)
      .replace(/&(?!#?\w+;)/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function nodeMatchesSearch(node, term) {
    if (!term) return true;
    var t = term.toLowerCase();
    return (
      node.name.toLowerCase().indexOf(t) !== -1 ||
      node.type.toLowerCase().indexOf(t) !== -1 ||
      node.layer.toLowerCase().indexOf(t) !== -1 ||
      node.short.toLowerCase().indexOf(t) !== -1
    );
  }

  function nodeMatchesMode(node, mode) {
    if (!mode) return true;
    if (mode === 'bottlenecks') {
      return node.bottleneckLevel === 'Critical' || node.bottleneckLevel === 'High';
    }
    return node.modes && node.modes.indexOf(mode) !== -1;
  }

  function isNodeVisible(node) {
    return nodeMatchesSearch(node, searchTerm) && nodeMatchesMode(node, activeMode);
  }

  /* ============================================
     BUILD MODE SWITCHER
     ============================================ */
  function buildModes() {
    var el = document.getElementById('atlas-modes');
    if (!el) return;

    for (var i = 0; i < ATLAS_MODES.length; i++) {
      var mode = ATLAS_MODES[i];
      var btn = document.createElement('button');
      btn.className = 'atlas-mode-btn';
      btn.textContent = mode.label;
      btn.dataset.mode = mode.id;
      btn.setAttribute('aria-pressed', 'false');
      btn.addEventListener('click', (function (m) {
        return function () { setMode(activeMode === m.id ? null : m.id); };
      })(mode));
      el.appendChild(btn);
    }
  }

  function setMode(modeId) {
    activeMode = modeId;

    if (modeId !== null) {
      history.replaceState(null, '', '#' + modeId);
    }

    document.querySelectorAll('.atlas-mode-btn').forEach(function (btn) {
      var isActive = btn.dataset.mode === modeId;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    var infoPanel = document.getElementById('atlas-mode-info');
    if (modeId === null) {
      infoPanel.classList.remove('open');
    } else {
      for (var i = 0; i < ATLAS_MODES.length; i++) {
        if (ATLAS_MODES[i].id === modeId) {
          document.getElementById('atlas-mode-title').textContent = ATLAS_MODES[i].title;
          document.getElementById('atlas-mode-body').textContent = ATLAS_MODES[i].description;
          break;
        }
      }
      infoPanel.classList.add('open');
    }

    updateNodeVisibility();
  }

  /* ============================================
     BUILD RADIAL VISUALIZATION

     The viz is layered:
       - faint ring outlines at each radius
       - editorial ring labels (Hardware, Software, ...)
       - the NVIDIA core node at the center
       - one orbital node per ATLAS_NODE entry, color-coded by layer
     The labels carry the legend job, so a separate legend block isn't needed.
     ============================================ */

  /* Ring labels distributed around the circumference so they don't stack.
     Even rings sit on the top half, odd rings on the bottom — each shifted
     slightly to avoid collision. */
  var RING_DEFS = [
    { layer: 'hardware',      label: 'Hardware',         angle: -90 },
    { layer: 'networking',    label: 'Networking',       angle: 90  },
    { layer: 'software',      label: 'Software',         angle: -90 },
    { layer: 'manufacturing', label: 'Foundry &amp; packaging', angle: 90 },
    { layer: 'upstream',      label: 'Equipment &amp; EDA', angle: -90 },
    { layer: 'physical',      label: 'Physical',         angle: 90  },
    { layer: 'cloud',         label: 'Cloud &amp; OEM',  angle: -90 },
    { layer: 'quantum',       label: 'Quantum',          angle: 90  },
    { layer: 'endmarket',     label: 'End markets',      angle: -90 },
    { layer: 'concept',       label: 'Strategic',        angle: 90  }
  ];
  function buildRadialViz() {
    var container = document.getElementById('atlas-viz');
    if (!container) return;

    var nodesByRing = {};
    for (var i = 0; i < ATLAS_NODES.length; i++) {
      var node = ATLAS_NODES[i];
      var ring = RING_MAP[node.layer];
      if (ring === undefined) ring = 10;
      if (!nodesByRing[ring]) nodesByRing[ring] = [];
      nodesByRing[ring].push(node);
    }

    for (var r = 1; r < RING_RADII.length; r++) {
      var radiusPct = RING_RADII[r] * 100;
      var ringEl = document.createElement('div');
      ringEl.className = 'atlas-ring';
      ringEl.style.width = radiusPct + '%';
      ringEl.style.height = radiusPct + '%';
      if (!reducedMotion) {
        ringEl.style.transitionDelay = (r * 80) + 'ms';
      }
      container.appendChild(ringEl);
    }

    /* Ring labels — alternated top/bottom, positioned just outside each ring
       at the chosen angle. The label sits at the edge so it reads cleanly
       against the dark background. */
    for (var ri = 0; ri < RING_DEFS.length; ri++) {
      var def = RING_DEFS[ri];
      var ringIdx = RING_MAP[def.layer];
      if (ringIdx === undefined) continue;
      var labelRadius = RING_RADII[ringIdx];
      if (labelRadius === undefined) continue;

      var rad = (def.angle || -90) * Math.PI / 180;
      var lx = 50 + (labelRadius * 50) * Math.cos(rad);
      var ly = 50 + (labelRadius * 50) * Math.sin(rad);

      var label = document.createElement('div');
      label.className = 'atlas-ring-label';
      label.innerHTML = def.label;
      label.style.color = getLayerColor(def.layer);
      label.style.left = lx + '%';
      label.style.top = ly + '%';
      /* Push the label outward from the ring edge based on which half it sits on. */
      var pushY = (def.angle === -90) ? '-150%' : '50%';
      label.style.transform = 'translate(-50%, ' + pushY + ')';
      container.appendChild(label);
    }

    var centerNode = getNode('nvidia');
    if (centerNode) {
      var center = document.createElement('div');
      center.className = 'atlas-center-node';
      center.setAttribute('role', 'button');
      center.setAttribute('tabindex', '0');
      center.setAttribute('aria-label', centerNode.name);
      center.dataset.nodeId = 'nvidia';
      center.innerHTML = '<span class="atlas-center-node-label">NVIDIA</span><span class="atlas-center-node-sub">Core</span>';
      center.addEventListener('click', function () { openDetail('nvidia'); });
      center.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDetail('nvidia'); }
      });
      container.appendChild(center);
    }

    for (var ring in nodesByRing) {
      if (ring === '0') continue;
      var nodes = nodesByRing[ring];
      var radius = RING_RADII[ring];
      var count = nodes.length;

      var startAngle = -Math.PI / 2;
      var angleStep = (2 * Math.PI) / count;

      for (var n = 0; n < count; n++) {
        var nd = nodes[n];
        var angle = startAngle + (n * angleStep);
        var jitter = (Math.sin(n * 7.3 + parseInt(ring) * 2.1) * 0.015);
        var x = 50 + (radius * 50 + jitter * 50) * Math.cos(angle);
        var y = 50 + (radius * 50 + jitter * 50) * Math.sin(angle);

        var dot = document.createElement('div');
        dot.className = 'atlas-node';
        dot.style.left = x + '%';
        dot.style.top = y + '%';
        dot.style.background = getLayerColor(nd.layer);
        dot.style.borderColor = getLayerColor(nd.layer);
        dot.dataset.nodeId = nd.id;
        dot.dataset.layer = nd.layer;
        dot.dataset.bottleneck = nd.bottleneckLevel || 'Low';
        dot.setAttribute('role', 'button');
        dot.setAttribute('tabindex', '0');
        dot.setAttribute('aria-label', nd.name);

        dot.innerHTML = '<span class="atlas-node-tip">' + nd.name + '</span>';

        dot.addEventListener('click', (function (id) {
          return function () { openDetail(id); };
        })(nd.id));
        dot.addEventListener('keydown', (function (id) {
          return function (e) {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDetail(id); }
          };
        })(nd.id));

        container.appendChild(dot);
      }
    }

    requestAnimationFrame(function () {
      setTimeout(function () {
        container.querySelectorAll('.atlas-ring').forEach(function (r) {
          r.classList.add('visible');
        });
      }, 200);
    });
  }

  /* ============================================
     BUILD MOBILE GRID
     ============================================ */
  function buildMobileGrid() {
    var el = document.getElementById('atlas-mobile-grid');
    if (!el) return;

    var layerOrder = ['hardware', 'networking', 'software', 'manufacturing', 'upstream', 'physical', 'cloud', 'quantum', 'endmarket', 'concept'];

    for (var li = 0; li < layerOrder.length; li++) {
      var layerId = layerOrder[li];
      var layerNodes = [];
      for (var i = 0; i < ATLAS_NODES.length; i++) {
        if (ATLAS_NODES[i].layer === layerId) layerNodes.push(ATLAS_NODES[i]);
      }
      if (layerNodes.length === 0) continue;

      var block = document.createElement('div');
      block.className = 'atlas-mobile-layer';

      var hd = document.createElement('div');
      hd.className = 'atlas-mobile-layer-hd';
      hd.style.color = getLayerColor(layerId);
      hd.textContent = getLayerLabel(layerId);
      block.appendChild(hd);

      var nodesWrap = document.createElement('div');
      nodesWrap.className = 'atlas-mobile-nodes';

      for (var n = 0; n < layerNodes.length; n++) {
        var nd = layerNodes[n];
        var chip = document.createElement('button');
        chip.className = 'atlas-mobile-node';
        chip.textContent = nd.name;
        chip.dataset.nodeId = nd.id;
        chip.dataset.layer = nd.layer;
        chip.style.color = getLayerColor(nd.layer);
        chip.style.borderColor = getLayerBg(nd.layer);
        chip.addEventListener('click', (function (id) {
          return function () { openDetail(id); };
        })(nd.id));
        nodesWrap.appendChild(chip);
      }

      block.appendChild(nodesWrap);
      el.appendChild(block);
    }
  }

  /* ============================================
     UPDATE NODE VISIBILITY
     ============================================ */
  function updateNodeVisibility() {
    var visCount = 0;

    document.querySelectorAll('.atlas-node').forEach(function (el) {
      var node = getNode(el.dataset.nodeId);
      if (!node) return;
      var vis = isNodeVisible(node);
      if (activeMode || searchTerm) {
        el.classList.toggle('dimmed', !vis);
        el.classList.toggle('highlighted', vis);
      } else {
        el.classList.remove('dimmed', 'highlighted');
      }
      if (vis) visCount++;
    });

    var centerEl = document.querySelector('.atlas-center-node');
    if (centerEl) {
      var coreNode = getNode('nvidia');
      if (coreNode) {
        var coreVis = isNodeVisible(coreNode);
        if (activeMode || searchTerm) {
          centerEl.style.opacity = coreVis ? '1' : '0.15';
        } else {
          centerEl.style.opacity = '1';
        }
        if (coreVis) visCount++;
      }
    }

    document.querySelectorAll('.atlas-mobile-node').forEach(function (el) {
      var node = getNode(el.dataset.nodeId);
      if (!node) return;
      var vis = isNodeVisible(node);
      el.classList.toggle('dimmed', !!(activeMode || searchTerm) && !vis);
    });

    document.querySelectorAll('.atlas-tax-chip').forEach(function (el) {
      var node = getNode(el.dataset.nodeId);
      if (!node) return;
      var vis = isNodeVisible(node);
      el.classList.toggle('dimmed', !!(activeMode || searchTerm) && !vis);
    });

    var countEl = document.getElementById('atlas-search-count');
    if (countEl) {
      if (activeMode || searchTerm) {
        countEl.textContent = visCount + ' of ' + ATLAS_NODES.length + ' nodes';
      } else {
        countEl.textContent = ATLAS_NODES.length + ' nodes';
      }
    }
  }

  /* ============================================
     DETAIL PANEL
     ============================================ */
  /* ============================================
     UNIFIED PROFILE PANEL

     One panel, three render paths. The slide-in panel is reused for
     atlas nodes, company profiles and product profiles. The panel
     remembers the active entity so that hash routing and panel chaining
     (clicking a related entity from inside the panel) work consistently.
     ============================================ */
  function openProfile(type, id) {
    var html = '';

    if (type === 'node') {
      var node = getNode(id);
      if (!node) return;
      activeNodeId = id;
      history.replaceState(null, '', '#' + id);
      document.querySelectorAll('.atlas-node').forEach(function (el) {
        el.classList.toggle('active', el.dataset.nodeId === id);
      });
      html = renderNodeProfile(node);
    } else if (type === 'company') {
      var company = getCompany(id);
      if (!company) return;
      activeNodeId = 'company:' + id;
      history.replaceState(null, '', '#company:' + id);
      html = renderCompanyProfile(company);
    } else if (type === 'product') {
      var product = getProduct(id);
      if (!product) return;
      activeNodeId = 'product:' + id;
      history.replaceState(null, '', '#product:' + id);
      html = renderProductProfile(product);
    } else if (type === 'scenario') {
      var scenario = getScenario(id);
      if (!scenario) return;
      activeNodeId = 'scenario:' + id;
      history.replaceState(null, '', '#scenario:' + id);
      html = renderScenarioProfile(scenario);
      activateScenario(scenario);
    } else if (type === 'question') {
      var question = getQuestion(id);
      if (!question) return;
      activeNodeId = 'question:' + id;
      history.replaceState(null, '', '#question:' + id);
      html = renderQuestionProfile(question);
    } else {
      return;
    }

    /* Flagship + confidence header. Inject above the first detail-* block
       inside the rendered HTML so the takeaway, confidence pill,
       NVIDIA-connection chip and common-misunderstanding block sit
       between the panel header and the body content.

       Order of precedence for the takeaway:
         1. FLAGSHIP_OVERRIDES[refKey].takeaway
         2. entity.takeaway (set directly on a node, company or product)
       This means non-flagship entities can carry their own memorable
       one-liner without appearing in the override map.
    */
    var refKey = type + ':' + id;
    var flagship = (typeof FLAGSHIP_OVERRIDES !== 'undefined') ? FLAGSHIP_OVERRIDES[refKey] : null;
    var confidence = resolveConfidence(refKey, flagship);

    var entityForHeader = null;
    if (type === 'node')     entityForHeader = getNode(id);
    if (type === 'company')  entityForHeader = getCompany(id);
    if (type === 'product')  entityForHeader = getProduct(id);
    if (type === 'scenario') entityForHeader = getScenario(id);

    var takeaway = (flagship && flagship.takeaway) || (entityForHeader && entityForHeader.takeaway) || '';
    var nvc = entityForHeader && entityForHeader.nvidiaConnection;
    var misunderstanding = entityForHeader && entityForHeader.commonMisunderstanding;

    var header = '';
    if (takeaway) {
      header += '<div class="atlas-detail-takeaway">' + takeaway + '</div>';
    }
    if (confidence) {
      header += '<div class="atlas-detail-confbar"><span class="atlas-conf conf-' + confidence.tier + '">' + escapeHtml(confidence.label) + '</span><span>' + escapeHtml(confidence.note) + '</span></div>';
    }
    if (nvc && nvc.type) {
      header += '<div class="atlas-detail-nvc atlas-nvc-' + escapeHtml(nvc.type) + '">' +
        '<span class="atlas-detail-nvc-label">NVIDIA connection &middot; ' + escapeHtml(nvc.type) + '</span>' +
        (nvc.explanation ? '<span class="atlas-detail-nvc-text">' + nvc.explanation + '</span>' : '') +
      '</div>';
    }
    if (misunderstanding) {
      header += '<div class="atlas-detail-misunderstanding">' +
        '<span class="atlas-detail-misunderstanding-label">Common misunderstanding</span>' +
        '<span class="atlas-detail-misunderstanding-text">' + misunderstanding + '</span>' +
      '</div>';
    }

    if (header) {
      /* Insert between the badges block and the title or summary area.
         Doing this on the rendered HTML string keeps the renderer
         functions decoupled from the takeaway/confidence concerns. */
      var pivot = html.indexOf('<h2 class="atlas-detail-name">');
      if (pivot !== -1) {
        var endH2 = html.indexOf('</h2>', pivot);
        if (endH2 !== -1) {
          var insertAt = endH2 + 5;
          /* Skip the optional subtitle paragraph immediately after the title. */
          var afterTitle = html.substr(insertAt);
          var subMatch = afterTitle.match(/^\s*<p class="atlas-detail-short"[^>]*>[\s\S]*?<\/p>/);
          if (subMatch) insertAt += subMatch[0].length;
          html = html.substr(0, insertAt) + header + html.substr(insertAt);
        }
      }
    }

    /* Append a Related-questions block at the very end of the panel body
       for any entity that lists relatedQuestions. The chips inside route
       to specific Q&A cards via the question:id ref. */
    if (entityForHeader && entityForHeader.relatedQuestions && entityForHeader.relatedQuestions.length) {
      var rqBlock = renderRelatedQuestionsBlock(entityForHeader.relatedQuestions);
      if (rqBlock) html += rqBlock;
    }

    var inner = document.getElementById('atlas-detail-inner');
    inner.innerHTML = html;

    var panel = document.getElementById('atlas-detail');
    var overlay = document.getElementById('atlas-detail-overlay');
    panel.setAttribute('aria-hidden', 'false');
    panel.scrollTop = 0;
    overlay.classList.add('open');
    /* Force layout so the transition runs from the off-screen state. */
    void panel.offsetWidth;
    panel.classList.add('open');

    var closeBtn = inner.querySelector('.atlas-detail-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeDetail);
      /* Prevent focus from horizontally scrolling the page while the panel is mid-transition. */
      closeBtn.focus({ preventScroll: true });
    }

    /* Wire tab switching when the panel uses tabs. */
    bindTabs(inner);

    /* Wire up any in-panel links that should open another profile,
       open a path card, or jump to a Q&A entry. */
    inner.querySelectorAll('[data-open-ref]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        var resolved = resolveRef(el.dataset.openRef);
        if (!resolved || !resolved.entity) return;
        if (resolved.type === 'path') {
          closeDetail();
          var card = document.querySelector('[data-path-id="' + resolved.id + '"]');
          if (card) {
            card.classList.add('open');
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          return;
        }
        if (resolved.type === 'question') {
          closeDetail();
          openQuestion(resolved.id);
          return;
        }
        openProfile(resolved.type, resolved.id);
      });
    });
  }

  /* Backwards-compatible alias. Existing call sites pass a node id. */
  function openDetail(id) {
    openProfile('node', id);
  }

  /* ── Render: node profile ────────────────── */
  function renderNodeProfile(node) {
    var color = getLayerColor(node.layer);
    var layerLabel = getLayerLabel(node.layer);

    var html = '';
    html += '<button class="atlas-detail-close" aria-label="Close detail panel">&times;</button>';

    html += '<div class="atlas-detail-badges">';
    html += '<span class="atlas-detail-badge" style="color:' + color + ';border-color:' + color + '">' + layerLabel + '</span>';
    html += '<span class="atlas-detail-badge" style="color:var(--text-tertiary);border-color:var(--border)">' + escapeHtml(node.type) + '</span>';
    html += '</div>';

    html += '<h2 class="atlas-detail-name">' + escapeHtml(node.name) + '</h2>';
    html += '<p class="atlas-detail-short">' + node.short + '</p>';

    if (node.bottleneckLevel && node.bottleneckLevel !== 'Low') {
      html += '<div class="atlas-detail-bottleneck">';
      html += '<div class="atlas-detail-bottleneck-dot bottleneck-' + node.bottleneckLevel + '"></div>';
      html += '<span class="atlas-detail-bottleneck-text">Bottleneck: ' + node.bottleneckLevel + '</span>';
      html += '</div>';
    }

    html += '<div class="atlas-detail-section-title">Why it matters</div>';
    html += '<p class="atlas-detail-why">' + node.why + '</p>';

    if (node.dependsOn && node.dependsOn.length > 0) {
      html += '<div class="atlas-detail-section-title">Depends on</div>';
      html += '<div class="atlas-detail-deps">';
      for (var d = 0; d < node.dependsOn.length; d++) {
        html += '<span class="atlas-detail-dep">' + escapeHtml(node.dependsOn[d]) + '</span>';
      }
      html += '</div>';
    }

    if (node.usedBy && node.usedBy.length > 0) {
      html += '<div class="atlas-detail-section-title">Used by</div>';
      html += '<div class="atlas-detail-deps">';
      for (var u = 0; u < node.usedBy.length; u++) {
        html += '<span class="atlas-detail-dep">' + escapeHtml(node.usedBy[u]) + '</span>';
      }
      html += '</div>';
    }

    if (node.sources && node.sources.length > 0) {
      html += '<div class="atlas-detail-sources">';
      html += '<div class="atlas-detail-section-title">Sources</div>';
      for (var s = 0; s < node.sources.length; s++) {
        html += '<a class="atlas-detail-source" href="' + node.sources[s].url + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(node.sources[s].label) + ' &nearr;</a>';
      }
      html += '</div>';
    }

    return html;
  }

  /* Build a tabbed shell for the detail panel.
     `tabs` is an array of { id, label, render(): html } */
  function renderTabs(badges, name, subtitle, tabs, defaultTab) {
    var html = '';
    html += '<button class="atlas-detail-close" aria-label="Close detail panel">&times;</button>';
    html += '<div class="atlas-detail-badges">' + badges + '</div>';
    html += '<h2 class="atlas-detail-name">' + escapeHtml(name) + '</h2>';
    if (subtitle) html += '<p class="atlas-detail-short" style="margin-bottom:14px;">' + subtitle + '</p>';

    html += '<div class="atlas-detail-tabs" role="tablist">';
    for (var i = 0; i < tabs.length; i++) {
      var active = (defaultTab ? tabs[i].id === defaultTab : i === 0);
      html += '<button class="atlas-detail-tab' + (active ? ' active' : '') + '" role="tab" data-tab="' + tabs[i].id + '" aria-selected="' + (active ? 'true' : 'false') + '">' + escapeHtml(tabs[i].label) + '</button>';
    }
    html += '</div>';

    for (var j = 0; j < tabs.length; j++) {
      var act = (defaultTab ? tabs[j].id === defaultTab : j === 0);
      html += '<div class="atlas-detail-tabpanel' + (act ? ' active' : '') + '" data-tabpanel="' + tabs[j].id + '" role="tabpanel">' + tabs[j].render() + '</div>';
    }
    return html;
  }

  /* Source pills + confidence rendering inside tabs */
  function renderSourceLinks(sources, sourceIds) {
    var items = [];
    if (sources && sources.length) {
      for (var i = 0; i < sources.length; i++) {
        items.push({ url: sources[i].url, label: sources[i].label });
      }
    }
    if (sourceIds && sourceIds.length && typeof SOURCES !== 'undefined') {
      for (var k = 0; k < sourceIds.length; k++) {
        for (var s = 0; s < SOURCES.length; s++) {
          if (SOURCES[s].id === sourceIds[k]) {
            items.push({ url: SOURCES[s].url, label: SOURCES[s].title });
            break;
          }
        }
      }
    }
    if (!items.length) {
      return '<p class="atlas-detail-block-text" style="color:var(--text-tertiary);font-style:italic;">No direct sources cited. Treat as market context.</p>';
    }
    var html = '';
    for (var n = 0; n < items.length; n++) {
      html += '<a class="atlas-source-pill" href="' + items[n].url + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(items[n].label) + ' &nearr;</a>';
    }
    return html;
  }

  /* Find related companies/products/nodes using ENTITY_EDGES. */
  function edgesFrom(ref) {
    if (typeof ENTITY_EDGES === 'undefined') return [];
    var out = [];
    for (var i = 0; i < ENTITY_EDGES.length; i++) {
      if (ENTITY_EDGES[i].from === ref) out.push(ENTITY_EDGES[i]);
    }
    return out;
  }

  function edgesTo(ref) {
    if (typeof ENTITY_EDGES === 'undefined') return [];
    var out = [];
    for (var i = 0; i < ENTITY_EDGES.length; i++) {
      if (ENTITY_EDGES[i].to === ref) out.push(ENTITY_EDGES[i]);
    }
    return out;
  }

  function renderEdgeList(edges, direction) {
    if (!edges || !edges.length) return '<p class="atlas-detail-block-text" style="color:var(--text-tertiary);font-style:italic;">No edges recorded.</p>';
    var html = '<ul class="atlas-detail-list">';
    for (var i = 0; i < edges.length; i++) {
      var e = edges[i];
      var otherRef = direction === 'from' ? e.to : e.from;
      var resolved = resolveRef(otherRef);
      if (!resolved || !resolved.entity) continue;
      var other = resolved.entity;
      var otherName = other.name || other.title || otherRef;
      html += '<li><a href="#" data-open-ref="' + otherRef + '" style="color:var(--atlas-core);font-weight:600;">' + escapeHtml(otherName) + '</a> &mdash; <span style="color:var(--text-tertiary);font-size:11px;text-transform:uppercase;letter-spacing:0.04em;">' + e.type + '</span><br/><span style="font-size:12px;">' + (e.label || '') + '</span></li>';
    }
    html += '</ul>';
    return html;
  }

  /* Anatomy lookup for product profiles */
  function getAnatomyForProduct(productId) {
    if (typeof PRODUCT_ANATOMIES === 'undefined') return null;
    for (var i = 0; i < PRODUCT_ANATOMIES.length; i++) {
      if (PRODUCT_ANATOMIES[i].productId === productId) return PRODUCT_ANATOMIES[i];
    }
    return null;
  }

  /* Diagram lookups (hand-built SVG schematics) */
  function getAnatomyDiagram(anatomyId) {
    if (!anatomyId || typeof ANATOMY_DIAGRAMS === 'undefined') return '';
    return ANATOMY_DIAGRAMS[anatomyId] || '';
  }
  function getQuestionDiagram(questionId) {
    if (!questionId || typeof QUESTION_DIAGRAMS === 'undefined') return '';
    var anatomyId = QUESTION_DIAGRAMS[questionId];
    return anatomyId ? getAnatomyDiagram(anatomyId) : '';
  }
  function wrapDiagram(svg, caption) {
    if (!svg) return '';
    var capHtml = caption ? '<figcaption class="atlas-diagram-caption">' + escapeHtml(caption) + '</figcaption>' : '';
    return '<figure class="atlas-diagram-figure">' + svg + capHtml + '</figure>';
  }

  /* Wire tab switching after panel content renders */
  function bindTabs(inner) {
    var tabs = inner.querySelectorAll('.atlas-detail-tab');
    var panels = inner.querySelectorAll('.atlas-detail-tabpanel');
    if (!tabs.length) return;
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var id = tab.dataset.tab;
        tabs.forEach(function (t) {
          var on = t.dataset.tab === id;
          t.classList.toggle('active', on);
          t.setAttribute('aria-selected', on ? 'true' : 'false');
        });
        panels.forEach(function (p) {
          p.classList.toggle('active', p.dataset.tabpanel === id);
        });
      });
    });
  }

  /* ── Render: company profile (tabbed) ─────── */
  function renderCompanyProfile(c) {
    var catMeta = getCompanyCategory(c.category);
    var catColor = catMeta ? catMeta.color : '#A0AEC0';
    var catLabel = catMeta ? catMeta.label : c.category;
    var rel = getRelationshipMeta(c.relationshipType) || { label: c.relationshipType, color: '#A0AEC0' };

    var badges = '';
    badges += '<span class="atlas-detail-badge" style="color:' + catColor + ';border-color:' + catColor + '">' + escapeHtml(catLabel) + '</span>';
    badges += '<span class="atlas-detail-badge" style="color:var(--text-tertiary);border-color:var(--border)">Company</span>';

    var subtitle = (c.fullName && c.fullName !== c.name) ? escapeHtml(c.fullName) : '';

    var brief = function () {
      var html = '';
      html += '<span class="atlas-detail-relbadge" style="color:' + rel.color + ';border-color:' + rel.color + '">' +
              '<span class="atlas-card-rel-dot"></span>' + escapeHtml(rel.label) + '</span>';
      if (c.shortExplanation) html += '<p class="atlas-detail-summary">' + c.shortExplanation + '</p>';
      html += '<div class="atlas-detail-meta-grid">';
      if (c.country)              html += metaCell('Country / region', c.country);
      if (c.roleInStack)          html += metaCell('Role in the stack', c.roleInStack);
      if (c.businessModel)        html += metaCell('Business model', c.businessModel);
      if (c.relationshipToNvidia) html += metaCell('NVIDIA connection', c.relationshipToNvidia);
      html += '</div>';
      if (c.whatTheyDo) {
        html += '<div class="atlas-detail-block"><div class="atlas-detail-block-title">What they do</div><p class="atlas-detail-block-text">' + c.whatTheyDo + '</p></div>';
      }
      if (c.whyItMattersForAI) {
        html += '<div class="atlas-detail-block"><div class="atlas-detail-block-title">Why it matters for AI</div><p class="atlas-detail-block-text">' + c.whyItMattersForAI + '</p></div>';
      }
      if (c.explainLikeImNew) {
        html += '<div class="atlas-detail-block"><div class="atlas-detail-block-title">Explain like I&rsquo;m new</div><div class="atlas-detail-eli5">' + c.explainLikeImNew + '</div></div>';
      }
      if (c.learningQuestions && c.learningQuestions.length > 0) {
        html += '<div class="atlas-detail-block"><div class="atlas-detail-block-title">Questions to answer</div><ul class="atlas-detail-questions">';
        for (var q = 0; q < c.learningQuestions.length; q++) html += '<li>' + c.learningQuestions[q] + '</li>';
        html += '</ul></div>';
      }
      return html;
    };

    var products = function () {
      return renderListBlock('Product groups', c.productGroups) || '<p class="atlas-detail-block-text" style="color:var(--text-tertiary);">No product groups recorded.</p>';
    };

    var deps = function () {
      var ref = 'company:' + c.id;
      var html = '';
      html += renderListBlock('Upstream dependencies', c.upstreamDependencies);
      html += '<div class="atlas-detail-block"><div class="atlas-detail-block-title">Edges into this company</div>' + renderEdgeList(edgesTo(ref), 'to') + '</div>';
      return html || '<p>No data.</p>';
    };

    var customers = function () {
      var ref = 'company:' + c.id;
      var html = '';
      html += renderListBlock('Downstream customers', c.downstreamCustomers);
      html += '<div class="atlas-detail-block"><div class="atlas-detail-block-title">Edges out of this company</div>' + renderEdgeList(edgesFrom(ref), 'from') + '</div>';
      return html;
    };

    var risks = function () {
      var html = '';
      html += renderListBlock('Competitors', c.competitors);
      html += renderListBlock('Key bottlenecks', c.keyBottlenecks);
      return html;
    };

    var sources = function () {
      return '<div class="atlas-detail-block"><div class="atlas-detail-block-title">References</div>' + renderSourceLinks(c.sources, c.sourceIds) + '</div>';
    };

    return renderTabs(badges, c.name, subtitle, [
      { id: 'brief',     label: 'Brief',         render: brief },
      { id: 'products',  label: 'Products',      render: products },
      { id: 'deps',      label: 'Dependencies',  render: deps },
      { id: 'customers', label: 'Customers',     render: customers },
      { id: 'risks',     label: 'Risks',         render: risks },
      { id: 'sources',   label: 'Sources',       render: sources }
    ]);
  }

  /* ── Render: product profile (tabbed) ─────── */
  function renderProductProfile(p) {
    var catMeta = getProductCategory(p.category);
    var catColor = catMeta ? catMeta.color : '#A0AEC0';
    var catLabel = catMeta ? catMeta.label : p.category;

    var badges = '';
    badges += '<span class="atlas-detail-badge" style="color:' + catColor + ';border-color:' + catColor + '">' + escapeHtml(catLabel) + '</span>';
    badges += '<span class="atlas-detail-badge" style="color:var(--text-tertiary);border-color:var(--border)">' + escapeHtml(p.company || 'Industry') + '</span>';

    var what = function () {
      var html = '';
      if (p.whatItIs) html += '<p class="atlas-detail-summary">' + p.whatItIs + '</p>';
      if (p.whyItMatters) html += '<div class="atlas-detail-block"><div class="atlas-detail-block-title">Why it matters</div><p class="atlas-detail-block-text">' + p.whyItMatters + '</p></div>';
      return html;
    };

    var anatomy = function () {
      var a = getAnatomyForProduct(p.id);
      if (!a) return '<p class="atlas-detail-block-text" style="color:var(--text-tertiary);font-style:italic;">No anatomy recorded for this product.</p>';
      var html = '<p class="atlas-detail-block-text">' + a.explanation + '</p>';
      var diagram = getAnatomyDiagram(a.id);
      if (diagram) html += '<div class="atlas-diagram-wrap atlas-diagram-wrap--panel">' + diagram + '</div>';
      html += '<ul class="atlas-anatomy-parts" style="margin-top:12px;">';
      for (var i = 0; i < a.parts.length; i++) {
        html += '<li class="atlas-anatomy-part"><span class="atlas-anatomy-part-name">' + escapeHtml(a.parts[i].name) + '</span><span class="atlas-anatomy-part-role">' + escapeHtml(a.parts[i].role) + '</span></li>';
      }
      html += '</ul>';
      return html;
    };

    var usedBy = function () {
      return renderListBlock('Used by', p.usedBy) || '<p class="atlas-detail-block-text" style="color:var(--text-tertiary);">No usage recorded.</p>';
    };

    var dependsOn = function () {
      return renderListBlock('Depends on', p.dependsOn) || '<p class="atlas-detail-block-text" style="color:var(--text-tertiary);">No dependencies recorded.</p>';
    };

    var related = function () {
      var html = '';
      if (p.relatedCompanies && p.relatedCompanies.length) {
        html += '<div class="atlas-detail-block"><div class="atlas-detail-block-title">Related companies</div><div class="atlas-detail-deps">';
        for (var rc = 0; rc < p.relatedCompanies.length; rc++) {
          var co = getCompany(p.relatedCompanies[rc]);
          if (co) html += '<a href="#" class="atlas-detail-dep" style="cursor:pointer;color:var(--atlas-core);" data-open-ref="company:' + co.id + '">' + escapeHtml(co.name) + ' &rarr;</a>';
        }
        html += '</div></div>';
      }
      if (p.relatedAtlasNodes && p.relatedAtlasNodes.length) {
        html += '<div class="atlas-detail-block"><div class="atlas-detail-block-title">Related atlas nodes</div><div class="atlas-detail-deps">';
        for (var rn = 0; rn < p.relatedAtlasNodes.length; rn++) {
          var nd = getNode(p.relatedAtlasNodes[rn]);
          if (nd) html += '<a href="#" class="atlas-detail-dep" style="cursor:pointer;color:var(--atlas-core);" data-open-ref="node:' + nd.id + '">' + escapeHtml(nd.name) + ' &rarr;</a>';
        }
        html += '</div></div>';
      }
      return html || '<p class="atlas-detail-block-text" style="color:var(--text-tertiary);">No related entities recorded.</p>';
    };

    var sources = function () {
      return '<div class="atlas-detail-block"><div class="atlas-detail-block-title">References</div>' + renderSourceLinks(p.sources, p.sourceIds) + '</div>';
    };

    return renderTabs(badges, p.name, '', [
      { id: 'what',      label: 'What it is',  render: what },
      { id: 'anatomy',   label: 'Anatomy',     render: anatomy },
      { id: 'usedby',    label: 'Used by',     render: usedBy },
      { id: 'depends',   label: 'Depends on',  render: dependsOn },
      { id: 'related',   label: 'Related',     render: related },
      { id: 'sources',   label: 'Sources',     render: sources }
    ]);
  }

  /* ── Render: scenario profile (tabbed) ─────── */
  function renderScenarioProfile(s) {
    var confLabel = (s.confidence || 'medium').toLowerCase();
    var badges = '';
    badges += '<span class="atlas-detail-badge" style="color:#F56565;border-color:#F56565">Scenario</span>';
    badges += '<span class="atlas-detail-badge" style="color:var(--text-tertiary);border-color:var(--border)">Confidence: ' + confLabel + '</span>';

    var shock = function () {
      var html = '';
      if (s.shock) html += '<p class="atlas-detail-summary">' + s.shock + '</p>';
      if (s.whyItMatters) html += '<div class="atlas-detail-block"><div class="atlas-detail-block-title">Why it matters</div><p class="atlas-detail-block-text">' + s.whyItMatters + '</p></div>';
      return html;
    };

    var effects = function () {
      var html = '';
      if (s.firstOrder)  html += '<div class="atlas-detail-block"><div class="atlas-detail-block-title">First-order effects</div><p class="atlas-detail-block-text">' + s.firstOrder + '</p></div>';
      if (s.secondOrder) html += '<div class="atlas-detail-block"><div class="atlas-detail-block-title">Second-order effects</div><p class="atlas-detail-block-text">' + s.secondOrder + '</p></div>';
      return html;
    };

    var outcomes = function () {
      var html = '';
      html += renderListBlock('Likely winners', s.winners);
      html += renderListBlock('Likely losers',  s.losers);
      return html;
    };

    var related = function () {
      var html = '<div class="atlas-detail-block"><div class="atlas-detail-block-title">Affected entities</div><div class="atlas-detail-deps">';
      if (s.affected && s.affected.length) {
        for (var i = 0; i < s.affected.length; i++) {
          var resolved = resolveRef(s.affected[i]);
          if (!resolved || !resolved.entity) continue;
          var e = resolved.entity;
          html += '<a href="#" class="atlas-detail-dep" style="cursor:pointer;color:var(--atlas-core);" data-open-ref="' + s.affected[i] + '">' + escapeHtml(e.name || e.title || s.affected[i]) + ' &rarr;</a>';
        }
      }
      html += '</div></div>';

      if (s.relatedPaths && s.relatedPaths.length) {
        html += '<div class="atlas-detail-block"><div class="atlas-detail-block-title">Related paths</div><div class="atlas-detail-deps">';
        for (var p = 0; p < s.relatedPaths.length; p++) {
          var path = getPath(s.relatedPaths[p]);
          if (path) html += '<a href="#" class="atlas-detail-dep" style="cursor:pointer;color:var(--atlas-core);" data-open-ref="path:' + path.id + '">' + escapeHtml(path.title) + ' &rarr;</a>';
        }
        html += '</div></div>';
      }
      return html;
    };

    var sources = function () {
      return '<div class="atlas-detail-block"><div class="atlas-detail-block-title">References</div>' + renderSourceLinks(null, s.sourceIds) + '</div>';
    };

    return renderTabs(badges, s.title, '', [
      { id: 'shock',    label: 'Shock',         render: shock },
      { id: 'effects',  label: 'Effects',       render: effects },
      { id: 'outcomes', label: 'Winners/losers', render: outcomes },
      { id: 'related',  label: 'Related',       render: related },
      { id: 'sources',  label: 'Sources',       render: sources }
    ]);
  }

  /* Helpers used by company / product profile rendering. */
  function metaCell(label, value) {
    return '<div>' +
      '<span class="atlas-detail-meta-label">' + escapeHtml(label) + '</span>' +
      '<span class="atlas-detail-meta-value">' + value + '</span>' +
    '</div>';
  }

  function renderListBlock(title, items) {
    if (!items || items.length === 0) return '';
    var html = '<div class="atlas-detail-block">';
    html += '<div class="atlas-detail-block-title">' + escapeHtml(title) + '</div>';
    html += '<ul class="atlas-detail-list">';
    for (var i = 0; i < items.length; i++) {
      html += '<li>' + items[i] + '</li>';
    }
    html += '</ul></div>';
    return html;
  }

  /* Render a "Related questions" block.
     Each chip routes to a Q&A card via the question:id ref. The block
     is appended to whichever profile / panel surface the entity uses. */
  function renderRelatedQuestionsBlock(qids) {
    if (!qids || !qids.length) return '';
    var chips = '';
    for (var i = 0; i < qids.length; i++) {
      var entry = getQuestion(qids[i]);
      if (!entry) continue;
      chips += '<a href="#" class="atlas-detail-dep atlas-detail-qchip" data-open-ref="question:' + entry.id + '">' + escapeHtml(entry.question) + ' &rarr;</a>';
    }
    if (!chips) return '';
    return '<div class="atlas-detail-block">' +
      '<div class="atlas-detail-block-title">Related questions</div>' +
      '<div class="atlas-detail-deps">' + chips + '</div>' +
    '</div>';
  }

  /* Public-style alias matching the spec name. Accepts a typed ref (e.g.
     "company:tsmc" or "node:cuda") and renders the entity's relatedQuestions. */
  function renderRelatedQuestions(ref) {
    var resolved = resolveRef(ref);
    if (!resolved || !resolved.entity) return '';
    return renderRelatedQuestionsBlock(resolved.entity.relatedQuestions || []);
  }

  /* Render the flow chevrons for a question. */
  function renderQuestionFlow(question) {
    if (!question || !question.flow || !question.flow.length) return '';
    var html = '<div class="atlas-q-panel-flow">' +
               '<div class="atlas-q-panel-label">Flow</div>' +
               '<ol class="atlas-q-flow-list">';
    for (var i = 0; i < question.flow.length; i++) {
      html += '<li class="atlas-q-flow-step">' +
                '<span class="atlas-q-flow-num">' + (i + 1) + '</span>' +
                '<span class="atlas-q-flow-text">' + question.flow[i] + '</span>' +
              '</li>';
    }
    html += '</ol></div>';
    return html;
  }

  /* Render the full answer panel for a question. Reuses the slide-in
     panel chassis (close button, scroll, badges) and shows every field of
     the QUESTION_BANK schema in a clean reading order. */
  function renderQuestionProfile(q) {
    if (!q) return '';

    var confBadge = tierToBadge(q.confidence === 'forwardLooking' ? 'speculative' : (q.confidence || 'context'));

    var badges = '';
    if (q.audience)   badges += '<span class="atlas-detail-badge atlas-q-badge audience-' + escapeHtml(q.audience) + '">' + escapeHtml(q.audience) + '</span>';
    if (q.difficulty) badges += '<span class="atlas-detail-badge atlas-q-badge difficulty-' + escapeHtml((q.difficulty || '').toLowerCase()) + '">' + escapeHtml(q.difficulty) + '</span>';
    if (q.category)   badges += '<span class="atlas-detail-badge atlas-q-badge category">' + escapeHtml(q.category) + '</span>';

    var html = '';
    html += '<button class="atlas-detail-close" aria-label="Close answer panel">&times;</button>';
    html += '<div class="atlas-detail-badges">' + badges + '</div>';
    html += '<h2 class="atlas-detail-name atlas-q-panel-question">' + escapeHtml(q.question) + '</h2>';

    /* Confidence pill below the title */
    html += '<div class="atlas-detail-confbar">' +
              '<span class="atlas-conf conf-' + confBadge.tier + '">' + escapeHtml(confBadge.label) + '</span>' +
              '<span>' + escapeHtml(confBadge.note) + '</span>' +
            '</div>';

    /* Short answer — highlighted box */
    if (q.shortAnswer) {
      html += '<div class="atlas-q-panel-short">' + q.shortAnswer + '</div>';
    }

    /* Mental model — italic gold-bar callout */
    if (q.mentalModel) {
      html += '<div class="atlas-q-panel-section atlas-q-panel-mental">' +
                '<div class="atlas-q-panel-label">Mental model</div>' +
                '<p class="atlas-q-panel-mental-text">' + q.mentalModel + '</p>' +
              '</div>';
    }

    /* Detailed answer — multi-paragraph */
    if (q.detailedAnswer && q.detailedAnswer.length) {
      html += '<div class="atlas-q-panel-section">';
      html += '<div class="atlas-q-panel-label">Detailed answer</div>';
      for (var p = 0; p < q.detailedAnswer.length; p++) {
        html += '<p class="atlas-q-panel-paragraph">' + q.detailedAnswer[p] + '</p>';
      }
      html += '</div>';
    }

    /* Diagram (hand-built schematic) */
    var qDiagram = getQuestionDiagram(q.id);
    if (qDiagram) {
      html += '<div class="atlas-q-panel-section atlas-q-panel-diagram">' +
                '<div class="atlas-q-panel-label">Schematic</div>' +
                '<div class="atlas-diagram-wrap atlas-diagram-wrap--panel">' + qDiagram + '</div>' +
              '</div>';
    }

    /* Flow chevrons */
    html += renderQuestionFlow(q);

    /* Common misunderstanding */
    if (q.commonMisunderstanding) {
      html += '<div class="atlas-q-panel-section atlas-q-panel-misunder">' +
                '<div class="atlas-q-panel-label">Common misunderstanding</div>' +
                '<p class="atlas-q-panel-misunder-text">' + q.commonMisunderstanding + '</p>' +
              '</div>';
    }

    /* Why it matters */
    if (q.whyItMatters) {
      html += '<div class="atlas-q-panel-section atlas-q-panel-why">' +
                '<div class="atlas-q-panel-label">Why it matters</div>' +
                '<p class="atlas-q-panel-why-text">' + q.whyItMatters + '</p>' +
              '</div>';
    }

    /* Related entities */
    if (q.relatedEntities && q.relatedEntities.length) {
      var entityChips = '';
      for (var r = 0; r < q.relatedEntities.length; r++) {
        var resolved = resolveRef(q.relatedEntities[r]);
        if (!resolved || !resolved.entity) continue;
        var name = resolved.entity.name || resolved.entity.title || q.relatedEntities[r];
        entityChips += '<a href="#" class="atlas-detail-dep" data-open-ref="' + q.relatedEntities[r] + '" style="color:var(--atlas-core);">' + escapeHtml(name) + ' &rarr;</a>';
      }
      if (entityChips) {
        html += '<div class="atlas-detail-block">' +
                  '<div class="atlas-detail-block-title">Related entities</div>' +
                  '<div class="atlas-detail-deps">' + entityChips + '</div>' +
                '</div>';
      }
    }

    /* Related questions */
    html += renderRelatedQuestionsBlock(q.relatedQuestions || []);

    /* Sources */
    if (q.sourceIds && q.sourceIds.length && typeof SOURCES !== 'undefined') {
      var sChips = '';
      for (var s = 0; s < q.sourceIds.length; s++) {
        for (var sx = 0; sx < SOURCES.length; sx++) {
          if (SOURCES[sx].id === q.sourceIds[s]) {
            sChips += '<a class="atlas-source-pill" href="' + SOURCES[sx].url + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(SOURCES[sx].title) + ' &nearr;</a>';
            break;
          }
        }
      }
      if (sChips) {
        html += '<div class="atlas-detail-block">' +
                  '<div class="atlas-detail-block-title">Sources</div>' +
                  '<div class="atlas-detail-deps">' + sChips + '</div>' +
                '</div>';
      }
    }

    return html;
  }

  function closeDetail() {
    activeNodeId = null;
    var panel = document.getElementById('atlas-detail');
    var overlay = document.getElementById('atlas-detail-overlay');
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    overlay.classList.remove('open');

    document.querySelectorAll('.atlas-node.active').forEach(function (el) {
      el.classList.remove('active');
    });

    /* If a scenario was active, clear its cross-page highlights too. */
    if (typeof activeScenarioId !== 'undefined' && activeScenarioId) clearScenario();

    if (activeMode) {
      history.replaceState(null, '', '#' + activeMode);
    } else {
      history.replaceState(null, '', window.location.pathname);
    }
  }

  /* ============================================
     BUILD BOTTLENECK CARDS

     Tier-aware so industrial chokepoints visually outweigh frontier R&D.
     Cards are grouped by tier with a header row before each group.
     ============================================ */
  var TIER_META = {
    industrial: { label: 'Industrial chokepoints', sub: 'Physical limits. Multi-year lead times.' },
    strategic:  { label: 'Strategic constraints',  sub: 'Policy and ecosystem dynamics.' },
    frontier:   { label: 'Frontier risk',          sub: 'Open R&amp;D problems on a longer horizon.' }
  };

  function buildBottleneckCards() {
    var el = document.getElementById('atlas-bottleneck-grid');
    if (!el) return;

    var tierOrder = ['industrial', 'strategic', 'frontier'];
    var grouped = { industrial: [], strategic: [], frontier: [] };
    for (var i = 0; i < ATLAS_BOTTLENECKS.length; i++) {
      var t = ATLAS_BOTTLENECKS[i].tier || 'strategic';
      if (!grouped[t]) grouped[t] = [];
      grouped[t].push(ATLAS_BOTTLENECKS[i]);
    }

    for (var ti = 0; ti < tierOrder.length; ti++) {
      var tier = tierOrder[ti];
      var items = grouped[tier];
      if (!items || items.length === 0) continue;

      var headerRow = document.createElement('div');
      headerRow.className = 'atlas-bottleneck-tier-row atlas-reveal';
      headerRow.innerHTML =
        '<div class="atlas-bottleneck-tier-label tier-' + tier + '">' + TIER_META[tier].label + '</div>' +
        '<div class="atlas-bottleneck-tier-sub">' + TIER_META[tier].sub + '</div>';
      el.appendChild(headerRow);

      var grid = document.createElement('div');
      grid.className = 'atlas-bottleneck-tier-grid';

      for (var k = 0; k < items.length; k++) {
        var b = items[k];
        var card = document.createElement('div');
        card.className = 'atlas-bottleneck-card atlas-reveal tier-' + tier;
        card.innerHTML =
          '<div class="atlas-bottleneck-card-title">' + b.title + '</div>' +
          '<dl>' +
            '<dt>What</dt><dd>' + b.what + '</dd>' +
            '<dt>Why it constrains the system</dt><dd>' + b.why + '</dd>' +
            '<dt>Whose throughput it gates</dt><dd>' + b.who + '</dd>' +
          '</dl>';
        grid.appendChild(card);
      }
      el.appendChild(grid);
    }
  }

  /* ============================================
     BUILD TAXONOMY GRID
     ============================================ */
  function buildTaxonomy() {
    var el = document.getElementById('atlas-tax-grid');
    if (!el) return;

    for (var ci = 0; ci < ATLAS_CATEGORIES.length; ci++) {
      var cat = ATLAS_CATEGORIES[ci];
      var catNodes = [];

      for (var ni = 0; ni < ATLAS_NODES.length; ni++) {
        for (var li = 0; li < cat.layers.length; li++) {
          if (ATLAS_NODES[ni].layer === cat.layers[li]) {
            catNodes.push(ATLAS_NODES[ni]);
            break;
          }
        }
      }

      if (catNodes.length === 0) continue;

      var block = document.createElement('div');
      block.className = 'atlas-tax-cat atlas-reveal';

      var chipsHTML = '';
      for (var k = 0; k < catNodes.length; k++) {
        var nd = catNodes[k];
        var color = getLayerColor(nd.layer);
        chipsHTML += '<span class="atlas-tax-chip" data-node-id="' + nd.id + '" data-layer="' + nd.layer +
          '" style="background:' + getLayerBg(nd.layer) + ';color:' + color +
          '" tabindex="0" role="button" aria-label="' + nd.name + '">' + nd.name + '</span>';
      }

      block.innerHTML =
        '<div class="atlas-tax-cat-hd">' +
          '<span>' + cat.label + '</span>' +
          '<span class="atlas-tax-cat-count">' + catNodes.length + '</span>' +
        '</div>' +
        '<div class="atlas-tax-chips">' + chipsHTML + '</div>';

      el.appendChild(block);
    }

    el.addEventListener('click', function (e) {
      var chip = e.target.closest('.atlas-tax-chip');
      if (chip && chip.dataset.nodeId) {
        openDetail(chip.dataset.nodeId);
      }
    });

    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        var chip = e.target.closest('.atlas-tax-chip');
        if (chip && chip.dataset.nodeId) {
          e.preventDefault();
          openDetail(chip.dataset.nodeId);
        }
      }
    });
  }

  /* ============================================
     SEARCH
     ============================================ */
  function bindSearch() {
    var input = document.getElementById('atlas-search');
    if (!input) return;

    var debounceTimer;
    input.addEventListener('input', function () {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function () {
        searchTerm = input.value.trim();
        updateNodeVisibility();
      }, 150);
    });
  }

  /* ============================================
     KEYBOARD / GLOBAL EVENTS
     ============================================ */
  function bindGlobalEvents() {
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        if (activeNodeId !== null) {
          closeDetail();
        } else if (activeMode !== null) {
          setMode(null);
        }
      }
    });

    var overlay = document.getElementById('atlas-detail-overlay');
    if (overlay) {
      overlay.addEventListener('click', closeDetail);
    }

    document.querySelectorAll('[data-mode-trigger]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        var mode = el.dataset.modeTrigger;
        setTimeout(function () { setMode(mode); }, 400);
      });
    });
  }

  /* ============================================
     SCROLL REVEAL
     ============================================ */
  function initScrollReveal() {
    if (reducedMotion) {
      document.querySelectorAll('.atlas-reveal').forEach(function (el) {
        el.classList.add('revealed');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    document.querySelectorAll('.atlas-reveal').forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ============================================
     URL HASH HANDLING
     ============================================ */
  function handleHash() {
    var hash = window.location.hash.replace('#', '');
    if (!hash) return;

    /* Mode hashes */
    for (var i = 0; i < ATLAS_MODES.length; i++) {
      if (ATLAS_MODES[i].id === hash) {
        setMode(hash);
        return;
      }
    }

    /* Typed entity hashes — company:foo, product:bar, path:baz */
    if (hash.indexOf(':') !== -1) {
      var resolved = resolveRef(hash);
      if (resolved && resolved.entity) {
        if (resolved.type === 'path') {
          setTimeout(function () {
            var card = document.querySelector('[data-path-id="' + resolved.id + '"]');
            if (card) {
              card.classList.add('open');
              card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }, 400);
        } else {
          setTimeout(function () { openProfile(resolved.type, resolved.id); }, 600);
        }
        return;
      }
    }

    /* Bare id — try node first, then company, then product */
    if (getNode(hash)) {
      setTimeout(function () { openProfile('node', hash); }, 600);
      return;
    }
    if (getCompany(hash)) {
      setTimeout(function () { openProfile('company', hash); }, 600);
      return;
    }
    if (getProduct(hash)) {
      setTimeout(function () { openProfile('product', hash); }, 600);
    }
  }

  /* ============================================
     PATH EXPLORER

     Each path is rendered as a collapsible card. Clicking the head
     opens or closes the body; clicking a step opens the corresponding
     entity profile.
     ============================================ */
  function buildPaths() {
    var el = document.getElementById('atlas-paths');
    if (!el || typeof RELATIONSHIP_PATHS === 'undefined') return;

    for (var p = 0; p < RELATIONSHIP_PATHS.length; p++) {
      var path = RELATIONSHIP_PATHS[p];
      var card = document.createElement('div');
      card.className = 'atlas-path-card atlas-reveal';
      card.dataset.pathId = path.id;

      var stepsHtml = '';
      for (var s = 0; s < path.steps.length; s++) {
        var step = path.steps[s];
        var resolved = resolveRef(step.ref);
        if (!resolved || !resolved.entity) continue;
        var name = resolved.entity.name || resolved.entity.title || resolved.id;
        var typeLabel = resolved.type;
        var stepNum = String(s + 1).padStart(2, '0');
        stepsHtml +=
          '<button class="atlas-path-step" data-open-ref="' + step.ref + '">' +
            '<span class="atlas-path-step-type">' + typeLabel + '</span>' +
            '<div class="atlas-path-step-num">Step ' + stepNum + '</div>' +
            '<div class="atlas-path-step-name">' + escapeHtml(name) + '</div>' +
            '<div class="atlas-path-step-note">' + escapeHtml(step.note || '') + '</div>' +
          '</button>';
      }

      var pathRelatedQ = (path.relatedQuestions && path.relatedQuestions.length) ? renderRelatedQuestionsBlock(path.relatedQuestions) : '';

      card.innerHTML =
        '<div class="atlas-path-head" tabindex="0" role="button" aria-expanded="false">' +
          '<div class="atlas-path-head-text">' +
            '<div class="atlas-path-title">' + escapeHtml(path.title) + '</div>' +
            '<div class="atlas-path-desc">' + path.description + '</div>' +
          '</div>' +
          '<div class="atlas-path-toggle" aria-hidden="true">+</div>' +
        '</div>' +
        '<div class="atlas-path-body"><div class="atlas-path-body-inner">' +
          (path.explanation ? '<p class="atlas-path-explanation">' + path.explanation + '</p>' : '') +
          (path.whyItMatters ? '<p class="atlas-path-why">Why it matters &mdash; ' + path.whyItMatters + '</p>' : '') +
          '<div class="atlas-path-steps">' + stepsHtml + '</div>' +
          pathRelatedQ +
        '</div></div>';

      el.appendChild(card);
    }

    /* Toggle behavior */
    el.addEventListener('click', function (e) {
      /* Related-questions chip click anywhere inside the card. */
      var qchip = e.target.closest('.atlas-detail-qchip');
      if (qchip && qchip.dataset.openRef && qchip.dataset.openRef.indexOf('question:') === 0) {
        e.preventDefault();
        e.stopPropagation();
        followTarget(qchip.dataset.openRef);
        return;
      }
      var head = e.target.closest('.atlas-path-head');
      if (head) {
        var card = head.closest('.atlas-path-card');
        if (card) {
          var open = card.classList.toggle('open');
          head.setAttribute('aria-expanded', open ? 'true' : 'false');
        }
        return;
      }
      var step = e.target.closest('.atlas-path-step');
      if (step && step.dataset.openRef) {
        var resolved = resolveRef(step.dataset.openRef);
        if (resolved && resolved.entity) {
          if (resolved.type === 'path') {
            // Path step that points to another path — just expand that one.
            var target = document.querySelector('[data-path-id="' + resolved.id + '"]');
            if (target) {
              target.classList.add('open');
              target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          } else {
            openProfile(resolved.type, resolved.id);
          }
        }
      }
    });

    el.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      var head = e.target.closest('.atlas-path-head');
      if (head) {
        e.preventDefault();
        head.click();
      }
    });
  }

  /* ============================================
     COMPANY EXPLORER

     Search + category filter chips + grid of intelligence cards.
     ============================================ */
  var companyState = { search: '', category: null };

  function buildCompanyExplorer() {
    var grid = document.getElementById('atlas-company-grid');
    var filters = document.getElementById('atlas-company-filters');
    var search = document.getElementById('atlas-company-search');
    if (!grid || typeof COMPANY_PROFILES === 'undefined') return;

    /* Filter chips: All + each category */
    var chipsHtml = '<button class="atlas-filter-chip active" data-cat="">All</button>';
    for (var i = 0; i < COMPANY_CATEGORIES.length; i++) {
      var cat = COMPANY_CATEGORIES[i];
      chipsHtml += '<button class="atlas-filter-chip" data-cat="' + cat.id + '">' + escapeHtml(cat.label) + '</button>';
    }
    if (filters) filters.innerHTML = chipsHtml;

    /* Card grid */
    for (var c = 0; c < COMPANY_PROFILES.length; c++) {
      var co = COMPANY_PROFILES[c];
      var catMeta = getCompanyCategory(co.category);
      var color = catMeta ? catMeta.color : '#A0AEC0';
      var catLabel = catMeta ? catMeta.label : co.category;
      var rel = getRelationshipMeta(co.relationshipType) || { label: co.relationshipType, color: '#A0AEC0' };

      var card = document.createElement('button');
      card.className = 'atlas-card';
      card.dataset.companyId = co.id;
      card.dataset.cat = co.category;
      card.style.color = color;
      card.innerHTML =
        '<div class="atlas-card-meta-row">' +
          '<span class="atlas-card-cat">' + escapeHtml(catLabel) + '</span>' +
          (co.country ? '<span class="atlas-card-meta-sep" style="color:var(--text-tertiary)">' + escapeHtml(co.country) + '</span>' : '') +
        '</div>' +
        '<div class="atlas-card-name" style="color:var(--text)">' + escapeHtml(co.name) + '</div>' +
        '<div class="atlas-card-role">' + escapeHtml(co.roleInStack || '') + '</div>' +
        '<span class="atlas-card-rel" style="color:' + rel.color + ';border-color:' + rel.color + '"><span class="atlas-card-rel-dot"></span>' + escapeHtml(rel.label) + '</span>';
      grid.appendChild(card);
    }

    grid.addEventListener('click', function (e) {
      var card = e.target.closest('.atlas-card');
      if (card && card.dataset.companyId) {
        openProfile('company', card.dataset.companyId);
      }
    });

    if (filters) {
      filters.addEventListener('click', function (e) {
        var chip = e.target.closest('.atlas-filter-chip');
        if (!chip) return;
        filters.querySelectorAll('.atlas-filter-chip').forEach(function (c) { c.classList.remove('active'); });
        chip.classList.add('active');
        companyState.category = chip.dataset.cat || null;
        applyCompanyFilters();
      });
    }

    if (search) {
      var debounce;
      search.addEventListener('input', function () {
        clearTimeout(debounce);
        debounce = setTimeout(function () {
          companyState.search = search.value.trim().toLowerCase();
          applyCompanyFilters();
        }, 120);
      });
    }

    applyCompanyFilters();
  }

  function applyCompanyFilters() {
    var grid = document.getElementById('atlas-company-grid');
    var count = document.getElementById('atlas-company-count');
    if (!grid) return;
    var visible = 0;
    grid.querySelectorAll('.atlas-card').forEach(function (card) {
      var co = getCompany(card.dataset.companyId);
      if (!co) return;
      var matchesCat = !companyState.category || co.category === companyState.category;
      var s = companyState.search;
      var matchesSearch = !s ||
        co.name.toLowerCase().indexOf(s) !== -1 ||
        (co.fullName || '').toLowerCase().indexOf(s) !== -1 ||
        (co.country || '').toLowerCase().indexOf(s) !== -1 ||
        (co.roleInStack || '').toLowerCase().indexOf(s) !== -1 ||
        (co.shortExplanation || '').toLowerCase().indexOf(s) !== -1;
      var show = matchesCat && matchesSearch;
      card.classList.toggle('hidden', !show);
      if (show) visible++;
    });
    if (count) {
      var total = COMPANY_PROFILES.length;
      count.textContent = (companyState.search || companyState.category)
        ? visible + ' of ' + total + ' companies'
        : total + ' companies';
    }
  }

  /* ============================================
     PRODUCT EXPLORER
     Mirrors the company explorer pattern.
     ============================================ */
  var productState = { search: '', category: null };

  function buildProductExplorer() {
    var grid = document.getElementById('atlas-product-grid');
    var filters = document.getElementById('atlas-product-filters');
    var search = document.getElementById('atlas-product-search');
    if (!grid || typeof PRODUCT_PROFILES === 'undefined') return;

    /* Compile a filter list of categories that actually appear in the data,
       in the order PRODUCT_CATEGORIES defines. */
    var usedCats = {};
    for (var i = 0; i < PRODUCT_PROFILES.length; i++) {
      usedCats[PRODUCT_PROFILES[i].category] = true;
    }
    var chipsHtml = '<button class="atlas-filter-chip active" data-cat="">All</button>';
    for (var ci = 0; ci < PRODUCT_CATEGORIES.length; ci++) {
      var cat = PRODUCT_CATEGORIES[ci];
      if (!usedCats[cat.id]) continue;
      chipsHtml += '<button class="atlas-filter-chip" data-cat="' + cat.id + '">' + escapeHtml(cat.label) + '</button>';
    }
    if (filters) filters.innerHTML = chipsHtml;

    for (var p = 0; p < PRODUCT_PROFILES.length; p++) {
      var pr = PRODUCT_PROFILES[p];
      var catMeta = getProductCategory(pr.category);
      var color = catMeta ? catMeta.color : '#A0AEC0';
      var catLabel = catMeta ? catMeta.label : pr.category;

      var card = document.createElement('button');
      card.className = 'atlas-card';
      card.dataset.productId = pr.id;
      card.dataset.cat = pr.category;
      card.style.color = color;
      card.innerHTML =
        '<div class="atlas-card-meta-row">' +
          '<span class="atlas-card-cat">' + escapeHtml(catLabel) + '</span>' +
          (pr.company ? '<span class="atlas-card-meta-sep" style="color:var(--text-tertiary)">' + escapeHtml(pr.company) + '</span>' : '') +
        '</div>' +
        '<div class="atlas-card-name" style="color:var(--text)">' + escapeHtml(pr.name) + '</div>' +
        '<div class="atlas-card-role">' + (pr.whatItIs ? pr.whatItIs.split('.')[0] + '.' : '') + '</div>';
      grid.appendChild(card);
    }

    grid.addEventListener('click', function (e) {
      var card = e.target.closest('.atlas-card');
      if (card && card.dataset.productId) {
        openProfile('product', card.dataset.productId);
      }
    });

    if (filters) {
      filters.addEventListener('click', function (e) {
        var chip = e.target.closest('.atlas-filter-chip');
        if (!chip) return;
        filters.querySelectorAll('.atlas-filter-chip').forEach(function (c) { c.classList.remove('active'); });
        chip.classList.add('active');
        productState.category = chip.dataset.cat || null;
        applyProductFilters();
      });
    }

    if (search) {
      var debounce;
      search.addEventListener('input', function () {
        clearTimeout(debounce);
        debounce = setTimeout(function () {
          productState.search = search.value.trim().toLowerCase();
          applyProductFilters();
        }, 120);
      });
    }

    applyProductFilters();
  }

  function applyProductFilters() {
    var grid = document.getElementById('atlas-product-grid');
    var count = document.getElementById('atlas-product-count');
    if (!grid) return;
    var visible = 0;
    grid.querySelectorAll('.atlas-card').forEach(function (card) {
      var pr = getProduct(card.dataset.productId);
      if (!pr) return;
      var matchesCat = !productState.category || pr.category === productState.category;
      var s = productState.search;
      var matchesSearch = !s ||
        pr.name.toLowerCase().indexOf(s) !== -1 ||
        (pr.company || '').toLowerCase().indexOf(s) !== -1 ||
        (pr.whatItIs || '').toLowerCase().indexOf(s) !== -1;
      var show = matchesCat && matchesSearch;
      card.classList.toggle('hidden', !show);
      if (show) visible++;
    });
    if (count) {
      var total = PRODUCT_PROFILES.length;
      count.textContent = (productState.search || productState.category)
        ? visible + ' of ' + total + ' products'
        : total + ' products';
    }
  }

  /* ============================================
     LEARNING PATHS — guided tracks
     ============================================ */
  function buildLearningPaths() {
    var grid = document.getElementById('atlas-learn-grid');
    if (!grid || typeof LEARNING_PATHS === 'undefined') return;

    for (var i = 0; i < LEARNING_PATHS.length; i++) {
      var lp = LEARNING_PATHS[i];
      var card = document.createElement('div');
      card.className = 'atlas-learn-card atlas-reveal';

      var stepsHtml = '';
      for (var s = 0; s < lp.steps.length; s++) {
        var step = lp.steps[s];
        var resolved = resolveRef(step.ref);
        if (!resolved || !resolved.entity) continue;
        var name = resolved.entity.name || resolved.entity.title || resolved.id;
        stepsHtml +=
          '<li class="atlas-learn-step" tabindex="0" role="button" data-open-ref="' + step.ref + '">' +
            '<div class="atlas-learn-step-text">' +
              '<div class="atlas-learn-step-name">' + escapeHtml(name) + '</div>' +
              '<div class="atlas-learn-step-note">' + escapeHtml(step.note || '') + '</div>' +
            '</div>' +
            '<div class="atlas-learn-step-type">' + resolved.type + '</div>' +
          '</li>';
      }

      card.innerHTML =
        '<div class="atlas-learn-audience">' + escapeHtml(lp.audience) + '</div>' +
        '<div class="atlas-learn-title">' + escapeHtml(lp.title) + '</div>' +
        '<p class="atlas-learn-desc">' + escapeHtml(lp.description) + '</p>' +
        '<ol class="atlas-learn-steps">' + stepsHtml + '</ol>';

      grid.appendChild(card);
    }

    grid.addEventListener('click', function (e) {
      var step = e.target.closest('.atlas-learn-step');
      if (!step || !step.dataset.openRef) return;
      var resolved = resolveRef(step.dataset.openRef);
      if (!resolved || !resolved.entity) return;
      if (resolved.type === 'path') {
        var target = document.querySelector('[data-path-id="' + resolved.id + '"]');
        if (target) {
          target.classList.add('open');
          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        openProfile(resolved.type, resolved.id);
      }
    });

    grid.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      var step = e.target.closest('.atlas-learn-step');
      if (!step) return;
      e.preventDefault();
      step.click();
    });
  }

  /* ============================================
     ENTRY GROUPS — “What do you want to understand?”

     Three reader profiles, each with four cards. Replaces the old flat
     ten-card grid with something a first-time visitor can scan in
     seconds.
     ============================================ */
  function buildEntryCards() {
    var grid = document.getElementById('atlas-entry-grid');
    if (!grid) return;

    /* If the new ENTRY_GROUPS exists, use the grouped layout. */
    if (typeof ENTRY_GROUPS !== 'undefined' && ENTRY_GROUPS.length) {
      grid.classList.remove('atlas-entry-grid');
      grid.classList.add('atlas-entry-groups');
      var html = '';
      for (var i = 0; i < ENTRY_GROUPS.length; i++) {
        var g = ENTRY_GROUPS[i];
        var cardsHtml = '';
        for (var j = 0; j < g.cards.length; j++) {
          var c = g.cards[j];
          cardsHtml +=
            '<button class="atlas-entry-card" data-target="' + c.target + '">' +
              '<div class="atlas-entry-card-q">' + escapeHtml(c.title) + '</div>' +
              '<div class="atlas-entry-card-note">' + c.note + '</div>' +
              '<div class="atlas-entry-card-arrow">Open &rarr;</div>' +
            '</button>';
        }
        html += '<div class="atlas-entry-group">' +
                  '<div class="atlas-entry-group-head">' +
                    '<div class="atlas-entry-group-label">' + escapeHtml(g.label) + '</div>' +
                    '<div class="atlas-entry-group-blurb">' + escapeHtml(g.blurb) + '</div>' +
                  '</div>' +
                  '<div class="atlas-entry-group-cards">' + cardsHtml + '</div>' +
                '</div>';
      }
      grid.innerHTML = html;
    } else if (typeof ENTRY_CARDS !== 'undefined') {
      /* Fallback: flat grid for older data. */
      for (var k = 0; k < ENTRY_CARDS.length; k++) {
        var ec = ENTRY_CARDS[k];
        var btn = document.createElement('button');
        btn.className = 'atlas-entry-card';
        btn.dataset.target = ec.target;
        btn.innerHTML =
          '<div class="atlas-entry-card-q">' + escapeHtml(ec.title) + '</div>' +
          '<div class="atlas-entry-card-note">' + escapeHtml(ec.note) + '</div>' +
          '<div class="atlas-entry-card-arrow">Open &rarr;</div>';
        grid.appendChild(btn);
      }
    }

    grid.addEventListener('click', function (e) {
      var card = e.target.closest('.atlas-entry-card');
      if (!card || !card.dataset.target) return;
      followTarget(card.dataset.target);
    });
  }

  /* ============================================
     FLAGSHIP COMPANIES — 12 curated cards
     ============================================ */
  function buildFlagshipCompanies() {
    var grid = document.getElementById('atlas-flagship-grid');
    if (!grid || typeof FLAGSHIP_COMPANIES === 'undefined') return;

    for (var i = 0; i < FLAGSHIP_COMPANIES.length; i++) {
      var f = FLAGSHIP_COMPANIES[i];
      var btn = document.createElement('button');
      btn.className = 'atlas-flagship-card';
      btn.dataset.target = f.ref;
      btn.innerHTML =
        '<div class="atlas-flagship-name">' + escapeHtml(f.name) + '</div>' +
        '<div class="atlas-flagship-takeaway">&ldquo;' + f.takeaway + '&rdquo;</div>' +
        '<div class="atlas-flagship-meta">' +
          '<dl class="atlas-flagship-row"><dt>Role</dt><dd>' + f.role + '</dd></dl>' +
          '<dl class="atlas-flagship-row"><dt>Why</dt><dd>' + f.relationship + '</dd></dl>' +
        '</div>' +
        '<div class="atlas-flagship-link">Open profile &rarr;</div>';
      grid.appendChild(btn);
    }

    grid.addEventListener('click', function (e) {
      var card = e.target.closest('.atlas-flagship-card');
      if (!card || !card.dataset.target) return;
      followTarget(card.dataset.target);
    });
  }

  /* ============================================
     PROGRESSIVE DISCLOSURE — “View all” toggles
     ============================================ */
  function bindDisclosures() {
    document.querySelectorAll('.atlas-disclosure').forEach(function (block) {
      var toggle = block.querySelector('.atlas-disclosure-toggle');
      var body   = block.querySelector('.atlas-disclosure-body');
      if (!toggle || !body) return;
      toggle.addEventListener('click', function () {
        var open = block.dataset.open === 'true';
        if (open) {
          block.dataset.open = 'false';
          toggle.setAttribute('aria-expanded', 'false');
          body.hidden = true;
        } else {
          block.dataset.open = 'true';
          toggle.setAttribute('aria-expanded', 'true');
          body.hidden = false;
        }
      });
    });
  }

  /* Open a disclosure programmatically when a deep-link points inside it. */
  function ensureDisclosureOpen(blockId) {
    var block = document.querySelector('[data-disclosure="' + blockId + '"]');
    if (!block) return;
    if (block.dataset.open !== 'true') {
      var toggle = block.querySelector('.atlas-disclosure-toggle');
      if (toggle) toggle.click();
    }
  }

  /* Generic dispatch from a target string.
     Supports type:id refs and the synthetic "section:id" form for entry
     cards that should just scroll to a page section. */
  function followTarget(target) {
    if (!target) return;
    if (target.indexOf('section:') === 0) {
      var sectionId = target.split(':')[1];
      var sectionEl = document.getElementById(sectionId);
      if (sectionEl) sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    var resolved = resolveRef(target);
    if (!resolved) return;
    if (resolved.type === 'path') {
      var sec = document.getElementById('paths');
      if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      var card = document.querySelector('[data-path-id="' + resolved.id + '"]');
      if (card) {
        card.classList.add('open');
        setTimeout(function () { card.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 250);
      }
    } else if (resolved.type === 'learn') {
      var lpSec = document.getElementById('learn');
      if (lpSec) lpSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (resolved.type === 'scenario') {
      var scSec = document.getElementById('scenarios');
      if (scSec) scSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      openProfile('scenario', resolved.id);
    } else if (resolved.type === 'question') {
      openQuestion(resolved.id);
    } else {
      openProfile(resolved.type, resolved.id);
    }
  }

  /* Open a Q&A entry by id. Routes to the slide-in answer panel via the
     unified profile system. */
  function openQuestion(qid) {
    if (!getQuestion(qid)) return;
    openProfile('question', qid);
  }

  /* ============================================
     FLOW MAP — value chain + SVG edges
     ============================================ */
  var flowState = { mode: null };

  function buildFlowMap() {
    var grid = document.getElementById('atlas-flow-grid');
    var modes = document.getElementById('atlas-flow-modes');
    if (!grid || typeof FLOW_COLUMNS === 'undefined') return;

    /* Columns */
    for (var c = 0; c < FLOW_COLUMNS.length; c++) {
      var col = FLOW_COLUMNS[c];
      var colEl = document.createElement('div');
      colEl.className = 'atlas-flow-col';
      colEl.dataset.colId = col.id;
      var html = '<div class="atlas-flow-col-hd">' + escapeHtml(col.label) + '</div>';
      for (var i = 0; i < col.entities.length; i++) {
        var ref = col.entities[i];
        var resolved = resolveRef(ref);
        if (!resolved || !resolved.entity) continue;
        var name = resolved.entity.name || resolved.entity.title || ref;
        html += '<button class="atlas-flow-chip" data-entity-ref="' + ref + '">' + escapeHtml(name) + '</button>';
      }
      colEl.innerHTML = html;
      grid.appendChild(colEl);
    }

    /* Mode buttons */
    if (modes && typeof FLOW_MODES !== 'undefined') {
      for (var m = 0; m < FLOW_MODES.length; m++) {
        var mode = FLOW_MODES[m];
        var btn = document.createElement('button');
        btn.className = 'atlas-mode-btn';
        btn.textContent = mode.label;
        btn.dataset.flowMode = mode.id;
        btn.setAttribute('aria-pressed', 'false');
        modes.appendChild(btn);
      }
      modes.addEventListener('click', function (e) {
        var b = e.target.closest('[data-flow-mode]');
        if (!b) return;
        setFlowMode(flowState.mode === b.dataset.flowMode ? null : b.dataset.flowMode);
      });
    }

    /* Chip click → open profile */
    grid.addEventListener('click', function (e) {
      var chip = e.target.closest('.atlas-flow-chip');
      if (!chip) return;
      var resolved = resolveRef(chip.dataset.entityRef);
      if (resolved && resolved.entity) openProfile(resolved.type, resolved.id);
    });

    /* Recompute edges on resize so SVG paths stay aligned. */
    window.addEventListener('resize', function () {
      if (flowState.mode) drawFlowEdges(flowState.mode);
    });

    /* Auto-activate the critical-path mode on load so the canonical
       route is visible without a click. The user can switch or clear it. */
    setTimeout(function () { setFlowMode('critical'); }, 100);
  }

  function setFlowMode(modeId) {
    flowState.mode = modeId;
    document.querySelectorAll('[data-flow-mode]').forEach(function (b) {
      var on = b.dataset.flowMode === modeId;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    var explainEl = document.getElementById('atlas-flow-explain');
    if (modeId === null) {
      if (explainEl) explainEl.classList.remove('open');
      document.querySelectorAll('.atlas-flow-col').forEach(function (col) { col.classList.remove('active','dim'); });
      document.querySelectorAll('.atlas-flow-chip').forEach(function (c) { c.classList.remove('highlighted','dim'); });
      drawFlowEdges(null);
      return;
    }

    var mode = null;
    for (var i = 0; i < FLOW_MODES.length; i++) {
      if (FLOW_MODES[i].id === modeId) { mode = FLOW_MODES[i]; break; }
    }
    if (!mode) return;

    if (explainEl) {
      explainEl.innerHTML = '<div><div class="atlas-flow-explain-content"><strong style="color:var(--text);">' + escapeHtml(mode.label) + '.</strong> ' + escapeHtml(mode.explanation) + '</div></div>';
      explainEl.classList.add('open');
    }

    var activeCols = mode.columns || [];
    document.querySelectorAll('.atlas-flow-col').forEach(function (col) {
      var on = activeCols.indexOf(col.dataset.colId) !== -1;
      col.classList.toggle('active', on);
      col.classList.toggle('dim', !on);
    });

    /* Chip-level highlight: any chip whose entity participates in an edge with this mode */
    var highlightedRefs = {};
    if (modeId === 'critical' && typeof CRITICAL_PATH_EDGES !== 'undefined') {
      for (var ce = 0; ce < CRITICAL_PATH_EDGES.length; ce++) {
        highlightedRefs[CRITICAL_PATH_EDGES[ce].from] = true;
        highlightedRefs[CRITICAL_PATH_EDGES[ce].to]   = true;
      }
    } else if (typeof ENTITY_EDGES !== 'undefined') {
      for (var e = 0; e < ENTITY_EDGES.length; e++) {
        var edge = ENTITY_EDGES[e];
        if (!edge.modes || edge.modes.indexOf(modeId) === -1) continue;
        highlightedRefs[edge.from] = true;
        highlightedRefs[edge.to]   = true;
      }
    }
    document.querySelectorAll('.atlas-flow-chip').forEach(function (chip) {
      var ref = chip.dataset.entityRef;
      var col = chip.closest('.atlas-flow-col');
      var inActiveCol = col && col.classList.contains('active');
      if (highlightedRefs[ref] && inActiveCol) {
        chip.classList.add('highlighted');
        chip.classList.remove('dim');
      } else {
        chip.classList.remove('highlighted');
        chip.classList.toggle('dim', !inActiveCol);
      }
    });

    drawFlowEdges(modeId);
  }

  function drawFlowEdges(modeId) {
    var svg = document.getElementById('atlas-flow-edges');
    var wrap = document.getElementById('atlas-flow-wrap');
    if (!svg || !wrap) return;

    while (svg.firstChild) svg.removeChild(svg.firstChild);
    if (!modeId || typeof ENTITY_EDGES === 'undefined') return;

    var wrapRect = wrap.getBoundingClientRect();
    svg.setAttribute('viewBox', '0 0 ' + wrapRect.width + ' ' + wrapRect.height);
    svg.setAttribute('width', wrapRect.width);
    svg.setAttribute('height', wrapRect.height);

    /* Build a ref → element lookup. */
    var chipMap = {};
    document.querySelectorAll('.atlas-flow-chip').forEach(function (c) { chipMap[c.dataset.entityRef] = c; });

    /* Choose the edge set: critical-path uses its own list, other modes
       filter the full ENTITY_EDGES table by the mode tag. */
    var edges;
    if (modeId === 'critical' && typeof CRITICAL_PATH_EDGES !== 'undefined') {
      edges = CRITICAL_PATH_EDGES.map(function (e) { return { from: e.from, to: e.to, strength: 'critical' }; });
    } else {
      edges = [];
      for (var ei = 0; ei < ENTITY_EDGES.length; ei++) {
        var ed = ENTITY_EDGES[ei];
        if (!ed.modes || ed.modes.indexOf(modeId) === -1) continue;
        edges.push(ed);
      }
    }

    for (var i = 0; i < edges.length; i++) {
      var edge = edges[i];
      var fromEl = chipMap[edge.from];
      var toEl   = chipMap[edge.to];
      if (!fromEl || !toEl) continue;

      var fr = fromEl.getBoundingClientRect();
      var tr = toEl.getBoundingClientRect();

      var x1 = fr.right - wrapRect.left;
      var y1 = fr.top + fr.height / 2 - wrapRect.top;
      var x2 = tr.left  - wrapRect.left;
      var y2 = tr.top + tr.height / 2 - wrapRect.top;

      /* Skip backwards or same-column edges (would clutter the diagram). */
      if (x2 <= x1) continue;

      var dx = (x2 - x1) * 0.5;
      var d = 'M' + x1 + ',' + y1 + ' C' + (x1 + dx) + ',' + y1 + ' ' + (x2 - dx) + ',' + y2 + ' ' + x2 + ',' + y2;

      var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', d);
      path.classList.add('visible');
      if (edge.strength === 'critical') path.classList.add('critical');
      svg.appendChild(path);
    }
  }

  /* ============================================
     SCENARIOS
     ============================================ */
  var activeScenarioId = null;

  function buildScenarios() {
    var grid = document.getElementById('atlas-scenario-grid');
    if (!grid || typeof SCENARIOS === 'undefined') return;
    for (var i = 0; i < SCENARIOS.length; i++) {
      var s = SCENARIOS[i];
      var card = document.createElement('button');
      card.className = 'atlas-scenario-card atlas-reveal confidence-' + (s.confidence || 'medium');
      card.dataset.scenarioId = s.id;
      card.innerHTML =
        '<div class="atlas-scenario-meta">' +
          '<span class="atlas-scenario-conf">Confidence: ' + (s.confidence || 'medium') + '</span>' +
        '</div>' +
        '<div class="atlas-scenario-title">' + escapeHtml(s.title) + '</div>' +
        '<div class="atlas-scenario-shock">' + (s.shock || '') + '</div>';
      grid.appendChild(card);
    }
    grid.addEventListener('click', function (e) {
      var card = e.target.closest('.atlas-scenario-card');
      if (!card) return;
      openProfile('scenario', card.dataset.scenarioId);
    });
  }

  function activateScenario(s) {
    activeScenarioId = s.id;
    /* Mark active card */
    document.querySelectorAll('.atlas-scenario-card').forEach(function (el) {
      el.classList.toggle('active', el.dataset.scenarioId === s.id);
    });
    /* Clear previous highlights */
    document.querySelectorAll('.scenario-active').forEach(function (el) {
      el.classList.remove('scenario-active');
    });
    /* Apply new highlights across atlas, mobile grid, taxonomy and flow chips. */
    if (s.affected && s.affected.length) {
      var hint = document.getElementById('atlas-scenario-hint');
      if (hint) hint.textContent = s.affected.length + ' entities highlighted across the atlas, taxonomy and flow map.';
      for (var i = 0; i < s.affected.length; i++) {
        var ref = s.affected[i];
        var resolved = resolveRef(ref);
        if (!resolved) continue;
        var id = resolved.id, type = resolved.type;
        if (type === 'node') {
          document.querySelectorAll('.atlas-node[data-node-id="' + cssEscape(id) + '"]').forEach(function (el) { el.classList.add('scenario-active'); });
          document.querySelectorAll('.atlas-mobile-node[data-node-id="' + cssEscape(id) + '"]').forEach(function (el) { el.classList.add('scenario-active'); });
          document.querySelectorAll('.atlas-tax-chip[data-node-id="' + cssEscape(id) + '"]').forEach(function (el) { el.classList.add('scenario-active'); });
        } else if (type === 'company') {
          document.querySelectorAll('[data-company-id="' + cssEscape(id) + '"]').forEach(function (el) { el.classList.add('scenario-active'); });
        } else if (type === 'product') {
          document.querySelectorAll('[data-product-id="' + cssEscape(id) + '"]').forEach(function (el) { el.classList.add('scenario-active'); });
        }
        document.querySelectorAll('.atlas-flow-chip[data-entity-ref="' + cssEscape(ref) + '"]').forEach(function (el) { el.classList.add('scenario-active'); });
      }
    }
  }

  function clearScenario() {
    activeScenarioId = null;
    document.querySelectorAll('.atlas-scenario-card.active').forEach(function (el) { el.classList.remove('active'); });
    document.querySelectorAll('.scenario-active').forEach(function (el) { el.classList.remove('scenario-active'); });
    var hint = document.getElementById('atlas-scenario-hint');
    if (hint) hint.textContent = '';
  }

  function cssEscape(s) {
    /* Minimal CSS.escape polyfill for the limited characters in our ids. */
    return String(s || '').replace(/([\#\.\:\[\]\(\)\\\"\'])/g, '\\$1');
  }

  /* ============================================
     ANATOMY CARDS
     ============================================ */
  function buildAnatomies() {
    var grid = document.getElementById('atlas-anatomy-grid');
    if (!grid || typeof PRODUCT_ANATOMIES === 'undefined') return;
    for (var i = 0; i < PRODUCT_ANATOMIES.length; i++) {
      var a = PRODUCT_ANATOMIES[i];
      var card = document.createElement('div');
      card.className = 'atlas-anatomy-card atlas-reveal';
      var diagram = getAnatomyDiagram(a.id);
      if (diagram) card.classList.add('atlas-anatomy-card--with-diagram');
      var partsHtml = '';
      for (var p = 0; p < a.parts.length; p++) {
        partsHtml += '<li class="atlas-anatomy-part"><span class="atlas-anatomy-part-name">' + escapeHtml(a.parts[p].name) + '</span><span class="atlas-anatomy-part-role">' + escapeHtml(a.parts[p].role) + '</span></li>';
      }
      card.innerHTML =
        '<div class="atlas-anatomy-title">' + escapeHtml(a.title) + '</div>' +
        '<div class="atlas-anatomy-desc">' + (a.explanation || '') + '</div>' +
        (diagram ? '<div class="atlas-diagram-wrap">' + diagram + '</div>' : '') +
        '<ul class="atlas-anatomy-parts">' + partsHtml + '</ul>';
      grid.appendChild(card);
    }
  }

  /* ============================================
     TIMELINE
     ============================================ */
  function buildTimeline() {
    var el = document.getElementById('atlas-timeline');
    if (!el || typeof TIMELINE_TRACKS === 'undefined') return;
    for (var i = 0; i < TIMELINE_TRACKS.length; i++) {
      var t = TIMELINE_TRACKS[i];
      var track = document.createElement('div');
      track.className = 'atlas-tl-track atlas-reveal';
      var eventsHtml = '';
      for (var e = 0; e < t.events.length; e++) {
        var ev = t.events[e];
        var refAttr = ev.ref ? ' data-ref="' + ev.ref + '"' : '';
        eventsHtml +=
          '<button class="atlas-tl-event"' + refAttr + '>' +
            '<div class="atlas-tl-era">' + escapeHtml(ev.era || '') + '</div>' +
            '<div class="atlas-tl-name">' + escapeHtml(ev.name || '') + '</div>' +
            (ev.why ? '<div class="atlas-tl-why">' + escapeHtml(ev.why) + '</div>' : '') +
          '</button>';
      }
      track.innerHTML =
        '<div class="atlas-tl-label">' + escapeHtml(t.label) + '</div>' +
        '<div class="atlas-tl-events">' + eventsHtml + '</div>';
      el.appendChild(track);
    }
    el.addEventListener('click', function (ev) {
      var btn = ev.target.closest('.atlas-tl-event[data-ref]');
      if (!btn) return;
      followTarget(btn.dataset.ref);
    });
  }

  /* ============================================
     COMPARE
     ============================================ */
  function buildCompare() {
    var leftSel = document.getElementById('atlas-compare-left');
    var rightSel = document.getElementById('atlas-compare-right');
    var presets = document.getElementById('atlas-compare-presets');
    if (!leftSel || !rightSel) return;

    /* Build a single options list: companies + products + nodes. */
    var optionsHtml = '<option value="">— pick one —</option>';
    optionsHtml += '<optgroup label="Companies">';
    if (typeof COMPANY_PROFILES !== 'undefined') {
      for (var i = 0; i < COMPANY_PROFILES.length; i++) {
        optionsHtml += '<option value="company:' + COMPANY_PROFILES[i].id + '">' + escapeHtml(COMPANY_PROFILES[i].name) + '</option>';
      }
    }
    optionsHtml += '</optgroup><optgroup label="Products & technologies">';
    if (typeof PRODUCT_PROFILES !== 'undefined') {
      for (var j = 0; j < PRODUCT_PROFILES.length; j++) {
        optionsHtml += '<option value="product:' + PRODUCT_PROFILES[j].id + '">' + escapeHtml(PRODUCT_PROFILES[j].name) + '</option>';
      }
    }
    optionsHtml += '</optgroup><optgroup label="Atlas nodes">';
    for (var k = 0; k < ATLAS_NODES.length; k++) {
      optionsHtml += '<option value="node:' + ATLAS_NODES[k].id + '">' + escapeHtml(ATLAS_NODES[k].name) + '</option>';
    }
    optionsHtml += '</optgroup>';

    leftSel.innerHTML = optionsHtml;
    rightSel.innerHTML = optionsHtml;

    /* Preset chips */
    if (presets && typeof COMPARE_PRESETS !== 'undefined') {
      for (var p = 0; p < COMPARE_PRESETS.length; p++) {
        var pr = COMPARE_PRESETS[p];
        var btn = document.createElement('button');
        btn.className = 'atlas-compare-preset';
        btn.textContent = pr.label;
        btn.dataset.left = pr.left;
        btn.dataset.right = pr.right;
        presets.appendChild(btn);
      }
      presets.addEventListener('click', function (e) {
        var btn = e.target.closest('.atlas-compare-preset');
        if (!btn) return;
        leftSel.value = btn.dataset.left;
        rightSel.value = btn.dataset.right;
        renderCompareTable();
      });
    }

    leftSel.addEventListener('change', renderCompareTable);
    rightSel.addEventListener('change', renderCompareTable);

    /* Default state: prompt the user. */
    renderCompareTable();
  }

  function compareSnapshot(ref) {
    var resolved = resolveRef(ref);
    if (!resolved || !resolved.entity) return null;
    var e = resolved.entity;
    var snap = { name: e.name || '', role: '', rel: '', deps: [], cust: [], why: '', bn: [], type: resolved.type };
    if (resolved.type === 'company') {
      snap.role = e.roleInStack || '';
      snap.rel  = (getRelationshipMeta(e.relationshipType) || {}).label || '';
      snap.deps = e.upstreamDependencies || [];
      snap.cust = e.downstreamCustomers || [];
      snap.why  = e.whyItMattersForAI || '';
      snap.bn   = e.keyBottlenecks || [];
    } else if (resolved.type === 'product') {
      snap.role = e.whatItIs || '';
      snap.rel  = e.company ? 'Made by ' + e.company : '';
      snap.deps = e.dependsOn || [];
      snap.cust = e.usedBy || [];
      snap.why  = e.whyItMatters || '';
      snap.bn   = [];
    } else if (resolved.type === 'node') {
      snap.role = e.short || '';
      snap.rel  = e.layer ? getLayerLabel(e.layer) : '';
      snap.deps = e.dependsOn || [];
      snap.cust = e.usedBy || [];
      snap.why  = e.why || '';
      snap.bn   = e.bottleneckLevel ? [e.bottleneckLevel + ' bottleneck'] : [];
    }
    return snap;
  }

  function renderCompareTable() {
    var leftRef = document.getElementById('atlas-compare-left').value;
    var rightRef = document.getElementById('atlas-compare-right').value;
    var table = document.getElementById('atlas-compare-table');
    if (!table) return;

    if (!leftRef || !rightRef) {
      table.innerHTML = '<div class="atlas-compare-empty">Pick two entities to compare. Try a preset above to start.</div>';
      return;
    }

    var L = compareSnapshot(leftRef);
    var R = compareSnapshot(rightRef);
    if (!L || !R) { table.innerHTML = '<div class="atlas-compare-empty">Could not resolve one of the selections.</div>'; return; }

    function listCell(items) {
      if (!items || !items.length) return '<span style="color:var(--text-tertiary);font-style:italic;">—</span>';
      return items.slice(0, 6).map(function (s) { return '<div>· ' + s + '</div>'; }).join('');
    }
    function row(label, lhs, rhs) {
      return '<div class="atlas-compare-row">' +
        '<div class="atlas-compare-cell label">' + label + '</div>' +
        '<div class="atlas-compare-cell">' + lhs + '</div>' +
        '<div class="atlas-compare-cell">' + rhs + '</div>' +
      '</div>';
    }

    var html = '';
    html += '<div class="atlas-compare-row head">' +
      '<div class="atlas-compare-cell"></div>' +
      '<div class="atlas-compare-cell">' + escapeHtml(L.name) + '</div>' +
      '<div class="atlas-compare-cell">' + escapeHtml(R.name) + '</div>' +
    '</div>';
    html += row('Role',         escapeHtml(L.role || ''), escapeHtml(R.role || ''));
    html += row('NVIDIA link',  escapeHtml(L.rel  || ''), escapeHtml(R.rel  || ''));
    html += row('Depends on',   listCell(L.deps), listCell(R.deps));
    html += row('Used by',      listCell(L.cust), listCell(R.cust));
    html += row('Why it matters', L.why || '<span style="color:var(--text-tertiary);font-style:italic;">—</span>', R.why || '<span style="color:var(--text-tertiary);font-style:italic;">—</span>');
    html += row('Bottlenecks',  listCell(L.bn),   listCell(R.bn));
    table.innerHTML = html;
  }

  /* ============================================
     SOURCES — trust layer

     Each source card now shows what claim categories the source backs
     (`supports`) and which entities cite it (`usedIn`). The mapping
     comes from SOURCE_CLAIM_MAP and makes the citation chain auditable.
     ============================================ */
  function getSourceClaim(sourceId) {
    if (typeof SOURCE_CLAIM_MAP === 'undefined') return null;
    for (var i = 0; i < SOURCE_CLAIM_MAP.length; i++) {
      if (SOURCE_CLAIM_MAP[i].sourceId === sourceId) return SOURCE_CLAIM_MAP[i];
    }
    return null;
  }

  /* Build a clickable chip for a "used in" ref. Routes via followTarget
     when clicked so the reader can see the entity that cites the source. */
  function renderSourceUsedInChip(ref) {
    var resolved = resolveRef(ref);
    var label = ref;
    if (resolved && resolved.entity) {
      label = resolved.entity.name || resolved.entity.title || resolved.entity.question || ref;
    }
    return '<a href="#" class="atlas-source-usedin-chip" data-open-ref="' + ref + '">' + escapeHtml(label) + '</a>';
  }

  function buildSources() {
    var list = document.getElementById('atlas-source-list');
    if (!list || typeof SOURCES === 'undefined') return;

    for (var i = 0; i < SOURCES.length; i++) {
      var s = SOURCES[i];
      var claim = getSourceClaim(s.id);

      var supportsHtml = '';
      if (claim && claim.supports && claim.supports.length) {
        var bullets = '';
        for (var k = 0; k < claim.supports.length; k++) {
          bullets += '<li>' + escapeHtml(claim.supports[k]) + '</li>';
        }
        supportsHtml =
          '<div class="atlas-source-item-block">' +
            '<div class="atlas-source-item-label">Supports</div>' +
            '<ul class="atlas-source-item-supports">' + bullets + '</ul>' +
          '</div>';
      }

      var usedInHtml = '';
      if (claim && claim.usedIn && claim.usedIn.length) {
        var chips = '';
        for (var u = 0; u < claim.usedIn.length; u++) {
          chips += renderSourceUsedInChip(claim.usedIn[u]);
        }
        usedInHtml =
          '<div class="atlas-source-item-block">' +
            '<div class="atlas-source-item-label">Cited in</div>' +
            '<div class="atlas-source-item-usedin">' + chips + '</div>' +
          '</div>';
      }

      var item = document.createElement('div');
      item.className = 'atlas-source-item atlas-source-item--rich atlas-reveal type-' + escapeHtml(s.type || 'vendor');
      item.innerHTML =
        '<div class="atlas-source-item-head">' +
          '<div class="atlas-source-item-pub">' + escapeHtml(s.publisher || '') + ' &middot; ' + escapeHtml(s.type || '') + '</div>' +
          '<div class="atlas-source-item-title">' + escapeHtml(s.title || '') + '</div>' +
          (s.url ? '<a class="atlas-source-item-link" href="' + s.url + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(s.url) + ' &nearr;</a>' : '') +
        '</div>' +
        supportsHtml +
        usedInHtml;
      list.appendChild(item);
    }

    /* Click on a "Cited in" chip routes the reader to that entity. */
    list.addEventListener('click', function (e) {
      var chip = e.target.closest('.atlas-source-usedin-chip');
      if (!chip || !chip.dataset.openRef) return;
      e.preventDefault();
      followTarget(chip.dataset.openRef);
    });
  }

  /* ============================================
     QUESTION EXPLORER

     Search + 4 filter groups (audience, category, difficulty, confidence)
     drive a grid of concise question cards. Clicking a card opens the
     full answer in the slide-in detail panel via openProfile('question').
     ============================================ */
  var questionState = { search: '', audience: null, category: null, difficulty: null, confidence: null };

  /* Capitalise the first letter of an audience or confidence label for display. */
  function titleCase(s) {
    if (!s) return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  /* Pretty label for confidence values that are stored as schema keys. */
  function confidenceLabel(v) {
    if (v === 'forwardLooking') return 'Forward-looking';
    if (v === 'sourced')        return 'Sourced';
    if (v === 'inferred')       return 'Inferred';
    if (v === 'context')        return 'Market context';
    return v;
  }

  function buildQuestionExplorer() {
    var grid = document.getElementById('atlas-questions');
    var BANK = (typeof QUESTION_BANK !== 'undefined') ? QUESTION_BANK
             : (typeof QUESTIONS      !== 'undefined') ? QUESTIONS
             : null;
    if (!grid || !BANK) return;

    /* ── Build the four filter chip groups from the data ── */
    var seen = { audience: {}, category: {}, difficulty: {}, confidence: {} };
    for (var i = 0; i < BANK.length; i++) {
      var q = BANK[i];
      if (q.audience)   seen.audience[q.audience]     = true;
      if (q.category)   seen.category[q.category]     = true;
      if (q.difficulty) seen.difficulty[q.difficulty] = true;
      if (q.confidence) seen.confidence[q.confidence] = true;
    }

    var orderedAudiences   = ["beginner", "operator", "investor", "technical", "expert"].filter(function (v) { return seen.audience[v]; });
    var orderedDifficulty  = ["Beginner", "Intermediate", "Advanced", "Expert"].filter(function (v) { return seen.difficulty[v]; });
    var orderedConfidences = ["sourced", "inferred", "context", "forwardLooking"].filter(function (v) { return seen.confidence[v]; });
    var orderedCategories  = Object.keys(seen.category).sort();

    var renderChips = function (groupId, values, displayFn) {
      var el = document.getElementById(groupId);
      if (!el) return;
      var html = '<button class="atlas-q-chip active" data-value="">All</button>';
      for (var k = 0; k < values.length; k++) {
        var v = values[k];
        html += '<button class="atlas-q-chip" data-value="' + escapeHtml(v) + '">' + escapeHtml(displayFn ? displayFn(v) : v) + '</button>';
      }
      el.innerHTML = html;
    };
    renderChips('atlas-q-audience-filter',   orderedAudiences,   titleCase);
    renderChips('atlas-q-category-filter',   orderedCategories);
    renderChips('atlas-q-difficulty-filter', orderedDifficulty);
    renderChips('atlas-q-confidence-filter', orderedConfidences, confidenceLabel);

    /* ── Build concise cards. The full answer lives in the slide-in panel. ── */
    grid.innerHTML = '';
    for (var ci = 0; ci < BANK.length; ci++) {
      var qq = BANK[ci];
      var card = document.createElement('button');
      card.type = 'button';
      card.className = 'atlas-q-card atlas-q-card--compact atlas-reveal conf-' + (qq.confidence || 'context');
      card.dataset.qid = qq.id;
      card.setAttribute('aria-label', qq.question);

      var confBadge = tierToBadge(qq.confidence === 'forwardLooking' ? 'speculative' : (qq.confidence || 'context'));
      var shortAns = qq.shortAnswer || qq.short || '';

      var metaTopHtml = '';
      if (qq.audience)   metaTopHtml += '<span class="atlas-q-meta-pill audience-' + escapeHtml(qq.audience) + '">' + escapeHtml(titleCase(qq.audience)) + '</span>';
      if (qq.difficulty) metaTopHtml += '<span class="atlas-q-meta-pill difficulty-' + escapeHtml((qq.difficulty || '').toLowerCase()) + '">' + escapeHtml(qq.difficulty) + '</span>';
      if (qq.category)   metaTopHtml += '<span class="atlas-q-meta-pill category">' + escapeHtml(qq.category) + '</span>';

      card.innerHTML =
        (metaTopHtml ? '<div class="atlas-q-meta-top">' + metaTopHtml + '</div>' : '') +
        '<div class="atlas-q-question">' + escapeHtml(qq.question) + '</div>' +
        (shortAns ? '<div class="atlas-q-short">' + shortAns + '</div>' : '') +
        '<div class="atlas-q-meta">' +
          '<span class="atlas-conf conf-' + confBadge.tier + '">' + escapeHtml(confBadge.label) + '</span>' +
          '<span class="atlas-q-toggle">Read answer &rarr;</span>' +
        '</div>';
      grid.appendChild(card);
    }

    /* Card click → open the panel via the unified profile system. */
    grid.addEventListener('click', function (e) {
      var card = e.target.closest('.atlas-q-card');
      if (!card || !card.dataset.qid) return;
      openQuestion(card.dataset.qid);
    });

    /* Filter chip groups */
    var bindFilterGroup = function (containerId, stateKey) {
      var container = document.getElementById(containerId);
      if (!container) return;
      container.addEventListener('click', function (e) {
        var chip = e.target.closest('.atlas-q-chip');
        if (!chip) return;
        container.querySelectorAll('.atlas-q-chip').forEach(function (c) { c.classList.remove('active'); });
        chip.classList.add('active');
        questionState[stateKey] = chip.dataset.value || null;
        filterQuestions();
      });
    };
    bindFilterGroup('atlas-q-audience-filter',   'audience');
    bindFilterGroup('atlas-q-category-filter',   'category');
    bindFilterGroup('atlas-q-difficulty-filter', 'difficulty');
    bindFilterGroup('atlas-q-confidence-filter', 'confidence');

    /* Search */
    var search = document.getElementById('atlas-q-search');
    if (search) {
      var debounce;
      search.addEventListener('input', function () {
        clearTimeout(debounce);
        debounce = setTimeout(function () {
          questionState.search = search.value.trim().toLowerCase();
          filterQuestions();
        }, 120);
      });
    }

    filterQuestions();
  }

  function filterQuestions() {
    var grid = document.getElementById('atlas-questions');
    var count = document.getElementById('atlas-q-count');
    if (!grid) return;
    var s = questionState.search;
    var visible = 0;
    var total = 0;
    grid.querySelectorAll('.atlas-q-card').forEach(function (card) {
      total++;
      var q = getQuestion(card.dataset.qid);
      if (!q) return;
      var matchesSearch = !s ||
        q.question.toLowerCase().indexOf(s) !== -1 ||
        (q.shortAnswer || '').toLowerCase().indexOf(s) !== -1 ||
        (q.category || '').toLowerCase().indexOf(s) !== -1 ||
        (q.audience || '').toLowerCase().indexOf(s) !== -1;
      var matchesAudience   = !questionState.audience   || q.audience   === questionState.audience;
      var matchesCategory   = !questionState.category   || q.category   === questionState.category;
      var matchesDifficulty = !questionState.difficulty || q.difficulty === questionState.difficulty;
      var matchesConfidence = !questionState.confidence || q.confidence === questionState.confidence;
      var show = matchesSearch && matchesAudience && matchesCategory && matchesDifficulty && matchesConfidence;
      card.classList.toggle('hidden', !show);
      if (show) visible++;
    });
    if (count) {
      var hasFilter = s || questionState.audience || questionState.category || questionState.difficulty || questionState.confidence;
      count.textContent = hasFilter ? (visible + ' of ' + total + ' questions') : (total + ' questions');
    }
  }

  /* Backwards-compat alias for the old function name. */
  function buildQuestions() { buildQuestionExplorer(); }

  /* ============================================
     EDITORIAL AUDIT LOG — render inside Sources section
     ============================================ */
  function buildAuditLog() {
    var list = document.getElementById('atlas-audit-list');
    if (!list || typeof ACCURACY_ISSUES === 'undefined') return;

    /* Sort: severity high → medium → low; within tier, fixed/tightened first. */
    var severityRank = { high: 0, medium: 1, low: 2 };
    var statusRank   = { 'fixed': 0, 'tightened': 1, 'needs-review': 2, 'kept-with-confidence': 3 };
    var items = ACCURACY_ISSUES.slice().sort(function (a, b) {
      var sa = severityRank[a.severity] != null ? severityRank[a.severity] : 9;
      var sb = severityRank[b.severity] != null ? severityRank[b.severity] : 9;
      if (sa !== sb) return sa - sb;
      var ta = statusRank[a.status] != null ? statusRank[a.status] : 9;
      var tb = statusRank[b.status] != null ? statusRank[b.status] : 9;
      return ta - tb;
    });

    var html = '';
    for (var i = 0; i < items.length; i++) {
      var it = items[i];
      html += '<div class="atlas-audit-item severity-' + (it.severity || 'low') + '">' +
        '<div class="atlas-audit-head">' +
          '<span class="atlas-audit-ref">' + escapeHtml(it.entityRef) + ' &middot; ' + escapeHtml(it.field || '') + '</span>' +
          '<span class="atlas-audit-status s-' + (it.status || 'kept-with-confidence') + '">' + escapeHtml((it.status || 'kept').replace(/-/g, ' ')) + '</span>' +
        '</div>' +
        '<div class="atlas-audit-claim">&ldquo;' + escapeHtml(it.originalClaim || '') + '&rdquo;</div>' +
        '<div>' + escapeHtml(it.issue || '') + '</div>' +
        (it.recommendation ? '<div class="atlas-audit-rec">' + it.recommendation + '</div>' : '') +
      '</div>';
    }
    list.innerHTML = html;
  }

  /* ============================================
     DYNAMIC COUNTS — replace placeholder numbers with real lengths
     ============================================ */
  function applyDynamicCounts() {
    var counts = {
      companies: typeof COMPANY_PROFILES !== 'undefined' ? COMPANY_PROFILES.length : 0,
      products:  typeof PRODUCT_PROFILES !== 'undefined' ? PRODUCT_PROFILES.length : 0,
      audit:     typeof ACCURACY_ISSUES  !== 'undefined' ? ACCURACY_ISSUES.length  : 0
    };
    document.querySelectorAll('[data-count]').forEach(function (el) {
      var key = el.dataset.count;
      if (counts[key] != null) el.textContent = counts[key];
    });
  }

  /* ============================================
     INIT
     ============================================ */
  function init() {
    buildModes();
    buildRadialViz();
    buildMobileGrid();
    buildBottleneckCards();
    buildQuestions();
    buildPaths();
    buildEntryCards();
    buildFlagshipCompanies();
    buildFlowMap();
    buildScenarios();
    buildAnatomies();
    buildTimeline();
    buildCompare();
    buildSources();
    buildAuditLog();
    buildCompanyExplorer();
    buildProductExplorer();
    buildLearningPaths();
    buildTaxonomy();
    bindDisclosures();
    bindSearch();
    bindGlobalEvents();
    applyDynamicCounts();
    updateNodeVisibility();
    initScrollReveal();
    handleHash();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
