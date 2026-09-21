'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Dialog } from './Dialog';
import { UiIcon } from './UiIcon';

export function Walkthrough() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const steps = [
    ['Find your starting point.', 'Browse the software suite and choose the application that fits your team’s work.', '/software/', 'Explore the softwares'],
    ['One way in. A world of possibilities.', 'Use your eFactor account to access the applications assigned to your company and role.', '/partnership/', 'Explore the ecosystem'],
    ['Make the connections.', 'Start with the domain you need, then connect people, records, approvals, and workflows as your business grows.', '/use-cases/', 'Explore use cases'],
  ];
  return <><button className="walkthrough-trigger" onClick={() => { setStep(0); setOpen(true); }}><span className="play-disc"><UiIcon name="play"/></span>Take a closer look</button>
    <Dialog open={open} onClose={() => setOpen(false)} title="A world that works together.">
      <div className="walkthrough-step caption-transition" key={step}><p className="kicker">THE PRODUCT JOURNEY · 0{step + 1} / 03</p><h3>{steps[step][0]}</h3><p>{steps[step][1]}</p><Link href={steps[step][2]} className="text-link" onClick={() => setOpen(false)}>{steps[step][3]} <UiIcon name="arrowUp"/></Link></div>
      <div className="carousel-controls"><button className="icon-button" disabled={step === 0} onClick={() => setStep(step - 1)} aria-label="Previous step"><UiIcon name="arrow" className="flipped"/></button><div className="dots">{steps.map((s, i) => <button key={s[0]} className={i === step ? 'selected' : ''} aria-label={`Go to step ${i + 1}`} aria-current={step === i ? 'step' : undefined} onClick={() => setStep(i)}/>)}</div><button className="icon-button" disabled={step === 2} onClick={() => setStep(step + 1)} aria-label="Next step"><UiIcon name="arrow"/></button></div>
    </Dialog></>;
}

const stories = [
  { tag: 'PEOPLE & WORK', title: 'Good work starts with connected people.', description: 'Bring HR records, project ownership, team collaboration, and supporting documents into a shared operating context.', products: ['HRMS', 'Projects', 'DMS'], href: '/software/project-management/', label: 'Connect your team', icon: 'people' as const },
  { tag: 'MONEY & OPERATIONS', title: 'Every handoff. A little more clarity.', description: 'Connect purchasing requests, stock movement, and finance records with clear responsibilities and approval context.', products: ['Procurement', 'Inventory', 'Finance'], href: '/software/procurement/', label: 'Connect your operations', icon: 'layers' as const },
];

export function StoryCarousel() {
  const [index, setIndex] = useState(0);
  const story = stories[index];
  return <section className="story-section"><div className="shell">
    <div className="section-overline" data-reveal><span>02 / CONNECTED IN PRACTICE</span><Link href="/use-cases/">All use cases <UiIcon name="arrowUp"/></Link></div>
    <div className="story-layout" data-reveal>
      <div className="story-selector"><span className="micro-label">START WITH YOUR WORLD</span>{stories.map((item, i) => <button key={item.tag} onClick={() => setIndex(i)} aria-pressed={index === i} className={index === i ? 'selected' : ''}><span>0{i + 1}</span>{item.tag}<UiIcon name="arrow"/></button>)}<div className="carousel-controls"><button className="icon-button" aria-label="Previous scenario" onClick={() => setIndex((index + stories.length - 1) % stories.length)}><UiIcon name="arrow" className="flipped"/></button><span className="mono">0{index + 1} / 0{stories.length}</span><button className="icon-button" aria-label="Next scenario" onClick={() => setIndex((index + 1) % stories.length)}><UiIcon name="arrow"/></button></div></div>
      <div className="story-copy" aria-live="polite"><div key={index} className="caption-transition"><span className="story-icon"><UiIcon name={story.icon}/></span><h2>{story.title}</h2><p>{story.description}</p><div className="story-products">{story.products.map((p, i) => <span key={p}>{i > 0 && <i aria-hidden="true">+</i>}{p}</span>)}</div><Link href={story.href} className="text-link">{story.label} <UiIcon name="arrowUp"/></Link></div></div>
    </div>
  </div></section>;
}

export function EcosystemTabs() {
  return <section className="ecosystem-section shell">
    <div className="ecosystem-intro" data-reveal><span className="section-number">04 / SHARED AMBITION</span><h2>The software suite.<br/><em>Ready to work together.</em></h2><Link href="/software/" className="text-link">Explore the applications <UiIcon name="arrowUp"/></Link></div>
    <div className="ecosystem-panel" data-reveal><div className="caption-transition"><div className="ecosystem-panel-top"><span className="partner-wordmark">Karat<small>INFINITY SOFTWARES</small></span><span className="partner-value">11</span></div><h3>Every team. In its element.</h3><p>Karat Infinity software brings your people, finance, projects, customers, and operations into one discoverable enterprise suite.</p><div className="ecosystem-panel-bottom"><span className="micro-label">Focused applications</span><Link href="/software/" className="round-link" aria-label="Explore Karat software"><UiIcon name="arrowUp"/></Link></div></div></div>
  </section>;
}
