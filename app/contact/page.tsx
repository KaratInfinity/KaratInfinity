import Link from 'next/link';
import { ArrowUpRight, MailIcon, MapPinIcon, MessageIcon, PhoneIcon } from '@/components/Icons';
import { karatInfinityAddress, karatInfinityMapsUrl } from '@/lib/company';
import { pageMeta } from '@/lib/site';

export const metadata = pageMeta(
  'Contact us',
  'Contact Karat Infinity for business enquiries and product demos.',
  '/contact/',
);

export default function ContactPage() {
  return (
    <main className="page-main" id="main-content">
      <section className="page-hero" data-reveal>
        <div className="shell relative z-10">
          <p className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Contact</span></p>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <h1 className="page-title">Start a <span className="gradient-text">conversation.</span></h1>
            <p className="page-description lg:justify-self-end">Product demos and business enquiries start here. Tell us which product you want to see, or write to the Karat Infinity team directly.</p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="shell"><div className="help-band" style={{marginTop:0,marginBottom:32,borderTop:0,paddingTop:0}}><div><h2>Request a product demo.</h2><p>Tell us which product you would like to see. We will follow up from this conversation.</p></div><Link href="/request-demo/" className="primary-button">Send a demo request →</Link></div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <a href="mailto:hello@karatinfinity.com" className="contact-card">
              <span className="contact-icon"><MailIcon className="h-5 w-5" /></span>
              <div className="mt-12">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted">Karat Infinity</p>
                <h2 className="mt-3 text-xl font-semibold tracking-[-0.03em]">Business enquiries</h2>
                <p className="mt-3 break-all text-sm text-mint">hello@karatinfinity.com</p>
              </div>
            </a>
            <a href="https://wa.me/916305983246" className="contact-card" target="_blank" rel="noreferrer">
              <span className="contact-icon"><MessageIcon className="h-5 w-5" /></span>
              <div className="mt-12">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted">WhatsApp</p>
                <h2 className="mt-3 text-xl font-semibold tracking-[-0.03em]">Message us</h2>
                <p className="mt-3 text-sm text-mint">Chat with Karat Infinity</p>
              </div>
            </a>
            <a href="tel:+916305983246" className="contact-card">
              <span className="contact-icon"><PhoneIcon className="h-5 w-5" /></span>
              <div className="mt-12">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted">Phone</p>
                <h2 className="mt-3 text-xl font-semibold tracking-[-0.03em]">+91 63059 83246</h2>
                <p className="mt-3 text-sm text-muted">Karat Infinity</p>
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
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-mint">Product demo</p>
                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.045em]">Already know which product you need?</h2>
                <p className="mt-4 text-base leading-7 text-muted">Request a demo and we will follow up about that Karat Infinity product.</p>
              </div>
              <Link href="/request-demo/" className="primary-button mt-8 w-fit">Request a demo <ArrowUpRight className="h-4 w-4" /></Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
