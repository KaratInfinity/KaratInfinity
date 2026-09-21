import { karatInfinityMapsUrl } from './company';

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://karatinfinity.com').replace(/\/$/, '');

export const siteName = 'Karat Infinity';

export const siteDescription =
  'Karat Infinity builds intelligent digital systems, connected hardware, and the Dude Softwares enterprise suite with eFactor.';

export const siteEmail = 'hello@karatinfinity.com';
export const sitePhone = '+91-6305983246';

export const siteNav = [
  { name: 'Home', path: '/' },
  { name: 'Softwares', path: '/software/' },
  { name: 'Products', path: '/products/' },
  { name: 'About us', path: '/about/' },
  { name: 'Partnership', path: '/partnership/' },
  { name: 'Use cases', path: '/use-cases/' },
  { name: 'Resources', path: '/resources/' },
  { name: 'Contact us', path: '/contact/' },
  { name: 'Request a demo', path: '/request-demo/' },
] as const;

export function absoluteUrl(path = '/') {
  if (path === '/') return `${siteUrl}/`;
  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

export function pageMeta(title: string, description: string, path: string) {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url,
      siteName,
      locale: 'en_IN',
      type: 'website' as const,
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: `${title} | ${siteName}`,
      description,
    },
  };
}

export function siteJsonLd() {
  const logoUrl = absoluteUrl('/karat-infinity-logo.png');
  const organizationId = `${siteUrl}/#organization`;
  const websiteId = `${siteUrl}/#website`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: siteName,
        legalName: siteName,
        url: absoluteUrl('/'),
        logo: {
          '@type': 'ImageObject',
          url: logoUrl,
          caption: siteName,
        },
        image: logoUrl,
        description: siteDescription,
        email: siteEmail,
        telephone: sitePhone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Efactor Rd 12-13 865 25 Tarnaka 13th Street, Maruti Nagar Rd, Hanuman Nagar',
          addressLocality: 'Secunderabad',
          addressRegion: 'Telangana',
          postalCode: '500076',
          addressCountry: 'IN',
        },
        hasMap: karatInfinityMapsUrl,
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'sales',
            email: siteEmail,
            telephone: sitePhone,
            areaServed: 'IN',
            availableLanguage: ['English', 'Hindi'],
          },
          {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            email: 'efactorioe@gmail.com',
            telephone: sitePhone,
            areaServed: 'IN',
            availableLanguage: ['English', 'Hindi'],
          },
        ],
        areaServed: { '@type': 'Country', name: 'India' },
        knowsAbout: [
          'Enterprise software',
          'Connected products',
          'Internet of Things',
          'Smart switches',
          'Dude Softwares',
          'eFactor',
        ],
        hasOfferCatalog: [
          {
            '@type': 'OfferCatalog',
            name: 'Karat Infinity products',
            url: absoluteUrl('/products/'),
          },
          {
            '@type': 'OfferCatalog',
            name: 'Dude Softwares',
            url: absoluteUrl('/software/'),
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: absoluteUrl('/'),
        name: siteName,
        alternateName: ['KaratInfinity', 'Karat Infinity India'],
        description: siteDescription,
        inLanguage: 'en-IN',
        publisher: { '@id': organizationId },
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/#webpage`,
        url: absoluteUrl('/'),
        name: siteName,
        description: siteDescription,
        isPartOf: { '@id': websiteId },
        about: { '@id': organizationId },
        primaryImageOfPage: logoUrl,
        significantLink: [
          absoluteUrl('/software/'),
          absoluteUrl('/products/'),
          absoluteUrl('/about/'),
          absoluteUrl('/contact/'),
          absoluteUrl('/request-demo/'),
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `${siteUrl}/#sitelinks`,
        name: `${siteName} website`,
        itemListOrder: 'https://schema.org/ItemListOrderAscending',
        numberOfItems: siteNav.length,
        itemListElement: siteNav.map((item, index) => ({
          '@type': 'SiteNavigationElement',
          position: index + 1,
          name: item.name,
          url: absoluteUrl(item.path),
        })),
      },
    ],
  };
}
