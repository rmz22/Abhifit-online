/*
 * ============================================
 * SKINCARE COMPONENT
 * ============================================
 * Daily skincare and grooming routine
 * ============================================
 */

window.renderSkincare = function(C) {
  return `
    <section class="section">
      <div class="container">
        <p class="section-label font-accent reveal">${C.skincareTitle}</p>
        <h2 class="section-title reveal reveal-delay-1">DAILY ROUTINE</h2>
        <p class="section-subtitle reveal reveal-delay-2">${C.skincareSubtitle}</p>

        <div style="margin-top:var(--space-2xl);display:flex;flex-direction:column;gap:var(--space-md);">
          <div class="skincare-card reveal">
            <h3 style="margin-bottom:var(--space-md);">☀️ MORNING ROUTINE</h3>
            <div style="display:flex;flex-direction:column;gap:var(--space-md);">
              <div style="display:flex;gap:var(--space-md);align-items:flex-start;">
                <span class="badge badge-accent">1</span>
                <div><h4>Face Wash</h4><p>Use a gentle cleanser to remove overnight oil buildup.</p></div>
              </div>
              <div style="display:flex;gap:var(--space-md);align-items:flex-start;">
                <span class="badge badge-accent">2</span>
                <div><h4>Moisturizer</h4><p>Apply a lightweight SPF-infused moisturizer.</p></div>
              </div>
              <div style="display:flex;gap:var(--space-md);align-items:flex-start;">
                <span class="badge badge-accent">3</span>
                <div><h4>Sunscreen</h4><p>SPF 50+ sunscreen — non-negotiable, even on cloudy days.</p></div>
              </div>
            </div>
          </div>

          <div class="card reveal" style="background:var(--pastel-lavender);">
            <h3 style="margin-bottom:var(--space-md);">🌙 NIGHT ROUTINE</h3>
            <div style="display:flex;flex-direction:column;gap:var(--space-md);">
              <div style="display:flex;gap:var(--space-md);align-items:flex-start;">
                <span class="badge badge-dark">1</span>
                <div><h4>Double Cleanse</h4><p>Oil-based cleanser first, then water-based cleanser.</p></div>
              </div>
              <div style="display:flex;gap:var(--space-md);align-items:flex-start;">
                <span class="badge badge-dark">2</span>
                <div><h4>Serum</h4><p>Niacinamide or Vitamin C serum for brightness.</p></div>
              </div>
              <div style="display:flex;gap:var(--space-md);align-items:flex-start;">
                <span class="badge badge-dark">3</span>
                <div><h4>Night Cream</h4><p>Heavier moisturizer for overnight repair.</p></div>
              </div>
            </div>
          </div>

          <div class="supplement-card reveal">
            <h3 style="margin-bottom:var(--space-md);">💊 SUPPLEMENTS</h3>
            <div style="display:flex;flex-direction:column;gap:var(--space-sm);">
              <div class="day-exercise"><span class="day-exercise-name">Whey Protein</span><span class="day-exercise-sets">1 scoop/day</span></div>
              <div class="day-exercise"><span class="day-exercise-name">Creatine Monohydrate</span><span class="day-exercise-sets">5g/day</span></div>
              <div class="day-exercise"><span class="day-exercise-name">Multivitamin</span><span class="day-exercise-sets">1 tab/day</span></div>
              <div class="day-exercise"><span class="day-exercise-name">Fish Oil (Omega-3)</span><span class="day-exercise-sets">1 cap/day</span></div>
            </div>
          </div>

          <div class="card reveal" style="background:var(--pastel-mint);">
            <h3 style="margin-bottom:var(--space-md);">🧘 HEALTHY HABITS</h3>
            <div style="display:flex;flex-direction:column;gap:var(--space-sm);">
              <p>• Sleep 7-8 hours every night</p>
              <p>• Drink 3+ liters of water daily</p>
              <p>• Avoid processed sugar</p>
              <p>• Change pillow covers weekly</p>
              <p>• Never touch your face with dirty hands</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <p class="footer-copy">${C.footerText}</p>
    </footer>
  `;
};
