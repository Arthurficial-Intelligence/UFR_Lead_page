import Image from 'next/image'
import { ContactForm } from '@/components/email-capture-form'
import { CollectionCards } from '@/components/collections-dropdown'
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
  serviceType: [
    'Luxury Photo Booth Rental',
    'Vintage Photo Booth',
    'Wedding Photo Booth',
    'Corporate Photo Booth Activation',
  ],
  areaServed: SITE_CONFIG.serviceAreas.map((city) => ({
    '@type': 'City',
    name: `${city}, TN`,
  })),
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
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-desert-sand px-6">
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
            <p className="mb-4 font-subheading text-lg font-light tracking-widest text-sunlit-clay uppercase sm:text-xl">
              Unfiltered Rays
            </p>
            <h1 className="mb-6 font-heading text-5xl leading-tight tracking-tight text-espresso sm:text-6xl md:text-7xl">
              Preserving the moment,
              <br />
              <span className="italic">as it is.</span>
            </h1>
            <p className="mb-10 max-w-xl font-subheading text-lg font-light leading-relaxed text-almond/80 sm:text-xl">
              Intentional, refined photo experiences for weddings and elevated
              events.
            </p>
            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-block rounded border border-espresso px-10 py-4 font-subheading text-base tracking-wide text-espresso transition-colors duration-300 hover:bg-espresso hover:text-desert-sand"
              >
                Inquire
              </a>
              <a
                href="#collections"
                className="inline-block rounded border border-espresso/30 px-10 py-4 font-subheading text-base tracking-wide text-espresso transition-colors duration-300 hover:border-espresso"
              >
                View Collections
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="h-10 w-[1px] bg-gradient-to-b from-sunlit-clay/60 to-transparent" />
          </div>

          {/* Hero accent images — flanking on large screens */}
          <div className="pointer-events-none absolute bottom-0 left-0 hidden h-[60%] w-[22%] overflow-hidden rounded-tr opacity-30 xl:block">
            <Image
              src="/images/hero-couple.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="22vw"
              priority
              aria-hidden="true"
            />
          </div>
          <div className="pointer-events-none absolute bottom-0 right-0 hidden h-[60%] w-[22%] overflow-hidden rounded-tl opacity-30 xl:block">
            <Image
              src="/images/toast-intimate.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="22vw"
              priority
              aria-hidden="true"
            />
          </div>
        </section>

        {/* ── Brand Positioning ── */}
        <section className="bg-desert-sand/20 px-6 py-28 sm:py-36">
          <div className="mx-auto max-w-5xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* Image */}
              <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded">
                <Image
                  src="/images/positioning-moment.jpg"
                  alt="An intimate, unposed moment between a couple at a photo booth experience"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Copy */}
              <div>
                <p className="mb-4 font-subheading text-sm font-light tracking-widest text-sunlit-clay uppercase">
                  Our Philosophy
                </p>
                <h2 className="mb-8 font-heading text-4xl leading-snug text-espresso sm:text-5xl">
                  A Calm Presence.
                  <br />
                  An Elevated Experience.
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-almond/80">
                  Unfiltered Rays is a refined photo experience rooted in
                  authenticity and intention. We preserve genuine connection with
                  thoughtful design and quiet professionalism, capturing
                  celebrations exactly as they unfold.
                </p>
                <p className="mb-6 text-lg leading-relaxed text-almond/80">
                  We believe the most meaningful moments are unposed. The subtle
                  glances. The shared laughter. The in-between exchanges that feel
                  most like home.
                </p>
                <p className="text-lg leading-relaxed text-almond/80">
                  Our presence is steady. Our approach is considered. Every detail
                  is curated to feel seamless and enduring.
                </p>
              </div>
            </div>
            {/* Decorative divider */}
            <div className="mx-auto mt-16 flex items-center justify-center gap-3">
              <div className="h-[1px] w-12 bg-desert-glow/40" />
              <div className="h-2 w-2 rounded-full bg-desert-glow/60" />
              <div className="h-[1px] w-12 bg-desert-glow/40" />
            </div>
          </div>
        </section>

        {/* ── Designed With Intention ── */}
        <section className="bg-desert-sand/40 px-6 py-28 sm:py-36">
          <div className="mx-auto max-w-5xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* Copy */}
              <div>
                <h2 className="mb-8 font-heading text-4xl leading-snug text-espresso sm:text-5xl">
                  Designed With Intention
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-almond/80">
                  From initial consultation to final gallery delivery, every
                  touchpoint reflects care and deliberation. We do not interrupt the
                  moment. We preserve it.
                </p>
                <p className="mb-6 text-lg leading-relaxed text-almond/80">
                  Our handcrafted booth, refined styling, and custom design
                  integration create an environment where guests feel comfortable,
                  natural, and entirely themselves.
                </p>
                <p className="text-lg leading-relaxed text-almond/80">
                  The result is not performance. It is presence.
                </p>
              </div>
              {/* Image */}
              <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded">
                <Image
                  src="/images/intention-keepsake.jpg"
                  alt="Hands holding elegant photo booth prints alongside a cocktail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            {/* Decorative divider */}
            <div className="mx-auto mt-16 flex items-center justify-center gap-3">
              <div className="h-[1px] w-12 bg-desert-glow/40" />
              <div className="h-2 w-2 rounded-full bg-desert-glow/60" />
              <div className="h-[1px] w-12 bg-desert-glow/40" />
            </div>
          </div>
        </section>

        {/* ── Collections ── */}
        <section id="collections" className="bg-desert-sand/20 px-6 py-28 sm:py-36">
          <div className="mx-auto max-w-6xl">
            {/* Featured image */}
            <div className="relative mx-auto mb-16 aspect-[21/9] w-full max-w-4xl overflow-hidden rounded">
              <Image
                src="/images/collections-experience.jpg"
                alt="Couple admiring their photo booth strip together"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 900px"
                priority
              />
            </div>

            <div className="mb-16">
              <h2 className="mb-4 font-heading text-4xl text-espresso sm:text-5xl">
                Our Collections
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-almond/80">
                Three intentionally designed offerings for refined celebrations.
              </p>
            </div>

            <CollectionCards />

          </div>
        </section>

        {/* ── Weddings ── */}
        <section className="bg-desert-sand/40 px-6 py-28 sm:py-36">
          <div className="mx-auto max-w-5xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* Image pair */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded">
                  <Image
                    src="/images/wedding-couple.jpg"
                    alt="Couple sharing a joyful laugh during their photo booth session"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded">
                  <Image
                    src="/images/wedding-details.jpg"
                    alt="Wedding keepsake details with photo booth strips"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
              {/* Copy */}
              <div>
                <h2 className="mb-8 font-heading text-4xl leading-snug text-espresso sm:text-5xl">
                  For Weddings
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-almond/80">
                  Your wedding day deserves presence, not production.
                </p>
                <p className="mb-6 text-lg leading-relaxed text-almond/80">
                  We integrate seamlessly into your celebration, preserving moments
                  without distraction.
                </p>
                <p className="mb-6 text-lg leading-relaxed text-almond/80">
                  Our approach is understated, refined, and designed to complement
                  the aesthetic of your venue and the rhythm of your evening.
                </p>
                <p className="text-lg leading-relaxed text-almond/80">
                  The images feel natural because they are.
                </p>
              </div>
            </div>
            {/* Decorative divider */}
            <div className="mx-auto mt-16 flex items-center justify-center gap-3">
              <div className="h-[1px] w-12 bg-desert-glow/40" />
              <div className="h-2 w-2 rounded-full bg-desert-glow/60" />
              <div className="h-[1px] w-12 bg-desert-glow/40" />
            </div>
          </div>
        </section>

        {/* ── Corporate ── */}
        <section className="bg-desert-sand/20 px-6 py-28 sm:py-36">
          <div className="mx-auto max-w-5xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* Copy */}
              <div>
                <h2 className="mb-8 font-heading text-4xl leading-snug text-espresso sm:text-5xl">
                  The Corporate Atelier
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-almond/80">
                  Designed for brands and organizations seeking immersive, elevated
                  experiential activations.
                </p>
                <p className="mb-6 text-lg leading-relaxed text-almond/80">
                  We create refined photo environments aligned with your visual
                  identity while preserving authentic engagement. From custom
                  overlays to intentional environmental styling, each activation is
                  thoughtfully executed.
                </p>
                <p className="font-subheading text-sm tracking-wide text-sunlit-clay">
                  Custom quoted.
                </p>
              </div>
              {/* Image */}
              <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded">
                <Image
                  src="/images/corporate-portrait.jpg"
                  alt="Polished professional portrait at an elevated corporate activation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            {/* Decorative divider */}
            <div className="mx-auto mt-16 flex items-center justify-center gap-3">
              <div className="h-[1px] w-12 bg-desert-glow/40" />
              <div className="h-2 w-2 rounded-full bg-desert-glow/60" />
              <div className="h-[1px] w-12 bg-desert-glow/40" />
            </div>
          </div>
        </section>

        {/* ── Our Approach ── */}
        <section className="bg-desert-sand/40 px-6 py-28 sm:py-36">
          <div className="mx-auto max-w-5xl">
            <div className="mb-20">
              <h2 className="mb-4 font-heading text-4xl text-espresso sm:text-5xl">
                Our Approach
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-almond/80">
                Calm. Seamless. Intentional.
              </p>
            </div>

            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {/* Step 1 */}
              <div className="text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-sunlit-clay/30">
                  <span className="font-heading text-3xl text-sunlit-clay">1</span>
                </div>
                <h3 className="mb-2 font-heading text-lg text-espresso">
                  Inquiry
                </h3>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-sunlit-clay/30">
                  <span className="font-heading text-3xl text-sunlit-clay">2</span>
                </div>
                <h3 className="mb-2 font-heading text-lg text-espresso">
                  Design Consultation
                </h3>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-sunlit-clay/30">
                  <span className="font-heading text-3xl text-sunlit-clay">3</span>
                </div>
                <h3 className="mb-2 font-heading text-lg text-espresso">
                  Event Day Presence
                </h3>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-sunlit-clay/30">
                  <span className="font-heading text-3xl text-sunlit-clay">4</span>
                </div>
                <h3 className="mb-2 font-heading text-lg text-espresso">
                  Gallery Delivery
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* ── Gallery Strip ── */}
        <section className="bg-desert-sand/20 py-4">
          <div className="flex gap-4 overflow-hidden px-4">
            {[
              { src: '/images/social-celebration.jpg', alt: 'Friends celebrating with champagne at a photo booth' },
              { src: '/images/toast-couple.jpg', alt: 'Couple sharing a toast at a photo booth event' },
              { src: '/images/social-trio.jpg', alt: 'Three friends posing together at a celebration' },
              { src: '/images/couple-embrace.jpg', alt: 'Couple in an intimate embrace during a photo session' },
              { src: '/images/social-group-champagne.jpg', alt: 'Group of friends with champagne glasses' },
              { src: '/images/printed-keepsake.jpg', alt: 'Custom photo booth print keepsake card' },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/5] w-48 shrink-0 overflow-hidden rounded sm:w-56 md:w-64">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="256px"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── Brand Statement ── */}
        <section className="relative overflow-hidden bg-espresso px-6 py-28 sm:py-36">
          {/* Background image */}
          <Image
            src="/images/brand-couple.jpg"
            alt=""
            fill
            className="object-cover opacity-15"
            sizes="100vw"
            aria-hidden="true"
          />
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
            <p className="font-subheading text-sm font-light tracking-widest text-desert-glow uppercase">
              The Unfiltered Rays Promise
            </p>
          </div>
        </section>

        {/* ── Investment ── */}
        <section className="bg-desert-sand/20 px-6 py-28 sm:py-36">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 font-heading text-4xl leading-snug text-espresso sm:text-5xl">
              Investment
            </h2>
            <p className="mb-6 max-w-2xl text-lg leading-relaxed text-almond/80">
              Our collections begin at $995.
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-almond/80">
              A 50% retainer secures your date, with the remaining balance due
              30 days prior to your event.
            </p>
            {/* Decorative divider */}
            <div className="mx-auto mt-12 flex items-center justify-center gap-3">
              <div className="h-[1px] w-12 bg-desert-glow/40" />
              <div className="h-2 w-2 rounded-full bg-desert-glow/60" />
              <div className="h-[1px] w-12 bg-desert-glow/40" />
            </div>
          </div>
        </section>

        {/* ── Contact Form ── */}
        <section id="contact" className="bg-desert-sand/20 px-6 py-28 sm:py-36">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
              {/* Left column — copy + image */}
              <div>
                <p className="mb-4 font-subheading text-sm font-light tracking-widest text-sunlit-clay uppercase">
                  Get in Touch
                </p>
                <h2 className="mb-6 font-heading text-4xl text-espresso sm:text-5xl">
                  Let&rsquo;s Make It Happen
                </h2>
                <p className="mb-8 max-w-md leading-relaxed text-almond/70">
                  Whether you have a date locked in or you&rsquo;re still
                  dreaming it up, we&rsquo;d love to hear from you. Tell us
                  about your event, and we&rsquo;ll take care of the rest.
                </p>
                <div className="mb-8 space-y-4 text-sm text-almond/60">
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
                {/* Contact image */}
                <div className="relative hidden aspect-[4/3] overflow-hidden rounded lg:block">
                  <Image
                    src="/images/contact-viewing.jpg"
                    alt="Guest smiling while viewing her photo booth prints"
                    fill
                    className="object-cover"
                    sizes="500px"
                  />
                </div>
              </div>

              {/* Right column — form */}
              <div className="rounded bg-desert-sand/30 p-8 sm:p-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="bg-espresso px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 grid gap-10 sm:grid-cols-3">
              {/* Brand */}
              <div>
                <p className="mb-3 font-heading text-2xl text-desert-sand">
                  Unfiltered Rays
                </p>
                <p className="text-sm leading-relaxed text-desert-sand/50">
                  Premium photo booth experiences for the moments that matter.
                </p>
              </div>

              {/* Quick links */}
              <div>
                <p className="mb-3 font-subheading text-xs tracking-widest text-desert-glow uppercase">
                  Explore
                </p>
                <nav className="flex flex-col gap-2 text-sm text-desert-sand/60">
                  <a href="#collections" className="transition-colors hover:text-desert-sand">Our Collections</a>
                  <a href="#contact" className="transition-colors hover:text-desert-sand">Get in Touch</a>
                </nav>
              </div>

              {/* Contact */}
              <div>
                <p className="mb-3 font-subheading text-xs tracking-widest text-desert-glow uppercase">
                  Contact
                </p>
                <div className="flex flex-col gap-2 text-sm text-desert-sand/60">
                  <span>{SITE_CONFIG.contact.email}</span>
                  <span>{SITE_CONFIG.contact.phone}</span>
                </div>
              </div>
            </div>

            {/* Service areas */}
            <div className="mb-8 text-center">
              <p className="mb-2 font-subheading text-xs tracking-widest text-desert-glow/60 uppercase">
                Serving
              </p>
              <p className="text-sm text-desert-sand/40">
                {SITE_CONFIG.serviceAreas.join(' · ')}
              </p>
            </div>

            {/* Divider + copyright */}
            <div className="border-t border-desert-sand/10 pt-8 text-center">
              <p className="text-xs text-desert-sand/40">
                &copy; {new Date().getFullYear()} Unfiltered Rays. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
