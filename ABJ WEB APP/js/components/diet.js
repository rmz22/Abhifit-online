/*
 * ============================================
 * MEAL PLANS COMPONENT
 * ============================================
 * Veg / Non-Veg plans with macro breakdown
 * ============================================
 */

const MEAL_PLANS = {
  veg: [
    {
      time: "Breakfast",
      title: "Oats & Paneer",
      desc: "50g Oats + 100g Paneer Bhurji + 1 Apple",
      macros: { protein: "24g", carbs: "45g", fat: "20g" }
    },
    {
      time: "Lunch",
      title: "Dal & Rice",
      desc: "150g Rice + 100g Dal + 100g Curd + Salad",
      macros: { protein: "18g", carbs: "65g", fat: "8g" }
    },
    {
      time: "Pre-Workout",
      title: "Banana & Peanut Butter",
      desc: "2 Bananas + 1 tbsp Peanut Butter on whole wheat bread",
      macros: { protein: "8g", carbs: "55g", fat: "10g" }
    },
    {
      time: "Post-Workout",
      title: "Whey Protein",
      desc: "1 Scoop Whey Protein + 300ml Water",
      macros: { protein: "24g", carbs: "3g", fat: "2g" }
    },
    {
      time: "Dinner",
      title: "Soya Chunks & Roti",
      desc: "50g Soya Chunks + 2 Rotis + Mixed Veggies",
      macros: { protein: "32g", carbs: "45g", fat: "6g" }
    }
  ],
  nonveg: [
    {
      time: "Breakfast",
      title: "Eggs & Oats",
      desc: "4 Whole Eggs + 50g Oats + 1 Apple",
      macros: { protein: "28g", carbs: "40g", fat: "22g" }
    },
    {
      time: "Lunch",
      title: "Chicken & Rice",
      desc: "150g Chicken Breast + 150g White Rice + Salad",
      macros: { protein: "45g", carbs: "45g", fat: "5g" }
    },
    {
      time: "Pre-Workout",
      title: "Banana & Coffee",
      desc: "2 Bananas + Black Coffee",
      macros: { protein: "2g", carbs: "50g", fat: "0g" }
    },
    {
      time: "Post-Workout",
      title: "Whey Protein",
      desc: "1 Scoop Whey Protein + 300ml Water",
      macros: { protein: "24g", carbs: "3g", fat: "2g" }
    },
    {
      time: "Dinner",
      title: "Fish & Veggies",
      desc: "150g White Fish + 2 Rotis + Broccoli/Carrots",
      macros: { protein: "35g", carbs: "35g", fat: "8g" }
    }
  ]
};

const PLAN_TOTALS = {
  veg: { cal: "2200", protein: "106g", carbs: "213g", fat: "46g" },
  nonveg: { cal: "2150", protein: "134g", carbs: "173g", fat: "37g" }
};

window.MealPlans = {
  currentPlan: 'nonveg',

  init() {
    this.renderPlan();
  },

  setPlan(type) {
    this.currentPlan = type;
    document.querySelectorAll('#planToggle .toggle-pill').forEach((p, i) => {
      p.classList.toggle('active', (i === 0 && type === 'veg') || (i === 1 && type === 'nonveg'));
    });
    this.renderPlan();
  },

  renderPlan() {
    const list = document.getElementById('mealList');
    if (!list) return;

    const meals = MEAL_PLANS[this.currentPlan];
    const totals = PLAN_TOTALS[this.currentPlan];

    // Update Totals
    document.getElementById('totalCal').textContent = totals.cal;
    document.getElementById('totalPro').textContent = totals.protein;
    document.getElementById('totalCarb').textContent = totals.carbs;
    document.getElementById('totalFat').textContent = totals.fat;

    // Update Donut Chart
    const proVal = parseInt(totals.protein);
    const carbVal = parseInt(totals.carbs);
    const fatVal = parseInt(totals.fat);
    const totalMac = proVal + carbVal + fatVal;
    
    const proPct = (proVal / totalMac) * 100;
    const carbPct = (carbVal / totalMac) * 100;
    const fatPct = (fatVal / totalMac) * 100;

    // Calculate stroke-dasharray for SVG (circumference is roughly 283 for r=45)
    const C = 2 * Math.PI * 45;
    document.getElementById('donutPro').style.strokeDasharray = `${(proPct/100)*C} ${C}`;
    document.getElementById('donutPro').style.strokeDashoffset = "0";

    document.getElementById('donutCarb').style.strokeDasharray = `${(carbPct/100)*C} ${C}`;
    document.getElementById('donutCarb').style.strokeDashoffset = `-${(proPct/100)*C}`;

    document.getElementById('donutFat').style.strokeDasharray = `${(fatPct/100)*C} ${C}`;
    document.getElementById('donutFat').style.strokeDashoffset = `-${((proPct+carbPct)/100)*C}`;


    // Render Meals
    list.innerHTML = meals.map((meal, i) => `
      <div class="card reveal ${i < 4 ? 'reveal-delay-' + (i+1) : ''}" style="margin-bottom: var(--space-md);">
        <span class="badge" style="background:var(--bg-secondary); margin-bottom:var(--space-sm);">${meal.time}</span>
        <h4 style="font-size: 1.1rem; margin-bottom: 4px;">${meal.title}</h4>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: var(--space-md);">${meal.desc}</p>
        
        <div style="display:flex; gap:var(--space-sm); border-top: 2px dashed rgba(0,0,0,0.1); padding-top: var(--space-sm);">
          <span class="badge badge-outline" style="border-color:#F9A8D4; color:#D946EF;">P: ${meal.macros.protein}</span>
          <span class="badge badge-outline" style="border-color:#93C5FD; color:#3B82F6;">C: ${meal.macros.carbs}</span>
          <span class="badge badge-outline" style="border-color:#FEF08A; color:#CA8A04;">F: ${meal.macros.fat}</span>
        </div>
      </div>
    `).join('');

    if (window.initReveal) window.initReveal();
  }
};

window.renderDiet = function(C) {
  return `
    <section class="page-header">
      <div class="page-header-bg" style="background: var(--pastel-yellow);"></div>
      <span class="badge badge-accent reveal">🥗 NUTRITION</span>
      <h1 class="reveal reveal-delay-1">MEAL<br><span class="text-gradient">PLANS</span></h1>
      <p class="reveal reveal-delay-2">High protein meal plans for building muscle. Switch between Veg and Non-Veg.</p>
    </section>



    <section class="section">
      <div class="container" style="max-width: 600px;">

        <!-- Toggle -->
        <div class="toggle-pills reveal" id="planToggle" style="margin-bottom: var(--space-xl);">
          <div class="toggle-pill" onclick="window.MealPlans.setPlan('veg')">🥬 Vegetarian</div>
          <div class="toggle-pill active" onclick="window.MealPlans.setPlan('nonveg')">🍗 Non-Vegetarian</div>
        </div>

        <!-- Daily Totals Board -->
        <div class="result-board reveal" style="margin-bottom: var(--space-xl);">
          <div class="result-board-header">
            <span style="font-size: 1.5rem;">📊</span>
            <h3 style="margin: 0;">Daily Totals</h3>
          </div>
          
          <div style="display: flex; gap: var(--space-md); align-items: center; justify-content: space-between;">
            
            <!-- Donut Chart -->
            <div class="donut-chart-container" style="width: 100px; height: 100px; flex-shrink: 0;">
              <svg viewBox="0 0 100 100" style="transform: rotate(-90deg); width: 100%; height: 100%;">
                <circle cx="50" cy="50" r="45" fill="none" stroke="var(--bg-secondary)" stroke-width="10"/>
                <!-- Protein (Pink) -->
                <circle id="donutPro" cx="50" cy="50" r="45" fill="none" stroke="#F9A8D4" stroke-width="10" stroke-dasharray="100 283" stroke-dashoffset="0" style="transition: stroke-dasharray 0.5s ease;"/>
                <!-- Carbs (Blue) -->
                <circle id="donutCarb" cx="50" cy="50" r="45" fill="none" stroke="#93C5FD" stroke-width="10" stroke-dasharray="120 283" stroke-dashoffset="-100" style="transition: stroke-dasharray 0.5s ease, stroke-dashoffset 0.5s ease;"/>
                <!-- Fat (Yellow) -->
                <circle id="donutFat" cx="50" cy="50" r="45" fill="none" stroke="#FEF08A" stroke-width="10" stroke-dasharray="63 283" stroke-dashoffset="-220" style="transition: stroke-dasharray 0.5s ease, stroke-dashoffset 0.5s ease;"/>
              </svg>
              <div class="donut-center">
                <span style="font-size: 0.6rem; color: var(--text-muted); font-weight: 700;">KCAL</span>
                <span id="totalCal" style="font-family: var(--font-heading); font-size: 1.1rem; font-weight: 800; line-height: 1;">2150</span>
              </div>
            </div>

            <!-- Macros List -->
            <div style="flex: 1;">
              <div class="result-row">
                <div style="display:flex; align-items:center; gap:6px;">
                  <div style="width:10px; height:10px; border-radius:50%; background:#F9A8D4; border:1px solid #1A1A1A;"></div>
                  <span class="result-label">Protein</span>
                </div>
                <span class="result-value" id="totalPro">134g</span>
              </div>
              <div class="result-row">
                <div style="display:flex; align-items:center; gap:6px;">
                  <div style="width:10px; height:10px; border-radius:50%; background:#93C5FD; border:1px solid #1A1A1A;"></div>
                  <span class="result-label">Carbs</span>
                </div>
                <span class="result-value" id="totalCarb">173g</span>
              </div>
              <div class="result-row">
                <div style="display:flex; align-items:center; gap:6px;">
                  <div style="width:10px; height:10px; border-radius:50%; background:#FEF08A; border:1px solid #1A1A1A;"></div>
                  <span class="result-label">Fats</span>
                </div>
                <span class="result-value" id="totalFat">37g</span>
              </div>
            </div>

          </div>
        </div>

        <!-- Meals List -->
        <h3 class="reveal" style="margin-bottom: var(--space-md);">Meal Schedule</h3>
        <div id="mealList"></div>

      </div>
    </section>

    <footer class="footer">
      <div class="footer-logo">${C.siteTitle}</div>
      <p class="footer-copy">${C.footerText}</p>
    </footer>
  `;
};
