import type { Metadata } from 'next';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { ExperienceProvider } from '@/components/Experience';
import { appearanceBootstrap } from '@/lib/appearance';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Karat Infinity | Connected Technology Ecosystem',
    template: '%s | Karat Infinity',
  },
  description: 'Karat Infinity builds intelligent digital systems with eFactor and the connected Dude Softwares enterprise suite.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: appearanceBootstrap }}/></head>
      <body>
        <ExperienceProvider>
        <SiteHeader />
        {children}
        <SiteFooter />
        </ExperienceProvider>
      </body>
    </html>
  );
}
