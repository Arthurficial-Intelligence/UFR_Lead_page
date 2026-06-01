import type { Metadata } from 'next'
import Image from 'next/image'
import { FadeIn } from '@/components/fade-in'
import { SectionDivider } from '@/components/section-divider'
import { getAbout } from '@/content'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet the team behind Unfiltered Rays Media Co. — an intentional photo booth experience for the moments that matter.',
}

export default async function AboutPage() {
  const about = await getAbout()

  return (
    <>
      <section className="bg-desert-sand px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 font-heading text-5xl leading-tight text-espresso sm:text-6xl">
            {about.heading}
          </h1>
        </div>
      </section>

      <section className="bg-desert-sand/20 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="relative mb-10 aspect-[4/3] overflow-hidden rounded">
              <Image
                src={about.image.src}
                alt={about.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 700px"
              />
            </div>
            {about.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className={`text-lg leading-relaxed text-almond/80 ${
                  i < about.paragraphs.length - 1 ? 'mb-6' : 'mb-12'
                }`}
              >
                {paragraph}
              </p>
            ))}
            <SectionDivider />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
