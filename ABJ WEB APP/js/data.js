/*
 * ============================================
 * ABHIFIT CONTENT CONFIGURATION
 * ============================================
 * Edit any value below to change website content.
 * Changes take effect on next page reload.
 * Admin panel can also edit these values via localStorage.
 * ============================================
 */

const SITE_CONTENT = {

  // ── GLOBAL ──────────────────────────────────
  siteTitle: "FIT WITH ABHI",
  siteDescription: "Your pocket guide to fitness, nutrition, and transformation. Free tools by Abhijit Das.",
  themeColor: "#8EC98F",

  // ── HERO ────────────────────────────────────
  heroAccent: "meet fit with abhi",
  heroLine1: "YOUR POCKET",
  heroLine2: "GUIDE TO",
  heroHighlight: "FITNESS.",
  heroDesc: "Track hydration, calculate calories, explore exercises — all by <strong>Abhijit Das</strong>.",
  heroCta1: "Explore Tools",
  heroCta2: "Calculate TDEE",
  heroStat1Value: "10+", heroStat1Label: "Free Tools",
  heroStat2Value: "24", heroStat2Label: "Exercises",
  heroStat3Value: "5kg", heroStat3Label: "Lost in 2mo",

  // ── FEATURES ────────────────────────────────
  featureLabel: "What you get",
  featureTitle: "ALL YOUR\nFITNESS TOOLS",
  featureSubtitle: "Everything you need for your fitness journey, completely free.",

  // ── ABOUT ──────────────────────────────────
  aboutTag: "🏋️ Founder",
  aboutTitle: "MEET\nABHIJIT DAS",
  aboutDesc: "21 years old. 180cm. Currently 81kg — down from 86kg in just 2 months through clean eating and consistent training. Building aesthetics, one rep at a time.",
  aboutPhoto: "abhijit-photo.jpeg",
  aboutHeight: "180cm", aboutWeight: "81kg", aboutAge: "21",

  // ── TRANSFORMATION ──────────────────────────
  transformBadge: "🏆 WEIGHT LOSS JOURNEY",
  transformFrom: "86", transformTo: "81",
  transformLabel: "KG LOST IN 2 MONTHS — WITH DISCIPLINE & CLEAN EATING",

  // ── STATS ──────────────────────────────────
  statsLabel: "The numbers",
  statsTitle: "ABHI'S STATS",
  stat1Value: "2400", stat1Label: "Calories/Day",
  stat2Value: "150g", stat2Label: "Protein/Day",
  stat3Value: "3L", stat3Label: "Water/Day",
  stat4Value: "5", stat4Label: "Days/Week",

  // ── INSTAGRAM ──────────────────────────────
  instaTitle: "Follow the Journey",
  instaDesc: "Daily updates, gym reels, transformation progress — all on Instagram.",
  instaHandle: "@abhiiijittt05",
  instaLink: "https://www.instagram.com/abhiiijittt05",

  // ── DIET ───────────────────────────────────
  dietTitle: "ABHI'S MEAL PLAN",
  dietSubtitle: "My exact daily meals for building lean muscle.",

  // ── TRAINING ───────────────────────────────
  trainingTitle: "TRAINING SPLIT",
  trainingSubtitle: "5-day push-pull-legs split with progressive overload.",

  // ── HYDRATION ──────────────────────────────
  hydrationTitle: "HYDRATION TRACKER",
  hydrationSubtitle: "Track your daily water intake. Goal: 3.5L per day.",
  hydrationGoal: 3500,

  // ── CALCULATOR ─────────────────────────────
  calcTitle: "CALORIE CALCULATOR",
  calcSubtitle: "Calculate your BMR, TDEE, and daily calorie needs.",
  calcLink: "https://www.calculator.net/calorie-calculator.html",
  calcLinkText: "Advanced Calculator →",

  // ── SKINCARE ───────────────────────────────
  skincareTitle: "SKINCARE ROUTINE",
  skincareSubtitle: "Abhi's daily skincare and grooming habits.",

  // ── BODY MAP ───────────────────────────────
  bodyMapTitle: "BODY MAP",
  bodyMapSubtitle: "Tap any muscle group to see recommended exercises.",

  // ── FAQ ────────────────────────────────────
  faqTitle: "FREQUENTLY ASKED",
  faqs: [
    { q: "How long did it take to lose 5kg?", a: "It took exactly 2 months of consistent diet tracking, a high protein intake, and a 5-day training split." },
    { q: "What is your daily protein goal?", a: "I aim for 150g to 160g of protein every single day to maintain muscle mass while dropping body fat." },
    { q: "Do you use any supplements?", a: "Yes — Whey Protein, Creatine Monohydrate, and a basic multivitamin. Nothing fancy, just consistency." },
    { q: "Can beginners follow your routine?", a: "Absolutely! Start with lighter weights and focus on form. The split works for all levels." },
    { q: "How much water should I drink daily?", a: "At least 3 to 3.5 liters. Use the hydration tracker on this site to stay on track!" }
  ],

  // ── CTA ────────────────────────────────────
  ctaAccent: "you're welcome!",
  ctaTitle: "START YOUR\nFITNESS JOURNEY",
  ctaDesc: "All tools are 100% free. No sign-up. No ads. Just fitness.",
  ctaCta1: "Start Training",
  ctaCta2: "Say Hello",

  // ── ADMIN ──────────────────────────────────
  adminId: "ABJ",
  adminPass: "Abhi123",

  // ── FOOTER ─────────────────────────────────
  footerText: "© 2025 AbhiFit. All rights reserved."
};

// Load from localStorage (admin edits persist)
const savedData = localStorage.getItem('abhifit_content');
window.CONTENT = savedData ? { ...SITE_CONTENT, ...JSON.parse(savedData) } : { ...SITE_CONTENT };

// Save function for admin panel
window.saveContent = function(updates) {
  Object.assign(window.CONTENT, updates);
  localStorage.setItem('abhifit_content', JSON.stringify(updates));
  location.reload();
};

// Reset to defaults
window.resetContent = function() {
  localStorage.removeItem('abhifit_content');
  location.reload();
};
