/**
 * OnCourse — Reusable Event Update Panel Controller (Soul of Hospitality Reference)
 * Expandable top panel with downward slide-in, background dimming overlay,
 * clean two-column event layout, and upward collapse behavior.
 * 
 * DESKTOP ONLY component.
 */

(function(window) {
  'use strict';

  // 1. Default Master Event Configuration
  const DEFAULT_CONFIG = {
    active: true,
    id: 'admissions-strategy-panel-2026',
    category: 'Major Admissions Briefing',
    title: 'Ivy League & Oxbridge Admissions Strategy Panel 2026',
    description: 'Join former admissions deans and senior mentors for an in-depth briefing on early curriculum choices, building an extraordinary extracurricular spike, and navigating dual-mentor admissions architecture for top-tier US & UK universities.',
    date: 'Saturday, May 16 • 6:00 PM IST',
    badge: 'Live Virtual',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    primaryCta: {
      text: 'Register For Live Panel',
      url: 'upcoming-events.html'
    },
    secondaryCta: {
      text: 'View Full Agenda',
      url: 'upcoming-events.html#agenda'
    },
    autoOpenOnFirstVisit: true
  };

  // Merge with window.OnCourseEventPanelConfig if predefined
  let currentConfig = Object.assign({}, DEFAULT_CONFIG, window.OnCourseEventPanelConfig || {});

  function generateHTML(cfg) {
    const hasSecondary = cfg.secondaryCta && cfg.secondaryCta.text && cfg.secondaryCta.url;
    const secondaryHTML = hasSecondary
      ? `<a id="event-panel-secondary-cta" href="${cfg.secondaryCta.url}" class="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-neutral-700 hover:border-neutral-400 text-neutral-300 hover:text-white font-bold text-xs uppercase tracking-wider transition-all">
           <span id="event-panel-secondary-cta-text">${cfg.secondaryCta.text}</span>
         </a>`
      : '';

    return `
    <!-- 1. Background Dimming Overlay (Page remains visible underneath) -->
    <div id="event-panel-backdrop" class="event-panel-backdrop fixed inset-0 bg-black/75 backdrop-blur-[2px] z-55 transition-opacity duration-300 pointer-events-none opacity-0" aria-hidden="true"></div>

    <!-- 2. Expandable Top Panel (Attached to the TOP of the website) -->
    <aside id="event-top-panel" class="event-top-panel fixed top-0 inset-x-0 w-full z-60 bg-[#0F1117] text-white border-b border-neutral-800 shadow-2xl transition-all duration-400 -translate-y-full opacity-0 pointer-events-none" role="region" aria-label="Event Update Announcement">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 py-8 lg:py-10 relative">
        
        <!-- Top Right Close Button -->
        <button id="event-panel-close-top" type="button" class="absolute top-4 right-4 sm:top-6 sm:right-6 text-neutral-400 hover:text-white p-2 rounded-lg hover:bg-neutral-800/80 transition-colors cursor-pointer" aria-label="Close event panel">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <!-- LEFT: Event / Update Image -->
          <div class="lg:col-span-5">
            <div class="relative rounded-2xl overflow-hidden border border-neutral-700/60 shadow-2xl bg-neutral-900 aspect-[16/10] group">
              <img id="event-panel-image" 
                   src="${cfg.image}" 
                   alt="${cfg.title}" 
                   class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <!-- Date & Format Badges on Image -->
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white/90">
                <span id="event-panel-date-badge" class="px-2.5 py-1 rounded bg-black/85 backdrop-blur-md border border-white/10 font-semibold truncate max-w-[70%]">
                  ${cfg.date}
                </span>
                <span id="event-panel-status-badge" class="px-2 py-0.5 rounded bg-rose-500/90 text-white font-bold text-[10px] uppercase tracking-wider shrink-0">
                  ${cfg.badge}
                </span>
              </div>
            </div>
          </div>

          <!-- RIGHT: Content & Actions -->
          <div class="lg:col-span-7 flex flex-col justify-center space-y-4">
            
            <!-- Category / Label -->
            <div class="flex items-center gap-2">
              <span id="event-panel-category" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[10px] font-mono font-bold tracking-widest uppercase">
                <span class="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse"></span>
                <span id="event-panel-category-text">${cfg.category}</span>
              </span>
            </div>

            <!-- Event Title -->
            <h2 id="event-panel-title" class="text-2xl lg:text-3xl font-black text-white tracking-tight leading-snug">
              ${cfg.title}
            </h2>

            <!-- Short Description -->
            <p id="event-panel-description" class="text-neutral-300 text-sm leading-relaxed max-w-2xl font-normal">
              ${cfg.description}
            </p>

            <!-- CTAs -->
            <div class="pt-2 flex flex-wrap items-center gap-3">
              <a id="event-panel-primary-cta" href="${cfg.primaryCta.url}" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-black hover:bg-neutral-200 font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all group">
                <span id="event-panel-primary-cta-text">${cfg.primaryCta.text}</span>
                <span class="transition-transform group-hover:translate-x-0.5">&rarr;</span>
              </a>
              ${secondaryHTML}
            </div>

          </div>

        </div>

      </div>

      <!-- BOTTOM / EDGE: Clear "Close" control anchored to bottom edge -->
      <button id="event-panel-close-bottom" type="button" class="event-panel-collapse-tab absolute -bottom-9 left-1/2 -translate-x-1/2 bg-[#0F1117] hover:bg-[#1A1D26] text-neutral-300 hover:text-white px-5 py-1.5 border-b border-x border-neutral-700 hover:border-neutral-500 rounded-b-xl text-[11px] font-mono font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-xl transition-all z-70" aria-label="Close and collapse panel upward">
        <span>Close Panel</span>
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
      </button>
    </aside>

    <!-- 3. Top Trigger Strip (When panel is collapsed, allows re-expanding) -->
    <div id="event-panel-trigger-strip" class="event-trigger-strip bg-[#0C0D12] text-white border-b border-neutral-800 relative z-45 transition-all duration-300" role="region" aria-label="Event Update Strip">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4 text-xs font-medium">
        <div class="flex items-center gap-3 overflow-hidden">
          <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[9px] font-mono font-bold tracking-wider uppercase shrink-0">
            <span class="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse"></span>
            <span>EVENT UPDATE</span>
          </span>
          <span id="event-trigger-title" class="truncate font-semibold text-neutral-200">
            ${cfg.title} &bull; ${cfg.date}
          </span>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <button id="event-panel-expand-btn" type="button" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 hover:bg-white text-white hover:text-black font-mono font-bold text-[11px] uppercase tracking-wider transition-colors cursor-pointer border border-white/20 hover:border-white">
            <span>View Update</span>
            <svg class="w-3 h-3 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <button id="event-trigger-dismiss-btn" type="button" class="text-neutral-500 hover:text-white p-1 rounded hover:bg-neutral-800 transition-colors cursor-pointer" aria-label="Dismiss event notice">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
      </div>
    </div>
    `;
  }

  const EventPanel = {
    config: currentConfig,
    isOpen: false,

    open: function() {
      if (!this.config.active) return;
      const panel = document.getElementById('event-top-panel');
      const backdrop = document.getElementById('event-panel-backdrop');
      if (!panel || !backdrop) return;

      panel.style.transform = 'translateY(0)';
      panel.style.opacity = '1';
      panel.style.pointerEvents = 'auto';
      panel.classList.remove('-translate-y-full', 'opacity-0', 'pointer-events-none');
      panel.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto', 'open');

      backdrop.style.opacity = '1';
      backdrop.style.pointerEvents = 'auto';
      backdrop.classList.remove('opacity-0', 'pointer-events-none');
      backdrop.classList.add('opacity-100', 'pointer-events-auto', 'active');

      this.isOpen = true;
    },

    close: function() {
      const panel = document.getElementById('event-top-panel');
      const backdrop = document.getElementById('event-panel-backdrop');
      if (!panel || !backdrop) return;

      panel.style.transform = 'translateY(-100%)';
      panel.style.opacity = '0';
      panel.style.pointerEvents = 'none';
      panel.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto', 'open');
      panel.classList.add('-translate-y-full', 'opacity-0', 'pointer-events-none');

      backdrop.style.opacity = '0';
      backdrop.style.pointerEvents = 'none';
      backdrop.classList.remove('opacity-100', 'pointer-events-auto', 'active');
      backdrop.classList.add('opacity-0', 'pointer-events-none');

      this.isOpen = false;
    },

    toggle: function() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    },

    dismissStrip: function() {
      const strip = document.getElementById('event-panel-trigger-strip');
      if (strip) {
        strip.classList.add('hidden-strip');
        sessionStorage.setItem('oncourse_dismissed_event_strip_' + this.config.id, 'true');
      }
      this.close();
    },

    updateConfig: function(newCfg) {
      this.config = Object.assign({}, this.config, newCfg);
      this.render();
    },

    bindEvents: function() {
      const self = this;

      const closeTopBtn = document.getElementById('event-panel-close-top');
      if (closeTopBtn) {
        closeTopBtn.onclick = function(e) {
          e.preventDefault();
          self.close();
        };
      }

      const closeBottomBtn = document.getElementById('event-panel-close-bottom');
      if (closeBottomBtn) {
        closeBottomBtn.onclick = function(e) {
          e.preventDefault();
          self.close();
        };
      }

      const backdrop = document.getElementById('event-panel-backdrop');
      if (backdrop) {
        backdrop.onclick = function(e) {
          e.preventDefault();
          self.close();
        };
      }

      const expandBtn = document.getElementById('event-panel-expand-btn');
      if (expandBtn) {
        expandBtn.onclick = function(e) {
          e.preventDefault();
          self.open();
        };
      }

      const dismissBtn = document.getElementById('event-trigger-dismiss-btn');
      if (dismissBtn) {
        dismissBtn.onclick = function(e) {
          e.preventDefault();
          self.dismissStrip();
        };
      }

      // Escape key to close
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && self.isOpen) {
          self.close();
        }
      });
    },

    render: function() {
      let wrapper = document.getElementById('oncourse-event-panel-wrapper');
      
      // If inactive, completely empty out the container and ensure 0 height
      if (!this.config.active) {
        if (wrapper) {
          wrapper.innerHTML = '';
          wrapper.style.display = 'none';
        }
        return;
      }

      if (!wrapper) {
        wrapper = document.createElement('div');
        wrapper.id = 'oncourse-event-panel-wrapper';
        wrapper.setAttribute('data-active', 'true');
        wrapper.setAttribute('data-event-id', this.config.id);
        document.body.insertBefore(wrapper, document.body.firstChild);
      }

      wrapper.style.display = 'block';
      wrapper.innerHTML = generateHTML(this.config);
      this.bindEvents();

      // Check if trigger strip was permanently dismissed in this session
      const isStripDismissed = sessionStorage.getItem('oncourse_dismissed_event_strip_' + this.config.id) === 'true';
      if (isStripDismissed) {
        const strip = document.getElementById('event-panel-trigger-strip');
        if (strip) strip.classList.add('hidden-strip');
      }

      // Auto-open logic for desktop if enabled and not closed yet in current session
      const hasAutoOpened = sessionStorage.getItem('oncourse_auto_opened_' + this.config.id);
      if (this.config.autoOpenOnFirstVisit && !hasAutoOpened && !isStripDismissed) {
        sessionStorage.setItem('oncourse_auto_opened_' + this.config.id, 'true');
        // Slight delay so the user perceives the smooth downward expansion
        setTimeout(() => {
          this.open();
        }, 350);
      }
    },

    init: function(customConfig) {
      if (customConfig) {
        this.config = Object.assign({}, this.config, customConfig);
      }
      this.render();
    }
  };

  // Expose globally
  window.OnCourseEventPanel = EventPanel;

  // Auto initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      EventPanel.init();
    });
  } else {
    EventPanel.init();
  }

})(window);
