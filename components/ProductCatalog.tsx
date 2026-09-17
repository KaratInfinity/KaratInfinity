'use client';

import { useState } from 'react';
import { hardwareProducts, productCategories } from '@/lib/products';
import { ProductCard } from './ProductCard';

const filters = ['All products', ...productCategories];

export function ProductCatalog() {
  const [query, setQuery] = useState('');
  const [group, setGroup] = useState(0);
  const needle = query.trim().toLowerCase();
  const found = hardwareProducts.filter((product) => {
    const inGroup = group === 0 || product.category === filters[group];
    const haystack = `${product.title} ${product.shortTitle} ${product.category} ${product.series} ${product.description}`.toLowerCase();
    return inGroup && haystack.includes(needle);
  });

  return (
    <>
      <div className="filter-bar">
        <div className="filter-pills">
          {filters.map((label, index) => (
            <button key={label} onClick={() => setGroup(index)} className={index === group ? 'selected' : ''} aria-pressed={index === group}>
              {label}
            </button>
          ))}
        </div>
        <label className="filter-search">
          <span className="sr-only">Search products</span>
          <input type="search" placeholder="Find a switch, fan, or e-Label…" value={query} onChange={(event) => setQuery(event.target.value)} />
        </label>
      </div>
      <p className="result-count" aria-live="polite">{found.length} products</p>
      <div className="catalog-grid">
        {found.map((product) => <ProductCard key={product.slug} product={product} />)}
      </div>
      {!found.length && (
        <div className="empty-state">
          <h3>No products found.</h3>
          <button className="secondary-button" onClick={() => { setQuery(''); setGroup(0); }}>Clear filters</button>
        </div>
      )}
    </>
  );
}
