import Link from 'next/link';
import { ArrowRight } from '@/components/Icons';
import { SoftwareCatalog } from '@/components/SoftwareCatalog';
import { softwareProducts } from '@/lib/software';
import { pageMeta } from '@/lib/site';

export const metadata = pageMeta(
  'Softwares',
  'Explore the Dude Softwares suite — eleven connected business applications available through the eFactor portal.',
  '/software/',
);

export default function SoftwarePage() {
  return (
    <main className="page-main" id="main-content">
      <section className="page-hero" data-reveal>
        <div className="shell relative z-10">
          <p className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Softwares</span></p>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <h1 className="page-title">The connected <span className="gradient-text">software suite.</span></h1>
            <div className="lg:justify-self-end">
              <p className="page-description">Search and filter every DUDE application, then open a product or request a demo.</p>
              <Link href="/request-demo/?family=dude" className="primary-button mt-7">Request a demo <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="surface-section pb-20 pt-10">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-5 border-b theme-border pb-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.17em] text-muted">Complete catalogue</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.045em] md:text-4xl">{softwareProducts.length} connected applications</h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-muted">Product availability and permissions are determined by the signed-in eFactor account.</p>
          </div>
          <div className="mt-6"><SoftwareCatalog /></div>
        </div>
      </section>
    </main>
  );
}
