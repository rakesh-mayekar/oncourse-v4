/**
 * OnCourse — Shared Secondary Navigation
 * Renders the black section sub-nav (Overview / Knowledge Centre / ...) for each page.
 * The main header is NOT built here: it lives in components/header.html and is stamped
 * into every page by scripts/sync-components.py.
 */

(function(window) {
  'use strict';

  // Master Navigation Schema
  const ONCOURSE_NAV = {
    // Secondary Navigation Schemas per Section
    secondary: {
      about: [
        { label: 'Our Story', href: 'about.html#story', id: 'story' },
        { label: 'Team', href: 'team.html', id: 'team' },
        { label: 'Offices', href: 'about.html#offices', id: 'offices' },
        { label: 'FAQ', href: 'about.html#faq', id: 'faq' }
      ],
      undergraduate: [
        { label: 'Program Overview', href: 'undergraduate.html', id: 'overview' },
        { label: 'Knowledge Centre', href: 'undergraduate-knowledge.html', id: 'knowledge' },
        { label: 'Success Stories', href: 'undergraduate-success.html', id: 'success' },
        { label: 'Events', href: 'undergraduate-events.html', id: 'events' }
      ],
      masters: [
        { label: 'Program Overview', href: 'masters.html', id: 'overview' },
        { label: 'Knowledge Centre', href: 'masters-knowledge.html', id: 'knowledge' },
        { label: 'Success Stories', href: 'masters-success.html', id: 'success' },
        { label: 'Events', href: 'masters-events.html', id: 'events' }
      ],
      mba: [
        { label: 'Program Overview', href: 'mba.html', id: 'overview' },
        { label: 'Knowledge Centre', href: 'mba-knowledge.html', id: 'knowledge' },
        { label: 'Success Stories', href: 'mba-success.html', id: 'success' },
        { label: 'Events', href: 'mba-events.html', id: 'events' }
      ],
      'test-prep': [
        { label: 'Overview', href: 'test-prep.html', id: 'overview' },
        { label: 'SAT & ACT', href: 'test-prep-sat-act.html', id: 'sat-act' },
        { label: 'GMAT & GRE', href: 'test-prep-gmat-gre.html', id: 'gmat-gre' },
        { label: 'Knowledge Centre', href: 'test-prep-knowledge.html', id: 'knowledge' },
        { label: 'Success Stories', href: 'test-prep-success.html', id: 'success' },
        { label: 'Events', href: 'test-prep-events.html', id: 'events' }
      ],
      careers: [
        { label: 'Life at OnCourse', href: 'careers.html', id: 'life' },
        { label: 'Open Positions', href: 'careers-openings.html', id: 'openings' },
        { label: 'Apply Now', href: 'careers-apply.html', id: 'apply' }
      ],
      contact: [
        { label: 'Overview', href: 'contact.html', id: 'overview' },
        { label: 'Get in Touch', href: 'contact.html#get-in-touch', id: 'get-in-touch' },
        { label: 'Visit Us', href: 'contact.html#offices', id: 'offices' },
        { label: 'Request Consultation', href: 'contact.html#consultation-form', id: 'consultation' },
        { label: 'FAQs', href: 'contact.html#faqs', id: 'faqs' }
      ]
    }
  };

  /**
   * Helper to detect active main category and secondary item from current page URL
   */
  function detectPageContext() {
    const path = window.location.pathname;
    const file = path.split('/').pop() || 'home.html';

    let category = 'home';
    let subItem = '';

    if (file === 'about.html') {
      category = 'about';
      subItem = 'story';
    } else if (file === 'team.html') {
      category = 'about';
      subItem = 'team';
    } else if (file.startsWith('undergraduate')) {
      category = 'undergraduate';
      if (file.includes('program')) subItem = 'overview';
      else if (file.includes('knowledge')) subItem = 'knowledge';
      else if (file.includes('success')) subItem = 'success';
      else if (file.includes('events')) subItem = 'events';
      else subItem = 'overview';
    } else if (file.startsWith('masters')) {
      category = 'masters';
      if (file.includes('program')) subItem = 'overview';
      else if (file.includes('knowledge')) subItem = 'knowledge';
      else if (file.includes('success')) subItem = 'success';
      else if (file.includes('events')) subItem = 'events';
      else subItem = 'overview';
    } else if (file.startsWith('mba')) {
      category = 'mba';
      if (file.includes('program')) subItem = 'overview';
      else if (file.includes('knowledge')) subItem = 'knowledge';
      else if (file.includes('success')) subItem = 'success';
      else if (file.includes('events')) subItem = 'events';
      else subItem = 'overview';
    } else if (file.startsWith('test-prep')) {
      category = 'test-prep';
      if (file.includes('sat-act')) subItem = 'sat-act';
      else if (file.includes('gmat-gre')) subItem = 'gmat-gre';
      else if (file.includes('knowledge')) subItem = 'knowledge';
      else if (file.includes('events')) subItem = 'events';
      else if (file.includes('success')) subItem = 'success';
      else if (file.includes('transfer')) subItem = 'transfer';
      else subItem = 'overview';
    } else if (file.startsWith('careers')) {
      category = 'careers';
      if (file.includes('openings')) subItem = 'openings';
      else if (file.includes('apply')) subItem = 'apply';
      else subItem = 'life';
    } else if (file.startsWith('contact')) {
      category = 'contact';
      subItem = 'overview';
    } else if (file === 'home.html' || file === '' || file === 'index.html') {
      category = 'home';
      subItem = '';
    }

    return { category, subItem, file };
  }

  /**
   * Generates the canonical Secondary Navigation inner HTML for a given section
   */
  function generateSecondaryNavHTML(sectionKey, activeItemId) {
    const items = ONCOURSE_NAV.secondary[sectionKey];
    if (!items || !items.length) return '';

    let linksHTML = '';
    items.forEach(item => {
      const isActive = item.id === activeItemId;
      const linkClass = isActive
        ? 'text-white border-b-2 border-white font-bold h-full flex items-center transition-colors'
        : 'text-gray-300 hover:text-white border-b-2 border-transparent h-full flex items-center transition-colors';

      linksHTML += `
        <a href="${item.href}" class="${linkClass} text-xs sm:text-sm whitespace-nowrap">
          ${item.label}
        </a>
      `;
    });

    return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
      <div class="flex items-center overflow-x-auto hide-scrollbar space-x-8 text-xs sm:text-sm font-semibold whitespace-nowrap h-full">
        ${linksHTML}
      </div>
    </div>
    `;
  }

  /**
   * Auto-mounting and normalizing navigation system
   */
  function initGlobalNavigation() {
    const context = detectPageContext();

    // Mount or Normalize Secondary Navigation
    const secondaryNavEl = document.getElementById('secondary-nav') || document.querySelector('nav.secondary-nav-bar') || document.querySelector('nav.bg-black');
    if (secondaryNavEl && context.category in ONCOURSE_NAV.secondary) {
      const sectionAttr = secondaryNavEl.getAttribute('data-section') || context.category;
      const subItemAttr = secondaryNavEl.getAttribute('data-active') || context.subItem;

      secondaryNavEl.className = 'bg-black text-white border-b border-gray-800 sticky top-20 z-30 shadow-xs h-12 secondary-nav-bar';
      secondaryNavEl.innerHTML = generateSecondaryNavHTML(sectionAttr, subItemAttr);
    }
  }

  // Export functions to window
  window.OnCourseNav = {
    schema: ONCOURSE_NAV,
    detectPageContext: detectPageContext,
    generateSecondaryNavHTML: generateSecondaryNavHTML,
    init: initGlobalNavigation
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlobalNavigation);
  } else {
    initGlobalNavigation();
  }

})(window);
