import Link from 'next/link';
import { Constellation } from '@/components/Constellation';
import { Walkthrough, StoryCarousel, EcosystemTabs } from '@/components/HomeInteractions';
import { ResourceCards } from '@/components/ResourceCards';
import { CallToAction } from '@/components/CallToAction';
import { UiIcon } from '@/components/UiIcon';

export default function Home() {
  return <main className="page-main" id="main-content">
    <section className="new-hero shell">
      <div className="hero-editorial">
        <div className="hero-eyebrow hero-enter"><span className="label-rule"/> INDEPENDENT THINKING. CONNECTED TECHNOLOGY.</div>
        <h1 className="hero-headline"><span className="hero-line"><span>Big ideas.</span></span><span className="hero-line"><span>Infinite</span></span><span className="hero-line"><em>connections.</em></span></h1>
        <p className="hero-intro hero-enter">We bring software, intelligent systems, and connected workflows into one thoughtful ecosystem.</p>
        <div className="hero-actions hero-enter"><Link href="/products/" className="primary-button">Explore products <UiIcon name="arrowUp"/></Link><Walkthrough/></div>
        <div className="hero-footnote hero-enter"><span className="tiny-mark">KI /</span><p>Built for the way you work.<br/><strong>Ready for where you’re going.</strong></p></div>
      </div>
      <div className="hero-map-wrap hero-enter"><Constellation/></div>
      <div className="hero-bottom"><a href="#possibilities" className="scroll-link"><span>Scroll to discover</span><UiIcon name="arrow"/></a><p>Technology with a bigger picture.</p><span className="micro-label">EST. IN POSSIBILITY</span></div>
    </section>

    <section className="possibility-section" id="possibilities">
      <div className="shell">
        <div className="section-overline" data-reveal><span>01 / THE POSSIBILITIES</span><span>FROM EVERYDAY TO WHAT’S NEXT</span></div>
        <div className="possibility-heading" data-reveal><h2>Different strengths.<br/><em>One shared direction.</em></h2><p>A useful system connects more than technology. It connects your people, your work, and the ideas you want to bring to life.</p></div>
        <div className="possibility-grid">
          <Link href="/software/" className="possibility-card possibility-software" data-reveal><div className="card-topline"><span className="micro-label">01 / SOFTWARES</span><UiIcon name="arrowUp"/></div><div className="product-type-grid" aria-hidden="true"><span>ERP</span><span>HR</span><span>CRM</span><span>FIN</span><span>DMS</span><span>+6</span></div><h3>Less scattered.<br/>More connected.</h3><p>11 applications for the work that makes your business move.</p><span className="text-link">Explore the suite <UiIcon name="arrow"/></span></Link>
          <Link href="/about/" className="possibility-card possibility-systems" data-reveal data-delay="100"><div className="card-topline"><span className="micro-label">02 / KARAT INFINITY</span><UiIcon name="arrowUp"/></div><div className="discipline-stack"><span><UiIcon name="layers"/> Thoughtful experiences</span><span><UiIcon name="network"/> Connected workflows</span><span><UiIcon name="spark"/> Applied intelligence</span></div><h3>Complexity, meet clarity.</h3><p>Intelligent systems shaped around people and real operating work.</p><span className="text-link">About us <UiIcon name="arrow"/></span></Link>
          <Link href="/partnership/" className="possibility-card possibility-things" data-reveal data-delay="200"><div className="card-topline"><span className="micro-label">03 / EFACTOR</span><UiIcon name="arrowUp"/></div><div className="connection-chain"><span>Device</span><UiIcon name="arrow"/><span>Cloud</span><UiIcon name="arrow"/><span>You</span></div><h3>The world outside<br/>the screen.</h3><p>Connected products and embedded technology with eFactor.</p><span className="text-link">Discover the ecosystem <UiIcon name="arrow"/></span></Link>
        </div>
      </div>
    </section>

    <StoryCarousel/>

    <section className="point-of-view shell" data-reveal><span className="section-number">03 / OUR POINT OF VIEW</span><div><h2>A collection of tools<br/>isn’t the same as<br/><em>a connected whole.</em></h2><div className="point-bottom"><p>We build around the relationships between things. Clear ownership. Shared context. Thoughtful boundaries. So your next step doesn’t mean starting over.</p><Link href="/about/" className="round-link" aria-label="Read about us"><UiIcon name="arrowUp"/></Link></div></div></section>

    <EcosystemTabs/>

    <section className="section-block resources-section"><div className="shell"><div className="section-heading-row" data-reveal><div><span className="section-number">05 / A LITTLE PERSPECTIVE</span><h2>Ideas worth<br/><em>connecting.</em></h2></div><Link href="/resources/" className="text-link">The resource journal <UiIcon name="arrowUp"/></Link></div><ResourceCards/></div></section>
    <CallToAction/>
  </main>;
}
