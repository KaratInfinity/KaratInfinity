import Link from 'next/link';
import { ArrowRight } from '@/components/Icons';

export default function NotFound() {
  return (
    <main className="page-main" id="main-content">
      <section className="page-hero min-h-[70vh]">
        <div className="shell relative z-10 py-16">
          <p className="eyebrow-pill">404</p>
          <h1 className="page-title mt-8">This path is outside the system.</h1>
          <p className="page-description">Return to the Karat Infinity home page or explore the software suite.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/" className="primary-button">Go home <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/software/" className="secondary-button">Explore softwares</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
