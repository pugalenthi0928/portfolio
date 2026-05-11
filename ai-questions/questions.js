/* ============================================
   THE AI QUESTIONS CANON — UI Logic
   Modes: Browse · Flashcards · Quiz · Paths
   Filters · Search · localStorage · Daily Q · Keyboard nav
   Renders from questions-data.js (Q_BANK / Q_DOMAINS / Q_LEVELS / Q_TYPES /
   Q_MINDBENDERS / Q_MODEL_SELECTION / Q_ARCH_COMPARE / Q_PATHS / Q_RACE /
   Q_JOBS / Q_SOURCES_GROUPED / Q_DAILY_POOLS).
   ============================================ */

(function () {
  'use strict';

  /* ---------- helpers ---------- */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
    });
  }
  function safe(arr) { return Array.isArray(arr) ? arr : []; }
  function pickStable(arr, seed) {
    if (!arr || !arr.length) return null;
    var n = arr.length;
    var idx = ((seed % n) + n) % n;
    return arr[idx];
  }
  function dateSeed() {
    var d = new Date();
    return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
  }
  function fnvHash(s) {
    var h = 0x811c9dc5 >>> 0;
    for (var i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
    }
    return h;
  }

  /* ---------- localStorage ---------- */
  var LS = {
    KEY_KNOWN: 'aiq.fc.known',
    KEY_MISSED: 'aiq.fc.missed',
    KEY_QUIZ: 'aiq.quiz.scores',
    KEY_DONE: 'aiq.completed',
    KEY_LEVEL: 'aiq.lastLevel',
    KEY_MODE: 'aiq.mode',
    get: function (k, fallback) {
      try {
        var v = window.localStorage.getItem(k);
        return v == null ? fallback : JSON.parse(v);
      } catch (e) { return fallback; }
    },
    set: function (k, v) {
      try { window.localStorage.setItem(k, JSON.stringify(v)); } catch (e) {}
    },
    addToSet: function (k, id) {
      var arr = LS.get(k, []);
      if (arr.indexOf(id) < 0) { arr.push(id); LS.set(k, arr); }
      return arr;
    },
    removeFromSet: function (k, id) {
      var arr = LS.get(k, []);
      var i = arr.indexOf(id);
      if (i >= 0) { arr.splice(i, 1); LS.set(k, arr); }
      return arr;
    }
  };

  /* ---------- data lookups ---------- */
  function bank()    { return (typeof Q_BANK         !== 'undefined') ? Q_BANK         : []; }
  function domains() { return (typeof Q_DOMAINS      !== 'undefined') ? Q_DOMAINS      : []; }
  function levels()  { return (typeof Q_LEVELS       !== 'undefined') ? Q_LEVELS       : []; }
  function types()   { return (typeof Q_TYPES        !== 'undefined') ? Q_TYPES        : []; }
  function mb()      { return (typeof Q_MINDBENDERS  !== 'undefined') ? Q_MINDBENDERS  : []; }
  function msel()    { return (typeof Q_MODEL_SELECTION !== 'undefined') ? Q_MODEL_SELECTION : []; }
  function arch()    { return (typeof Q_ARCH_COMPARE !== 'undefined') ? Q_ARCH_COMPARE : []; }
  function paths()   { return (typeof Q_PATHS        !== 'undefined') ? Q_PATHS        : []; }
  function race()    { return (typeof Q_RACE         !== 'undefined') ? Q_RACE         : null; }
  function jobs()    { return (typeof Q_JOBS         !== 'undefined') ? Q_JOBS         : null; }
  function sources() { return (typeof Q_SOURCES_GROUPED !== 'undefined') ? Q_SOURCES_GROUPED : []; }
  function dailyPools() { return (typeof Q_DAILY_POOLS !== 'undefined') ? Q_DAILY_POOLS : { beginner: [], frontier: [], civilisation: [] }; }

  function domainLabel(id) {
    var d = domains().filter(function (x) { return x.id === id; })[0];
    return d ? d.label : id;
  }
  function domainShort(id) {
    var d = domains().filter(function (x) { return x.id === id; })[0];
    return d ? d.short : '';
  }
  function levelLabel(n) {
    var l = levels().filter(function (x) { return x.id === n; })[0];
    return l ? l.label : 'Lvl ' + n;
  }
  function typeLabel(id) {
    var t = types().filter(function (x) { return x.id === id; })[0];
    return t ? t.label : id;
  }
  function findById(id) {
    var b = bank();
    for (var i = 0; i < b.length; i++) if (b[i].id === id) return b[i];
    var z = mb();
    for (var j = 0; j < z.length; j++) if (z[j].id === id) return z[j];
    return null;
  }

  /* ============================================
     FILTER STATE
     ============================================ */
  var state = {
    mode: 'browse',
    search: '',
    level: 'all',
    domain: 'all',
    type: 'all',
    flagMb: false,
    flagTech: false,
    flagQuiz: false,
    flagFc: false,
    flagFrontier: false,

    /* flashcards */
    fcDeck: [],
    fcIndex: 0,

    /* quiz */
    quizDeck: [],
    quizIndex: 0,
    quizCorrect: 0,
    quizAnswered: false,

    /* paths */
    activePath: null
  };

  function currentFiltered() {
    var s = state.search.trim().toLowerCase();
    return bank().filter(function (q) {
      if (state.level !== 'all' && q.lvl !== Number(state.level)) return false;
      if (state.domain !== 'all' && q.d !== state.domain) return false;
      if (state.type !== 'all' && q.t !== state.type) return false;
      if (state.flagMb && q.t !== 'MB') return false;
      if (state.flagTech && !(q.t === 'T' || q.t === 'E' || q.t === 'M')) return false;
      if (state.flagQuiz && !(q.qopts && q.qopts.length)) return false;
      if (state.flagFc && q.fc !== 1) return false;
      if (state.flagFrontier && q.lvl !== 5) return false;
      if (s) {
        var hay = ((q.q || '') + ' ' + (q.why || '') + ' ' + (q.ans || '') + ' ' + (q.tags || '') + ' ' + domainLabel(q.d) + ' ' + typeLabel(q.t)).toLowerCase();
        if (hay.indexOf(s) < 0) return false;
      }
      return true;
    });
  }

  /* ============================================
     HERO STATS
     ============================================ */
  function renderHeroStats() {
    var el = $('#q-hero-stats'); if (!el) return;
    var qCount = bank().length;
    var fcCount = bank().filter(function (q) { return q.fc === 1; }).length;
    var quizCount = bank().filter(function (q) { return q.qopts && q.qopts.length; }).length;
    var rows = [
      { num: domains().length, label: 'domains' },
      { num: levels().length, label: 'difficulty levels' },
      { num: qCount + '+', label: 'questions' },
      { num: fcCount, label: 'flashcards' },
      { num: quizCount, label: 'quiz prompts' },
      { num: paths().length, label: 'learning paths' }
    ];
    el.innerHTML = rows.map(function (r) {
      return '<div class="q-hero-stat"><div class="q-hero-stat-num">' + esc(String(r.num)) + '</div><div class="q-hero-stat-label">' + esc(r.label) + '</div></div>';
    }).join('');
  }

  /* ============================================
     HOW TO USE — 5 levels
     ============================================ */
  function renderHowto() {
    var el = $('#q-howto'); if (!el) return;
    el.innerHTML = levels().map(function (l, i) {
      return '<article class="q-howto-card">' +
        '<div class="q-howto-num">L' + l.id + ' &middot; ' + esc(l.short) + '</div>' +
        '<h3 class="q-howto-h">' + esc(l.label) + '</h3>' +
        '<p class="q-howto-d">' + esc(howtoText(l.id)) + '</p>' +
      '</article>';
    }).join('');
  }
  function howtoText(lvl) {
    return ({
      1: 'Learn the vocabulary. Get the words right before debating the field.',
      2: 'Learn how systems are made. Stack: data → training → inference → product.',
      3: 'Understand the technical frontier. Architecture, evaluation, open problems.',
      4: 'Understand economics, geopolitics and adoption. Where value moves and breaks.',
      5: 'Ask what is still unknown. Frontier risk, civilisation-scale uncertainty.'
    })[lvl] || '';
  }

  /* ============================================
     DAILY QUESTION
     ============================================ */
  function renderDaily() {
    var el = $('#q-daily'); if (!el) return;
    var pools = dailyPools();
    var seed = dateSeed();
    var slots = [
      { tag: 'Beginner question of the day',     pool: 'beginner',     hash: fnvHash('B' + seed) },
      { tag: 'Frontier question of the day',     pool: 'frontier',     hash: fnvHash('F' + seed) },
      { tag: 'Civilisation question of the day', pool: 'civilisation', hash: fnvHash('C' + seed) }
    ];
    el.innerHTML = slots.map(function (s) {
      var id = pickStable(pools[s.pool] || [], s.hash);
      var q = id ? findById(id) : null;
      var qText = q ? q.q : 'Question pool not yet seeded.';
      var ans = q && (q.ans || q.why) ? (q.ans || q.why) : '';
      return '<article class="q-daily-card">' +
        '<span class="q-daily-tag">' + esc(s.tag) + '</span>' +
        '<p class="q-daily-q">' + esc(qText) + '</p>' +
        (ans ? '<p class="q-daily-a">' + esc(ans) + '</p>' : '') +
      '</article>';
    }).join('');
  }

  /* ============================================
     DOMAIN MAP — visual taxonomy
     ============================================ */
  function renderDomainMap() {
    var el = $('#q-domain-map'); if (!el) return;
    el.innerHTML = domains().map(function (d) {
      var n = bank().filter(function (q) { return q.d === d.id; }).length;
      return '<button type="button" class="q-domain-tile" data-domain="' + esc(d.id) + '" aria-label="Filter by ' + esc(d.label) + '">' +
        '<span class="q-domain-letter">' + esc(d.id) + '</span>' +
        '<span>' +
          '<div class="q-domain-label">' + esc(d.label) + '</div>' +
          '<div class="q-domain-short">' + esc(d.short) + '</div>' +
          '<div class="q-domain-count">' + n + ' questions</div>' +
        '</span>' +
      '</button>';
    }).join('');
    el.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('.q-domain-tile');
      if (!btn) return;
      state.domain = btn.dataset.domain;
      var sel = $('#q-filter-domain'); if (sel) sel.value = state.domain;
      state.mode = 'browse';
      activateMode('browse');
      renderActiveMode();
      var bk = $('#q-bank-section'); if (bk) bk.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  /* ============================================
     MODE TABS
     ============================================ */
  function activateMode(mode) {
    state.mode = mode;
    LS.set(LS.KEY_MODE, mode);
    $$('.q-mode').forEach(function (b) {
      var on = b.dataset.mode === mode;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    $$('.q-mode-pane').forEach(function (p) {
      p.classList.toggle('is-active', p.dataset.mode === mode);
      p.style.display = (p.dataset.mode === mode) ? '' : 'none';
    });
  }
  function renderActiveMode() {
    if (state.mode === 'browse') renderBrowse();
    else if (state.mode === 'flashcards') startFlashcards();
    else if (state.mode === 'quiz') startQuiz();
    else if (state.mode === 'paths') renderPathsList();
  }

  /* ============================================
     FILTERS UI
     ============================================ */
  function renderFilters() {
    /* Difficulty */
    var lvl = $('#q-filter-level');
    if (lvl) {
      lvl.innerHTML = '<option value="all">All difficulties</option>' +
        levels().map(function (l) { return '<option value="' + l.id + '">L' + l.id + ' &middot; ' + esc(l.label) + '</option>'; }).join('');
      var saved = LS.get(LS.KEY_LEVEL, 'all');
      lvl.value = saved;
      state.level = saved;
    }
    /* Domain */
    var dm = $('#q-filter-domain');
    if (dm) {
      dm.innerHTML = '<option value="all">All domains</option>' +
        domains().map(function (d) { return '<option value="' + d.id + '">' + esc(d.id + ' · ' + d.label) + '</option>'; }).join('');
    }
    /* Type */
    var tp = $('#q-filter-type');
    if (tp) {
      tp.innerHTML = '<option value="all">All types</option>' +
        types().map(function (t) { return '<option value="' + t.id + '">' + esc(t.label) + '</option>'; }).join('');
    }

    /* Bind */
    var search = $('#q-search');
    if (search) {
      search.addEventListener('input', function (e) {
        state.search = e.target.value;
        renderActiveMode();
      });
    }
    if (lvl) lvl.addEventListener('change', function (e) {
      state.level = e.target.value;
      LS.set(LS.KEY_LEVEL, state.level);
      renderActiveMode();
    });
    if (dm) dm.addEventListener('change', function (e) {
      state.domain = e.target.value;
      renderActiveMode();
    });
    if (tp) tp.addEventListener('change', function (e) {
      state.type = e.target.value;
      renderActiveMode();
    });

    /* Toggles */
    $$('.q-toggle').forEach(function (t) {
      t.addEventListener('click', function () {
        var key = t.dataset.toggle;
        var on = !t.classList.contains('is-active');
        t.classList.toggle('is-active', on);
        if (key === 'mb')        state.flagMb = on;
        if (key === 'tech')      state.flagTech = on;
        if (key === 'quiz')      state.flagQuiz = on;
        if (key === 'fc')        state.flagFc = on;
        if (key === 'frontier')  state.flagFrontier = on;
        renderActiveMode();
      });
    });

    /* Mode tabs */
    $$('.q-mode').forEach(function (b) {
      b.addEventListener('click', function () {
        activateMode(b.dataset.mode);
        renderActiveMode();
      });
    });
  }

  /* ============================================
     BROWSE MODE
     ============================================ */
  function renderBrowse() {
    var pane = $('#q-pane-browse'); if (!pane) return;
    var rows = currentFiltered();
    var meta = $('#q-result-meta');
    if (meta) meta.textContent = rows.length + ' / ' + bank().length + ' questions';

    if (!rows.length) {
      pane.innerHTML = '<div class="q-result-meta" style="padding: 24px 0">No questions match your filters. Try clearing the search or toggles.</div>';
      return;
    }

    /* group by domain */
    var groups = {};
    var order = [];
    rows.forEach(function (q) {
      if (!groups[q.d]) { groups[q.d] = []; order.push(q.d); }
      groups[q.d].push(q);
    });

    pane.innerHTML = order.map(function (did) {
      var dom = domains().filter(function (d) { return d.id === did; })[0] || { id: did, label: did, short: '' };
      return '<section class="q-domain-block q-fade-in" id="domain-' + esc(did) + '">' +
        '<h3 class="q-domain-block-h"><span class="q-domain-block-h-letter">' + esc(dom.id) + '</span>' + esc(dom.label) + '</h3>' +
        '<p class="q-domain-block-sub">' + esc(dom.short) + '</p>' +
        '<div class="q-list">' +
          groups[did].map(renderCard).join('') +
        '</div>' +
      '</section>';
    }).join('');

    /* expand on click */
    pane.addEventListener('click', onCardClick, { once: true });
  }
  function onCardClick(e) {
    var card = e.target.closest && e.target.closest('.q-card');
    if (!card) {
      var pane = $('#q-pane-browse'); if (pane) pane.addEventListener('click', onCardClick, { once: true });
      return;
    }
    card.classList.toggle('is-open');
    var id = card.dataset.id;
    if (id) LS.addToSet(LS.KEY_DONE, id);
    if (window.location.hash !== '#q=' + id) {
      try { window.history.replaceState(null, '', '#q=' + id); } catch (err) {}
    }
    var pane2 = $('#q-pane-browse'); if (pane2) pane2.addEventListener('click', onCardClick, { once: true });
  }

  function renderCard(q) {
    var tags = [
      '<span class="q-tag q-tag--lvl' + q.lvl + '">L' + q.lvl + '</span>',
      '<span class="q-tag q-tag--type">' + esc(typeLabel(q.t)) + '</span>'
    ];
    if (q.t === 'MB') tags.push('<span class="q-tag q-tag--mb">Mind-bending</span>');
    if (q.qopts && q.qopts.length) tags.push('<span class="q-tag q-tag--quiz">Quiz</span>');
    if (q.fc === 1) tags.push('<span class="q-tag q-tag--fc">Flashcard</span>');

    var tagList = (q.tags || '').split(',').map(function (t) { return t.trim(); }).filter(Boolean);
    var tagsHtml = tagList.map(function (t) { return '<span class="q-card-tag">' + esc(t) + '</span>'; }).join('');

    return '<article class="q-card" data-id="' + esc(q.id) + '" tabindex="0" role="button" aria-expanded="false">' +
      '<div class="q-card-row">' +
        '<span class="q-tag">' + esc(q.id) + '</span>' +
        tags.join('') +
      '</div>' +
      '<p class="q-card-q">' + esc(q.q) + '</p>' +
      '<div class="q-card-body">' +
        (q.why ? '<div class="q-card-section"><div class="q-card-section-h">Why it matters</div><p class="q-card-section-d">' + esc(q.why) + '</p></div>' : '') +
        (q.ans ? '<div class="q-card-section"><div class="q-card-section-h">Short answer</div><p class="q-card-section-d q-ans">' + esc(q.ans) + '</p></div>' : '') +
        (q.more ? '<div class="q-card-section"><div class="q-card-section-h">Deeper angle</div><p class="q-card-section-d">' + esc(q.more) + '</p></div>' : '') +
        (tagsHtml ? '<div class="q-card-tags">' + tagsHtml + '</div>' : '') +
      '</div>' +
    '</article>';
  }

  /* ============================================
     FLASHCARD MODE
     ============================================ */
  function startFlashcards() {
    var pane = $('#q-pane-flashcards'); if (!pane) return;
    var deck = currentFiltered().filter(function (q) { return q.fc === 1; });
    if (!deck.length) deck = currentFiltered();
    if (!deck.length) {
      pane.innerHTML = '<div class="q-result-meta" style="padding: 24px 0">No flashcards match your filters. Clear filters or expand difficulty.</div>';
      return;
    }
    state.fcDeck = deck;
    state.fcIndex = 0;
    drawFlashcard();
  }
  function drawFlashcard() {
    var pane = $('#q-pane-flashcards'); if (!pane) return;
    var q = state.fcDeck[state.fcIndex];
    if (!q) {
      pane.innerHTML = '<div class="q-result-meta" style="padding:24px 0">Deck complete. <button class="q-fc-action q-fc-action--skip" data-fc-restart>Restart</button></div>';
      var rb = $('[data-fc-restart]', pane); if (rb) rb.addEventListener('click', startFlashcards);
      return;
    }
    var known = LS.get(LS.KEY_KNOWN, []);
    var missed = LS.get(LS.KEY_MISSED, []);
    pane.innerHTML =
      '<div class="q-fc-wrap q-fade-in">' +
        '<div class="q-fc-stats">' +
          '<span class="q-fc-stat">Card <strong>' + (state.fcIndex + 1) + '</strong> / <strong>' + state.fcDeck.length + '</strong></span>' +
          '<span class="q-fc-stat">Known <strong>' + known.length + '</strong></span>' +
          '<span class="q-fc-stat">Missed <strong>' + missed.length + '</strong></span>' +
        '</div>' +
        '<article class="q-fc" tabindex="0" data-fc-card aria-label="Click or press Space to reveal">' +
          '<div class="q-fc-meta">' +
            '<span class="q-tag">' + esc(q.id) + '</span>' +
            '<span class="q-tag q-tag--lvl' + q.lvl + '">L' + q.lvl + '</span>' +
            '<span class="q-tag q-tag--type">' + esc(typeLabel(q.t)) + '</span>' +
            '<span class="q-tag">' + esc(domainLabel(q.d)) + '</span>' +
          '</div>' +
          '<p class="q-fc-q">' + esc(q.q) + '</p>' +
          '<p class="q-fc-a">' + esc(q.ans || q.why || '') + (q.more ? '<br><br>' + esc(q.more) : '') + '</p>' +
          '<div class="q-fc-hint">Click or press <strong>Space</strong> to reveal</div>' +
        '</article>' +
        '<div class="q-fc-actions">' +
          '<button class="q-fc-action q-fc-action--missed" data-fc="missed" aria-label="I missed this">I missed this</button>' +
          '<button class="q-fc-action q-fc-action--known"  data-fc="known"  aria-label="I knew this">I knew this</button>' +
          '<button class="q-fc-action q-fc-action--skip"   data-fc="skip"   aria-label="Skip">Skip &rarr;</button>' +
        '</div>' +
        '<div class="q-fc-progress">Use &larr; &rarr; to navigate &middot; Space to reveal &middot; K = knew, M = missed</div>' +
        '<div class="q-fc-actions" style="margin-top:6px"><button class="q-fc-action q-fc-action--reset" data-fc="reset">Reset progress</button></div>' +
      '</div>';

    var card = $('[data-fc-card]', pane);
    if (card) {
      card.addEventListener('click', function () { card.classList.toggle('is-revealed'); });
      card.addEventListener('keydown', function (e) {
        if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); card.classList.toggle('is-revealed'); }
      });
    }
    $$('[data-fc]', pane).forEach(function (b) {
      b.addEventListener('click', function () { fcAction(b.dataset.fc); });
    });
  }
  function fcAction(action) {
    var q = state.fcDeck[state.fcIndex]; if (!q) return;
    if (action === 'known') {
      LS.addToSet(LS.KEY_KNOWN, q.id);
      LS.removeFromSet(LS.KEY_MISSED, q.id);
      state.fcIndex++;
    } else if (action === 'missed') {
      LS.addToSet(LS.KEY_MISSED, q.id);
      LS.removeFromSet(LS.KEY_KNOWN, q.id);
      state.fcIndex++;
    } else if (action === 'skip') {
      state.fcIndex++;
    } else if (action === 'reset') {
      LS.set(LS.KEY_KNOWN, []);
      LS.set(LS.KEY_MISSED, []);
      drawFlashcard();
      return;
    }
    drawFlashcard();
  }

  /* ============================================
     QUIZ MODE
     ============================================ */
  function startQuiz() {
    var pane = $('#q-pane-quiz'); if (!pane) return;
    var deck = currentFiltered().filter(function (q) { return q.qopts && q.qopts.length; });
    if (!deck.length) {
      pane.innerHTML = '<div class="q-result-meta" style="padding:24px 0">No quiz questions match your filters. Clear filters or pick a different difficulty.</div>';
      return;
    }
    /* shuffle */
    deck = deck.slice();
    for (var i = deck.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = deck[i]; deck[i] = deck[j]; deck[j] = tmp;
    }
    state.quizDeck = deck;
    state.quizIndex = 0;
    state.quizCorrect = 0;
    state.quizAnswered = false;
    drawQuiz();
  }
  function drawQuiz() {
    var pane = $('#q-pane-quiz'); if (!pane) return;
    var q = state.quizDeck[state.quizIndex];
    if (!q) {
      var rec = LS.get(LS.KEY_QUIZ, []);
      rec.push({ d: new Date().toISOString().slice(0, 10), total: state.quizDeck.length, correct: state.quizCorrect });
      if (rec.length > 20) rec = rec.slice(-20);
      LS.set(LS.KEY_QUIZ, rec);
      pane.innerHTML =
        '<div class="q-quiz-wrap q-fade-in">' +
          '<div class="q-quiz">' +
            '<div class="q-quiz-q">Quiz complete &middot; ' + state.quizCorrect + ' / ' + state.quizDeck.length + ' correct</div>' +
            '<p class="q-card-section-d">Score saved locally. Pick filters above and run another set.</p>' +
            '<div class="q-quiz-controls"><button class="q-btn q-btn--primary" data-quiz-restart>Run another quiz</button></div>' +
          '</div>' +
        '</div>';
      var rb = $('[data-quiz-restart]', pane); if (rb) rb.addEventListener('click', startQuiz);
      return;
    }
    var letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    pane.innerHTML =
      '<div class="q-quiz-wrap q-fade-in">' +
        '<div class="q-quiz-stats">' +
          '<span>Question <strong>' + (state.quizIndex + 1) + '</strong> / <strong>' + state.quizDeck.length + '</strong></span>' +
          '<span>Score <strong>' + state.quizCorrect + '</strong></span>' +
          '<span>Domain <strong>' + esc(domainLabel(q.d)) + '</strong></span>' +
        '</div>' +
        '<article class="q-quiz">' +
          '<div class="q-card-row">' +
            '<span class="q-tag">' + esc(q.id) + '</span>' +
            '<span class="q-tag q-tag--lvl' + q.lvl + '">L' + q.lvl + '</span>' +
            '<span class="q-tag q-tag--type">' + esc(typeLabel(q.t)) + '</span>' +
          '</div>' +
          '<h4 class="q-quiz-q">' + esc(q.q) + '</h4>' +
          '<div class="q-quiz-opts">' +
            q.qopts.map(function (opt, i) {
              return '<button class="q-quiz-opt" data-i="' + i + '" type="button">' +
                '<span class="q-quiz-opt-letter">' + letters[i] + '</span>' +
                '<span>' + esc(opt) + '</span>' +
              '</button>';
            }).join('') +
          '</div>' +
          '<div class="q-quiz-exp" data-quiz-exp style="display:none"></div>' +
          '<div class="q-quiz-controls">' +
            '<button class="q-btn" data-quiz-skip>Skip</button>' +
            '<button class="q-btn q-btn--primary" data-quiz-next style="display:none">Next &rarr;</button>' +
          '</div>' +
        '</article>' +
      '</div>';

    state.quizAnswered = false;

    $$('.q-quiz-opt', pane).forEach(function (b) {
      b.addEventListener('click', function () {
        if (state.quizAnswered) return;
        state.quizAnswered = true;
        var i = Number(b.dataset.i);
        $$('.q-quiz-opt', pane).forEach(function (x, idx) {
          x.classList.add('is-disabled');
          if (idx === q.qcorrect) x.classList.add('is-correct');
          else if (idx === i) x.classList.add('is-wrong');
        });
        if (i === q.qcorrect) state.quizCorrect++;
        var exp = $('[data-quiz-exp]', pane);
        if (exp) {
          exp.style.display = 'block';
          exp.innerHTML = '<strong>' + (i === q.qcorrect ? 'Correct.' : 'Not quite.') + '</strong>' + esc(q.qexp || q.ans || q.why || '');
        }
        var nx = $('[data-quiz-next]', pane); if (nx) nx.style.display = '';
      });
    });
    var skip = $('[data-quiz-skip]', pane);
    if (skip) skip.addEventListener('click', function () { state.quizIndex++; drawQuiz(); });
    var next = $('[data-quiz-next]', pane);
    if (next) next.addEventListener('click', function () { state.quizIndex++; drawQuiz(); });
  }

  /* ============================================
     PATHS MODE
     ============================================ */
  function renderPathsList() {
    var pane = $('#q-pane-paths'); if (!pane) return;
    if (!paths().length) {
      pane.innerHTML = '<div class="q-result-meta" style="padding: 24px 0">No paths defined yet.</div>';
      return;
    }
    pane.innerHTML =
      '<div class="q-paths-wrap q-fade-in">' +
        '<div class="q-paths-grid" id="q-paths-grid">' +
          paths().map(function (p, i) {
            return '<button class="q-path-card" data-path="' + esc(p.id) + '" type="button">' +
              '<div class="q-path-meta">PATH ' + (i + 1).toString().padStart(2, '0') + ' &middot; ' + esc(p.time || '~30m') + '</div>' +
              '<h4 class="q-path-h">' + esc(p.label) + '</h4>' +
              '<p class="q-path-goal">' + esc(p.goal || '') + '</p>' +
              '<div class="q-path-foot">' + (p.questions ? p.questions.length : 0) + ' questions &middot; end challenge included</div>' +
            '</button>';
          }).join('') +
        '</div>' +
        '<div class="q-path-detail" id="q-path-detail"></div>' +
      '</div>';

    $$('.q-path-card', pane).forEach(function (b) {
      b.addEventListener('click', function () { showPath(b.dataset.path); });
    });
  }
  function showPath(id) {
    var p = paths().filter(function (x) { return x.id === id; })[0]; if (!p) return;
    state.activePath = id;
    $$('.q-path-card').forEach(function (b) { b.classList.toggle('is-active', b.dataset.path === id); });
    var det = $('#q-path-detail'); if (!det) return;
    var qs = (p.questions || []).map(function (qid, i) {
      var q = findById(qid);
      return '<button class="q-path-question" type="button" data-id="' + esc(qid) + '">' +
        '<span class="q-path-question-num">' + (i + 1).toString().padStart(2, '0') + '</span>' +
        '<span>' +
          '<p class="q-path-question-q">' + esc(q ? q.q : '(missing question ' + qid + ')') + '</p>' +
          '<div class="q-path-question-id">' + esc(qid) + (q ? ' &middot; L' + q.lvl + ' &middot; ' + esc(domainLabel(q.d)) : '') + '</div>' +
        '</span>' +
      '</button>';
    }).join('');

    det.classList.add('is-open');
    det.innerHTML =
      '<h3 class="q-path-detail-h">' + esc(p.label) + '</h3>' +
      '<div class="q-path-detail-meta">' +
        '<span>Time: <strong>' + esc(p.time || '~30m') + '</strong></span>' +
        '<span>Questions: <strong>' + (p.questions || []).length + '</strong></span>' +
      '</div>' +
      '<p class="q-path-detail-goal">' + esc(p.goal || '') + '</p>' +
      '<div class="q-path-questions">' + qs + '</div>' +
      (p.challenge ?
        '<div class="q-path-challenge">' +
          '<div class="q-path-challenge-h">End challenge</div>' +
          '<p class="q-path-challenge-d">' + esc(p.challenge) + '</p>' +
        '</div>'
      : '');

    /* clicking a path question opens that question in browse mode */
    $$('[data-id]', det).forEach(function (b) {
      b.addEventListener('click', function () {
        var qid = b.dataset.id;
        var q = findById(qid); if (!q) return;
        /* go to browse */
        state.search = '';
        state.level = 'all';
        state.domain = q.d;
        state.type = 'all';
        state.flagMb = state.flagTech = state.flagQuiz = state.flagFc = state.flagFrontier = false;
        $$('.q-toggle').forEach(function (t) { t.classList.remove('is-active'); });
        var sel = $('#q-filter-domain'); if (sel) sel.value = q.d;
        var lvl = $('#q-filter-level'); if (lvl) lvl.value = 'all';
        var tp = $('#q-filter-type'); if (tp) tp.value = 'all';
        var sb = $('#q-search'); if (sb) sb.value = '';
        activateMode('browse');
        renderActiveMode();
        setTimeout(function () {
          var card = $('.q-card[data-id="' + qid + '"]');
          if (card) {
            card.classList.add('is-open');
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 50);
      });
    });
  }

  /* ============================================
     MIND-BENDERS section
     ============================================ */
  function renderMindbenders() {
    var el = $('#q-mb'); if (!el) return;
    el.innerHTML = mb().map(function (z, i) {
      return '<article class="q-mb-card">' +
        '<div class="q-mb-num">' + (i + 1).toString().padStart(2, '0') + ' &middot; ' + esc(z.id) + '</div>' +
        '<h4 class="q-mb-q">' + esc(z.q) + '</h4>' +
        (z.why ? '<p class="q-mb-d"><strong>Why it matters:</strong> ' + esc(z.why) + '</p>' : '') +
        (z.ans ? '<p class="q-mb-d">' + esc(z.ans) + '</p>' : '') +
      '</article>';
    }).join('');
  }

  /* ============================================
     MODEL SELECTION matrix
     ============================================ */
  function renderModelSelection() {
    var el = $('#q-msel'); if (!el) return;
    var headRow =
      '<div class="q-msel-row q-msel-row--head">' +
        '<div>Workload</div>' +
        '<div>Default model type</div>' +
        '<div>Frontier closed</div>' +
        '<div>Open-weight</div>' +
        '<div>Small / specialist</div>' +
        '<div>Evaluation</div>' +
        '<div>Failure to watch</div>' +
      '</div>';
    var rows = msel().map(function (r) {
      return '<div class="q-msel-row">' +
        '<div class="q-msel-workload" data-col="Workload">' + esc(r.workload) + '</div>' +
        '<div data-col="Default">' + esc(r.defaultModel || '') + '</div>' +
        '<div data-col="Frontier closed">' + esc(r.frontier || '') + '</div>' +
        '<div data-col="Open-weight">' + esc(r.open || '') + '</div>' +
        '<div data-col="Specialist">' + esc(r.specialist || '') + '</div>' +
        '<div data-col="Evaluation">' + esc(r.evalMethod || '') + '</div>' +
        '<div data-col="Failure">' + esc(r.failure || '') + '</div>' +
      '</div>';
    }).join('');
    el.innerHTML = headRow + rows;
  }

  /* ============================================
     ARCHITECTURE COMPARISON
     ============================================ */
  function renderArch() {
    var el = $('#q-arch'); if (!el) return;
    el.innerHTML = arch().map(function (a) {
      return '<article class="q-arch-row">' +
        '<div class="q-arch-name">' + esc(a.name) + '</div>' +
        '<div><span class="q-arch-cell-h">Strengths</span>' + esc(a.strengths || '') + '</div>' +
        '<div><span class="q-arch-cell-h">Limits</span>' + esc(a.limits || '') + '</div>' +
        '<div><span class="q-arch-cell-h">Use when</span>' + esc(a.useWhen || '') + '</div>' +
      '</article>';
    }).join('');
  }

  /* ============================================
     AI RACE + JOBS
     ============================================ */
  function renderRace() {
    var r = race(); if (!r) return;
    var posEl = $('#q-race-position');
    if (posEl) posEl.textContent = r.position || '';
    var grid = $('#q-race-grid');
    if (grid) {
      grid.innerHTML = (r.sections || []).map(function (s) {
        return '<article class="q-race-card">' +
          '<h4 class="q-race-h">' + esc(s.h) + '</h4>' +
          '<p class="q-race-d">' + esc(s.d) + '</p>' +
        '</article>';
      }).join('');
    }
  }
  function renderJobs() {
    var j = jobs(); if (!j) return;
    var posEl = $('#q-jobs-position');
    if (posEl) posEl.textContent = j.position || '';
    var grid = $('#q-jobs-grid');
    if (grid) {
      grid.innerHTML = (j.points || []).map(function (s) {
        return '<article class="q-jobs-card">' +
          '<h4 class="q-jobs-h">' + esc(s.h) + '</h4>' +
          '<p class="q-jobs-d">' + esc(s.d) + '</p>' +
        '</article>';
      }).join('');
    }
  }

  /* ============================================
     SOURCES
     ============================================ */
  function renderSources() {
    var el = $('#q-sources-grid'); if (!el) return;
    el.innerHTML = sources().map(function (g) {
      return '<div>' +
        '<h4 class="q-srcgrp-h">' + esc(g.group) + '</h4>' +
        '<ul class="q-srcgrp-list">' +
          (g.items || []).map(function (s) {
            return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.label) + '</a></li>';
          }).join('') +
        '</ul>' +
      '</div>';
    }).join('');
  }

  /* ============================================
     KEYBOARD NAVIGATION (flashcards + quiz)
     ============================================ */
  function bindGlobalKeys() {
    document.addEventListener('keydown', function (e) {
      if (state.mode === 'flashcards') {
        var card = $('.q-fc');
        if (!card) return;
        if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT')) return;
        if (e.key === 'ArrowRight') { e.preventDefault(); fcAction('skip'); }
        else if (e.key === 'ArrowLeft' && state.fcIndex > 0) { e.preventDefault(); state.fcIndex--; drawFlashcard(); }
        else if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); card.classList.toggle('is-revealed'); }
        else if (e.key === 'k' || e.key === 'K') { e.preventDefault(); fcAction('known'); }
        else if (e.key === 'm' || e.key === 'M') { e.preventDefault(); fcAction('missed'); }
      }
    });
  }

  /* ============================================
     HASH ROUTER
     ============================================ */
  function applyHash() {
    var h = (window.location.hash || '').replace(/^#/, '');
    if (!h) return;
    if (h.indexOf('q=') === 0) {
      var id = h.slice(2);
      var q = findById(id); if (!q) return;
      state.domain = q.d;
      var sel = $('#q-filter-domain'); if (sel) sel.value = q.d;
      activateMode('browse');
      renderActiveMode();
      setTimeout(function () {
        var card = $('.q-card[data-id="' + id + '"]');
        if (card) { card.classList.add('is-open'); card.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      }, 60);
    } else if (h.indexOf('domain=') === 0) {
      var did = h.slice(7);
      state.domain = did;
      var sel2 = $('#q-filter-domain'); if (sel2) sel2.value = did;
      activateMode('browse');
      renderActiveMode();
    } else if (h === 'flashcards' || h === 'quiz' || h === 'paths' || h === 'browse') {
      activateMode(h);
      renderActiveMode();
    } else if (h.indexOf('path=') === 0) {
      activateMode('paths');
      renderActiveMode();
      setTimeout(function () { showPath(h.slice(5)); }, 50);
    }
  }

  /* ============================================
     INIT
     ============================================ */
  function init() {
    renderHeroStats();
    renderHowto();
    renderDaily();
    renderDomainMap();
    renderFilters();
    renderMindbenders();
    renderModelSelection();
    renderArch();
    renderRace();
    renderJobs();
    renderSources();

    /* default mode: browse, or last-saved */
    var savedMode = LS.get(LS.KEY_MODE, 'browse');
    if (['browse', 'flashcards', 'quiz', 'paths'].indexOf(savedMode) < 0) savedMode = 'browse';
    activateMode(savedMode);
    renderActiveMode();
    bindGlobalKeys();
    applyHash();

    /* hero CTA buttons */
    $$('[data-cta]').forEach(function (b) {
      b.addEventListener('click', function () {
        var c = b.dataset.cta;
        if (c === 'beginner') { state.level = '1'; var lv = $('#q-filter-level'); if (lv) lv.value = '1'; activateMode('browse'); }
        else if (c === 'frontier') { state.level = '5'; var lv2 = $('#q-filter-level'); if (lv2) lv2.value = '5'; activateMode('browse'); }
        else if (c === 'quiz') { activateMode('quiz'); }
        else if (c === 'flashcards') { activateMode('flashcards'); }
        else if (c === 'paths') { activateMode('paths'); }
        renderActiveMode();
        var bk = $('#q-bank-section'); if (bk) bk.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
