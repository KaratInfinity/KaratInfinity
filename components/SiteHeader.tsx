'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { resources } from '@/lib/resources';
import { softwareProducts, efactorPortalUrl } from '@/lib/software';
import { hardwareProducts } from '@/lib/products';
import { Logo } from './Logo';
import { Dialog } from './Dialog';
import { ThemeToggle } from './Experience';
import { UiIcon } from './UiIcon';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Softwares', href: '/software/' },
  { name: 'Products', href: '/products/' },
  { name: 'About us', href: '/about/' },
];

function isActive(path: string, href: string) {
  if (href === '/') return path === '/';
  if (href === '/software/') return path.startsWith('/software/');
  if (href === '/products/') return path.startsWith('/products/');
  if (href === '/about/') return path.startsWith('/about/') || path.startsWith('/company/');
  return path.startsWith(href);
}

export function SiteHeader() {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState('');
  const path = usePathname();
  const root = useRef<HTMLElement>(null);
  useEffect(() => { setMenu(false); setSearch(false); }, [path]);
  useEffect(() => {
    function outside(e: PointerEvent) { if (!root.current?.contains(e.target as Node)) setMenu(false); }
    function key(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenu(false);
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setSearch(current => !current); }
    }
    document.addEventListener('pointerdown', outside); document.addEventListener('keydown', key);
    return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', key); };
  }, []);
  const pages = [
    { label: 'Home', href: '/', text: 'Karat Infinity landing page' },
    { label: 'Softwares', href: '/software/', text: 'The Dude Softwares application suite' },
    { label: 'Products', href: '/products/', text: 'Karat Infinity connected hardware catalogue' },
    { label: 'About us', href: '/about/', text: 'Meet Karat Infinity' },
    ...hardwareProducts.map(p => ({ label: p.title, href: `/products/${p.slug}/`, text: p.description })),
    ...resources.map(r => ({ label: r.title, href: `/resources/${r.slug}/`, text: r.summary })),
    ...softwareProducts.map(p => ({ label: p.title, href: `/software/${p.slug}/`, text: p.description })),
    { label: 'Partnership', href: '/partnership/', text: 'The eFactor ecosystem' },
    { label: 'Use cases', href: '/use-cases/', text: 'Connect your operating workflows' },
    { label: 'Resources', href: '/resources/', text: 'The resource journal' },
    { label: 'Frequently asked questions', href: '/resources/faq/', text: 'Help with access, pricing, and support' },
    { label: 'Pricing', href: '/pricing/', text: 'Discuss your project scope' },
    { label: 'Contact us', href: '/contact/', text: 'Talk to our team' },
    { label: 'Request a demo', href: '/request-demo/', text: 'Explore what is possible for your business' },
  ];
  const results = pages.filter(p => (p.label + ' ' + p.text).toLowerCase().includes(query.trim().toLowerCase()));
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header" ref={root}>
      <div className="shell header-row">
        <Logo priority/>
        <nav id="main-navigation" className={`desktop-nav ${menu ? 'mobile-open' : ''}`} aria-label="Main navigation">
          {navItems.map(item => (
            <Link key={item.href} href={item.href} className={`nav-item ${isActive(path, item.href) ? 'active' : ''}`} onClick={() => setMenu(false)}>{item.name}</Link>
          ))}
          <a href={efactorPortalUrl} target="_blank" rel="noreferrer" className="mobile-login" onClick={() => setMenu(false)}>eFactor login <UiIcon name="arrowUp"/></a>
          <Link href="/request-demo/" className="primary-button mobile-demo" onClick={() => setMenu(false)}>Let’s talk <UiIcon name="arrowUp"/></Link>
        </nav>
        <div className="header-tools">
          <button className="search-trigger" aria-label="Search website" title="Search (Ctrl / Cmd + K)" onClick={() => setSearch(true)}><UiIcon name="search"/></button>
          <ThemeToggle/>
          <Link href="/request-demo/" className="primary-button header-cta">Let’s talk <UiIcon name="arrowUp"/></Link>
          <button className="icon-button menu-toggle" aria-label={menu ? 'Close navigation' : 'Open navigation'} aria-expanded={menu} aria-controls="main-navigation" onClick={() => setMenu(!menu)}><UiIcon name={menu ? 'close' : 'menu'}/></button>
        </div>
      </div>
    </header>
    <Dialog open={search} onClose={() => setSearch(false)} title="Find your connection.">
      <label className="search-label" htmlFor="site-search">Search products, capabilities, and resources</label><input id="site-search" className="search-input" value={query} onChange={e => setQuery(e.target.value)} placeholder="Try finance, projects, or documents…" autoFocus/>
      <p className="result-count" aria-live="polite">{results.length} results</p>
      <div className="search-results">{results.length ? results.map(r => <Link key={r.href} href={r.href} onClick={() => setSearch(false)}><strong>{r.label}</strong><span>{r.text}</span></Link>) : <p>No results. Try a broader term or <Link href="/contact/" onClick={() => setSearch(false)}>contact us</Link>.</p>}</div>
    </Dialog>
  </>;
}
