import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/constants'
import { getHome, getSiteSettings } from '@/content'
import { CtaButton } from '@/components/cta-button'
import { SectionDivider } from '@/components/section-divider'
import { FadeIn } from '@/components/fade-in'

export const revalidate = 60

export default async function HomePage() {
  const [home, settings] = await Promise.all([getHome(), getSiteSettings()])

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: settings.name,
    description: settings.description,
    url: SITE_CONFIG.url,
    image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
    email: settings.contactEmail,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE_CONFIG.address.locality,
      addressRegion: SITE_CONFIG.address.region,
      addressCountry: SITE_CONFIG.address.country,
    },
    priceRange: '$$',
    areaServed: settings.serviceAreas.map((city) => ({
      '@type': 'City',
      name: `${city}, TN`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-desert-sand px-6">
        <Image
          src={home.heroBackgroundImage.src}
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
            {home.heroHeadingLead}{' '}
            <span className="italic">{home.heroHeadingEmphasis}</span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl font-subheading text-lg font-light leading-relaxed text-almond/80 sm:text-xl">
            {home.heroSubheading}
          </p>
          <CtaButton href="/contact">{home.heroCtaLabel}</CtaButton>
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
                  src={home.brandImage.src}
                  alt={home.brandImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="mb-8 font-heading text-4xl leading-snug text-espresso sm:text-5xl">
                  {home.brandHeading}
                </h2>
                {home.brandParagraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className={`text-lg leading-relaxed text-almond/80 ${
                      i < home.brandParagraphs.length - 1 ? 'mb-6' : ''
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
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
              {home.howItWorksHeading}
            </h2>
            <div className="grid gap-12 sm:grid-cols-3">
              {home.howItWorksSteps.map((step) => (
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
              {home.eventTypesHeading}
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {home.eventTypes.map((event) => (
                <div key={event.title} className="group overflow-hidden rounded">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={event.image.src}
                      alt={event.image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      style={
                        event.image.objectPosition
                          ? { objectPosition: event.image.objectPosition }
                          : undefined
                      }
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
      <section className="bg-desert-sand/40 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="mb-6 font-heading text-4xl text-espresso sm:text-5xl">
              {home.closingHeading}
            </h2>
            <p className="mx-auto mb-10 max-w-lg text-lg leading-relaxed text-almond/70">
              {home.closingCopy}
            </p>
            <CtaButton href="/contact">{home.closingCtaLabel}</CtaButton>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
