'use client';

import { useState } from 'react';
import { ModuleMedia } from './ModuleMedia';
import Link from 'next/link';
import { softwareProducts } from '@/lib/software';
import { UiIcon } from './UiIcon';

export function EcosystemPreview() {
  const [selected, setSelected] = useState(0);
  const product = softwareProducts[selected];
  return <div className="product-stage">
    <div className="preview-products" role="group" aria-label="Select an application">
      {softwareProducts.map((item, i) => <button key={item.slug} aria-pressed={selected === i} className={selected === i ? 'selected' : ''} onClick={() => setSelected(i)}><span>{item.number}</span>{item.shortTitle}</button>)}
    </div>
    <div className="preview-body" aria-live="polite"><div className="preview-content cinematic-preview caption-transition" key={product.slug}>
      <ModuleMedia slug={product.slug} video />
      <div className="preview-copy"><span className="micro-label">{product.category}</span><h3>{product.title}</h3><p>{product.description}</p><Link className="primary-button" href={`/software/${product.slug}/`}>Explore {product.shortTitle} <UiIcon name="arrowUp"/></Link></div>
      <div className="capability-board"><div className="capability-heading"><span className="micro-label">A CLOSER LOOK</span><span className="module-id">/{product.number}</span></div><div className="capability-list">{product.capabilities.slice(0,4).map((capability,i)=><div key={capability}><span className="capability-check"><UiIcon name="check"/></span><span>{capability}</span><small>0{i+1}</small></div>)}</div><div className="capability-footer"><UiIcon name="network"/><p>Part of the connected<br/><strong>Dude Softwares ecosystem</strong></p></div></div>
    </div></div>
  </div>;
}
