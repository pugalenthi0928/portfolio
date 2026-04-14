/* ============================================
   AI MAP - Interaction Logic
   ============================================ */

(function () {
  'use strict';

  var active = null;
  var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- Color accessors --- */
  function bg(id)  { return 'var(--' + id + '-bg)'; }
  function txt(id) { return 'var(--' + id + '-t)'; }
  function bd(id)  { return 'var(--' + id + '-bd)'; }

  /* --- Collect all taxonomy items (ES5-safe) --- */
  function getAllItems() {
    var items = [];
    for (var i = 0; i < TAX.length; i++) {
      for (var j = 0; j < TAX[i].items.length; j++) {
        items.push(TAX[i].items[j]);
      }
    }
    return items;
  }

  /* --- Update visible count per category & hide empty ones --- */
  function updateCategoryCounts(id) {
    var cats = document.querySelectorAll('.map-cat');
    cats.forEach(function (cat) {
      var chips = cat.querySelectorAll('.map-chip');
      var visible = 0;
      chips.forEach(function (c) {
        if (id === null || c.dataset.l === id) visible++;
      });
      var countEl = cat.querySelector('.map-cat-count');
      if (countEl) {
        countEl.textContent = id === null ? chips.length : visible + '/' + chips.length;
      }
      /* Hide categories with 0 matching items when filtering */
      if (id === null) {
        cat.style.display = '';
      } else {
        cat.style.display = visible === 0 ? 'none' : '';
      }
    });
  }

  /* --- Animated count-up for cake bar numbers --- */
  function animateCount(el, target) {
    var duration = 400;
    var start = performance.now();
    function step(now) {
      var progress = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  }

  /* --- Selection handler --- */
  function sel(id, scroll) {
    active = id;

    /* Update URL hash */
    if (id !== null) {
      history.replaceState(null, '', '#' + id);
    } else {
      history.replaceState(null, '', window.location.pathname);
    }

    document.querySelectorAll('.map-bar').forEach(function (b) {
      b.classList.toggle('sel', b.dataset.id === id);
      b.setAttribute('aria-pressed', b.dataset.id === id ? 'true' : 'false');
    });

    document.querySelectorAll('.map-leg').forEach(function (leg) {
      leg.setAttribute('aria-pressed', leg.dataset.id === id ? 'true' : 'false');
    });

    document.querySelectorAll('.map-chip').forEach(function (c) {
      c.classList.toggle('dim', id !== null && c.dataset.l !== id);
    });

    updateCategoryCounts(id);

    /* Update explanation panel */
    var panel = document.getElementById('map-explanation');
    if (id === null) {
      panel.classList.remove('open');
    } else {
      var layer = null;
      for (var i = 0; i < LAYERS.length; i++) {
        if (LAYERS[i].id === id) { layer = LAYERS[i]; break; }
      }
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
      var taxSection = document.getElementById('map-tax-section');
      if (taxSection) {
        setTimeout(function () {
          var navHeight = 70;
          var top = taxSection.getBoundingClientRect().top + window.pageYOffset - navHeight;
          window.scrollTo({
            top: top,
            behavior: reducedMotion ? 'auto' : 'smooth'
          });
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

  /* --- Staggered cake build animation --- */
  function animateCakeBuild() {
    var bars = document.querySelectorAll('.map-bar');
    if (reducedMotion) {
      bars.forEach(function (bar) { bar.classList.add('map-bar-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          /* Reveal bars bottom-to-top (last in DOM = Energy = bottom) */
          var barEls = Array.prototype.slice.call(document.querySelectorAll('.map-bar'));
          var reversed = barEls.slice().reverse();
          reversed.forEach(function (bar, i) {
            setTimeout(function () {
              bar.classList.add('map-bar-visible');
              /* Animate count-up */
              var countEl = bar.querySelector('.map-bar-count');
              if (countEl) {
                var target = parseInt(countEl.textContent, 10);
                animateCount(countEl, target);
              }
            }, i * 120);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    var cake = document.getElementById('map-cake');
    if (cake) observer.observe(cake);

    /* Fallback: if observer hasn't fired after 1.5s (e.g. cake already in view), show bars */
    setTimeout(function () {
      var hidden = document.querySelectorAll('.map-bar:not(.map-bar-visible)');
      if (hidden.length > 0) {
        var barEls = Array.prototype.slice.call(document.querySelectorAll('.map-bar'));
        barEls.slice().reverse().forEach(function (bar, i) {
          setTimeout(function () {
            bar.classList.add('map-bar-visible');
            var countEl = bar.querySelector('.map-bar-count');
            if (countEl) {
              var target = parseInt(countEl.textContent, 10);
              animateCount(countEl, target);
            }
          }, i * 120);
        });
      }
    }, 1500);
  }

  /* --- Build the cake stack --- */
  function buildCake() {
    var cakeEl = document.getElementById('map-cake');
    var allItems = getAllItems();

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
      d.dataset.id = L.id;
      d.setAttribute('role', 'button');
      d.setAttribute('tabindex', '0');
      d.setAttribute('aria-pressed', 'false');
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
        var tipHTML = item.t ? '<span class="map-chip-tip">' + item.t + '</span>' : '';
        return '<span class="map-chip" data-l="' + item.l + '" style="background:' + bg(item.l) + ';color:' + txt(item.l) + '" tabindex="0" aria-label="' + item.n + (item.t ? ': ' + item.t : '') + '">' + item.n + tipHTML + '</span>';
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
    if (reducedMotion) {
      document.querySelectorAll('.map-reveal').forEach(function (el) {
        el.classList.add('map-revealed');
      });
      return;
    }

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

  /* --- Handle URL hash on load --- */
  function handleHash() {
    var hash = window.location.hash.replace('#', '');
    if (!hash) return;
    for (var i = 0; i < LAYERS.length; i++) {
      if (LAYERS[i].id === hash) {
        sel(hash, false);
        return;
      }
    }
  }

  /* --- Arrow key navigation between layers --- */
  function bindArrowKeys() {
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && active !== null) {
        sel(null, false);
        return;
      }

      if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;

      var bars = document.querySelectorAll('.map-bar');
      if (!bars.length) return;

      /* Only activate if a bar or the cake area is focused */
      var focused = document.activeElement;
      var isCakeArea = false;
      bars.forEach(function (b) { if (b === focused) isCakeArea = true; });
      if (!isCakeArea) return;

      e.preventDefault();

      /* bars in DOM: Apps(top) ... Energy(bottom)
         ArrowDown = move toward Energy = next in DOM
         ArrowUp = move toward Apps = prev in DOM */
      var barArr = Array.prototype.slice.call(bars);
      var idx = -1;
      barArr.forEach(function (b, i) { if (b === focused) idx = i; });

      var nextIdx;
      if (e.key === 'ArrowDown') {
        nextIdx = idx < barArr.length - 1 ? idx + 1 : 0;
      } else {
        nextIdx = idx > 0 ? idx - 1 : barArr.length - 1;
      }

      barArr[nextIdx].focus();
      sel(barArr[nextIdx].dataset.id, false);
    });
  }

  /* --- Init --- */
  document.addEventListener('DOMContentLoaded', function () {
    buildCake();
    buildLegend();
    buildTaxonomy();
    bindShowAll();
    initScrollReveal();
    animateCakeBuild();
    handleHash();
    bindArrowKeys();
  });
})();
