'use client'

import { useState } from 'react'
import { usePostHog } from 'posthog-js/react'

export function EmailCaptureForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const posthog = usePostHog()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    posthog?.capture('form_submitted', { form: 'email_capture' })

    const params = new URLSearchParams(window.location.search)

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          utmSource: params.get('utm_source') ?? undefined,
          utmMedium: params.get('utm_medium') ?? undefined,
          utmCampaign: params.get('utm_campaign') ?? undefined,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Something went wrong')
      }

      setStatus('success')
      posthog?.capture('lead_captured_client', {
        email_domain: email.split('@')[1],
      })
    } catch (err) {
      setStatus('error')
      const msg = err instanceof Error ? err.message : 'Something went wrong'
      setErrorMessage(msg)
      posthog?.capture('form_error', { form: 'email_capture', error: msg })
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg bg-green-50 p-6 text-center">
        <p className="text-lg font-semibold text-green-800">
          Thank you! Check your email for confirmation.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        aria-label="Email address"
        className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending...' : 'Get Started'}
      </button>
      {status === 'error' && (
        <p role="alert" className="mt-2 text-sm text-red-600">
          {errorMessage}
        </p>
      )}
    </form>
  )
}
