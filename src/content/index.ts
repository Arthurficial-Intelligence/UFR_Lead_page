/**
 * Content access layer.
 *
 * Every page imports its content from here. Each getter tries Sanity first and
 * falls back to the local defaults when Sanity is not configured or returns
 * nothing — so the site renders correctly at every stage of the migration.
 *
 * Individual fields also coalesce to their default, so if an editor clears a
 * field in the Studio the site shows the original copy rather than a blank.
 */
import 'server-only'

import { client } from '@/sanity/client'
import { urlForImage } from '@/sanity/image'
import {
  aboutQuery,
  contactQuery,
  CONTENT_TAG,
  faqQuery,
  galleryQuery,
  homeQuery,
  servicesQuery,
  siteSettingsQuery,
} from '@/sanity/queries'
import {
  defaultAbout,
  defaultContact,
  defaultFaq,
  defaultGallery,
  defaultHome,
  defaultServices,
  defaultSiteSettings,
} from './defaults'
import type {
  AboutContent,
  ContactContent,
  FaqContent,
  GalleryContent,
  HomeContent,
  Img,
  ServicesContent,
  SiteSettings,
} from './types'

/** A raw Sanity image as returned by GROQ. */
interface SanityImage {
  asset?: { _ref?: string }
  alt?: string
  objectPosition?: string
}

/** Resolve a Sanity image to a usable `Img`, falling back to a local default. */
function resolveImg(source: SanityImage | undefined, fallback: Img): Img {
  const src = source ? urlForImage(source) : ''
  if (!src) return fallback
  return {
    src,
    alt: source?.alt ?? fallback.alt,
    objectPosition: source?.objectPosition ?? fallback.objectPosition,
  }
}

/** Non-empty value or fallback. Treats empty strings/arrays as "unset". */
function val<T>(value: T | null | undefined, fallback: T): T {
  if (value === null || value === undefined) return fallback
  if (typeof value === 'string' && value.trim() === '') return fallback
  if (Array.isArray(value) && value.length === 0) return fallback
  return value
}

/** Fetch a singleton from Sanity, or null if Sanity is off / the fetch fails. */
async function fetchSingleton<T>(query: string): Promise<T | null> {
  if (!client) return null
  try {
    return await client.fetch<T | null>(
      query,
      {},
      { next: { revalidate: 60, tags: [CONTENT_TAG] } },
    )
  } catch (error) {
    console.error('[content] Sanity fetch failed, using defaults:', error)
    return null
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const d = await fetchSingleton<Record<string, unknown>>(siteSettingsQuery)
  if (!d) return defaultSiteSettings
  return {
    name: val(d.name as string, defaultSiteSettings.name),
    shortName: val(d.shortName as string, defaultSiteSettings.shortName),
    description: val(d.description as string, defaultSiteSettings.description),
    tagline: val(d.tagline as string, defaultSiteSettings.tagline),
    contactEmail: val(d.contactEmail as string, defaultSiteSettings.contactEmail),
    instagram: val(d.instagram as string, defaultSiteSettings.instagram),
    instagramUrl: val(d.instagramUrl as string, defaultSiteSettings.instagramUrl),
    serviceAreas: val(d.serviceAreas as string[], defaultSiteSettings.serviceAreas),
  }
}

export async function getHome(): Promise<HomeContent> {
  const d = await fetchSingleton<Record<string, unknown>>(homeQuery)
  if (!d) return defaultHome
  const steps = d.howItWorksSteps as HomeContent['howItWorksSteps'] | undefined
  const eventTypes = d.eventTypes as
    | { title?: string; copy?: string; image?: SanityImage }[]
    | undefined
  return {
    heroHeadingLead: val(d.heroHeadingLead as string, defaultHome.heroHeadingLead),
    heroHeadingEmphasis: val(
      d.heroHeadingEmphasis as string,
      defaultHome.heroHeadingEmphasis,
    ),
    heroSubheading: val(d.heroSubheading as string, defaultHome.heroSubheading),
    heroCtaLabel: val(d.heroCtaLabel as string, defaultHome.heroCtaLabel),
    heroBackgroundImage: resolveImg(
      d.heroBackgroundImage as SanityImage,
      defaultHome.heroBackgroundImage,
    ),
    brandImage: resolveImg(d.brandImage as SanityImage, defaultHome.brandImage),
    brandHeading: val(d.brandHeading as string, defaultHome.brandHeading),
    brandParagraphs: val(d.brandParagraphs as string[], defaultHome.brandParagraphs),
    howItWorksHeading: val(d.howItWorksHeading as string, defaultHome.howItWorksHeading),
    howItWorksSteps: val(steps, defaultHome.howItWorksSteps),
    eventTypesHeading: val(d.eventTypesHeading as string, defaultHome.eventTypesHeading),
    eventTypes:
      eventTypes && eventTypes.length > 0
        ? eventTypes.map((e, i) => ({
            title: val(e.title, defaultHome.eventTypes[i]?.title ?? ''),
            copy: val(e.copy, defaultHome.eventTypes[i]?.copy ?? ''),
            image: resolveImg(
              e.image,
              defaultHome.eventTypes[i]?.image ?? { src: '', alt: '' },
            ),
          }))
        : defaultHome.eventTypes,
    closingHeading: val(d.closingHeading as string, defaultHome.closingHeading),
    closingCopy: val(d.closingCopy as string, defaultHome.closingCopy),
    closingCtaLabel: val(d.closingCtaLabel as string, defaultHome.closingCtaLabel),
  }
}

export async function getAbout(): Promise<AboutContent> {
  const d = await fetchSingleton<Record<string, unknown>>(aboutQuery)
  if (!d) return defaultAbout
  return {
    heading: val(d.heading as string, defaultAbout.heading),
    image: resolveImg(d.image as SanityImage, defaultAbout.image),
    paragraphs: val(d.paragraphs as string[], defaultAbout.paragraphs),
  }
}

export async function getServices(): Promise<ServicesContent> {
  const d = await fetchSingleton<Record<string, unknown>>(servicesQuery)
  if (!d) return defaultServices
  return {
    heroHeading: val(d.heroHeading as string, defaultServices.heroHeading),
    heroParagraphs: val(d.heroParagraphs as string[], defaultServices.heroParagraphs),
    heroImage: resolveImg(d.heroImage as SanityImage, defaultServices.heroImage),
    includedHeading: val(d.includedHeading as string, defaultServices.includedHeading),
    includedItems: val(d.includedItems as string[], defaultServices.includedItems),
    includedImage: resolveImg(
      d.includedImage as SanityImage,
      defaultServices.includedImage,
    ),
    collectionsHeading: val(
      d.collectionsHeading as string,
      defaultServices.collectionsHeading,
    ),
    collections: val(
      d.collections as ServicesContent['collections'],
      defaultServices.collections,
    ),
    canvasEyebrow: val(d.canvasEyebrow as string, defaultServices.canvasEyebrow),
    canvasHeading: val(d.canvasHeading as string, defaultServices.canvasHeading),
    canvasPricingNote: val(
      d.canvasPricingNote as string,
      defaultServices.canvasPricingNote,
    ),
    canvasParagraphs: val(
      d.canvasParagraphs as string[],
      defaultServices.canvasParagraphs,
    ),
    canvasAudienceLabel: val(
      d.canvasAudienceLabel as string,
      defaultServices.canvasAudienceLabel,
    ),
    canvasAudience: val(d.canvasAudience as string[], defaultServices.canvasAudience),
    canvasCtaLabel: val(d.canvasCtaLabel as string, defaultServices.canvasCtaLabel),
    finePrint: val(d.finePrint as string, defaultServices.finePrint),
    closingHeading: val(d.closingHeading as string, defaultServices.closingHeading),
    closingCopy: val(d.closingCopy as string, defaultServices.closingCopy),
    closingCtaLabel: val(d.closingCtaLabel as string, defaultServices.closingCtaLabel),
  }
}

export async function getFaq(): Promise<FaqContent> {
  const d = await fetchSingleton<Record<string, unknown>>(faqQuery)
  if (!d) return defaultFaq
  return {
    heading: val(d.heading as string, defaultFaq.heading),
    items: val(d.items as FaqContent['items'], defaultFaq.items),
    closingPrompt: val(d.closingPrompt as string, defaultFaq.closingPrompt),
    closingCtaLabel: val(d.closingCtaLabel as string, defaultFaq.closingCtaLabel),
  }
}

export async function getGallery(): Promise<GalleryContent> {
  const d = await fetchSingleton<Record<string, unknown>>(galleryQuery)
  if (!d) return defaultGallery
  const images = d.images as SanityImage[] | undefined
  return {
    heading: val(d.heading as string, defaultGallery.heading),
    intro: val(d.intro as string, defaultGallery.intro),
    images:
      images && images.length > 0
        ? images.map((img, i) =>
            resolveImg(img, defaultGallery.images[i] ?? { src: '', alt: '' }),
          )
        : defaultGallery.images,
    closingPrompt: val(d.closingPrompt as string, defaultGallery.closingPrompt),
    closingCtaLabel: val(d.closingCtaLabel as string, defaultGallery.closingCtaLabel),
  }
}

export async function getContact(): Promise<ContactContent> {
  const d = await fetchSingleton<Record<string, unknown>>(contactQuery)
  if (!d) return defaultContact
  return {
    heading: val(d.heading as string, defaultContact.heading),
    intro: val(d.intro as string, defaultContact.intro),
    image: resolveImg(d.image as SanityImage, defaultContact.image),
    directLabel: val(d.directLabel as string, defaultContact.directLabel),
  }
}
