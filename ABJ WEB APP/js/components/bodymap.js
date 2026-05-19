/*
 * ============================================
 * BODY MAP COMPONENT
 * ============================================
 * Interactive SVG body with front/back toggle
 * ============================================
 */

const MUSCLE_EXERCISES = {
  chest: [
    { name: "Incline DB Press", sets: "3x8-12", desc: "Upper chest focus with dumbbells on incline bench" },
    { name: "Smith Machine Press", sets: "3x8-12", desc: "Controlled pressing for chest isolation" },
    { name: "Bar Dips", sets: "3x10", desc: "Lean forward for chest targeting" },
    { name: "Cable Fly (Lower)", sets: "3x10", desc: "Great chest finisher for inner chest" }
  ],
  back: [
    { name: "Lat Pull Down", sets: "3x12-15", desc: "Wide grip for lat width" },
    { name: "Incline Chest Supported Row", sets: "3x12-15", desc: "Strict rows for mid-back thickness" },
    { name: "Straight Arm Pull Down", sets: "2x10", desc: "Isolation for lat mind-muscle connection" }
  ],
  shoulders: [
    { name: "Shoulder DB Press", sets: "3x6-10", desc: "Main shoulder mass builder" },
    { name: "Cable Side Raise", sets: "3x15", desc: "Constant tension for side delts" },
    { name: "Rear Pec Fly", sets: "4x10", desc: "Rear delts for posture and symmetry" }
  ],
  arms: [
    { name: "Incline Biceps Curl", sets: "3x10", desc: "Stretched position for long head biceps" },
    { name: "Triceps Overhead Extension", sets: "3x10", desc: "Long head triceps development" },
    { name: "DB Preacher Curl", sets: "2x15", desc: "Strict curls for peak biceps" },
    { name: "Triceps Pushdown", sets: "2x15", desc: "Quick pump for lateral heads" }
  ],
  legs: [
    { name: "Barbell Squats", sets: "3x8-10 + 2x15", desc: "King of leg exercises" },
    { name: "Romanian Deadlift", sets: "3x10", desc: "Hamstring and glute builder" },
    { name: "Leg Extension", sets: "3x20", desc: "Quad isolation and pump" },
    { name: "Leg Curl", sets: "3x15-20", desc: "Hamstring isolation" },
    { name: "Calf Raise", sets: "3x15-20", desc: "Full ROM calf development" }
  ],
  abs: [
    { name: "Lying Leg Raise", sets: "3-4x15", desc: "Lower ab focus" },
    { name: "Reverse Crunch", sets: "3-4x15", desc: "Controlled lower ab movement" },
    { name: "Lying Toe Touch", sets: "3-4x20", desc: "Upper ab crunch" },
    { name: "Dead Bug", sets: "3-4x12/side", desc: "Core stability" },
    { name: "Flutter Kicks", sets: "3-4x30sec", desc: "Core endurance" },
    { name: "Plank Hold", sets: "3x30-45sec", desc: "Total core brace" }
  ]
};

const MUSCLE_META = {
  chest: { emoji: '🫁', name: 'Chest (Pectorals)' },
  back: { emoji: '🔙', name: 'Back (Lats, Traps)' },
  shoulders: { emoji: '🎯', name: 'Shoulders (Deltoids)' },
  arms: { emoji: '💪', name: 'Arms (Biceps, Triceps)' },
  legs: { emoji: '🦵', name: 'Legs (Quads, Hams, Glutes, Calves)' },
  abs: { emoji: '🎯', name: 'Abs (Core)' }
};

window.BodyMap = {
  currentView: 'front',

  init() {
    this.setupInteraction();
  },

  setView(view) {
    this.currentView = view;
    document.getElementById('bodyMapFront').style.display = view === 'front' ? 'block' : 'none';
    document.getElementById('bodyMapBack').style.display = view === 'back' ? 'block' : 'none';
    document.querySelectorAll('#viewToggle .toggle-pill').forEach((p, i) => {
      p.classList.toggle('active', (i === 0 && view === 'front') || (i === 1 && view === 'back'));
    });
    // Reset selection
    document.querySelectorAll('.muscle-group').forEach(g => g.classList.remove('active'));
    document.getElementById('musclePanel').style.display = 'none';
  },

  setupInteraction() {
    const attachHandlers = () => {
      document.querySelectorAll('.muscle-group').forEach(group => {
        // Clone and replace to avoid duplicate listeners
        const newGroup = group.cloneNode(true);
        group.parentNode.replaceChild(newGroup, group);

        newGroup.addEventListener('click', () => {
          const muscle = newGroup.dataset.muscle;
          // Toggle active
          document.querySelectorAll('.muscle-group').forEach(g => g.classList.remove('active'));
          document.querySelectorAll(`.muscle-group[data-muscle="${muscle}"]`).forEach(g => g.classList.add('active'));
          this.showExercises(muscle);
        });

        // Hover labels
        newGroup.addEventListener('mouseenter', () => {
          const muscle = newGroup.dataset.muscle;
          document.querySelectorAll(`.muscle-label[data-for="${muscle}"]`).forEach(l => l.style.opacity = '1');
        });
        newGroup.addEventListener('mouseleave', () => {
          document.querySelectorAll('.muscle-label').forEach(l => l.style.opacity = '0');
        });
      });
    };
    
    // Slight delay to ensure DOM is ready since this runs right after innerHTML
    setTimeout(attachHandlers, 100);
  },

  showExercises(muscle) {
    const panel = document.getElementById('musclePanel');
    if (!panel) return;

    const meta = MUSCLE_META[muscle];
    const exercises = MUSCLE_EXERCISES[muscle] || [];

    document.getElementById('panelEmoji').textContent = meta.emoji;
    document.getElementById('panelTitle').textContent = meta.name;

    const exercisesHTML = exercises.map(ex => `
      <div class="result-row" style="flex-direction: column; align-items: flex-start; gap: 4px;">
        <div style="display:flex; justify-content:space-between; width:100%; align-items:center;">
          <span style="font-weight:700; font-size:0.95rem;">${ex.name}</span>
          <span class="badge badge-outline" style="font-size:0.6rem;">${ex.sets}</span>
        </div>
        <span style="font-size:0.8rem; color:var(--text-muted);">${ex.desc}</span>
      </div>
    `).join('');

    document.getElementById('panelExercises').innerHTML = exercisesHTML;
    panel.style.display = 'block';
    panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

window.renderBodymap = function(C) {
  return `
    <section class="page-header">
      <div class="page-header-bg" style="background: var(--pastel-lavender);"></div>
      <span class="badge badge-accent reveal">🧍 INTERACTIVE</span>
      <h1 class="reveal reveal-delay-1">BODY<br><span class="text-gradient">MAP</span></h1>
      <p class="reveal reveal-delay-2">Tap any muscle group to see targeted exercises.</p>
    </section>



    <section class="section">
      <div class="container" style="max-width: 600px;">

        <!-- View Toggle -->
        <div class="toggle-pills reveal" id="viewToggle" style="max-width: 250px; margin: 0 auto var(--space-xl);">
          <div class="toggle-pill active" onclick="window.BodyMap.setView('front')">Front View</div>
          <div class="toggle-pill" onclick="window.BodyMap.setView('back')">Back View</div>
        </div>

        <!-- Body Map SVG -->
        <div class="body-map-container reveal">
          <div class="body-map-svg" id="bodyMapFront" style="position: relative;">
            <svg viewBox="0 0 300 600" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;max-width:300px;display:block;margin:0 auto;">
              <!-- Head -->
              <circle cx="150" cy="50" r="30" fill="var(--text-muted)" opacity="0.3" stroke="var(--card-border)" stroke-width="1"/>
              <!-- Neck -->
              <rect x="140" y="78" width="20" height="20" rx="6" fill="var(--text-muted)" opacity="0.3"/>

              <!-- Shoulders (Deltoids) -->
              <ellipse class="muscle-group" data-muscle="shoulders" cx="100" cy="115" rx="22" ry="28" transform="rotate(-10, 100, 115)"/>
              <ellipse class="muscle-group" data-muscle="shoulders" cx="200" cy="115" rx="22" ry="28" transform="rotate(10, 200, 115)"/>

              <!-- Chest (Pectorals) -->
              <ellipse class="muscle-group" data-muscle="chest" cx="122" cy="140" rx="28" ry="22"/>
              <ellipse class="muscle-group" data-muscle="chest" cx="178" cy="140" rx="28" ry="22"/>

              <!-- Biceps -->
              <ellipse class="muscle-group" data-muscle="arms" cx="78" cy="180" rx="14" ry="30" transform="rotate(5, 78, 180)"/>
              <ellipse class="muscle-group" data-muscle="arms" cx="222" cy="180" rx="14" ry="30" transform="rotate(-5, 222, 180)"/>

              <!-- Forearms -->
              <ellipse class="muscle-group" data-muscle="arms" cx="72" cy="240" rx="11" ry="28" transform="rotate(8, 72, 240)"/>
              <ellipse class="muscle-group" data-muscle="arms" cx="228" cy="240" rx="11" ry="28" transform="rotate(-8, 228, 240)"/>

              <!-- Abs -->
              <rect class="muscle-group" data-muscle="abs" x="128" y="165" width="44" height="70" rx="8"/>
              <!-- Ab lines -->
              <line x1="150" y1="170" x2="150" y2="230" stroke="var(--bg-primary)" stroke-width="1" opacity="0.3" pointer-events="none"/>
              <line x1="130" y1="185" x2="170" y2="185" stroke="var(--bg-primary)" stroke-width="1" opacity="0.3" pointer-events="none"/>
              <line x1="130" y1="200" x2="170" y2="200" stroke="var(--bg-primary)" stroke-width="1" opacity="0.3" pointer-events="none"/>
              <line x1="130" y1="215" x2="170" y2="215" stroke="var(--bg-primary)" stroke-width="1" opacity="0.3" pointer-events="none"/>

              <!-- Obliques -->
              <ellipse class="muscle-group" data-muscle="abs" cx="118" cy="210" rx="10" ry="30" transform="rotate(5, 118, 210)"/>
              <ellipse class="muscle-group" data-muscle="abs" cx="182" cy="210" rx="10" ry="30" transform="rotate(-5, 182, 210)"/>

              <!-- Quads -->
              <ellipse class="muscle-group" data-muscle="legs" cx="128" cy="330" rx="22" ry="60"/>
              <ellipse class="muscle-group" data-muscle="legs" cx="172" cy="330" rx="22" ry="60"/>

              <!-- Inner Quads -->
              <ellipse class="muscle-group" data-muscle="legs" cx="142" cy="340" rx="10" ry="45"/>
              <ellipse class="muscle-group" data-muscle="legs" cx="158" cy="340" rx="10" ry="45"/>

              <!-- Shins / Calves Front -->
              <ellipse class="muscle-group" data-muscle="legs" cx="130" cy="460" rx="14" ry="50"/>
              <ellipse class="muscle-group" data-muscle="legs" cx="170" cy="460" rx="14" ry="50"/>

              <!-- Feet -->
              <ellipse cx="130" cy="530" rx="16" ry="8" fill="var(--text-muted)" opacity="0.2"/>
              <ellipse cx="170" cy="530" rx="16" ry="8" fill="var(--text-muted)" opacity="0.2"/>

              <!-- Labels (appear on hover) -->
              <text x="100" y="108" font-family="var(--font-heading)" font-size="8" fill="var(--accent)" text-anchor="middle" opacity="0" class="muscle-label" data-for="shoulders">SHOULDERS</text>
              <text x="150" y="135" font-family="var(--font-heading)" font-size="8" fill="var(--accent)" text-anchor="middle" opacity="0" class="muscle-label" data-for="chest">CHEST</text>
              <text x="68" y="178" font-family="var(--font-heading)" font-size="8" fill="var(--accent)" text-anchor="middle" opacity="0" class="muscle-label" data-for="arms">BICEPS</text>
              <text x="150" y="198" font-family="var(--font-heading)" font-size="8" fill="var(--accent)" text-anchor="middle" opacity="0" class="muscle-label" data-for="abs">ABS</text>
              <text x="150" y="330" font-family="var(--font-heading)" font-size="8" fill="var(--accent)" text-anchor="middle" opacity="0" class="muscle-label" data-for="legs">QUADS</text>
            </svg>
          </div>

          <div class="body-map-svg" id="bodyMapBack" style="position: relative; display: none;">
            <svg viewBox="0 0 300 600" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;max-width:300px;display:block;margin:0 auto;">
              <!-- Head -->
              <circle cx="150" cy="50" r="30" fill="var(--text-muted)" opacity="0.3" stroke="var(--card-border)" stroke-width="1"/>
              <!-- Neck -->
              <rect x="140" y="78" width="20" height="20" rx="6" fill="var(--text-muted)" opacity="0.3"/>

              <!-- Traps -->
              <path class="muscle-group" data-muscle="back" d="M120 85 Q150 100 180 85 Q185 110 180 120 L120 120 Q115 110 120 85Z"/>

              <!-- Rear Delts -->
              <ellipse class="muscle-group" data-muscle="shoulders" cx="100" cy="118" rx="20" ry="22" transform="rotate(-10, 100, 118)"/>
              <ellipse class="muscle-group" data-muscle="shoulders" cx="200" cy="118" rx="20" ry="22" transform="rotate(10, 200, 118)"/>

              <!-- Lats -->
              <path class="muscle-group" data-muscle="back" d="M110 130 Q95 170 100 210 Q120 230 130 230 L130 140 Z"/>
              <path class="muscle-group" data-muscle="back" d="M190 130 Q205 170 200 210 Q180 230 170 230 L170 140 Z"/>

              <!-- Mid Back -->
              <rect class="muscle-group" data-muscle="back" x="130" y="130" width="40" height="60" rx="6"/>

              <!-- Lower Back -->
              <rect class="muscle-group" data-muscle="back" x="125" y="195" width="50" height="40" rx="8"/>

              <!-- Triceps -->
              <ellipse class="muscle-group" data-muscle="arms" cx="80" cy="180" rx="13" ry="30" transform="rotate(-5, 80, 180)"/>
              <ellipse class="muscle-group" data-muscle="arms" cx="220" cy="180" rx="13" ry="30" transform="rotate(5, 220, 180)"/>

              <!-- Forearms back -->
              <ellipse class="muscle-group" data-muscle="arms" cx="74" cy="240" rx="10" ry="28" transform="rotate(8, 74, 240)"/>
              <ellipse class="muscle-group" data-muscle="arms" cx="226" cy="240" rx="10" ry="28" transform="rotate(-8, 226, 240)"/>

              <!-- Glutes -->
              <ellipse class="muscle-group" data-muscle="legs" cx="133" cy="270" rx="25" ry="22"/>
              <ellipse class="muscle-group" data-muscle="legs" cx="167" cy="270" rx="25" ry="22"/>

              <!-- Hamstrings -->
              <ellipse class="muscle-group" data-muscle="legs" cx="130" cy="345" rx="20" ry="55"/>
              <ellipse class="muscle-group" data-muscle="legs" cx="170" cy="345" rx="20" ry="55"/>

              <!-- Calves -->
              <ellipse class="muscle-group" data-muscle="legs" cx="130" cy="455" rx="16" ry="45"/>
              <ellipse class="muscle-group" data-muscle="legs" cx="170" cy="455" rx="16" ry="45"/>

              <!-- Feet -->
              <ellipse cx="130" cy="525" rx="16" ry="8" fill="var(--text-muted)" opacity="0.2"/>
              <ellipse cx="170" cy="525" rx="16" ry="8" fill="var(--text-muted)" opacity="0.2"/>

              <!-- Labels -->
              <text x="150" y="105" font-family="var(--font-heading)" font-size="8" fill="var(--accent)" text-anchor="middle" opacity="0" class="muscle-label" data-for="back">TRAPS</text>
              <text x="150" y="165" font-family="var(--font-heading)" font-size="8" fill="var(--accent)" text-anchor="middle" opacity="0" class="muscle-label" data-for="back">LATS</text>
              <text x="80" y="175" font-family="var(--font-heading)" font-size="8" fill="var(--accent)" text-anchor="middle" opacity="0" class="muscle-label" data-for="arms">TRICEPS</text>
              <text x="150" y="270" font-family="var(--font-heading)" font-size="8" fill="var(--accent)" text-anchor="middle" opacity="0" class="muscle-label" data-for="legs">GLUTES</text>
              <text x="150" y="350" font-family="var(--font-heading)" font-size="8" fill="var(--accent)" text-anchor="middle" opacity="0" class="muscle-label" data-for="legs">HAMSTRINGS</text>
              <text x="150" y="460" font-family="var(--font-heading)" font-size="8" fill="var(--accent)" text-anchor="middle" opacity="0" class="muscle-label" data-for="legs">CALVES</text>
            </svg>
          </div>

          <!-- Selected Muscle Info Panel -->
          <div class="text-center" style="margin-top: var(--space-md);">
            <p style="font-size: 0.85rem; color: var(--text-muted);">👆 Tap a muscle group to see exercises</p>
          </div>
        </div>

        <!-- Exercise Panel (shows when muscle selected) -->
        <div id="musclePanel" style="display: none; margin-top: var(--space-xl);">
          <div class="result-board">
            <div class="result-board-header">
              <span style="font-size: 1.5rem;" id="panelEmoji">💪</span>
              <h3 id="panelTitle">Exercises</h3>
            </div>
            <div id="panelExercises"></div>
            <div style="margin-top: var(--space-md); text-align: center;">
              <a class='btn btn-ghost btn-sm' href="#" onclick="window.navigate('exercises'); return false;">View All Exercises →</a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <footer class="footer">
      <div class="footer-logo">${C.siteTitle}</div>
      <p class="footer-copy">${C.footerText}</p>
    </footer>
  `;
};
