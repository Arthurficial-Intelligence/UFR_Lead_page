import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank You',
  robots: { index: false },
}

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="mb-4 text-4xl font-bold">Thank You!</h1>
        <p className="mb-6 text-lg text-gray-600">
          We received your inquiry and will be in touch soon. Check your email
          for a confirmation.
        </p>
        <Link
          href="/"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}
