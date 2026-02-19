export const SITE_CONFIG = {
  name: 'UFR Photo Booth',
  description:
    'Premium photo booth rental for weddings, corporate events, and parties. Book your photo booth experience today.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourphotoboothdomain.com',
  ogImage: '/og-image.jpg',
  keywords: [
    'photo booth rental',
    'photo booth',
    'event photography',
    'wedding photo booth',
    'corporate photo booth',
    'party photo booth',
    'photo booth service',
  ],
  contact: {
    email: 'hello@yourphotoboothdomain.com',
    phone: '+1-555-000-0000',
  },
  address: {
    locality: 'City',
    region: 'State',
    country: 'US',
  },
} as const
