import { access, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { experiences } from '../src/data/profile.ts';
import { projects } from '../src/data/projects.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const siteUrl = 'https://jeffreyyijiwang.dev';

type RouteMeta = { path: string; title: string; description: string; image?: string };

const routes: RouteMeta[] = [
  {
    path: '/',
    title: 'Jeffrey Wang — Computer Graphics & Software',
    description:
      'Jeffrey Wang is a computer science and art student building graphics, visualization, web, mobile, and interactive systems.',
    image: '/assets/generated/headshot.webp',
  },
  {
    path: '/graphics',
    title: 'Graphics Portfolio — Jeffrey Wang',
    description:
      'Rendering, visualization, computer vision, creative coding, shaders, and interactive graphics work by Jeffrey Wang.',
    image: projects.find((project) => project.graphics)?.thumbnail,
  },
  {
    path: '/experience',
    title: 'Experience — Jeffrey Wang',
    description:
      'Software engineering, teaching, graphics, and product-development experience at Carnegie Mellon, ScottyLabs, and partner organizations.',
  },
  {
    path: '/education',
    title: 'Education — Jeffrey Wang',
    description:
      'Jeffrey Wang studies computer science and art with a concentration in computer graphics and systems engineering at Carnegie Mellon University.',
  },
  ...projects.map((project) => ({
    path: `/projects/${project.slug}`,
    title: `${project.title} — Jeffrey Wang`,
    description: project.summary,
    image: project.thumbnail,
  })),
];

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function withMeta(template: string, route: RouteMeta) {
  const canonical = `${siteUrl}${route.path === '/' ? '/' : route.path}`;
  const imageUrl = route.image ? `${siteUrl}${route.image}` : undefined;
  const social = [
    `<meta property="og:title" content="${escapeHtml(route.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`,
    `<meta property="og:type" content="${route.path.startsWith('/projects/') ? 'article' : 'website'}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta name="twitter:card" content="${imageUrl ? 'summary_large_image' : 'summary'}" />`,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
    imageUrl ? `<meta property="og:image" content="${imageUrl}" />` : '',
    imageUrl ? `<meta name="twitter:image" content="${imageUrl}" />` : '',
  ]
    .filter(Boolean)
    .join('\n    ');

  return template
    .replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(route.title)}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/s,
      `<meta name="description" content="${escapeHtml(route.description)}" />`,
    )
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/s,
      `<link rel="canonical" href="${canonical}" />`,
    )
    .replace('</head>', `    ${social}\n  </head>`);
}

const template = await readFile(join(dist, 'index.html'), 'utf8');

for (const project of projects) {
  await access(join(root, 'public', project.thumbnail.replace(/^\//, '')));
  for (const media of project.media) {
    await access(join(root, 'public', media.src.replace(/^\//, '')));
  }
}

const shellAssets = [
  '/assets/generated/headshot.webp',
  '/assets/resume/Jeffrey%20Wang%20Resume.pdf',
  ...experiences.map((experience) => experience.logo),
];
for (const asset of shellAssets) {
  await access(join(root, 'public', decodeURIComponent(asset.replace(/^\//, ''))));
}

for (const route of routes) {
  const output =
    route.path === '/' ? join(dist, 'index.html') : join(dist, route.path.slice(1), 'index.html');
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, withMeta(template, route));
}

await writeFile(join(dist, '404.html'), withMeta(template, routes[0]));

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${siteUrl}${route.path}</loc></url>`).join('\n')}
</urlset>
`;
await writeFile(join(dist, 'sitemap.xml'), sitemap);
