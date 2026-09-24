import { EnquiryForm } from '@/components/EnquiryForm';
import { pageMeta } from '@/lib/site';

export const metadata = pageMeta(
  'Request a demo',
  'Request a demo of a Karat Infinity product, DUDE application, or automation solution.',
  '/request-demo/',
);

export default function Demo() {
  return (
    <main className="page-main" id="main-content">
      <section className="shell demo-layout">
        <div className="demo-copy">
          <p className="kicker">REQUEST A DEMO</p>
          <h1 className="page-title">See a product.<br /><span className="gradient-text">On your terms.</span></h1>
          <p className="page-description">Choose the Karat Infinity product or solution you want to explore. If you arrived from a product page, that choice is already selected.</p>
          <ul className="demo-benefits">
            <li>IOE connected products</li>
            <li>DUDE software</li>
            <li>1-Verse labels and e-labels</li>
            <li>Automation solutions</li>
          </ul>
        </div>
        <EnquiryForm />
      </section>
    </main>
  );
}
