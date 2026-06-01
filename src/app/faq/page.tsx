import type { Metadata } from 'next'
import { FadeIn } from '@/components/fade-in'
import { FaqAccordion } from '@/components/faq-accordion'
import { CtaButton } from '@/components/cta-button'
import { getFaq } from '@/content'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Common questions about booking, collections, customization, and what to expect from an Unfiltered Rays experience.',
}

export default async function FaqPage() {
  const faq = await getFaq()

  return (
    <>
      <section className="bg-desert-sand px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 font-heading text-5xl leading-tight text-espresso sm:text-6xl">
            {faq.heading}
          </h1>
        </div>
      </section>

      <section className="bg-desert-sand/20 px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <FaqAccordion items={faq.items} />
          </FadeIn>
        </div>
      </section>

      <section className="bg-desert-sand/40 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <p className="mb-6 font-heading text-2xl text-espresso">
              {faq.closingPrompt}
            </p>
            <CtaButton href="/contact">{faq.closingCtaLabel}</CtaButton>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
