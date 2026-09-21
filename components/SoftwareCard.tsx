import Link from 'next/link';
import { ModuleMedia } from './ModuleMedia';
import type { SoftwareProduct } from '@/lib/software';
import { efactorPortalUrl } from '@/lib/software';
import { ArrowRight, ArrowUpRight } from './Icons';

export function SoftwareCard({ product }: { product: SoftwareProduct }) {
  return (
    <article className={`software-card cinematic-card accent-${product.accent}`}>
      <ModuleMedia slug={product.slug} />
      <div className="card-topline flex items-start justify-between gap-5">
        <span className="product-number">{product.number}</span>
        <span className="product-category">{product.category}</span>
      </div>
      <div className="module-card-copy">
        <p className="text-xs font-semibold text-muted">{product.shortTitle}</p>
        <h3 className="mt-1.5 text-[1.15rem] font-semibold leading-snug tracking-[-0.03em] text-foreground">{product.title}</h3>
        <p className="mt-2 text-[13px] leading-5 text-muted">{product.description}</p>
      </div>
      <div className="module-card-actions flex flex-wrap items-center gap-3">
        <Link href={`/software/${product.slug}/`} className="card-link">
          Learn more <ArrowRight className="h-4 w-4" />
        </Link>
        <a href={efactorPortalUrl} target="_blank" rel="noreferrer" className="card-link card-link-muted">
          Access <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
