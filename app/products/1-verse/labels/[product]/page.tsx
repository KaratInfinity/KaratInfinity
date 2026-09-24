import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductDetail } from '@/components/ProductDetail';
import { detailRoute, getCatalogProduct, getFamily, labelProducts } from '@/lib/catalog';
import { pageMeta } from '@/lib/site';

type PageProps = { params: { product: string } };

export function generateStaticParams() {
  return labelProducts.map((product) => ({ product: product.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const product = getCatalogProduct('1-verse', params.product);
  if (!product || product.category !== 'labels') return { title: 'Labels' };
  return pageMeta(product.name, product.shortDescription, detailRoute(product));
}

export default function LabelProductPage({ params }: PageProps) {
  const product = getCatalogProduct('1-verse', params.product);
  const family = getFamily('1-verse');
  if (!product || !family || product.category !== 'labels') notFound();
  return (
    <ProductDetail
      product={product}
      family={family}
      crumbs={[
        { href: '/products/', label: 'Products' },
        { href: '/products/1-verse/', label: '1-Verse' },
        { href: '/products/1-verse/labels/', label: 'Labels' },
        { label: product.name },
      ]}
    />
  );
}
