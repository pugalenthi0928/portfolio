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

  // --- 15. Neural Network Particle Canvas ---
  initParticleCanvas();

  // --- 16. Stat Counter Animation ---
  initStatCounters();

  // --- 17. Marquee Scroll Velocity Boost ---
  initMarqueeBoost();

  // --- 18. Section Arrival Glow ---
  initSectionGlow();

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
  const duration = 1600; // ms
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
      // Complete — overlap hero reveal with preloader dissolve
      setTimeout(() => initHeroReveal(), 100);

      setTimeout(() => {
        preloader.classList.add('dissolving');
        sessionStorage.setItem('preloaded', '1');

        setTimeout(() => {
          preloader.classList.add('hidden');
          document.body.style.overflow = '';
        }, 600);
      }, 300);
    }
  }

  requestAnimationFrame(updateProgress);
}


// ============================================
// 1. HERO CINEMATIC REVEAL + TEXT SCRAMBLE
// ============================================
function initHeroReveal() {
  const reveal = () => {
    // Trigger canvas fade-in immediately
    if (typeof revealParticleCanvas === 'function') revealParticleCanvas();

    const sequence = [
      { el: '.hero-eyebrow .line-inner', delay: 100 },
      { el: '.hero-heading .line-wrap:nth-child(1) .line-inner', delay: 280 },
      { el: '.hero-heading .line-wrap:nth-child(2) .line-inner', delay: 420 },
      { el: '.hero-subtitle .line-wrap:nth-child(1) .line-inner', delay: 620 },
      { el: '.hero-subtitle .line-wrap:nth-child(2) .line-inner', delay: 750 },
      { el: '.hero-cta', delay: 950 },
      { el: '.hero-scroll-indicator', delay: 1100 },
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
        }, 450); // Start after name line begins revealing
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
  const glow = document.querySelector('.mouse-glow');
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  let glowX = 0, glowY = 0;
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
      if (glow) glow.classList.add('active');
      ringX = mouseX;
      ringY = mouseY;
      glowX = mouseX;
      glowY = mouseY;
    }
  });

  document.addEventListener('mouseleave', () => {
    dot.classList.remove('active');
    ring.classList.remove('active');
    if (glow) glow.classList.remove('active');
    isVisible = false;
  });

  document.addEventListener('mouseenter', () => {
    if (mouseX !== 0 || mouseY !== 0) {
      dot.classList.add('active');
      ring.classList.add('active');
      if (glow) glow.classList.add('active');
      isVisible = true;
    }
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.25;
    ringY += (mouseY - ringY) * 0.25;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';

    // Mouse glow follows with slower lerp for atmospheric trailing
    if (glow) {
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;
      glow.style.left = glowX + 'px';
      glow.style.top = glowY + 'px';
    }

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

  const hoverTargets = container.querySelectorAll('a, button, .btn, .tag, input, textarea, .nav-toggle');
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

  // Separate observer for project cards — higher threshold for more visible stagger
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        cardObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
  });

  animatedElements.forEach((el) => {
    if (!el.closest('.hero')) {
      if (el.classList.contains('project-card')) {
        cardObserver.observe(el);
      } else {
        observer.observe(el);
      }
    }
  });

  // Timeline animation — observe .timeline for line growth + dot sequence
  const timeline = document.querySelector('.timeline');
  if (timeline) {
    observer.observe(timeline);
  }
}


// ============================================
// 4. MAGNETIC BUTTONS
// ============================================
function initMagneticButtons() {
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouch) return;

  const magneticEls = document.querySelectorAll('.btn, .project-link, .social-link, .nav-links a, .highlight-card');

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
// CELEBRATION BURST (confetti on form success)
// ============================================
function celebrationBurst(originEl) {
  const rect = originEl.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:fixed;inset:0;z-index:10002;pointer-events:none;';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  const colors = ['#F0784A', '#F59070', '#FFD4C2', '#22c55e', '#4AB4C8', '#E7E5E4'];
  const particles = [];
  for (let i = 0; i < 30; i++) {
    const angle = (Math.PI * 2 * i) / 30 + (Math.random() - 0.5) * 0.5;
    const speed = 3 + Math.random() * 5;
    particles.push({
      x: cx, y: cy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 2,
      radius: 2 + Math.random() * 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 1,
      decay: 0.015 + Math.random() * 0.01,
      gravity: 0.12
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    for (const p of particles) {
      if (p.life <= 0) continue;
      alive = true;
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.life -= p.decay;
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    }
    if (alive) {
      requestAnimationFrame(draw);
    } else {
      canvas.remove();
    }
  }
  requestAnimationFrame(draw);
}


// ============================================
// 7. CONTACT FORM HANDLER
// ============================================
function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  // Floating label — toggle .filled class
  const formInputs = form.querySelectorAll('.form-input');
  formInputs.forEach(input => {
    // Check initial state (e.g. autofill)
    if (input.value.trim()) input.closest('.form-group').classList.add('filled');
    input.addEventListener('input', () => {
      input.closest('.form-group').classList.toggle('filled', input.value.trim().length > 0);
    });
    input.addEventListener('blur', () => {
      input.closest('.form-group').classList.toggle('filled', input.value.trim().length > 0);
    });
  });

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
          <svg class="checkmark-draw" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Message Sent!
        `;
        btn.style.background = '#16a34a';
        btn.style.color = 'white';
        btn.style.boxShadow = '0 0 30px rgba(22, 163, 74, 0.3)';
        // Scale pulse
        btn.style.transform = 'scale(1.05)';
        setTimeout(() => { btn.style.transform = ''; }, 400);
        // Confetti burst
        celebrationBurst(btn);
        form.reset();
        // Clear floating label states
        formInputs.forEach(input => input.closest('.form-group').classList.remove('filled'));
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
        btn.style.boxShadow = '';
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
    const items = mobileNav.querySelectorAll('a');
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
    const items = mobileNav.querySelectorAll('a');
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
      const rotateX = centerY * -18; // max 9 degrees
      const rotateY = centerX * 18;  // max 9 degrees

      card.classList.add('tilt-active');
      card.classList.remove('tilt-reset');
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(12px)`;

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


// ============================================
// 16. NEURAL NETWORK PARTICLE CANVAS
// ============================================
function initParticleCanvas() {
  const canvas = document.getElementById('hero-particles');
  if (!canvas) return;

  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isTouch || prefersReduced) {
    canvas.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d');
  const hero = canvas.closest('.hero');
  let width, height, heroHeight;
  let particles = [];
  let mouseX = -9999, mouseY = -9999;
  let heroOffsetX = 0, heroOffsetY = 0;
  let animId;
  let isTabVisible = true;
  let canvasOpacity = 0; // Starts hidden, fades in on hero reveal

  // 3-layer particle system for depth
  const LAYERS = [
    { count: 35, speedMult: 0.15, radiusMin: 0.4, radiusMax: 1.0, fillAlpha: 0.25, hasConnections: false, mouseAffected: false },
    { count: 55, speedMult: 1.0,  radiusMin: 0.8, radiusMax: 2.0, fillAlpha: 0.5,  hasConnections: true,  mouseAffected: true  },
    { count: 20, speedMult: 2.0,  radiusMin: 1.5, radiusMax: 3.0, fillAlpha: 0.8,  hasConnections: false, mouseAffected: true  },
  ];
  const CONNECTION_DIST = 170;
  const CONNECTION_DIST_SQ = CONNECTION_DIST * CONNECTION_DIST;
  const MOUSE_RADIUS = 250;
  const MOUSE_RADIUS_SQ = MOUSE_RADIUS * MOUSE_RADIUS;
  const MOUSE_STRENGTH = 0.045;
  const ALPHA_BUCKETS = 5;
  const MOUSE_PULSE_DIST = 150;
  const MOUSE_PULSE_DIST_SQ = MOUSE_PULSE_DIST * MOUSE_PULSE_DIST;

  let layerParticles = []; // array of arrays

  function resize() {
    const rect = hero.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    heroHeight = height;
    heroOffsetX = rect.left;
    heroOffsetY = rect.top + window.scrollY;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function createParticles() {
    layerParticles = LAYERS.map(layer => {
      const arr = [];
      for (let i = 0; i < layer.count; i++) {
        arr.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3 * layer.speedMult,
          vy: (Math.random() - 0.5) * 0.3 * layer.speedMult,
          radius: Math.random() * (layer.radiusMax - layer.radiusMin) + layer.radiusMin,
          phase: Math.random() * Math.PI * 2,
          speed: (Math.random() * 0.002 + 0.001) * layer.speedMult
        });
      }
      return arr;
    });
    particles = layerParticles[1]; // keep reference for resize check
  }

  function animate() {
    if (!isTabVisible) {
      animId = requestAnimationFrame(animate);
      return;
    }

    ctx.clearRect(0, 0, width, height);

    // Fade canvas with hero scroll — use cached heroHeight
    const scrolled = window.scrollY;
    const scrollOpacity = Math.max(0, 1 - scrolled / (heroHeight * 0.8));
    const combinedOpacity = scrollOpacity * canvasOpacity;
    if (combinedOpacity <= 0) {
      animId = requestAnimationFrame(animate);
      return;
    }

    // Update and draw each layer
    for (let li = 0; li < LAYERS.length; li++) {
      const layer = LAYERS[li];
      const pts = layerParticles[li];
      const len = pts.length;

      // Update positions
      for (let i = 0; i < len; i++) {
        const p = pts[i];
        p.phase += p.speed;
        p.x += p.vx + Math.sin(p.phase) * 0.15 * layer.speedMult;
        p.y += p.vy + Math.cos(p.phase * 0.7) * 0.15 * layer.speedMult;

        // Mouse attraction (mid + foreground only)
        if (layer.mouseAffected) {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < MOUSE_RADIUS_SQ && distSq > 0) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / MOUSE_RADIUS) * MOUSE_STRENGTH;
            p.x += dx * force;
            p.y += dy * force;
          }
        }

        // Wrap edges
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;
      }

      // Draw particles for this layer
      ctx.globalAlpha = combinedOpacity * layer.fillAlpha;
      ctx.fillStyle = 'rgba(240, 120, 74, 1)';
      ctx.beginPath();
      for (let i = 0; i < len; i++) {
        const p = pts[i];
        ctx.moveTo(p.x + p.radius, p.y);
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      }
      ctx.fill();

      // Draw connections (mid-layer only)
      if (layer.hasConnections) {
        ctx.lineWidth = 0.8;
        const buckets = new Array(ALPHA_BUCKETS);
        for (let b = 0; b < ALPHA_BUCKETS; b++) buckets[b] = [];

        for (let i = 0; i < len; i++) {
          const pi = pts[i];
          for (let j = i + 1; j < len; j++) {
            const pj = pts[j];
            const dx = pi.x - pj.x;
            const dy = pi.y - pj.y;
            const distSq = dx * dx + dy * dy;
            if (distSq < CONNECTION_DIST_SQ) {
              const dist = Math.sqrt(distSq);
              let alpha = (1 - dist / CONNECTION_DIST) * 0.3;

              // Mouse proximity pulse — boost connections near cursor
              const midX = (pi.x + pj.x) * 0.5;
              const midY = (pi.y + pj.y) * 0.5;
              const mdx = mouseX - midX;
              const mdy = mouseY - midY;
              const mDistSq = mdx * mdx + mdy * mdy;
              if (mDistSq < MOUSE_PULSE_DIST_SQ) {
                alpha *= 1.5;
              }

              const bucket = Math.min(Math.floor(alpha * ALPHA_BUCKETS / 0.45), ALPHA_BUCKETS - 1);
              buckets[bucket].push(pi.x, pi.y, pj.x, pj.y);
            }
          }
        }

        for (let b = 0; b < ALPHA_BUCKETS; b++) {
          const lines = buckets[b];
          if (lines.length === 0) continue;
          const a = ((b + 0.5) / ALPHA_BUCKETS) * 0.45;
          ctx.globalAlpha = combinedOpacity;
          ctx.strokeStyle = `rgba(240, 120, 74, ${a.toFixed(3)})`;
          ctx.beginPath();
          for (let k = 0; k < lines.length; k += 4) {
            ctx.moveTo(lines[k], lines[k + 1]);
            ctx.lineTo(lines[k + 2], lines[k + 3]);
          }
          ctx.stroke();
        }
      }
    }

    ctx.globalAlpha = 1;
    animId = requestAnimationFrame(animate);
  }

  // Mouse tracking — avoid getBoundingClientRect on every move
  document.addEventListener('mousemove', (e) => {
    mouseX = e.pageX - heroOffsetX;
    mouseY = e.pageY - heroOffsetY;
  });

  document.addEventListener('mouseleave', () => {
    mouseX = -9999;
    mouseY = -9999;
  });

  // Pause when tab hidden
  document.addEventListener('visibilitychange', () => {
    isTabVisible = !document.hidden;
  });

  // Responsive resize — recache hero dimensions
  const ro = new ResizeObserver(() => {
    resize();
    if (layerParticles.length === 0) createParticles();
  });
  ro.observe(hero);

  // Also recache hero position on scroll (for mouse tracking)
  let scrollTick = false;
  window.addEventListener('scroll', () => {
    if (!scrollTick) {
      scrollTick = true;
      requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        heroOffsetX = rect.left;
        heroOffsetY = rect.top + window.scrollY;
        scrollTick = false;
      });
    }
  }, { passive: true });

  resize();
  createParticles();
  animId = requestAnimationFrame(animate);

  // Expose canvas reveal for hero entrance choreography
  window.revealParticleCanvas = function() {
    const fadeStart = performance.now();
    const fadeDuration = 1200;
    function fadeIn(now) {
      const progress = Math.min((now - fadeStart) / fadeDuration, 1);
      canvasOpacity = progress * progress; // ease-in quadratic
      if (progress < 1) requestAnimationFrame(fadeIn);
    }
    requestAnimationFrame(fadeIn);
  };
}

// ============================================
// 17. Stat Counter Animation
// ============================================
function initStatCounters() {
  const stats = document.querySelectorAll('.highlight-card-stat[data-target]');
  if (!stats.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function animateCounter(el, target, suffix) {
    if (prefersReducedMotion) {
      el.textContent = target + suffix;
      return;
    }
    const duration = 1500;
    const start = performance.now();
    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || '';
        animateCounter(el, target, suffix);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  stats.forEach(stat => observer.observe(stat));
}

// ============================================
// 18. Marquee Scroll Velocity Boost
// ============================================
function initMarqueeBoost() {
  const marquees = document.querySelectorAll('.marquee');
  if (!marquees.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let lastScroll = window.scrollY;

  function tick() {
    const current = window.scrollY;
    const velocity = Math.min(Math.abs(current - lastScroll), 60);
    lastScroll = current;
    const boost = 1 + velocity * 0.08;
    marquees.forEach(m => m.style.setProperty('--marquee-speed', boost));
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// ============================================
// 19. Section Arrival Glow
// ============================================
function initSectionGlow() {
  const sections = document.querySelectorAll('.section:not(.hero)');
  if (!sections.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('glow-entered');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  sections.forEach(s => observer.observe(s));
}
