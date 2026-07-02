/* ════════════════════════════════════════════════════════════
   PRAISE EMETIE PORTFOLIO — SCRIPT.JS
   Vanilla JS only. No frameworks, no build step.
════════════════════════════════════════════════════════════ */

'use strict';

/* ─── DATA ───────────────────────────────────────────────── */

const PROJECTS = [
  {
    id: 'luvana',
    title: 'Luvana',
    industry: 'Skincare / Beauty',
    type: 'Personal Project',
    category: 'Brand Identity',
    summary: 'A personal brand identity project — crafting a full visual language for a natural skincare brand from positioning and naming through to packaging and social media direction.',
    color: '#9333EA',
    accent: '#F9A8D4',
    tags: ['Brand Identity', 'Packaging', 'Social Media', 'Personal Project'],
    year: '2024',
    heroBg: '#1a0d2e',
    challenge: 'The beauty market is saturated with either clinical minimalism or maximalist luxury. Luvana needed to occupy a distinct third space: confident, natural, and accessible — premium without being pretentious, warm without being cheap.',
    process: "I defined the brand around one truth: 'Confidence in your natural glow.' From there I built a palette of deep plum, orchid, petal blush, and dusty slate — colours that feel skincare-specific without mimicking competitors. Typography paired a refined serif for headlines with a clean humanist sans for body copy. Every asset was designed to scale from a 1080×1080 Instagram post to physical packaging.",
    outcome: 'A complete identity system: logo suite across all lockups, full colour and typography guide, packaging mockups, brand voice and messaging framework, and a 60-day social media content kit with 40+ ready-to-use templates.',
    metrics: ['Full identity in 3 weeks', 'Packaging print-ready', '20+ social templates', 'Portfolio centrepiece'],
    socialDesigns: [
      { label: 'Product Launch Post', bg: 'linear-gradient(135deg,#1a0d2e 0%,#9333EA30 100%)', accent: '#9333EA', icon: '✦', format: 'Feed Post' },
      { label: 'Skincare Tip Card',   bg: 'linear-gradient(135deg,#2d1060 0%,#F9A8D418 100%)', accent: '#F9A8D4', icon: '✦', format: 'Carousel' },
      { label: 'Brand Story Cover',   bg: 'linear-gradient(135deg,#1a0d2e 0%,#C084FC28 100%)', accent: '#C084FC', icon: '✦', format: 'Reel Cover' },
      { label: 'Ingredients Feature', bg: 'linear-gradient(135deg,#0f0820 0%,#9333EA20 100%)', accent: '#A855F7', icon: '✦', format: 'Story' },
    ],
  },
  {
    id: 'the-cloud-guys',
    title: 'The Cloud Guys',
    industry: 'Tech Community / Online',
    type: 'Client Project',
    category: 'Brand Identity',
    summary: 'Brand identity for a real, active online tech community — building a visual language that communicates expertise, approachability, and community spirit for cloud computing enthusiasts.',
    color: '#0EA5E9',
    accent: '#38BDF8',
    tags: ['Brand Identity', 'Community Brand', 'Social Media', 'Digital'],
    year: '2024',
    heroBg: '#020b18',
    challenge: "Tech communities often default to sterile, corporate-looking branding that alienates the very people they're trying to attract. The Cloud Guys needed to feel credible and knowledgeable, but also warm, human, and genuinely fun to be part of.",
    process: "I began with a deep audit of how the community actually spoke — their tone in posts, how members described the group, what kept people coming back. The insight: cloud tech is often taught with intimidation; The Cloud Guys do the opposite. The visual identity had to embody that contrast. I chose sky-to-midnight blue gradients, a bold geometric wordmark, and a supporting icon language built around cloud forms, network nodes, and elevation metaphors.",
    outcome: 'A full community brand system: primary logo with variants, a social media identity system, profile and banner templates across platforms, content card templates, community swag concepts, and a tone-of-voice guide that helps moderators and content creators stay on-brand.',
    metrics: ['Community of 500+ members', 'Cross-platform brand consistency', 'Recognition within 2 weeks of launch', 'Active daily content system'],
    socialDesigns: [
      { label: 'Community Announcement', bg: 'linear-gradient(135deg,#020b18 0%,#0EA5E925 100%)', accent: '#0EA5E9', icon: '☁', format: 'Feed Post' },
      { label: 'Cloud Tip of the Day',  bg: 'linear-gradient(135deg,#041525 0%,#38BDF822 100%)', accent: '#38BDF8', icon: '☁', format: 'Carousel' },
      { label: 'Member Spotlight',      bg: 'linear-gradient(135deg,#020b18 0%,#7DD3FC20 100%)', accent: '#7DD3FC', icon: '☁', format: 'Story' },
      { label: 'Event Promo Card',      bg: 'linear-gradient(135deg,#031020 0%,#0EA5E930 100%)', accent: '#0EA5E9', icon: '☁', format: 'Reel Cover' },
    ],
  },
];

const TICKER_ITEMS = [
  'Brand Identity', 'Visual Strategy', 'Creative Direction', 'Design Systems',
  'Figma', 'AI Workflows', 'Packaging', 'Typography', 'Logo Design', 'Brand Voice',
];

/* ─── UTILITIES ──────────────────────────────────────────── */

/** Shorthand querySelector */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/** Hex → rgba helper for opacity strings like "#9333EA30" */
function hexAlpha(hex, alpha) {
  // Strip leading #
  const h = hex.replace('#', '');
  const r = parseInt(h.substring(0,2), 16);
  const g = parseInt(h.substring(2,4), 16);
  const b = parseInt(h.substring(4,6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

/** Create a DOM element with optional attrs & children */
function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') node.className = v;
    else if (k === 'style' && typeof v === 'object') Object.assign(node.style, v);
    else if (k.startsWith('on')) node.addEventListener(k.slice(2).toLowerCase(), v);
    else node.setAttribute(k, v);
  }
  for (const child of children) {
    if (child == null) continue;
    if (typeof child === 'string') node.appendChild(document.createTextNode(child));
    else node.appendChild(child);
  }
  return node;
}

/* ─── SCROLL-TRIGGERED FADE-IN ───────────────────────────── */

function initFadeIn() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  // Observe all .fade-in elements that exist now
  $$('.fade-in').forEach(el => observer.observe(el));

  // Return observer so dynamically-added elements can also be observed
  return observer;
}

let fadeObserver;

function observeFadeIns() {
  $$('.fade-in:not(.visible)').forEach(node => {
    if (fadeObserver) fadeObserver.observe(node);
  });
}

/* ─── NAVIGATION ─────────────────────────────────────────── */

function initNav() {
  const navbar = $('#navbar');
  const mobileMenuBtn = $('#mobile-menu-btn');
  const mobileMenu = $('#mobile-menu');

  // Scroll → frosted glass
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Hamburger toggle
  let menuOpen = false;
  mobileMenuBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('open', menuOpen);
    mobileMenuBtn.setAttribute('aria-expanded', String(menuOpen));
    mobileMenuBtn.querySelector('.hamburger-icon').textContent = menuOpen ? '✕' : '☰';
    mobileMenu.setAttribute('aria-hidden', String(!menuOpen));
  });

  // Close mobile menu on any link click
  $$('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menuOpen = false;
      mobileMenu.classList.remove('open');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileMenuBtn.querySelector('.hamburger-icon').textContent = '☰';
      mobileMenu.setAttribute('aria-hidden', 'true');
    });
  });

  // Logo → home
  $('#nav-logo-btn').addEventListener('click', (e) => {
    e.preventDefault();
    showHome();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  $('#footer-logo-btn').addEventListener('click', (e) => {
    e.preventDefault();
    showHome();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ─── PAGE ROUTING ───────────────────────────────────────── */

function showHome() {
  $('#home-page').hidden = false;
  $('#case-study-page').hidden = true;
  document.title = 'Praise Emetie — Brand Identity Designer & Creative Strategist';
  // Re-observe fade-ins that may have been freshly shown
  requestAnimationFrame(observeFadeIns);
}

function showCaseStudy(project) {
  $('#home-page').hidden = true;
  $('#case-study-page').hidden = false;
  populateCaseStudy(project);
  window.scrollTo({ top: 0, behavior: 'instant' });
  document.title = `${project.title} — Praise Emetie`;
  // Observe new fade-in elements
  requestAnimationFrame(observeFadeIns);
}

/* ─── TICKER ─────────────────────────────────────────────── */

function initTicker() {
  const track = $('#ticker-track');
  // Double the items for seamless loop
  const allItems = [...TICKER_ITEMS, ...TICKER_ITEMS];

  allItems.forEach((text, i) => {
    const item = el('span', { class: 'ticker-item' },
      el('span', { class: `ticker-dot${i % 5 === 0 ? ' accent' : ''}` }),
      text
    );
    track.appendChild(item);
  });
}

/* ─── HERO WORD ROTATOR ──────────────────────────────────── */

function initHeroWord() {
  const words = ['Brands', 'Systems', 'Stories', 'Strategy'];
  const wordEl = $('#hero-word');
  let idx = 0;

  setInterval(() => {
    wordEl.classList.add('fading');
    setTimeout(() => {
      idx = (idx + 1) % words.length;
      wordEl.textContent = words[idx];
      wordEl.classList.remove('fading');
    }, 280);
  }, 2800);
}

/* ─── PROJECTS GRID ──────────────────────────────────────── */

function buildProjectCard(project) {
  const card = el('article', {
    class: 'project-card fade-in',
    role: 'button',
    tabindex: '0',
    'aria-label': `View case study: ${project.title}`,
  });

  // Cover
  const cover = el('div', {
    class: 'project-card-cover',
    style: { background: `linear-gradient(140deg, ${project.heroBg} 0%, ${project.color}20 100%)` },
  });

  const logo = el('div', {
    class: 'project-card-logo',
    style: {
      background: project.color,
      boxShadow: `0 12px 40px ${project.color}40`,
    },
  }, project.title[0]);

  const typeBadge = el('div', {
    class: 'project-card-type-badge',
    style: {
      color: project.color,
      background: hexAlpha(project.color, 0.1),
      border: `1px solid ${hexAlpha(project.color, 0.25)}`,
    },
  }, project.type.toUpperCase());

  const year = el('div', { class: 'project-card-year' }, project.year);

  cover.append(logo, typeBadge, year);

  // Body
  const body = el('div', { class: 'project-card-body' });

  const industry = el('div', {
    class: 'project-card-industry',
    style: { color: project.color },
  }, project.industry);

  const title = el('h2', { class: 'project-card-title' }, project.title);

  const summary = el('p', { class: 'project-card-summary' }, project.summary);

  const tagsWrap = el('div', { class: 'project-card-tags' });
  project.tags.forEach(t => {
    tagsWrap.appendChild(el('span', { class: 'tag' }, t));
  });

  // Footer row
  const footer = el('div', { class: 'project-card-footer' });

  const cta = el('span', {
    class: 'project-card-cta',
    style: { color: project.color },
  }, 'View Case Study ', el('span', {}, '→'));

  const dots = el('div', { class: 'project-card-dots' });
  project.socialDesigns.slice(0, 3).forEach((_, i) => {
    const opacities = ['30', '20', '14'];
    dots.appendChild(el('div', {
      class: 'project-card-dot',
      style: {
        background: project.color + opacities[i],
        border: `1px solid ${project.color}25`,
      },
    }));
  });

  footer.append(cta, dots);
  body.append(industry, title, summary, tagsWrap, footer);
  card.append(cover, body);

  // Hover border / shadow
  card.addEventListener('mouseenter', () => {
    card.style.borderColor = hexAlpha(project.color, 0.4);
    card.style.boxShadow = `0 24px 64px ${hexAlpha(project.color, 0.1)}`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.borderColor = '';
    card.style.boxShadow = '';
  });

  // Click / keyboard → case study
  const openStudy = () => showCaseStudy(project);
  card.addEventListener('click', openStudy);
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openStudy(); } });

  return card;
}

function initProjectsGrid() {
  const grid = $('#projects-grid');
  PROJECTS.forEach(p => grid.appendChild(buildProjectCard(p)));
}

/* ─── SOCIAL SHOWCASE ────────────────────────────────────── */

function isStoryFormat(format) {
  return format === 'Story' || format === 'Reel Cover';
}

function buildSocialCard(design, project) {
  const story = isStoryFormat(design.format);

  const card = el('div', {
    class: 'social-card fade-in',
    'data-project': project.id,
  });

  // Visual area
  const visual = el('div', {
    class: `social-card-visual ${story ? 'story' : 'feed'}`,
    style: { background: design.bg },
  });

  // Grid lines
  const gridLines = el('div', {
    class: 'social-card-grid-lines',
    style: {
      backgroundImage: `linear-gradient(${design.accent}08 1px, transparent 1px), linear-gradient(90deg, ${design.accent}08 1px, transparent 1px)`,
      backgroundSize: '32px 32px',
    },
  });

  const icon = el('div', {
    class: 'social-card-icon',
    style: {
      background: hexAlpha(design.accent, 0.12),
      borderColor: hexAlpha(design.accent, 0.35),
      color: design.accent,
    },
  }, design.icon);

  const badge = el('div', {
    class: 'social-card-format-badge',
    style: {
      color: design.accent,
      background: hexAlpha(design.accent, 0.12),
      border: `1px solid ${hexAlpha(design.accent, 0.25)}`,
    },
  }, design.format.toUpperCase());

  const overlay = el('div', { class: 'social-card-hover-overlay' },
    el('span', { class: 'social-card-hover-text' }, 'Add your design')
  );

  visual.append(gridLines, icon, badge, overlay);

  // Meta
  const meta = el('div', { class: 'social-card-meta' });
  const projLabel = el('div', {
    class: 'social-card-project',
    style: { color: design.accent },
  }, project.title);
  const label = el('div', { class: 'social-card-label' }, design.label);
  meta.append(projLabel, label);

  card.append(visual, meta);
  return card;
}

function initSocialShowcase() {
  const grid = $('#social-grid');

  // Build all cards
  PROJECTS.forEach(project => {
    project.socialDesigns.forEach(design => {
      grid.appendChild(buildSocialCard(design, project));
    });
  });

  // Filter buttons
  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      $$('.social-card').forEach(card => {
        const show = filter === 'all' || card.dataset.project === filter;
        card.classList.toggle('hidden-card', !show);
      });
    });
  });
}

/* ─── CASE STUDY ─────────────────────────────────────────── */

function populateCaseStudy(project) {
  const idx = PROJECTS.findIndex(p => p.id === project.id);
  const prev = PROJECTS[idx - 1] || null;
  const next = PROJECTS[idx + 1] || null;

  // ── Hero background
  const csHero = $('#cs-hero');
  csHero.style.background = `linear-gradient(150deg, ${project.heroBg} 0%, ${hexAlpha(project.color, 0.12)} 65%, #0A0A0A 100%)`;

  // ── Badges
  const badgesEl = $('#cs-badges');
  badgesEl.innerHTML = '';
  const industryBadge = el('span', {
    class: 'cs-badge',
    style: {
      color: project.color,
      background: hexAlpha(project.color, 0.08),
      border: `1px solid ${hexAlpha(project.color, 0.2)}`,
    },
  }, project.industry);

  const typeBadge = el('span', {
    class: 'cs-badge',
    style: { color: '#4B5563', background: '#111827', border: '1px solid #27272A' },
  }, project.type);

  const yearBadge = el('span', { class: 'cs-badge-year' }, project.year);

  badgesEl.append(industryBadge, typeBadge, yearBadge);

  // ── Title & summary
  $('#cs-title').textContent    = project.title;
  $('#cs-summary').textContent  = project.summary;

  // ── Tags
  const tagsEl = $('#cs-tags');
  tagsEl.innerHTML = '';
  project.tags.forEach(t => {
    tagsEl.appendChild(el('span', { class: 'cs-tag' }, t));
  });

  // ── Metrics
  const metricsEl = $('#cs-metrics');
  metricsEl.innerHTML = '';
  project.metrics.forEach(m => {
    const item = el('div', { class: 'cs-metric' },
      el('span', { class: 'cs-metric-dot' }),
      m
    );
    metricsEl.appendChild(item);
  });

  // ── Text sections
  $('#cs-challenge').textContent = project.challenge;
  $('#cs-process').textContent   = project.process;
  $('#cs-outcome').textContent   = project.outcome;

  // ── Section number colours
  ['01','02','03'].forEach(num => {
    const numEl = $(`#cs-num-${num}`);
    if (numEl) {
      numEl.style.background = hexAlpha(project.color, 0.1);
      numEl.style.border     = `1px solid ${hexAlpha(project.color, 0.25)}`;
      numEl.style.color      = project.color;
    }
  });
  // Section 04 (social)
  const num04 = $('.cs-section-head .cs-num', $('#case-study-page').querySelectorAll('.cs-section-head')[3]);
  if (num04) {
    num04.style.background = hexAlpha(project.color, 0.1);
    num04.style.border     = `1px solid ${hexAlpha(project.color, 0.25)}`;
    num04.style.color      = project.color;
  }

  // ── Social designs in CS
  const csSocialGrid = $('#cs-social-grid');
  csSocialGrid.innerHTML = '';
  project.socialDesigns.forEach(d => {
    const card = el('div', { class: 'cs-social-card' });

    const visual = el('div', {
      class: 'cs-social-card-visual',
      style: { background: d.bg },
    });

    const gridLines = el('div', {
      class: 'cs-social-card-grid',
      style: {
        backgroundImage: `linear-gradient(${d.accent}06 1px, transparent 1px), linear-gradient(90deg, ${d.accent}06 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
      },
    });

    const icon = el('div', {
      class: 'cs-social-card-icon',
      style: {
        background: hexAlpha(d.accent, 0.12),
        borderColor: hexAlpha(d.accent, 0.35),
        color: d.accent,
      },
    }, d.icon);

    const fmt = el('div', {
      class: 'cs-social-card-format',
      style: {
        color: d.accent,
        background: hexAlpha(d.accent, 0.12),
        border: `1px solid ${hexAlpha(d.accent, 0.25)}`,
      },
    }, d.format.toUpperCase());

    visual.append(gridLines, icon, fmt);

    const meta = el('div', { class: 'cs-social-card-meta' }, d.label);
    card.append(visual, meta);
    csSocialGrid.appendChild(card);
  });

  // ── Mockup placeholder
  const mockupLogo = $('#cs-mockup-logo');
  mockupLogo.textContent  = project.title[0];
  mockupLogo.style.background = project.color;

  const mockup = $('#cs-mockup');
  mockup.style.background = `linear-gradient(135deg, ${project.heroBg} 0%, ${hexAlpha(project.color, 0.08)} 100%)`;

  // ── Prev / Next
  const prevBtn = $('#cs-prev-btn');
  const nextBtn = $('#cs-next-btn');
  const prevSpacer = $('#cs-prev-spacer');
  const nextSpacer = $('#cs-next-spacer');

  if (prev) {
    prevBtn.hidden = false;
    prevSpacer.hidden = true;
    $('#cs-prev-name').textContent = prev.title;
    prevBtn.onclick = () => showCaseStudy(prev);
  } else {
    prevBtn.hidden = true;
    prevSpacer.hidden = false;
  }

  if (next) {
    nextBtn.hidden = false;
    nextSpacer.hidden = true;
    $('#cs-next-name').textContent = next.title;
    nextBtn.onclick = () => showCaseStudy(next);
  } else {
    nextBtn.hidden = true;
    nextSpacer.hidden = false;
  }

  // Back button
  $('#cs-back-btn').onclick = () => {
    showHome();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset fade-in states for CS sections so they animate again
  $$('#case-study-page .fade-in').forEach(node => {
    node.classList.remove('visible');
  });
}

/* ─── CONTACT FORM ───────────────────────────────────────── */

function initContactForm() {
  const submitBtn = $('#contact-submit');
  if (!submitBtn) return;

  submitBtn.addEventListener('click', () => {
    const name    = $('#contact-name').value.trim();
    const email   = $('#contact-email').value.trim();
    const message = $('#contact-message').value.trim();

    // Simple validation highlight
    let valid = true;
    [
      ['#contact-name',    !name],
      ['#contact-email',   !email || !email.includes('@')],
      ['#contact-message', !message],
    ].forEach(([sel, isInvalid]) => {
      const input = $(sel);
      if (isInvalid) {
        input.style.borderColor = '#EF4444';
        valid = false;
      } else {
        input.style.borderColor = '';
      }
    });

    if (!valid) return;

    // Show success
    $('#contact-form-wrap').hidden = true;
    const success = $('#contact-success');
    success.hidden = false;
  });

  // Remove red border on input
  $$('.form-input').forEach(input => {
    input.addEventListener('input', () => { input.style.borderColor = ''; });
  });
}

/* ─── SMOOTH SCROLL FOR ANCHOR LINKS ─────────────────────── */

function initSmoothScroll() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const target = link.getAttribute('href');
    if (!target || target === '#') return;

    const targetEl = document.querySelector(target);
    if (!targetEl) return;

    e.preventDefault();

    // If we're on the case study page, go home first then scroll
    if (!$('#home-page').hidden === false) {
      showHome();
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
    } else {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

/* ─── KEYBOARD NAVIGATION ────────────────────────────────── */

function initA11y() {
  // Allow Tab to reach project cards and activate with Enter/Space
  // (already handled in buildProjectCard)

  // Close mobile menu on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const mobileMenu = $('#mobile-menu');
      if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        $('#mobile-menu-btn').setAttribute('aria-expanded', 'false');
        $('#mobile-menu-btn').querySelector('.hamburger-icon').textContent = '☰';
        mobileMenu.setAttribute('aria-hidden', 'true');
      }
    }
  });
}

/* ─── INIT ───────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Fade-in observer
  fadeObserver = initFadeIn();

  // 2. Navigation
  initNav();

  // 3. Ticker
  initTicker();

  // 4. Hero word rotator
  initHeroWord();

  // 5. Projects grid
  initProjectsGrid();

  // 6. Social showcase
  initSocialShowcase();

  // 7. Contact form
  initContactForm();

  // 8. Smooth scroll
  initSmoothScroll();

  // 9. A11y helpers
  initA11y();

  // 10. Observe newly-added .fade-in elements
  requestAnimationFrame(observeFadeIns);
});
