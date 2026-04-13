/* ============================================
   AI MAP - Interaction Logic
   ============================================ */

(function () {
  'use strict';

  var active = null;

  /* --- Color accessors --- */
  function bg(id)  { return 'var(--' + id + '-bg)'; }
  function txt(id) { return 'var(--' + id + '-t)'; }
  function bd(id)  { return 'var(--' + id + '-bd)'; }

  /* --- Selection handler --- */
  function sel(id, scroll) {
    active = id;

    document.querySelectorAll('.map-bar').forEach(function (b) {
      b.classList.toggle('sel', b.dataset.id === id);
      b.setAttribute('aria-pressed', b.dataset.id === id ? 'true' : 'false');
    });

    document.querySelectorAll('.map-chip').forEach(function (c) {
      c.classList.toggle('dim', id !== null && c.dataset.l !== id);
    });

    /* Update explanation panel */
    var panel = document.getElementById('map-explanation');
    if (id === null) {
      panel.classList.remove('open');
    } else {
      var layer = LAYERS.find(function (l) { return l.id === id; });
      if (layer) {
        document.getElementById('map-exp-title').textContent = layer.label;
        document.getElementById('map-exp-title').style.color = txt(id);
        document.getElementById('map-exp-body').textContent = layer.desc;
        panel.classList.add('open');
      }
    }

    /* Show all button active state */
    var btn = document.getElementById('map-show-all');
    if (btn) {
      btn.classList.toggle('filter-active', id !== null);
    }

    /* Smooth scroll to taxonomy when a layer is selected */
    if (id !== null && scroll !== false) {
      var taxSection = document.getElementById('map-tax');
      if (taxSection) {
        setTimeout(function () {
          taxSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
      }
    }
  }

  /* --- Keyboard handler for interactive elements --- */
  function onKey(e, callback) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      callback();
    }
  }

  /* --- Build the cake stack --- */
  function buildCake() {
    var cakeEl = document.getElementById('map-cake');
    var allItems = TAX.flatMap(function (c) { return c.items; });

    /* Reverse so Energy (bottom, widest) appears last in DOM.
       flex-direction: column means first child = top. Reverse puts Apps first (top). */
    var ordered = LAYERS.slice().reverse();

    ordered.forEach(function (L) {
      var count = allItems.filter(function (i) { return i.l === L.id; }).length;
      var bar = document.createElement('div');
      bar.className = 'map-bar';
      bar.dataset.id = L.id;
      bar.setAttribute('role', 'button');
      bar.setAttribute('tabindex', '0');
      bar.setAttribute('aria-pressed', 'false');
      bar.setAttribute('aria-label', L.label + ': ' + L.sub + ', ' + count + ' topics');
      bar.style.width = L.w + '%';
      bar.style.background = bg(L.id);
      bar.style.color = txt(L.id);

      bar.innerHTML =
        '<div class="map-bar-left">' +
          '<div class="map-bar-name">' + L.label + '</div>' +
          '<div class="map-bar-sub">' + L.sub + '</div>' +
        '</div>' +
        '<div class="map-bar-count">' + count + '</div>';

      var toggle = function () {
        sel(active === L.id ? null : L.id);
      };

      bar.addEventListener('click', toggle);
      bar.addEventListener('keydown', function (e) { onKey(e, toggle); });

      cakeEl.appendChild(bar);
    });
  }

  /* --- Build legend --- */
  function buildLegend() {
    var legEl = document.getElementById('map-legend');

    LAYERS.forEach(function (L) {
      var d = document.createElement('div');
      d.className = 'map-leg';
      d.setAttribute('role', 'button');
      d.setAttribute('tabindex', '0');
      d.setAttribute('aria-label', 'Filter by ' + L.label);
      d.innerHTML = '<div class="map-leg-dot" style="background:' + bd(L.id) + '"></div><span>' + L.label + '</span>';

      var toggle = function () {
        sel(active === L.id ? null : L.id);
      };

      d.addEventListener('click', toggle);
      d.addEventListener('keydown', function (e) { onKey(e, toggle); });
      legEl.appendChild(d);
    });
  }

  /* --- Build taxonomy grid --- */
  function buildTaxonomy() {
    var taxEl = document.getElementById('map-tax');

    TAX.forEach(function (cat) {
      var block = document.createElement('div');
      block.className = 'map-cat map-reveal';

      var chipsHTML = cat.items.map(function (item) {
        return '<span class="map-chip" data-l="' + item.l + '" style="background:' + bg(item.l) + ';color:' + txt(item.l) + '">' + item.n + '</span>';
      }).join('');

      block.innerHTML =
        '<div class="map-cat-hd">' +
          '<span>' + cat.cat + '</span>' +
          '<span class="map-cat-count">' + cat.items.length + '</span>' +
        '</div>' +
        '<div class="map-cat-note">' + cat.note + '</div>' +
        '<div class="map-chips">' + chipsHTML + '</div>';

      taxEl.appendChild(block);
    });
  }

  /* --- Show All button --- */
  function bindShowAll() {
    var btn = document.getElementById('map-show-all');
    if (btn) {
      btn.addEventListener('click', function () { sel(null, false); });
    }
  }

  /* --- Scroll reveal for sections --- */
  function initScrollReveal() {
    var els = document.querySelectorAll('.map-reveal');
    if (!els.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('map-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    els.forEach(function (el) { observer.observe(el); });
  }

  /* --- Init --- */
  document.addEventListener('DOMContentLoaded', function () {
    buildCake();
    buildLegend();
    buildTaxonomy();
    bindShowAll();
    initScrollReveal();
  });
})();
