import type { Metadata } from 'next'
import Image from 'next/image'
import { ContactForm } from '@/components/email-capture-form'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Reach out to reserve your date or learn more about Unfiltered Rays photo booth experiences in Nashville.',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-desert-sand px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 font-heading text-5xl leading-tight text-espresso sm:text-6xl">
            Let&rsquo;s talk about your gathering.
          </h1>
          <p className="text-lg leading-relaxed text-almond/80">
            We&rsquo;d love to hear about your event. Fill out the form below
            and a member of our team will be in touch within 2 business days.
          </p>
        </div>
      </section>

      <section className="bg-desert-sand/20 px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="relative mb-10 aspect-[4/3] overflow-hidden rounded">
                <Image
                  src="/images/contact-viewing.jpg"
                  alt="Guest smiling while viewing photo booth prints"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="mb-4 font-subheading text-sm tracking-wide text-almond/60">
                Prefer to reach us directly?
              </p>
              <div className="space-y-3 text-almond/70">
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="block transition-colors hover:text-espresso"
                >
                  {SITE_CONFIG.contact.email}
                </a>
                <a
                  href={SITE_CONFIG.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-colors hover:text-espresso"
                >
                  {SITE_CONFIG.contact.instagram}
                </a>
              </div>
            </div>

            <div className="rounded bg-desert-sand/30 p-8 sm:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
