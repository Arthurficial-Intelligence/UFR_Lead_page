export const SITE_CONFIG = {
  name: 'Unfiltered Rays Media Co.',
  shortName: 'Unfiltered Rays',
  description:
    'Intentional, refined photo experiences for weddings and elevated events in Nashville. Preserving the moment, as it is.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://unfilteredrays.com',
  ogImage: '/og-image.jpg',
  keywords: [
    'luxury photo booth Nashville',
    'wedding photo booth Nashville',
    'refined wedding photo experience',
    'corporate photo booth activation Nashville',
    'high-end photo booth Nashville TN',
    'vintage photo booth Nashville',
    'photo booth rental Nashville',
    'event photo booth Tennessee',
  ],
  contact: {
    email: 'hello@unfilteredrays.com',
    instagram: '@unfilteredraysmediaco',
    instagramUrl: 'https://www.instagram.com/unfilteredraysmediaco',
  },
  address: {
    locality: 'Nashville',
    region: 'TN',
    country: 'US',
  },
  serviceAreas: [
    'Nashville',
    'Murfreesboro',
    'Clarksville',
    'Franklin',
    'Spring Hill',
    'Lebanon',
  ],
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
} as const
