import { NextRequest, NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'
import { getResend } from '@/lib/resend'
import { captureServerEvent } from '@/lib/posthog-server'
import { leadFormSchema } from '@/lib/validations'
import { SITE_CONFIG } from '@/lib/constants'

export async function POST(request: NextRequest) {
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

    const { error: dbError } = await getSupabase().from('leads').upsert(
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

    if (dbError) {
      console.error('Supabase insert error:', dbError)
      return NextResponse.json(
        { error: 'Failed to save your information' },
        { status: 500 }
      )
    }

    // Send confirmation email - don't let failure block the response
    try {
      await getResend().emails.send({
        from: `${SITE_CONFIG.name} <${SITE_CONFIG.contact.email}>`,
        to: data.email,
        subject: `Thanks for your interest in ${SITE_CONFIG.name}!`,
        html: `
          <h1>Thanks for reaching out!</h1>
          <p>We received your inquiry and will get back to you shortly.</p>
          <p>- The ${SITE_CONFIG.name} Team</p>
        `,
      })
    } catch (emailError) {
      console.error('Resend email error:', emailError)
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
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
