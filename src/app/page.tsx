import { ContactForm } from '@/components/email-capture-form'
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

        {/* ── Our Offerings ── */}
        <section className="bg-white px-6 py-28 sm:py-36">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <p className="mb-4 font-subheading text-sm tracking-widest text-sunlit-clay uppercase">
                What We Offer
              </p>
              <h2 className="font-heading text-4xl text-espresso sm:text-5xl">
                Curated Booth Experiences
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Offering 1 */}
              <div className="relative overflow-hidden rounded-3xl bg-desert-sand/30 p-10 sm:p-12">
                <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-desert-glow/10" />
                <p className="mb-2 font-subheading text-xs tracking-widest text-sunlit-clay uppercase">
                  Most Popular
                </p>
                <h3 className="mb-4 font-heading text-2xl text-espresso sm:text-3xl">
                  The Golden Hour Booth
                </h3>
                <p className="mb-6 leading-relaxed text-almond/70">
                  Our signature open-air booth with warm, golden lighting and
                  custom backdrops. Includes instant prints, digital gallery,
                  and a dedicated attendant for a seamless experience.
                </p>
                <ul className="space-y-2 text-sm text-almond/70">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-desert-glow" />
                    Custom photo overlays &amp; branding
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-desert-glow" />
                    Unlimited sessions &amp; instant prints
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-desert-glow" />
                    Curated digital gallery
                  </li>
                </ul>
              </div>

              {/* Offering 2 */}
              <div className="relative overflow-hidden rounded-3xl bg-desert-sand/30 p-10 sm:p-12">
                <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-sky/10" />
                <p className="mb-2 font-subheading text-xs tracking-widest text-sky uppercase">
                  Intimate &amp; Fun
                </p>
                <h3 className="mb-4 font-heading text-2xl text-espresso sm:text-3xl">
                  The Desert Glow Booth
                </h3>
                <p className="mb-6 leading-relaxed text-almond/70">
                  A warm, enclosed booth experience with a boho-chic aesthetic.
                  Perfect for weddings, showers, and intimate gatherings where
                  you want that cozy, golden-hour feel.
                </p>
                <ul className="space-y-2 text-sm text-almond/70">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-desert-glow" />
                    Styled backdrop &amp; props
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-desert-glow" />
                    Instant sharing via text &amp; email
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-desert-glow" />
                    Guest book print option
                  </li>
                </ul>
              </div>

              {/* Offering 3 — full width */}
              <div className="relative overflow-hidden rounded-3xl bg-espresso p-10 sm:p-12 md:col-span-2">
                <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-sunlit-clay/10" />
                <div className="mx-auto max-w-2xl text-center">
                  <p className="mb-2 font-subheading text-xs tracking-widest text-desert-glow uppercase">
                    Fully Tailored
                  </p>
                  <h3 className="mb-4 font-heading text-2xl text-desert-sand sm:text-3xl">
                    Custom &amp; Corporate
                  </h3>
                  <p className="leading-relaxed text-desert-sand/70">
                    For brands, launches, and large-scale events — a fully
                    branded experience from the ground up. Custom wraps,
                    on-screen branding, data capture, and premium add-ons
                    tailored to your vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── The Experience / Process ── */}
        <section className="bg-desert-sand/40 px-6 py-28 sm:py-36">
          <div className="mx-auto max-w-5xl">
            <div className="mb-20 text-center">
              <p className="mb-4 font-subheading text-sm tracking-widest text-sunlit-clay uppercase">
                How It Works
              </p>
              <h2 className="font-heading text-4xl text-espresso sm:text-5xl">
                From Inquiry to Unforgettable
              </h2>
            </div>

            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {/* Step 1 */}
              <div className="text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-sunlit-clay/30">
                  <span className="font-heading text-3xl text-sunlit-clay">1</span>
                </div>
                <h3 className="mb-2 font-heading text-lg text-espresso">
                  Inquire
                </h3>
                <p className="text-sm leading-relaxed text-almond/70">
                  Tell us about your event, your vision, and the vibe
                  you&rsquo;re going for. We&rsquo;ll take it from there.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-sunlit-clay/30">
                  <span className="font-heading text-3xl text-sunlit-clay">2</span>
                </div>
                <h3 className="mb-2 font-heading text-lg text-espresso">
                  Plan
                </h3>
                <p className="text-sm leading-relaxed text-almond/70">
                  We&rsquo;ll design a custom package — backdrops, overlays,
                  prints, and all the details — to match your event perfectly.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-sunlit-clay/30">
                  <span className="font-heading text-3xl text-sunlit-clay">3</span>
                </div>
                <h3 className="mb-2 font-heading text-lg text-espresso">
                  Experience
                </h3>
                <p className="text-sm leading-relaxed text-almond/70">
                  On the day, we set up, run, and break down — you just enjoy
                  watching your guests light up.
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-sunlit-clay/30">
                  <span className="font-heading text-3xl text-sunlit-clay">4</span>
                </div>
                <h3 className="mb-2 font-heading text-lg text-espresso">
                  Relive
                </h3>
                <p className="text-sm leading-relaxed text-almond/70">
                  Receive your full digital gallery within 48 hours. Share,
                  print, and relive the magic whenever you want.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Brand Statement ── */}
        <section className="relative overflow-hidden bg-espresso px-6 py-28 sm:py-36">
          {/* Decorative arches */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.06]">
            <div className="h-[500px] w-[500px] rounded-full border border-desert-sand" />
            <div className="absolute h-[350px] w-[350px] rounded-full border border-desert-sand" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-8 flex items-center justify-center gap-3">
              <div className="h-[1px] w-12 bg-desert-glow/40" />
              <div className="h-2 w-2 rounded-full bg-desert-glow/50" />
              <div className="h-[1px] w-12 bg-desert-glow/40" />
            </div>
            <blockquote className="mb-8 font-heading text-3xl leading-snug text-desert-sand sm:text-4xl md:text-5xl">
              &ldquo;We don&rsquo;t just capture moments, we create them.
              Warm, golden, and unapologetically beautiful.&rdquo;
            </blockquote>
            <p className="font-subheading text-sm tracking-widest text-desert-glow uppercase">
              The Unfiltered Rays Promise
            </p>
          </div>
        </section>

        {/* ── Contact Form ── */}
        <section id="contact" className="bg-white px-6 py-28 sm:py-36">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
              {/* Left column — copy */}
              <div>
                <p className="mb-4 font-subheading text-sm tracking-widest text-sunlit-clay uppercase">
                  Get in Touch
                </p>
                <h2 className="mb-6 font-heading text-4xl text-espresso sm:text-5xl">
                  Let&rsquo;s Make It Happen
                </h2>
                <p className="mb-8 max-w-md leading-relaxed text-almond/70">
                  Whether you have a date locked in or you&rsquo;re still
                  dreaming it up — we&rsquo;d love to hear from you. Tell us
                  about your event, and we&rsquo;ll take care of the rest.
                </p>
                <div className="space-y-4 text-sm text-almond/60">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-desert-sand">
                      <span className="text-sunlit-clay">@</span>
                    </div>
                    <span>{SITE_CONFIG.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-desert-sand">
                      <span className="text-sunlit-clay">#</span>
                    </div>
                    <span>{SITE_CONFIG.contact.phone}</span>
                  </div>
                </div>
              </div>

              {/* Right column — form */}
              <div className="rounded-3xl bg-desert-sand/20 p-8 sm:p-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Future sections will be added in subsequent phases */}
      </main>
    </>
  )
}
