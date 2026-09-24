import type { Metadata } from 'next';
import { ModuleMedia } from '@/components/ModuleMedia';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from '@/components/Icons';
import { demoHref } from '@/lib/catalog';
import { getSoftwareProduct, softwareProducts } from '@/lib/software';
import { pageMeta } from '@/lib/site';

type ProductPageProps = { params: { slug: string } };

export function generateStaticParams() {
  return softwareProducts.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getSoftwareProduct(params.slug);
  if (!product) return { title: 'Software' };
  return pageMeta(product.title, product.description, `/software/${product.slug}/`);
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getSoftwareProduct(params.slug);
  if (!product) notFound();

  const currentIndex = softwareProducts.findIndex((item) => item.slug === product.slug);
  const nextProduct = softwareProducts[(currentIndex + 1) % softwareProducts.length];

  return (
    <main className="page-main" id="main-content">
      <section className="page-hero module-hero">
        <ModuleMedia slug={product.slug} video priority />
        <div className="shell relative z-10 module-hero-content">
          <p className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/software/">Softwares</Link><span>/</span><span>{product.shortTitle}</span></p>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="product-number">{product.number}</span>
                <span className="product-category">{product.category}</span>
              </div>
              <h1 className="page-title mt-8 module-title">{product.title}</h1>
            </div>
            <div className="lg:justify-self-end">
              <p className="page-description">{product.description}</p>
              <Link href={demoHref('dude', product.slug)} className="primary-button mt-7">Request a demo <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
        <div className="shell module-hero-footer"><span>DUDE SOFTWARES / {product.shortTitle}</span><a href="#module-overview">Explore capabilities <ArrowRight className="h-4 w-4" /></a></div>
      </section>

      <section className="section-block" id="module-overview">
        <div className="shell grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
          <div>
            <p className="eyebrow-pill">Product overview</p>
            <h2 className="section-title mt-7">Built for clearer operational work.</h2>
          </div>
          <div>
            <p className="max-w-3xl text-xl leading-9 text-muted">{product.overview}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {product.capabilities.map((capability, index) => (
                <div key={capability} className="info-card module-feature flex flex-col justify-between" data-reveal data-delay={(index % 2) * 90}>
                  <span className="feature-index">0{index + 1}</span>
                  <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em]">{capability}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block surface-section">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">What it changes</p>
              <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.055em] md:text-5xl">A stronger operating outcome.</h2>
            </div>
            <div className="border-t theme-border">
              {product.outcomes.map((outcome, index) => (
                <div key={outcome} className="flex items-center gap-5 border-b theme-border py-6" data-reveal data-delay={index * 90}>
                  <span className="product-number">0{index + 1}</span>
                  <p className="text-lg font-semibold tracking-[-0.025em] text-muted">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t theme-border pt-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted">Next product</p>
              <p className="mt-2 text-lg font-semibold">{nextProduct.title}</p>
            </div>
            <Link href={`/software/${nextProduct.slug}/`} className="secondary-button">Continue exploring <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
