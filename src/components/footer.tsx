import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-espresso px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 grid gap-10 sm:grid-cols-3">
          <div>
            <p className="mb-2 font-heading text-2xl text-desert-sand">
              {SITE_CONFIG.shortName}
            </p>
            <p className="font-accent text-lg text-desert-glow/70">
              Preserving the moment, as it is.
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
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="transition-colors hover:text-desert-sand"
              >
                {SITE_CONFIG.contact.email}
              </a>
              <a
                href={SITE_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-desert-sand"
              >
                {SITE_CONFIG.contact.instagram}
              </a>
            </div>
          </div>
        </div>

        <div className="mb-8 text-center">
          <p className="mb-2 font-subheading text-xs tracking-widest text-desert-glow/60 uppercase">
            Serving
          </p>
          <p className="text-sm text-desert-sand/40">
            {SITE_CONFIG.serviceAreas.join(' · ')}
          </p>
        </div>

        <div className="border-t border-desert-sand/10 pt-8 text-center">
          <div className="mb-4 flex items-center justify-center gap-3 text-xs text-almond/50">
            <Link href="/privacy-policy" className="transition-colors hover:text-desert-sand/60">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms-of-use" className="transition-colors hover:text-desert-sand/60">
              Terms of Use
            </Link>
          </div>
          <p className="text-xs text-desert-sand/40">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
