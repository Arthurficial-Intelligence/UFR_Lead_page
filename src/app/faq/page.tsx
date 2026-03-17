import type { Metadata } from 'next'
import { FaqAccordion } from '@/components/faq-accordion'
import { CtaButton } from '@/components/cta-button'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Common questions about booking, collections, customization, and what to expect from an Unfiltered Rays experience.',
}

const faqItems = [
  {
    question: 'What types of events do you serve?',
    answer:
      'We specialize in weddings, private celebrations, milestone events, and corporate brand activations. If you have a gathering that deserves to be remembered, we\u2019d love to hear about it.',
  },
  {
    question: 'How far in advance should I book?',
    answer:
      'We recommend reaching out at least 8\u201312 weeks before your event, especially during peak wedding and holiday seasons. We take a limited number of events each season to give every experience our full attention.',
  },
  {
    question: 'What\u2019s included in every collection?',
    answer:
      'Every collection includes a handcrafted wooden booth, professional studio lighting, on-site printed photo strips, unlimited digital photos with a full online gallery, instant sharing via text and email, GIFs and boomerangs, a personalized photo overlay, curated backdrop selection, styled props, a custom welcome screen, a dedicated on-site attendant, and full setup and breakdown. The difference between collections is duration, print quality, and customization depth.',
  },
  {
    question: 'Can I customize my overlay or backdrop?',
    answer:
      'Yes \u2014 customization is part of our process. During booking we\u2019ll work with you to design an overlay that fits your event aesthetic and select a backdrop that complements your venue. Our Curated Collection includes a fully bespoke overlay and custom back screen designed from scratch.',
  },
  {
    question: 'Do you travel for events?',
    answer:
      'We\u2019re based in Nashville, TN, and serve the surrounding area within a 50-mile radius. Events beyond that radius are welcome \u2014 a mileage fee of $0.70 per mile applies. Reach out and we\u2019ll work out the details.',
  },
  {
    question: 'Can I add more time to my collection?',
    answer:
      'Yes. Additional hours may be added to any collection at $150 per hour. Just let us know when you inquire and we\u2019ll include it in your proposal.',
  },
  {
    question: 'What if I need to cancel or reschedule?',
    answer:
      'Life happens. Our rescheduling and cancellation policies are outlined in your contract at the time of booking. We\u2019re always happy to work with you when circumstances change.',
  },
  {
    question: 'How do guests receive their digital photos?',
    answer:
      'Immediately after each session, guests receive a link via text or email to download and share their photos. No app required.',
  },
  {
    question: 'What does the experience actually look like at my event?',
    answer:
      'We arrive early, set up completely before your guests arrive, and stay present throughout the rental period. Our team is warm, unobtrusive, and there to make the experience feel effortless. When the event ends, we pack up quietly so you never have to think about it.',
  },
]

export default function FaqPage() {
  return (
    <>
      <section className="bg-desert-sand px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 font-heading text-5xl leading-tight text-espresso sm:text-6xl">
            A few things people like to know.
          </h1>
        </div>
      </section>

      <section className="bg-desert-sand/20 px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      <section className="bg-desert-sand/40 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 font-heading text-2xl text-espresso">
            Have a question we didn&rsquo;t cover?
          </p>
          <CtaButton href="/contact">Reach Out</CtaButton>
        </div>
      </section>
    </>
  )
}
