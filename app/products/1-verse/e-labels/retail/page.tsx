import Link from 'next/link';
import { CatalogCard } from '@/components/CatalogCard';
import { productsInCategory } from '@/lib/catalog';
import { pageMeta } from '@/lib/site';

export const metadata = pageMeta('Retail E-Labels', 'Retail e-label displays in the 1-Verse range.', '/products/1-verse/e-labels/retail/');

export default function RetailLabelsPage() {
  const products = productsInCategory('1-verse', 'retail');
  return (
    <main className="page-main" id="main-content">
      <section className="page-hero" data-reveal>
        <div className="shell relative z-10">
          <p className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/products/">Products</Link><span>/</span><Link href="/products/1-verse/">1-Verse</Link><span>/</span><Link href="/products/1-verse/e-labels/">E-Labels</Link><span>/</span><span>Retail</span></p>
          <h1 className="page-title mt-14">Retail E-Labels</h1>
        </div>
      </section>
      <section className="section-block">
        <div className="shell"><div className="catalog-grid">{products.map((product) => <CatalogCard key={product.slug} product={product} />)}</div></div>
      </section>
    </main>
  );
}
