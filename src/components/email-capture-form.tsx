'use client'

import { useState } from 'react'
import { usePostHog } from 'posthog-js/react'

const EVENT_TYPES = [
  'Wedding',
  'Corporate Event',
  'Birthday Party',
  'Baby / Bridal Shower',
  'Holiday Party',
  'Other',
]

const inputClass =
  'w-full rounded border border-desert-sand bg-white px-4 py-3 font-body text-espresso placeholder:text-almond/40 focus:border-sunlit-clay focus:outline-none focus:ring-1 focus:ring-sunlit-clay/30 transition-colors'

export function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: '',
  })
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const posthog = usePostHog()

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    posthog?.capture('form_submitted', { form: 'contact' })

    const params = new URLSearchParams(window.location.search)

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name || undefined,
          email: form.email,
          phone: form.phone || undefined,
          eventType: form.eventType || undefined,
          eventDate: form.eventDate || undefined,
          message: form.message || undefined,
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
        email_domain: form.email.split('@')[1],
        event_type: form.eventType || 'not_specified',
      })
    } catch (err) {
      setStatus('error')
      const msg = err instanceof Error ? err.message : 'Something went wrong'
      setErrorMessage(msg)
      posthog?.capture('form_error', { form: 'contact', error: msg })
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded bg-desert-sand/50 p-10">
        <p className="mb-2 font-heading text-2xl text-espresso">
          Thank You!
        </p>
        <p className="text-almond/70">
          We&rsquo;ve received your inquiry and will be in touch soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block font-subheading text-xs font-light tracking-wider text-almond/60 uppercase">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block font-subheading text-xs font-light tracking-wider text-almond/60 uppercase">
            Email <span className="text-sunlit-clay">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="your@email.com"
            required
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block font-subheading text-xs font-light tracking-wider text-almond/60 uppercase">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            placeholder="(555) 000-0000"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="eventDate" className="mb-1.5 block font-subheading text-xs font-light tracking-wider text-almond/60 uppercase">
            Event Date
          </label>
          <input
            id="eventDate"
            type="date"
            value={form.eventDate}
            onChange={(e) => update('eventDate', e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="eventType" className="mb-1.5 block font-subheading text-xs font-light tracking-wider text-almond/60 uppercase">
          Type of Event
        </label>
        <select
          id="eventType"
          value={form.eventType}
          onChange={(e) => update('eventType', e.target.value)}
          className={inputClass}
        >
          <option value="">Select an event type</option>
          {EVENT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block font-subheading text-xs font-light tracking-wider text-almond/60 uppercase">
          Tell Us About Your Vision
        </label>
        <textarea
          id="message"
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          placeholder="Share the details — your venue, vibe, guest count, or anything you'd love us to know..."
          rows={4}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded border border-espresso bg-espresso py-4 font-subheading text-base tracking-wide text-desert-sand transition-colors duration-300 hover:bg-almond hover:border-almond disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
      </button>

      {status === 'error' && (
        <p role="alert" className="text-center text-sm text-red-600">
          {errorMessage}
        </p>
      )}
    </form>
  )
}
