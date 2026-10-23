# OnCourse — UX Wireframe Prototype Suite

**Prepared by:** Swara Studio  
**Companion to:** K Webmaker Digital SOW v1.0 (Phase 1/2)  
**Client:** OnCourse

---

## 🌟 Overview

A coded structural UX wireframe prototype with client-side interactivity for the **OnCourse** website redesign. This prototype demonstrates information architecture, segment journeys (Undergraduate Class 8–12, Master's, MBA, Test Prep & Transfer), recurring brand pillars, and dynamic enquiry flows before high-fidelity visual design (Phase 2) and WordPress CMS build (Phase 3).

### Key Architectural Highlights
- **Semantic HTML5 & Tailwind CSS via CDN**: Responsive, mobile-first layouts tested at 375px, 768px, and 1280px.
- **Client-Side Interactivity**:
  - **Dynamic Segment Lead Form**: Dynamically swaps form fields (e.g. GMAT/GRE score & work experience for MBA vs. Class 8–12 grade & curriculum for UG vs. exam targets for Test Prep).
  - **Contextual Pop-up**: Non-intrusive slide-in corner modal that adapts value propositions per segment (`undergraduate` vs `mba`) with `sessionStorage` persistence.
  - **Dismissible Sticky CTA**: Scroll-triggered sticky consultation bar that coordinates with the slide-in pop-up.
  - **FAQ Accordion**: Accessible expand/collapse accordion.
  - **Interactive Outcome Slider**: Success stories carousel with multi-slide navigation.
- **Master Prototype Hub (`index.html`)**: Built-in interactive viewport switcher (375px mobile, 768px tablet, 1280px desktop, and fluid full screen) with quick page navigation across all 29 pages.

---

## 📁 Repository Structure

```
.
├── index.html                       # Master Prototype Hub & Interactive Viewport Switcher
├── README.md
├── scripts/
│   └── sync-components.py           # Stamps the shared header/footer into every page
└── oncourse-wireframe/
    ├── index.html                   # Redirect to pages/home.html
    ├── components/
    │   ├── header.html              # ★ Global header — single source of truth
    │   ├── footer.html              # ★ Instagram feed + CTA band + footer — single source of truth
    │   ├── footer-cta-home.html     # CTA band copy override used by home.html
    │   ├── consultation-modal.html, lead-form.html, segment-popup.html, sticky-cta.html,
    │   ├── event-update-panel.html  # Reference snippets (not auto-synced)
    │   └── segment-landing-template.html, content-hub-template.html
    ├── pages/
    │   ├── home.html, about.html, team.html, testimonials.html
    │   ├── undergraduate[-knowledge|-success|-events].html
    │   ├── masters[-knowledge|-success|-events].html
    │   ├── mba[-knowledge|-success|-events].html
    │   ├── test-prep[-sat-act|-gmat-gre|-transfer|-knowledge|-success|-events].html
    │   ├── upcoming-events.html, masterclasses.html
    │   ├── contact.html, careers.html, careers-openings.html, careers-apply.html
    │   └── *-program.html           # Redirect stubs → segment overview (Program + Overview merged, Oct 2026)
    └── assets/
        ├── wireframe.css            # Wireframe utility styles
        ├── wireframe.js             # Shared interactions (menus, modals, forms, sliders, events)
        ├── navigation.js            # Renders the black section sub-nav per page
        ├── event-panel.js           # Top event update panel
        ├── images/                  # Logos
        └── docs/                    # Downloadable PDFs
```

---

## 🧩 Editing the Header & Footer

The header and footer are **not** edited inside pages. Every page contains generated blocks:

```html
<!-- @component:header active="mba" -->
  …generated — do not edit…
<!-- /@component:header -->

<!-- @component:footer -->            <!-- home.html uses cta="home" -->
  …generated — do not edit…
<!-- /@component:footer -->
```

1. Edit `oncourse-wireframe/components/header.html` or `footer.html`.
2. Run from the project root:
   ```bash
   python3 scripts/sync-components.py          # rewrite all pages
   python3 scripts/sync-components.py --check  # verify nothing is stale (use before committing)
   ```

- **Active menu item:** set by `active="…"` on the page's header marker (`home`, `about`, `undergraduate`, `masters`, `mba`, `test-prep`, `contact`, `careers`, or empty for none).
- **Per-page CTA copy:** add `cta="name"` to the footer marker and create `components/footer-cta-name.html`; it replaces the `@slot:cta` block in `footer.html`.
- **New page:** copy an existing page, adjust the `active` value, run the sync script, and add it to the hub list in `/index.html`.

---

## 🚀 How to Run Locally

Because this prototype is built with standard HTML5, Tailwind CSS (CDN), and Vanilla JS:

1. **Option A: Direct Browser Opening**  
   Open `index.html` or any page in `oncourse-wireframe/pages/` directly in Google Chrome, Safari, or Edge.

2. **Option B: Local Web Server (Recommended)**  
   ```bash
   # From the project root
   python3 -m http.server 4200
   ```
   Navigate to `http://localhost:4200/` to explore all pages with responsive device frames.
