/**
 * Sanity environment configuration.
 *
 * The site is designed to run with OR without Sanity. When the project ID is
 * absent (e.g. before the CMS is set up, or in a fork without credentials),
 * `sanityConfigured` is false and the app falls back to local default content.
 */
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-01'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''

/** True only when a Sanity project is configured. Gates all live fetches. */
export const sanityConfigured = projectId.length > 0

/**
 * Optional read token. Only needed if the dataset is private. For a public
 * marketing dataset this can be left unset.
 */
export const readToken = process.env.SANITY_API_READ_TOKEN || ''
