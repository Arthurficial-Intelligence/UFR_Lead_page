import type { SchemaTypeDefinition } from 'sanity'

import { aboutPage } from './aboutPage'
import { contactPage } from './contactPage'
import { faqPage } from './faqPage'
import { galleryPage } from './galleryPage'
import { homePage } from './homePage'
import { richImage } from './richImage'
import { servicesPage } from './servicesPage'
import { siteSettings } from './siteSettings'

export const schemaTypes: SchemaTypeDefinition[] = [
  // Reusable objects
  richImage,
  // Singleton documents (one per page / settings)
  siteSettings,
  homePage,
  aboutPage,
  servicesPage,
  faqPage,
  galleryPage,
  contactPage,
]

/** Document types that should exist as a single editable entry (singletons). */
export const singletonTypes = new Set([
  'siteSettings',
  'homePage',
  'aboutPage',
  'servicesPage',
  'faqPage',
  'galleryPage',
  'contactPage',
])
