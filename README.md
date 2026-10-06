# Jeffrey Wang portfolio

The source for [jeffreyyijiwang.dev](https://jeffreyyijiwang.dev), a React and TypeScript portfolio for Jeffrey Wang's software, graphics, visualization, and interactive work.

## Local development

Requirements: Node.js 22+ and npm.

```sh
npm ci
npm run dev
```

Vite prints the local URL. Production preview:

```sh
npm run build
npm run preview
```

## Quality checks

```sh
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run build
```

Run every check with `npm run check`. The production build also generates per-route HTML entry points, `404.html`, and `sitemap.xml`, then verifies important routes, media, the custom domain, and excluded-content rules.

## Docker

The production image builds the Vite app and serves it through unprivileged Nginx with SPA fallback routing.

```sh
docker build -t jeffrey-portfolio .
docker run --rm -p 8080:8080 jeffrey-portfolio
```

Open `http://localhost:8080`. The container health endpoint is `http://localhost:8080/healthz`.

## Content authoring

- Project cards, metadata, media, detail-page sections, related projects, and TODOs live in `src/data/projects.ts`.
- Experience, education, interests, and skills live in `src/data/profile.ts`.
- Static media belongs under `public/assets/` and is referenced with root-relative URLs such as `/assets/projects/example/image.png`.
- Lightweight WebP card/social thumbnails belong under `public/assets/generated/`; keep the original media in each detail gallery.
- Reusable UI lives in `src/components/`; route-level composition lives in `src/pages/`.
- Keep unknown or unverified facts in a project's explicit `todo` field instead of guessing.

## GitHub Pages

Pull requests run validation only. Pushes to `main` build and deploy `dist/` with GitHub Pages Actions. `public/CNAME` is copied into the build and must contain only:

```text
jeffreyyijiwang.dev
```

Clean direct URLs work through generated route entry points. `dist/404.html` is the fallback for unknown and client-side routes.

See `AGENTS.md` for the architecture, conventions, decision log, and definition of done. The original-site audit and comparison captures are in `docs/site-audit.md` and `docs/audit/screenshots/`.
