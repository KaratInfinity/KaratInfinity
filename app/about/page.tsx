import { AboutView } from '@/components/AboutView';
import { pageMeta } from '@/lib/site';

export const metadata = pageMeta(
  'About us',
  'Karat Infinity began as an idea in 2022 and was officially established on 17 January 2024. We build the ecosystem behind connected products.',
  '/about/',
);

export default function AboutPage() {
  return <AboutView />;
}
