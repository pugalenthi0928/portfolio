// ============================================
// Portfolio — Premium Interactions & Animations
// ============================================

// Shared state
let smoothScroller = null;

document.addEventListener('DOMContentLoaded', () => {

  // --- 0. Preloader (gates hero reveal) ---
  initPreloader();

  // --- 1. Custom Cursor ---
  initCustomCursor();

  // --- 2. Scroll Reveal (Varied Animations) ---
  initScrollReveal();

  // --- 3. Magnetic Buttons ---
  initMagneticButtons();

  // --- 4. Navbar Scroll Effect ---
  initNavbar();

  // --- 5. Smooth Scroll for Nav Links ---
  initSmoothScroll();

  // --- 5b. Active Nav Link on Scroll ---
  initActiveNav();

  // --- 6. Contact Form Handler ---
  initContactForm();

  // --- 7. Hero Parallax ---
  initHeroParallax();

  // --- 8. Dark Mode Toggle ---
  initDarkMode();

  // --- 9. Mobile Menu ---
  initMobileMenu();

  // --- 10. Back to Top ---
  initBackToTop();

  // --- 11. Smooth Momentum Scroll ---
  initMomentumScroll();

  // --- 12. 3D Card Tilt + Cursor Glow ---
  initCardTilt();

  // --- 13. Section Heading Character Reveal ---
  initCharReveal();

  // --- 14. Parallax Depth Layers ---
  initParallax();

});


// ============================================
// 0. PRELOADER
// ============================================
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) {
    // No preloader (blog pages) — run hero reveal immediately
    initHeroReveal();
    return;
  }

  // Check reduced motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Skip on same-session return visits
  if (sessionStorage.getItem('preloaded') || prefersReduced) {
    preloader.classList.add('hidden');
    initHeroReveal();
    return;
  }

  const barFill = document.getElementById('preloader-bar-fill');
  const counter = document.getElementById('preloader-counter');
  const duration = 2800; // ms
  const startTime = performance.now();

  document.body.style.overflow = 'hidden';

  function updateProgress(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const percent = Math.round(eased * 100);

    if (barFill) barFill.style.width = percent + '%';
    if (counter) counter.textContent = percent;

    if (progress < 1) {
      requestAnimationFrame(updateProgress);
    } else {
      // Complete — slide preloader up
      setTimeout(() => {
        preloader.classList.add('done');
        sessionStorage.setItem('preloaded', '1');

        // After slide-up animation completes
        setTimeout(() => {
          preloader.classList.add('hidden');
          document.body.style.overflow = '';
          initHeroReveal();
        }, 700);
      }, 200);
    }
  }

  requestAnimationFrame(updateProgress);
}


// ============================================
// 1. HERO CINEMATIC REVEAL + TEXT SCRAMBLE
// ============================================
function initHeroReveal() {
  const reveal = () => {
    const sequence = [
      { el: '.hero-eyebrow .line-inner', delay: 200 },
      { el: '.hero-heading .line-wrap:nth-child(1) .line-inner', delay: 400 },
      { el: '.hero-heading .line-wrap:nth-child(2) .line-inner', delay: 580 },
      { el: '.hero-subtitle .line-wrap:nth-child(1) .line-inner', delay: 800 },
      { el: '.hero-subtitle .line-wrap:nth-child(2) .line-inner', delay: 920 },
      { el: '.hero-cta', delay: 1150 },
      { el: '.hero-scroll-indicator', delay: 1350 },
    ];

    sequence.forEach(({ el, delay }) => {
      const element = document.querySelector(el);
      if (element) {
        setTimeout(() => element.classList.add('revealed'), delay);
      }
    });

    // Trigger text scramble on the hero name after its line reveals
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!prefersReduced) {
        setTimeout(() => {
          textScramble(heroName);
        }, 600); // Start after name line begins revealing (580ms)
      }
    }
  };

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(reveal);
  } else {
    setTimeout(reveal, 300);
  }
}


// ============================================
// TEXT SCRAMBLE CLASS
// ============================================
function textScramble(element) {
  const finalText = element.textContent;
  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const duration = 1200; // ms
  const startTime = performance.now();

  // Build queue: each char has a resolve time (left-to-right with randomness)
  const queue = [];
  for (let i = 0; i < finalText.length; i++) {
    const charStart = (i / finalText.length) * 0.6; // normalized 0-0.6
    const charEnd = charStart + 0.3 + Math.random() * 0.2; // resolve between charStart+0.3 and charStart+0.5
    queue.push({
      from: chars[Math.floor(Math.random() * chars.length)],
      to: finalText[i],
      resolveAt: Math.min(charEnd, 1.0),
    });
  }

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);

    let output = '';
    for (let i = 0; i < queue.length; i++) {
      const q = queue[i];
      if (progress >= q.resolveAt) {
        output += q.to;
      } else {
        output += chars[Math.floor(Math.random() * chars.length)];
      }
    }
    element.textContent = output;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = finalText;
    }
  }

  requestAnimationFrame(update);
}


// ============================================
// 2. CUSTOM CURSOR
// ============================================
function initCustomCursor() {
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouch) return;

  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  let isVisible = false;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';

    if (!isVisible) {
      isVisible = true;
      dot.classList.add('active');
      ring.classList.add('active');
      ringX = mouseX;
      ringY = mouseY;
    }
  });

  document.addEventListener('mouseleave', () => {
    dot.classList.remove('active');
    ring.classList.remove('active');
    isVisible = false;
  });

  document.addEventListener('mouseenter', () => {
    if (mouseX !== 0 || mouseY !== 0) {
      dot.classList.add('active');
      ring.classList.add('active');
      isVisible = true;
    }
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.25;
    ringY += (mouseY - ringY) * 0.25;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Bind cursor hover effects — exported for reuse
  bindCursorHover(document, ring);
}

// Extracted for reuse by blog.js on dynamic content
function bindCursorHover(container, ring) {
  if (!ring) {
    ring = document.querySelector('.cursor-ring');
  }
  if (!ring) return;

  const hoverTargets = container.querySelectorAll('a, button, .btn, .tag, input, textarea, .theme-toggle, .nav-toggle');
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
      ring.classList.remove('cursor-hover');
    });
  });

  const projectCards = container.querySelectorAll('.project-card, .project-compact-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      ring.classList.remove('cursor-hover');
      ring.classList.add('cursor-view');
      ring.textContent = 'View';
    });
    card.addEventListener('mouseleave', () => {
      ring.classList.remove('cursor-view');
      ring.textContent = '';
    });
  });
}


// ============================================
// 3. SCROLL REVEAL (Varied Animations)
// ============================================
function initScrollReveal() {
  const animatedElements = document.querySelectorAll('[data-animate]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -40px 0px'
  });

  animatedElements.forEach((el) => {
    if (!el.closest('.hero')) {
      observer.observe(el);
    }
  });
}


// ============================================
// 4. MAGNETIC BUTTONS
// ============================================
function initMagneticButtons() {
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouch) return;

  const magneticEls = document.querySelectorAll('.btn, .project-link, .social-link, .nav-links a, .theme-toggle, .highlight-card');

  magneticEls.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      el.classList.add('magnetic-active');
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
      el.classList.remove('magnetic-active');
    });
  });
}


// ============================================
// 5. NAVBAR SCROLL EFFECT
// ============================================
function initNavbar() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });
}


// ============================================
// 6. SMOOTH SCROLL FOR NAV LINKS
// ============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return; // Skip logo/home links
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const targetY = target.getBoundingClientRect().top + window.scrollY;

        // If momentum scroll is active, use it
        if (smoothScroller) {
          smoothScroller.scrollTo(targetY);
        } else {
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
      }
    });
  });
}


// ============================================
// 5b. ACTIVE NAV LINK ON SCROLL
// ============================================
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  function updateActiveLink() {
    const scrollY = window.scrollY;
    const offset = window.innerHeight * 0.35; // 35% from top
    let currentId = '';

    sections.forEach(section => {
      const top = section.offsetTop - offset;
      const bottom = top + section.offsetHeight;
      if (scrollY >= top && scrollY < bottom) {
        currentId = section.getAttribute('id');
      }
    });

    // Don't highlight hero
    if (currentId === 'hero') currentId = '';

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (currentId && link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  // Run once on load
  updateActiveLink();
}


// ============================================
// 7. CONTACT FORM HANDLER
// ============================================
function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    const originalHTML = btn.innerHTML;

    // Show sending state
    btn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="animation: spin 1s linear infinite"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
      Sending...
    `;
    btn.disabled = true;

    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then((response) => {
      if (response.ok) {
        btn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Message Sent!
        `;
        btn.style.background = '#16a34a';
        btn.style.color = 'white';
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    })
    .catch(() => {
      btn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
        Failed — try again
      `;
      btn.style.background = '#dc2626';
      btn.style.color = 'white';
    })
    .finally(() => {
      btn.disabled = false;
      setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.style.background = '';
        btn.style.color = '';
      }, 3000);
    });
  });
}


// ============================================
// 8. HERO PARALLAX
// ============================================
function initHeroParallax() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      hero.style.transform = `translateY(${scrolled * 0.15}px)`;
      hero.style.opacity = 1 - (scrolled / (window.innerHeight * 1.2));
    }
  }, { passive: true });
}


// ============================================
// 9. DARK MODE TOGGLE
// ============================================
function initDarkMode() {
  const toggles = document.querySelectorAll('.theme-toggle');
  if (!toggles.length) return;

  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const html = document.documentElement;
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      if (newTheme === 'light') {
        html.removeAttribute('data-theme');
      } else {
        html.setAttribute('data-theme', 'dark');
      }

      localStorage.setItem('theme', newTheme);
    });
  });
}


// ============================================
// 10. MOBILE MENU
// ============================================
function initMobileMenu() {
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.getElementById('nav-mobile');
  if (!toggle || !mobileNav) return;

  const links = mobileNav.querySelectorAll('a');

  toggle.addEventListener('click', () => {
    const isOpen = toggle.classList.contains('active');

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close on link click
  links.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle.classList.contains('active')) {
      closeMenu();
    }
  });

  function openMenu() {
    toggle.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
    mobileNav.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Stagger link animations
    const items = mobileNav.querySelectorAll('a, .theme-toggle');
    items.forEach((item, i) => {
      item.style.transitionDelay = `${(i + 1) * 60}ms`;
    });
  }

  function closeMenu() {
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('active');
    document.body.style.overflow = '';

    // Reset delays
    const items = mobileNav.querySelectorAll('a, .theme-toggle');
    items.forEach(item => {
      item.style.transitionDelay = '';
    });
  }
}


// ============================================
// 11. BACK TO TOP
// ============================================
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    if (smoothScroller) {
      smoothScroller.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}


// ============================================
// 12. SMOOTH MOMENTUM SCROLL (Lenis-style)
// ============================================
function initMomentumScroll() {
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isTouch || prefersReduced) return;

  let currentY = window.scrollY;
  let targetY = currentY;
  let isRunning = true;
  const lerp = 0.09;
  const threshold = 0.5;

  function getMaxScroll() {
    return document.body.scrollHeight - window.innerHeight;
  }

  window.addEventListener('wheel', (e) => {
    e.preventDefault();
    targetY += e.deltaY;
    targetY = Math.max(0, Math.min(targetY, getMaxScroll()));
  }, { passive: false });

  // Sync on resize
  window.addEventListener('resize', () => {
    targetY = Math.min(targetY, getMaxScroll());
  }, { passive: true });

  // Sync when user grabs scrollbar
  let isSyncing = false;
  window.addEventListener('scroll', () => {
    if (!isSyncing) {
      // External scroll (scrollbar drag, programmatic) — sync
      const diff = Math.abs(window.scrollY - currentY);
      if (diff > 2) {
        targetY = window.scrollY;
        currentY = window.scrollY;
      }
    }
  }, { passive: true });

  function animate() {
    if (!isRunning) return;

    const diff = targetY - currentY;
    if (Math.abs(diff) > threshold) {
      currentY += diff * lerp;
      isSyncing = true;
      window.scrollTo(0, Math.round(currentY));
      isSyncing = false;
    } else if (Math.abs(diff) > 0.01) {
      currentY = targetY;
      isSyncing = true;
      window.scrollTo(0, Math.round(currentY));
      isSyncing = false;
    }

    requestAnimationFrame(animate);
  }

  animate();

  // Expose for nav links and back-to-top
  smoothScroller = {
    scrollTo: (y) => {
      targetY = Math.max(0, Math.min(y, getMaxScroll()));
    },
    getCurrentY: () => currentY,
    getTargetY: () => targetY,
  };
}


// ============================================
// 13. 3D CARD TILT + CURSOR GLOW
// ============================================
function initCardTilt() {
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouch) return;

  const cards = document.querySelectorAll('.project-card, .project-compact-card');
  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;   // 0 to 1
      const y = (e.clientY - rect.top) / rect.height;    // 0 to 1
      const centerX = x - 0.5; // -0.5 to 0.5
      const centerY = y - 0.5; // -0.5 to 0.5

      // 3D tilt
      const rotateX = centerY * -12; // max 6 degrees
      const rotateY = centerX * 12;  // max 6 degrees

      card.classList.add('tilt-active');
      card.classList.remove('tilt-reset');
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;

      // Cursor glow position
      card.style.setProperty('--mouse-x', `${x * 100}%`);
      card.style.setProperty('--mouse-y', `${y * 100}%`);
      card.classList.add('glow-active');
    });

    card.addEventListener('mouseleave', () => {
      card.classList.remove('tilt-active');
      card.classList.add('tilt-reset');
      card.style.transform = '';
      card.classList.remove('glow-active');
    });
  });
}


// ============================================
// 14. SECTION HEADING CHARACTER REVEAL
// ============================================
function initCharReveal() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const headings = document.querySelectorAll('.section-heading');
  if (!headings.length) return;

  headings.forEach(heading => {
    const text = heading.textContent;
    // Remove existing data-animate to use our own observer
    heading.removeAttribute('data-animate');
    heading.style.opacity = '1'; // Override [data-animate] opacity: 0

    heading.innerHTML = '';
    let charIndex = 0;

    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.classList.add('char');
      if (text[i] === ' ') {
        span.classList.add('space-char');
        span.innerHTML = '&nbsp;';
      } else {
        span.textContent = text[i];
        span.style.setProperty('--i', charIndex);
        charIndex++;
      }
      heading.appendChild(span);
    }
  });

  // Observe for scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  headings.forEach(h => {
    if (!h.closest('.hero')) {
      observer.observe(h);
    }
  });
}


// ============================================
// 15. PARALLAX DEPTH LAYERS
// ============================================
function initParallax() {
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isTouch || prefersReduced) return;

  const elements = document.querySelectorAll('[data-parallax]');
  if (!elements.length) return;

  // Clamp parallax offset to prevent elements drifting too far
  const MAX_OFFSET = 50; // px

  function updateParallax() {
    const scrollY = window.scrollY;
    const viewportCenter = scrollY + window.innerHeight / 2;

    elements.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-parallax'));
      const rect = el.getBoundingClientRect();
      const elementCenter = scrollY + rect.top + rect.height / 2;
      let offset = (viewportCenter - elementCenter) * speed;

      // Clamp to prevent excessive drift
      offset = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, offset));

      // Use translate property (not transform) to avoid overwriting hover transforms
      el.style.translate = `0 ${offset}px`;
    });

    requestAnimationFrame(updateParallax);
  }

  requestAnimationFrame(updateParallax);
}
