import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CatalogCard } from '@/components/CatalogCard';
import { getFamily, getIoeCategory, productsInCategory } from '@/lib/catalog';
import { pageMeta } from '@/lib/site';

type PageProps = { params: { category: string } };

export function generateStaticParams() {
  return getFamily('ioe')!.categories.map((category) => ({ category: category.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const category = getIoeCategory(params.category);
  if (!category) return { title: 'IOE' };
  return pageMeta(category.name, category.summary, category.href);
}

export default function IoeCategoryPage({ params }: PageProps) {
  const category = getIoeCategory(params.category);
  if (!category) notFound();
  const products = productsInCategory('ioe', category.slug);
  return (
    <main className="page-main" id="main-content">
      <section className="page-hero" data-reveal>
        <div className="shell relative z-10">
          <p className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/products/">Products</Link><span>/</span><Link href="/products/ioe/">IOE</Link><span>/</span><span>{category.name}</span></p>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <h1 className="page-title">{category.name}</h1>
            <p className="page-description lg:justify-self-end">{category.summary}</p>
          </div>
        </div>
      </section>
      <section className="section-block">
        <div className="shell"><div className="catalog-grid">{products.map((product) => <CatalogCard key={product.slug} product={product} />)}</div></div>
      </section>
    </main>
  );
}
