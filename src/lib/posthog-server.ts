import 'server-only'

interface CaptureEventParams {
  distinctId: string
  event: string
  properties?: Record<string, unknown>
}

export function captureServerEvent({
  distinctId,
  event,
  properties,
}: CaptureEventParams) {
  const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
  const host =
    process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com'

  if (!apiKey) {
    console.warn('PostHog API key not set, skipping server event')
    return
  }

  // Fire and forget - don't block the response
  fetch(`${host}/capture/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      api_key: apiKey,
      event,
      properties: {
        distinct_id: distinctId,
        ...properties,
      },
      timestamp: new Date().toISOString(),
    }),
  }).catch((err) => {
    console.error('PostHog server capture error:', err)
  })
}
