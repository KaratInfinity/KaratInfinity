import Link from 'next/link';
import { featuredProducts } from '@/lib/products';
import { ProductCard } from './ProductCard';

export function ProductShowcase() {
  return (
    <div className="catalog-grid">
      {featuredProducts.map((product) => <ProductCard key={product.slug} product={product} />)}
    </div>
  );
}
