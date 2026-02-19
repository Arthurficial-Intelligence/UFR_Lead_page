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
            <h1 className="mb-4 font-heading text-7xl leading-none tracking-tight text-espresso sm:text-8xl md:text-9xl">
              Unfiltered Rays
            </h1>
            <p className="mb-6 font-subheading text-lg tracking-widest text-sunlit-clay uppercase sm:text-xl">
              Photo Booth Experiences,{' '}
              <span className="italic">Elevated</span>
            </p>
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

        {/* ── Brand Positioning ── */}
        <section className="bg-white px-6 py-28 sm:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-subheading text-sm tracking-widest text-sunlit-clay uppercase">
              Our Philosophy
            </p>
            <h2 className="mb-8 font-heading text-4xl leading-snug text-espresso sm:text-5xl">
              Where Warmth Meets Elegance
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-almond/80">
              We believe every celebration deserves a touch of magic. Unfiltered
              Rays brings a curated, design-forward photo booth experience that
              feels less like a rental and more like a moment — golden, warm,
              and completely yours.
            </p>
            {/* Decorative divider */}
            <div className="mx-auto mt-12 flex items-center justify-center gap-3">
              <div className="h-[1px] w-12 bg-desert-glow/40" />
              <div className="h-2 w-2 rounded-full bg-desert-glow/60" />
              <div className="h-[1px] w-12 bg-desert-glow/40" />
            </div>
          </div>
        </section>

        {/* ── What Makes Us Different ── */}
        <section className="bg-desert-sand/40 px-6 py-28 sm:py-36">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <p className="mb-4 font-subheading text-sm tracking-widest text-sunlit-clay uppercase">
                The Unfiltered Difference
              </p>
              <h2 className="font-heading text-4xl text-espresso sm:text-5xl">
                Not Your Average Photo Booth
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 */}
              <div className="group rounded-3xl bg-white p-10 transition-shadow duration-300 hover:shadow-lg">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-desert-sand">
                  <span className="font-heading text-2xl text-sunlit-clay">01</span>
                </div>
                <h3 className="mb-3 font-heading text-xl text-espresso">
                  Design-Led Aesthetic
                </h3>
                <p className="leading-relaxed text-almond/70">
                  Every detail is intentional — from the booth styling to the
                  photo overlays. Our setups are designed to complement your
                  event&rsquo;s look and feel, never clash with it.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group rounded-3xl bg-white p-10 transition-shadow duration-300 hover:shadow-lg">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-desert-sand">
                  <span className="font-heading text-2xl text-sunlit-clay">02</span>
                </div>
                <h3 className="mb-3 font-heading text-xl text-espresso">
                  Effortless &amp; Hands-Free
                </h3>
                <p className="leading-relaxed text-almond/70">
                  We handle every detail — setup, operation, and tear-down.
                  You and your guests simply show up and enjoy the experience.
                  No stress, just magic.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group rounded-3xl bg-white p-10 transition-shadow duration-300 hover:shadow-lg sm:col-span-2 lg:col-span-1">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-desert-sand">
                  <span className="font-heading text-2xl text-sunlit-clay">03</span>
                </div>
                <h3 className="mb-3 font-heading text-xl text-espresso">
                  Keepsakes That Last
                </h3>
                <p className="leading-relaxed text-almond/70">
                  Instant high-quality prints, a curated digital gallery, and
                  shareable content your guests will actually love — not just
                  another blurry phone photo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Future sections will be added in subsequent phases */}
      </main>
    </>
  )
}
