import { LegacyProductRedirect } from '@/components/LegacyProductRedirect';
import { catalogProducts, getCatalogProductBySlug } from '@/lib/catalog';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return catalogProducts.map((product) => ({ slug: product.slug }));
}

export default function LegacyProductPage({ params }: { params: { slug: string } }) {
  const product = getCatalogProductBySlug(params.slug);
  if (!product) notFound();
  return <LegacyProductRedirect slug={params.slug} />;
}
