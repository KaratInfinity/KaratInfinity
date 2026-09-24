import Link from 'next/link';
import { FamilyCards } from '@/components/FamilyCards';
import { pageMeta } from '@/lib/site';

export const metadata = pageMeta('E-Labels', 'Jewellery and retail e-label displays from the Karat Infinity catalogue.', '/products/1-verse/e-labels/');

export default function ELabelsPage() {
  return (
    <main className="page-main" id="main-content">
      <section className="page-hero" data-reveal>
        <div className="shell relative z-10">
          <p className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/products/">Products</Link><span>/</span><Link href="/products/1-verse/">1-Verse</Link><span>/</span><span>E-Labels</span></p>
          <div className="mt-14 max-w-3xl">
            <h1 className="page-title">E-Labels</h1>
            <p className="page-description">Jewellery and retail e-label displays.</p>
          </div>
        </div>
      </section>
      <section className="section-block">
        <div className="shell">
          <FamilyCards cards={[
            { href: '/products/1-verse/e-labels/jewellery/', eyebrow: '3 products', title: 'Jewellery E-Labels', text: '1 inch, 1.5 inch and 2.1 inch jewellery displays.', action: 'View jewellery' },
            { href: '/products/1-verse/e-labels/retail/', eyebrow: '3 products', title: 'Retail E-Labels', text: '2.1 inch, 2.9 inch and 4.1 inch shop displays.', action: 'View retail' },
          ]} />
        </div>
      </section>
    </main>
  );
}
