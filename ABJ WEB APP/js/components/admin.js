/*
 * ============================================
 * ADMIN PANEL
 * ============================================
 * Handles login, content editing, and saving.
 * Admin credentials are stored in data.js (SITE_CONTENT).
 * Now features a categorized tab interface for quick edits.
 * ============================================
 */

window.openAdmin = function() {
  const C = window.CONTENT;
  if (sessionStorage.getItem('admin_auth') === 'true') {
    openDashboard();
  } else {
    document.getElementById('adminLoginModal').classList.add('active');
  }
};

// Login form
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('adminLoginForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const C = window.CONTENT;
    const id = document.getElementById('adminIdInput').value;
    const pass = document.getElementById('adminPassInput').value;

    if (id === C.adminId && pass === C.adminPass) {
      sessionStorage.setItem('admin_auth', 'true');
      document.getElementById('adminLoginModal').classList.remove('active');
      form.reset();
      document.getElementById('adminError').style.display = 'none';
      openDashboard();
    } else {
      document.getElementById('adminError').style.display = 'block';
    }
  });
});

function openDashboard() {
  document.getElementById('adminDashModal').classList.add('active');
  renderAdminFields();
}

function renderAdminFields() {
  const C = window.CONTENT;
  const container = document.getElementById('adminFieldsContainer');
  if (!container) return;

  // Grouped Categories
  const categories = {
    'GENERAL': {
      'Global Settings': ['siteTitle', 'siteDescription', 'footerText'],
      'Credentials': ['adminId', 'adminPass']
    },
    'HOME PAGE': {
      'Hero Section': ['heroAccent', 'heroLine1', 'heroLine2', 'heroHighlight', 'heroDesc', 'heroCta1', 'heroCta2', 'heroStat1Value', 'heroStat1Label', 'heroStat2Value', 'heroStat2Label', 'heroStat3Value', 'heroStat3Label'],
      'Features': ['featureLabel', 'featureTitle', 'featureSubtitle'],
      'About': ['aboutTag', 'aboutTitle', 'aboutDesc', 'aboutPhoto', 'aboutHeight', 'aboutWeight', 'aboutAge'],
      'Transformation': ['transformBadge', 'transformFrom', 'transformTo', 'transformLabel'],
      'Stats': ['statsLabel', 'statsTitle', 'stat1Value', 'stat1Label', 'stat2Value', 'stat2Label', 'stat3Value', 'stat3Label', 'stat4Value', 'stat4Label'],
      'Call To Action': ['ctaAccent', 'ctaTitle', 'ctaDesc', 'ctaCta1', 'ctaCta2']
    },
    'PAGES': {
      'Diet & Nutrition': ['dietTitle', 'dietSubtitle'],
      'Training': ['trainingTitle', 'trainingSubtitle'],
      'Hydration': ['hydrationTitle', 'hydrationSubtitle'],
      'Calculator': ['calcTitle', 'calcSubtitle', 'calcLink', 'calcLinkText'],
      'Skincare': ['skincareTitle', 'skincareSubtitle']
    },
    'SOCIAL': {
      'Instagram': ['instaTitle', 'instaDesc', 'instaHandle', 'instaLink']
    }
  };

  // Build Tabs HTML
  let tabsHtml = '<div style="display:flex; gap:8px; overflow-x:auto; padding-bottom:10px; margin-bottom:20px; border-bottom:2px solid #1A1A1A;" id="adminTabs">';
  let contentHtml = '';
  let first = true;

  for (const [catName, sections] of Object.entries(categories)) {
    const activeClass = first ? 'active' : '';
    const btnStyle = first ? 'background:var(--accent); color:#1A1A1A;' : 'background:var(--bg-secondary); color:var(--text-secondary); border-color:transparent;';
    
    tabsHtml += `<button class="badge badge-outline" style="cursor:pointer; font-size:0.8rem; padding:8px 16px; ${btnStyle}" onclick="window.switchAdminTab(this, '${catName.replace(/\\s/g, '')}')">${catName}</button>`;
    
    contentHtml += `<div id="tab-${catName.replace(/\\s/g, '')}" style="display: ${first ? 'block' : 'none'};">`;
    
    for (const [sectionName, keys] of Object.entries(sections)) {
      contentHtml += `<div class="admin-section" style="background:var(--bg-tertiary); padding:var(--space-md); border-radius:var(--radius-md); margin-bottom:var(--space-lg); border:2px dashed rgba(0,0,0,0.1);">
        <h4 style="margin-bottom:var(--space-md); font-size:1rem;">${sectionName}</h4>`;
      
      keys.forEach(key => {
        if (C[key] === undefined) return;
        const val = String(C[key]);
        const label = key.replace(/([A-Z])/g, ' $1').toUpperCase();
        const isLong = val.length > 40;

        contentHtml += `
          <div class="input-group">
            <label class="input-label">${label}</label>
            ${isLong
              ? `<textarea id="admin-${key}" rows="3">${val}</textarea>`
              : `<input type="text" id="admin-${key}" value="${val.replace(/"/g, '&quot;')}">`
            }
          </div>`;
      });
      contentHtml += `</div>`;
    }
    contentHtml += `</div>`;
    first = false;
  }
  tabsHtml += '</div>';

  container.innerHTML = tabsHtml + contentHtml;
}

window.switchAdminTab = function(btn, tabId) {
  // Reset all tabs
  const container = document.getElementById('adminFieldsContainer');
  container.querySelectorAll('#adminTabs button').forEach(b => {
    b.style.background = 'var(--bg-secondary)';
    b.style.color = 'var(--text-secondary)';
    b.style.borderColor = 'transparent';
  });
  container.querySelectorAll('[id^="tab-"]').forEach(t => t.style.display = 'none');

  // Activate clicked tab
  btn.style.background = 'var(--accent)';
  btn.style.color = '#1A1A1A';
  btn.style.borderColor = '#1A1A1A';
  document.getElementById(`tab-${tabId}`).style.display = 'block';
};

window.saveAdminChanges = function() {
  const C = window.CONTENT;
  const updates = {};

  Object.keys(C).forEach(key => {
    const el = document.getElementById(`admin-${key}`);
    if (el) {
      updates[key] = el.value;
    }
  });

  // Save to localStorage
  const finalContent = { ...C, ...updates };
  localStorage.setItem('abhifit_content', JSON.stringify(finalContent));

  // Update memory
  window.CONTENT = finalContent;

  if (window.Toast) {
    window.Toast.show('Changes saved! Please wait...');
  } else {
    showToast('Changes saved! Please wait...');
  }
  setTimeout(() => {
    location.reload();
  }, 1000);
};

window.resetContent = function() {
  if(confirm("Are you sure? This will delete all your local changes and restore the default content.")) {
    localStorage.removeItem('abhifit_content');
    if (window.Toast) {
      window.Toast.show('Resetting to defaults...');
    } else {
      showToast('Resetting to defaults...');
    }
    setTimeout(() => {
      location.reload();
    }, 1000);
  }
};

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
