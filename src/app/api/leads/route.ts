import { NextRequest, NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'
import { getResend } from '@/lib/resend'
import { captureServerEvent } from '@/lib/posthog-server'
import { leadFormSchema } from '@/lib/validations'
import { SITE_CONFIG } from '@/lib/constants'

const FALLBACK_MESSAGE = `Please email us directly at ${SITE_CONFIG.contact.email}`

export async function POST(request: NextRequest) {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.error('Missing Supabase environment variables')
    return NextResponse.json(
      { error: `Our system is temporarily unavailable. ${FALLBACK_MESSAGE}` },
      { status: 503 }
    )
  }

  try {
    const body = await request.json()
    const result = leadFormSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: result.error.flatten() },
        { status: 400 }
      )
    }

    const data = result.data

    const ip =
      request.headers.get('x-forwarded-for') ??
      request.headers.get('x-real-ip') ??
      'unknown'
    const userAgent = request.headers.get('user-agent') ?? 'unknown'

    let dbError
    try {
      const dbResult = await getSupabase().from('leads').upsert(
        {
          email: data.email,
          name: data.name ?? null,
          phone: data.phone ?? null,
          event_type: data.eventType ?? null,
          event_date: data.eventDate ?? null,
          message: data.message ?? null,
          utm_source: data.utmSource ?? null,
          utm_medium: data.utmMedium ?? null,
          utm_campaign: data.utmCampaign ?? null,
          ip_address: ip,
          user_agent: userAgent,
        },
        { onConflict: 'email' }
      )
      dbError = dbResult.error
    } catch (supabaseError) {
      console.error('Supabase connection error:', supabaseError)
      return NextResponse.json(
        { error: `We're having trouble saving your inquiry. ${FALLBACK_MESSAGE}` },
        { status: 500 }
      )
    }

    if (dbError) {
      console.error('Supabase upsert error:', dbError)
      return NextResponse.json(
        { error: `We're having trouble saving your inquiry. ${FALLBACK_MESSAGE}` },
        { status: 500 }
      )
    }

    // Notify business of new inquiry - don't block response
    try {
      await getResend().emails.send({
        from: 'Unfiltered Rays Leads <onboarding@resend.dev>',
        to: SITE_CONFIG.contact.email,
        subject: `New Inquiry from ${data.name || data.email}`,
        html: [
          `<h2>New Lead from unfilteredrays.com</h2>`,
          `<p><strong>Name:</strong> ${data.name || 'Not provided'}</p>`,
          `<p><strong>Email:</strong> ${data.email}</p>`,
          data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : '',
          data.eventType ? `<p><strong>Event Type:</strong> ${data.eventType}</p>` : '',
          data.eventDate ? `<p><strong>Event Date:</strong> ${data.eventDate}</p>` : '',
          data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : '',
        ].filter(Boolean).join('\n'),
      })
    } catch (emailError) {
      console.error('Resend notification error:', emailError)
    }

    // Track server-side event
    captureServerEvent({
      distinctId: data.email,
      event: 'lead_captured',
      properties: {
        source: 'landing_page',
        event_type: data.eventType ?? 'not_specified',
        has_phone: !!data.phone,
        has_message: !!data.message,
        utm_source: data.utmSource,
        utm_medium: data.utmMedium,
        utm_campaign: data.utmCampaign,
      },
    })

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (error) {
    console.error('Lead capture error:', error)
    return NextResponse.json(
      { error: `Something went wrong. ${FALLBACK_MESSAGE}` },
      { status: 500 }
    )
  }
}
