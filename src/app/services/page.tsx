import type { Metadata } from 'next'
import Image from 'next/image'
import { FadeIn } from '@/components/fade-in'
import { CollectionCards } from '@/components/collection-cards'
import { CtaButton } from '@/components/cta-button'
import { SectionDivider } from '@/components/section-divider'
import { getServices } from '@/content'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Collections & Pricing',
  description:
    'Explore our collections — thoughtfully designed photo booth experiences for weddings, celebrations, and brand activations in Nashville.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <>
      <section className="bg-desert-sand px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-8 font-heading text-5xl leading-tight text-espresso sm:text-6xl">
                {services.heroHeading}
              </h1>
              {services.heroParagraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className={`text-lg leading-relaxed text-almond/80 ${
                    i < services.heroParagraphs.length - 1 ? 'mb-6' : ''
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mx-auto max-w-sm lg:max-w-none">
              <Image
                src={services.heroImage.src}
                alt={services.heroImage.alt}
                width={800}
                height={1200}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 384px, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-desert-sand/20 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="mb-12 font-heading text-4xl text-espresso sm:text-5xl">
              {services.includedHeading}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.includedItems.map((item) => (
                <div key={item} className="rounded border border-espresso/5 bg-desert-sand/30 p-5">
                  <p className="text-sm leading-relaxed text-almond/70">{item}</p>
                </div>
              ))}
            </div>
            <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded">
              <Image
                src={services.includedImage.src}
                alt={services.includedImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1000px"
              />
            </div>
            <SectionDivider className="mt-16" />
          </FadeIn>
        </div>
      </section>

      <section className="bg-desert-sand/40 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <h2 className="mb-12 font-heading text-4xl text-espresso sm:text-5xl">
              {services.collectionsHeading}
            </h2>
            <CollectionCards collections={services.collections} />
            <SectionDivider className="mt-16" />
          </FadeIn>
        </div>
      </section>

      <section className="bg-espresso px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <p className="mb-4 font-subheading text-sm font-light tracking-widest text-desert-glow uppercase">
              {services.canvasEyebrow}
            </p>
            <h2 className="mb-4 font-heading text-4xl text-desert-sand sm:text-5xl">
              {services.canvasHeading}
            </h2>
            <p className="mb-8 font-subheading text-sm text-desert-sand/50">
              {services.canvasPricingNote}
            </p>
            {services.canvasParagraphs.map((paragraph, i) => (
              <p
                key={i}
                className={`text-lg leading-relaxed text-desert-sand/70 ${
                  i < services.canvasParagraphs.length - 1 ? 'mb-6' : 'mb-10'
                }`}
              >
                {paragraph}
              </p>
            ))}
            <p className="mb-4 font-subheading text-xs tracking-widest text-desert-glow uppercase">
              {services.canvasAudienceLabel}
            </p>
            <ul className="mb-10 space-y-2 text-desert-sand/60">
              {services.canvasAudience.map((item) => (
                <li key={item}>&mdash; {item}</li>
              ))}
            </ul>
            <CtaButton href="/contact" variant="inverted">
              {services.canvasCtaLabel}
            </CtaButton>
          </FadeIn>
        </div>
      </section>

      <section className="bg-desert-sand/20 px-6 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <p className="text-sm leading-relaxed text-almond/50">
              {services.finePrint}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-desert-sand/40 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="mb-4 font-heading text-3xl text-espresso sm:text-4xl">
              {services.closingHeading}
            </h2>
            <p className="mx-auto mb-10 max-w-lg text-lg leading-relaxed text-almond/70">
              {services.closingCopy}
            </p>
            <CtaButton href="/contact">{services.closingCtaLabel}</CtaButton>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
