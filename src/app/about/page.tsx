import type { Metadata } from 'next'
import { SectionDivider } from '@/components/section-divider'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet the team behind Unfiltered Rays Media Co. — an intentional photo booth experience for the moments that matter.',
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-desert-sand px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 font-heading text-5xl leading-tight text-espresso sm:text-6xl">
            We started this because moments matter.
          </h1>
        </div>
      </section>

      <section className="bg-desert-sand/20 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl">
          <p className="mb-6 text-lg leading-relaxed text-almond/80">
            Unfiltered Rays Media Co. was built around a simple belief: the
            best photos are the ones that actually look like you. Not the
            posed version. Not the camera-ready version. The real one &mdash;
            mid-laugh, leaning in, completely present.
          </p>
          <p className="mb-6 text-lg leading-relaxed text-almond/80">
            We&rsquo;re a small, intentional team that brings a calm,
            elevated photo booth experience to the events we care about most.
            Every setup is thoughtfully designed. Every interaction is warm.
            And every photo is a piece of the day, exactly as it happened.
          </p>
          <p className="mb-12 text-lg leading-relaxed text-almond/80">
            We work with couples, families, and brands who understand the
            difference between documentation and memory-making. If you&rsquo;re
            here, you probably do too.
          </p>
          <SectionDivider />
        </div>
      </section>
    </>
  )
}
