import Link from 'next/link';
import { ArrowRight } from '@/components/Icons';
import { SectionIntro } from '@/components/SectionIntro';
import { karatInfinityAddress, karatInfinityMapsUrl } from '@/lib/company';

const disciplines = [
  { number: '01', title: 'The idea, 2022', text: 'Karat Infinity began as an idea in 2022: one partner that could take a product from concept through engineering, manufacturing, software, and launch.' },
  { number: '02', title: 'Established 17 January 2024', text: 'The company was officially established on 17 January 2024, and has since been building the ecosystem behind connected products.' },
  { number: '03', title: 'What we build', text: 'IoT-enabled products, private-label manufacturing, automation, asset intelligence, DUDE software, product identity, and e-labels.' },
  { number: '04', title: 'Who we work with', text: 'Existing businesses, entrepreneurs, manufacturers, and retailers who want to make a product smart or launch a connected brand.' },
];

export function AboutView() {
  return (
    <main className="page-main" id="main-content">
      <section className="page-hero" data-reveal>
        <div className="shell relative z-10">
          <p className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>About us</span></p>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <h1 className="page-title">From an idea in 2022 to a company on <span className="gradient-text">17 January 2024.</span></h1>
            <p className="page-description lg:justify-self-end">Karat Infinity helps businesses, brands, and entrepreneurs develop, manufacture, and launch connected products under their own brand.</p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="shell">
          <SectionIntro
            number="01"
            eyebrow="Our story"
            title="One ecosystem, from concept to market."
            description="Launching a smart product takes more than a module. It takes engineering, electronics, firmware, software, manufacturing, quality, and support after launch. Karat Infinity brings those capabilities together."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:mt-20">
            {disciplines.map((item) => (
              <article key={item.number} className="info-card">
                <span className="product-number">{item.number}</span>
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.035em]">{item.title}</h2>
                <p className="mt-3 max-w-lg text-base leading-7 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block surface-section" id="principles">
        <div className="shell grid gap-14 lg:grid-cols-[.78fr_1.22fr] lg:gap-24">
          <div>
            <p className="eyebrow-pill">How we work</p>
            <h2 className="section-title mt-7">Concept to market.</h2>
          </div>
          <div className="border-t theme-border">
            {[
              ['Concept', 'Start with the product idea, the market, and the job the connected product needs to do.'],
              ['Engineering', 'Shape the electronics, firmware, sensors, and software that make the product intelligent.'],
              ['Manufacturing', 'Move from prototype and pilot quantities toward production under your own brand.'],
              ['Market', 'Support launch with software, product identity, and the data that keeps the product useful after it ships.'],
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

      <section className="section-block">
        <div className="shell grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <p className="eyebrow-pill">Where we work</p>
            <h2 className="section-title mt-7">Based in Secunderabad, building connected products.</h2>
            <p className="page-description">Visit the Karat Infinity office, or start a conversation about a product, a brand, or a demo.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={karatInfinityMapsUrl} target="_blank" rel="noreferrer" className="primary-button">Open in maps <ArrowRight className="h-4 w-4" /></a>
              <Link href="/contact/" className="secondary-button">Contact us</Link>
            </div>
          </div>
          <address className="info-card not-italic">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted">Karat Infinity</p>
            <div className="mt-6 space-y-1 text-base leading-7">
              {karatInfinityAddress.lines.map((line) => <p key={line}>{line}</p>)}
            </div>
          </address>
        </div>
      </section>

      <section className="partner-band">
        <div className="shell relative z-10 py-20 md:py-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em]">The wider ecosystem</p>
              <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl">See the products that carry this ecosystem into the real world.</h2>
            </div>
            <Link href="/products/" className="primary-button">
              Explore products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
