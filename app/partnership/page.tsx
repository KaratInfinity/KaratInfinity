import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from '@/components/Icons';
import { SectionIntro } from '@/components/SectionIntro';
import { efactorPortalUrl } from '@/lib/software';
import { pageMeta } from '@/lib/site';

export const metadata = pageMeta(
  'Partnership',
  'How Karat Infinity, eFactor and Dude Softwares connect intelligent products with enterprise operations.',
  '/partnership/',
);

export default function PartnershipPage() {
  return (
    <main className="page-main" id="main-content">
      <section className="page-hero" data-reveal>
        <div className="shell relative z-10">
          <p className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Partnership</span></p>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <h1 className="page-title">A partnership from <span className="gradient-text">edge to enterprise.</span></h1>
            <p className="page-description lg:justify-self-end">Karat Infinity and eFactor connect intelligent product engineering with the software businesses use to manage people, money, projects, customers and operations.</p>
          </div>
        </div>
      </section>

      <section className="section-block" id="efactor">
        <div className="shell">
          <SectionIntro
            number="01"
            eyebrow="Partner company"
            title="eFactor builds the Internet of Everything layer."
            description="eFactor describes itself as an emerging Indian startup creating a comprehensive Internet of Everything ecosystem. Its public platform brings together cloud-ready, AI-enhanced and embedded capabilities for designing, connecting and scaling smart products."
          />
          <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-[1.1fr_.9fr]">
            <article className="company-card company-card-green">
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <span className="product-category">Internet of Everything</span>
                  <h2 className="company-wordmark mt-8">E-Factor IoE</h2>
                  <p className="mt-6 max-w-xl text-base leading-8 text-muted">A partner environment for connected devices, embedded solutions, cloud services and intelligent product experiences.</p>
                </div>
                <a href="https://efactor.tech/efactor/About.html" target="_blank" rel="noreferrer" className="card-link mt-12">Visit eFactor <ArrowUpRight className="h-4 w-4" /></a>
              </div>
            </article>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <article className="info-card">
                <p className="text-sm font-bold text-cyan">CONNECT</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.035em]">Devices to cloud</h3>
                <p className="mt-4 text-base leading-7 text-muted">A path for products to communicate, surface data and participate in a wider digital experience.</p>
              </article>
              <article className="info-card">
                <p className="text-sm font-bold text-mint">SCALE</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.035em]">Prototype to ecosystem</h3>
                <p className="mt-4 text-base leading-7 text-muted">Embedded and platform capabilities organised around building and evolving connected products.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block surface-section">
        <div className="shell">
          <SectionIntro
            number="02"
            eyebrow="Software company"
            title="Dude Softwares is where connected operations take shape."
            description="Dude Softwares develops the business application suite presented across this website. The products cover the core work of running an organisation and are made available to users through the authenticated eFactor environment."
          />
          <div className="mt-14 border-t theme-border lg:mt-20">
            {[
              ['One discoverable suite', 'A consistent catalogue helps users understand what each business application does before they launch it.'],
              ['Shared operating context', 'Applications are designed around the same company, people and access context so work can stay connected.'],
              ['Clear product boundaries', 'Finance, HR, projects, sales and other domains remain focused while supporting cross-module workflows.'],
              ['Access through eFactor', 'The eFactor Dude Softwares area remains the entry point for the applications available to each signed-in user.'],
            ].map(([title, text], index) => (
              <div key={title} className="feature-row">
                <span className="feature-index">0{index + 1}</span>
                <h3 className="feature-title">{title}</h3>
                <p className="text-base leading-7 text-muted">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/products/" className="secondary-button">Explore all products <ArrowRight className="h-4 w-4" /></Link>
            <a href={efactorPortalUrl} target="_blank" rel="noreferrer" className="primary-button">Access Dude Softwares <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <section className="partner-band">
        <div className="shell relative z-10 py-20 md:py-28">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em]">The connected model</p>
          <div className="mt-7 grid gap-8 md:grid-cols-3">
            {[['Karat Infinity', 'Experience, product direction and system engineering.'], ['eFactor', 'IoE platform, smart products and connected technology.'], ['Dude Softwares', 'Enterprise applications and daily operating workflows.']].map(([name, text], index) => (
              <article key={name} className="border-t theme-border pt-5">
                <span className="text-xs font-extrabold">0{index + 1}</span>
                <h2 className="mt-8 text-2xl font-bold tracking-[-0.035em]">{name}</h2>
                <p className="mt-3 max-w-sm text-base font-medium leading-7 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
