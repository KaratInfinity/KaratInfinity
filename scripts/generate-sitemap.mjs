import { readFileSync, writeFileSync } from 'node:fs';

const site = 'https://karatinfinity.com';

function slugs(file) {
  return [...readFileSync(file, 'utf8').matchAll(/slug:\s*'([^']+)'/g)].map((match) => match[1]);
}

const hardware = slugs('lib/products.ts');
const software = slugs('lib/software.ts');
const resources = slugs('lib/resources.ts');
const pages = [
  ['/', 1, 'weekly'],
  ['/software/', 0.9, 'weekly'],
  ['/products/', 0.9, 'weekly'],
  ['/about/', 0.8, 'monthly'],
  ['/company/', 0.6, 'monthly'],
  ['/partnership/', 0.7, 'monthly'],
  ['/use-cases/', 0.7, 'monthly'],
  ['/resources/', 0.6, 'monthly'],
  ['/resources/faq/', 0.5, 'monthly'],
  ['/pricing/', 0.6, 'monthly'],
  ['/contact/', 0.8, 'monthly'],
  ['/request-demo/', 0.8, 'monthly'],
];

for (const slug of software) pages.push([`/software/${slug}/`, 0.7, 'monthly']);
for (const slug of hardware) pages.push([`/products/${slug}/`, 0.6, 'monthly']);
for (const slug of resources) pages.push([`/resources/${slug}/`, 0.5, 'monthly']);

const lastmod = new Date().toISOString().slice(0, 10);
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    ([loc, priority, freq]) => `  <url>
    <loc>${site}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${Number(priority).toFixed(1)}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

writeFileSync('public/sitemap.xml', xml);
console.log(
  `Wrote public/sitemap.xml with ${pages.length} URLs (${hardware.length} products, ${software.length} software, ${resources.length} resources).`,
);
