# Portfolio baseline audit

Audit date: 2026-08-31

This audit records the static portfolio immediately before its React migration. Baseline captures are stored in `docs/audit/screenshots/`.

## Current system

- Three hand-authored HTML pages: `index.html`, `experiences.html`, and `education.html`.
- One shared stylesheet (`assets/css/styles.css`) and one shared script (`assets/js/main.js`).
- No package manifest, build step, test suite, Docker configuration, CI workflow, or generated deployment artifact.
- GitHub Pages serves the repository with the root `CNAME` file containing only `jeffreyyijiwang.dev`.
- All project and identity content is embedded directly in HTML. Repeated headers, navigation, theme bootstrapping, critical entrance styles, and footer markup are duplicated between pages.

## Content and hierarchy

- Home: identity/contact hero, interests, about text, technology list, and 12 selected projects.
- Experience: one current role and four previous roles in a vertical timeline.
- Education: Carnegie Mellon University degree/coursework and Coppell High School history.
- Primary navigation: Home, Projects, Experience, Education.
- Project cards combine a media carousel, title, technology chips, summary, and optional repository/demo link. Cards do not currently open internal detail pages.

## Visual system

- Editorial/academic identity with a crimson header (`#a51c30`), white canvas, restrained borders, and minimal shadows.
- Dark theme uses `#12161a` background, `#1b2228` surfaces, `#e6e9ec` foreground, and `#e0707e` links while retaining the crimson header.
- Headings/logo: Libre Baskerville. Body: PT Serif. Utility text/chips: Libre Franklin.
- Root spacing tokens: `0.35rem`, `0.75rem`, `1.25rem`, `2rem`, and `3rem`; maximum content width is `66rem`; primary radius is `6px`.
- Body copy is 1.2rem/1.65. Section titles use a short crimson underline. Project cards use a wide media-left/content-right layout on desktop and stack on narrow screens.
- Breakpoints are 960px, 768px, and 480px.

## Responsive behavior

- Desktop uses a single-line sticky header, a three-column hero, and horizontal project cards.
- Tablet retains the full navigation while tightening the hero and content spacing.
- At 768px and below the navigation becomes a menu button, the hero stacks and centers, interests move below the identity block, and cards become vertical.
- At 480px and below type, control sizes, and gutters tighten further.
- The existing page has no horizontal overflow in the inspected 1440px, 1024px, and 390px views.

## Motion and interaction

- Staggered header and hero entrance animations.
- IntersectionObserver reveals for section headings, skills, project cards, experience items, and education items.
- Directional crimson wipes between HTML pages.
- Circular theme transition where the View Transitions API is available.
- Sticky header compaction, active navigation indicator, back-to-top control, skill tooltips, copy-email feedback, carousels, and an image/video lightbox.
- Reduced-motion media queries disable or simplify the major transitions.

## Assets and media

- Existing identity, organization, project, GIF, and resume assets are local and will be retained.
- Project media is numerous and in some cases very large; several GIFs are tens of megabytes. The React migration must lazy-load below-the-fold media and avoid mounting every carousel asset at once.
- Source markup provides explicit dimensions for most project images, but many captions/alt labels are copied from unrelated projects and need correction.
- Google Fonts and Devicon currently load from third-party CDNs; the visual identity depends on those font families.

## Accessibility baseline

### Existing strengths

- Skip link, semantic landmarks, heading hierarchy, labeled theme/menu controls, descriptive organization-logo alt text, keyboard-operable carousel viewports, and reduced-motion rules.
- Visible focus rules exist for primary interactive elements.

### Issues to fix

- Project cards are not complete-container links and have no internal documentation destination.
- Several carousel names and image alt strings are copied from unrelated projects.
- Some icon-only links expose only a platform name instead of the project/action context.
- The empty footer provides no useful closing navigation.
- The resume link points to `assets/resume/Jeffrey_Wang_Resume.pdf`, but the checked-in file is `assets/resume/Jeffrey Wang Resume.pdf`.
- The Unity/itch.io anchor contains an extra quote in its `href` attribute.
- Some carousels contain inconsistent initial `is-active` states.

## SEO and deployment baseline

- Pages have a viewport, short description, title, profile-image favicon, and `lang="en"`.
- Missing: canonical URLs, Open Graph/X metadata, project-specific metadata, structured data, web manifest, `robots.txt`, and `sitemap.xml`.
- There is no GitHub Actions workflow. Deployment appears to be direct GitHub Pages hosting of repository files.
- There is no SPA fallback for direct detail-route requests.

## Public repository findings

- Vulkan Render: public C++20/Vulkan source with multiple graphics and compute pipelines, environment-map processing, PBR shaders, shadow support, tone mapping, and frustum-culling code. The short README still describes tutorial starter code, so portfolio copy must distinguish source-observable features from unsupported claims.
- Human Body Visualization: public Python project described as an experimental multi-planar/curved-volume visualization and image-making system with timeline, analysis, and screen-space effects.
- Generative Lego Figure Pipeline: public Python/Blender/LeoCAD/LDraw/VPype pipeline that generates minifigures, exports CAD/DAE assets, renders Freestyle and raster edges, merges/optimizes SVGs, and arranges results into typologies.
- CMU Maps: public TypeScript/React monorepo for campus floorplans, room-level navigation, search, and building/room information, with server and data-processing packages.
- O-Quest: public Rust/Axum/SeaORM backend plus React/Tauri clients and QR tooling. Source contains challenge/reward CSV ingestion, service layers, PostgreSQL entities, caching, QR export, geolocation, and completion flows.
- Ultrasound Tongue Imaging: public Python/p5.js/Teachable Machine exploration using a self-collected 3,000-image dataset across six short-vowel classes, an ultrasound/OBS/capture-card pipeline, shader studies, and screen-printed outputs.
- Projects without a trustworthy linked repository will retain the current factual summary and use explicit TODOs for missing dates, role boundaries, outcomes, or source links.

## Migration plan

1. Introduce a minimal Vite + React + TypeScript toolchain without a UI framework, preserve every checked-in asset, and move visual constants into shared CSS custom properties.
2. Build shared shell, navigation, footer, theme, media, project-card, tag, timeline, back-navigation, and metadata components.
3. Move projects, experience, and education into typed data. Preserve all current content and links, correcting only confirmed broken markup/paths and clarifying source-supported project descriptions.
4. Add `/projects/:slug`, `/graphics`, `/experience`, `/education`, and styled not-found routes. Use browser history routing with a generated `404.html` SPA fallback for GitHub Pages and Nginx `try_files` for Docker.
5. Make each project card keyboard-accessible as a whole while keeping repository/demo controls as separate sibling actions.
6. Add project-specific titles/descriptions/canonical/Open Graph metadata, JSON-LD, favicon/manifest/robots/sitemap assets, and retain `jeffreyyijiwang.dev` everywhere.
7. Add unit tests, static route/link verification, linting, type checking, formatting checks, production build, GitHub Pages CI, multi-stage Docker/Nginx serving, and a health endpoint.
8. Compare the React site with these baseline captures at desktop, tablet, and mobile widths; verify theme, menu, keyboard focus, reduced-motion CSS, direct routes, browser history, and unknown-route handling.
