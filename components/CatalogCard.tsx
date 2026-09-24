import Image from 'next/image';
import Link from 'next/link';
import { demoHref, detailRoute, type CatalogProduct } from '@/lib/catalog';
import { ModuleMedia } from './ModuleMedia';
import { ArrowRight } from './Icons';

export function CatalogCard({ product }: { product: CatalogProduct }) {
  return (
    <article className="catalog-card">
      <Link href={detailRoute(product)} className={product.mediaSlug ? 'catalog-photo catalog-photo-fill' : 'catalog-photo'} aria-label={product.name}>
        {product.mediaSlug ? (
          <ModuleMedia slug={product.mediaSlug} />
        ) : product.image ? (
          <Image src={product.image} alt={product.name} width={640} height={640} />
        ) : (
          <span className="catalog-placeholder" role="img" aria-label={`${product.name} image unavailable`} />
        )}
      </Link>
      <div className="catalog-copy">
        <h3>{product.name}</h3>
        <p>{product.shortDescription}</p>
        <div className="catalog-actions">
          <Link href={detailRoute(product)} className="card-link">Learn more <ArrowRight className="h-4 w-4" /></Link>
          <Link href={demoHref(product.family, product.slug)} className="card-link">Request demo <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </article>
  );
}
