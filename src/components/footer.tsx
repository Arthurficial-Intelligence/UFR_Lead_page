import Link from 'next/link'
import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/constants'
import { getSiteSettings } from '@/content'

export async function Footer() {
  const settings = await getSiteSettings()

  return (
    <footer className="bg-espresso px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 grid gap-10 sm:grid-cols-3">
          <div>
            <p className="mb-2 font-heading text-2xl text-desert-sand">
              {settings.shortName}
            </p>
            <p className="font-subheading text-base italic text-desert-glow">
              {settings.tagline}
            </p>
          </div>

          <div>
            <p className="mb-3 font-subheading text-xs tracking-widest text-desert-glow uppercase">
              Explore
            </p>
            <nav className="flex flex-col gap-2 text-sm text-desert-sand/60">
              {SITE_CONFIG.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-desert-sand"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-3 font-subheading text-xs tracking-widest text-desert-glow uppercase">
              Contact
            </p>
            <div className="flex flex-col gap-2 text-sm text-desert-sand/60">
              <a
                href={`mailto:${settings.contactEmail}`}
                className="transition-colors hover:text-desert-sand"
              >
                {settings.contactEmail}
              </a>
              <a
                href={settings.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-desert-sand"
              >
                {settings.instagram}
              </a>
            </div>
          </div>
        </div>

        <div className="mb-8 text-center">
          <p className="mb-2 font-subheading text-xs tracking-widest text-desert-glow uppercase">
            Serving
          </p>
          <p className="text-sm text-desert-sand/40">
            {settings.serviceAreas.join(' · ')}
          </p>
        </div>

        <div className="border-t border-desert-sand/10 pt-8 text-center">
          <div className="mb-4 flex items-center justify-center gap-3 text-xs text-desert-glow">
            <Link href="/privacy-policy" className="transition-colors hover:text-desert-sand">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms-of-use" className="transition-colors hover:text-desert-sand">
              Terms of Use
            </Link>
          </div>
          <p className="text-xs text-desert-sand/40">
            &copy; {new Date().getFullYear()} {settings.name} All rights reserved.
          </p>
          <div className="mt-8 flex justify-center">
            <Image
              src="/images/sun-mark.png"
              alt=""
              width={48}
              height={28}
              className="opacity-30 brightness-150 saturate-50"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
