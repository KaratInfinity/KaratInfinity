import Link from 'next/link';
import { SoftwareCatalog } from '@/components/SoftwareCatalog';
import { getFamily } from '@/lib/catalog';
import { pageMeta } from '@/lib/site';

const family = getFamily('dude')!;

export const metadata = pageMeta('DUDE', family.summary, '/products/dude/');

export default function DudePage() {
  return (
    <main className="page-main" id="main-content">
      <section className="page-hero" data-reveal>
        <div className="shell relative z-10">
          <p className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/products/">Products</Link><span>/</span><span>DUDE</span></p>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <h1 className="page-title">Serious software. <span className="gradient-text">Surprisingly simple.</span></h1>
            <p className="page-description lg:justify-self-end">{family.summary}</p>
          </div>
        </div>
      </section>
      <section className="section-block">
        <div className="shell"><SoftwareCatalog /></div>
      </section>
    </main>
  );
}
