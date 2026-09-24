import Link from 'next/link';
import { UiIcon } from './UiIcon';
export function CallToAction() {
  return <section className="final-cta"><div className="shell" data-reveal><div className="cta-top"><span className="micro-label">YOUR NEXT SMART PRODUCT COULD START HERE</span><span aria-hidden="true">KI / ∞</span></div><div className="cta-main"><h2>Let’s build<br/><em>what’s next.</em></h2><Link href="/contact/" className="cta-circle"><span>Let’s talk</span><UiIcon name="arrowUp"/></Link></div><div className="cta-bottom"><p>Start a conversation about a product, a brand, or a demo.</p><Link href="/contact/">Contact us <UiIcon name="arrowUp"/></Link></div></div></section>;
}
