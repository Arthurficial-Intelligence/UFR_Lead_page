import type { Metadata } from 'next'
import Image from 'next/image'
import { CtaButton } from '@/components/cta-button'
import { getGallery } from '@/content'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'A selection of warm, candid moments from recent Unfiltered Rays gatherings.',
}

export default async function GalleryPage() {
  const gallery = await getGallery()

  return (
    <>
      <section className="bg-desert-sand px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 font-heading text-5xl leading-tight text-espresso sm:text-6xl">
            {gallery.heading}
          </h1>
          <p className="text-lg leading-relaxed text-almond/70">
            {gallery.intro}
          </p>
        </div>
      </section>

      <section className="bg-desert-sand/20 px-6 py-16">
        <div className="mx-auto max-w-6xl columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.images.map((img, i) => (
            <div key={`${img.src}-${i}`} className="mb-4 break-inside-avoid overflow-hidden rounded">
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                className="w-full object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-desert-sand/40 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 font-heading text-2xl text-espresso">
            {gallery.closingPrompt}
          </p>
          <CtaButton href="/contact">{gallery.closingCtaLabel}</CtaButton>
        </div>
      </section>
    </>
  )
}
