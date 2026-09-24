import Image from 'next/image';
import Link from 'next/link';
import { demoHref, type CatalogProduct, type ProductFamily } from '@/lib/catalog';
import { ModuleMedia } from './ModuleMedia';
import { ArrowRight } from './Icons';

export function ProductDetail({
  product,
  family,
  crumbs,
}: {
  product: CatalogProduct;
  family: ProductFamily;
  crumbs: { href?: string; label: string }[];
}) {
  return (
    <main className="page-main" id="main-content">
      <section className="page-hero">
        <div className="shell">
          <p className="breadcrumb">
            <Link href="/">Home</Link>
            {crumbs.map((crumb) => (
              <span key={crumb.label}>
                <span>/</span>
                {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : <span>{crumb.label}</span>}
              </span>
            ))}
          </p>
          <div className="hardware-hero">
            <div className={product.mediaSlug ? 'hardware-hero-photo hardware-hero-media' : 'hardware-hero-photo'}>
              {product.mediaSlug ? (
                <ModuleMedia slug={product.mediaSlug} />
              ) : product.image ? (
                <Image src={product.image} alt={product.name} width={900} height={900} priority />
              ) : (
                <span className="catalog-placeholder catalog-placeholder-hero" role="img" aria-label={`${product.name} image unavailable`} />
              )}
            </div>
            <div>
              <span className="product-category">{family.name}</span>
              <h1 className="page-title mt-6">{product.name}</h1>
              <p className="page-description">{product.shortDescription}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={demoHref(product.family, product.slug)} className="primary-button">Request a demo <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {(product.capabilities?.length || product.outcomes?.length || (product.overview && product.overview !== product.shortDescription)) && (
        <section className="section-block" id="overview">
          <div className="shell grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
            <div>
              <p className="eyebrow-pill">Overview</p>
              <h2 className="section-title mt-7">{product.name}</h2>
            </div>
            <div>
              {product.overview ? <p className="max-w-3xl text-xl leading-9 text-muted">{product.overview}</p> : null}
              {product.capabilities?.length ? (
                <div className="mt-12 grid gap-4 sm:grid-cols-2">
                  {product.capabilities.map((capability, index) => (
                    <div key={capability} className="info-card flex min-h-36 flex-col justify-between">
                      <span className="feature-index">0{index + 1}</span>
                      <h3 className="mt-8 text-lg font-semibold tracking-[-0.02em]">{capability}</h3>
                    </div>
                  ))}
                </div>
              ) : null}
              {product.outcomes?.length ? (
                <div className="mt-10 border-t theme-border">
                  {product.outcomes.map((outcome, index) => (
                    <div key={outcome} className="flex items-center gap-5 border-b theme-border py-6">
                      <span className="product-number">0{index + 1}</span>
                      <p className="text-lg font-semibold tracking-[-0.025em] text-muted">{outcome}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
