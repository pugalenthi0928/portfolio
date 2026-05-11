/* ============================================
   AI KNOWLEDGE BANK — UI Logic (schema v2)
   Modes: Browse · Flashcards · Quiz · Interview · Founder · Researcher
   Reads new schema from knowledge-bank-data.js:
     KB_BOOKS / KB_DOMAINS / KB_LEVELS / KB_TYPES / KB_PHASES /
     KB_BANK / KB_FLASHCARDS / KB_QUIZZES / KB_INTERVIEW /
     KB_FOUNDER / KB_RESEARCHER / KB_NEXT_BOOKS / KB_SOURCE_NOTE /
     KB_SYNTHESIS.
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

  /* ---------- localStorage ---------- */
  var LS = {
    KEY_KNOWN: 'aikb.fc.known',
    KEY_MISSED: 'aikb.fc.missed',
    KEY_QUIZ: 'aikb.quiz.scores',
    KEY_DONE: 'aikb.completed',
    KEY_LEVEL: 'aikb.lastLevel',
    KEY_MODE: 'aikb.mode',
    get: function (k, fb) {
      try { var v = localStorage.getItem(k); return v == null ? fb : JSON.parse(v); }
      catch (e) { return fb; }
    },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
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
  function bank()       { return (typeof KB_BANK        !== 'undefined') ? KB_BANK        : []; }
  function flashcards() { return (typeof KB_FLASHCARDS  !== 'undefined') ? KB_FLASHCARDS  : []; }
  function quizzes()    { return (typeof KB_QUIZZES     !== 'undefined') ? KB_QUIZZES     : []; }
  function domains()    { return (typeof KB_DOMAINS     !== 'undefined') ? KB_DOMAINS     : []; }
  function levels()     { return (typeof KB_LEVELS      !== 'undefined') ? KB_LEVELS      : []; }
  function types()      { return (typeof KB_TYPES       !== 'undefined') ? KB_TYPES       : []; }
  function phases()     { return (typeof KB_PHASES      !== 'undefined') ? KB_PHASES      : []; }
  function books()      { return (typeof KB_BOOKS       !== 'undefined') ? KB_BOOKS       : []; }
  function nextBooks()  { return (typeof KB_NEXT_BOOKS  !== 'undefined') ? KB_NEXT_BOOKS  : []; }
  function interview()  { return (typeof KB_INTERVIEW   !== 'undefined') ? KB_INTERVIEW   : []; }
  function founder()    { return (typeof KB_FOUNDER     !== 'undefined') ? KB_FOUNDER     : []; }
  function research()   { return (typeof KB_RESEARCHER  !== 'undefined') ? KB_RESEARCHER  : []; }
  function synthesis()  { return (typeof KB_SYNTHESIS   !== 'undefined') ? KB_SYNTHESIS   : null; }
  function sourceNote() { return (typeof KB_SOURCE_NOTE !== 'undefined') ? KB_SOURCE_NOTE : ''; }

  function findById(id) {
    var b = bank();
    for (var i = 0; i < b.length; i++) if (b[i].id === id) return b[i];
    return null;
  }
  function phaseById(id) { return phases().filter(function (p) { return p.id === id; })[0]; }

  /* slug helper for difficulty CSS classes */
  function slug(s) { return String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-'); }
  function levelClass(d) { return 'kb-tag--lvl-' + slug(d); }

  /* ============================================
     STATE
     ============================================ */
  var state = {
    mode: 'browse',
    search: '',
    level: 'all', domain: 'all', type: 'all', phase: 'all',
    flagMb: false, flagInterview: false, flagFounder: false, flagResearch: false,
    fcDeck: [], fcIndex: 0,
    quizDeck: [], quizIndex: 0, quizCorrect: 0, quizAnswered: false,
    interviewIndex: 0
  };

  function questionMatches(q) {
    var s = state.search.trim().toLowerCase();
    if (state.level !== 'all' && q.difficulty !== state.level) return false;
    if (state.domain !== 'all' && q.domain !== state.domain) return false;
    if (state.type !== 'all' && q.type !== state.type) return false;
    if (state.phase !== 'all' && q.phaseId !== state.phase) return false;
    if (state.flagMb && !q.isMindBending) return false;
    if (state.flagInterview && !q.isInterviewQuestion) return false;
    if (state.flagFounder && !q.isFounderQuestion) return false;
    if (state.flagResearch && !q.isResearchQuestion) return false;
    if (s) {
      var hay = ((q.question || '') + ' ' + (q.whyItMatters || '') + ' ' + (q.shortAnswer || '') + ' ' + (q.deepExplanation || '') + ' ' + ((q.tags || []).join(' ')) + ' ' + (q.domain || '') + ' ' + (q.type || '')).toLowerCase();
      if (hay.indexOf(s) < 0) return false;
    }
    return true;
  }
  function currentFiltered() {
    return bank().filter(questionMatches);
  }

  /* ============================================
     HERO STATS
     ============================================ */
  function renderHeroStats() {
    var el = $('#kb-hero-stats'); if (!el) return;
    var rows = [
      { num: '1 / 8',                 label: 'books processed' },
      { num: bank().length + '+',     label: 'questions' },
      { num: flashcards().length + '+', label: 'flashcards' },
      { num: quizzes().length + '+',  label: 'quiz prompts' },
      { num: domains().length,        label: 'AI domains' },
      { num: phases().length,         label: 'book phases' }
    ];
    el.innerHTML = rows.map(function (r) {
      return '<div class="kb-hero-stat"><div class="kb-hero-stat-num">' + esc(String(r.num)) + '</div><div class="kb-hero-stat-label">' + esc(r.label) + '</div></div>';
    }).join('');
  }

  /* ============================================
     HOW IT WORKS
     ============================================ */
  function renderHow() {
    var el = $('#kb-how'); if (!el) return;
    var steps = [
      { h:'Read the source',     d:'Each book is read end-to-end against the latest edition; ideas are extracted in their original framing first.' },
      { h:'Distil concepts',     d:'Durable concepts, definitions, frameworks and examples are pulled out as reusable learning objects.' },
      { h:'Turn into questions', d:'Each concept becomes one or more sharp questions with a why-it-matters, a short answer, and a deeper angle.' },
      { h:'Tag the question',    d:'Domain, difficulty, type, phase, plus mind-bending / interview / founder / research flags.' },
      { h:'Build flashcards',    d:'Selected questions become separate flashcard objects tied to the question id, filterable by domain and difficulty.' },
      { h:'Build quiz items',    d:'Where a clear answer exists, four-option multiple-choice prompts with explanations are written and stored as separate objects.' },
      { h:'Cross-link',          d:'Questions and concepts are cross-linked across books once more sources are added.' },
      { h:'Reference the source', d:'Every entry carries a source reference back to the book and chapter so claims stay auditable.' }
    ];
    el.innerHTML = steps.map(function (s, i) {
      return '<article class="kb-how-card">' +
        '<div class="kb-how-num">' + (i + 1).toString().padStart(2, '0') + '</div>' +
        '<h3 class="kb-how-h">' + esc(s.h) + '</h3>' +
        '<p class="kb-how-d">' + esc(s.d) + '</p>' +
      '</article>';
    }).join('');
  }

  /* ============================================
     BOOKS LIBRARY
     ============================================ */
  function renderBooks() {
    var el = $('#kb-books'); if (!el) return;
    el.innerHTML = books().map(function (b) {
      var s = b.stats || {};
      return '<article class="kb-book" id="book-' + esc(b.id) + '">' +
        '<div class="kb-book-tag">Book ' + esc(b.idLabel || b.id) + ' &middot; ' + esc(b.category || '') + '</div>' +
        '<h3 class="kb-book-h">' + esc(b.title) + '</h3>' +
        '<p class="kb-book-byline">' + esc(b.authors) + (b.edition ? ' &middot; ' + esc(b.edition) : '') + (b.year ? ' &middot; ' + esc(b.year) : '') + (b.publisher ? ' &middot; ' + esc(b.publisher) : '') + '</p>' +
        '<p class="kb-book-desc">' + esc(b.desc || '') + '</p>' +
        '<div class="kb-book-meta">' +
          '<span class="kb-book-pill kb-book-pill--status">' + esc(b.status || 'Processed') + '</span>' +
          (s.chapters   ? '<span class="kb-book-pill">' + s.chapters + ' chapters</span>'   : '') +
          (s.phases     ? '<span class="kb-book-pill">' + s.phases + ' phases</span>'       : '') +
          (s.questions  ? '<span class="kb-book-pill">' + s.questions + ' questions</span>' : '') +
          (s.flashcards ? '<span class="kb-book-pill">' + s.flashcards + ' flashcards</span>' : '') +
          (s.quiz       ? '<span class="kb-book-pill">' + s.quiz + ' quiz</span>'           : '') +
        '</div>' +
        '<div class="kb-book-cta">' +
          '<a class="kb-btn kb-btn--primary" href="#phases" data-cta="phases">Open ' + esc(b.idLabel || b.id) + '</a>' +
          '<a class="kb-btn" href="#bank" data-cta="browse">Browse questions</a>' +
          '<a class="kb-btn" href="#bank" data-cta="quiz">Quiz myself</a>' +
        '</div>' +
      '</article>';
    }).join('');
  }
  function renderNextBooks() {
    var el = $('#kb-coming'); if (!el) return;
    el.innerHTML = nextBooks().map(function (b) {
      return '<article class="kb-coming-card">' +
        '<div class="kb-coming-num">Book ' + esc(b.idLabel) + '</div>' +
        '<h4 class="kb-coming-h">' + esc(b.title) + '</h4>' +
        '<p class="kb-coming-d">' + esc(b.short || '') + '</p>' +
        '<span class="kb-coming-tag">' + esc(b.tag || 'Coming next') + '</span>' +
      '</article>';
    }).join('');
  }

  /* ============================================
     PHASES — 7-row expandable master map
     ============================================ */
  function renderPhases() {
    var el = $('#kb-phases'); if (!el) return;
    el.innerHTML = phases().map(function (p) {
      var count = bank().filter(function (q) { return q.phaseId === p.id; }).length;
      return '<article class="kb-phase" data-phase="' + esc(p.id) + '">' +
        '<header class="kb-phase-head">' +
          '<span class="kb-phase-tag">' + esc(p.label) + '</span>' +
          '<div>' +
            '<h4 class="kb-phase-title">' + esc(p.theme || p.title || p.label) + '</h4>' +
            '<p class="kb-phase-sub">Chapters ' + esc(p.chapters) + '</p>' +
          '</div>' +
          '<span class="kb-phase-arrow" aria-hidden="true">&#x276F;</span>' +
        '</header>' +
        '<div class="kb-phase-body">' +
          (p.summary ? '<div class="kb-phase-section"><div class="kb-phase-section-h">Summary</div><p class="kb-phase-section-d">' + esc(p.summary) + '</p></div>' : '') +
          (p.domains && p.domains.length ? '<div class="kb-phase-section"><div class="kb-phase-section-h">Domains in this phase</div><div class="kb-phase-pills">' + p.domains.map(function (d) { return '<span class="kb-phase-pill">' + esc(d) + '</span>'; }).join('') + '</div></div>' : '') +
          (p.keyIdeas && p.keyIdeas.length ? '<div class="kb-phase-section"><div class="kb-phase-section-h">Key ideas</div><ul class="kb-phase-list">' + p.keyIdeas.map(function (k) { return '<li>' + esc(k) + '</li>'; }).join('') + '</ul></div>' : '') +
          '<div class="kb-phase-cta">' +
            '<button class="kb-btn kb-btn--primary" type="button" data-phase-jump="' + esc(p.id) + '" data-mode="browse">Browse ' + count + ' questions</button>' +
            '<button class="kb-btn" type="button" data-phase-jump="' + esc(p.id) + '" data-mode="flashcards">Flashcards</button>' +
            '<button class="kb-btn" type="button" data-phase-jump="' + esc(p.id) + '" data-mode="quiz">Quiz</button>' +
          '</div>' +
        '</div>' +
      '</article>';
    }).join('');

    $$('.kb-phase-head', el).forEach(function (h) {
      h.addEventListener('click', function () {
        var p = h.closest('.kb-phase'); if (p) p.classList.toggle('is-open');
      });
    });
    $$('[data-phase-jump]', el).forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.stopPropagation();
        state.phase = b.dataset.phaseJump;
        var mode = b.dataset.mode || 'browse';
        var lbl = $('#kb-filter-phase'); if (lbl) lbl.value = state.phase;
        activateMode(mode);
        renderActiveMode();
        var sec = $('#bank'); if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ============================================
     DOMAIN GRID
     ============================================ */
  function renderDomainGrid() {
    var el = $('#kb-domain-grid'); if (!el) return;
    el.innerHTML = domains().map(function (d) {
      var rows = bank().filter(function (q) { return q.domain === d.id; });
      var diffs = {};
      rows.forEach(function (q) { diffs[q.difficulty] = (diffs[q.difficulty] || 0) + 1; });
      var diffKeys = Object.keys(diffs);
      var range = diffKeys.length ? diffKeys.join(' · ') : '—';
      return '<button class="kb-domain" type="button" data-domain="' + esc(d.id) + '" aria-label="Filter to ' + esc(d.id) + '">' +
        '<div class="kb-domain-label">' + esc(d.id) + '</div>' +
        '<div class="kb-domain-short">' + esc(d.short || '') + '</div>' +
        '<div class="kb-domain-meta">' +
          '<span class="kb-domain-count">' + rows.length + ' questions</span>' +
          (diffKeys.length ? '<span>' + esc(range) + '</span>' : '') +
        '</div>' +
      '</button>';
    }).join('');
    $$('.kb-domain', el).forEach(function (b) {
      b.addEventListener('click', function () {
        state.domain = b.dataset.domain;
        var sel = $('#kb-filter-domain'); if (sel) sel.value = state.domain;
        activateMode('browse');
        renderActiveMode();
        var sec = $('#bank'); if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ============================================
     SYNTHESIS BLOCK
     ============================================ */
  function renderSynthesis() {
    var el = $('#kb-synthesis'); if (!el) return;
    var s = synthesis();
    if (!s) return;
    function listBlock(label, arr) {
      if (!arr || !arr.length) return '';
      return '<div class="kb-synth-block">' +
        '<div class="kb-synth-h">' + esc(label) + '</div>' +
        '<ul class="kb-synth-list">' + arr.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
      '</div>';
    }
    function paraBlock(label, text) {
      if (!text) return '';
      return '<div class="kb-synth-block">' +
        '<div class="kb-synth-h">' + esc(label) + '</div>' +
        '<p class="kb-synth-d">' + esc(text) + '</p>' +
      '</div>';
    }
    el.innerHTML =
      paraBlock('Core thesis',                s.coreThesis) +
      paraBlock('What this book teaches',     s.whatThisBookTeaches) +
      paraBlock('Where it fits in AI',        s.whereItFitsInAI) +
      listBlock('Strongest ideas',            s.strongestIdeas) +
      listBlock('Limitations',                s.limitations) +
      listBlock('Modern relevance',           s.modernRelevance) +
      listBlock('Questions this book raises', s.questionsThisBookRaises);
  }

  /* ============================================
     MODE TABS
     ============================================ */
  function activateMode(mode) {
    state.mode = mode;
    LS.set(LS.KEY_MODE, mode);
    $$('.kb-mode').forEach(function (b) {
      var on = b.dataset.mode === mode;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    $$('.kb-mode-pane').forEach(function (p) {
      var on = p.dataset.mode === mode;
      p.classList.toggle('is-active', on);
      p.style.display = on ? '' : 'none';
    });
  }
  function renderActiveMode() {
    if (state.mode === 'browse') renderBrowse();
    else if (state.mode === 'flashcards') startFlashcards();
    else if (state.mode === 'quiz') startQuiz();
    else if (state.mode === 'interview') renderInterview();
    else if (state.mode === 'founder') renderPrompts('founder');
    else if (state.mode === 'researcher') renderPrompts('researcher');
  }

  /* ============================================
     FILTERS UI
     ============================================ */
  function renderFilters() {
    var lvl = $('#kb-filter-level');
    if (lvl) {
      lvl.innerHTML = '<option value="all">All difficulties</option>' +
        levels().map(function (l) { return '<option value="' + esc(l.id) + '">' + esc(l.id) + '</option>'; }).join('');
      var saved = LS.get(LS.KEY_LEVEL, 'all'); lvl.value = saved; state.level = saved;
    }
    var dm = $('#kb-filter-domain');
    if (dm) {
      dm.innerHTML = '<option value="all">All domains</option>' +
        domains().map(function (d) { return '<option value="' + esc(d.id) + '">' + esc(d.id) + '</option>'; }).join('');
    }
    var tp = $('#kb-filter-type');
    if (tp) {
      tp.innerHTML = '<option value="all">All types</option>' +
        types().map(function (t) { return '<option value="' + esc(t.id) + '">' + esc(t.id) + '</option>'; }).join('');
    }
    var ph = $('#kb-filter-phase');
    if (ph) {
      ph.innerHTML = '<option value="all">All phases</option>' +
        phases().map(function (p) { return '<option value="' + esc(p.id) + '">' + esc(p.label + ' · ' + p.theme) + '</option>'; }).join('');
    }

    var search = $('#kb-search');
    if (search) search.addEventListener('input', function (e) { state.search = e.target.value; renderActiveMode(); });
    if (lvl) lvl.addEventListener('change', function (e) { state.level = e.target.value; LS.set(LS.KEY_LEVEL, state.level); renderActiveMode(); });
    if (dm)  dm.addEventListener('change',  function (e) { state.domain = e.target.value; renderActiveMode(); });
    if (tp)  tp.addEventListener('change',  function (e) { state.type = e.target.value; renderActiveMode(); });
    if (ph)  ph.addEventListener('change',  function (e) { state.phase = e.target.value; renderActiveMode(); });

    $$('.kb-toggle').forEach(function (t) {
      t.addEventListener('click', function () {
        var key = t.dataset.toggle;
        var on = !t.classList.contains('is-active');
        t.classList.toggle('is-active', on);
        if (key === 'mb')         state.flagMb = on;
        if (key === 'interview')  state.flagInterview = on;
        if (key === 'founder')    state.flagFounder = on;
        if (key === 'research')   state.flagResearch = on;
        renderActiveMode();
      });
    });
    $$('.kb-mode').forEach(function (b) {
      b.addEventListener('click', function () { activateMode(b.dataset.mode); renderActiveMode(); });
    });
  }

  /* ============================================
     BROWSE
     ============================================ */
  function renderBrowse() {
    var pane = $('#kb-pane-browse'); if (!pane) return;
    var rows = currentFiltered();
    var meta = $('#kb-result-meta');
    if (meta) meta.textContent = rows.length + ' / ' + bank().length + ' questions';

    if (!rows.length) {
      pane.innerHTML = '<div class="kb-result-meta" style="padding: 24px 0">No questions match your filters. Try clearing the search or toggles.</div>';
      return;
    }
    var groups = {}, order = [];
    rows.forEach(function (q) {
      if (!groups[q.domain]) { groups[q.domain] = []; order.push(q.domain); }
      groups[q.domain].push(q);
    });
    pane.innerHTML = order.map(function (dom) {
      var dObj = domains().filter(function (d) { return d.id === dom; })[0] || { id: dom, short: '' };
      return '<section class="kb-domain-block kb-fade-in">' +
        '<h3 class="kb-domain-block-h">' + esc(dom) + '</h3>' +
        '<p class="kb-domain-block-sub">' + esc(dObj.short || '') + '</p>' +
        '<div class="kb-list">' + groups[dom].map(renderCard).join('') + '</div>' +
      '</section>';
    }).join('');
    pane.addEventListener('click', onCardClick, { once: true });
  }
  function onCardClick(e) {
    var card = e.target.closest && e.target.closest('.kb-card');
    var pane = $('#kb-pane-browse');
    if (card) {
      card.classList.toggle('is-open');
      var id = card.dataset.id;
      if (id) {
        LS.addToSet(LS.KEY_DONE, id);
        try { history.replaceState(null, '', '#q=' + id); } catch (err) {}
      }
    }
    if (pane) pane.addEventListener('click', onCardClick, { once: true });
  }
  function renderCard(q) {
    var ph = phaseById(q.phaseId);
    var phaseLabel = ph ? ph.label : q.phaseId;
    var tags = [
      '<span class="kb-tag ' + levelClass(q.difficulty) + '">' + esc(q.difficulty) + '</span>',
      '<span class="kb-tag kb-tag--type">' + esc(q.type) + '</span>',
      '<span class="kb-tag kb-tag--phase">' + esc(phaseLabel) + '</span>'
    ];
    if (q.isMindBending)       tags.push('<span class="kb-tag kb-tag--mb">Mind-bending</span>');
    if (q.isInterviewQuestion) tags.push('<span class="kb-tag">Interview</span>');
    if (q.isFounderQuestion)   tags.push('<span class="kb-tag">Founder</span>');
    if (q.isResearchQuestion)  tags.push('<span class="kb-tag">Research</span>');
    var hasQuiz = quizzes().some(function (z) { return z.questionId === q.id; });
    var hasFc   = flashcards().some(function (f) { return f.questionId === q.id; });
    if (hasQuiz) tags.push('<span class="kb-tag kb-tag--quiz">Quiz</span>');
    if (hasFc)   tags.push('<span class="kb-tag kb-tag--fc">Flashcard</span>');

    var tagList = (q.tags || []).filter(Boolean);
    var tagsHtml = tagList.map(function (t) { return '<span class="kb-card-tag">' + esc(t) + '</span>'; }).join('');

    return '<article class="kb-card" data-id="' + esc(q.id) + '" tabindex="0" role="button" aria-expanded="false">' +
      '<div class="kb-card-row">' +
        '<span class="kb-tag">' + esc(q.id) + '</span>' +
        tags.join('') +
      '</div>' +
      '<p class="kb-card-q">' + esc(q.question) + '</p>' +
      '<div class="kb-card-body">' +
        (q.whyItMatters ? '<div class="kb-card-section"><div class="kb-card-section-h">Why it matters</div><p class="kb-card-section-d">' + esc(q.whyItMatters) + '</p></div>' : '') +
        (q.shortAnswer ? '<div class="kb-card-section"><div class="kb-card-section-h">Short answer</div><p class="kb-card-section-d kb-ans">' + esc(q.shortAnswer) + '</p></div>' : '') +
        (q.deepExplanation ? '<div class="kb-card-section"><div class="kb-card-section-h">Deep explanation</div><p class="kb-card-section-d">' + esc(q.deepExplanation) + '</p></div>' : '') +
        (q.example ? '<div class="kb-card-section"><div class="kb-card-section-h">Example</div><p class="kb-card-section-d">' + esc(q.example) + '</p></div>' : '') +
        (q.commonMistake ? '<div class="kb-card-section"><div class="kb-card-section-h">Common mistake</div><p class="kb-card-section-d">' + esc(q.commonMistake) + '</p></div>' : '') +
        (q.modernAIConnection ? '<div class="kb-card-section"><div class="kb-card-section-h">Modern AI connection</div><p class="kb-card-section-d">' + esc(q.modernAIConnection) + '</p></div>' : '') +
        '<div class="kb-card-section"><div class="kb-card-section-h">Source</div><p class="kb-card-section-d">Book ' + esc(q.bookId || '001') + (q.chapter ? ' · Ch ' + esc(String(q.chapter)) : '') + ' · Phase ' + esc(phaseLabel) + '</p></div>' +
        (tagsHtml ? '<div class="kb-card-tags">' + tagsHtml + '</div>' : '') +
      '</div>' +
    '</article>';
  }

  /* ============================================
     FLASHCARD MODE — reads KB_FLASHCARDS joined with current question filters
     ============================================ */
  function buildFcDeck() {
    /* Start from all flashcards and apply only the filters that exist on the flashcard itself
       (domain, difficulty) plus the underlying question filters (phase, type, flags, search). */
    return flashcards().filter(function (f) {
      if (state.domain !== 'all' && f.domain !== state.domain) return false;
      if (state.level !== 'all' && f.difficulty !== state.level) return false;
      var q = findById(f.questionId);
      if (!q) return true;
      if (state.type !== 'all' && q.type !== state.type) return false;
      if (state.phase !== 'all' && q.phaseId !== state.phase) return false;
      if (state.flagMb && !q.isMindBending) return false;
      if (state.flagInterview && !q.isInterviewQuestion) return false;
      if (state.flagFounder && !q.isFounderQuestion) return false;
      if (state.flagResearch && !q.isResearchQuestion) return false;
      if (state.search) {
        var s = state.search.trim().toLowerCase();
        var hay = ((q.question || '') + ' ' + (q.whyItMatters || '') + ' ' + (q.shortAnswer || '') + ' ' + ((q.tags || []).join(' '))).toLowerCase();
        if (hay.indexOf(s) < 0) return false;
      }
      return true;
    });
  }
  function startFlashcards() {
    var pane = $('#kb-pane-flashcards'); if (!pane) return;
    var deck = buildFcDeck();
    if (!deck.length) {
      pane.innerHTML = '<div class="kb-result-meta" style="padding:24px 0">No flashcards match your filters.</div>';
      return;
    }
    state.fcDeck = deck;
    state.fcIndex = 0;
    drawFlashcard();
  }
  function drawFlashcard() {
    var pane = $('#kb-pane-flashcards'); if (!pane) return;
    var f = state.fcDeck[state.fcIndex];
    if (!f) {
      pane.innerHTML = '<div class="kb-result-meta" style="padding:24px 0">Deck complete. <button class="kb-fc-action kb-fc-action--skip" data-fc-restart>Restart</button></div>';
      var rb = $('[data-fc-restart]', pane); if (rb) rb.addEventListener('click', startFlashcards);
      return;
    }
    var q = findById(f.questionId);
    var ph = q ? phaseById(q.phaseId) : null;
    var phaseLabel = ph ? ph.label : (q ? q.phaseId : '');
    var known = LS.get(LS.KEY_KNOWN, []);
    var missed = LS.get(LS.KEY_MISSED, []);
    pane.innerHTML =
      '<div class="kb-fc-wrap kb-fade-in">' +
        '<div class="kb-fc-stats">' +
          '<span class="kb-fc-stat">Card <strong>' + (state.fcIndex + 1) + '</strong> / <strong>' + state.fcDeck.length + '</strong></span>' +
          '<span class="kb-fc-stat">Known <strong>' + known.length + '</strong></span>' +
          '<span class="kb-fc-stat">Missed <strong>' + missed.length + '</strong></span>' +
        '</div>' +
        '<article class="kb-fc" tabindex="0" data-fc-card aria-label="Click or press Space to reveal">' +
          '<div class="kb-fc-meta">' +
            '<span class="kb-tag">' + esc(f.id) + '</span>' +
            '<span class="kb-tag ' + levelClass(f.difficulty) + '">' + esc(f.difficulty) + '</span>' +
            '<span class="kb-tag">' + esc(f.domain) + '</span>' +
            (phaseLabel ? '<span class="kb-tag kb-tag--phase">' + esc(phaseLabel) + '</span>' : '') +
          '</div>' +
          '<p class="kb-fc-q">' + esc(f.front) + '</p>' +
          '<p class="kb-fc-a">' + esc(f.back) + '</p>' +
          '<div class="kb-fc-hint">Click or press <strong>Space</strong> to reveal</div>' +
        '</article>' +
        '<div class="kb-fc-actions">' +
          '<button class="kb-fc-action kb-fc-action--missed" data-fc="missed">I missed this</button>' +
          '<button class="kb-fc-action kb-fc-action--known"  data-fc="known">I knew this</button>' +
          '<button class="kb-fc-action kb-fc-action--skip"   data-fc="skip">Skip &rarr;</button>' +
        '</div>' +
        '<div class="kb-fc-progress">&larr; &rarr; navigate &middot; Space reveal &middot; K = knew, M = missed</div>' +
        '<div class="kb-fc-actions" style="margin-top:6px"><button class="kb-fc-action kb-fc-action--reset" data-fc="reset">Reset progress</button></div>' +
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
    var f = state.fcDeck[state.fcIndex]; if (!f) return;
    var qid = f.questionId || f.id;
    if (action === 'known')      { LS.addToSet(LS.KEY_KNOWN, qid); LS.removeFromSet(LS.KEY_MISSED, qid); state.fcIndex++; }
    else if (action === 'missed'){ LS.addToSet(LS.KEY_MISSED, qid); LS.removeFromSet(LS.KEY_KNOWN, qid); state.fcIndex++; }
    else if (action === 'skip')  { state.fcIndex++; }
    else if (action === 'reset') { LS.set(LS.KEY_KNOWN, []); LS.set(LS.KEY_MISSED, []); drawFlashcard(); return; }
    drawFlashcard();
  }

  /* ============================================
     QUIZ MODE — reads KB_QUIZZES joined with current filters
     ============================================ */
  function buildQuizDeck() {
    return quizzes().filter(function (z) {
      if (state.domain !== 'all' && z.domain !== state.domain) return false;
      if (state.level !== 'all' && z.difficulty !== state.level) return false;
      var q = findById(z.questionId);
      if (!q) return true;
      if (state.type !== 'all' && q.type !== state.type) return false;
      if (state.phase !== 'all' && q.phaseId !== state.phase) return false;
      if (state.flagMb && !q.isMindBending) return false;
      if (state.flagInterview && !q.isInterviewQuestion) return false;
      if (state.flagFounder && !q.isFounderQuestion) return false;
      if (state.flagResearch && !q.isResearchQuestion) return false;
      if (state.search) {
        var s = state.search.trim().toLowerCase();
        var hay = ((q.question || '') + ' ' + (q.whyItMatters || '') + ' ' + (q.shortAnswer || '') + ' ' + ((q.tags || []).join(' '))).toLowerCase();
        if (hay.indexOf(s) < 0) return false;
      }
      return true;
    });
  }
  function startQuiz() {
    var pane = $('#kb-pane-quiz'); if (!pane) return;
    var deck = buildQuizDeck();
    if (!deck.length) {
      pane.innerHTML = '<div class="kb-result-meta" style="padding:24px 0">No quiz items match your filters.</div>';
      return;
    }
    deck = deck.slice();
    for (var i = deck.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = deck[i]; deck[i] = deck[j]; deck[j] = t;
    }
    state.quizDeck = deck;
    state.quizIndex = 0;
    state.quizCorrect = 0;
    state.quizAnswered = false;
    drawQuiz();
  }
  function drawQuiz() {
    var pane = $('#kb-pane-quiz'); if (!pane) return;
    var z = state.quizDeck[state.quizIndex];
    if (!z) {
      var rec = LS.get(LS.KEY_QUIZ, []);
      rec.push({ d: new Date().toISOString().slice(0, 10), total: state.quizDeck.length, correct: state.quizCorrect });
      if (rec.length > 20) rec = rec.slice(-20);
      LS.set(LS.KEY_QUIZ, rec);
      pane.innerHTML =
        '<div class="kb-quiz-wrap kb-fade-in">' +
          '<div class="kb-quiz">' +
            '<div class="kb-quiz-q">Quiz complete &middot; ' + state.quizCorrect + ' / ' + state.quizDeck.length + ' correct</div>' +
            '<p class="kb-card-section-d">Score saved locally. Pick filters above and run another set.</p>' +
            '<div class="kb-quiz-controls"><button class="kb-btn kb-btn--primary" data-quiz-restart>Run another quiz</button></div>' +
          '</div>' +
        '</div>';
      var rb = $('[data-quiz-restart]', pane); if (rb) rb.addEventListener('click', startQuiz);
      return;
    }
    var q = findById(z.questionId);
    var ph = q ? phaseById(q.phaseId) : null;
    var phaseLabel = ph ? ph.label : '';
    var letters = ['A','B','C','D','E','F'];
    pane.innerHTML =
      '<div class="kb-quiz-wrap kb-fade-in">' +
        '<div class="kb-quiz-stats">' +
          '<span>Question <strong>' + (state.quizIndex + 1) + '</strong> / <strong>' + state.quizDeck.length + '</strong></span>' +
          '<span>Score <strong>' + state.quizCorrect + '</strong></span>' +
          '<span>Domain <strong>' + esc(z.domain) + '</strong></span>' +
        '</div>' +
        '<article class="kb-quiz">' +
          '<div class="kb-card-row">' +
            '<span class="kb-tag">' + esc(z.id) + '</span>' +
            '<span class="kb-tag ' + levelClass(z.difficulty) + '">' + esc(z.difficulty) + '</span>' +
            (phaseLabel ? '<span class="kb-tag kb-tag--phase">' + esc(phaseLabel) + '</span>' : '') +
          '</div>' +
          '<h4 class="kb-quiz-q">' + esc(z.prompt) + '</h4>' +
          '<div class="kb-quiz-opts">' +
            (z.options || []).map(function (opt, i) {
              return '<button class="kb-quiz-opt" data-i="' + i + '" type="button">' +
                '<span class="kb-quiz-opt-letter">' + letters[i] + '</span>' +
                '<span>' + esc(opt) + '</span>' +
              '</button>';
            }).join('') +
          '</div>' +
          '<div class="kb-quiz-exp" data-quiz-exp style="display:none"></div>' +
          '<div class="kb-quiz-controls">' +
            '<button class="kb-btn" data-quiz-skip>Skip</button>' +
            '<button class="kb-btn kb-btn--primary" data-quiz-next style="display:none">Next &rarr;</button>' +
          '</div>' +
        '</article>' +
      '</div>';
    state.quizAnswered = false;
    $$('.kb-quiz-opt', pane).forEach(function (b) {
      b.addEventListener('click', function () {
        if (state.quizAnswered) return;
        state.quizAnswered = true;
        var i = Number(b.dataset.i);
        $$('.kb-quiz-opt', pane).forEach(function (x, idx) {
          x.classList.add('is-disabled');
          if (idx === z.correctAnswer) x.classList.add('is-correct');
          else if (idx === i) x.classList.add('is-wrong');
        });
        if (i === z.correctAnswer) state.quizCorrect++;
        var exp = $('[data-quiz-exp]', pane);
        if (exp) {
          exp.style.display = 'block';
          exp.innerHTML = '<strong>' + (i === z.correctAnswer ? 'Correct.' : 'Not quite.') + '</strong>' + esc(z.explanation || '');
        }
        var nx = $('[data-quiz-next]', pane); if (nx) nx.style.display = '';
      });
    });
    var skip = $('[data-quiz-skip]', pane); if (skip) skip.addEventListener('click', function () { state.quizIndex++; drawQuiz(); });
    var next = $('[data-quiz-next]', pane); if (next) next.addEventListener('click', function () { state.quizIndex++; drawQuiz(); });
  }

  /* ============================================
     INTERVIEW MODE — one at a time with reveal-strong-answer
     ============================================ */
  function renderInterview() {
    var pane = $('#kb-pane-interview'); if (!pane) return;
    var list = interview();
    if (!list.length) { pane.innerHTML = '<div class="kb-result-meta" style="padding:24px 0">No interview prompts yet.</div>'; return; }
    if (state.interviewIndex >= list.length) state.interviewIndex = 0;
    var p = list[state.interviewIndex];
    pane.innerHTML =
      '<div class="kb-fc-wrap kb-fade-in">' +
        '<div class="kb-fc-stats"><span class="kb-fc-stat">Prompt <strong>' + (state.interviewIndex + 1) + '</strong> / <strong>' + list.length + '</strong></span>' +
        (p.tag ? '<span class="kb-fc-stat">Theme <strong>' + esc(p.tag) + '</strong></span>' : '') + '</div>' +
        '<article class="kb-fc">' +
          '<p class="kb-fc-q">' + esc(p.q) + '</p>' +
          (p.d ? '<p class="kb-fc-a">' + esc(p.d) + '</p>' : '') +
          '<div class="kb-fc-hint">Speak your answer aloud, then reveal the strong answer.</div>' +
        '</article>' +
        '<div class="kb-fc-actions">' +
          '<button class="kb-fc-action kb-fc-action--skip" type="button" data-iv="prev">&larr; Previous</button>' +
          '<button class="kb-fc-action kb-fc-action--known" type="button" data-iv="reveal">Reveal strong answer</button>' +
          '<button class="kb-fc-action kb-fc-action--skip" type="button" data-iv="next">Next &rarr;</button>' +
        '</div>' +
      '</div>';
    var card = $('.kb-fc', pane);
    $$('[data-iv]', pane).forEach(function (b) {
      b.addEventListener('click', function () {
        var a = b.dataset.iv;
        if (a === 'reveal') { if (card) card.classList.add('is-revealed'); }
        else if (a === 'next') { state.interviewIndex = (state.interviewIndex + 1) % list.length; renderInterview(); }
        else if (a === 'prev') { state.interviewIndex = (state.interviewIndex - 1 + list.length) % list.length; renderInterview(); }
      });
    });
  }

  /* ============================================
     FOUNDER / RESEARCHER prompt panes
     ============================================ */
  function renderPrompts(kind) {
    var pane = $('#kb-pane-' + kind); if (!pane) return;
    var list = (kind === 'founder') ? founder() : research();
    if (!list.length) {
      pane.innerHTML = '<div class="kb-result-meta" style="padding:24px 0">No prompts in this mode yet.</div>';
      return;
    }
    pane.innerHTML = '<div class="kb-prompts kb-fade-in">' +
      list.map(function (p, i) {
        return '<article class="kb-prompt">' +
          '<div class="kb-prompt-num">' + (i + 1).toString().padStart(2, '0') + (p.tag ? ' &middot; ' + esc(p.tag) : '') + '</div>' +
          '<h4 class="kb-prompt-q">' + esc(p.q) + '</h4>' +
          (p.d ? '<p class="kb-prompt-d">' + esc(p.d) + '</p>' : '') +
        '</article>';
      }).join('') +
    '</div>';
  }

  /* ============================================
     SOURCE NOTE
     ============================================ */
  function renderSourceNote() {
    var el = $('#kb-source-note'); if (!el) return;
    el.textContent = sourceNote();
  }

  /* ============================================
     KEYBOARD NAV (flashcards)
     ============================================ */
  function bindKeys() {
    document.addEventListener('keydown', function (e) {
      if (state.mode !== 'flashcards') return;
      var card = $('.kb-fc'); if (!card) return;
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT')) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); fcAction('skip'); }
      else if (e.key === 'ArrowLeft' && state.fcIndex > 0) { e.preventDefault(); state.fcIndex--; drawFlashcard(); }
      else if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); card.classList.toggle('is-revealed'); }
      else if (e.key === 'k' || e.key === 'K') { e.preventDefault(); fcAction('known'); }
      else if (e.key === 'm' || e.key === 'M') { e.preventDefault(); fcAction('missed'); }
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
      state.domain = q.domain;
      var sel = $('#kb-filter-domain'); if (sel) sel.value = q.domain;
      activateMode('browse');
      renderActiveMode();
      setTimeout(function () {
        var c = $('.kb-card[data-id="' + id + '"]');
        if (c) { c.classList.add('is-open'); c.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      }, 60);
    } else if (h.indexOf('domain=') === 0) {
      state.domain = h.slice(7);
      var sel2 = $('#kb-filter-domain'); if (sel2) sel2.value = state.domain;
      activateMode('browse');
      renderActiveMode();
    } else if (h.indexOf('phase=') === 0) {
      state.phase = h.slice(6);
      var pf = $('#kb-filter-phase'); if (pf) pf.value = state.phase;
      activateMode('browse');
      renderActiveMode();
    } else if (['browse','flashcards','quiz','interview','founder','researcher','phases','bank'].indexOf(h) >= 0) {
      if (h === 'phases' || h === 'bank') {
        var t = document.getElementById(h);
        if (t) t.scrollIntoView({ behavior: 'smooth' });
      } else {
        activateMode(h);
        renderActiveMode();
      }
    }
  }

  /* ============================================
     INIT
     ============================================ */
  function init() {
    renderHeroStats();
    renderHow();
    renderBooks();
    renderNextBooks();
    renderPhases();
    renderDomainGrid();
    renderFilters();
    renderSynthesis();
    renderPrompts('founder');
    renderPrompts('researcher');
    renderSourceNote();

    var savedMode = LS.get(LS.KEY_MODE, 'browse');
    if (['browse','flashcards','quiz','interview','founder','researcher'].indexOf(savedMode) < 0) savedMode = 'browse';
    activateMode(savedMode);
    renderActiveMode();
    bindKeys();
    applyHash();

    $$('[data-cta]').forEach(function (b) {
      b.addEventListener('click', function () {
        var c = b.dataset.cta;
        if (c === 'phases') { var t = $('#phases'); if (t) t.scrollIntoView({ behavior: 'smooth' }); return; }
        if (c === 'concepts') { var d = $('#domains'); if (d) d.scrollIntoView({ behavior: 'smooth' }); return; }
        if (c === 'browse')      activateMode('browse');
        else if (c === 'quiz')   activateMode('quiz');
        else if (c === 'fc')     activateMode('flashcards');
        else if (c === 'interview') activateMode('interview');
        else if (c === 'beginner') {
          state.level = 'Beginner'; var lv = $('#kb-filter-level'); if (lv) lv.value = 'Beginner';
          activateMode('browse');
        }
        renderActiveMode();
        var sec = $('#bank'); if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
