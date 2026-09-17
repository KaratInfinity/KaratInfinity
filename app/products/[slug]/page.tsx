import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from '@/components/Icons';
import { ProductCard } from '@/components/ProductCard';
import { getHardwareProduct, hardwareProducts } from '@/lib/products';

type ProductPageProps = { params: { slug: string } };

export function generateStaticParams() {
  return hardwareProducts.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getHardwareProduct(params.slug);
  if (!product) return { title: 'Product' };
  return {
    title: product.title,
    description: product.description,
  };
}

export default function HardwareProductPage({ params }: ProductPageProps) {
  const product = getHardwareProduct(params.slug);
  if (!product) notFound();

  const currentIndex = hardwareProducts.findIndex((item) => item.slug === product.slug);
  const nextProduct = hardwareProducts[(currentIndex + 1) % hardwareProducts.length];
  const related = hardwareProducts.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 3);

  return (
    <main className="page-main" id="main-content">
      <section className="page-hero">
        <div className="shell">
          <p className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/products/">Products</Link><span>/</span><span>{product.shortTitle}</span></p>
          <div className="hardware-hero">
            <div className="hardware-hero-photo">
              <Image src={product.image} alt={product.title} width={900} height={900} priority />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="product-number">{product.number}</span>
                <span className="product-category">{product.category}</span>
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-muted">{product.series}</p>
              <h1 className="page-title mt-4">{product.title}</h1>
              <p className="page-description">{product.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/request-demo/" className="primary-button">Request a demo <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/contact/" className="secondary-button">Talk to us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block" id="product-overview">
        <div className="shell grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
          <div>
            <p className="eyebrow-pill">Product overview</p>
            <h2 className="section-title mt-7">Specified as connected hardware.</h2>
          </div>
          <div>
            <p className="max-w-3xl text-xl leading-9 text-muted">{product.overview}</p>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {product.highlights.map((highlight, index) => (
                <div key={highlight} className="info-card flex min-h-36 flex-col justify-between">
                  <span className="feature-index">0{index + 1}</span>
                  <h3 className="mt-8 text-lg font-semibold tracking-[-0.02em]">{highlight}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-block surface-section">
          <div className="shell">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="eyebrow-pill">Same family</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">More {product.category.toLowerCase()}</h2>
              </div>
              <Link href="/products/" className="text-link">All products</Link>
            </div>
            <div className="catalog-grid mt-10">
              {related.map((item) => <ProductCard key={item.slug} product={item} />)}
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t theme-border pt-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted">Next product</p>
                <p className="mt-2 text-lg font-semibold">{nextProduct.title}</p>
              </div>
              <Link href={`/products/${nextProduct.slug}/`} className="secondary-button">Continue exploring <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
