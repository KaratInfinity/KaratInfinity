import Image from 'next/image';
import Link from 'next/link';
import type { HardwareProduct } from '@/lib/products';
import { ArrowRight } from './Icons';

export function ProductCard({ product }: { product: HardwareProduct }) {
  return (
    <article className="hardware-card">
      <Link href={`/products/${product.slug}/`} className="hardware-photo" aria-label={product.title}>
        <Image src={product.image} alt={product.title} width={640} height={640} />
      </Link>
      <div className="hardware-copy">
        <div className="card-topline">
          <span className="product-number">{product.number}</span>
          <span className="product-category">{product.category}</span>
        </div>
        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">{product.series}</p>
        <h3 className="mt-1.5 text-[1.05rem] font-semibold leading-snug tracking-[-0.03em]">{product.title}</h3>
        <p className="mt-2 text-[13px] leading-5 text-muted">{product.description}</p>
        <Link href={`/products/${product.slug}/`} className="card-link mt-3">
          View product <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
