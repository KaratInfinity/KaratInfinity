import Link from 'next/link';
import { FamilyCards } from '@/components/FamilyCards';
import { getFamily } from '@/lib/catalog';
import { pageMeta } from '@/lib/site';

const family = getFamily('1-verse')!;

export const metadata = pageMeta('1-Verse', family.summary, '/products/1-verse/');

export default function OneVersePage() {
  return (
    <main className="page-main" id="main-content">
      <section className="page-hero" data-reveal>
        <div className="shell relative z-10">
          <p className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/products/">Products</Link><span>/</span><span>1-Verse</span></p>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <h1 className="page-title">1-Verse</h1>
            <p className="page-description lg:justify-self-end">{family.summary}</p>
          </div>
        </div>
      </section>
      <section className="section-block">
        <div className="shell">
          <FamilyCards cards={family.categories.map((category) => ({
            href: category.href,
            eyebrow: '1-Verse',
            title: category.name,
            text: category.summary,
            action: `View ${category.name}`,
          }))} />
        </div>
      </section>
    </main>
  );
}
