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
        {/* ── Hero Section ── */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-desert-sand px-6 text-center">
          {/* Decorative arch */}
          <div className="pointer-events-none absolute inset-0 flex items-end justify-center">
            <div className="h-[70%] w-[min(600px,90vw)] rounded-t-full border border-sunlit-clay/20" />
          </div>

          {/* Sun motif */}
          <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2">
            <div className="h-28 w-28 rounded-full bg-desert-glow/25 blur-2xl" />
            <div className="absolute inset-4 rounded-full border border-desert-glow/30" />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="mb-4 font-accent text-lg tracking-widest text-sunlit-clay uppercase">
              Unfiltered Rays
            </p>
            <h1 className="mb-6 font-heading text-5xl leading-tight tracking-tight text-espresso sm:text-6xl md:text-7xl">
              Photo Booth Experiences,{' '}
              <span className="italic text-almond">Elevated</span>
            </h1>
            <p className="mx-auto mb-10 max-w-xl font-subheading text-lg leading-relaxed text-almond/80 sm:text-xl">
              Bringing golden-hour warmth and effortless elegance to every
              celebration. Premium photo booths for the moments that matter.
            </p>
            <a
              href="#contact"
              className="inline-block rounded-full bg-espresso px-10 py-4 font-subheading text-base tracking-wide text-desert-sand transition-all duration-300 hover:bg-almond hover:shadow-lg"
            >
              Let&rsquo;s Create Something Beautiful
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="h-10 w-[1px] bg-gradient-to-b from-sunlit-clay/60 to-transparent" />
          </div>
        </section>

        {/* Future sections will be added in subsequent phases */}
      </main>
    </>
  )
}
