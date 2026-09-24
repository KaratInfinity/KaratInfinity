import Link from 'next/link';
import { FamilyCards } from '@/components/FamilyCards';
import { getFamily, productsInCategory } from '@/lib/catalog';
import { pageMeta } from '@/lib/site';

const family = getFamily('ioe')!;

export const metadata = pageMeta('IOE', family.summary, '/products/ioe/');

export default function IoePage() {
  return (
    <main className="page-main" id="main-content">
      <section className="page-hero" data-reveal>
        <div className="shell relative z-10">
          <p className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/products/">Products</Link><span>/</span><span>IOE</span></p>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <h1 className="page-title">IOE</h1>
            <p className="page-description lg:justify-self-end">{family.summary}</p>
          </div>
        </div>
      </section>
      <section className="section-block">
        <div className="shell">
          <FamilyCards cards={family.categories.map((category) => ({
            href: category.href,
            eyebrow: `${productsInCategory('ioe', category.slug).length} products`,
            title: category.name,
            text: category.summary,
            action: 'View products',
          }))} />
        </div>
      </section>
    </main>
  );
}
