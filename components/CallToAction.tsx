import Link from 'next/link';
import { UiIcon } from './UiIcon';
export function CallToAction() {
  return <section className="final-cta"><div className="shell" data-reveal><div className="cta-top"><span className="micro-label">YOUR NEXT CHAPTER STARTS WITH A CONVERSATION</span><span aria-hidden="true">KI / ∞</span></div><div className="cta-main"><h2>What could we<br/><em>connect next?</em></h2><Link href="/request-demo/" className="cta-circle"><span>Let’s talk</span><UiIcon name="arrowUp"/></Link></div><div className="cta-bottom"><p>Your ideas. Our shared possibilities.</p><Link href="/contact/">Or get in touch <UiIcon name="arrowUp"/></Link></div></div></section>;
}
