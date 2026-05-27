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
    const themeKeys = new Set(posts.map(p => resolveTopic(p)));
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
// TOPIC TAXONOMY — used for BOTH "Read by theme" grouping
// AND "Full archive" filter chips. One mental model, two views.
// ============================================
// BLOG_TOPIC_ORDER controls render order in both views.
const BLOG_TOPIC_ORDER = [
  'apple', 'foundry', 'memory', 'packaging', 'compute',
  'equipment', 'optical', 'policy', 'strategy'
];

const BLOG_TOPIC_LABELS = {
  apple:     'Apple Silicon & Mobile',
  foundry:   'Foundries & Process',
  memory:    'Memory & Storage',
  packaging: 'Packaging & Interconnect',
  compute:   'GPU & AI Compute',
  equipment: 'Equipment & Materials',
  optical:   'Optical & Networking',
  policy:    'Policy, Geopolitics & Security',
  strategy:  'AI Strategy & Culture',
  other:     'Other essays'
};

// Short labels for compact filter chips
const BLOG_TOPIC_CHIP_LABELS = {
  apple:     'Apple Silicon',
  foundry:   'Foundries',
  memory:    'Memory',
  packaging: 'Packaging',
  compute:   'GPU & AI',
  equipment: 'Equipment',
  optical:   'Optical & RF',
  policy:    'Policy',
  strategy:  'Strategy'
};

// Tag membership per cluster — used to decide which posts a cluster chip filters.
// A post matches a cluster if any of its tags is in that cluster's list.
const BLOG_TOPIC_TAGS = {
  apple: [
    'Apple Silicon','Apple M2','Apple M5','Apple Intelligence','M-Series','Apple M-Series',
    'A19','A18','A17','A16','A15','A14','A13','N1 Wireless','iPhone','iPad','Mobile SoCs',
    'Fusion Architecture','Apple','Apple Avalanche','Apple Blizzard','LPDDR5','Neural Accelerator',
    'AI PC','Local AI','Unified Memory','Apple Arc','Apple Silicon Mac','Neural Engine',
    'Avalanche','Blizzard','Firestorm','Icestorm','Dynamic Caching'
  ],
  foundry: [
    'TSMC','Intel','Intel 4','Intel 18A','18A','14A','7A','Samsung Foundry','GlobalFoundries',
    'Foundry','Rapidus','Process Technology','RibbonFET','PowerVia','GAA',"Moore's Law",
    '2026 Outlook','Logic','Capex','TSMC Capex','Wafer Supply','Exynos','N3','N3E','N3P','N2','A14 Node',
    'Meteor Lake','Panther Lake','Clearwater Forest','Lunar Lake','Arrow Lake',
    'Intel Foundry','Foundry Services','IFS','Fab','Fab 18','Fab 21','TSMC Arizona',
    'Process Leadership','Node Race','EUV Throughput','Allocation','Process Cadence',
    'CapEx','3nm','5nm','2nm','Density','Density Illusion','Fab Capacity','N2P','A16','MBCFET','SF2'
  ],
  memory: [
    'HBM','HBM3','HBM3E','HBM4','HBM4E','DRAM','NAND','3D NAND','SRAM',
    'Memory','Memory Wall','Memory Bandwidth','Memory Pooling','Memory Controller',
    'CXL','KV Cache','Composable Servers','Tanzanite','Structera','Marvell',
    'SOCAMM2','SOCAMM','Micron','SK Hynix','SK hynix','Memory Oligopoly',
    'YMTC','CXMT','3D XPoint','Optane','Memory Tax','SSD','LPDDR6',
    'Memory Hierarchy','AI Memory','Memory Comeback','Samsung Memory'
  ],
  packaging: [
    'Advanced Packaging','CoWoS','SoIC','Hybrid Bonding','Foveros','Chiplets',
    'Die-to-Die IO','TCB','ASMPT','Besi','Bonding','Back-End','Back-End Bottleneck',
    'Wafer-Scale','InFO','Multi-Die','Co-Packaging','OSAT','Packaging','3DFabric',
    'Packaging Bottleneck','Bonding Step','Advanced Packaging Bottleneck',
    'Panel-Level Packaging','SoW-X','Fan-Out Packaging','Glass Substrates',
    'InFO_SoW','Fan-Out Wafer','Interposers','RDL','EMIB','COUPE'
  ],
  compute: [
    'GPU','GPU Architecture','Nvidia','Hopper','Blackwell','Vera Rubin','Rubin',
    'AI Infrastructure','Custom Silicon','Trainium','Inferentia','AWS','Graviton',
    'CUDA','NVLink','Hyperscalers','Cobalt','Axion','Tesla AI6','Tesla',
    'AmpereOne','Ampere Computing','Ampere','SoftBank','Oracle Cloud','Cloud Native CPUs',
    'Arm Servers','Arm','Liquid Cooling','Power Delivery','Inference','Data Centers',
    'Software Moats','Edge AI','Wafer-Scale Training','Cerebras','Groq',
    'Custom Accelerator','TPU','XPU','AI Factory','OpenVINO','MLPerf',
    'Training','Networked AI','Nitro','Microsoft Cobalt','Google Axion',
    'Datacenter Chips','MTIA','RISC-V','Hyperscaler Silicon','Software-Defined Hardware'
  ],
  equipment: [
    'ASML','EUV','High-NA EUV','Veeco','Laser Annealing','Axcelis','WFE',
    'Semiconductor Equipment','Advanced Manufacturing','Photoresist','Dry Resist',
    'Lam Research','Tokyo Electron','TEL','Applied Materials','KLA','JSR','Inpria',
    'MOR','CAR','Lithography','Etch','CMP','Implant','Materials','Wet Process',
    'Atomic Layer Etch','ALE','ALD','Ion Implant','Reliability','Burn-In','Aehr',
    'EUV Materials','Resist','EUV Photons','SiC Equipment','Topaz PVD','Semicap'
  ],
  optical: [
    'Silicon Photonics','Co-Packaged Optics','Optical I/O','Ayar Labs','TeraPHY','SuperNova',
    'UALink','UCIe','Lightmatter','Fotonix','Open Edge Platform','XConn','BlueField',
    '5G','6G','Wi-Fi 7','Modem','Modems','Antenna','RFFE','RF SOI','FD-SOI','ultraBAW',
    'Qualcomm','MediaTek','Networking','vRAN','Open RAN','Optical','Photonics',
    'CPO','Network and Edge','MN&E','Intel NEX','Snapdragon','Dimensity 9500',
    'mmWave','Apple C1','Wireless','Connectivity','5G Advanced','Direct-to-Device',
    'Satellite Messaging','Starlink','SpaceX','Mobile Networks','Globalstar','Amazon Leo'
  ],
  policy: [
    'Geopolitics','CHIPS Act','EU Chips Act','Industrial Policy','Export Controls',
    'Supply Chain','Supply Chain Security','National Security','Cybersecurity',
    'Firmware','Identity Security','Confidential Computing','Sovereignty','Regionalization',
    'China','Silicon Carbide','SiC','Trade','Tariffs','Sanctions','Made in America',
    'Tariff','Decoupling','Reshoring','Onshoring','Platform Risk','Vulnerability',
    'China Semiconductors','Arm China','Semiconductor IP','IP Licensing','Semiconductor Sovereignty'
  ],
  strategy: [
    'AI Ethics','AI Safety','AI Policy','LLM','Agents','Prompts','Memory Moat',
    'Platforms','Interfaces','Free Intelligence','Liability','Cheap Code',
    'Model Monoculture','Yann LeCun','Research','Philosophy','First Principles',
    'Cognition','Labour','Culture','Aristotle','Boiling Frog','Title','Software Strategy'
  ]
};

// Explicit slug -> topic mapping (highest-scoring-cluster classification, with
// hand overrides where tag-scoring would misroute). One topic per essay.
const BLOG_POST_TOPIC = {
  'apple-m2-costly-transition-m5-ai-silicon-direction': 'apple',
  'ampere-cloud-native-softbank-ai-infrastructure':     'compute',
  'meteor-lake-intel-chiplet-future-process-leadership':'foundry',
  'marvell-tanzanite-cxl-memory-pooling-ai-infrastructure': 'memory',
  'ayar-labs-optical-io-cpo-ai-scale':                  'optical',
  'samsung-semiconductor-crisis-ai-memory-comeback':    'memory',
  'nvidia-empire-intel-network-edge-playbook':          'compute',
  'nvidia-hopper-supplier-risk-ai-hardware-platforms':  'compute',
  'apple-iphone-chip-split-ai-moores-law':              'apple',
  'globalfoundries-fotonix-silicon-photonics-ai-infrastructure': 'optical',
  'nvidia-hack-ai-infrastructure-security':             'policy',
  'semiconductor-regionalization-ai-sovereignty':       'policy',
  'veeco-ai-hardware-bottlenecks':                      'equipment',
  'intel-turnaround-18a-14a-execution-test':            'foundry',
  'bonding-step-ai-packaging-bottleneck':               'packaging',
  'tsmc-capex-ai-industrial-plan':                      'foundry',
  'semiconductor-cycle-split-in-two':                   'foundry',
  'tsmc-allocation-layer-ai-compute':                   'foundry',
  'advanced-packaging-became-the-computer':             'packaging',
  'aws-cpu-cloud-infrastructure':                       'compute',
  'euv-materials-war-ai-chips':                         'equipment',
  'intel-bet-the-farm-foundry-proof':                   'foundry',
  'qualcomm-modem-to-antenna-moat':                     'optical',
  'node-race-became-system-race':                       'foundry',
  'euv-throughput-bottleneck':                          'equipment',
  'globalfoundries-second-life':                        'optical',
  'china-silicon-carbide-overcapacity-war':             'policy',
  'a15-die-shot-apple-silicon-future':                  'apple',
  'reliability-layer-behind-ai-hardware':               'equipment',
  'memory-oligopoly-ai-toll-booth':                     'memory',
  'chinas-nand-breakout':                               'memory',
  'boring-back-end-of-ai':                              'packaging',
  'apple-silicon-after-cpu-era':                        'apple',
  'package-escaped-the-wafer':                          'packaging',
  'dead-zone-layer':                                    'optical',
  'vehicle-compute-backbone':                           'compute',
  'open-isa-talent-bet':                                'compute',
  'architecture-gatekeeper':                            'policy',
  'custom-ai-hardware-trap':                            'compute',
  'package-became-the-computer':                        'packaging',
  'back-end-bottleneck':                                'packaging',
  'wafer-scale-training-bet':                           'packaging',
  'semiconductor-substitution-ladder':                  'equipment',
  'power-efficiency-layer':                             'compute',
  'foundry-trust-test':                                 'foundry',
  'android-flagship-breakout':                          'optical',
  'bubble-that-became-infrastructure':                  'compute',
  'ai-chip-software-wall':                              'compute',
  'fab-that-outlived-3d-xpoint':                        'memory',
  'wafer-scale-latency-bet':                            'compute',
  'gaa-credibility-test':                               'foundry',
  'ai-native-network':                                  'optical',
  'networked-ai-bet':                                   'compute',
  'foundry-toll-road':                                  'foundry',
  'clinic-on-wrist-reality-check':                      'compute',
  'other-leading-edge':                                 'optical',
  'inference-efficiency-war':                           'compute',
  'when-ai-runs-out-of-copper':                         'optical',
  'custom-silicon-flywheel':                            'compute',
  'nvidia-earnings-quality-test':                       'compute',
  'ai-memory-tax':                                      'memory',
  'boring-back-end-boom':                               'packaging',
  'density-illusion':                                   'foundry',
  'modem-to-antenna-war':                               'optical',
  'nvidia-ai-factory-arm':                              'compute',
  'mediatek-fragmented-compute-war':                    'compute',
  'dry-resist-war':                                     'equipment',
  'ai-memory-wall':                                     'memory',
  'liability-laundering':                               'strategy',
  'prompt-is-not-infrastructure':                       'strategy',
  'the-cheap-code-era':                                 'strategy',
  'interface-coup':                                     'strategy',
  'free-intelligence-trap':                             'strategy',
  'memory-moat':                                        'strategy',
  'model-monoculture':                                  'strategy',
  'the-boiling-frog-economy':                           'strategy',
  'yann-lecun-billion-dollar-bet':                      'strategy',
  'the-title-was-wrong':                                'strategy',
  'no-alexander-without-aristotle':                     'strategy'
};

// Resolve a post's topic. First check the explicit slug map; if absent
// (a new post that hasn't been added to BLOG_POST_TOPIC yet), fall back
// to tag-membership: pick the cluster with the most matching tags.
function resolveTopic(post) {
  const explicit = BLOG_POST_TOPIC[post.slug];
  if (explicit) return explicit;
  const tagSet = new Set(post.tags || []);
  let best = { key: 'other', score: 0 };
  BLOG_TOPIC_ORDER.forEach(key => {
    const tags = BLOG_TOPIC_TAGS[key] || [];
    let s = 0;
    for (const t of tags) if (tagSet.has(t)) s += 1;
    if (s > best.score) best = { key, score: s };
  });
  return best.score > 0 ? best.key : 'other';
}

function classifyPost(post) {
  const key = resolveTopic(post);
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
  article.setAttribute('data-topic', resolveTopic(post));
  article.setAttribute('data-slug', post.slug);
  // Searchable text: title + excerpt + tags, lowercased
  const searchText = (post.title + ' ' + post.excerpt + ' ' + post.tags.join(' ')).toLowerCase();
  article.setAttribute('data-search', searchText);

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
// FILTER UI — curated topic chips + search + collapsed all-tags disclosure
// ============================================
// Filter state combines topic (cluster), specific tag, and a search query.
// All three apply with AND semantics. 'all' topic means no topic filter.
const blogFilterState = { topic: 'all', tag: null, query: '' };

function renderFilters(container, tags) {
  container.innerHTML = '';

  // --- Row 1: curated topic chips (All + 9 clusters) ---
  const topicRow = document.createElement('div');
  topicRow.className = 'blog-filter-row blog-filter-row--topics';

  const allBtn = makeChip('All', 'all', 'topic');
  allBtn.classList.add('active');
  topicRow.appendChild(allBtn);

  BLOG_TOPIC_ORDER.forEach(key => {
    const label = BLOG_TOPIC_CHIP_LABELS[key] || BLOG_TOPIC_LABELS[key];
    topicRow.appendChild(makeChip(label, key, 'topic'));
  });

  container.appendChild(topicRow);

  // --- Row 2: search input ---
  const searchRow = document.createElement('div');
  searchRow.className = 'blog-filter-row blog-filter-row--search';

  const searchWrap = document.createElement('div');
  searchWrap.className = 'blog-search';
  searchWrap.innerHTML =
    '<svg class="blog-search-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<circle cx="11" cy="11" r="7"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>' +
    '</svg>' +
    '<input type="search" class="blog-search-input" placeholder="Search essays by title, topic, or tag" aria-label="Search essays">';
  searchRow.appendChild(searchWrap);
  container.appendChild(searchRow);

  const input = searchWrap.querySelector('input');
  input.addEventListener('input', (e) => {
    blogFilterState.query = e.target.value.trim().toLowerCase();
    applyBlogFilters();
  });

  // --- Row 3: collapsed "Browse all tags" disclosure ---
  if (tags && tags.length) {
    const disclosure = document.createElement('details');
    disclosure.className = 'blog-filter-disclosure';

    const summary = document.createElement('summary');
    summary.className = 'blog-filter-summary';
    summary.innerHTML =
      '<span class="blog-filter-summary-label">Browse all ' + tags.length + ' tags</span>' +
      '<svg class="blog-filter-summary-chevron" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>';
    disclosure.appendChild(summary);

    const tagRow = document.createElement('div');
    tagRow.className = 'blog-filter-row blog-filter-row--tags';
    tags.slice().sort((a, b) => a.localeCompare(b)).forEach(tag => {
      tagRow.appendChild(makeChip(tag, tag, 'tag'));
    });
    disclosure.appendChild(tagRow);

    container.appendChild(disclosure);
  }
}

function makeChip(label, value, kind) {
  const btn = document.createElement('button');
  btn.className = 'blog-filter-tag';
  btn.dataset.kind = kind;        // 'topic' or 'tag'
  btn.dataset.value = value;
  btn.textContent = label;
  btn.addEventListener('click', () => {
    if (kind === 'topic') {
      blogFilterState.topic = value;
      blogFilterState.tag = null;  // selecting a topic clears any specific-tag filter
    } else {
      // selecting a specific tag clears the topic filter for clarity
      blogFilterState.tag = (blogFilterState.tag === value) ? null : value;
      blogFilterState.topic = 'all';
    }
    applyBlogFilters();
  });
  return btn;
}

function applyBlogFilters() {
  // Update active chip states
  document.querySelectorAll('.blog-filter-tag').forEach(btn => {
    const k = btn.dataset.kind;
    const v = btn.dataset.value;
    let active = false;
    if (k === 'topic') {
      active = (v === blogFilterState.topic && !blogFilterState.tag);
    } else if (k === 'tag') {
      active = (v === blogFilterState.tag);
    }
    btn.classList.toggle('active', active);
  });

  // Apply filters to cards
  const cards = document.querySelectorAll('.blog-card');
  let visible = 0;
  cards.forEach(card => {
    const cardTopic = card.dataset.topic || 'other';
    const cardTags = card.dataset.tags ? card.dataset.tags.split(',') : [];
    const search = card.dataset.search || '';

    const topicOk = (blogFilterState.topic === 'all') || (cardTopic === blogFilterState.topic);
    const tagOk = !blogFilterState.tag || cardTags.includes(blogFilterState.tag);
    const queryOk = !blogFilterState.query || search.indexOf(blogFilterState.query) !== -1;

    const show = topicOk && tagOk && queryOk;
    card.style.display = show ? '' : 'none';
    if (show) visible += 1;
  });

  // Update empty-state hint (if a placeholder exists or we create one inline)
  let empty = document.getElementById('blog-filter-empty');
  if (visible === 0) {
    if (!empty) {
      empty = document.createElement('p');
      empty.id = 'blog-filter-empty';
      empty.className = 'blog-empty';
      empty.textContent = 'No essays match. Try clearing the search or picking a different topic.';
      const grid = document.getElementById('blog-grid');
      if (grid) grid.appendChild(empty);
    }
    empty.style.display = '';
  } else if (empty) {
    empty.style.display = 'none';
  }
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
