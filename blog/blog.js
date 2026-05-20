// ============================================
// Blog — Listing + Article Enhancements
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Blog Listing Page ---
  const blogGrid = document.getElementById('blog-grid');
  if (blogGrid) {
    loadBlogPosts();
  }

  // --- Article Page ---
  const prose = document.querySelector('.prose') || document.getElementById('article-content');
  if (prose) {
    computeReadingTime(prose);
    initReadingProgress();
    loadArticleNav();
  }

});


// ============================================
// BLOG LISTING — Load posts from JSON
// (loadBlogPosts orchestrates hero stats, featured slot,
//  topic groupings, and the full archive grid. All other
//  helpers below stay as-is and are reused.)
// ============================================
async function loadBlogPosts() {
  const grid = document.getElementById('blog-grid');
  const filtersContainer = document.getElementById('blog-filters');

  try {
    const response = await fetch('posts.json?v=' + Date.now());
    if (!response.ok) throw new Error(response.statusText);
    const posts = await response.json();

    if (posts.length === 0) {
      grid.innerHTML = '<p class="blog-empty">No posts yet. Check back soon!</p>';
      return;
    }

    // 1. Hero stats (newest post date drives "last updated")
    renderHeroStats(posts);

    // 2. Featured: newest post as a magazine-cover card
    const featuredHost = document.getElementById('blog-featured');
    if (featuredHost) {
      const featured = posts[0];
      const totalCount = posts.length;
      featuredHost.appendChild(createFeaturedCard(featured, totalCount));
    }

    // 3. Topic groupings (skip the featured post inside topics)
    const topicsHost = document.getElementById('blog-topics');
    if (topicsHost) {
      renderTopicGroups(topicsHost, posts);
    }

    // 4. Filters from all tags
    if (filtersContainer) {
      const allTags = [...new Set(posts.flatMap(p => p.tags))];
      renderFilters(filtersContainer, allTags);
    }

    // 5. Full archive grid (numbered, newest first)
    posts.forEach((post, idx) => {
      const card = createPostCard(post);
      const num = String(posts.length - idx).padStart(3, '0');
      addNumberToCard(card, num);
      grid.appendChild(card);
    });

    // 6. Animations & cursor binding
    initScrollRevealForBlog();
    if (typeof bindCursorHover === 'function') {
      bindCursorHover(grid);
      if (featuredHost) bindCursorHover(featuredHost);
      if (topicsHost) bindCursorHover(topicsHost);
    }

  } catch (err) {
    grid.innerHTML = '<p class="blog-empty">Unable to load posts. Please try again later.</p>';
    console.error('Failed to load blog posts:', err);
  }
}


// ============================================
// HERO STATS — counts, topics, last-updated
// ============================================
function renderHeroStats(posts) {
  const elPosts = document.getElementById('blog-stat-posts');
  const elThemes = document.getElementById('blog-stat-themes');
  const elUpdated = document.getElementById('blog-stat-updated');
  if (!elPosts && !elThemes && !elUpdated) return;

  if (elPosts) elPosts.textContent = posts.length;

  // Use the actual topic-group count (themes the archive is organised into),
  // not the unique-tag count which is confusing.
  if (elThemes) {
    const themeKeys = new Set(posts.map(p => (BLOG_POST_TOPIC[p.slug] || 'other')));
    elThemes.textContent = themeKeys.size;
  }

  if (elUpdated) {
    const newest = posts[0] && posts[0].date;
    if (newest) {
      try {
        const d = new Date(newest + 'T00:00:00');
        elUpdated.textContent = d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
      } catch (e) {
        elUpdated.textContent = newest;
      }
    }
  }
}


// ============================================
// FEATURED CARD — newest essay, magazine cover
// ============================================
function createFeaturedCard(post, totalCount) {
  const a = document.createElement('a');
  a.className = 'blog-featured-card';
  a.setAttribute('data-animate', 'fade-up');
  a.href = 'posts/' + encodeURIComponent(post.slug) + '.html';

  const num = totalCount ? 'No. ' + String(totalCount).padStart(3, '0') : 'Latest';
  const readingTime = parseInt(post.readingTime, 10) || 1;
  const tags = (post.tags || []).slice(0, 5)
    .map(t => '<span class="blog-featured-tag">' + escapeHTML(t) + '</span>')
    .join('');

  a.innerHTML =
    '<div class="blog-featured-num">' + escapeHTML(num) + ' &nbsp;&middot;&nbsp; Latest essay</div>' +
    '<h3 class="blog-featured-title">' + escapeHTML(post.title) + '</h3>' +
    '<p class="blog-featured-excerpt">' + escapeHTML(post.excerpt) + '</p>' +
    '<div class="blog-featured-meta">' +
      '<time datetime="' + escapeHTML(post.date) + '">' + formatDate(post.date) + '</time>' +
      '<span class="blog-featured-meta-sep">&middot;</span>' +
      '<span>' + readingTime + ' min read</span>' +
    '</div>' +
    (tags ? '<div class="blog-featured-tags">' + tags + '</div>' : '') +
    '<span class="blog-featured-cta">Read essay' +
      '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>' +
    '</span>';

  return a;
}


// ============================================
// TOPIC GROUPS — group archive by primary theme
// ============================================
// Explicit slug -> topic mapping so each essay lands in the
// right bucket regardless of how its tags happen to be ordered.
// Order of BLOG_TOPIC_ORDER controls the on-page rendering order.
const BLOG_TOPIC_ORDER = ['infrastructure', 'agents', 'platforms', 'cognition', 'research'];

const BLOG_TOPIC_LABELS = {
  infrastructure: 'AI infrastructure & hardware',
  agents:         'AI agents, software & accountability',
  platforms:      'Platforms, attention & memory',
  cognition:      'Labour, cognition & culture',
  research:       'Research & first principles',
  other:          'Other essays'
};

const BLOG_POST_TOPIC = {
  'gaa-credibility-test':           'infrastructure',
  'ai-native-network':              'infrastructure',
  'networked-ai-bet':               'infrastructure',
  'foundry-toll-road':              'infrastructure',
  'clinic-on-wrist-reality-check':  'infrastructure',
  'other-leading-edge':             'infrastructure',
  'inference-efficiency-war':       'infrastructure',
  'when-ai-runs-out-of-copper':     'infrastructure',
  'custom-silicon-flywheel':        'infrastructure',
  'nvidia-earnings-quality-test':   'infrastructure',
  'ai-memory-tax':                  'infrastructure',
  'boring-back-end-boom':           'infrastructure',
  'density-illusion':               'infrastructure',
  'modem-to-antenna-war':           'infrastructure',
  'nvidia-ai-factory-arm':          'infrastructure',
  'mediatek-fragmented-compute-war':'infrastructure',
  'dry-resist-war':                 'infrastructure',
  'ai-memory-wall':                 'infrastructure',
  'liability-laundering':           'agents',
  'prompt-is-not-infrastructure':   'agents',
  'the-cheap-code-era':             'agents',
  'interface-coup':                 'platforms',
  'free-intelligence-trap':         'platforms',
  'memory-moat':                    'platforms',
  'model-monoculture':              'cognition',
  'the-boiling-frog-economy':       'cognition',
  'yann-lecun-billion-dollar-bet':  'research',
  'the-title-was-wrong':            'research',
  'no-alexander-without-aristotle': 'research'
};

function classifyPost(post) {
  const key = BLOG_POST_TOPIC[post.slug] || 'other';
  return { key, label: BLOG_TOPIC_LABELS[key] };
}

function renderTopicGroups(host, posts) {
  const buckets = new Map();
  BLOG_TOPIC_ORDER.forEach(k => buckets.set(k, { key: k, label: BLOG_TOPIC_LABELS[k], items: [] }));

  posts.forEach(p => {
    const t = classifyPost(p);
    if (!buckets.has(t.key)) buckets.set(t.key, { key: t.key, label: t.label, items: [] });
    buckets.get(t.key).items.push(p);
  });

  const wrap = document.createElement('div');
  wrap.className = 'blog-topics';

  let renderedIdx = 0;
  buckets.forEach(({ key, label, items }) => {
    if (items.length === 0) return;
    const section = document.createElement('section');
    section.className = 'blog-topic';
    section.setAttribute('data-animate', 'fade-up');

    const idx = String(++renderedIdx).padStart(2, '0');
    const cards = items.map(p => miniCardHTML(p)).join('');

    section.innerHTML =
      '<div class="blog-topic-head">' +
        '<span class="blog-topic-label">' + idx + ' &nbsp;&middot;&nbsp; Topic</span>' +
        '<h3 class="blog-topic-name">' + escapeHTML(label) + '</h3>' +
        '<span class="blog-topic-count">' + items.length + ' essay' + (items.length === 1 ? '' : 's') + '</span>' +
      '</div>' +
      '<div class="blog-topic-grid">' + cards + '</div>';

    wrap.appendChild(section);
  });

  host.appendChild(wrap);
}

function miniCardHTML(post) {
  const readingTime = parseInt(post.readingTime, 10) || 1;
  return (
    '<a class="blog-mini" href="posts/' + encodeURIComponent(post.slug) + '.html">' +
      '<div class="blog-mini-meta">' + formatDate(post.date) + ' &nbsp;&middot;&nbsp; ' + readingTime + ' min</div>' +
      '<h4 class="blog-mini-title">' + escapeHTML(post.title) + '</h4>' +
    '</a>'
  );
}


// ============================================
// CARD NUMBER — wrap the existing card body, prepend an "essay no." badge,
// so the archive layout cleanly becomes a 2-column grid (number | body)
// ============================================
function addNumberToCard(card, num) {
  const link = card.querySelector('.blog-card-link');
  if (!link) return;

  // Wrap existing children into a single body container so the
  // grid-template-columns: 56px 1fr layout has exactly two grid items.
  const body = document.createElement('div');
  body.className = 'blog-card-body';
  while (link.firstChild) body.appendChild(link.firstChild);

  const numEl = document.createElement('div');
  numEl.className = 'blog-card-num';
  numEl.textContent = 'No. ' + num;

  link.appendChild(numEl);
  link.appendChild(body);
}


function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function createPostCard(post) {
  const article = document.createElement('article');
  article.className = 'blog-card';
  article.setAttribute('data-animate', 'fade-up');
  article.setAttribute('data-tags', post.tags.join(','));

  const title = escapeHTML(post.title);
  const excerpt = escapeHTML(post.excerpt);
  const slug = encodeURIComponent(post.slug);
  const date = escapeHTML(post.date);
  const readingTime = parseInt(post.readingTime, 10) || 1;
  const tags = post.tags.map(t => `<span class="tag">${escapeHTML(t)}</span>`).join('');

  article.innerHTML = `
    <a href="posts/${slug}.html" class="blog-card-link">
      <div class="blog-card-meta">
        <time datetime="${date}">${formatDate(post.date)}</time>
        <span class="blog-card-dot">&middot;</span>
        <span>${readingTime} min read</span>
      </div>
      <h2 class="blog-card-title">${title}</h2>
      <p class="blog-card-excerpt">${excerpt}</p>
      <div class="blog-card-tags">
        ${tags}
      </div>
    </a>
  `;

  return article;
}


function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}


// ============================================
// TAG FILTERING
// ============================================
function renderFilters(container, tags) {
  // "All" button
  const allBtn = document.createElement('button');
  allBtn.className = 'blog-filter-tag active';
  allBtn.textContent = 'All';
  allBtn.addEventListener('click', () => filterByTag('all', container));
  container.appendChild(allBtn);

  tags.forEach(tag => {
    const btn = document.createElement('button');
    btn.className = 'blog-filter-tag';
    btn.textContent = tag;
    btn.addEventListener('click', () => filterByTag(tag, container));
    container.appendChild(btn);
  });
}


function filterByTag(tag, filtersContainer) {
  // Update active state
  filtersContainer.querySelectorAll('.blog-filter-tag').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase() === tag.toLowerCase() || (tag === 'all' && btn.textContent === 'All'));
  });

  // Filter cards
  const cards = document.querySelectorAll('.blog-card');
  cards.forEach(card => {
    const cardTags = card.dataset.tags ? card.dataset.tags.split(',') : [];
    if (tag === 'all' || cardTags.includes(tag)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}


// ============================================
// SCROLL REVEAL — For dynamically loaded cards
// ============================================
function initScrollRevealForBlog() {
  // Observe any animatable element on the blog page that hasn't already
  // been revealed by the site-wide scroll-reveal. This covers the
  // dynamically inserted .blog-featured-card, .blog-topic sections,
  // and .blog-card archive entries, in addition to the original
  // .blog-card[data-animate] target.
  const selector = '.blog-page [data-animate]:not(.visible), .blog-card[data-animate]:not(.visible)';
  const elements = document.querySelectorAll(selector);

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

  elements.forEach(el => observer.observe(el));

  // Immediately reveal anything that's already in (or above) the viewport
  // when this runs. IntersectionObserver fires asynchronously and can
  // briefly leave above-the-fold content invisible during JS-driven
  // navigation; this guarantees first paint after JSON load looks correct.
  requestAnimationFrame(() => {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('visible');
      }
    });
  });
}


// ============================================
// READING TIME — Compute from article content
// ============================================
function computeReadingTime(proseElement) {
  const text = proseElement.textContent || '';
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 238));
  const el = document.querySelector('.article-reading-time');
  if (el) {
    el.textContent = `${minutes} min read`;
  }
}


// ============================================
// READING PROGRESS BAR
// ============================================
function initReadingProgress() {
  const bar = document.createElement('div');
  bar.className = 'reading-progress';
  document.body.appendChild(bar);

  const article = document.querySelector('.article');
  if (!article) return;

  let rpTicking = false;

  window.addEventListener('scroll', () => {
    if (!rpTicking) {
      rpTicking = true;
      requestAnimationFrame(() => {
        const rect = article.getBoundingClientRect();
        const totalHeight = rect.height - window.innerHeight;

        if (totalHeight <= 0) {
          bar.style.transform = 'scaleX(1)';
        } else {
          const progress = Math.min(1, Math.max(0, -rect.top / totalHeight));
          bar.style.transform = `scaleX(${progress})`;
        }
        rpTicking = false;
      });
    }
  }, { passive: true });
}


// ============================================
// ARTICLE NAVIGATION — Prev/Next from JSON
// ============================================
async function loadArticleNav() {
  const navContainer = document.querySelector('.article-nav');
  if (!navContainer) return;

  try {
    const response = await fetch('../posts.json?v=' + Date.now());
    if (!response.ok) throw new Error(response.statusText);
    const posts = await response.json();

    // Find current post by slug from URL
    const path = window.location.pathname;
    const slug = path.split('/').pop().replace('.html', '');
    const currentIndex = posts.findIndex(p => p.slug === slug);

    if (currentIndex === -1) return;

    const prevPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
    const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : null;

    navContainer.innerHTML = '';

    if (prevPost) {
      navContainer.innerHTML += `
        <a href="${encodeURIComponent(prevPost.slug)}.html" class="article-nav-link article-nav-prev">
          <span class="article-nav-label">Previous</span>
          <span class="article-nav-title">${escapeHTML(prevPost.title)}</span>
        </a>
      `;
    } else {
      navContainer.innerHTML += '<div></div>';
    }

    if (nextPost) {
      navContainer.innerHTML += `
        <a href="${encodeURIComponent(nextPost.slug)}.html" class="article-nav-link article-nav-next">
          <span class="article-nav-label">Next</span>
          <span class="article-nav-title">${escapeHTML(nextPost.title)}</span>
        </a>
      `;
    } else {
      navContainer.innerHTML += '<div></div>';
    }

  } catch (err) {
    // Silently fail — nav will just be empty
  }
}
