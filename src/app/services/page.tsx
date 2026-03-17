import type { Metadata } from 'next'
import { CollectionCards } from '@/components/collection-cards'
import { CtaButton } from '@/components/cta-button'
import { SectionDivider } from '@/components/section-divider'

export const metadata: Metadata = {
  title: 'Services & Collections',
  description:
    'Explore our collections — thoughtfully designed photo booth experiences for weddings, celebrations, and brand activations in Nashville.',
}

const includedItems = [
  'Handcrafted wooden booth with high-powered mirrorless/DSLR camera',
  'Professional studio lighting',
  'On-site printed photo strips throughout your event',
  'Unlimited digital photos with full online gallery',
  'Instant sharing via text and email — no app required',
  'GIFs and boomerang capability',
  'Personalized photo overlay (name, date, and event details)',
  'Curated backdrop selection',
  'Thoughtfully styled props',
  'Custom welcome screen',
  'Dedicated on-site attendant for the full rental period',
  'Delivery, full setup, and breakdown — Nashville and surrounding areas',
]

const canvasAudience = [
  'Product launches and brand activations',
  'Corporate holiday parties and client appreciation events',
  'Experiential marketing campaigns',
  'Conferences, retreats, and team events',
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-desert-sand px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 font-heading text-5xl leading-tight text-espresso sm:text-6xl">
            Considered experiences, designed for your day.
          </h1>
          <p className="mb-6 text-lg leading-relaxed text-almond/80">
            Every Unfiltered Rays collection is built around the same promise &mdash; a seamless, beautiful experience that your guests will actually remember. We handle setup, styling, and takedown so you can be fully present.
          </p>
          <p className="text-lg leading-relaxed text-almond/80">
            Collections are available for weddings, private celebrations, milestones, and corporate brand activations in Nashville and surrounding areas.
          </p>
        </div>
      </section>

      <section className="bg-desert-sand/20 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 font-heading text-4xl text-espresso sm:text-5xl">
            What&rsquo;s Included in Every Collection
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {includedItems.map((item) => (
              <div key={item} className="rounded border border-espresso/5 bg-desert-sand/30 p-5">
                <p className="text-sm leading-relaxed text-almond/70">{item}</p>
              </div>
            ))}
          </div>
          <SectionDivider className="mt-16" />
        </div>
      </section>

      <section className="bg-desert-sand/40 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 font-heading text-4xl text-espresso sm:text-5xl">
            The Collections
          </h2>
          <CollectionCards />
          <SectionDivider className="mt-16" />
        </div>
      </section>

      <section className="bg-espresso px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 font-subheading text-sm font-light tracking-widest text-desert-glow uppercase">
            The Canvas Collection &mdash; Corporate &amp; Brand
          </p>
          <h2 className="mb-4 font-heading text-4xl text-desert-sand sm:text-5xl">
            Your brand. Your moment. Built together.
          </h2>
          <p className="mb-8 font-subheading text-sm text-desert-sand/50">
            Pricing upon inquiry &middot; Custom duration
          </p>
          <p className="mb-6 text-lg leading-relaxed text-desert-sand/70">
            Designed for corporate clients, brand activations, and experiential marketing moments. The Canvas Collection is fully bespoke &mdash; we work directly with your team to design a photo booth experience that feels native to your brand, not like a vendor add-on.
          </p>
          <p className="mb-10 text-lg leading-relaxed text-desert-sand/70">
            Whether you&rsquo;re launching a product, hosting a client appreciation event, or building a social-worthy activation, we bring the same warmth and intention that defines every Unfiltered Rays experience &mdash; built entirely around your audience.
          </p>
          <p className="mb-4 font-subheading text-xs tracking-widest text-desert-glow uppercase">
            Who it&rsquo;s for
          </p>
          <ul className="mb-10 space-y-2 text-desert-sand/60">
            {canvasAudience.map((item) => (
              <li key={item}>&mdash; {item}</li>
            ))}
          </ul>
          <CtaButton href="/contact" variant="inverted">
            Let&rsquo;s Talk About Your Event
          </CtaButton>
        </div>
      </section>

      <section className="bg-desert-sand/20 px-6 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-almond/50">
            Additional hours may be added to any collection at $150 per hour. A mileage fee of $0.70 per mile applies to events outside a 50-mile radius of Nashville, TN. All bookings are subject to a signed contract and retainer.
          </p>
        </div>
      </section>

      <section className="bg-desert-sand/40 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-heading text-3xl text-espresso sm:text-4xl">
            Not sure which collection fits your event?
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-lg leading-relaxed text-almond/70">
            Reach out and tell us about your gathering. We&rsquo;ll help you find the right fit.
          </p>
          <CtaButton href="/contact">Submit an Inquiry</CtaButton>
        </div>
      </section>
    </>
  )
}
