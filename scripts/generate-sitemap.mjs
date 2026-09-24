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
  ['/products/ioe/', 0.8, 'weekly'],
  ['/products/ioe/smart-switch-modules/', 0.7, 'monthly'],
  ['/products/ioe/touch-controls/', 0.7, 'monthly'],
  ['/products/ioe/glass-touch-panels/', 0.7, 'monthly'],
  ['/products/ioe/smart-fans/', 0.7, 'monthly'],
  ['/products/ioe/smart-appliances/', 0.7, 'monthly'],
  ['/products/ioe/pump-controllers/', 0.7, 'monthly'],
  ['/products/ioe/power-distribution/', 0.7, 'monthly'],
  ['/products/dude/', 0.8, 'weekly'],
  ['/products/1-verse/', 0.8, 'weekly'],
  ['/products/1-verse/labels/', 0.7, 'monthly'],
  ['/products/1-verse/e-labels/', 0.7, 'monthly'],
  ['/products/1-verse/e-labels/jewellery/', 0.6, 'monthly'],
  ['/products/1-verse/e-labels/retail/', 0.6, 'monthly'],
  ['/products/automation/', 0.8, 'weekly'],
  ['/about/', 0.8, 'monthly'],
  ['/careers/', 0.7, 'monthly'],
  ['/company/', 0.6, 'monthly'],
  ['/partnership/', 0.7, 'monthly'],
  ['/use-cases/', 0.7, 'monthly'],
  ['/resources/', 0.6, 'monthly'],
  ['/resources/faq/', 0.5, 'monthly'],
  ['/pricing/', 0.6, 'monthly'],
  ['/contact/', 0.8, 'monthly'],
  ['/request-demo/', 0.8, 'monthly'],
];

for (const slug of software) {
  pages.push([`/software/${slug}/`, 0.7, 'monthly']);
  pages.push([`/products/dude/${slug}/`, 0.6, 'monthly']);
}
for (const slug of hardware) pages.push([`/products/${slug}/`, 0.5, 'monthly']);
const catalog = readFileSync('lib/catalog.ts', 'utf8');
for (const match of catalog.matchAll(/item\('([^']+)', '[^']*', '([^']+)'/g)) {
  pages.push([`/products/ioe/${match[2]}/${match[1]}/`, 0.6, 'monthly']);
}
for (const slug of ['taglink', 'production-tag']) pages.push([`/products/1-verse/labels/${slug}/`, 0.6, 'monthly']);
for (const slug of ['jewellery-elabel-1inch', 'jewellery-elabel-1-5inch', 'jewellery-elabel-2-1inch', 'elabel-display-2-1inch-shops', 'elabel-display-2-9inch-shops', 'elabel-display-4-1inch-shops']) {
  pages.push([`/products/1-verse/e-labels/${slug}/`, 0.6, 'monthly']);
}
for (const slug of ['industrial-machine-automation', 'asset-facility-automation', 'energy-power-automation', 'process-automation']) {
  pages.push([`/products/automation/${slug}/`, 0.6, 'monthly']);
}
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
