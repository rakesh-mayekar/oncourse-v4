/**
 * OnCourse — Shared Reusable Navigation Component System
 * Standardizes Main Mega-Menu Header and Secondary Navigation across 100% of pages.
 */

(function(window) {
  'use strict';

  // Master Navigation Schema
  const ONCOURSE_NAV = {
    // 1. Main Navigation Items & Dropdown Schemas
    main: [
      { id: 'home', label: 'Home', href: 'home.html', type: 'link' },
      { id: 'about', label: 'About Us', href: 'about.html', type: 'link' },
      { 
        id: 'undergraduate', 
        label: 'Undergraduate', 
        href: 'undergraduate.html', 
        type: 'dropdown',
        items: [
          { title: 'Overview', subtitle: 'Admissions advisory & strategy', href: 'undergraduate.html' },
          { title: 'Program', subtitle: 'Strategic roadmaps & profile building', href: 'undergraduate-program.html' },
          { title: 'Knowledge Centre', subtitle: 'Ivy League & Oxbridge admissions guides', href: 'undergraduate-knowledge.html' },
          { title: 'Success Stories', subtitle: 'Harvard, Stanford, Oxford admits', href: 'undergraduate-success.html' },
          { title: 'Events', subtitle: 'Admissions events & masterclasses', href: 'undergraduate-events.html' }
        ]
      },
      { 
        id: 'masters', 
        label: "Master's", 
        href: 'masters.html', 
        type: 'dropdown',
        items: [
          { title: 'Overview', subtitle: 'Graduate advisory & strategy', href: 'masters.html' },
          { title: 'Program', subtitle: 'STEM, AI/ML, Data Science, Finance', href: 'masters-program.html' },
          { title: 'Knowledge Centre', subtitle: 'SOP frameworks & research funding guides', href: 'masters-knowledge.html' },
          { title: 'Success Stories', subtitle: 'MIT, ETH Zurich, CMU, Oxford admits', href: 'masters-success.html' },
          { title: 'Events', subtitle: 'Graduate admissions events', href: 'masters-events.html' }
        ]
      },
      { 
        id: 'mba', 
        label: 'MBA', 
        href: 'mba.html', 
        type: 'dropdown',
        items: [
          { title: 'Overview', subtitle: 'Executive MBA advisory & strategy', href: 'mba.html' },
          { title: 'Program', subtitle: 'M7 roadmaps & career transitions', href: 'mba-program.html' },
          { title: 'Knowledge Centre', subtitle: 'M7 essay blueprints & recommender briefs', href: 'mba-knowledge.html' },
          { title: 'Success Stories', subtitle: 'Wharton, HBS, Stanford GSB, INSEAD', href: 'mba-success.html' },
          { title: 'Events', subtitle: 'Admissions director roundtables & events', href: 'mba-events.html' }
        ]
      },
      { 
        id: 'test-prep', 
        label: 'Test Prep', 
        href: 'test-prep.html', 
        type: 'dropdown',
        items: [
          { title: 'Overview', subtitle: 'Testing diagnostic & score elevation', href: 'test-prep.html' },
          { title: 'SAT & ACT', subtitle: 'Digital SAT & ACT adaptive prep', href: 'test-prep-sat-act.html' },
          { title: 'GMAT & GRE', subtitle: 'GMAT Focus & GRE score elevation', href: 'test-prep-gmat-gre.html' },
          { title: 'Success Stories', subtitle: 'SAT, ACT, GMAT & GRE admit outcomes', href: 'test-prep-success.html' },
          { title: 'Transfer Admissions', subtitle: 'US & UK university transfer pathways', href: 'test-prep-transfer.html' }
        ]
      },
      { id: 'contact', label: 'Contact Us', href: 'contact.html', type: 'link' },
      { id: 'careers', label: 'Join Our Team', href: 'careers.html', type: 'link' }
    ],

    // 2. Secondary Navigation Schemas per Section
    secondary: {
      about: [
        { label: 'Our Story', href: 'about.html#story', id: 'story' },
        { label: 'Team', href: 'team.html', id: 'team' },
        { label: 'Offices', href: 'about.html#offices', id: 'offices' },
        { label: 'FAQ', href: 'about.html#faq', id: 'faq' }
      ],
      undergraduate: [
        { label: 'Overview', href: 'undergraduate.html', id: 'overview' },
        { label: 'Program', href: 'undergraduate-program.html', id: 'program' },
        { label: 'Knowledge Centre', href: 'undergraduate-knowledge.html', id: 'knowledge' },
        { label: 'Success Stories', href: 'undergraduate-success.html', id: 'success' },
        { label: 'Events', href: 'undergraduate-events.html', id: 'events' }
      ],
      masters: [
        { label: 'Overview', href: 'masters.html', id: 'overview' },
        { label: 'Program', href: 'masters-program.html', id: 'program' },
        { label: 'Knowledge Centre', href: 'masters-knowledge.html', id: 'knowledge' },
        { label: 'Success Stories', href: 'masters-success.html', id: 'success' },
        { label: 'Events', href: 'masters-events.html', id: 'events' }
      ],
      mba: [
        { label: 'Overview', href: 'mba.html', id: 'overview' },
        { label: 'Program', href: 'mba-program.html', id: 'program' },
        { label: 'Knowledge Centre', href: 'mba-knowledge.html', id: 'knowledge' },
        { label: 'Success Stories', href: 'mba-success.html', id: 'success' },
        { label: 'Events', href: 'mba-events.html', id: 'events' }
      ],
      'test-prep': [
        { label: 'Overview', href: 'test-prep.html', id: 'overview' },
        { label: 'SAT & ACT', href: 'test-prep-sat-act.html', id: 'sat-act' },
        { label: 'GMAT & GRE', href: 'test-prep-gmat-gre.html', id: 'gmat-gre' },
        { label: 'Success Stories', href: 'test-prep-success.html', id: 'success' },
        { label: 'Transfer Admissions', href: 'test-prep-transfer.html', id: 'transfer' }
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
      if (file.includes('program')) subItem = 'program';
      else if (file.includes('knowledge')) subItem = 'knowledge';
      else if (file.includes('success')) subItem = 'success';
      else if (file.includes('events')) subItem = 'events';
      else subItem = 'overview';
    } else if (file.startsWith('masters')) {
      category = 'masters';
      if (file.includes('program')) subItem = 'program';
      else if (file.includes('knowledge')) subItem = 'knowledge';
      else if (file.includes('success')) subItem = 'success';
      else if (file.includes('events')) subItem = 'events';
      else subItem = 'overview';
    } else if (file.startsWith('mba')) {
      category = 'mba';
      if (file.includes('program')) subItem = 'program';
      else if (file.includes('knowledge')) subItem = 'knowledge';
      else if (file.includes('success')) subItem = 'success';
      else if (file.includes('events')) subItem = 'events';
      else subItem = 'overview';
    } else if (file.startsWith('test-prep')) {
      category = 'test-prep';
      if (file.includes('sat-act')) subItem = 'sat-act';
      else if (file.includes('gmat-gre')) subItem = 'gmat-gre';
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
   * Generates the canonical Global Header inner HTML
   */
  function generateHeaderHTML(activeCategory) {
    const context = detectPageContext();
    const active = activeCategory || context.category;

    let navLinksHTML = '';

    ONCOURSE_NAV.main.forEach(item => {
      const isActive = item.id === active;

      if (item.type === 'link') {
        const activeClass = isActive 
          ? 'text-black font-bold border-b-2 border-black pb-0.5' 
          : 'text-gray-700 hover:text-black border-b-2 border-transparent pb-0.5 transition-colors';
        
        navLinksHTML += `
          <a href="${item.href}" class="${activeClass} py-2 text-xs xl:text-[13px] 2xl:text-sm font-semibold transition-colors whitespace-nowrap shrink-0">
            ${item.label}
          </a>
        `;
      } else if (item.type === 'dropdown') {
        const activeClass = isActive 
          ? 'text-black font-bold border-b-2 border-black pb-0.5' 
          : 'text-gray-700 hover:text-black border-b-2 border-transparent pb-0.5 transition-colors';
        const chevronClass = isActive ? 'text-black' : 'text-gray-400 group-hover:text-black';

        let dropdownItemsHTML = '';
        item.items.forEach(sub => {
          dropdownItemsHTML += `
            <a href="${sub.href}" class="block p-2 rounded-lg hover:bg-gray-50 transition-colors">
              <span class="text-xs font-bold text-gray-900 block">${sub.title}</span>
              <span class="text-[11px] text-gray-500 block">${sub.subtitle}</span>
            </a>
          `;
        });

        navLinksHTML += `
          <div class="relative group h-full flex items-center nav-item-has-menu shrink-0">
            <a href="${item.href}" class="inline-flex items-center gap-1 xl:gap-1.5 py-2 text-xs xl:text-[13px] 2xl:text-sm font-semibold transition-colors whitespace-nowrap ${activeClass}">
              <span>${item.label}</span>
              <svg class="w-3.5 h-3.5 ${chevronClass} transition-transform group-hover:rotate-180 duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </a>
            <div class="absolute top-20 left-0 w-72 bg-white rounded-xl shadow-2xl border border-gray-200 p-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50 space-y-1">
              ${dropdownItemsHTML}
            </div>
          </div>
        `;
      }
    });

    return `
    <div class="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
      <div class="flex items-center justify-between h-full gap-4 xl:gap-8">
        
        <!-- Section 1: Brand Logo -->
        <div class="flex items-center flex-shrink-0 mr-2 xl:mr-6 header-brand-logo">
          <a href="home.html" title="OnCourse Home" class="flex items-center group">
            <img src="../assets/images/oncourse-logo.png" alt="OnCourse" class="h-8 sm:h-9 lg:h-7 xl:h-9 w-auto object-contain">
          </a>
        </div>

        <!-- Section 2: Nav Links & CTA Button -->
        <div class="flex items-center space-x-3 xl:space-x-7 2xl:space-x-8 h-full min-w-0">
          
          <!-- Desktop Nav Links -->
          <nav class="hidden lg:flex flex-nowrap items-center space-x-2.5 xl:space-x-5 2xl:space-x-6 text-xs xl:text-[13px] 2xl:text-sm font-semibold text-gray-700 h-full whitespace-nowrap">
            ${navLinksHTML}
          </nav>

          <!-- CTA Button -->
          <a href="contact.html#consultation-form" class="hidden sm:inline-flex items-center px-3 xl:px-4 py-2.5 rounded-md bg-black text-white hover:bg-gray-800 font-bold text-[11px] xl:text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all whitespace-nowrap shrink-0">
            Book Consultation
          </a>

          <!-- Mobile / Tablet Hamburger (< lg) -->
          <div class="flex lg:hidden items-center space-x-2 shrink-0">
            <a href="contact.html#consultation-form" class="sm:hidden px-3 py-1.5 rounded-md bg-black text-white text-xs font-bold">
              Book
            </a>
            <button id="mobile-menu-toggle" type="button" class="p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100" aria-label="Toggle Navigation">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>

        </div>

      </div>
    </div>

    <!-- Mobile Drawer Menu (Structured Exactly per Architecture) -->
    <div id="mobile-nav-drawer" class="hidden lg:hidden border-t border-gray-200 bg-white px-4 pt-3 pb-8 space-y-4 max-h-[85vh] overflow-y-auto shadow-xl">
      <div class="border-b border-gray-100 pb-2">
        <a href="home.html" class="text-xs font-black uppercase tracking-wider text-black block py-1">Home</a>
      </div>
      <div class="border-b border-gray-100 pb-2">
        <a href="about.html" class="text-xs font-black uppercase tracking-wider text-black block py-1">About Us</a>
      </div>
      <div class="border-b border-gray-100 pb-3">
        <div class="flex items-center justify-between mb-1">
          <a href="undergraduate.html" class="text-xs font-black uppercase tracking-wider text-black">Undergraduate</a>
          <span class="text-[9px] uppercase font-mono px-1.5 py-0.5 rounded bg-gray-100 text-gray-700 border border-gray-300 font-bold">For Parents</span>
        </div>
        <div class="space-y-1 pl-2 text-xs text-gray-700">
          <a href="undergraduate.html" class="block py-1 hover:text-black font-semibold">&bull; Overview</a>
          <a href="undergraduate-program.html" class="block py-1 hover:text-black">&bull; Program</a>
          <a href="undergraduate-knowledge.html" class="block py-1 hover:text-black">&bull; Knowledge Centre</a>
          <a href="undergraduate-success.html" class="block py-1 hover:text-black">&bull; Success Stories</a>
          <a href="undergraduate-events.html" class="block py-1 hover:text-black">&bull; Events</a>
        </div>
      </div>
      <div class="border-b border-gray-100 pb-3">
        <div class="flex items-center justify-between mb-1">
          <a href="masters.html" class="text-xs font-black uppercase tracking-wider text-black">Master's</a>
          <span class="text-[9px] uppercase font-mono px-1.5 py-0.5 rounded bg-black text-white font-bold">For Students</span>
        </div>
        <div class="space-y-1 pl-2 text-xs text-gray-700">
          <a href="masters.html" class="block py-1 hover:text-black font-semibold">&bull; Overview</a>
          <a href="masters-program.html" class="block py-1 hover:text-black">&bull; Program</a>
          <a href="masters-knowledge.html" class="block py-1 hover:text-black">&bull; Knowledge Centre</a>
          <a href="masters-success.html" class="block py-1 hover:text-black">&bull; Success Stories</a>
          <a href="masters-events.html" class="block py-1 hover:text-black">&bull; Graduate Events</a>
        </div>
      </div>
      <div class="border-b border-gray-100 pb-3">
        <div class="flex items-center justify-between mb-1">
          <a href="mba.html" class="text-xs font-black uppercase tracking-wider text-black">MBA</a>
          <span class="text-[9px] uppercase font-mono px-1.5 py-0.5 rounded bg-black text-white font-bold">For Students</span>
        </div>
        <div class="space-y-1 pl-2 text-xs text-gray-700">
          <a href="mba.html" class="block py-1 hover:text-black font-semibold">&bull; Overview</a>
          <a href="mba-program.html" class="block py-1 hover:text-black">&bull; Program</a>
          <a href="mba-knowledge.html" class="block py-1 hover:text-black">&bull; Knowledge Centre</a>
          <a href="mba-success.html" class="block py-1 hover:text-black">&bull; MBA Success Stories</a>
          <a href="mba-events.html" class="block py-1 hover:text-black">&bull; Events</a>
        </div>
      </div>
      <div class="border-b border-gray-100 pb-3">
        <div class="flex items-center justify-between mb-1">
          <a href="test-prep.html" class="text-xs font-black uppercase tracking-wider text-black">Test Prep &amp; Transfer</a>
          <span class="text-[9px] uppercase font-mono px-1.5 py-0.5 rounded bg-gray-100 text-gray-700 border border-gray-300 font-bold">Standardized Testing</span>
        </div>
        <div class="space-y-1 pl-2 text-xs text-gray-700">
          <a href="test-prep.html" class="block py-1 hover:text-black font-semibold">&bull; Overview</a>
          <a href="test-prep-sat-act.html" class="block py-1 hover:text-black">&bull; SAT &amp; ACT</a>
          <a href="test-prep-gmat-gre.html" class="block py-1 hover:text-black">&bull; GMAT &amp; GRE</a>
          <a href="test-prep-success.html" class="block py-1 hover:text-black">&bull; Success Stories</a>
          <a href="test-prep-transfer.html" class="block py-1 hover:text-black">&bull; Transfer Admissions</a>
        </div>
      </div>
      <div class="border-b border-gray-100 pb-2">
        <a href="contact.html" class="text-xs font-black uppercase tracking-wider text-black block py-1">Contact Us</a>
      </div>
      <div class="border-b border-gray-100 pb-2">
        <a href="careers.html" class="text-xs font-black uppercase tracking-wider text-black block py-1">Join Our Team</a>
      </div>
      <div class="pt-2 flex flex-col gap-2.5">
        <a href="careers.html" class="w-full text-center px-4 py-2.5 rounded-md border-2 border-black text-black font-bold text-xs uppercase tracking-wider">
          Join Our Team
        </a>
        <a href="contact.html#consultation-form" class="w-full text-center px-4 py-3 rounded-md bg-black text-white font-bold text-xs uppercase tracking-wider shadow-md">
          Book a Consultation
        </a>
      </div>
    </div>
    `;
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

    // 1. Mount or Normalize Main Header
    const headerEl = document.getElementById('global-header') || document.querySelector('header.global-header') || document.querySelector('header');
    if (headerEl) {
      const activeAttr = headerEl.getAttribute('data-active');
      const activeCat = activeAttr || context.category;
      
      headerEl.className = 'bg-white border-b border-gray-200 sticky top-0 z-50 shadow-xs h-20 global-header';
      headerEl.innerHTML = generateHeaderHTML(activeCat);
    }

    // 2. Mount or Normalize Secondary Navigation
    const secondaryNavEl = document.getElementById('secondary-nav') || document.querySelector('nav.secondary-nav-bar') || document.querySelector('nav.bg-black');
    if (secondaryNavEl && context.category in ONCOURSE_NAV.secondary) {
      const sectionAttr = secondaryNavEl.getAttribute('data-section') || context.category;
      const subItemAttr = secondaryNavEl.getAttribute('data-active') || context.subItem;

      secondaryNavEl.className = 'bg-black text-white border-b border-gray-800 sticky top-20 z-30 shadow-xs h-12 secondary-nav-bar';
      secondaryNavEl.innerHTML = generateSecondaryNavHTML(sectionAttr, subItemAttr);
    }

    // 3. Re-attach mobile menu toggle if wireframe.js function exists
    if (typeof window.initMobileMenu === 'function') {
      window.initMobileMenu();
    }
  }

  // Export functions to window
  window.OnCourseNav = {
    schema: ONCOURSE_NAV,
    detectPageContext: detectPageContext,
    generateHeaderHTML: generateHeaderHTML,
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
