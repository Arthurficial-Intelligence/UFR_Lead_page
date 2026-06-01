/**
 * Sanity CLI configuration.
 *
 * Lets you run `npx sanity ...` commands against this project — for example
 * `npx sanity cors add https://yourdomain.com --credentials` to allow the live
 * site's Studio to talk to Sanity. Reads the same env vars as the app.
 */
import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  },
  studioHost: 'unfilteredrays',
  autoUpdates: true,
})
