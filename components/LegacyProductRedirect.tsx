'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { detailRoute, getCatalogProductBySlug } from '@/lib/catalog';

export function LegacyProductRedirect({ slug }: { slug: string }) {
  const router = useRouter();
  const product = getCatalogProductBySlug(slug);
  useEffect(() => {
    if (product) router.replace(detailRoute(product));
  }, [product, router]);
  return (
    <main className="page-main" id="main-content">
      <section className="page-hero">
        <div className="shell">
          <p className="page-description">{product ? `Opening ${product.name}.` : 'Opening product.'}</p>
        </div>
      </section>
    </main>
  );
}
