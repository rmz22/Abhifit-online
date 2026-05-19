/* ============================================
   FIT WITH ABHI — Global JavaScript V2
   Handles: Navigation, Scroll Reveal, Counters
   No Theme Toggle — Single Pastel Mode
   ============================================ */

// --- Navigation ---
const NavManager = {
  init() {
    this.setupMoreMenu();
    this.highlightActivePage();
    this.setupBackToTop();
  },
  
  setupMoreMenu() {
    const overlay = document.getElementById('moreMenuOverlay');
    if (!overlay) return;
    
    const openBtns = document.querySelectorAll('[data-open-more]');
    openBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.add('active');
      });
    });
    
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') overlay.classList.remove('active');
    });
  },
  
  highlightActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.nav-bottom-links a').forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
    
    document.querySelectorAll('.nav-top-links a').forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
    
    document.querySelectorAll('.more-menu-item').forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage) {
        link.style.background = 'var(--accent)';
        link.style.color = '#1A1A1A';
      }
    });
  },
  
  setupBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    
    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 500);
    });
    
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
};

// --- Scroll Reveal ---
const RevealManager = {
  init() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('.reveal').forEach(el => {
      this.observer.observe(el);
    });
  }
};

// --- Counter Animation ---
const CounterManager = {
  init() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = 'true';
          this.animate(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    counters.forEach(el => observer.observe(el));
  },
  
  animate(el) {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 1500;
    const start = performance.now();
    
    const step = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      el.textContent = prefix + current.toLocaleString() + suffix;
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    
    requestAnimationFrame(step);
  }
};

// --- Toast Notifications ---
const Toast = {
  show(message, duration = 2000) {
    let toast = document.getElementById('globalToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'globalToast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    
    toast.textContent = message;
    toast.classList.add('show');
    
    clearTimeout(this._timeout);
    this._timeout = setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  }
};

// --- SVG Icons (shared) ---
const Icons = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  droplet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
  calculator: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><line x1="8" y1="10" x2="8" y2="10"/><line x1="12" y1="10" x2="12" y2="10"/><line x1="16" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="8" y2="14"/><line x1="12" y1="14" x2="12" y2="14"/><line x1="8" y1="18" x2="8" y2="18"/><line x1="12" y1="18" x2="12" y2="18"/></svg>`,
  dumbbell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 6.5h11M6 2L6 22M18 2l0 20M2 6h4M18 6h4M2 18h4M18 18h4M6 6a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2zM14 6a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2z"/></svg>`,
  body: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><path d="M12 8v8"/><path d="M8 12h8"/><path d="M9 20l3-4 3 4"/></svg>`,
  scan: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" y1="12" x2="17" y2="12"/></svg>`,
  ruler: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.4 2.4 0 0 1 0-3.4l2.6-2.6a2.4 2.4 0 0 1 3.4 0z"/><path d="M14.5 12.5l2-2"/><path d="M11.5 9.5l2-2"/><path d="M8.5 6.5l2-2"/><path d="M17.5 15.5l2-2"/></svg>`,
  utensils: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  contact: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  equipment: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M12 7v10"/><path d="M7 3v4"/><path d="M17 3v4"/><path d="M7 17v4"/><path d="M17 17v4"/></svg>`,
  chevronDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  chevronUp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  camera: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  sparkle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
  zap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  flame: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
  shoe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18h20v2H2zM4 18v-4l2-6h4l1 3 5-1 4 2v6"/></svg>`,
  bottle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M8 6v2c-2 1-4 3-4 6v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6c0-3-2-5-4-6V6"/></svg>`
};

// --- Generate Navigation HTML ---
function generateNavigation() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // Desktop top nav
  const topNav = document.getElementById('navTop');
  if (topNav) {
    topNav.innerHTML = `
      <div class="nav-content">
        <a href="index.html" class="nav-logo">
          <span class="logo-dot"></span>
          FIT WITH ABHI
        </a>
        <div class="nav-top-links">
          <a href="index.html">Home</a>
          <a href="hydration.html">Hydration</a>
          <a href="calculator.html">Calculator</a>
          <a href="exercises.html">Exercises</a>
          <a href="body-map.html">Body Map</a>
          <a href="height.html">Height</a>
          <a href="equipments.html">Equipment</a>
          <a href="meal-plan.html">Meals</a>
          <a href="training.html">Training</a>
          <a href="contact.html">Contact</a>
        </div>
      </div>
    `;
  }
  
  // Mobile bottom nav
  const bottomNav = document.getElementById('navBottom');
  if (bottomNav) {
    bottomNav.innerHTML = `
      <div class="nav-bottom-links">
        <a href="index.html" title="Home">${Icons.home}<span>Home</span></a>
        <a href="hydration.html" title="Hydration">${Icons.droplet}<span>Water</span></a>
        <a href="exercises.html" title="Exercises">${Icons.dumbbell}<span>Workout</span></a>
        <a href="body-map.html" title="Body Map">${Icons.body}<span>Body</span></a>
        <a href="#" data-open-more title="More">${Icons.menu}<span>More</span></a>
      </div>
    `;
  }
  
  // More menu
  const moreOverlay = document.getElementById('moreMenuOverlay');
  if (moreOverlay) {
    moreOverlay.innerHTML = `
      <div class="more-menu">
        <div class="more-menu-handle"></div>
        <div class="more-menu-grid">
          <a href="calculator.html" class="more-menu-item">${Icons.calculator}<span>Calculator</span></a>
          <a href="scanner.html" class="more-menu-item">${Icons.scan}<span>Scanner</span></a>
          <a href="height.html" class="more-menu-item">${Icons.ruler}<span>Height</span></a>
          <a href="equipments.html" class="more-menu-item">${Icons.equipment}<span>Equipment</span></a>
          <a href="meal-plan.html" class="more-menu-item">${Icons.utensils}<span>Meals</span></a>
          <a href="training.html" class="more-menu-item">${Icons.calendar}<span>Training</span></a>
          <a href="contact.html" class="more-menu-item">${Icons.contact}<span>Contact</span></a>
        </div>
      </div>
    `;
  }
}

// --- Generate Footer HTML ---
function generateFooter() {
  const footer = document.getElementById('siteFooter');
  if (!footer) return;
  
  footer.innerHTML = `
    <div class="container">
      <div class="footer-logo">
        <span class="logo-dot" style="width:12px;height:12px;background:var(--accent);border-radius:50%;display:inline-block;border:2px solid #1A1A1A;"></span>
        FIT WITH ABHI
      </div>
      <div class="footer-links">
        <a href="index.html">Home</a>
        <a href="hydration.html">Hydration</a>
        <a href="calculator.html">Calculator</a>
        <a href="exercises.html">Exercises</a>
        <a href="body-map.html">Body Map</a>
        <a href="scanner.html">Scanner</a>
        <a href="height.html">Height</a>
        <a href="equipments.html">Equipment</a>
        <a href="meal-plan.html">Meals</a>
        <a href="training.html">Training</a>
        <a href="contact.html">Contact</a>
      </div>
      <p class="footer-copy">© ${new Date().getFullYear()} Abhijit Das</p>
    </div>
  `;
}

// --- Utility: Create SVG Donut Chart ---
function createDonutChart(container, data, size = 160) {
  const cx = size / 2;
  const cy = size / 2;
  const radius = (size / 2) - 15;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;
  
  let svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">`;
  
  data.forEach(item => {
    const dashLength = (item.pct / 100) * circumference;
    svg += `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="none" 
      stroke="${item.color}" stroke-width="14" 
      stroke-dasharray="${dashLength} ${circumference - dashLength}" 
      stroke-dashoffset="${-offset}" 
      stroke-linecap="round" 
      style="transform: rotate(-90deg); transform-origin: center;"/>`;
    offset += dashLength;
  });
  
  svg += '</svg>';
  container.innerHTML = svg;
}

// --- Utility: Animate progress ring ---
function animateProgressRing(element, percent, circumference) {
  const offset = circumference - (percent / 100) * circumference;
  element.style.strokeDashoffset = offset;
}

// --- Utility: Format Time ---
function formatTime(date) {
  return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

// --- Utility: Get Today's Date Key ---
function getTodayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

// --- Initialize Everything ---
document.addEventListener('DOMContentLoaded', () => {
  // Remove any data-theme attribute (single mode)
  document.documentElement.removeAttribute('data-theme');
  
  generateNavigation();
  generateFooter();
  NavManager.init();
  RevealManager.init();
  CounterManager.init();
});
