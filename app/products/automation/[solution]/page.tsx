import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductDetail } from '@/components/ProductDetail';
import { automationProducts, detailRoute, getCatalogProduct, getFamily } from '@/lib/catalog';
import { pageMeta } from '@/lib/site';

type PageProps = { params: { solution: string } };

export function generateStaticParams() {
  return automationProducts.map((product) => ({ solution: product.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const product = getCatalogProduct('automation', params.solution);
  if (!product) return { title: 'Automation' };
  return pageMeta(product.name, product.shortDescription, detailRoute(product));
}

export default function AutomationSolutionPage({ params }: PageProps) {
  const product = getCatalogProduct('automation', params.solution);
  const family = getFamily('automation');
  if (!product || !family) notFound();
  return (
    <ProductDetail
      product={product}
      family={family}
      crumbs={[
        { href: '/products/', label: 'Products' },
        { href: '/products/automation/', label: 'Automation' },
        { label: product.name },
      ]}
    />
  );
}
