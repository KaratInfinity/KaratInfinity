import { AboutView } from '@/components/AboutView';
import { pageMeta } from '@/lib/site';

export const metadata = pageMeta(
  'About us',
  'Karat Infinity began as an idea in 2022 and was officially established on 17 January 2024.',
  '/company/',
);

export default function CompanyPage() {
  return <AboutView />;
}
