/**
 * One-time seed script: pushes the site's current content and images into
 * Sanity so the client starts editing from exactly what is live today.
 *
 * Run it once, after creating your Sanity project and setting the env vars:
 *
 *   NEXT_PUBLIC_SANITY_PROJECT_ID=xxxx \
 *   NEXT_PUBLIC_SANITY_DATASET=production \
 *   SANITY_API_WRITE_TOKEN=sk... \
 *   npm run seed
 *
 * It is safe to re-run: it uses createOrReplace on fixed document IDs, so it
 * overwrites the singletons rather than creating duplicates. (Re-running does
 * re-upload images, so only re-run intentionally.)
 */
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { createClient } from '@sanity/client'

import {
  defaultAbout,
  defaultContact,
  defaultFaq,
  defaultGallery,
  defaultHome,
  defaultServices,
  defaultSiteSettings,
} from '../src/content/defaults'
import type { Img } from '../src/content/types'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_WRITE_TOKEN

if (!projectId || !token) {
  console.error(
    'Missing env vars. Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN before running.',
  )
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2024-10-01',
  useCdn: false,
})

const PUBLIC_DIR = join(process.cwd(), 'public')

/** Cache so an image reused across pages is uploaded only once. */
const assetCache = new Map<string, string>()

let keyCounter = 0
const key = () => `k${(keyCounter++).toString(36)}${Date.now().toString(36)}`

/** Upload a local image (referenced as "/images/foo.jpg") and return its asset id. */
async function uploadAsset(src: string): Promise<string> {
  const cached = assetCache.get(src)
  if (cached) return cached

  const filePath = join(PUBLIC_DIR, src.replace(/^\//, ''))
  const buffer = await readFile(filePath)
  const filename = src.split('/').pop() || 'image.jpg'
  const asset = await client.assets.upload('image', buffer, { filename })
  assetCache.set(src, asset._id)
  console.log(`  uploaded ${filename}`)
  return asset._id
}

/** Build a Sanity richImage value from a local Img. */
async function image(img: Img) {
  const assetId = await uploadAsset(img.src)
  return {
    _type: 'richImage',
    asset: { _type: 'reference', _ref: assetId },
    alt: img.alt,
    ...(img.objectPosition ? { objectPosition: img.objectPosition } : {}),
  }
}

async function run() {
  console.log('Seeding Sanity content...\n')

  // Site Settings
  console.log('• Site Settings')
  await client.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    ...defaultSiteSettings,
  })

  // Home Page
  console.log('• Home Page (uploading images)')
  await client.createOrReplace({
    _id: 'homePage',
    _type: 'homePage',
    heroHeadingLead: defaultHome.heroHeadingLead,
    heroHeadingEmphasis: defaultHome.heroHeadingEmphasis,
    heroSubheading: defaultHome.heroSubheading,
    heroCtaLabel: defaultHome.heroCtaLabel,
    heroBackgroundImage: await image(defaultHome.heroBackgroundImage),
    brandImage: await image(defaultHome.brandImage),
    brandHeading: defaultHome.brandHeading,
    brandParagraphs: defaultHome.brandParagraphs,
    howItWorksHeading: defaultHome.howItWorksHeading,
    howItWorksSteps: defaultHome.howItWorksSteps.map((s) => ({ _key: key(), ...s })),
    eventTypesHeading: defaultHome.eventTypesHeading,
    eventTypes: await Promise.all(
      defaultHome.eventTypes.map(async (e) => ({
        _key: key(),
        title: e.title,
        copy: e.copy,
        image: await image(e.image),
      })),
    ),
    closingHeading: defaultHome.closingHeading,
    closingCopy: defaultHome.closingCopy,
    closingCtaLabel: defaultHome.closingCtaLabel,
  })

  // About Page
  console.log('• About Page')
  await client.createOrReplace({
    _id: 'aboutPage',
    _type: 'aboutPage',
    heading: defaultAbout.heading,
    image: await image(defaultAbout.image),
    paragraphs: defaultAbout.paragraphs,
  })

  // Services Page
  console.log('• Services Page')
  await client.createOrReplace({
    _id: 'servicesPage',
    _type: 'servicesPage',
    heroHeading: defaultServices.heroHeading,
    heroParagraphs: defaultServices.heroParagraphs,
    heroImage: await image(defaultServices.heroImage),
    includedHeading: defaultServices.includedHeading,
    includedItems: defaultServices.includedItems,
    includedImage: await image(defaultServices.includedImage),
    collectionsHeading: defaultServices.collectionsHeading,
    collections: defaultServices.collections.map((c) => ({
      _key: key(),
      name: c.name,
      price: c.price,
      duration: c.duration,
      tagline: c.tagline,
      description: c.description,
      ...(c.note ? { note: c.note } : {}),
      includes: c.includes,
    })),
    canvasEyebrow: defaultServices.canvasEyebrow,
    canvasHeading: defaultServices.canvasHeading,
    canvasPricingNote: defaultServices.canvasPricingNote,
    canvasParagraphs: defaultServices.canvasParagraphs,
    canvasAudienceLabel: defaultServices.canvasAudienceLabel,
    canvasAudience: defaultServices.canvasAudience,
    canvasCtaLabel: defaultServices.canvasCtaLabel,
    finePrint: defaultServices.finePrint,
    closingHeading: defaultServices.closingHeading,
    closingCopy: defaultServices.closingCopy,
    closingCtaLabel: defaultServices.closingCtaLabel,
  })

  // FAQ Page
  console.log('• FAQ Page')
  await client.createOrReplace({
    _id: 'faqPage',
    _type: 'faqPage',
    heading: defaultFaq.heading,
    items: defaultFaq.items.map((i) => ({ _key: key(), ...i })),
    closingPrompt: defaultFaq.closingPrompt,
    closingCtaLabel: defaultFaq.closingCtaLabel,
  })

  // Gallery Page
  console.log('• Gallery Page (uploading images)')
  await client.createOrReplace({
    _id: 'galleryPage',
    _type: 'galleryPage',
    heading: defaultGallery.heading,
    intro: defaultGallery.intro,
    images: await Promise.all(
      defaultGallery.images.map(async (img) => ({ _key: key(), ...(await image(img)) })),
    ),
    closingPrompt: defaultGallery.closingPrompt,
    closingCtaLabel: defaultGallery.closingCtaLabel,
  })

  // Contact Page
  console.log('• Contact Page')
  await client.createOrReplace({
    _id: 'contactPage',
    _type: 'contactPage',
    heading: defaultContact.heading,
    intro: defaultContact.intro,
    image: await image(defaultContact.image),
    directLabel: defaultContact.directLabel,
  })

  console.log('\n✓ Done. Open /studio to edit, then publish.')
}

run().catch((err) => {
  console.error('\nSeed failed:', err)
  process.exit(1)
})
