'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Dialog } from './Dialog';
import { UiIcon } from './UiIcon';

export function Walkthrough() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const steps = [
    ['Find your starting point.', 'Browse the Karat Infinity product range and open the details for the product you want to explore.', '/products/', 'Explore products'],
    ['See the company behind it.', 'The idea began in 2022. Karat Infinity was officially established on 17 January 2024.', '/about/', 'About us'],
    ['Ask for a demo.', 'Tell us which product you want to see. A demo request opens the contact page.', '/contact/', 'Contact us'],
  ];
  return <><button className="walkthrough-trigger" onClick={() => { setStep(0); setOpen(true); }}><span className="play-disc"><UiIcon name="play"/></span>Take a closer look</button>
    <Dialog open={open} onClose={() => setOpen(false)} title="A world that works together.">
      <div className="walkthrough-step caption-transition" key={step}><p className="kicker">THE PRODUCT JOURNEY · 0{step + 1} / 03</p><h3>{steps[step][0]}</h3><p>{steps[step][1]}</p><Link href={steps[step][2]} className="text-link" onClick={() => setOpen(false)}>{steps[step][3]} <UiIcon name="arrowUp"/></Link></div>
      <div className="carousel-controls"><button className="icon-button" disabled={step === 0} onClick={() => setStep(step - 1)} aria-label="Previous step"><UiIcon name="arrow" className="flipped"/></button><div className="dots">{steps.map((s, i) => <button key={s[0]} className={i === step ? 'selected' : ''} aria-label={`Go to step ${i + 1}`} aria-current={step === i ? 'step' : undefined} onClick={() => setStep(i)}/>)}</div><button className="icon-button" disabled={step === 2} onClick={() => setStep(step + 1)} aria-label="Next step"><UiIcon name="arrow"/></button></div>
    </Dialog></>;
}

const stories = [
  { tag: 'EXISTING BUSINESSES', title: 'Make your existing products smart.', description: 'Add connectivity, monitoring, and a digital identity to the products you already make, without building a new technology stack from scratch.', products: ['IoT', 'Identity', 'Software'], href: '/products/', label: 'Explore products', icon: 'people' as const },
  { tag: 'ENTREPRENEURS', title: 'Build your own smart product brand.', description: 'Bring a product idea. Karat Infinity can help take it from engineering and manufacturing through software and launch.', products: ['Idea', 'Build', 'Market'], href: '/products/', label: 'Explore products', icon: 'layers' as const },
];

export function StoryCarousel() {
  const [index, setIndex] = useState(0);
  const story = stories[index];
  return <section className="story-section"><div className="shell">
    <div className="section-overline" data-reveal><span>02 / WHO IT IS FOR</span><Link href="/products/">All products <UiIcon name="arrowUp"/></Link></div>
    <div className="story-layout" data-reveal>
      <div className="story-selector"><span className="micro-label">START WITH YOUR WORLD</span>{stories.map((item, i) => <button key={item.tag} onClick={() => setIndex(i)} aria-pressed={index === i} className={index === i ? 'selected' : ''}><span>0{i + 1}</span>{item.tag}<UiIcon name="arrow"/></button>)}<div className="carousel-controls"><button className="icon-button" aria-label="Previous scenario" onClick={() => setIndex((index + stories.length - 1) % stories.length)}><UiIcon name="arrow" className="flipped"/></button><span className="mono">0{index + 1} / 0{stories.length}</span><button className="icon-button" aria-label="Next scenario" onClick={() => setIndex((index + 1) % stories.length)}><UiIcon name="arrow"/></button></div></div>
      <div className="story-copy" aria-live="polite"><div key={index} className="caption-transition"><span className="story-icon"><UiIcon name={story.icon}/></span><h2>{story.title}</h2><p>{story.description}</p><div className="story-products">{story.products.map((p, i) => <span key={p}>{i > 0 && <i aria-hidden="true">+</i>}{p}</span>)}</div><Link href={story.href} className="text-link">{story.label} <UiIcon name="arrowUp"/></Link></div></div>
    </div>
  </div></section>;
}

export function EcosystemTabs() {
  return <section className="ecosystem-section shell">
    <div className="ecosystem-intro" data-reveal><span className="section-number">04 / FROM PRODUCTS TO INTELLIGENCE</span><h2>Meet DUDE.<br/><em>Serious software.</em></h2><Link href="/software/" className="text-link">Explore the applications <UiIcon name="arrowUp"/></Link></div>
    <div className="ecosystem-panel" data-reveal><div className="caption-transition"><div className="ecosystem-panel-top"><span className="partner-wordmark">DUDE<small>KARAT INFINITY SOFTWARE</small></span><span className="partner-value">11</span></div><h3>Use what you need. Connect as you grow.</h3><p>DUDE is the modular software family for quality, assets, maintenance, products, operations, and the data a connected product creates.</p><div className="ecosystem-panel-bottom"><span className="micro-label">Focused applications</span><Link href="/software/" className="round-link" aria-label="Explore DUDE software"><UiIcon name="arrowUp"/></Link></div></div></div>
  </section>;
}
