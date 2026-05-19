/*
 * ============================================
 * CONTACT COMPONENT
 * ============================================
 * Founder info, social links, and FAQ
 * ============================================
 */

window.renderContact = function(C) {
  return `
    <section class="page-header">
      <div class="page-header-bg" style="background: var(--pastel-pink);"></div>
      <span class="badge badge-accent reveal">📞 GET IN TOUCH</span>
      <h1 class="reveal reveal-delay-1">CONTACT<br><span class="text-gradient">ABHI</span></h1>
      <p class="reveal reveal-delay-2">Have a question or want to work together? Connect with me directly.</p>
    </section>

    <!-- Founder Card -->
    <section class="section" style="padding-top: 0;">
      <div class="container" style="max-width: 600px;">
        <div class="card reveal" style="padding: var(--space-xl); background: var(--card-bg); text-align: center; margin-top: -40px; position: relative; z-index: 10;">
          <div style="width: 120px; height: 120px; border-radius: 50%; border: 4px solid #1A1A1A; overflow: hidden; margin: 0 auto var(--space-md); background: #f0f0f0;">
            <img src="./assets/WhatsApp Image 2024-11-20 at 19.53.07_20de7cda.jpg" alt="Abhijit Das" style="width: 100%; height: 100%; object-fit: cover; object-position: center 20%;" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 100 100\\'><rect width=\\'100\\' height=\\'100\\' fill=\\'%23eee\\'/><circle cx=\\'50\\' cy=\\'40\\' r=\\'20\\' fill=\\'%23ccc\\'/><path d=\\'M20,90 Q50,60 80,90\\' fill=\\'%23ccc\\'/></svg>'">
          </div>
          <h2 style="margin-bottom: 4px;">Abhijit Das</h2>
          <p style="color: var(--text-muted); font-weight: 700; margin-bottom: var(--space-md);">Creator & Developer</p>
          
          <div style="display: flex; gap: var(--space-md); justify-content: center; margin-bottom: var(--space-lg);">
            <span class="badge badge-outline">AGE: 21</span>
            <span class="badge badge-outline">HEIGHT: 180cm</span>
            <span class="badge badge-outline">WEIGHT: 81kg</span>
          </div>

          <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">
            I built this app to help you crush your fitness goals with proper form, solid nutrition, and the right equipment knowledge. Professional Video Editor by day, Fitness Enthusiast by life.
          </p>
        </div>
      </div>
    </section>

    <!-- Social Links -->
    <section class="section">
      <div class="container" style="max-width: 600px;">
        <h3 class="reveal" style="margin-bottom: var(--space-md);">Connect With Me</h3>
        
        <div style="display: flex; flex-direction: column; gap: var(--space-md);">
          <!-- Instagram -->
          <a href="https://www.instagram.com/abhiiijittt05" target="_blank" class="social-card reveal" style="background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); color: white; border-color: #1A1A1A;">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <div class="social-card-info">
              <h4 style="color: white;">Instagram</h4>
              <p style="color: rgba(255,255,255,0.8);">@abhiiijittt05</p>
            </div>
          </a>

          <!-- Portfolio / Website -->
          <a href="https://www.abhijitdas.in" target="_blank" class="social-card reveal reveal-delay-1" style="background: var(--card-bg);">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <div class="social-card-info">
              <h4>Website</h4>
              <p>www.abhijitdas.in</p>
            </div>
          </a>

          <!-- Email -->
          <a href="mailto:contact@abhijitdas.in" class="social-card reveal reveal-delay-2" style="background: var(--pastel-yellow);">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <div class="social-card-info">
              <h4>Email</h4>
              <p>contact@abhijitdas.in</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section">
      <div class="container" style="max-width: 600px;">
        <h3 class="reveal" style="margin-bottom: var(--space-md);">Frequently Asked Questions</h3>
        <p class="reveal" style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: var(--space-xl);">Tap to expand answers.</p>

        <div class="faq-list">
          <div class="faq-item reveal">
            <div class="faq-header" onclick="this.parentElement.classList.toggle('expanded')">
              <h4>Is this app totally free?</h4>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
            <div class="faq-content">
              <p>Yes, 100% free! I built this to help the community. All features, plans, and exercises are available without any paywalls or subscriptions.</p>
            </div>
          </div>

          <div class="faq-item reveal reveal-delay-1">
            <div class="faq-header" onclick="this.parentElement.classList.toggle('expanded')">
              <h4>Can I use the meal plans if I'm a beginner?</h4>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
            <div class="faq-content">
              <p>Absolutely. The meal plans are structured to be simple to follow. If you need specific caloric adjustments, use the Calorie Calculator linked on the Nutrition page.</p>
            </div>
          </div>

          <div class="faq-item reveal reveal-delay-2">
            <div class="faq-header" onclick="this.parentElement.classList.toggle('expanded')">
              <h4>How often should I use the Body Map?</h4>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
            <div class="faq-content">
              <p>Use it before your workouts to plan your split, or when you feel you aren't targeting a specific muscle correctly and need new exercise variations.</p>
            </div>
          </div>

          <div class="faq-item reveal reveal-delay-3">
            <div class="faq-header" onclick="this.parentElement.classList.toggle('expanded')">
              <h4>Who made the website?</h4>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
            <div class="faq-content">
              <p>I did! I'm Abhijit Das, a 21-year-old creator. I designed and developed this as a passion project to combine my love for tech and fitness.</p>
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
