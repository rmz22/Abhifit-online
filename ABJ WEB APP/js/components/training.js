/*
 * ============================================
 * TRAINING SPLIT COMPONENT
 * ============================================
 * 5-Day Split routines, abs, supplements & skin
 * ============================================
 */

window.renderTraining = function(C) {
  return `
    <section class="page-header">
      <div class="page-header-bg" style="background: var(--pastel-yellow);"></div>
      <span class="badge badge-accent reveal">🦍💯 5 DAYS</span>
      <h1 class="reveal reveal-delay-1">TRAINING<br><span class="text-gradient">ROUTINES</span></h1>
      <p class="reveal reveal-delay-2">Abhi's complete training split, abs circuit, supplements & skincare.</p>
    </section>

    <section class="section">
      <div class="container" style="max-width: 600px;">

        <!-- Transformation Reminder -->
        <div class="transform-card reveal" style="margin-bottom: var(--space-xl);">
          <div class="transform-content">
            <p class="font-accent" style="font-size: 1.2rem;">Abhi's transformation</p>
            <div class="transform-numbers">
              <span class="transform-num" style="font-size: clamp(2.5rem, 8vw, 4rem);">86</span>
              <span class="transform-arrow">→</span>
              <span class="transform-num" style="font-size: clamp(2.5rem, 8vw, 4rem);">81</span>
            </div>
            <p class="transform-label">kg · in just 2 months 🔥</p>
          </div>
        </div>

        <!-- 5-Day Training Split -->
        <h2 class="reveal section-heading">5-Day Training Split 🦍💯</h2>

        <!-- Day 1 -->
        <div class="day-card reveal" id="day1">
          <div class="day-card-header" onclick="this.parentElement.classList.toggle('expanded')">
            <div style="display:flex;align-items:center;gap:var(--space-sm);">
              <span class="day-badge">DAY 1</span>
              <span class="day-title">Chest + Back</span>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="transition:transform 0.3s;"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
          <div class="day-card-body">
            <div class="day-exercise"><span class="day-exercise-name">Incline DB Press / Smith Press</span><span class="day-exercise-sets">3×8-12</span></div>
            <div class="day-exercise"><span class="day-exercise-name">Bar Dips <small style="color:var(--text-muted);">superset with</small> Cable Fly (Lower)</span><span class="day-exercise-sets">3×10</span></div>
            <div class="day-exercise"><span class="day-exercise-name">Lat Pull Down</span><span class="day-exercise-sets">3×12-15</span></div>
            <div class="day-exercise"><span class="day-exercise-name">Incline Chest Supported Row</span><span class="day-exercise-sets">3×12-15</span></div>
            <div class="day-exercise"><span class="day-exercise-name">Straight Arm Pull Down</span><span class="day-exercise-sets">2×10</span></div>
          </div>
        </div>

        <!-- Day 2 -->
        <div class="day-card reveal">
          <div class="day-card-header" onclick="this.parentElement.classList.toggle('expanded')">
            <div style="display:flex;align-items:center;gap:var(--space-sm);">
              <span class="day-badge">DAY 2</span>
              <span class="day-title">Shoulders + Arms</span>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
          <div class="day-card-body">
            <div class="day-exercise"><span class="day-exercise-name">Shoulder DB Press / Smith Press</span><span class="day-exercise-sets">3×6-10</span></div>
            <div class="day-exercise"><span class="day-exercise-name">Cable Side Raise</span><span class="day-exercise-sets">3×15</span></div>
            <div class="day-exercise"><span class="day-exercise-name">Rear Pec Fly</span><span class="day-exercise-sets">4×10</span></div>
            <div class="day-exercise"><span class="day-exercise-name">Incline Biceps Curl</span><span class="day-exercise-sets">3×10</span></div>
            <div class="day-exercise"><span class="day-exercise-name">Triceps Overhead Extension</span><span class="day-exercise-sets">3×10</span></div>
            <div class="day-exercise"><span class="day-exercise-name">DB Preacher Curl</span><span class="day-exercise-sets">2×15</span></div>
            <div class="day-exercise"><span class="day-exercise-name">Triceps Pushdown</span><span class="day-exercise-sets">2×15</span></div>
          </div>
        </div>

        <!-- Day 3 -->
        <div class="day-card reveal">
          <div class="day-card-header" onclick="this.parentElement.classList.toggle('expanded')">
            <div style="display:flex;align-items:center;gap:var(--space-sm);">
              <span class="day-badge">DAY 3</span>
              <span class="day-title">Legs</span>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
          <div class="day-card-body">
            <div class="day-exercise"><span class="day-exercise-name">Barbell Squats</span><span class="day-exercise-sets">3×8-10</span></div>
            <div class="day-exercise"><span class="day-exercise-name">Squat Back Down Sets</span><span class="day-exercise-sets">2×15</span></div>
            <div class="day-exercise"><span class="day-exercise-name">Romanian Deadlift (RDL)</span><span class="day-exercise-sets">3×10</span></div>
            <div class="day-exercise"><span class="day-exercise-name">Leg Extension</span><span class="day-exercise-sets">3×20</span></div>
            <div class="day-exercise"><span class="day-exercise-name">Leg Curl</span><span class="day-exercise-sets">3×15-20</span></div>
            <div class="day-exercise"><span class="day-exercise-name">Weighted Calf Raise</span><span class="day-exercise-sets">3×15-20</span></div>
          </div>
        </div>

        <!-- Day 4 -->
        <div class="day-card reveal">
          <div class="day-card-header" onclick="this.parentElement.classList.toggle('expanded')">
            <div style="display:flex;align-items:center;gap:var(--space-sm);">
              <span class="day-badge">DAY 4</span>
              <span class="day-title">Chest + Back <small style="color:var(--text-muted);">(Repeat Day 1)</small></span>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
          <div class="day-card-body">
            <div class="day-exercise"><span class="day-exercise-name">Same as Day 1</span><span class="day-exercise-sets">—</span></div>
            <p style="font-size:0.85rem;color:var(--text-muted);padding:var(--space-sm) 0;">Repeat Day 1 exercises. Focus on progressive overload — add 1-2 reps or slight weight increase.</p>
          </div>
        </div>

        <!-- Day 5 -->
        <div class="day-card reveal">
          <div class="day-card-header" onclick="this.parentElement.classList.toggle('expanded')">
            <div style="display:flex;align-items:center;gap:var(--space-sm);">
              <span class="day-badge">DAY 5</span>
              <span class="day-title">Shoulders + Arms <small style="color:var(--text-muted);">(Repeat Day 2)</small></span>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
          <div class="day-card-body">
            <div class="day-exercise"><span class="day-exercise-name">Same as Day 2</span><span class="day-exercise-sets">—</span></div>
            <p style="font-size:0.85rem;color:var(--text-muted);padding:var(--space-sm) 0;">Repeat Day 2 exercises. Focus on mind-muscle connection and controlled negatives.</p>
          </div>
        </div>

        <!-- ABS CIRCUIT -->
        <h2 class="reveal section-heading" style="margin-top: var(--space-xl);">🦍 Abs Circuit</h2>
        <p class="reveal" style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: var(--space-md); text-align:center;">Add these exercises every alternate day at the end of your workout.</p>

        <div class="card card-accent reveal" style="margin-bottom: var(--space-md);">
          <div style="display:flex;flex-direction:column;gap:var(--space-sm);">
            <div class="day-exercise" style="border-color: rgba(170,255,0,0.2);">
              <span><strong>1️⃣</strong> Lying Leg Raise</span><span class="day-exercise-sets">3-4×15</span>
            </div>
            <div class="day-exercise" style="border-color: rgba(170,255,0,0.2);">
              <span><strong>2️⃣</strong> Reverse Crunch</span><span class="day-exercise-sets">3-4×15</span>
            </div>
            <div class="day-exercise" style="border-color: rgba(170,255,0,0.2);">
              <span><strong>3️⃣</strong> Lying Toe Touch</span><span class="day-exercise-sets">3-4×20</span>
            </div>
            <div class="day-exercise" style="border-color: rgba(170,255,0,0.2);">
              <span><strong>4️⃣</strong> Dead Bug</span><span class="day-exercise-sets">3-4×12/side</span>
            </div>
            <div class="day-exercise" style="border-color: rgba(170,255,0,0.2);">
              <span><strong>5️⃣</strong> Flutter Kicks</span><span class="day-exercise-sets">3-4×30sec</span>
            </div>
            <div class="day-exercise" style="border: none;">
              <span><strong>🔥</strong> Plank Hold (Finisher)</span><span class="day-exercise-sets">3×30-45sec</span>
            </div>
          </div>
        </div>

        <!-- SUPPLEMENTS -->
        <h2 class="reveal section-heading" style="margin-top: var(--space-xl);">💊 Supplements</h2>
        <div class="supplement-card reveal">
          <h3 style="margin-bottom: var(--space-md); color: #fff;">CREATINE MONOHYDRATE</h3>
          <div class="meal-items" style="margin-bottom: var(--space-md);">
            <div class="meal-item" style="color: #fff;">
              <span>Dosage</span><span style="color: #FFE66D; font-weight: 700;">5g daily</span>
            </div>
            <div class="meal-item" style="color: #fff;">
              <span>Timing</span><span style="color: #FFE66D; font-weight: 700;">Any time with water</span>
            </div>
            <div class="meal-item" style="color: #fff; border: none;">
              <span>Loading Phase?</span><span style="color: #FFE66D; font-weight: 700;">Not needed</span>
            </div>
          </div>
          <p style="color: #fff; font-size:0.85rem;">The most researched supplement. Increases strength, muscle volume, and recovery. Take every day consistently.</p>
        </div>

        <!-- SKINCARE -->
        <h2 class="reveal section-heading" style="margin-top: var(--space-xl);">☀️ Face & Skin Routine</h2>

        <!-- Morning Routine -->
        <div class="skincare-card reveal" style="margin-bottom: var(--space-md);">
          <h3 style="margin-bottom: var(--space-md);">☀️ Morning Routine</h3>
          <div style="display:flex;flex-direction:column;gap:var(--space-xs);">
            <div style="display:flex;justify-content:space-between;padding:var(--space-sm) 0;border-bottom:1px solid rgba(0,0,0,0.15);">
              <span style="font-weight:600; font-size:0.9rem;">Cleanser</span>
              <span style="font-size:0.8rem;">Himalaya Neem / Cetaphil</span>
            </div>
            <div style="display:flex;justify-content:space-between;padding:var(--space-sm) 0;border-bottom:1px solid rgba(0,0,0,0.15);">
              <span style="font-weight:600; font-size:0.9rem;">Vitamin C Serum</span>
              <span style="font-size:0.8rem;">Minimalist 10% / Dot & Key</span>
            </div>
            <div style="display:flex;justify-content:space-between;padding:var(--space-sm) 0;">
              <span style="font-weight:600; font-size:0.9rem;">Sunscreen SPF 50+</span>
              <span style="font-size:0.8rem;">Lakme Sun Expert / Minimalist 60</span>
            </div>
          </div>
        </div>

        <!-- Night Routine -->
        <div class="card reveal" style="background: linear-gradient(135deg, #667eea, #764ba2); color: #fff; margin-bottom: var(--space-md);">
          <h3 style="color: #fff; margin-bottom: var(--space-md);">🌙 Night Routine</h3>
          <div style="display:flex;flex-direction:column;gap:var(--space-xs);">
            <div style="display:flex;justify-content:space-between;padding:var(--space-sm) 0;border-bottom:1px solid rgba(255,255,255,0.15);">
              <span style="font-weight:600; font-size:0.9rem;">Cleanser</span>
              <span style="font-size:0.8rem;">Same as AM</span>
            </div>
            <div style="display:flex;justify-content:space-between;padding:var(--space-sm) 0;">
              <span style="font-weight:600; font-size:0.9rem;">Moisturizer</span>
              <span style="font-size:0.8rem;">Cetaphil / Minimalist Niacinamide 10%</span>
            </div>
          </div>
        </div>

        <!-- Skin Food Tips -->
        <div class="card reveal" style="margin-bottom: var(--space-md);">
          <h4 style="margin-bottom: var(--space-md);">🍳 Foods for Skin Glow</h4>
          <div style="display:flex;flex-wrap:wrap;gap:var(--space-sm);">
            <span class="badge badge-outline" style="font-size:0.7rem;">🥚 Eggs (Biotin)</span>
            <span class="badge badge-outline" style="font-size:0.7rem;">🐟 Fish (Omega-3)</span>
            <span class="badge badge-outline" style="font-size:0.7rem;">🥕 Carrots</span>
            <span class="badge badge-outline" style="font-size:0.7rem;">🍈 Papaya</span>
            <span class="badge badge-outline" style="font-size:0.7rem;">🍅 Tomato (Lycopene)</span>
            <span class="badge badge-outline" style="font-size:0.7rem;">🍋 Amla/Lemon (Vit C)</span>
            <span class="badge badge-outline" style="font-size:0.7rem;">🌿 Turmeric</span>
          </div>
        </div>

        <!-- Skin Quality Tips -->
        <h2 class="reveal section-heading" style="margin-top: var(--space-xl);">💧 Skin Quality Tips</h2>
        <div style="display:flex;flex-direction:column;gap:var(--space-sm);">
          <div class="card reveal">
            <h4 style="margin-bottom: var(--space-sm);">💧 3.5L Water Daily</h4>
            <p style="font-size: 0.85rem;">Non-negotiable. Water is the #1 free skincare product. Clears toxins, reduces dullness. Add lemon for Vitamin C.</p>
          </div>
          <div class="card reveal reveal-delay-1">
            <h4 style="margin-bottom: var(--space-sm);">😴 8 Hours Sleep</h4>
            <p style="font-size: 0.85rem;">Skin repairs itself between 10 PM and 2 AM. Sleeping late causes dullness, dark circles, pimples.</p>
          </div>
          <div class="card reveal reveal-delay-2">
            <h4 style="margin-bottom: var(--space-sm);">🙅 Don't Touch Your Face</h4>
            <p style="font-size: 0.85rem;">Gym equipment bacteria → hands → face = pimples. Wash hands before touching face. Change pillowcase weekly.</p>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center reveal" style="margin-top: var(--space-xl);">
          <button class="btn btn-primary btn-lg" onclick="window.navigate('exercises'); return false;">Browse Exercise Library →</button>
        </div>

        <!-- How To Use (at bottom, only on Training page) -->
        <div class="how-to-section reveal" style="margin-top: var(--space-xl);">
          <h3>📖 How to Use</h3>
          <div class="how-to-steps">
            <div class="how-to-step">
              <div class="how-to-step-num">1</div>
              <div class="how-to-step-content">
                <h4>Pick a Day</h4>
                <p>Scroll through all 5 training days. Each card represents a different muscle split.</p>
              </div>
            </div>
            <div class="how-to-step">
              <div class="how-to-step-num">2</div>
              <div class="how-to-step-content">
                <h4>Expand for Details</h4>
                <p>Tap any day card to reveal all exercises, sets/reps, and Abhi's personal notes for that session.</p>
              </div>
            </div>
            <div class="how-to-step">
              <div class="how-to-step-num">3</div>
              <div class="how-to-step-content">
                <h4>Follow Along</h4>
                <p>Use this as your daily gym guide. Check off exercises as you go through your workout.</p>
              </div>
            </div>
          </div>
          <div class="how-to-preview">
            <p class="how-to-preview-label font-accent">Expandable day cards</p>
            <svg viewBox="0 0 260 70" fill="none" style="width:100%; max-width:260px;">
              <rect x="5" y="5" width="250" height="25" rx="8" fill="#FEF08A" stroke="#1A1A1A" stroke-width="2"/>
              <rect x="12" y="9" width="16" height="16" rx="5" fill="#1A1A1A"/>
              <text x="20" y="20" text-anchor="middle" font-size="7" font-weight="900" fill="#AAFF00">M</text>
              <text x="38" y="15" font-size="6" font-weight="800" fill="#1A1A1A">MONDAY</text>
              <text x="38" y="23" font-size="5" fill="#6B6B6B">Chest & Triceps</text>
              <text x="240" y="20" font-size="10" fill="#1A1A1A">▼</text>
              <rect x="5" y="35" width="250" height="30" rx="8" fill="#93C5FD" stroke="#1A1A1A" stroke-width="2"/>
              <rect x="12" y="39" width="16" height="16" rx="5" fill="#1A1A1A"/>
              <text x="20" y="50" text-anchor="middle" font-size="7" font-weight="900" fill="#AAFF00">T</text>
              <text x="38" y="45" font-size="6" font-weight="800" fill="#1A1A1A">TUESDAY</text>
              <text x="38" y="53" font-size="5" fill="#6B6B6B">Back & Biceps</text>
              <text x="10" y="63" font-size="4" fill="#4A4A6A">  Lat Pulldown 3x12 · Incline Row 3x12 · Curls 3x10</text>
            </svg>
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
