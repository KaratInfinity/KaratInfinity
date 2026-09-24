import Link from 'next/link';
import { ArrowRight } from '@/components/Icons';
import { SectionIntro } from '@/components/SectionIntro';
import { pageMeta } from '@/lib/site';

export const metadata = pageMeta(
  'Careers',
  'Careers at Karat Infinity — product engineering, IoT, manufacturing, and DUDE software. Send an introduction through the contact page.',
  '/careers/',
);

const areas = [
  { number: '01', title: 'Product engineering', text: 'Electronics, firmware, and the product work that turns a conventional product into a connected one.' },
  { number: '02', title: 'IoT and connected devices', text: 'Sensors, controllers, switches, fans, pumps, and the systems that keep a product talking after it leaves the factory.' },
  { number: '03', title: 'Manufacturing', text: 'The path from prototype to production, including quality, sourcing, and products built under a customer’s own brand.' },
  { number: '04', title: 'DUDE software', text: 'Modular applications for quality, assets, operations, product identity, and the data a connected business creates.' },
];

export default function CareersPage() {
  return (
    <main className="page-main" id="main-content">
      <section className="page-hero" data-reveal>
        <div className="shell relative z-10">
          <p className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Careers</span></p>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <h1 className="page-title">Build what comes <span className="gradient-text">next.</span></h1>
            <p className="page-description lg:justify-self-end">Karat Infinity is building the ecosystem behind smart products. If that is the work you want to do, introduce yourself.</p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="shell">
          <SectionIntro
            number="01"
            eyebrow="Careers"
            title="The work behind a connected product."
            description="Open roles are not listed here. These are the kinds of work the company is built around. A short note about your experience is enough to start."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:mt-20">
            {areas.map((item) => (
              <article key={item.number} className="info-card">
                <span className="product-number">{item.number}</span>
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.035em]">{item.title}</h2>
                <p className="mt-3 max-w-lg text-base leading-7 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block surface-section" id="apply">
        <div className="shell grid gap-14 lg:grid-cols-[.78fr_1.22fr] lg:gap-24">
          <div>
            <p className="eyebrow-pill">How to apply</p>
            <h2 className="section-title mt-7">Send a note. We will reply.</h2>
          </div>
          <div className="border-t theme-border">
            {[
              ['Tell us the work', 'Name the area you want to join — engineering, IoT, manufacturing, or software — and the kind of products you have worked on.'],
              ['Share a little proof', 'A short summary, a portfolio, or a résumé is enough. There is no application form to complete first.'],
              ['Use the contact page', 'Write to hello@karatinfinity.com or use Contact Us. Put Careers in the subject so it reaches the right conversation.'],
              ['We reply either way', 'If there is no opening that fits, we will still tell you. We do not publish roles that are not real.'],
            ].map(([title, text], index) => (
              <div key={title} className="feature-row">
                <span className="feature-index">0{index + 1}</span>
                <h3 className="feature-title">{title}</h3>
                <p className="text-base leading-7 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="partner-band">
        <div className="shell relative z-10 py-20 md:py-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em]">Start here</p>
              <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl">Introduce yourself through the contact page.</h2>
            </div>
            <Link href="/contact/" className="primary-button">
              Contact us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
