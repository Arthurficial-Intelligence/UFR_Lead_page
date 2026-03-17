import type { Metadata } from 'next'
import Image from 'next/image'
import { SectionDivider } from '@/components/section-divider'

export const metadata: Metadata = {
  title: 'About',
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

      <section className="bg-desert-sand/40 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <div className="relative mx-auto mb-10 aspect-[4/3] max-w-md overflow-hidden rounded">
            <Image
              src="/images/brand-couple.jpg"
              alt="The founders of Unfiltered Rays Media Co."
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
          <div className="mb-10 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-8">
            <p className="font-heading text-xl text-espresso">
              Jazmen Howard &mdash; Co-Founder
            </p>
            <p className="font-heading text-xl text-espresso">
              [Co-Founder Name] &mdash; Co-Founder
            </p>
          </div>
          <p className="font-heading text-2xl italic text-almond/70">
            We&rsquo;d love to be part of yours.
          </p>
        </div>
      </section>
    </>
  )
}
