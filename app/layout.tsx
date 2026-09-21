import type { Metadata } from 'next';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { ExperienceProvider } from '@/components/Experience';
import { JsonLd } from '@/components/JsonLd';
import { appearanceBootstrap } from '@/lib/appearance';
import { absoluteUrl, siteDescription, siteName, siteUrl } from '@/lib/site';
import './globals.css';

const ogImage = {
  url: absoluteUrl('/karat-infinity-logo.png'),
  width: 546,
  height: 561,
  alt: siteName,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Connected Technology Ecosystem`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: absoluteUrl('/') }],
  creator: siteName,
  publisher: siteName,
  category: 'technology',
  keywords: [
    'Karat Infinity',
    'KaratInfinity',
    'Dude Softwares',
    'eFactor',
    'enterprise software',
    'connected products',
    'smart switches',
    'IoT',
    'ERP',
    'HRMS',
    'CRM',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: absoluteUrl('/'),
    siteName,
    title: `${siteName} | Connected Technology Ecosystem`,
    description: siteDescription,
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} | Connected Technology Ecosystem`,
    description: siteDescription,
    images: [ogImage],
  },
  icons: {
    icon: [{ url: '/karat-infinity-logo.png', type: 'image/png' }],
    apple: [{ url: '/karat-infinity-logo.png' }],
    shortcut: ['/karat-infinity-logo.png'],
  },
  appleWebApp: {
    title: siteName,
    capable: true,
    statusBarStyle: 'default',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: appearanceBootstrap }}/>
        <JsonLd />
      </head>
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
