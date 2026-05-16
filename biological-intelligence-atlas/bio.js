/* ============================================
   BIOLOGICAL INTELLIGENCE ATLAS — Sticky ToC behaviour
   Active-section highlight + smooth-scroll. No frameworks.
   ============================================ */

(function () {
  'use strict';

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  function initToc() {
    var toc = $('.bio-toc'); if (!toc) return;
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

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initToc);
  else initToc();
})();
