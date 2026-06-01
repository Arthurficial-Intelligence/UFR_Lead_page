import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url'

import { dataset, projectId, sanityConfigured } from './env'

const builder = sanityConfigured
  ? imageUrlBuilder({ projectId, dataset })
  : null

/**
 * Build a CDN URL for a Sanity image. Returns an empty string if Sanity is not
 * configured (callers handle the fallback to local images).
 */
export function urlForImage(source: SanityImageSource | undefined): string {
  if (!builder || !source) return ''
  return builder.image(source).auto('format').fit('max').url()
}
