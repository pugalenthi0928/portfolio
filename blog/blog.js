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
  const prose = document.querySelector('.prose');
  if (prose) {
    computeReadingTime(prose);
    initReadingProgress();
    loadArticleNav();
  }

});


// ============================================
// BLOG LISTING — Load posts from JSON
// ============================================
async function loadBlogPosts() {
  const grid = document.getElementById('blog-grid');
  const filtersContainer = document.getElementById('blog-filters');

  try {
    const response = await fetch('posts.json');
    const posts = await response.json();

    if (posts.length === 0) {
      grid.innerHTML = '<p class="blog-empty">No posts yet. Check back soon!</p>';
      return;
    }

    // Render filter tags
    if (filtersContainer) {
      const allTags = [...new Set(posts.flatMap(p => p.tags))];
      renderFilters(filtersContainer, allTags);
    }

    // Render post cards
    posts.forEach(post => {
      const card = createPostCard(post);
      grid.appendChild(card);
    });

    // Re-init scroll reveal for dynamically added cards
    initScrollRevealForBlog();

    // Re-bind cursor hover on new elements
    if (typeof bindCursorHover === 'function') {
      bindCursorHover(grid);
    }

  } catch (err) {
    grid.innerHTML = '<p class="blog-empty">Unable to load posts. Please try again later.</p>';
    console.error('Failed to load blog posts:', err);
  }
}


function createPostCard(post) {
  const article = document.createElement('article');
  article.className = 'blog-card';
  article.setAttribute('data-animate', 'fade-up');
  article.setAttribute('data-tags', post.tags.join(','));

  article.innerHTML = `
    <a href="posts/${post.slug}.html" class="blog-card-link">
      <div class="blog-card-meta">
        <time datetime="${post.date}">${formatDate(post.date)}</time>
        <span class="blog-card-dot">&middot;</span>
        <span>${post.readingTime} min read</span>
      </div>
      <h2 class="blog-card-title">${post.title}</h2>
      <p class="blog-card-excerpt">${post.excerpt}</p>
      <div class="blog-card-tags">
        ${post.tags.map(t => `<span class="tag">${t}</span>`).join('')}
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
  const elements = document.querySelectorAll('.blog-card[data-animate]');

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

  window.addEventListener('scroll', () => {
    const article = document.querySelector('.article');
    if (!article) return;

    const rect = article.getBoundingClientRect();
    const totalHeight = rect.height - window.innerHeight;

    if (totalHeight <= 0) {
      bar.style.transform = 'scaleX(1)';
      return;
    }

    const progress = Math.min(1, Math.max(0, -rect.top / totalHeight));
    bar.style.transform = `scaleX(${progress})`;
  }, { passive: true });
}


// ============================================
// ARTICLE NAVIGATION — Prev/Next from JSON
// ============================================
async function loadArticleNav() {
  const navContainer = document.querySelector('.article-nav');
  if (!navContainer) return;

  try {
    const response = await fetch('../posts.json');
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
        <a href="${prevPost.slug}.html" class="article-nav-link article-nav-prev">
          <span class="article-nav-label">Previous</span>
          <span class="article-nav-title">${prevPost.title}</span>
        </a>
      `;
    } else {
      navContainer.innerHTML += '<div></div>';
    }

    if (nextPost) {
      navContainer.innerHTML += `
        <a href="${nextPost.slug}.html" class="article-nav-link article-nav-next">
          <span class="article-nav-label">Next</span>
          <span class="article-nav-title">${nextPost.title}</span>
        </a>
      `;
    } else {
      navContainer.innerHTML += '<div></div>';
    }

  } catch (err) {
    // Silently fail — nav will just be empty
  }
}
