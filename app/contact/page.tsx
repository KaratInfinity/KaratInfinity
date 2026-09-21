import Link from 'next/link';
import { ArrowUpRight, MailIcon, MapPinIcon, PhoneIcon } from '@/components/Icons';
import { karatInfinityAddress, karatInfinityMapsUrl } from '@/lib/company';
import { efactorPortalUrl } from '@/lib/software';
import { pageMeta } from '@/lib/site';

export const metadata = pageMeta(
  'Contact us',
  'Contact Karat Infinity for business enquiries or reach eFactor for platform and software access support.',
  '/contact/',
);

export default function ContactPage() {
  return (
    <main className="page-main" id="main-content">
      <section className="page-hero" data-reveal>
        <div className="shell relative z-10">
          <p className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Contact</span></p>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <h1 className="page-title">Start the right <span className="gradient-text">conversation.</span></h1>
            <p className="page-description lg:justify-self-end">Use the Karat Infinity address for business and product enquiries. For eFactor platform support or Dude Softwares access, use the partner contact details below.</p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="shell"><div className="help-band" style={{marginTop:0,marginBottom:32,borderTop:0,paddingTop:0}}><div><h2>Plan your next step.</h2><p>Tell us which products or capabilities you would like to explore.</p></div><Link href="/request-demo/" className="primary-button">Request a Demo →</Link></div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <a href="mailto:hello@karatinfinity.com" className="contact-card">
              <span className="contact-icon"><MailIcon className="h-5 w-5" /></span>
              <div className="mt-12">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted">Karat Infinity</p>
                <h2 className="mt-3 text-xl font-semibold tracking-[-0.03em]">Business enquiries</h2>
                <p className="mt-3 break-all text-sm text-mint">hello@karatinfinity.com</p>
              </div>
            </a>
            <a href="mailto:efactorioe@gmail.com" className="contact-card">
              <span className="contact-icon"><MailIcon className="h-5 w-5" /></span>
              <div className="mt-12">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted">eFactor</p>
                <h2 className="mt-3 text-xl font-semibold tracking-[-0.03em]">Platform support</h2>
                <p className="mt-3 break-all text-sm text-mint">efactorioe@gmail.com</p>
              </div>
            </a>
            <a href="tel:+916305983246" className="contact-card">
              <span className="contact-icon"><PhoneIcon className="h-5 w-5" /></span>
              <div className="mt-12">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted">Phone / WhatsApp</p>
                <h2 className="mt-3 text-xl font-semibold tracking-[-0.03em]">+91 63059 83246</h2>
                <p className="mt-3 text-sm text-muted">eFactor partner contact</p>
              </div>
            </a>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
            <a href={karatInfinityMapsUrl} target="_blank" rel="noreferrer" className="info-card flex min-h-72 flex-col justify-between">
              <span className="contact-icon"><MapPinIcon className="h-5 w-5" /></span>
              <div className="mt-12">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted">{karatInfinityAddress.label} office</p>
                <h2 className="mt-3 max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.035em]">{karatInfinityAddress.full}</h2>
                <p className="mt-4 text-sm text-mint">Open in Google Maps</p>
              </div>
            </a>
            <article className="info-card flex min-h-72 flex-col justify-between border-mint/20 surface-section">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-mint">Software access</p>
                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.045em]">Already know which product you need?</h2>
                <p className="mt-4 text-base leading-7 text-muted">Sign in to eFactor and open the Dude Softwares available to your account.</p>
              </div>
              <a href={efactorPortalUrl} target="_blank" rel="noreferrer" className="primary-button mt-8 w-fit">Open eFactor <ArrowUpRight className="h-4 w-4" /></a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
