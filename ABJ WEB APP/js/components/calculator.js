/*
 * ============================================
 * CALORIE CALCULATOR
 * ============================================
 * BMR (Mifflin-St Jeor) + TDEE + Activity Level
 * ============================================
 */

window.renderCalculator = function(C) {
  return `
    <section class="section">
      <div class="container">
        <p class="section-label font-accent reveal">${C.calcTitle}</p>
        <h2 class="section-title reveal reveal-delay-1">KNOW YOUR<br>NUMBERS</h2>
        <p class="section-subtitle reveal reveal-delay-2">${C.calcSubtitle}</p>

        <div class="card reveal" style="margin-top:var(--space-2xl);max-width:600px;margin-left:auto;margin-right:auto;">
          <!-- Gender -->
          <div class="toggle-pills" style="margin-bottom:var(--space-xl);">
            <div class="toggle-pill active" id="maleBtn" onclick="window.setGender('male')">♂ MALE</div>
            <div class="toggle-pill" id="femaleBtn" onclick="window.setGender('female')">♀ FEMALE</div>
          </div>

          <!-- Age -->
          <div class="input-group">
            <div class="input-label"><span>Age</span><span class="input-value" id="ageValue">21</span></div>
            <input type="range" id="ageSlider" min="15" max="65" value="21" oninput="document.getElementById('ageValue').textContent=this.value">
          </div>

          <!-- Height -->
          <div class="input-group">
            <div class="input-label"><span>Height (cm)</span><span class="input-value" id="heightValue">180</span></div>
            <input type="range" id="heightSlider" min="140" max="220" value="180" oninput="document.getElementById('heightValue').textContent=this.value">
          </div>

          <!-- Weight -->
          <div class="input-group">
            <div class="input-label"><span>Weight (kg)</span><span class="input-value" id="weightValue">81</span></div>
            <input type="range" id="weightSlider" min="40" max="150" value="81" oninput="document.getElementById('weightValue').textContent=this.value">
          </div>

          <!-- Activity Level -->
          <h4 style="margin-bottom:var(--space-md);">ACTIVITY LEVEL</h4>
          <div class="activity-cards" id="activityCards">
            <div class="activity-card" data-multiplier="1.2" onclick="window.selectActivity(this)">
              <div class="activity-card-emoji">🛋️</div>
              <div class="activity-card-name">Sedentary</div>
              <div class="activity-card-desc">Little/no exercise</div>
            </div>
            <div class="activity-card" data-multiplier="1.375" onclick="window.selectActivity(this)">
              <div class="activity-card-emoji">🚶</div>
              <div class="activity-card-name">Light</div>
              <div class="activity-card-desc">1-3 days/week</div>
            </div>
            <div class="activity-card active" data-multiplier="1.55" onclick="window.selectActivity(this)">
              <div class="activity-card-emoji">🏃</div>
              <div class="activity-card-name">Moderate</div>
              <div class="activity-card-desc">3-5 days/week</div>
            </div>
            <div class="activity-card" data-multiplier="1.725" onclick="window.selectActivity(this)">
              <div class="activity-card-emoji">💪</div>
              <div class="activity-card-name">Active</div>
              <div class="activity-card-desc">6-7 days/week</div>
            </div>
          </div>

          <button class="btn btn-primary" style="width:100%;margin-top:var(--space-xl);" onclick="window.calculateTDEE()">CALCULATE</button>
        </div>

        <!-- Results -->
        <div id="calcResults" style="display:none;margin-top:var(--space-xl);max-width:600px;margin-left:auto;margin-right:auto;"></div>

        <!-- External link -->
        <div class="reveal" style="text-align:center;margin-top:var(--space-xl);">
          <a href="${C.calcLink}" target="_blank" class="btn btn-outline">${C.calcLinkText}</a>
        </div>
      </div>
    </section>

    <footer class="footer">
      <p class="footer-copy">${C.footerText}</p>
    </footer>
  `;
};

let calcGender = 'male';
let calcMultiplier = 1.55;

window.initCalculator = function() {
  calcGender = 'male';
  calcMultiplier = 1.55;
};

window.setGender = function(g) {
  calcGender = g;
  document.getElementById('maleBtn').classList.toggle('active', g === 'male');
  document.getElementById('femaleBtn').classList.toggle('active', g === 'female');
};

window.selectActivity = function(el) {
  document.querySelectorAll('.activity-card').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  calcMultiplier = parseFloat(el.dataset.multiplier);
};

window.calculateTDEE = function() {
  const age = parseInt(document.getElementById('ageSlider').value);
  const height = parseInt(document.getElementById('heightSlider').value);
  const weight = parseInt(document.getElementById('weightSlider').value);

  // Mifflin-St Jeor
  let bmr;
  if (calcGender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  const tdee = Math.round(bmr * calcMultiplier);
  const bmi = (weight / ((height / 100) ** 2)).toFixed(1);

  const loseSlow = Math.round(tdee - 250);
  const loseFast = Math.round(tdee - 500);
  const gainSlow = Math.round(tdee + 250);

  const container = document.getElementById('calcResults');
  container.style.display = 'block';
  container.innerHTML = `
    <div class="result-board">
      <div class="result-board-header">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:24px;height:24px;color:var(--accent-dark);"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
        <h3>YOUR RESULTS</h3>
      </div>

      <div class="result-row">
        <span class="result-label">BMR (Base Metabolism)</span>
        <span class="result-value">${Math.round(bmr)} kcal</span>
      </div>
      <div class="result-row">
        <span class="result-label">TDEE (Daily Need)</span>
        <span class="result-value" style="font-size:1.3rem;">${tdee} kcal</span>
      </div>
      <div class="result-row">
        <span class="result-label">BMI</span>
        <span class="result-value">${bmi}</span>
      </div>
      <div class="result-row">
        <span class="result-label">Lose Weight (Slow)</span>
        <span class="result-value">${loseSlow} kcal</span>
      </div>
      <div class="result-row">
        <span class="result-label">Lose Weight (Fast)</span>
        <span class="result-value">${loseFast} kcal</span>
      </div>
      <div class="result-row">
        <span class="result-label">Gain Weight (Slow)</span>
        <span class="result-value">${gainSlow} kcal</span>
      </div>
    </div>
  `;

  container.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
