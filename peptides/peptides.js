/* ============================================
   THE PEPTIDE WORLD — Page Interactions
   Light vanilla JS: table search/filter, sticky-ToC highlight.
   FAQ uses native <details>; no JS needed.
   ============================================ */

(function () {
  'use strict';

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  /* ============================================
     PEPTIDE TABLE — search + category filter
     ============================================ */
  function initTable() {
    var table = $('#pep-table');
    if (!table) return;
    var search = $('#pep-table-search');
    var catSel = $('#pep-table-cat');
    var eviSel = $('#pep-table-evi');
    var countEl = $('#pep-table-count');
    var rows = $$('tbody tr', table);
    var totalRows = rows.length;

    function apply() {
      var s = (search ? search.value : '').trim().toLowerCase();
      var cat = catSel ? catSel.value : 'all';
      var evi = eviSel ? eviSel.value : 'all';
      var visible = 0;
      rows.forEach(function (row) {
        var name = (row.dataset.name || '').toLowerCase();
        var rowCat = row.dataset.cat || '';
        var rowEvi = row.dataset.evi || '';
        var note = (row.dataset.note || '').toLowerCase();
        var role = (row.dataset.role || '').toLowerCase();
        var hay = name + ' ' + rowCat.toLowerCase() + ' ' + rowEvi.toLowerCase() + ' ' + role + ' ' + note;
        var match = (!s || hay.indexOf(s) >= 0)
          && (cat === 'all' || rowCat === cat)
          && (evi === 'all' || rowEvi === evi);
        row.classList.toggle('is-hidden', !match);
        if (match) visible++;
      });
      if (countEl) countEl.textContent = visible + ' / ' + totalRows + ' peptides shown';
    }
    if (search) search.addEventListener('input', apply);
    if (catSel) catSel.addEventListener('change', apply);
    if (eviSel) eviSel.addEventListener('change', apply);
    apply();
  }

  /* ============================================
     STICKY ToC — highlight active section
     ============================================ */
  function initToc() {
    var toc = $('.pep-toc'); if (!toc) return;
    var links = $$('a[data-toc]', toc);
    if (!links.length) return;
    var sections = links.map(function (a) {
      var id = a.getAttribute('href').replace(/^#/, '');
      return { id: id, el: document.getElementById(id), link: a };
    }).filter(function (s) { return s.el; });

    function onScroll() {
      var y = window.pageYOffset + 120;
      var current = sections[0];
      for (var i = 0; i < sections.length; i++) {
        if (sections[i].el.offsetTop <= y) current = sections[i];
      }
      links.forEach(function (a) { a.classList.remove('is-active'); });
      if (current) current.link.classList.add('is-active');
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* smooth-scroll for ToC clicks */
    links.forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href').replace(/^#/, '');
        var el = document.getElementById(id);
        if (!el) return;
        e.preventDefault();
        var top = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: top, behavior: 'smooth' });
        try { history.replaceState(null, '', '#' + id); } catch (err) {}
      });
    });
  }

  function init() {
    initTable();
    initToc();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
