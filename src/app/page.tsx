import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/constants'
import { CtaButton } from '@/components/cta-button'
import { SectionDivider } from '@/components/section-divider'
import { FadeIn } from '@/components/fade-in'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
  email: SITE_CONFIG.contact.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE_CONFIG.address.locality,
    addressRegion: SITE_CONFIG.address.region,
    addressCountry: SITE_CONFIG.address.country,
  },
  priceRange: '$$',
  areaServed: SITE_CONFIG.serviceAreas.map((city) => ({
    '@type': 'City',
    name: `${city}, TN`,
  })),
}

const steps = [
  {
    number: '1',
    title: 'Reserve your date',
    copy: 'Reach out and tell us about your event. We\u2019ll confirm availability and walk you through the collections.',
  },
  {
    number: '2',
    title: 'Design your experience',
    copy: 'Choose your backdrop, overlay, and styling details. We handle every element so you don\u2019t have to.',
  },
  {
    number: '3',
    title: 'Arrive and enjoy',
    copy: 'Our team sets up before your guests arrive and stays present throughout. You celebrate. We take care of the rest.',
  },
]

const eventTypes = [
  {
    title: 'Weddings',
    copy: 'An intimate addition to your reception \u2014 giving guests a printed keepsake and a reason to linger a little longer.',
    image: '/images/ufr-1777.jpg',
    alt: 'Couple sharing a joyful moment at their wedding photo booth',
  },
  {
    title: 'Private Celebrations',
    copy: 'Birthdays, anniversaries, baby showers, graduations. The milestones that call for something more than a camera phone.',
    image: '/images/ufr-1622.jpg',
    alt: 'Friends celebrating together at a private event',
  },
  {
    title: 'Corporate & Brand Activations',
    copy: 'We bring the same warmth and refinement to brand experiences \u2014 helping your guests connect with your brand in a way that feels human.',
    image: '/images/ufr-1757.jpg',
    alt: 'Professional portrait at a corporate brand activation',
  },
  {
    title: 'Milestone Events',
    copy: 'The moments worth marking. We make sure the day exists beyond the memory.',
    image: '/images/ufr-1784.jpg',
    alt: 'Intimate toast at a milestone celebration',
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-desert-sand px-6">
        <Image
          src="/images/ufr-1085.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          priority
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 flex items-end justify-center">
          <div className="h-[70%] w-[min(600px,90vw)] rounded-t-full border border-sunlit-clay/20" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h1 className="mb-6 font-heading text-5xl leading-tight tracking-tight text-espresso sm:text-6xl md:text-7xl">
            The moment, <span className="italic">held.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl font-subheading text-lg font-light leading-relaxed text-almond/80 sm:text-xl">
            A refined photo booth experience for weddings, celebrations, and the gatherings that matter most.
          </p>
          <CtaButton href="/contact">Inquire</CtaButton>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="h-10 w-[1px] bg-gradient-to-b from-sunlit-clay/60 to-transparent" />
        </div>
      </section>

      {/* Brand Statement */}
      <section className="bg-desert-sand/20 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded">
                <Image
                  src="/images/ufr-1808.jpg"
                  alt="An intimate, unposed moment at a photo booth experience"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="mb-8 font-heading text-4xl leading-snug text-espresso sm:text-5xl">
                  Gathered. Real. Yours.
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-almond/80">
                  Some moments are too good to let slip by unnoticed. At Unfiltered Rays, we create space for your guests to slow down &mdash; to laugh, connect, and leave with something tangible from the night.
                </p>
                <p className="text-lg leading-relaxed text-almond/80">
                  We&rsquo;re not here to add noise to your event. We&rsquo;re here to add warmth.
                </p>
              </div>
            </div>
            <SectionDivider className="mt-16" />
          </FadeIn>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-desert-sand/40 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="mb-16 font-heading text-4xl text-espresso sm:text-5xl">
              A seamless addition to your celebration.
            </h2>
            <div className="grid gap-12 sm:grid-cols-3">
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-sunlit-clay/30">
                    <span className="font-heading text-3xl text-sunlit-clay">{step.number}</span>
                  </div>
                  <h3 className="mb-3 font-heading text-xl text-espresso">{step.title}</h3>
                  <p className="leading-relaxed text-almond/70">{step.copy}</p>
                </div>
              ))}
            </div>
            <SectionDivider className="mt-16" />
          </FadeIn>
        </div>
      </section>

      {/* Event Types */}
      <section className="bg-desert-sand/20 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="mb-16 font-heading text-4xl text-espresso sm:text-5xl">
              Every gathering deserves to be remembered.
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {eventTypes.map((event) => (
                <div key={event.title} className="group overflow-hidden rounded">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="bg-desert-sand/40 p-6">
                    <h3 className="mb-2 font-heading text-2xl text-espresso">{event.title}</h3>
                    <p className="leading-relaxed text-almond/70">{event.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-espresso px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="mb-6 font-heading text-4xl text-desert-sand sm:text-5xl">
              Your date is waiting.
            </h2>
            <p className="mx-auto mb-10 max-w-lg text-lg leading-relaxed text-desert-sand/70">
              We take a limited number of events each season to ensure every experience gets our full attention. Reach out to check availability.
            </p>
            <CtaButton href="/contact" variant="inverted">Submit an Inquiry</CtaButton>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
