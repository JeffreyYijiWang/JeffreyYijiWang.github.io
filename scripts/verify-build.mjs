import { access, readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');
const requiredFiles = [
  'index.html',
  '404.html',
  'CNAME',
  'robots.txt',
  'sitemap.xml',
  'site.webmanifest',
  'graphics/index.html',
  'experience/index.html',
  'education/index.html',
];

for (const file of requiredFiles) await access(join(dist, file));

const cname = (await readFile(join(dist, 'CNAME'), 'utf8')).trim();
if (cname !== 'jeffreyyijiwang.dev') throw new Error(`Unexpected CNAME: ${cname}`);

const routeEntries = await readdir(join(dist, 'projects'), { withFileTypes: true });
if (routeEntries.filter((entry) => entry.isDirectory()).length < 12) {
  throw new Error('Expected a generated HTML entry point for every project route.');
}

const filesToScan = [
  join(root, 'src'),
  join(root, 'scripts'),
  join(root, 'index.html'),
  join(root, 'public', 'CNAME'),
];
const excludedPatterns = [
  ['jarod', 'blo.ch'].join(''),
  ['prompt', 'injection'].join('.?'),
  ['indirect', 'demo'].join('_'),
  ['about', 'payloads'].join('-'),
];
const excludedExpression = new RegExp(excludedPatterns.join('|'), 'i');

async function scan(path) {
  const stat = await import('node:fs/promises').then(({ stat }) => stat(path));
  if (stat.isDirectory()) {
    const entries = await readdir(path, { withFileTypes: true });
    for (const entry of entries) await scan(join(path, entry.name));
    return;
  }
  const text = await readFile(path, 'utf8');
  if (excludedExpression.test(text)) {
    throw new Error(`Excluded reference found in ${path}`);
  }
}

for (const path of filesToScan) await scan(path);

console.log('Build verification passed: routes, CNAME, metadata assets, and exclusion checks.');
