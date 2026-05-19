window.renderHome = function(C) {
  return `
    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg-shapes">
        <div class="shape" style="width:350px;height:350px;background:var(--pastel-yellow);top:-80px;right:-60px;animation-delay:0s;"></div>
        <div class="shape" style="width:250px;height:250px;background:var(--pastel-pink);bottom:20%;left:-40px;animation-delay:2s;"></div>
        <div class="shape" style="width:200px;height:200px;background:var(--pastel-blue);top:40%;right:10%;animation-delay:4s;"></div>
      </div>
      <div class="hero-content">
        <p class="hero-label font-accent">${C.heroAccent}</p>
        <h1>${C.heroLine1}<br>${C.heroLine2}<br><span class="text-gradient">${C.heroHighlight}</span></h1>
        <p>${C.heroDesc}</p>
        <div class="hero-cta">
          <a class="btn btn-primary" href="#" onclick="navigate('training');return false;">${C.heroCta1}</a>
          <a class="btn btn-outline" href="#" onclick="navigate('calculator');return false;">${C.heroCta2}</a>
        </div>
        <div class="hero-stats">
          <div class="hero-stat">
            <div class="hero-stat-value">${C.heroStat1Value}</div>
            <div class="hero-stat-label">${C.heroStat1Label}</div>
          </div>
          <div class="hero-stat">
            <div class="hero-stat-value">${C.heroStat2Value}</div>
            <div class="hero-stat-label">${C.heroStat2Label}</div>
          </div>
          <div class="hero-stat">
            <div class="hero-stat-value">${C.heroStat3Value}</div>
            <div class="hero-stat-label">${C.heroStat3Label}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- MARQUEE -->
    <div class="marquee-section">
      <div class="marquee-track">
        <span class="marquee-item">TRAIN HARD</span><div class="marquee-dot"></div>
        <span class="marquee-item accent">EAT CLEAN</span><div class="marquee-dot"></div>
        <span class="marquee-item">STAY HYDRATED</span><div class="marquee-dot"></div>
        <span class="marquee-item accent">TRANSFORM</span><div class="marquee-dot"></div>
        <span class="marquee-item">AB HI FIT</span><div class="marquee-dot"></div>
        <span class="marquee-item">TRAIN HARD</span><div class="marquee-dot"></div>
        <span class="marquee-item accent">EAT CLEAN</span><div class="marquee-dot"></div>
        <span class="marquee-item">STAY HYDRATED</span><div class="marquee-dot"></div>
        <span class="marquee-item accent">TRANSFORM</span><div class="marquee-dot"></div>
        <span class="marquee-item">AB HI FIT</span><div class="marquee-dot"></div>
      </div>
    </div>

    <!-- FEATURES BENTO GRID -->
    <section class="section">
      <div class="container">
        <p class="section-label font-accent reveal">${C.featureLabel}</p>
        <h2 class="section-title reveal reveal-delay-1">ALL YOUR<br>FITNESS TOOLS</h2>
        <p class="section-subtitle reveal reveal-delay-2">${C.featureSubtitle}</p>

        <div class="bento-grid" style="margin-top:var(--space-2xl);">
          <a href="#" onclick="navigate('hydration');return false;" class="bento-card reveal">
            <div class="bento-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg></div>
            <h4>Hydration Tracker</h4>
            <p>Log water intake & see progress</p>
          </a>
          <a href="#" onclick="navigate('calculator');return false;" class="bento-card reveal reveal-delay-1">
            <div class="bento-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/></svg></div>
            <h4>Calorie Calculator</h4>
            <p>BMR, TDEE, BMI & macros</p>
          </a>
          <a href="#" onclick="navigate('training');return false;" class="bento-card reveal reveal-delay-2">
            <div class="bento-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6.5 6.5h11M6 2L6 22M18 2l0 20M2 6h4M18 6h4M2 18h4M18 18h4"/></svg></div>
            <h4>Exercise Library</h4>
            <p>Full workout routines & splits</p>
          </a>
          <a href="#" onclick="navigate('diet');return false;" class="bento-card reveal reveal-delay-3">
            <div class="bento-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/></svg></div>
            <h4>Meal Plans</h4>
            <p>Abhi's exact meals — veg & non-veg</p>
          </a>
          <a href="#" onclick="navigate('skincare');return false;" class="bento-card reveal reveal-delay-4">
            <div class="bento-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div>
            <h4>Skincare</h4>
            <p>Daily routines & grooming tips</p>
          </a>
          <a href="#" onclick="navigate('about');return false;" class="bento-card reveal reveal-delay-5">
            <div class="bento-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
            <h4>About Abhi</h4>
            <p>The story behind the grind</p>
          </a>
        </div>
      </div>
    </section>

    <!-- ABOUT ABHI -->
    <section class="section-colored" style="background:var(--pastel-yellow);">
      <div class="container">
        <div class="about-grid">
          <div class="about-avatar reveal">
            <img src="${C.aboutPhoto}" alt="Abhijit Das">
          </div>
          <div>
            <span class="about-tag reveal">${C.aboutTag}</span>
            <h2 class="reveal reveal-delay-1">${C.aboutTitle.replace(/\n/g,'<br>')}</h2>
            <p class="reveal reveal-delay-2">${C.aboutDesc}</p>
            <div class="about-stats-grid reveal reveal-delay-3">
              <div class="about-stat-chip"><div class="chip-value">${C.aboutHeight}</div><div class="chip-label">Height</div></div>
              <div class="about-stat-chip"><div class="chip-value">${C.aboutWeight}</div><div class="chip-label">Weight</div></div>
              <div class="about-stat-chip"><div class="chip-value">${C.aboutAge}</div><div class="chip-label">Age</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TRANSFORMATION -->
    <section class="section">
      <div class="container">
        <div class="transform-card reveal" style="background:var(--pastel-pink);">
          <div class="transform-content">
            <span class="badge badge-dark" style="margin-bottom:var(--space-md);">${C.transformBadge}</span>
            <div class="transform-numbers">
              <span class="transform-num">${C.transformFrom}</span>
              <span class="transform-arrow">→</span>
              <span class="transform-num">${C.transformTo}</span>
            </div>
            <p class="transform-label">${C.transformLabel}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- INSTAGRAM -->
    <section class="section">
      <div class="container">
        <div class="instagram-section reveal">
          <h3>${C.instaTitle}</h3>
          <p style="margin-bottom:var(--space-lg);">${C.instaDesc}</p>
          <a href="${C.instaLink}" target="_blank" class="instagram-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:22px;height:22px;"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            ${C.instaHandle}
          </a>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="section">
      <div class="container">
        <p class="section-label font-accent reveal text-center">${C.statsLabel}</p>
        <h2 class="section-title text-center reveal reveal-delay-1">${C.statsTitle}</h2>
        <div class="stats-row" style="margin-top:var(--space-2xl);">
          <div class="stat-card reveal" style="background:var(--pastel-yellow);">
            <div class="stat-number">${C.stat1Value}</div>
            <div class="stat-label">${C.stat1Label}</div>
          </div>
          <div class="stat-card reveal reveal-delay-1" style="background:var(--pastel-pink);">
            <div class="stat-number">${C.stat2Value}</div>
            <div class="stat-label">${C.stat2Label}</div>
          </div>
          <div class="stat-card reveal reveal-delay-2" style="background:var(--pastel-blue);">
            <div class="stat-number">${C.stat3Value}</div>
            <div class="stat-label">${C.stat3Label}</div>
          </div>
          <div class="stat-card reveal reveal-delay-3" style="background:var(--pastel-mint);">
            <div class="stat-number">${C.stat4Value}</div>
            <div class="stat-label">${C.stat4Label}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section">
      <div class="container">
        <div class="transform-card reveal" style="background:var(--accent);border:3px solid #1A1A1A;box-shadow:var(--shadow-lg);">
          <div class="transform-content">
            <p class="font-accent" style="font-size:1.4rem;margin-bottom:var(--space-sm);">${C.ctaAccent}</p>
            <h2>${C.ctaTitle.replace(/\n/g,'<br>')}</h2>
            <p style="margin:var(--space-md) auto;max-width:400px;color:rgba(0,0,0,0.7);">${C.ctaDesc}</p>
            <div class="hero-cta" style="margin-top:var(--space-lg);">
              <a class="btn btn-secondary" href="#" onclick="navigate('training');return false;">${C.ctaCta1}</a>
              <a class="btn btn-outline" href="#" onclick="navigate('about');return false;">${C.ctaCta2}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SCROLL BANNER -->
    <div class="scroll-banner">
      <div class="scroll-banner-track">
        <span class="scroll-banner-item"><span class="dot"></span> ABHIFIT.ONLINE</span>
        <span class="scroll-banner-item"><span class="dot"></span> FREE TOOLS</span>
        <span class="scroll-banner-item"><span class="dot"></span> EAT CLEAN</span>
        <span class="scroll-banner-item"><span class="dot"></span> TRAIN HARD</span>
        <span class="scroll-banner-item"><span class="dot"></span> STAY HYDRATED</span>
        <span class="scroll-banner-item"><span class="dot"></span> ABHIFIT.ONLINE</span>
        <span class="scroll-banner-item"><span class="dot"></span> FREE TOOLS</span>
        <span class="scroll-banner-item"><span class="dot"></span> EAT CLEAN</span>
        <span class="scroll-banner-item"><span class="dot"></span> TRAIN HARD</span>
        <span class="scroll-banner-item"><span class="dot"></span> STAY HYDRATED</span>
      </div>
    </div>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="footer-logo">${C.siteTitle}</div>
      <div class="footer-links">
        <a href="#" onclick="navigate('training');return false;">Training</a>
        <a href="#" onclick="navigate('diet');return false;">Diet</a>
        <a href="#" onclick="navigate('hydration');return false;">Hydration</a>
        <a href="#" onclick="navigate('calculator');return false;">Calculator</a>
        <a href="#" onclick="navigate('about');return false;">About</a>
      </div>
      <p class="footer-copy">${C.footerText}</p>
    </footer>
  `;
};
