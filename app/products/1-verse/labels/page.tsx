import Link from 'next/link';
import { CatalogCard } from '@/components/CatalogCard';
import { labelProducts } from '@/lib/catalog';
import { pageMeta } from '@/lib/site';

export const metadata = pageMeta('Labels', 'TagLink and Production Tag, the 1-Verse label products.', '/products/1-verse/labels/');

export default function LabelsPage() {
  return (
    <main className="page-main" id="main-content">
      <section className="page-hero" data-reveal>
        <div className="shell relative z-10">
          <p className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/products/">Products</Link><span>/</span><Link href="/products/1-verse/">1-Verse</Link><span>/</span><span>Labels</span></p>
          <div className="mt-14 max-w-3xl">
            <h1 className="page-title">Labels</h1>
            <p className="page-description">TagLink and Production Tag.</p>
          </div>
        </div>
      </section>
      <section className="section-block">
        <div className="shell"><div className="catalog-grid">{labelProducts.map((product) => <CatalogCard key={product.slug} product={product} />)}</div></div>
      </section>
    </main>
  );
}
