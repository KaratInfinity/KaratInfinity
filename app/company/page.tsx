import { AboutView } from '@/components/AboutView';
import { pageMeta } from '@/lib/site';

export const metadata = pageMeta(
  'About us',
  'Meet Karat Infinity — a technology company building intelligent digital systems, enterprise software and connected products.',
  '/company/',
);

export default function CompanyPage() {
  return <AboutView />;
}
