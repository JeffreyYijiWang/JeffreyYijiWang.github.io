# AGENTS.md

This file is the durable source of truth for coding agents working on `jeffreyyijiwang.dev`. Keep it accurate when architecture, commands, deployment, or content conventions change. It is not a scratchpad or a task log.

## Purpose and audience

`jeffreyyijiwang.dev` is Jeffrey Wang's public portfolio. It helps recruiters, collaborators, faculty, artists, and engineers understand his work across software engineering, computer graphics, visualization, computer vision, creative coding, games, and interactive systems.

The site must make technically demanding projects understandable to both technical and non-technical readers while preserving links to primary project sources.

## Non-negotiable visual rule

Preserve the established visual identity. Changes should extend the academic/editorial design rather than replace it:

- Harvard crimson header and accents.
- Libre Baskerville headings, PT Serif body text, and Libre Franklin utility text.
- White/light and deep charcoal/dark themes.
- Restrained borders, shadows, compact tags, short crimson title underlines, and generous reading space.
- Horizontal media-and-copy project cards on wide screens and a single-column flow on small screens.
- Motion that feels deliberate and quiet, with a complete reduced-motion path.

Do not introduce a UI framework, default component theme, generic sans-serif redesign, gradient-heavy treatment, excessive cards, or unrelated decorative imagery.

## Repository structure

```text
.
├── .github/workflows/pages.yml   # Validation and GitHub Pages deployment
├── docs/                         # Audit and baseline visual captures
├── public/
│   ├── assets/                   # Identity, organization, project, and resume media
│   ├── CNAME                     # Custom-domain source file
│   ├── robots.txt
│   └── site.webmanifest
├── scripts/
│   ├── generate-routes.ts        # Static route shells, route metadata, 404, sitemap
│   └── verify-build.mjs          # Post-build route/domain/exclusion verification
├── src/
│   ├── components/               # Reusable site shell and content primitives
│   ├── data/                     # Typed portfolio content
│   ├── hooks/                    # Shared browser-preference hooks
│   ├── pages/                    # Route-level composition
│   ├── App.tsx                   # Route table and lazy route boundaries
│   ├── main.tsx                  # React/browser entry point
│   ├── styles.css                # Design tokens and all shared visual rules
│   └── types.ts                  # Content schema
├── Dockerfile
├── nginx.conf
├── index.html                    # Vite document shell and no-flash theme bootstrap
├── package.json
└── vite.config.ts
```

## React component organization

- `SiteLayout` owns the skip link, header, main landmark, footer, scroll restoration, and back-to-top control.
- `Header` owns primary navigation, responsive menu state, sticky/compact behavior, and theme selection.
- `Seo` owns route-specific title, description, canonical, Open Graph, X, and JSON-LD updates at runtime.
- `ProjectCard` renders the shared home/graphics list card. Its internal detail link uses a stretched-link pattern; repository/demo links remain separate sibling actions above the overlay.
- `TagList` renders technology and topic chips.
- `MediaGallery` renders project media, captions, pauseable auto-play carousel controls, a focus-trapped keyboard lightbox, and reduced-motion handling for GIFs.
- `ExternalLink` consistently marks links that open a new tab.
- `Reveal` owns the one-time intersection reveal and exposes content immediately when reduced motion is requested.
- Pages compose these components; pages should not reimplement navigation, cards, tags, external-link behavior, metadata, or galleries.

Prefer focused semantic components over abstract layout wrappers. Add a reusable component when behavior, accessibility, or markup is genuinely shared.

## Routing architecture

React Router's browser history routing is used.

- `/` — home, about, skills, and selected projects
- `/graphics` — filterable graphics and visually oriented work
- `/experience` — professional and teaching timeline
- `/education` — degree, coursework, and prior education
- `/projects/:slug` — shared project detail layout backed by typed project data
- `*` — styled in-app not-found page

`scripts/generate-routes.ts` writes an HTML shell for every public route after the Vite build, with route-specific metadata. It also writes `dist/404.html`. This gives GitHub Pages clean direct-entry URLs and a fallback while preserving normal browser back/forward behavior. Nginx uses `try_files` to fall back to `index.html` for Docker deployments.

When adding or renaming a route, update the React route table, route-generation metadata, tests, build verification, sitemap behavior, and documentation together.

## Project-content schema

`src/types.ts` defines `Project`, `ProjectMedia`, `ProjectLink`, and `ProjectSection`. `src/data/projects.ts` is the single project-content source.

Every project requires:

- A stable URL-safe `slug`.
- Title, summary, and concise TL;DR.
- Technology/topic tags and one or more categories.
- At least one media item with accurate alt text.
- A lightweight WebP `thumbnail` derived from authentic project media for cards and social previews.
- Explicit external links; omit a link rather than pointing to an unrelated source.
- One or more supported documentation sections.
- A `graphics` flag for inclusion on the graphics page.

Optional facts, related slugs, captions, and TODOs render only when supplied. Do not create empty sections. Preserve factual claims from existing content and public repositories, but do not invent metrics, dates, responsibilities, or outcomes. Use `todo` for missing evidence or user input.

The project-content tests enforce unique slugs, valid URLs, accessible media, documentation presence, related-project integrity, and a meaningful graphics collection.

## Graphics-page architecture

`/graphics` derives its collection and category list from `projects.ts`; there is no second graphics dataset. The page uses an accessible pressed-button filter and the same `ProjectCard` component as home. Keep filtering lightweight and remove a category instead of adding empty or one-off taxonomy.

Graphics work can include rendering, Vulkan/OpenGL/WebGL, ray tracing, shaders, GPU compute, volumetric visualization, computer vision, creative coding, and visually substantial game work.

## Styling conventions and design tokens

- Global tokens live at the top of `src/styles.css`; do not scatter raw brand colors, type families, spacing scales, or animation curves through components.
- Maintain both default and `[data-theme='dark']` token values.
- Use BEM-like class names for product components and simple utility names only for cross-cutting patterns such as `visually-hidden`, `muted`, or `eyebrow`.
- Use semantic HTML before adding ARIA.
- Breakpoints are 960px, 768px, and 520px unless a demonstrated layout need requires another.
- Keep the content maximum at 66rem and long-form reading width near 47rem.
- Hover styles must have equivalent focus-visible treatment.
- All motion must be disabled or simplified inside `prefers-reduced-motion: reduce`.

## Asset and image conventions

- Keep static files in `public/assets/` and reference them with root-relative paths.
- Use descriptive lowercase filenames for new assets where practical; existing filenames with spaces remain supported.
- Project media belongs under a project-specific folder.
- Every meaningful image needs accurate, project-specific alt text. Decorative images use empty alt text.
- Provide meaningful captions when context is not obvious from the image alone.
- Give images explicit dimensions or a stable aspect-ratio container to prevent layout shift.
- Eager-load only the first meaningful above-the-fold image. Lazy-load other media.
- Preserve image aspect ratio with `object-fit: contain` in detail galleries; card thumbnails may use `cover` for the established composition.
- GIFs pause behind an opt-in placeholder for users who request reduced motion.
- Do not add generated or stock imagery when existing project media communicates the work.

## Accessibility expectations

Aim for practical WCAG 2.2 AA:

- Preserve one logical `h1` and sequential headings per route.
- Keep semantic banner, navigation, main, section/article, aside, and footer landmarks.
- The skip link must target `#main`.
- Every interaction must work with a keyboard and display a visible focus indicator.
- Project-card main links and secondary external actions must remain valid sibling interactions; never nest links or buttons.
- Icon-only controls need specific accessible names.
- Lightboxes must expose a dialog label, close on Escape, support arrow-key navigation, move focus to close, and return focus when closed.
- Do not communicate state only through color. Filters use `aria-pressed`; gallery dots use tabs and `aria-selected`.
- Route titles and descriptions must be specific, and link text must explain destination or action.
- Respect reduced motion in both CSS and animated-media behavior.

## SEO and metadata conventions

Production URLs always use `https://jeffreyyijiwang.dev`.

- `Seo` updates title, description, canonical, Open Graph, X, and optional JSON-LD on route navigation.
- The post-build generator emits equivalent initial HTML metadata for each known route.
- Project pages use the project's title, summary, and lightweight thumbnail; do not reuse the home description.
- Home emits Person structured data. Project details emit CreativeWork structured data.
- Keep `robots.txt`, generated `sitemap.xml`, the manifest, favicon, and image URLs root-relative/absolute as appropriate.
- Preserve an existing suitable social image. This repository uses existing project and identity media instead of a generic generated card.

## Commands

Install and develop:

```sh
npm ci
npm run dev
```

Validation:

```sh
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run build
npm run check
```

`npm run build` performs TypeScript checking, the Vite production build, route/metadata/sitemap generation, and post-build verification.

Docker production:

```sh
docker build -t jeffrey-portfolio .
docker run --rm -p 8080:8080 jeffrey-portfolio
```

The container runs unprivileged Nginx on port 8080. Health check: `GET /healthz`.

## GitHub Pages deployment

`.github/workflows/pages.yml` runs on pull requests and pushes to `main`.

- Both run lockfile installation, formatting, linting, type checking, tests, and the production build.
- Pull requests stop after validation.
- Pushes upload `dist/` as a Pages artifact and deploy it with the official Pages action.
- `public/CNAME` is copied to `dist/CNAME`; it must contain only `jeffreyyijiwang.dev`.
- Direct routes use generated `route/index.html` files, with `404.html` as the general SPA fallback.

Do not switch back to branch-root static serving without revisiting routing, build output, metadata generation, and CNAME placement.

## Generated files

Do not edit these manually:

- `dist/**` — replaced by every production build.
- `dist/404.html`, route-level `dist/**/index.html`, and `dist/sitemap.xml` — generated by `scripts/generate-routes.ts`.
- `node_modules/**` — installed from `package-lock.json`.
- `*.tsbuildinfo` — TypeScript incremental-build state.

`package-lock.json` is generated but committed. Update it only through npm when dependencies change.

## Definition of done

A change is complete when:

- The established visual identity remains recognizable in light and dark themes.
- Desktop, tablet, and mobile layouts are coherent with no unintended overflow.
- Keyboard navigation, focus indicators, card interactions, menu, gallery, back navigation, and reduced-motion behavior work.
- Project data and metadata remain accurate, structured, and free of unsupported claims.
- New/changed routes work through in-app navigation, direct refresh, browser back/forward, GitHub Pages output, and Docker fallback.
- Images have meaningful alt text, stable layout, and appropriate loading behavior.
- `npm run format:check`, `npm run lint`, `npm run typecheck`, `npm run test`, and `npm run build` pass.
- Docker builds, serves the app as a non-root user, answers `/healthz`, and resolves direct project routes.
- `dist/CNAME` contains only `jeffreyyijiwang.dev`.
- README and this file reflect any changed commands or architecture.
- No secrets, private configuration, adversarial payloads, or unrelated personal content are introduced.

## Important architectural decisions

### Decision Log (append-only)

#### 2026-08-31 — React, TypeScript, and Vite

- **Decision:** Use React 19, TypeScript, and Vite for the portfolio application.
- **Reason:** The site needs reusable components, typed content, client routing, a fast static build, and direct compatibility with GitHub Pages and Docker.
- **Alternatives considered:** Continue hand-authored HTML; use a heavyweight application framework; add a UI framework.
- **Affected:** `package.json`, Vite/TypeScript configuration, `src/**`, deployment build.

#### 2026-08-31 — Browser history routes with generated static entry points

- **Decision:** Use clean browser-history routes and generate an HTML shell for every known route plus `404.html`.
- **Reason:** Clean URLs, direct refreshes, route-specific initial metadata, GitHub Pages compatibility, and normal browser history are all required.
- **Alternatives considered:** Hash routing; one generic 404 redirect script; full static pre-rendering.
- **Affected:** `src/App.tsx`, `scripts/generate-routes.ts`, `scripts/verify-build.mjs`, GitHub Pages deployment, Nginx fallback.

#### 2026-08-31 — Typed TypeScript content instead of per-project page components

- **Decision:** Keep all project content in a typed data collection and render it through one detail layout.
- **Reason:** Project cards, graphics filters, metadata, sitemap entries, related links, and case studies can share one reliable source without duplicated markup.
- **Alternatives considered:** One component per project; Markdown/MDX with additional parsing dependencies; JSON without a first-class schema.
- **Affected:** `src/types.ts`, `src/data/projects.ts`, project pages/components, build scripts, tests.

#### 2026-08-31 — Preserve the original design through CSS tokens

- **Decision:** Rebuild the existing visual language in a shared CSS layer without a component/UI framework.
- **Reason:** The migration is a refactor and expansion, not a redesign. Direct CSS keeps the established type, spacing, motion, and responsive behavior precise with minimal runtime cost.
- **Alternatives considered:** Tailwind; shadcn/default themes; CSS-in-JS; retaining the legacy stylesheet unchanged.
- **Affected:** `src/styles.css`, all UI components, visual QA baseline.

#### 2026-08-31 — Existing media as social and project imagery

- **Decision:** Reuse Jeffrey's existing identity/project imagery for Open Graph previews and project pages.
- **Reason:** The repository already contains authentic, relevant work; generic generated branding would weaken the portfolio and needlessly change its identity.
- **Alternatives considered:** Generate a new generic social card; omit social images entirely.
- **Affected:** route metadata, project schema, post-build generator.

#### 2026-08-31 — Unprivileged Nginx production image

- **Decision:** Build with Node in one Docker stage and serve the static output through `nginxinc/nginx-unprivileged` on port 8080.
- **Reason:** This produces a small, portable runtime, supports direct SPA routes, exposes a health endpoint, and avoids running the web server as root.
- **Alternatives considered:** Node-based static server; root Nginx on port 80; development-server container.
- **Affected:** `Dockerfile`, `nginx.conf`, README deployment commands.

#### 2026-08-31 — Derived WebP thumbnails for listing and social surfaces

- **Decision:** Use small static WebP derivatives for project cards, the headshot, and social metadata while retaining original stills and animations in detail galleries.
- **Reason:** The authentic source-media library includes very large GIFs; loading those on every listing would make the landing and graphics pages unnecessarily expensive.
- **Alternatives considered:** Load full gallery media on cards; remove animations; replace the existing work with unrelated generated imagery.
- **Affected:** `public/assets/generated/**`, the project schema/data, cards, home portrait, metadata, and asset verification.

## Known limitations and future work

- Several projects still need dates, precise team/role boundaries, measured outcomes, or correct public repository URLs. Their project records contain explicit TODOs.
- The Monte Carlo, Scotty3D, computer-vision, Tindoori, AHN, and Unity collections would benefit from primary-source writeups or approved repositories.
- Large legacy GIFs remain expensive inside detail galleries when a user opts into motion. Listings and social previews use generated WebP derivatives; future optimization could add efficient MP4/WebM alternatives without degrading the original visual work.
- Google Fonts are loaded from Google-hosted CSS. Self-hosting is a future privacy/performance option if font licenses and files are added.
- The app updates metadata client-side and generates route-specific document shells, but it does not fully pre-render React page bodies for no-JavaScript clients.
