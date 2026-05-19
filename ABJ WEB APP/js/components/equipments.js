/*
 * ============================================
 * EQUIPMENTS GUIDE COMPONENT
 * ============================================
 * Gym machines and accessories
 * ============================================
 */

window.renderEquipments = function(C) {
  return `
    <section class="page-header">
      <div class="page-header-bg" style="background: var(--pastel-peach);"></div>
      <span class="badge badge-accent reveal">🏋️ GEAR UP</span>
      <h1 class="reveal reveal-delay-1">GYM<br>EQUIPMENT</h1>
      <p class="reveal reveal-delay-2">Everything you need to know about gym machines, accessories, and fitness gear.</p>
    </section>



    <!-- ===== MACHINES ===== -->
    <section class="section">
      <div class="container">
        <span class="badge badge-dark reveal" style="margin-bottom: var(--space-md);">🔧 MACHINES</span>
        <h2 class="reveal reveal-delay-1">GYM MACHINES</h2>
        <p class="reveal reveal-delay-2" style="margin-bottom: var(--space-2xl);">Master every machine in the gym.</p>

        <div class="equip-grid">
          <!-- Flat Bench -->
          <div class="equip-card reveal">
            <svg viewBox="0 0 160 80" fill="none">
              <rect x="20" y="45" width="120" height="10" rx="4" fill="#1A1A1A"/>
              <rect x="20" y="20" width="120" height="25" rx="6" fill="#4A4A6A" stroke="#1A1A1A" stroke-width="2"/>
              <line x1="30" y1="55" x2="30" y2="72" stroke="#1A1A1A" stroke-width="4" stroke-linecap="round"/>
              <line x1="130" y1="55" x2="130" y2="72" stroke="#1A1A1A" stroke-width="4" stroke-linecap="round"/>
            </svg>
            <span class="equip-card-label">Flat Bench</span>
            <p class="equip-card-desc">Essential for bench press, dumbbell fly, and seated exercises.</p>
          </div>

          <!-- Adjustable Bench -->
          <div class="equip-card reveal reveal-delay-1">
            <svg viewBox="0 0 160 80" fill="none">
              <rect x="30" y="50" width="100" height="8" rx="3" fill="#3A3A5A" stroke="#1A1A1A" stroke-width="2"/>
              <rect x="40" y="18" width="60" height="32" rx="4" fill="#4A4A6A" stroke="#1A1A1A" stroke-width="2" transform="rotate(-15 70 34)"/>
              <circle cx="95" cy="28" r="5" fill="#AAFF00" stroke="#1A1A1A" stroke-width="2"/>
              <line x1="30" y1="58" x2="30" y2="72" stroke="#1A1A1A" stroke-width="3" stroke-linecap="round"/>
              <line x1="130" y1="58" x2="130" y2="72" stroke="#1A1A1A" stroke-width="3" stroke-linecap="round"/>
              <text x="130" y="22" font-size="7" fill="#6B6B6B" font-weight="700">0°-85°</text>
            </svg>
            <span class="equip-card-label">Adjustable Bench</span>
            <p class="equip-card-desc">Set angle for incline/decline press. Great for chest and shoulder isolation.</p>
          </div>

          <!-- Cable Machine -->
          <div class="equip-card reveal reveal-delay-2">
            <svg viewBox="0 0 160 90" fill="none">
              <rect x="20" y="5" width="8" height="80" rx="2" fill="#4A4A6A" stroke="#1A1A1A" stroke-width="2"/>
              <rect x="132" y="5" width="8" height="80" rx="2" fill="#4A4A6A" stroke="#1A1A1A" stroke-width="2"/>
              <line x1="24" y1="10" x2="136" y2="10" stroke="#1A1A1A" stroke-width="3"/>
              <rect x="55" y="15" width="50" height="40" rx="3" fill="#3A3A5A" stroke="#1A1A1A" stroke-width="1.5"/>
              <rect x="60" y="20" width="40" height="6" rx="2" fill="#4A4A6A"/>
              <rect x="60" y="30" width="40" height="6" rx="2" fill="#4A4A6A"/>
              <rect x="60" y="40" width="40" height="6" rx="2" fill="#AAFF00" opacity="0.5"/>
              <line x1="80" y1="55" x2="80" y2="78" stroke="#AAFF00" stroke-width="2" stroke-dasharray="3 2"/>
              <rect x="70" y="74" width="20" height="6" rx="2" fill="#AAFF00" stroke="#1A1A1A" stroke-width="1.5"/>
            </svg>
            <span class="equip-card-label">Cable Machine</span>
            <p class="equip-card-desc">Most versatile machine. Use for cables, tricep pushdowns, face pulls, woodchops.</p>
          </div>

          <!-- Leg Press -->
          <div class="equip-card reveal reveal-delay-3">
            <svg viewBox="0 0 160 80" fill="none">
              <rect x="10" y="55" width="140" height="8" rx="3" fill="#3A3A5A" stroke="#1A1A1A" stroke-width="2"/>
              <rect x="100" y="15" width="40" height="40" rx="5" fill="#4A4A6A" stroke="#1A1A1A" stroke-width="2"/>
              <rect x="20" y="30" width="80" height="15" rx="4" fill="#4A4A6A" stroke="#1A1A1A" stroke-width="2"/>
              <circle cx="30" cy="55" r="8" fill="#3A3A5A" stroke="#1A1A1A" stroke-width="2"/>
              <circle cx="130" cy="55" r="8" fill="#3A3A5A" stroke="#1A1A1A" stroke-width="2"/>
              <circle cx="120" cy="35" r="5" fill="#AAFF00" stroke="#1A1A1A" stroke-width="2"/>
            </svg>
            <span class="equip-card-label">Leg Press</span>
            <p class="equip-card-desc">Heavy compound leg movement. Great for quads and glutes without spinal load.</p>
          </div>

          <!-- Lat Pulldown -->
          <div class="equip-card reveal">
            <svg viewBox="0 0 160 90" fill="none">
              <rect x="70" y="5" width="20" height="80" rx="3" fill="#4A4A6A" stroke="#1A1A1A" stroke-width="2"/>
              <rect x="30" y="15" width="100" height="8" rx="3" fill="#3A3A5A" stroke="#1A1A1A" stroke-width="2"/>
              <line x1="35" y1="23" x2="35" y2="40" stroke="#AAFF00" stroke-width="2"/>
              <line x1="125" y1="23" x2="125" y2="40" stroke="#AAFF00" stroke-width="2"/>
              <rect x="25" y="38" width="20" height="6" rx="2" fill="#AAFF00" stroke="#1A1A1A" stroke-width="1.5"/>
              <rect x="115" y="38" width="20" height="6" rx="2" fill="#AAFF00" stroke="#1A1A1A" stroke-width="1.5"/>
              <rect x="55" y="60" width="50" height="20" rx="5" fill="#3A3A5A" stroke="#1A1A1A" stroke-width="2"/>
            </svg>
            <span class="equip-card-label">Lat Pulldown</span>
            <p class="equip-card-desc">Targets lats and back. Use wide grip for width, close grip for thickness.</p>
          </div>

          <!-- Smith Machine -->
          <div class="equip-card reveal reveal-delay-1">
            <svg viewBox="0 0 160 90" fill="none">
              <rect x="25" y="5" width="8" height="80" rx="2" fill="#4A4A6A" stroke="#1A1A1A" stroke-width="2"/>
              <rect x="127" y="5" width="8" height="80" rx="2" fill="#4A4A6A" stroke="#1A1A1A" stroke-width="2"/>
              <rect x="33" y="40" width="94" height="8" rx="3" fill="#AAFF00" stroke="#1A1A1A" stroke-width="2"/>
              <circle cx="33" cy="44" r="4" fill="#1A1A1A"/>
              <circle cx="127" cy="44" r="4" fill="#1A1A1A"/>
              <rect x="15" y="42" width="10" height="20" rx="3" fill="#3A3A5A" stroke="#1A1A1A" stroke-width="1.5"/>
              <rect x="135" y="42" width="10" height="20" rx="3" fill="#3A3A5A" stroke="#1A1A1A" stroke-width="1.5"/>
            </svg>
            <span class="equip-card-label">Smith Machine</span>
            <p class="equip-card-desc">Guided barbell. Great for squats, bench press, and shoulder press with stability.</p>
          </div>

          <!-- Treadmill -->
          <div class="equip-card reveal reveal-delay-2">
            <svg viewBox="0 0 160 90" fill="none">
              <rect x="20" y="50" width="120" height="25" rx="8" fill="#4A4A6A" stroke="#1A1A1A" stroke-width="2"/>
              <rect x="25" y="55" width="110" height="15" rx="5" fill="#3A3A5A"/>
              <line x1="25" y1="62" x2="135" y2="62" stroke="#AAFF00" stroke-width="1" stroke-dasharray="4 2"/>
              <rect x="25" y="10" width="30" height="40" rx="4" fill="#3A3A5A" stroke="#1A1A1A" stroke-width="2"/>
              <line x1="25" y1="50" x2="25" y2="10" stroke="#1A1A1A" stroke-width="3"/>
              <line x1="55" y1="50" x2="55" y2="10" stroke="#1A1A1A" stroke-width="3"/>
              <rect x="30" y="15" width="20" height="12" rx="3" fill="#AAFF00" stroke="#1A1A1A" stroke-width="1"/>
            </svg>
            <span class="equip-card-label">Treadmill</span>
            <p class="equip-card-desc">Cardio essential. Warm up before lifting or do HIIT intervals for fat burn.</p>
          </div>

          <!-- Pec Deck -->
          <div class="equip-card reveal reveal-delay-3">
            <svg viewBox="0 0 160 90" fill="none">
              <rect x="65" y="10" width="30" height="70" rx="5" fill="#4A4A6A" stroke="#1A1A1A" stroke-width="2"/>
              <path d="M65 30 Q40 20 30 35" stroke="#AAFF00" stroke-width="3" fill="none" stroke-linecap="round"/>
              <path d="M95 30 Q120 20 130 35" stroke="#AAFF00" stroke-width="3" fill="none" stroke-linecap="round"/>
              <rect x="20" y="30" width="15" height="30" rx="4" fill="#3A3A5A" stroke="#1A1A1A" stroke-width="2"/>
              <rect x="125" y="30" width="15" height="30" rx="4" fill="#3A3A5A" stroke="#1A1A1A" stroke-width="2"/>
              <rect x="70" y="55" width="20" height="20" rx="5" fill="#3A3A5A" stroke="#1A1A1A" stroke-width="2"/>
            </svg>
            <span class="equip-card-label">Pec Deck</span>
            <p class="equip-card-desc">Isolation for chest. Focus on squeezing at the peak for maximum contraction.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== ACCESSORIES ===== -->
    <section class="section-colored" style="background: var(--pastel-yellow);">
      <div class="container">
        <span class="badge badge-pink reveal" style="margin-bottom: var(--space-md);">👟 ACCESSORIES</span>
        <h2 class="reveal reveal-delay-1">FITNESS GEAR<br>& ACCESSORIES</h2>
        <p class="reveal reveal-delay-2" style="margin-bottom: var(--space-2xl);">Essential items that help your fitness journey.</p>

        <div class="equip-grid">
          <!-- Training Shoes -->
          <div class="equip-card reveal" style="background: var(--card-bg);">
            <svg viewBox="0 0 120 70" fill="none">
              <path d="M15 50 Q15 35 30 30 L80 25 Q100 25 105 35 L110 50 Z" fill="#4A4A6A" stroke="#1A1A1A" stroke-width="2"/>
              <rect x="10" y="48" width="105" height="8" rx="3" fill="#1A1A1A"/>
              <circle cx="40" cy="38" r="3" fill="#AAFF00"/>
              <circle cx="55" cy="35" r="3" fill="#AAFF00"/>
              <circle cx="70" cy="33" r="3" fill="#AAFF00"/>
              <path d="M85 28 Q95 22 100 30" stroke="#AAFF00" stroke-width="2" fill="none"/>
            </svg>
            <span class="equip-card-label">Training Shoes</span>
            <p class="equip-card-desc">Flat sole shoes for lifting (deadlifts, squats). Running shoes for cardio. Never lift in soft soles!</p>
          </div>

          <!-- Water Bottle -->
          <div class="equip-card reveal reveal-delay-1" style="background: var(--card-bg);">
            <svg viewBox="0 0 80 90" fill="none">
              <rect x="25" y="5" width="30" height="12" rx="4" fill="#3A3A5A" stroke="#1A1A1A" stroke-width="2"/>
              <rect x="20" y="17" width="40" height="60" rx="8" fill="#93C5FD" stroke="#1A1A1A" stroke-width="2"/>
              <rect x="20" y="40" width="40" height="37" rx="8" fill="#3B82F6" stroke="#1A1A1A" stroke-width="2"/>
              <text x="40" y="60" text-anchor="middle" font-size="10" font-weight="800" fill="#FFFFFF">H₂O</text>
              <line x1="28" y1="30" x2="52" y2="30" stroke="#FFFFFF" stroke-width="1" opacity="0.5"/>
            </svg>
            <span class="equip-card-label">Water Bottle</span>
            <p class="equip-card-desc">Stay hydrated! Aim for 3L+ daily. Get a 1L bottle and refill 3x. Use the Hydration Tracker!</p>
          </div>

          <!-- Gym Towel -->
          <div class="equip-card reveal reveal-delay-2" style="background: var(--card-bg);">
            <svg viewBox="0 0 120 70" fill="none">
              <rect x="10" y="15" width="100" height="40" rx="6" fill="#F9A8D4" stroke="#1A1A1A" stroke-width="2"/>
              <line x1="30" y1="15" x2="30" y2="55" stroke="#FFFFFF" stroke-width="2" opacity="0.4"/>
              <line x1="50" y1="15" x2="50" y2="55" stroke="#FFFFFF" stroke-width="2" opacity="0.4"/>
              <line x1="70" y1="15" x2="70" y2="55" stroke="#FFFFFF" stroke-width="2" opacity="0.4"/>
              <line x1="90" y1="15" x2="90" y2="55" stroke="#FFFFFF" stroke-width="2" opacity="0.4"/>
              <path d="M10 55 Q10 65 20 65 L100 65 Q110 65 110 55" fill="#E879A0" stroke="#1A1A1A" stroke-width="2"/>
            </svg>
            <span class="equip-card-label">Gym Towel</span>
            <p class="equip-card-desc">Always carry one. Wipe machines after use. Keep a small one for face and large for bench.</p>
          </div>

          <!-- Supplements -->
          <div class="equip-card reveal reveal-delay-3" style="background: var(--card-bg);">
            <svg viewBox="0 0 100 80" fill="none">
              <rect x="20" y="10" width="60" height="55" rx="8" fill="#FEF08A" stroke="#1A1A1A" stroke-width="2"/>
              <rect x="30" y="5" width="40" height="12" rx="4" fill="#1A1A1A"/>
              <text x="50" y="40" text-anchor="middle" font-size="9" font-weight="900" fill="#1A1A1A">WHEY</text>
              <text x="50" y="52" text-anchor="middle" font-size="6" fill="#6B6B6B">PROTEIN</text>
              <rect x="35" y="56" width="30" height="6" rx="2" fill="#AAFF00" stroke="#1A1A1A" stroke-width="1"/>
            </svg>
            <span class="equip-card-label">Supplements</span>
            <p class="equip-card-desc">Whey protein post-workout, creatine 5g daily, multivitamins. Food first, supplements second!</p>
          </div>

          <!-- Gym Gloves -->
          <div class="equip-card reveal" style="background: var(--card-bg);">
            <svg viewBox="0 0 100 80" fill="none">
              <path d="M25 60 L25 30 Q25 20 35 20 L40 20 L40 15 Q40 10 45 10 L50 10 Q55 10 55 15 L55 12 Q55 7 60 7 L63 7 Q68 7 68 12 L68 18 Q68 13 73 13 L75 13 Q80 13 80 18 L80 60 Q80 70 70 70 L35 70 Q25 70 25 60 Z" fill="#4A4A6A" stroke="#1A1A1A" stroke-width="2"/>
              <line x1="40" y1="25" x2="40" y2="50" stroke="#1A1A1A" stroke-width="1.5" opacity="0.3"/>
              <line x1="55" y1="20" x2="55" y2="50" stroke="#1A1A1A" stroke-width="1.5" opacity="0.3"/>
              <line x1="68" y1="22" x2="68" y2="50" stroke="#1A1A1A" stroke-width="1.5" opacity="0.3"/>
              <rect x="25" y="50" width="55" height="8" rx="3" fill="#AAFF00" stroke="#1A1A1A" stroke-width="1.5"/>
            </svg>
            <span class="equip-card-label">Gym Gloves</span>
            <p class="equip-card-desc">Protect palms during heavy lifting. Use wrist wraps for extra support on push days.</p>
          </div>

          <!-- Lifting Belt -->
          <div class="equip-card reveal reveal-delay-1" style="background: var(--card-bg);">
            <svg viewBox="0 0 140 60" fill="none">
              <path d="M10 30 Q10 15 30 15 L110 15 Q130 15 130 30 Q130 45 110 45 L30 45 Q10 45 10 30 Z" fill="#4A4A6A" stroke="#1A1A1A" stroke-width="2"/>
              <rect x="55" y="18" width="30" height="24" rx="4" fill="#3A3A5A" stroke="#1A1A1A" stroke-width="2"/>
              <circle cx="65" cy="30" r="3" fill="#AAFF00" stroke="#1A1A1A" stroke-width="1"/>
              <circle cx="75" cy="30" r="3" fill="none" stroke="#AAFF00" stroke-width="1"/>
              <line x1="85" y1="25" x2="120" y2="25" stroke="#1A1A1A" stroke-width="1.5" opacity="0.3"/>
              <line x1="85" y1="30" x2="115" y2="30" stroke="#1A1A1A" stroke-width="1.5" opacity="0.3"/>
              <line x1="85" y1="35" x2="110" y2="35" stroke="#1A1A1A" stroke-width="1.5" opacity="0.3"/>
            </svg>
            <span class="equip-card-label">Lifting Belt</span>
            <p class="equip-card-desc">Use for heavy squats and deadlifts. Increases intra-abdominal pressure for spine safety.</p>
          </div>

          <!-- Resistance Bands -->
          <div class="equip-card reveal reveal-delay-2" style="background: var(--card-bg);">
            <svg viewBox="0 0 120 70" fill="none">
              <ellipse cx="60" cy="35" rx="45" ry="25" fill="none" stroke="#AAFF00" stroke-width="4"/>
              <ellipse cx="60" cy="35" rx="35" ry="18" fill="none" stroke="#F9A8D4" stroke-width="4"/>
              <ellipse cx="60" cy="35" rx="25" ry="12" fill="none" stroke="#93C5FD" stroke-width="4"/>
              <text x="60" y="62" text-anchor="middle" font-size="6" font-weight="700" fill="#6B6B6B">LIGHT → HEAVY</text>
            </svg>
            <span class="equip-card-label">Resistance Bands</span>
            <p class="equip-card-desc">Perfect for warm-ups, mobility, and adding resistance. Essential for hip thrusts and pull-up assistance.</p>
          </div>

          <!-- Gym Bag -->
          <div class="equip-card reveal reveal-delay-3" style="background: var(--card-bg);">
            <svg viewBox="0 0 120 70" fill="none">
              <rect x="15" y="20" width="90" height="40" rx="8" fill="#4A4A6A" stroke="#1A1A1A" stroke-width="2"/>
              <path d="M35 20 Q35 8 50 8 L70 8 Q85 8 85 20" fill="none" stroke="#1A1A1A" stroke-width="3"/>
              <rect x="50" y="30" width="20" height="15" rx="4" fill="#3A3A5A" stroke="#AAFF00" stroke-width="2"/>
              <line x1="15" y1="60" x2="105" y2="60" stroke="#1A1A1A" stroke-width="2"/>
              <circle cx="30" cy="62" r="4" fill="#3A3A5A" stroke="#1A1A1A" stroke-width="1.5"/>
              <circle cx="90" cy="62" r="4" fill="#3A3A5A" stroke="#1A1A1A" stroke-width="1.5"/>
            </svg>
            <span class="equip-card-label">Gym Bag</span>
            <p class="equip-card-desc">Pack: towel, bottle, gloves, belt, earphones, change of clothes, deodorant. Stay organized!</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== ABHI'S TOP PICKS ===== -->
    <section class="section">
      <div class="container">
        <h2 class="reveal">ABHI'S GYM<br>ESSENTIALS</h2>
        <p class="reveal reveal-delay-1" style="margin-bottom: var(--space-2xl);">What Abhi carries to the gym every single day.</p>

        <div style="display: flex; flex-direction: column; gap: var(--space-md);">
          <div class="card reveal" style="background: var(--pastel-pink); display: flex; align-items: center; gap: var(--space-lg);">
            <span style="font-size: 2.5rem;">👟</span>
            <div>
              <h4 style="font-size: 1.1rem; margin-bottom: 2px;">Flat Training Shoes</h4>
              <p style="font-size: 0.85rem; color: rgba(0,0,0,0.7);">Flat sole for stable lifting. Abhi uses these for all compound lifts.</p>
            </div>
          </div>
          <div class="card reveal reveal-delay-1" style="background: var(--pastel-blue); display: flex; align-items: center; gap: var(--space-lg);">
            <span style="font-size: 2.5rem;">💧</span>
            <div>
              <h4 style="font-size: 1.1rem; margin-bottom: 2px;">1L Water Bottle</h4>
              <p style="font-size: 0.85rem; color: rgba(0,0,0,0.7);">Refill 3x during the day. Track with the Hydration Tracker.</p>
            </div>
          </div>
          <div class="card reveal reveal-delay-2" style="background: var(--pastel-peach); display: flex; align-items: center; gap: var(--space-lg);">
            <span style="font-size: 2.5rem;">🧴</span>
            <div>
              <h4 style="font-size: 1.1rem; margin-bottom: 2px;">Creatine Monohydrate</h4>
              <p style="font-size: 0.85rem; color: rgba(0,0,0,0.7);">5g daily. Mix with water post-workout. The only proven supplement.</p>
            </div>
          </div>
          <div class="card reveal reveal-delay-3" style="background: var(--pastel-mint); display: flex; align-items: center; gap: var(--space-lg);">
            <span style="font-size: 2.5rem;">🎧</span>
            <div>
              <h4 style="font-size: 1.1rem; margin-bottom: 2px;">Wireless Earphones</h4>
              <p style="font-size: 0.85rem; color: rgba(0,0,0,0.7);">Music = motivation. Never skip headphones, never skip the workout.</p>
            </div>
          </div>
          <div class="card reveal reveal-delay-4" style="background: var(--pastel-lavender); display: flex; align-items: center; gap: var(--space-lg);">
            <span style="font-size: 2.5rem;">🧤</span>
            <div>
              <h4 style="font-size: 1.1rem; margin-bottom: 2px;">Lifting Gloves</h4>
              <p style="font-size: 0.85rem; color: rgba(0,0,0,0.7);">Protect your palms. Use wrist wraps on heavy push days.</p>
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
