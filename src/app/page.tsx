import { EmailCaptureForm } from '@/components/email-capture-form'
import { SITE_CONFIG } from '@/lib/constants'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
  telephone: SITE_CONFIG.contact.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE_CONFIG.address.locality,
    addressRegion: SITE_CONFIG.address.region,
    addressCountry: SITE_CONFIG.address.country,
  },
  priceRange: '$$',
  serviceType: 'Photo Booth Rental',
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl">
            Premium Photo Booth Experiences
          </h1>
          <p className="mb-8 max-w-2xl text-xl text-gray-600">
            Unforgettable moments for weddings, corporate events, and parties.
            Capture the fun with our state-of-the-art photo booths.
          </p>
          <EmailCaptureForm />
        </section>

        {/* Features Section */}
        <section className="bg-gray-50 px-4 py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Why Choose Us
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-xl bg-white p-8 shadow-sm">
                <h3 className="mb-3 text-xl font-semibold">
                  Premium Equipment
                </h3>
                <p className="text-gray-600">
                  High-quality cameras and professional lighting for stunning
                  photos every time.
                </p>
              </div>
              <div className="rounded-xl bg-white p-8 shadow-sm">
                <h3 className="mb-3 text-xl font-semibold">Custom Branding</h3>
                <p className="text-gray-600">
                  Personalize your photo booth experience with custom overlays,
                  backdrops, and prints.
                </p>
              </div>
              <div className="rounded-xl bg-white p-8 shadow-sm">
                <h3 className="mb-3 text-xl font-semibold">Instant Sharing</h3>
                <p className="text-gray-600">
                  Share photos instantly via text, email, or social media right
                  from the booth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold">
              What Our Clients Say
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <blockquote className="rounded-xl bg-gray-50 p-8">
                <p className="mb-4 text-gray-700">
                  &quot;Placeholder testimonial - your real client testimonials
                  will go here.&quot;
                </p>
                <footer className="font-semibold text-gray-900">
                  - Client Name, Event Type
                </footer>
              </blockquote>
              <blockquote className="rounded-xl bg-gray-50 p-8">
                <p className="mb-4 text-gray-700">
                  &quot;Another placeholder testimonial - swap with real feedback
                  from happy clients.&quot;
                </p>
                <footer className="font-semibold text-gray-900">
                  - Client Name, Event Type
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 px-4 py-20">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Ready to Book Your Photo Booth?
            </h2>
            <p className="mb-8 text-lg text-blue-100">
              Get in touch today and make your next event unforgettable.
            </p>
            <EmailCaptureForm />
          </div>
        </section>
      </main>
    </>
  )
}
