'use client';

import { useState } from 'react';
import type { CSSProperties, PointerEvent } from 'react';
import Link from 'next/link';
import { UiIcon } from './UiIcon';

const domains = [
  { name: 'Dude Softwares', caption: 'Eleven applications. One operating suite.', detail: 'ERP, HR, finance, projects, CRM and the rest of the connected software family.', href: '/software/', icon: 'layers' as const, number: '01' },
  { name: 'Partnership', caption: 'From the edge to the enterprise.', detail: 'Karat Infinity, eFactor and Dude Softwares — connected from software to operations.', href: '/partnership/', icon: 'network' as const, number: '02' },
];

export function Constellation() {
  const [active, setActive] = useState(0);
  function tilt(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== 'mouse' || document.documentElement.dataset.motion === 'off' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--rx', `${-(event.clientY - rect.top - rect.height / 2) / rect.height * 5}deg`);
    event.currentTarget.style.setProperty('--ry', `${(event.clientX - rect.left - rect.width / 2) / rect.width * 5}deg`);
  }
  function reset(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty('--rx', '0deg'); event.currentTarget.style.setProperty('--ry', '0deg');
  }
  const domain = domains[active];
  return <div className="constellation" onPointerMove={tilt} onPointerLeave={reset}>
    <div className="constellation-top"><span className="micro-label">THE KARAT ECOSYSTEM</span><span className="map-number">FIG. 01 / ∞</span></div>
    <div className="constellation-stage">
      <svg className="constellation-lines" viewBox="0 0 540 450" fill="none" aria-hidden="true">
        <circle className="orbit-outer" cx="270" cy="224" r="190" />
        <circle className="orbit-inner" cx="270" cy="224" r="133" />
        <path className={'map-path '+(active === 0 ? 'active' : '')} d="M270 224C210 224 170 126 130 110"/>
        <path className={'map-path '+(active === 1 ? 'active' : '')} d="M270 224C330 224 365 160 422 153"/>
        <path className="map-trace" d={['M270 224C210 224 170 126 130 110','M270 224C330 224 365 160 422 153'][active]}/>
        <circle cx="80" cy="224" r="4" className="map-dot"/><circle cx="376" cy="66" r="4" className="map-dot"/>
        <path d="M450 321h12m-6-6v12M147 373h10m-5-5v10" className="map-tick"/>
      </svg>
      <div className="map-hub"><span className="infinity-mark">∞</span><span>Karat Infinity</span><small>THE CONNECTED WHOLE</small></div>
      {domains.map((item, i) => (
        <Link
          key={item.name}
          href={item.href}
          className={`map-node node-${i} ${active === i ? 'selected' : ''}`}
          aria-label={`${item.name}, ${item.number}`}
          onMouseEnter={() => setActive(i)}
          onFocus={() => setActive(i)}
          style={{ '--node-index': i } as CSSProperties}
        >
          <span className="node-icon"><UiIcon name={item.icon}/></span>
          <span className="node-label">{item.name}</span>
          <span className="node-index">/{item.number}</span>
        </Link>
      ))}
      <span className="map-note note-one">Everything<br/>in relationship.</span>
      <span className="map-note note-two">Designed to<br/>work together.</span>
    </div>
    <div className="constellation-caption" aria-live="polite"><div key={domain.name} className="caption-transition"><span className="micro-label">{domain.name} / {domain.number}</span><h2>{domain.caption}</h2><p>{domain.detail}</p></div><Link href={domain.href} className="round-link" aria-label={`Explore ${domain.name}`}><UiIcon name="arrowUp"/></Link></div>
  </div>;
}
