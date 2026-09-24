import Link from 'next/link';
import { CatalogCard } from '@/components/CatalogCard';
import { automationProducts, getFamily } from '@/lib/catalog';
import { pageMeta } from '@/lib/site';

const family = getFamily('automation')!;

export const metadata = pageMeta('Automation', family.summary, '/products/automation/');

export default function AutomationPage() {
  return (
    <main className="page-main" id="main-content">
      <section className="page-hero" data-reveal>
        <div className="shell relative z-10">
          <p className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/products/">Products</Link><span>/</span><span>Automation</span></p>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <h1 className="page-title">Automation</h1>
            <p className="page-description lg:justify-self-end">{family.summary}</p>
          </div>
        </div>
      </section>
      <section className="section-block">
        <div className="shell"><div className="solution-grid">{automationProducts.map((product) => <CatalogCard key={product.slug} product={product} />)}</div></div>
      </section>
    </main>
  );
}
