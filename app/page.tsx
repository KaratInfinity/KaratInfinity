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
        <div className="hero-eyebrow hero-enter"><span className="label-rule"/> FROM AN IDEA TO A SMART PRODUCT.</div>
        <h1 className="hero-headline"><span className="hero-line"><span>From an idea.</span></span><span className="hero-line"><span>A smart</span></span><span className="hero-line"><em>product.</em></span></h1>
        <p className="hero-intro hero-enter">We build the ecosystem that makes it possible — technology, manufacturing, software, and connected infrastructure for products under your own brand.</p>
        <div className="hero-actions hero-enter"><Link href="/products/" className="primary-button">Explore products <UiIcon name="arrowUp"/></Link><Walkthrough/></div>
        <div className="hero-footnote hero-enter"><span className="tiny-mark">KI /</span><p>Build smart. Launch faster.<br/><strong>Scale globally.</strong></p></div>
      </div>
      <div className="hero-map-wrap hero-enter"><Constellation/></div>
      <div className="hero-bottom"><a href="#possibilities" className="scroll-link"><span>Scroll to discover</span><UiIcon name="arrow"/></a><p>Technology with a bigger picture.</p><span className="micro-label">EST. 17 JAN 2024</span></div>
    </section>

    <section className="possibility-section" id="possibilities">
      <div className="shell">
        <div className="section-overline" data-reveal><span>01 / MISSION</span><span>ONE PARTNER. COMPLETE ECOSYSTEM.</span></div>
        <div className="possibility-heading" data-reveal><h2>Enable the connected<br/><em>product.</em></h2><p>Our mission is to help businesses, brands, and entrepreneurs turn an idea into a market-ready connected product — with technology, manufacturing, software, and support in one place.</p></div>
        <div className="possibility-grid">
          <Link href="/products/ioe/" className="possibility-card possibility-software" data-reveal><div className="card-topline"><span className="micro-label">01 / SMART PRODUCTS</span><UiIcon name="arrowUp"/></div><div className="product-type-grid" aria-hidden="true"><span>LPF</span><span>NEXA</span><span>FAN</span><span>IOT</span><span>LABEL</span><span>+</span></div><h3>Make products<br/>intelligent.</h3><p>Switches, panels, fans, pumps, and e-labels for homes, shops, and installations.</p><span className="text-link">Explore products <UiIcon name="arrow"/></span></Link>
          <Link href="/products/dude/" className="possibility-card possibility-systems" data-reveal data-delay="100"><div className="card-topline"><span className="micro-label">02 / DUDE SOFTWARE</span><UiIcon name="arrowUp"/></div><div className="discipline-stack"><span><UiIcon name="layers"/> Quality and assets</span><span><UiIcon name="network"/> Operations</span><span><UiIcon name="spark"/> Product identity</span></div><h3>Serious software.<br/>Simple to use.</h3><p>Modular applications for the work that runs a connected product business.</p><span className="text-link">Explore products <UiIcon name="arrow"/></span></Link>
          <Link href="/products/" className="possibility-card possibility-things" data-reveal data-delay="200"><div className="card-topline"><span className="micro-label">03 / THE ECOSYSTEM</span><UiIcon name="arrowUp"/></div><div className="connection-chain"><span>Idea</span><UiIcon name="arrow"/><span>Build</span><UiIcon name="arrow"/><span>Market</span></div><h3>One partner.<br/>Complete path.</h3><p>Engineering, manufacturing, software, and a digital identity for every product.</p><span className="text-link">Explore products <UiIcon name="arrow"/></span></Link>
        </div>
      </div>
    </section>

    <StoryCarousel/>

    <section className="point-of-view shell" data-reveal><span className="section-number">03 / VISION</span><div><h2>Connected. Visible.<br/>Measurable.<br/><em>Intelligent.</em></h2><div className="point-bottom"><p>Our vision is a world where every product, asset, machine, and process can move from connected to visible, measurable, and intelligent.</p><Link href="/about/" className="round-link" aria-label="Read about us"><UiIcon name="arrowUp"/></Link></div></div></section>

    <EcosystemTabs/>

    <section className="section-block resources-section"><div className="shell"><div className="section-heading-row" data-reveal><div><span className="section-number">05 / A LITTLE PERSPECTIVE</span><h2>Ideas worth<br/><em>connecting.</em></h2></div><Link href="/resources/" className="text-link">The resource journal <UiIcon name="arrowUp"/></Link></div><ResourceCards/></div></section>
    <CallToAction/>
  </main>;
}
