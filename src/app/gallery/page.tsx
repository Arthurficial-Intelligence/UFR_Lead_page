import type { Metadata } from 'next'
import Image from 'next/image'
import { CtaButton } from '@/components/cta-button'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'A selection of warm, candid moments from recent Unfiltered Rays gatherings.',
}

const galleryImages = [
  { src: '/images/hero-couple.jpg', alt: 'Couple in a warm, candid photo booth moment' },
  { src: '/images/social-celebration.jpg', alt: 'Friends celebrating with champagne' },
  { src: '/images/wedding-details.jpg', alt: 'Wedding keepsake details with photo strips' },
  { src: '/images/toast-couple.jpg', alt: 'Couple sharing a toast' },
  { src: '/images/social-trio.jpg', alt: 'Three friends posing together' },
  { src: '/images/positioning-moment.jpg', alt: 'An intimate, unposed moment' },
  { src: '/images/couple-embrace.jpg', alt: 'Couple in a warm embrace' },
  { src: '/images/social-group-champagne.jpg', alt: 'Group celebrating with champagne' },
  { src: '/images/printed-keepsake.jpg', alt: 'Custom photo booth print keepsake' },
  { src: '/images/toast-intimate.jpg', alt: 'Intimate toast at a celebration' },
  { src: '/images/social-friends.jpg', alt: 'Friends sharing a candid moment' },
  { src: '/images/wedding-couple.jpg', alt: 'Couple sharing a joyful laugh' },
  { src: '/images/portrait-smile.jpg', alt: 'Warm portrait with a genuine smile' },
  { src: '/images/social-candid.jpg', alt: 'Candid moment between friends' },
  { src: '/images/intention-keepsake.jpg', alt: 'Hands holding photo booth prints' },
  { src: '/images/social-duo.jpg', alt: 'Two friends at a celebration' },
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
                width={600}
                height={750}
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
