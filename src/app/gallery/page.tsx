import type { Metadata } from 'next'
import Image from 'next/image'
import { CtaButton } from '@/components/cta-button'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'A selection of warm, candid moments from recent Unfiltered Rays gatherings.',
}

const galleryImages = [
  { src: '/images/ufr-1085.jpg', alt: 'Elegant editorial moment at the photo booth' },
  { src: '/images/ufr-1825.jpg', alt: 'Three friends laughing together with abandon' },
  { src: '/images/ufr-1808.jpg', alt: 'Warm, intimate embrace between couple' },
  { src: '/images/ufr-1777.jpg', alt: 'Joyful wedding photo booth moment' },
  { src: '/images/ufr-1622.jpg', alt: 'Playful group gathered around the booth' },
  { src: '/images/ufr-1757.jpg', alt: 'Composed group portrait at event' },
  { src: '/images/ufr-1784.jpg', alt: 'Milestone celebration at photo booth' },
  { src: '/images/ufr-1545.jpg', alt: 'Clean photo booth product shot' },
  { src: '/images/ufr-1548.jpg', alt: 'Photo booth detail and setup' },
  { src: '/images/ufr-1489.jpg', alt: 'Guest interaction with photo booth' },
  { src: '/images/ufr-1196.jpg', alt: 'Warm candid moment at gathering' },
  { src: '/images/ufr-1241.jpg', alt: 'Beautiful event photography moment' },
]

export default function GalleryPage() {
  return (
    <>
      <section className="bg-desert-sand px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 font-heading text-5xl leading-tight text-espresso sm:text-6xl">
            Moments we&rsquo;ve been trusted to hold.
          </h1>
          <p className="text-lg leading-relaxed text-almond/70">
            A selection of experiences from our recent gatherings.
          </p>
        </div>
      </section>

      <section className="bg-desert-sand/20 px-6 py-16">
        <div className="mx-auto max-w-6xl columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((img) => (
            <div key={img.src} className="mb-4 break-inside-avoid overflow-hidden rounded">
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
            Ready to add your story to ours?
          </p>
          <CtaButton href="/contact">Inquire Here</CtaButton>
        </div>
      </section>
    </>
  )
}
