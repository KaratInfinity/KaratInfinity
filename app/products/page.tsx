import { FamilyCards } from '@/components/FamilyCards';
import { productFamilies } from '@/lib/catalog';
import { pageMeta } from '@/lib/site';
import Link from 'next/link';

export const metadata = pageMeta(
  'Products',
  'Karat Infinity products: IOE connected products, DUDE software, 1-Verse product identity, and automation.',
  '/products/',
);

export default function ProductsPage() {
  return (
    <main className="page-main" id="main-content">
      <section className="page-hero" data-reveal>
        <div className="shell relative z-10">
          <p className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Products</span></p>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <h1 className="page-title">Four product <span className="gradient-text">families.</span></h1>
            <p className="page-description lg:justify-self-end">IOE, DUDE, 1-Verse and Automation. Choose a family to see its categories and products.</p>
          </div>
        </div>
      </section>
      <section className="section-block">
        <div className="shell">
          <FamilyCards cards={productFamilies.map((family) => ({
            href: family.href,
            eyebrow: 'Product family',
            title: family.name,
            text: family.navSummary,
            action: `View ${family.viewLabel}`,
          }))} />
        </div>
      </section>
    </main>
  );
}
