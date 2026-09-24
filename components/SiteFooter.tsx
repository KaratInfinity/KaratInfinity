import Link from 'next/link';
import { Logo } from './Logo';
import { MotionToggle } from './Experience';
import { UiIcon } from './UiIcon';
import { karatInfinityAddress, karatInfinityMapsUrl } from '@/lib/company';
import { efactorPortalUrl } from '@/lib/software';
const columns = [
  ['Navigate', [['Home', '/'], ['About Us', '/about/'], ['Products', '/products/'], ['Careers', '/careers/']]],
  ['Company', [['Our story', '/about/#principles'], ['DUDE software', '/products/dude/'], ['Contact Us', '/contact/'], ['Request a demo', '/request-demo/']]],
  ['A little help', [['Resource journal', '/resources/'], ['Getting started', '/resources/getting-started/'], ['Help & FAQ', '/resources/faq/'], ['Contact us', '/contact/']]],
] as const;
export function SiteFooter() {
  return <footer className="footer-wrap"><div className="shell"><div className="footer-main"><div className="footer-brand"><Logo/><p>From an idea<br/>to a smart product.</p><a href={karatInfinityMapsUrl} target="_blank" rel="noreferrer" className="footer-address">{karatInfinityAddress.lines.map((line) => <span key={line}>{line}</span>)}</a><a href={efactorPortalUrl} target="_blank" rel="noreferrer" className="text-link">eFactor login <UiIcon name="arrowUp"/></a></div><div className="footer-columns">{columns.map(([name, links]) => <div key={name}><h3>{name}</h3>{links.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}</div>)}</div></div><div className="footer-bottom"><p>© {new Date().getFullYear()} Karat Infinity.</p><span>Software. Systems. Things.</span><MotionToggle/></div><div className="footer-giant" aria-hidden="true">Infinite by nature.</div></div></footer>;
}
