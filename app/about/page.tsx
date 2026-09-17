import type { Metadata } from 'next';
import { AboutView } from '@/components/AboutView';

export const metadata: Metadata = {
  title: 'About us',
  description: 'Meet Karat Infinity — a technology company building intelligent digital systems, enterprise software and connected products.',
};

export default function AboutPage() {
  return <AboutView />;
}
