/**
 * Shared content types.
 *
 * These shapes are what the page components consume. They are produced either
 * from Sanity (when configured) or from the local defaults in `defaults.ts`.
 * Keeping a single shape means pages never need to know where the content came
 * from.
 */

/** A resolved image: a ready-to-use `src` URL plus alt text. */
export interface Img {
  src: string
  alt: string
  /** Optional CSS object-position (e.g. "center 20%") for art-directed crops. */
  objectPosition?: string
}

export interface SiteSettings {
  name: string
  shortName: string
  description: string
  tagline: string
  contactEmail: string
  instagram: string
  instagramUrl: string
  serviceAreas: string[]
}

export interface HowItWorksStep {
  number: string
  title: string
  copy: string
}

export interface EventType {
  title: string
  copy: string
  image: Img
}

export interface HomeContent {
  heroHeadingLead: string
  heroHeadingEmphasis: string
  heroSubheading: string
  heroCtaLabel: string
  heroBackgroundImage: Img
  brandImage: Img
  brandHeading: string
  brandParagraphs: string[]
  howItWorksHeading: string
  howItWorksSteps: HowItWorksStep[]
  eventTypesHeading: string
  eventTypes: EventType[]
  closingHeading: string
  closingCopy: string
  closingCtaLabel: string
}

export interface AboutContent {
  heading: string
  image: Img
  paragraphs: string[]
}

export interface Collection {
  name: string
  price: string
  duration: string
  tagline: string
  description: string
  note: string | null
  includes: string[]
}

export interface ServicesContent {
  heroHeading: string
  heroParagraphs: string[]
  heroImage: Img
  includedHeading: string
  includedItems: string[]
  includedImage: Img
  collectionsHeading: string
  collections: Collection[]
  canvasEyebrow: string
  canvasHeading: string
  canvasPricingNote: string
  canvasParagraphs: string[]
  canvasAudienceLabel: string
  canvasAudience: string[]
  canvasCtaLabel: string
  finePrint: string
  closingHeading: string
  closingCopy: string
  closingCtaLabel: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface FaqContent {
  heading: string
  items: FaqItem[]
  closingPrompt: string
  closingCtaLabel: string
}

export interface GalleryContent {
  heading: string
  intro: string
  images: Img[]
  closingPrompt: string
  closingCtaLabel: string
}

export interface ContactContent {
  heading: string
  intro: string
  image: Img
  directLabel: string
}
