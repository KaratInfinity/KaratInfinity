import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from '@/components/Icons';
import { ProductCatalog } from '@/components/ProductCatalog';
import { hardwareProducts, productCategories } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore the Karat Infinity product catalogue — smart switches, touch panels, IoT fans, e-Labels, pump controllers and connected power.',
};

export default function ProductsPage() {
  return (
    <main className="page-main" id="main-content">
      <section className="page-hero" data-reveal>
        <div className="shell relative z-10">
          <p className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Products</span></p>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <h1 className="page-title">Karat Infinity <span className="gradient-text">products.</span></h1>
            <div className="lg:justify-self-end">
              <p className="page-description">Connected hardware for homes, shops and installations — from LPF and NEXA switches to BLDC IoT fans, e-Labels and pump controllers.</p>
              <Link href="/request-demo/" className="primary-button mt-7">Request a demo <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="shell">
          <div className="product-index" aria-label="Product families">
            {productCategories.map((category, index) => {
              const count = hardwareProducts.filter((product) => product.category === category).length;
              return (
                <div key={category} className="product-index-item">
                  <span className="product-number">{String(index + 1).padStart(2, '0')}</span>
                  <span>
                    <strong>{category}</strong>
                    <small>{count} products</small>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-block surface-section" id="product-index">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-5 border-b theme-border pb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.17em] text-muted">Complete catalogue</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] md:text-4xl">{hardwareProducts.length} connected products</h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-muted">The Karat Infinity hardware range, separate from the Dude Softwares application suite.</p>
          </div>
          <div className="mt-8"><ProductCatalog /></div>
        </div>
      </section>
    </main>
  );
}
