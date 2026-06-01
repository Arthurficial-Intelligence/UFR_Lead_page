import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, readToken, sanityConfigured } from './env'

/**
 * Read-only Sanity client used by the website to fetch published content.
 *
 * `useCdn: true` serves cached, fast responses from Sanity's CDN. Combined with
 * Next.js ISR (see `revalidate` in pages and the `/api/revalidate` webhook),
 * edits made in the Studio appear on the live site within about a minute, or
 * immediately when the publish webhook is configured.
 *
 * Returns `null` when Sanity is not configured so callers fall back to local
 * default content instead of throwing.
 */
export const client = sanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      token: readToken || undefined,
      perspective: 'published',
    })
  : null
