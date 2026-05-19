/*
 * ============================================
 * ABHIFIT — Main Application
 * ============================================
 * SPA Router + Navigation + Scroll Reveal
 * ============================================
 */

(function() {
  'use strict';

  // Wait for DOM
  document.addEventListener('DOMContentLoaded', () => {
    const C = window.CONTENT;
    const appContainer = document.getElementById('app-container');

    if (!C || !appContainer) {
      console.error('ABHIFIT: Missing CONTENT or app-container');
      return;
    }

    // Route registry
    const routes = {
      home:      () => window.renderHome(C),
      diet:      () => window.renderDiet(C),
      training:  () => window.renderTraining(C),
      exercises: () => window.renderExercises(C),
      bodymap:   () => window.renderBodymap(C),
      equipments:() => window.renderEquipments(C),
      hydration: () => window.renderHydration(C),
      calculator:() => window.renderCalculator(C),
      skincare:  () => window.renderSkincare(C),
      about:     () => window.renderAbout(C),
    };

    // Navigate to a route (exposed globally for inline onclick)
    window.navigate = function(route) {
      if (!routes[route]) route = 'home';
      
      // Auto-clear cache to remove old footer text
      if (!localStorage.getItem('v2_cache_clear')) {
        localStorage.removeItem('abhifit_content');
        localStorage.removeItem('abj_content');
        localStorage.setItem('v2_cache_clear', 'true');
        location.reload();
        return;
      }

      // Render
      appContainer.innerHTML = routes[route]();

      // Update nav active states
      document.querySelectorAll('.nav-bottom-links a').forEach(a => {
        const r = a.dataset.route;
        a.classList.toggle('active', r === route);
      });

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'instant' });

      // Init scroll reveal after render
      requestAnimationFrame(() => {
        setTimeout(initReveal, 50);
      });

      // Route-specific init
      if (route === 'hydration' && window.HydrationTracker) {
        setTimeout(() => window.HydrationTracker.init(), 50);
      }
      if (route === 'calculator' && window.initCalculator) {
        setTimeout(() => window.initCalculator(), 50);
      }
      if (route === 'exercises' && window.ExerciseLib) {
        setTimeout(() => window.ExerciseLib.init(), 50);
      }
      if (route === 'bodymap' && window.BodyMap) {
        setTimeout(() => window.BodyMap.init(), 50);
      }
      if (route === 'diet' && window.MealPlans) {
        setTimeout(() => window.MealPlans.init(), 50);
      }
      if (route === 'training') {
        setTimeout(() => {
          document.getElementById('day1')?.classList.add('expanded');
        }, 50);
      }
    };

    // Scroll Reveal
    function initReveal() {
      const els = document.querySelectorAll('.reveal:not(.visible)');
      if (!els.length) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      }, { threshold: 0.05, rootMargin: '50px' });

      els.forEach(el => observer.observe(el));
    }
    window.initReveal = initReveal;

    // Build bottom nav
    function buildNav() {
      const nav = document.getElementById('navBottom');
      if (!nav) return;
      nav.innerHTML = `
        <div class="nav-bottom-links">
          <a href="#" data-route="home" class="active">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            HOME
          </a>
          <a href="#" data-route="hydration">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
            WATER
          </a>
          <a href="#" data-route="exercises">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6.5 6.5h11M6 2L6 22M18 2l0 20M2 6h4M18 6h4M2 18h4M18 18h4"/></svg>
            WORKOUT
          </a>
          <a href="#" data-route="bodymap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="5" r="3"/><path d="M12 8v8"/><path d="M8 12h8"/><path d="M9 20l3-4 3 4"/></svg>
            BODY
          </a>
          <a href="#" data-route="more" id="moreBtn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
            MORE
          </a>
        </div>
      `;

      // Bind nav clicks
      nav.querySelectorAll('a[data-route]').forEach(a => {
        a.addEventListener('click', (e) => {
          e.preventDefault();
          const route = a.dataset.route;
          if (route === 'more') {
            toggleMoreMenu();
            return;
          }
          closeMoreMenu();
          window.navigate(route);
        });
      });
    }

    // More Menu overlay
    function buildMoreMenu() {
      const overlay = document.getElementById('moreMenuOverlay');
      if (!overlay) return;
      overlay.innerHTML = `
        <div class="more-menu">
          <div class="more-menu-handle"></div>
          <div class="more-menu-grid">
            <a href="#" class="more-menu-item" data-route="equipments">
              <div class="more-menu-icon">
                <span style="font-size:1.5rem">🔧</span>
              </div>
              <span>GEAR</span>
            </a>
            <a href="#" class="more-menu-item" data-route="diet">
              <div class="more-menu-icon">
                <span style="font-size:1.5rem">🍳</span>
              </div>
              <span>MEALS</span>
            </a>
            <a href="#" class="more-menu-item" data-route="calculator">
              <div class="more-menu-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/></svg>
              </div>
              <span>CALCULATOR</span>
            </a>
            <a href="#" class="more-menu-item" data-route="skincare">
              <div class="more-menu-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <span>SKINCARE</span>
            </a>
            <a href="#" class="more-menu-item" data-route="training">
              <div class="more-menu-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <span>TRAINING</span>
            </a>
            <a href="#" class="more-menu-item" data-route="about">
              <div class="more-menu-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <span>ABOUT</span>
            </a>
            <a href="${C.instaLink}" target="_blank" class="more-menu-item">
              <div class="more-menu-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/></svg>
              </div>
              <span>INSTAGRAM</span>
            </a>
            <a href="#" class="more-menu-item" id="adminMenuBtn">
              <div class="more-menu-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
              </div>
              <span>ADMIN</span>
            </a>
          </div>
        </div>
      `;

      // Bind more menu route clicks
      overlay.querySelectorAll('.more-menu-item[data-route]').forEach(a => {
        a.addEventListener('click', (e) => {
          e.preventDefault();
          closeMoreMenu();
          window.navigate(a.dataset.route);
        });
      });

      // Admin button
      const adminBtn = document.getElementById('adminMenuBtn');
      if (adminBtn) {
        adminBtn.addEventListener('click', (e) => {
          e.preventDefault();
          closeMoreMenu();
          if (window.openAdmin) window.openAdmin();
        });
      }

      // Close on overlay background click
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeMoreMenu();
      });
    }

    function toggleMoreMenu() {
      const overlay = document.getElementById('moreMenuOverlay');
      if (overlay) overlay.classList.toggle('active');
    }

    function closeMoreMenu() {
      const overlay = document.getElementById('moreMenuOverlay');
      if (overlay) overlay.classList.remove('active');
    }
    window.closeMoreMenu = closeMoreMenu;

    // --- Helpers Exposed Globally ---
    window.formatTime = function(date) {
      return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    };
    window.getTodayKey = function() {
      const d = new Date();
      return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    };
    window.Toast = {
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

    // Set page title
    document.title = C.siteTitle + ' — ' + C.siteDescription;

    // Init everything
    buildNav();
    buildMoreMenu();
    window.navigate('home');
  });

})();
