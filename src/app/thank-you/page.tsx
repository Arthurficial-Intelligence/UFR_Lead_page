import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank You',
  robots: { index: false },
}

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-desert-sand px-6">
      <div className="relative max-w-md text-center">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2">
          <div className="h-32 w-32 rounded-full bg-desert-glow/20 blur-3xl" />
        </div>

        <div className="relative z-10">
          <p className="mb-3 font-subheading text-sm tracking-widest text-sunlit-clay uppercase">
            You&rsquo;re All Set
          </p>
          <h1 className="mb-4 font-heading text-5xl text-espresso">
            Thank You!
          </h1>
          <p className="mb-8 leading-relaxed text-almond/70">
            We received your inquiry and will be in touch soon. Check your
            email for a confirmation.
          </p>
          <Link
            href="/"
            className="inline-block rounded-full bg-espresso px-8 py-3.5 font-subheading text-sm tracking-wide text-desert-sand transition-all duration-300 hover:bg-almond hover:shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
