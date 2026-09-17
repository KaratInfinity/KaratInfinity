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
        <p className="text-sm font-semibold text-muted">{product.shortTitle}</p>
        <h3 className="mt-3 text-[1.65rem] font-semibold leading-[1.2] tracking-[-0.035em] text-foreground">{product.title}</h3>
        <p className="mt-5 text-base leading-7 text-muted">{product.description}</p>
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
