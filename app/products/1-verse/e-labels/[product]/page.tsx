import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductDetail } from '@/components/ProductDetail';
import { detailRoute, eLabelProducts, getCatalogProduct, getFamily } from '@/lib/catalog';
import { pageMeta } from '@/lib/site';

type PageProps = { params: { product: string } };

export function generateStaticParams() {
  return eLabelProducts.map((product) => ({ product: product.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const product = eLabelProducts.find((item) => item.slug === params.product);
  if (!product) return { title: 'E-Label' };
  return pageMeta(product.name, product.shortDescription, detailRoute(product));
}

export default function ELabelProductPage({ params }: PageProps) {
  const product = getCatalogProduct('1-verse', params.product);
  const family = getFamily('1-verse');
  if (!product || !family || (product.category !== 'jewellery' && product.category !== 'retail')) notFound();
  const group = product.category === 'jewellery'
    ? { href: '/products/1-verse/e-labels/jewellery/', label: 'Jewellery' }
    : { href: '/products/1-verse/e-labels/retail/', label: 'Retail' };
  return (
    <ProductDetail
      product={product}
      family={family}
      crumbs={[
        { href: '/products/', label: 'Products' },
        { href: '/products/1-verse/', label: '1-Verse' },
        { href: '/products/1-verse/e-labels/', label: 'E-Labels' },
        { href: group.href, label: group.label },
        { label: product.name },
      ]}
    />
  );
}
