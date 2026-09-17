import Link from 'next/link';
import { ArrowRight } from '@/components/Icons';
import { SectionIntro } from '@/components/SectionIntro';
import { karatInfinityAddress, karatInfinityMapsUrl } from '@/lib/company';

const disciplines = [
  { number: '01', title: 'Enterprise experiences', text: 'Clear interfaces and connected workflows for the operational work businesses repeat every day.' },
  { number: '02', title: 'Intelligent systems', text: 'Applied automation, AI and data used where they create useful, understandable outcomes.' },
  { number: '03', title: 'Connected products', text: 'Digital platforms, cloud services and embedded technology designed as one product journey.' },
  { number: '04', title: 'Ecosystem engineering', text: 'Architecture that connects products and partners without collapsing them into a fragile monolith.' },
];

export function AboutView() {
  return (
    <main className="page-main" id="main-content">
      <section className="page-hero" data-reveal>
        <div className="shell relative z-10">
          <p className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>About us</span></p>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <h1 className="page-title">Engineering the <span className="gradient-text">connected whole.</span></h1>
            <p className="page-description lg:justify-self-end">Karat Infinity is a technology company focused on the digital systems businesses depend on today and the connected capabilities they will need next.</p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="shell">
          <SectionIntro
            number="01"
            eyebrow="Who we are"
            title="Built where business, software and connected products meet."
            description="Our role is to turn complex operational needs into a coherent system: thoughtful experiences on the surface, dependable software underneath and a clear path into connected intelligence."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:mt-20">
            {disciplines.map((item) => (
              <article key={item.number} className="info-card min-h-64">
                <span className="product-number">{item.number}</span>
                <h2 className="mt-12 text-2xl font-semibold tracking-[-0.035em]">{item.title}</h2>
                <p className="mt-4 max-w-lg text-base leading-7 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block surface-section" id="principles">
        <div className="shell grid gap-14 lg:grid-cols-[.78fr_1.22fr] lg:gap-24">
          <div>
            <p className="eyebrow-pill">Our point of view</p>
            <h2 className="section-title mt-7">Useful before impressive.</h2>
          </div>
          <div className="border-t theme-border">
            {[
              ['Start with the operating truth', 'Understand the people, information and decisions already moving through the business.'],
              ['Design the system, not the screen', 'Shape the workflow, ownership and data foundation before polishing the interface.'],
              ['Connect with clear boundaries', 'Let products share context while each remains understandable, maintainable and secure.'],
              ['Make evolution possible', 'Build foundations that can accept new teams, rules and technologies without constant reinvention.'],
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
            <h2 className="section-title mt-7">Based in Secunderabad, built for connected operations.</h2>
            <p className="page-description">Visit the Karat Infinity office, or start a conversation about the software, products and systems your organisation needs next.</p>
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
              <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl">See how Karat Infinity works with eFactor and Dude Softwares.</h2>
            </div>
            <Link href="/partnership/" className="primary-button">
              Explore the partnership <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
