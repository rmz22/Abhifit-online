/*
 * ============================================
 * HYDRATION TRACKER COMPONENT
 * ============================================
 * Water tracker with SVG progress ring, bottle and weekly chart
 * ============================================
 */

window.HydrationTracker = {
  GOAL: 3500,
  CIRCUMFERENCE: 534.07,
  data: { total: 0, logs: [] },

  init() {
    this.loadData();
    this.render();
    this.renderWeeklyChart();
  },

  loadData() {
    const key = window.getTodayKey();
    const stored = localStorage.getItem('hydration-' + key);
    this.data = stored ? JSON.parse(stored) : { total: 0, logs: [] };
  },

  saveData() {
    const key = window.getTodayKey();
    localStorage.setItem('hydration-' + key, JSON.stringify(this.data));
  },

  addWater(amount) {
    this.data.total = Math.max(0, this.data.total + amount);
    if (amount > 0) {
      this.data.logs.unshift({ amount, time: new Date().toISOString() });
    } else {
      // Remove last log entry on undo (-250ml)
      if (this.data.logs.length > 0) this.data.logs.shift();
    }
    this.saveData();
    this.render();

    // Button animation
    const btn = document.querySelector(`[data-amount="${amount}"]`);
    if (btn) {
      btn.classList.add('clicked');
      setTimeout(() => btn.classList.remove('clicked'), 500);
    }

    // Toast
    if (amount > 0 && window.Toast) {
      window.Toast.show(`+${amount}ml logged! 💧`);
    } else if (amount < 0 && window.Toast) {
      window.Toast.show(`Undo 250ml logged 🔄`);
    }
  },

  render() {
    const pct = Math.min((this.data.total / this.GOAL) * 100, 100);
    const offset = this.CIRCUMFERENCE - (pct / 100) * this.CIRCUMFERENCE;

    // Progress ring
    const fill = document.getElementById('progressFill');
    if (fill) {
      fill.style.strokeDashoffset = offset;
      fill.style.stroke = pct >= 70 ? '#AAFF00' : pct >= 40 ? '#FFE66D' : '#4facfe';
    }

    // Center text
    const currentMLEl = document.getElementById('currentML');
    if (currentMLEl) {
      currentMLEl.textContent = this.data.total >= 1000 
        ? (this.data.total / 1000).toFixed(1) + 'L' 
        : this.data.total + 'ml';
    }

    // Water bottle fill
    const maxHeight = 108;
    const fillHeight = (pct / 100) * maxHeight;
    const waterFill = document.getElementById('waterFill');
    if (waterFill) {
      waterFill.setAttribute('height', fillHeight);
      waterFill.setAttribute('y', 139 - fillHeight);
    }

    // Status
    let status, statusBadge;
    if (pct >= 100) { status = '🟢 Fully Hydrated!'; statusBadge = 'badge-accent'; }
    else if (pct >= 70) { status = '🟢 Well Hydrated'; statusBadge = 'badge-accent'; }
    else if (pct >= 40) { status = '🟡 Keep Drinking'; statusBadge = 'badge-outline'; }
    else { status = '🔴 Low — Drink More!'; statusBadge = 'badge-dark'; }

    const statusEl = document.getElementById('hydrationStatus');
    if (statusEl) {
      statusEl.textContent = status;
      statusEl.className = 'badge ' + statusBadge;
    }

    // Result board
    const resultTotal = document.getElementById('resultTotal');
    if (resultTotal) {
      resultTotal.textContent = this.data.total >= 1000 
        ? (this.data.total / 1000).toFixed(1) + ' L' 
        : this.data.total + ' ml';
    }
    const resultGlasses = document.getElementById('resultGlasses');
    if (resultGlasses) {
      resultGlasses.textContent = Math.floor(this.data.total / 250);
    }
    const resultPercent = document.getElementById('resultPercent');
    if (resultPercent) {
      resultPercent.textContent = Math.round(pct) + '%';
    }
    const resultRemaining = document.getElementById('resultRemaining');
    if (resultRemaining) {
      resultRemaining.textContent = Math.max(0, this.GOAL - this.data.total) + ' ml';
    }
    const resultStatus = document.getElementById('resultStatus');
    if (resultStatus) {
      resultStatus.textContent = status;
    }

    // Log list
    const logList = document.getElementById('logList');
    if (logList) {
      if (this.data.logs.length === 0) {
        logList.innerHTML = '<div class="log-item" style="justify-content:center;color:var(--text-muted);">No entries yet — tap a button!</div>';
      } else {
        logList.innerHTML = this.data.logs.map(log => {
          const t = new Date(log.time);
          return `<div class="log-item">
            <span class="log-item-time">${window.formatTime(t)}</span>
            <span class="log-item-amount">+${log.amount}ml 💧</span>
          </div>`;
        }).join('');
      }
    }
  },

  renderWeeklyChart() {
    const chart = document.getElementById('weeklyChart');
    if (!chart) return;

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date();
    let html = '';

    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
      const stored = localStorage.getItem('hydration-' + key);
      const total = stored ? JSON.parse(stored).total : 0;
      const pct = Math.min((total / this.GOAL) * 100, 100);
      const isToday = i === 0;

      html += `
        <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;height:100%;">
          <span style="font-size:0.65rem;color:var(--text-muted);font-weight:600;">${Math.round(total/1000*10)/10}L</span>
          <div style="width:100%;background:var(--bg-tertiary);border-radius:6px;height:100px;display:flex;align-items:flex-end;overflow:hidden;border:2px solid var(--card-border);">
            <div style="width:100%;height:${pct}%;background:${isToday ? 'var(--accent)' : '#4facfe'};border-radius:4px 4px 0 0;opacity:${isToday ? 1 : 0.5};transition:height 0.5s ease;"></div>
          </div>
          <span style="font-size:0.65rem;color:${isToday ? 'var(--accent)' : 'var(--text-muted)'};font-weight:700;">${days[d.getDay()]}</span>
        </div>
      `;
    }

    chart.innerHTML = html;
  },

  resetToday() {
    if (confirm('Reset today\'s hydration log?')) {
      this.data = { total: 0, logs: [] };
      this.saveData();
      this.render();
      this.renderWeeklyChart();
      if (window.Toast) {
        window.Toast.show('Today\'s log reset 🔄');
      }
    }
  }
};

window.renderHydration = function(C) {
  return `
    <section class="page-header">
      <div class="page-header-bg" style="background: var(--pastel-blue);"></div>
      <span class="badge badge-accent reveal">💧 DAILY GOAL: 3.5L</span>
      <h1 class="reveal reveal-delay-1">HYDRATION<br><span class="text-gradient">TRACKER</span></h1>
      <p class="reveal reveal-delay-2">Stay hydrated. Tap to log your water intake throughout the day.</p>
    </section>

    <!-- Main Content -->
    <section class="section">
      <div class="container" style="max-width: 500px;">

        <!-- Progress Ring -->
        <div class="progress-ring-container reveal" id="progressRing">
          <svg class="progress-ring" viewBox="0 0 200 200">
            <circle class="progress-ring-bg" cx="100" cy="100" r="85"/>
            <circle class="progress-ring-fill" id="progressFill" cx="100" cy="100" r="85" 
              stroke-dasharray="534.07" stroke-dashoffset="534.07"/>
          </svg>
          <div class="progress-ring-text">
            <div class="progress-ring-value" id="currentML">0</div>
            <div class="progress-ring-label">of 3500 ml</div>
          </div>
        </div>

        <!-- Status -->
        <div class="text-center reveal reveal-delay-1" style="margin-top: var(--space-lg);">
          <span class="badge" id="hydrationStatus" style="font-size: 0.85rem;">🔴 Low — Drink more water!</span>
        </div>

        <!-- Water Bottle SVG Visual -->
        <div class="reveal reveal-delay-2" style="margin: var(--space-xl) auto; max-width: 100px;">
          <svg viewBox="0 0 80 160" id="waterBottleSVG">
            <!-- Bottle cap -->
            <rect x="28" y="5" width="24" height="12" rx="4" fill="var(--text-muted)" opacity="0.6"/>
            <!-- Bottle neck -->
            <rect x="30" y="15" width="20" height="15" rx="3" fill="none" stroke="var(--card-border)" stroke-width="2"/>
            <!-- Bottle body -->
            <rect x="15" y="30" width="50" height="110" rx="12" fill="none" stroke="var(--card-border)" stroke-width="2.5"/>
            <!-- Water fill area -->
            <clipPath id="bottleClip">
              <rect x="16" y="31" width="48" height="108" rx="11"/>
            </clipPath>
            <rect id="waterFill" x="16" y="139" width="48" height="0" fill="url(#waterGradient)" clip-path="url(#bottleClip)"></rect>
            <!-- Water gradient -->
            <defs>
              <linearGradient id="waterGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#4facfe" stop-opacity="0.7"/>
                <stop offset="100%" stop-color="#00f2fe" stop-opacity="0.9"/>
              </linearGradient>
            </defs>
            <!-- Measurement lines -->
            <line x1="12" y1="58" x2="18" y2="58" stroke="var(--text-muted)" stroke-width="1" opacity="0.4"/>
            <line x1="12" y1="85" x2="18" y2="85" stroke="var(--text-muted)" stroke-width="1" opacity="0.4"/>
            <line x1="12" y1="112" x2="18" y2="112" stroke="var(--text-muted)" stroke-width="1" opacity="0.4"/>
          </svg>
        </div>

        <!-- Water Buttons -->
        <h3 class="reveal" style="margin-bottom: var(--space-md); font-size: 1.1rem;">Add Water</h3>
        <div class="water-buttons reveal reveal-delay-1" id="waterButtons">
          <button class="water-btn" data-amount="100" onclick="window.HydrationTracker.addWater(100)">
            <svg viewBox="0 0 40 40" fill="none"><path d="M20 5 L28 18 A10 10 0 1 1 12 18 Z" fill="#4facfe" opacity="0.7"/></svg>
            100ml
          </button>
          <button class="water-btn" data-amount="250" onclick="window.HydrationTracker.addWater(250)">
            <svg viewBox="0 0 40 40" fill="none"><path d="M20 3 L30 20 A12 12 0 1 1 10 20 Z" fill="#4facfe" opacity="0.8"/></svg>
            250ml
          </button>
          <button class="water-btn" data-amount="500" onclick="window.HydrationTracker.addWater(500)">
            <svg viewBox="0 0 40 40" fill="none"><path d="M20 2 L32 22 A14 14 0 1 1 8 22 Z" fill="#4facfe" opacity="0.9"/></svg>
            500ml
          </button>
          <button class="water-btn" data-amount="750" onclick="window.HydrationTracker.addWater(750)">
            <svg viewBox="0 0 40 40" fill="none"><path d="M20 2 L33 23 A15 15 0 1 1 7 23 Z" fill="#4facfe"/></svg>
            750ml
          </button>
          <button class="water-btn" data-amount="1000" onclick="window.HydrationTracker.addWater(1000)">
            <svg viewBox="0 0 40 40" fill="none"><path d="M20 1 L34 24 A16 16 0 1 1 6 24 Z" fill="#00f2fe"/></svg>
            1 Litre
          </button>
          <button class="water-btn" data-amount="-250" onclick="window.HydrationTracker.addWater(-250)" style="border-color: rgba(255,68,68,0.3);">
            <svg viewBox="0 0 40 40" fill="none"><line x1="12" y1="20" x2="28" y2="20" stroke="#FF4444" stroke-width="3" stroke-linecap="round"/></svg>
            <span style="color:var(--text-muted); font-size:0.75rem;">Undo 250ml</span>
          </button>
        </div>

        <!-- Result Board -->
        <div class="result-board reveal" style="margin-top: var(--space-2xl);" id="resultBoard">
          <div class="result-board-header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
            <h3>Today's Progress</h3>
          </div>
          <div class="result-row">
            <span class="result-label">Total Water</span>
            <span class="result-value" id="resultTotal">0 ml</span>
          </div>
          <div class="result-row">
            <span class="result-label">Glasses (250ml)</span>
            <span class="result-value" id="resultGlasses">0</span>
          </div>
          <div class="result-row">
            <span class="result-label">Progress</span>
            <span class="result-value" id="resultPercent">0%</span>
          </div>
          <div class="result-row">
            <span class="result-label">Remaining</span>
            <span class="result-value" id="resultRemaining">3500 ml</span>
          </div>
          <div class="result-row">
            <span class="result-label">Status</span>
            <span class="result-value" id="resultStatus">🔴 Low</span>
          </div>
        </div>

        <!-- Log History -->
        <div class="reveal" style="margin-top: var(--space-xl);">
          <h3 style="font-size: 1.1rem; margin-bottom: var(--space-md);">Today's Log</h3>
          <div class="log-list" id="logList">
            <div class="log-item" style="justify-content: center; color: var(--text-muted);">
              No entries yet — tap a button to start logging!
            </div>
          </div>
        </div>

        <!-- Weekly Chart -->
        <div class="reveal" style="margin-top: var(--space-xl);">
          <h3 style="font-size: 1.1rem; margin-bottom: var(--space-md);">Weekly Overview</h3>
          <div style="background: var(--card-bg); border: 3px solid var(--card-border); border-radius: var(--radius-lg); padding: var(--space-lg); box-shadow: var(--shadow-md);">
            <div id="weeklyChart" style="display: flex; align-items: flex-end; justify-content: space-between; height: 150px; gap: 8px;">
            </div>
          </div>
        </div>

        <!-- Reset Button -->
        <div class="text-center reveal" style="margin-top: var(--space-xl);">
          <button class="btn btn-ghost btn-sm" onclick="window.HydrationTracker.resetToday()">Reset Today's Log</button>
        </div>

      </div>
    </section>

    <footer class="footer">
      <div class="footer-logo">${C.siteTitle}</div>
      <p class="footer-copy">${C.footerText}</p>
    </footer>
  `;
};
