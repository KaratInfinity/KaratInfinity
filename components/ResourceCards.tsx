import Link from 'next/link';
import { resources } from '@/lib/resources';
import { UiIcon } from './UiIcon';
export function ResourceCards({ items = resources }: { items?: typeof resources }) {
  return <div className="resource-grid">{items.map((r, index) => {
    const i = resources.indexOf(r);
    return <Link className={`resource-card resource-${i}`} key={r.slug} href={`/resources/${r.slug}/`} data-reveal data-delay={index * 90}>
      <div className="resource-cover"><span className="micro-label">THE KARAT JOURNAL / 0{i + 1}</span><strong>{['Begin.', 'Connect.', 'Explore.'][i]}</strong><div className="cover-bottom"><span>{r.category}</span><UiIcon name={(['arrowUp', 'network', 'spark'] as const)[i]}/></div></div>
      <div className="resource-card-copy"><p className="kicker">{r.category} / KARAT INFINITY</p><h3>{r.title}</h3><p>{r.summary}</p><span className="text-link">Take a look <UiIcon name="arrowUp"/></span></div>
    </Link>;
  })}</div>;
}
