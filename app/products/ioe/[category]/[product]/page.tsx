import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductDetail } from '@/components/ProductDetail';
import { detailRoute, getCatalogProduct, getFamily, getIoeCategory, ioeProducts } from '@/lib/catalog';
import { pageMeta } from '@/lib/site';

type PageProps = { params: { category: string; product: string } };

export function generateStaticParams() {
  return ioeProducts.map((product) => ({ category: product.category, product: product.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const product = getCatalogProduct('ioe', params.product);
  if (!product || product.category !== params.category) return { title: 'Product' };
  return pageMeta(product.name, product.shortDescription, detailRoute(product));
}

export default function IoeProductPage({ params }: PageProps) {
  const product = getCatalogProduct('ioe', params.product);
  const category = getIoeCategory(params.category);
  const family = getFamily('ioe');
  if (!product || !category || !family || product.category !== category.slug) notFound();
  return (
    <ProductDetail
      product={product}
      family={family}
      crumbs={[
        { href: '/products/', label: 'Products' },
        { href: '/products/ioe/', label: 'IOE' },
        { href: category.href, label: category.name },
        { label: product.name },
      ]}
    />
  );
}
