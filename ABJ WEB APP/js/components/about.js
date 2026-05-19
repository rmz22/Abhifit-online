window.renderAbout = function(C) {
  const faqsHtml = C.faqs.map((f, i) => `
    <div class="faq-item" onclick="this.classList.toggle('expanded')">
      <div class="faq-header">
        <h4>${f.q}</h4>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:20px;height:20px;flex-shrink:0;transition:transform 0.3s;"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div class="faq-body">
        <p>${f.a}</p>
      </div>
    </div>
  `).join('');

  return `
    <section class="section">
      <div class="container">
        <div class="section-colored" style="background:var(--pastel-yellow);">
          <div class="about-grid">
            <div class="about-avatar reveal">
              <img src="${C.aboutPhoto}" alt="Abhijit Das">
            </div>
            <div>
              <span class="about-tag reveal">${C.aboutTag}</span>
              <h2 class="reveal reveal-delay-1">${C.aboutTitle.replace('\n','<br>')}</h2>
              <p class="reveal reveal-delay-2">${C.aboutDesc}</p>
              <div class="about-stats-grid reveal reveal-delay-3">
                <div class="about-stat-chip"><div class="chip-value">${C.aboutHeight}</div><div class="chip-label">Height</div></div>
                <div class="about-stat-chip"><div class="chip-value">${C.aboutWeight}</div><div class="chip-label">Weight</div></div>
                <div class="about-stat-chip"><div class="chip-value">${C.aboutAge}</div><div class="chip-label">Age</div></div>
              </div>
              <a href="${C.instaLink}" target="_blank" class="btn btn-primary" style="margin-top:var(--space-lg);">Follow ${C.instaHandle}</a>
            </div>
          </div>
        </div>

        <h2 class="section-title text-center reveal" style="margin-top:var(--space-3xl);">${C.faqTitle}</h2>
        <div style="max-width:700px;margin:var(--space-2xl) auto 0;">
          ${faqsHtml}
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-logo">${C.siteTitle}</div>
      <p class="footer-copy">${C.footerText}</p>
    </footer>
  `;
};
