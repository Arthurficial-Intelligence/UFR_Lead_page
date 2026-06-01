import { revalidatePath } from 'next/cache'
import { parseBody } from 'next-sanity/webhook'
import { NextResponse, type NextRequest } from 'next/server'

/**
 * Webhook endpoint that refreshes the live site whenever content is published
 * in Sanity.
 *
 * Configure a webhook in Sanity (Manage → API → Webhooks) pointing to
 * `https://yourdomain.com/api/revalidate`, with the same secret set in the
 * `SANITY_REVALIDATE_SECRET` environment variable. Without this webhook the
 * site still updates on its own within ~60s (ISR); the webhook just makes it
 * instant.
 */
export async function POST(req: NextRequest) {
  try {
    const { isValidSignature } = await parseBody<{ _type?: string }>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
    )

    if (!isValidSignature) {
      return NextResponse.json({ message: 'Invalid signature' }, { status: 401 })
    }

    // Revalidate every page under the root layout (all content pages).
    revalidatePath('/', 'layout')
    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (error) {
    console.error('[revalidate] webhook error:', error)
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ message }, { status: 500 })
  }
}
