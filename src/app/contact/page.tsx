import type { Metadata } from 'next'
import Image from 'next/image'
import { FadeIn } from '@/components/fade-in'
import { ContactForm } from '@/components/email-capture-form'
import { getContact, getSiteSettings } from '@/content'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Inquire',
  description:
    'Reach out to reserve your date or learn more about Unfiltered Rays photo booth experiences in Nashville.',
}

export default async function ContactPage() {
  const [contact, settings] = await Promise.all([getContact(), getSiteSettings()])

  return (
    <>
      <section className="bg-desert-sand px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 font-heading text-5xl leading-tight text-espresso sm:text-6xl">
            {contact.heading}
          </h1>
          <p className="text-lg leading-relaxed text-almond/80">
            {contact.intro}
          </p>
        </div>
      </section>

      <section className="bg-desert-sand/20 px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="relative mb-10 aspect-[4/3] overflow-hidden rounded">
                <Image
                  src={contact.image.src}
                  alt={contact.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="mb-4 font-subheading text-sm tracking-wide text-almond/60">
                {contact.directLabel}
              </p>
              <div className="space-y-3 text-almond/70">
                <a
                  href={`mailto:${settings.contactEmail}`}
                  className="block transition-colors hover:text-espresso"
                >
                  {settings.contactEmail}
                </a>
                <a
                  href={settings.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-colors hover:text-espresso"
                >
                  {settings.instagram}
                </a>
              </div>
            </div>

            <div className="rounded bg-desert-sand/30 p-8 sm:p-10">
              <ContactForm />
            </div>
          </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
