/*
 * ============================================
 * EXERCISE LIBRARY COMPONENT
 * ============================================
 * Searchable/filterable list of exercises
 * ============================================
 */

const EXERCISES = [
  // CHEST
  { name: "Incline DB Press", muscle: "chest", sets: "3x8-12", equipment: "dumbbell", difficulty: "intermediate",
    description: "Lie on an incline bench (30-45°). Press dumbbells up from chest level until arms are extended. Lower slowly with control.",
    tips: "Focus on squeezing the upper chest at the top. Don't flare elbows too wide." },
  { name: "Smith Machine Press", muscle: "chest", sets: "3x8-12", equipment: "machine", difficulty: "beginner",
    description: "Use the Smith machine for a controlled pressing movement. Grip slightly wider than shoulders.",
    tips: "Great for isolating chest without stabilizer fatigue. Good for beginners." },
  { name: "Bar Dips", muscle: "chest", sets: "3x10", equipment: "bodyweight", difficulty: "intermediate",
    description: "Lean forward ~30° on parallel dip bars. Lower until upper arms are parallel to ground, then push up.",
    tips: "Lean forward to target chest. Stay upright for triceps focus." },
  { name: "Cable Fly (Lower)", muscle: "chest", sets: "3x10", equipment: "cable", difficulty: "beginner",
    description: "Set cables at lowest position. Bring handles up and together in a hugging motion. Squeeze at the top.",
    tips: "Great finisher. Superset with dips for maximum chest pump." },
  // BACK
  { name: "Lat Pull Down", muscle: "back", sets: "3x12-15", equipment: "cable", difficulty: "beginner",
    description: "Grip the bar wide, pull down to upper chest. Squeeze shoulder blades together at the bottom.",
    tips: "Don't lean too far back. Think about pulling with your elbows, not hands." },
  { name: "Incline Chest Supported Row", muscle: "back", sets: "3x12-15", equipment: "dumbbell", difficulty: "intermediate",
    description: "Lie face down on incline bench. Row dumbbells to your sides. Squeeze back at the top.",
    tips: "Eliminates momentum/cheating. Great for mid-back development." },
  { name: "Straight Arm Pull Down", muscle: "back", sets: "2x10", equipment: "cable", difficulty: "beginner",
    description: "Stand facing cable machine. Keep arms straight, pull bar down to thighs in an arc. Feel the lats stretch.",
    tips: "Great mind-muscle connection exercise. Keep slight bend in elbows." },
  // SHOULDERS
  { name: "Shoulder DB Press", muscle: "shoulders", sets: "3x6-10", equipment: "dumbbell", difficulty: "intermediate",
    description: "Seated or standing, press dumbbells overhead from shoulder level. Full extension at the top.",
    tips: "Don't lock out elbows completely. Keep core tight and don't arch excessively." },
  { name: "Cable Side Raise", muscle: "shoulders", sets: "3x15", equipment: "cable", difficulty: "beginner",
    description: "Stand sideways to cable. Raise arm out to the side until parallel with floor. Slow negatives.",
    tips: "Constant tension through full range. Better than dumbbells for side delts." },
  { name: "Rear Pec Fly", muscle: "shoulders", sets: "4x10", equipment: "machine", difficulty: "beginner",
    description: "Use the pec deck machine reversed. Squeeze shoulder blades together at the back.",
    tips: "Don't use momentum. Focus on the squeeze. Very important for posture!" },
  // ARMS  
  { name: "Incline Biceps Curl", muscle: "arms", sets: "3x10", equipment: "dumbbell", difficulty: "beginner",
    description: "Sit on incline bench (45°). Curl dumbbells from full extension. The incline stretches the long head more.",
    tips: "Don't swing. Keep upper arms pinned to your sides." },
  { name: "Triceps Overhead Extension", muscle: "arms", sets: "3x10", equipment: "cable", difficulty: "beginner",
    description: "Face away from cable, hands behind head. Extend arms overhead. Squeeze triceps at the top.",
    tips: "Great for the long head of triceps. Keep elbows close to ears." },
  { name: "DB Preacher Curl", muscle: "arms", sets: "2x15", equipment: "dumbbell", difficulty: "beginner",
    description: "Use preacher bench for strict curls. Lower fully, curl up squeezing at the top.",
    tips: "Eliminates all cheating. Great for peak biceps." },
  { name: "Triceps Pushdown", muscle: "arms", sets: "2x15", equipment: "cable", difficulty: "beginner",
    description: "Push bar or rope down until arms are fully extended. Keep upper arms still.",
    tips: "Squeeze and hold at the bottom for 1 second. Use rope for extra stretch." },
  // LEGS
  { name: "Barbell Squats", muscle: "legs", sets: "3x8-10", equipment: "barbell", difficulty: "advanced",
    description: "Bar on upper traps, feet shoulder-width. Squat to parallel or below. Drive up through heels.",
    tips: "King of leg exercises. Keep chest up, knees tracking over toes. Warm up properly!" },
  { name: "Squat Back Down Sets", muscle: "legs", sets: "2x15", equipment: "barbell", difficulty: "intermediate",
    description: "After heavy squats, reduce weight 40-50%. Perform higher rep sets focusing on form and muscle connection.",
    tips: "Great for volume and hypertrophy. Don't rush these." },
  { name: "Romanian Deadlift (RDL)", muscle: "legs", sets: "3x10", equipment: "barbell", difficulty: "intermediate",
    description: "Hinge at hips, keeping bar close to legs. Lower until hamstrings are fully stretched. Squeeze glutes to return.",
    tips: "Feel the stretch in hamstrings. Don't round your lower back!" },
  { name: "Leg Extension", muscle: "legs", sets: "3x20", equipment: "machine", difficulty: "beginner",
    description: "Sit in leg extension machine. Extend legs fully, squeezing quads at the top. Slow negatives.",
    tips: "High reps for quad pump. Don't use too heavy weight — control the movement." },
  { name: "Leg Curl", muscle: "legs", sets: "3x15-20", equipment: "machine", difficulty: "beginner",
    description: "Lie face down, curl legs toward glutes. Squeeze hamstrings at the top.",
    tips: "Point toes to target different hamstring areas." },
  { name: "Weighted Calf Raise", muscle: "legs", sets: "3x15-20", equipment: "machine", difficulty: "beginner",
    description: "Standing on edge of step, raise up on toes. Hold at the top. Lower slowly for full stretch.",
    tips: "Full range of motion is key. Pause at the top and bottom." },
  // ABS
  { name: "Lying Leg Raise", muscle: "abs", sets: "3-4x15", equipment: "bodyweight", difficulty: "intermediate",
    description: "Lie flat, hands under hips. Lift legs straight up to 90°. Lower slowly with 3 second negatives.",
    tips: "Keep lower back pressed to floor. Targets lower abs." },
  { name: "Reverse Crunch", muscle: "abs", sets: "3-4x15", equipment: "bodyweight", difficulty: "beginner",
    description: "Bring knees toward chest, lifting hips slightly off the floor. Focus on lower abs contraction.",
    tips: "Small, controlled movement. Don't use momentum." },
  { name: "Lying Toe Touch", muscle: "abs", sets: "3-4x20", equipment: "bodyweight", difficulty: "beginner",
    description: "Legs straight up. Reach toward toes, lifting shoulder blades off floor. Squeeze upper abs.",
    tips: "Exhale as you crunch up. Hold for a second at the top." },
  { name: "Dead Bug", muscle: "abs", sets: "3-4x12/side", equipment: "bodyweight", difficulty: "beginner",
    description: "Lie on back, arms up, knees at 90°. Extend opposite arm and leg simultaneously. Keep lower back flat.",
    tips: "Great for core stability. Really focus on keeping back pressed down." },
  { name: "Flutter Kicks", muscle: "abs", sets: "3-4x30sec", equipment: "bodyweight", difficulty: "intermediate",
    description: "Lie flat, hands under hips. Small alternating kicks with straight legs. Keep core tight throughout.",
    tips: "Don't let lower back arch. The slower you go, the harder it is." },
  { name: "Plank Hold", muscle: "abs", sets: "3x30-45sec", equipment: "bodyweight", difficulty: "beginner",
    description: "Forearm plank position. Body in straight line from head to heels. Hold and breathe.",
    tips: "Squeeze glutes, brace abs. Don't let hips sag or pike up." }
];

window.ExerciseLib = {
  currentFilter: 'all',

  init() {
    this.currentFilter = 'all';
    // Reset active states
    document.querySelectorAll('.filter-pill').forEach(p => {
      p.classList.toggle('active', p.dataset.filter === 'all');
    });
    this.renderList();
  },

  filter(muscle) {
    this.currentFilter = muscle;
    document.querySelectorAll('.filter-pill').forEach(p => {
      p.classList.toggle('active', p.dataset.filter === muscle);
    });
    this.renderList();
  },

  renderList() {
    const list = document.getElementById('exerciseList');
    if (!list) return;

    const filtered = this.currentFilter === 'all' 
      ? EXERCISES 
      : EXERCISES.filter(e => e.muscle === this.currentFilter);
    
    const countEl = document.getElementById('exerciseCount');
    if (countEl) countEl.textContent = filtered.length;

    const muscleColors = {
      chest: '#FF6B6B', back: '#4facfe', shoulders: '#FFE66D',
      arms: '#f093fb', legs: '#AAFF00', abs: '#00f2fe'
    };

    const muscleEmojis = {
      chest: '🫁', back: '🔙', shoulders: '🎯',
      arms: '💪', legs: '🦵', abs: '🎯'
    };

    const diffColors = {
      beginner: '#AAFF00', intermediate: '#FFE66D', advanced: '#FF6B6B'
    };

    list.innerHTML = filtered.map((ex, i) => `
      <div class="exercise-card" onclick="this.classList.toggle('expanded')">
        <div class="exercise-card-header">
          <div class="exercise-card-icon" style="background: ${muscleColors[ex.muscle]}20;">
            <span style="font-size: 1.1rem;">${muscleEmojis[ex.muscle]}</span>
          </div>
          <div class="exercise-card-info">
            <h4>${ex.name}</h4>
            <span class="exercise-meta">${ex.muscle.charAt(0).toUpperCase() + ex.muscle.slice(1)} · ${ex.sets} · ${ex.equipment}</span>
          </div>
          <div style="display:flex; align-items:center; gap:6px; flex-shrink:0;">
            <span class="badge" style="background:${diffColors[ex.difficulty]}; color:#1A1A1A; font-size:0.55rem; padding:2px 6px;">${ex.difficulty.toUpperCase()}</span>
            <div class="exercise-card-chevron">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          </div>
        </div>
        <div class="exercise-card-body">
          <div style="padding: var(--space-sm) var(--space-md); background: var(--bg-tertiary); border-radius: var(--radius-md); margin-bottom: var(--space-sm);">
            <p style="font-weight:600; margin-bottom:4px; font-size:0.8rem; color:var(--text-primary);">How to do it:</p>
            <p style="font-size:0.8rem;">${ex.description}</p>
          </div>
          <div style="padding: var(--space-sm) var(--space-md); background: rgba(170,255,0,0.08); border: 1px solid rgba(170,255,0,0.2); border-radius: var(--radius-md);">
            <p style="font-weight:600; margin-bottom:4px; font-size:0.8rem; color:var(--accent-dark);">💡 Pro Tip:</p>
            <p style="font-size:0.8rem;">${ex.tips}</p>
          </div>
          <div style="margin-top:var(--space-sm); display:flex; gap:var(--space-xs); flex-wrap:wrap;">
            <span class="badge badge-outline" style="font-size:0.55rem; padding:2px 6px;">${ex.sets}</span>
            <span class="badge badge-outline" style="font-size:0.55rem; padding:2px 6px;">${ex.equipment.toUpperCase()}</span>
            <span class="badge badge-outline" style="font-size:0.55rem; padding:2px 6px; border-color:${muscleColors[ex.muscle]}; color:${muscleColors[ex.muscle]};">${ex.muscle.toUpperCase()}</span>
          </div>
        </div>
      </div>
    `).join('');

    // Trigger reveal for new items after filter
    if (window.initReveal) {
      requestAnimationFrame(() => window.initReveal());
    }
  }
};

window.renderExercises = function(C) {
  return `
    <section class="page-header">
      <div class="page-header-bg" style="background: var(--pastel-blue);"></div>
      <span class="badge badge-accent reveal">🏋️ ABHI'S LIBRARY</span>
      <h1 class="reveal reveal-delay-1">EXERCISE<br><span class="text-gradient">LIBRARY</span></h1>
      <p class="reveal reveal-delay-2">Browse exercises by muscle group. Tap any exercise to see detailed guides.</p>
    </section>

    <section class="section">
      <div class="container" style="max-width: 600px;">

        <!-- Filter Pills -->
        <div class="filter-pills reveal" id="filterPills">
          <button class="filter-pill active" data-filter="all" onclick="window.ExerciseLib.filter('all')">All</button>
          <button class="filter-pill" data-filter="chest" onclick="window.ExerciseLib.filter('chest')">Chest</button>
          <button class="filter-pill" data-filter="back" onclick="window.ExerciseLib.filter('back')">Back</button>
          <button class="filter-pill" data-filter="shoulders" onclick="window.ExerciseLib.filter('shoulders')">Shoulders</button>
          <button class="filter-pill" data-filter="arms" onclick="window.ExerciseLib.filter('arms')">Arms</button>
          <button class="filter-pill" data-filter="legs" onclick="window.ExerciseLib.filter('legs')">Legs</button>
          <button class="filter-pill" data-filter="abs" onclick="window.ExerciseLib.filter('abs')">Abs</button>
        </div>

        <!-- Exercise Count -->
        <div class="reveal" style="margin: var(--space-md) 0; display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:0.8rem; color:var(--text-muted); font-weight:600;"><span id="exerciseCount">0</span> exercises</span>
          <button class="btn btn-ghost btn-sm" onclick="window.navigate('bodymap'); return false;">🧍 Body Map</button>
        </div>

        <!-- Exercise List -->
        <div id="exerciseList" style="display:flex; flex-direction:column; gap:var(--space-sm);"></div>

      </div>
    </section>

    <footer class="footer">
      <div class="footer-logo">${C.siteTitle}</div>
      <p class="footer-copy">${C.footerText}</p>
    </footer>
  `;
};
