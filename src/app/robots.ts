import type { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/constants'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/privacy-policy', '/terms-of-use', '/thank-you'],
    },
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  }
}
