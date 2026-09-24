import { softwareProducts } from '@/lib/software';

export type ProductFamilyId = 'ioe' | 'dude' | '1-verse' | 'automation';

export type CatalogProduct = {
  id: string;
  slug: string;
  name: string;
  family: ProductFamilyId;
  category: string;
  image?: string;
  shortDescription: string;
  overview?: string;
  capabilities?: string[];
  outcomes?: string[];
  mediaSlug?: string;
};

export type CatalogCategory = {
  slug: string;
  name: string;
  summary: string;
  href: string;
};

export type ProductFamily = {
  id: ProductFamilyId;
  name: string;
  navSummary: string;
  viewLabel: string;
  href: string;
  summary: string;
  categories: CatalogCategory[];
};

const ioeIntro = (name: string) => `${name} is part of the Karat Infinity IOE range.`;
const verseIntro = (name: string) => `${name} is part of the Karat Infinity 1-Verse range.`;

function item(
  slug: string,
  name: string,
  category: string,
  image?: string,
): CatalogProduct {
  return {
    id: slug,
    slug,
    name,
    family: 'ioe',
    category,
    image,
    shortDescription: ioeIntro(name),
  };
}

export const ioeProducts: CatalogProduct[] = [
  item('lpf-1-switch', 'LPF 1 Switch (16A - Relay)', 'smart-switch-modules', '/products/lpf-1-switch.jpg'),
  item('lpf-2-switch', 'LPF 2 Switch (16A - Relay)', 'smart-switch-modules', '/products/lpf-2-switch.jpg'),
  item('nexa-1-switch', 'NEXA 1 Switch (10A - Relay)', 'smart-switch-modules', '/products/nexa-1-switch.png'),
  item('nexa-2-switch', 'NEXA 2 Switch (10A - Relay)', 'smart-switch-modules'),
  item('nexa-5-switch', 'NEXA 5 Switch (10A - Relay)', 'smart-switch-modules', '/products/nexa-5-switch.png'),
  item('nexa-1-switch-1-fan', 'NEXA 1 Switch 1 Fan (10A - Relay)', 'smart-switch-modules', '/products/nexa-1-switch-1-fan.png'),
  item('nexa-hd-switch-25a', 'NEXA HD Switch 25A (with power monitoring)', 'smart-switch-modules', '/products/nexa-hd-switch-25a.png'),
  item('nexa-2-switch-1-fan', 'NEXA 2 Switch 1 Fan (10A - Relay)', 'smart-switch-modules', '/products/nexa-2-switch-1-fan.png'),
  item('nexa-4-switch-1-fan', 'NEXA 4 Switch 1 Fan (10A - Relay)', 'smart-switch-modules'),
  item('hd-touch-vpro', 'HD Touch VPro (25A-Relay & RGB Led)', 'touch-controls', '/products/hd-touch-vpro.jpg'),
  item('2-touch-vpro', '2 Touch VPro (10A-Relay & RGB Led)', 'touch-controls', '/products/2-touch-vpro.jpg'),
  item('fan-dimmer-touch-vpro', 'Fan Dimmer Touch VPro (10A-Relay & RGB Led)', 'touch-controls', '/products/fan-dimmer-touch-vpro.jpeg'),
  item('4-touch-rpro', '4 Touch RPro (10A-Relay & RGB Led)', 'touch-controls', '/products/4-touch-rpro.jpg'),
  item('magnetic-glass-touch-2-switch', 'Magnetic+ Glass Touch 2 Switch (2M/3M)', 'glass-touch-panels', '/products/magnetic-glass-touch-2-switch.jpg'),
  item('magnetic-glass-touch-4-switch', 'Magnetic+ Glass Touch 4 Switch (2M/3M)', 'glass-touch-panels', '/products/magnetic-glass-touch-4-switch.jpg'),
  item('magnetic-glass-touch-fan-switch', 'Magnetic+ Glass Touch Fan Switch (2M/3M)', 'glass-touch-panels', '/products/magnetic-glass-touch-fan-switch.jpg'),
  item('magnetic-glass-touch-4-switch-1-fan', 'Magnetic+ Glass Touch 4 Switch 1 Fan (1-HD,1-2way) (4M)', 'glass-touch-panels', '/products/magnetic-glass-touch-4-switch-1-fan.jpg'),
  item('magnetic-glass-touch-8-switch-1-socket', 'Magnetic+ Glass Touch 8 Switch 1 Socket (2-HD,1-2way) (6M)', 'glass-touch-panels', '/products/magnetic-glass-touch-8-switch-1-socket.jpg'),
  item('magnetic-glass-touch-4-switch-1-fan-1-socket', 'Magnetic+ Glass Touch 4 Switch 1 Fan 1 Socket (1-HD,1-2way) (6M)', 'glass-touch-panels'),
  item('magnetic-glass-touch-8-switch-1-fan', 'Magnetic+ Glass Touch 8 Switch 1 Fan (2-HD,2-2way) (8M)', 'glass-touch-panels'),
  item('magnetic-glass-touch-16-switch-2-fan', 'Magnetic+ Glass Touch 16 Switch 2 Fan (4-HD,4-2way) (12M)', 'glass-touch-panels'),
  item('magnetic-glass-touch-12-switch-1-fan-2-socket', 'Magnetic+ Glass Touch 12 Switch 1 Fan 2 Socket (2-HD,2-2way) (12M)', 'glass-touch-panels'),
  item('rockair-5blade-bldc-iot-fan', 'Rockair 5 Blade BLDC IoT Fan', 'smart-fans', '/products/rockair-5blade-bldc-iot-fan.jpg'),
  item('atom-3blade-bldc-iot-fan', 'Atom 3 Blade BLDC IoT Fan', 'smart-fans', '/products/atom-3blade-bldc-iot-fan.jpg'),
  item('glostar-3blade-bldc-iot-fan', 'Glostar 3 Blade BLDC IoT Fan', 'smart-fans', '/products/glostar-3blade-bldc-iot-fan.jpg'),
  item('sportage-blade-bldc-iot-fan', 'Sportage Blade BLDC IoT Fan', 'smart-fans', '/products/sportage-blade-bldc-iot-fan.jpg'),
  item('arval-3blade-bldc-iot-fan', 'Arval 3 Blade BLDC IoT Fan', 'smart-fans', '/products/arval-3blade-bldc-iot-fan.jpg'),
  item('bldc-ceiling-fan-iot', 'BLDC Ceiling Fan with IoT', 'smart-fans', '/products/bldc-ceiling-fan-iot.png'),
  item('bldc-ceiling-fan-iot-ii', 'BLDC Ceiling Fan with IoT', 'smart-fans', '/products/bldc-ceiling-fan-iot-ii.png'),
  item('bldc-ceiling-fan-led-wooden', 'BLDC Ceiling Fan with LED and Wooden Blades', 'smart-fans', '/products/bldc-ceiling-fan-led-wooden.png'),
  item('iot-multi-cooker', 'IoT Multi Cooker', 'smart-appliances', '/products/iot-multi-cooker.jpg'),
  item('1phase-pump-controller-iot', '1 Phase Pump Controller with IoT', 'pump-controllers', '/products/1phase-pump-controller-iot.png'),
  item('3phase-pump-controller-iot', '3 Phase Pump Controller with IoT', 'pump-controllers'),
  item('3phase-pump-controller-gsm', '3 Phase Pump Controller with GSM', 'pump-controllers'),
  item('smart-plug-iot', 'Smart Plug with IoT', 'power-distribution', '/products/smart-plug-iot.jpeg'),
  item('busbar-system', 'Busbar System', 'power-distribution', '/products/busbar-system.png'),
];

export const labelProducts: CatalogProduct[] = [
  {
    id: 'taglink',
    slug: 'taglink',
    name: 'TagLink',
    family: '1-verse',
    category: 'labels',
    shortDescription: 'A 1-Verse label for giving an individual product a digital identity.',
  },
  {
    id: 'production-tag',
    slug: 'production-tag',
    name: 'Production Tag',
    family: '1-verse',
    category: 'labels',
    shortDescription: 'A 1-Verse production tag for identifying a product through manufacture.',
  },
];

export const eLabelProducts: CatalogProduct[] = [
  { id: 'jewellery-elabel-1inch', slug: 'jewellery-elabel-1inch', name: 'Jewellery E-Label Display 1 inch', family: '1-verse', category: 'jewellery', image: '/products/jewellery-elabel-1inch.png', shortDescription: verseIntro('Jewellery E-Label Display 1 inch') },
  { id: 'jewellery-elabel-1-5inch', slug: 'jewellery-elabel-1-5inch', name: 'Jewellery E-Label Display 1.5 inch', family: '1-verse', category: 'jewellery', image: '/products/jewellery-elabel-1-5inch.png', shortDescription: verseIntro('Jewellery E-Label Display 1.5 inch') },
  { id: 'jewellery-elabel-2-1inch', slug: 'jewellery-elabel-2-1inch', name: 'Jewellery E-Label Display 2.1 inch', family: '1-verse', category: 'jewellery', image: '/products/jewellery-elabel-2-1inch.png', shortDescription: verseIntro('Jewellery E-Label Display 2.1 inch') },
  { id: 'elabel-display-2-1inch-shops', slug: 'elabel-display-2-1inch-shops', name: 'E-Label Display 2.1 inch for Shops', family: '1-verse', category: 'retail', image: '/products/elabel-display-2-1inch-shops.png', shortDescription: verseIntro('E-Label Display 2.1 inch for Shops') },
  { id: 'elabel-display-2-9inch-shops', slug: 'elabel-display-2-9inch-shops', name: 'E-Label Display 2.9 inch for Shops', family: '1-verse', category: 'retail', image: '/products/elabel-display-2-9inch-shops.png', shortDescription: verseIntro('E-Label Display 2.9 inch for Shops') },
  { id: 'elabel-display-4-1inch-shops', slug: 'elabel-display-4-1inch-shops', name: 'E-Label Display 4.1 inch for Shops', family: '1-verse', category: 'retail', image: '/products/elabel-display-4-1inch-shops.png', shortDescription: verseIntro('E-Label Display 4.1 inch for Shops') },
];

export const automationProducts: CatalogProduct[] = [
  {
    id: 'industrial-machine-automation',
    slug: 'industrial-machine-automation',
    name: 'Industrial & Machine Automation',
    family: 'automation',
    category: 'automation',
    shortDescription: 'Connect equipment, machinery and production processes.',
    overview: 'Connect equipment, machinery and production processes.',
    mediaSlug: 'manufacturing',
  },
  {
    id: 'asset-facility-automation',
    slug: 'asset-facility-automation',
    name: 'Asset & Facility Automation',
    family: 'automation',
    category: 'automation',
    shortDescription: 'Monitor connected assets and infrastructure.',
    overview: 'Monitor connected assets and infrastructure.',
    mediaSlug: 'asset-management',
  },
  {
    id: 'energy-power-automation',
    slug: 'energy-power-automation',
    name: 'Energy & Power Automation',
    family: 'automation',
    category: 'automation',
    shortDescription: 'Connect and monitor electrical and energy systems.',
    overview: 'Connect and monitor electrical and energy systems.',
    mediaSlug: 'energy-power',
  },
  {
    id: 'process-automation',
    slug: 'process-automation',
    name: 'Process Automation',
    family: 'automation',
    category: 'automation',
    shortDescription: 'Connect operating processes, devices and data.',
    overview: 'Connect operating processes, devices and data.',
    mediaSlug: 'project-management',
  },
];

export const dudeProducts: CatalogProduct[] = softwareProducts.map((product) => ({
  id: product.slug,
  slug: product.slug,
  name: product.title,
  family: 'dude' as const,
  category: 'software',
  shortDescription: product.description,
  overview: product.overview,
  capabilities: product.capabilities,
  outcomes: product.outcomes,
  mediaSlug: product.slug,
}));

export const productFamilies: ProductFamily[] = [
  {
    id: 'ioe',
    name: 'IOE',
    navSummary: 'Connected smart products',
    viewLabel: 'IOE',
    href: '/products/ioe/',
    summary: 'Connected smart products for homes, shops and installations.',
    categories: [
      { slug: 'smart-switch-modules', name: 'Smart Switch Modules', summary: 'LPF and NEXA switch modules from the IOE catalogue.', href: '/products/ioe/smart-switch-modules/' },
      { slug: 'touch-controls', name: 'Touch Controls', summary: 'Touch control plates from the IOE catalogue.', href: '/products/ioe/touch-controls/' },
      { slug: 'glass-touch-panels', name: 'Glass Touch Panels', summary: 'Magnetic+ glass touch panels from the IOE catalogue.', href: '/products/ioe/glass-touch-panels/' },
      { slug: 'smart-fans', name: 'Smart Fans', summary: 'BLDC and IoT fans from the IOE catalogue.', href: '/products/ioe/smart-fans/' },
      { slug: 'smart-appliances', name: 'Smart Appliances', summary: 'Connected appliances from the IOE catalogue.', href: '/products/ioe/smart-appliances/' },
      { slug: 'pump-controllers', name: 'Pump & Motor Controllers', summary: 'Pump controllers from the IOE catalogue.', href: '/products/ioe/pump-controllers/' },
      { slug: 'power-distribution', name: 'Smart Power & Distribution', summary: 'Power and distribution products from the IOE catalogue.', href: '/products/ioe/power-distribution/' },
    ],
  },
  {
    id: 'dude',
    name: 'DUDE',
    navSummary: 'Business software',
    viewLabel: 'DUDE',
    href: '/products/dude/',
    summary: 'Serious software. Surprisingly simple. DUDE is Karat Infinity’s modular software ecosystem.',
    categories: [],
  },
  {
    id: '1-verse',
    name: '1-VERSE',
    navSummary: 'Product identity',
    viewLabel: '1-Verse',
    href: '/products/1-verse/',
    summary: 'Digital product identity through labels and e-labels.',
    categories: [
      { slug: 'labels', name: 'Labels', summary: 'TagLink and Production Tag.', href: '/products/1-verse/labels/' },
      { slug: 'e-labels', name: 'E-Labels', summary: 'Jewellery and retail e-label displays.', href: '/products/1-verse/e-labels/' },
    ],
  },
  {
    id: 'automation',
    name: 'AUTOMATION',
    navSummary: 'Intelligent automation',
    viewLabel: 'Automation',
    href: '/products/automation/',
    summary: 'Automation for machines, assets, energy and operating processes.',
    categories: [],
  },
];

export const catalogProducts: CatalogProduct[] = [
  ...ioeProducts,
  ...dudeProducts,
  ...labelProducts,
  ...eLabelProducts,
  ...automationProducts,
];

export function demoHref(family: string, product: string) {
  return `/request-demo/?family=${encodeURIComponent(family)}&product=${encodeURIComponent(product)}`;
}

export function detailRoute(product: CatalogProduct) {
  if (product.family === 'ioe') return `/products/ioe/${product.category}/${product.slug}/`;
  if (product.family === 'dude') return `/products/dude/${product.slug}/`;
  if (product.family === 'automation') return `/products/automation/${product.slug}/`;
  if (product.category === 'labels') return `/products/1-verse/labels/${product.slug}/`;
  return `/products/1-verse/e-labels/${product.slug}/`;
}

export function getFamily(id: ProductFamilyId) {
  return productFamilies.find((family) => family.id === id);
}

export function getIoeCategory(slug: string) {
  return getFamily('ioe')?.categories.find((category) => category.slug === slug);
}

export function productsInCategory(family: ProductFamilyId, category: string) {
  return catalogProducts.filter((product) => product.family === family && product.category === category);
}

export function getCatalogProduct(family: ProductFamilyId, slug: string) {
  return catalogProducts.find((product) => product.family === family && product.slug === slug);
}

export function getCatalogProductBySlug(slug: string) {
  return catalogProducts.find((product) => product.slug === slug);
}
