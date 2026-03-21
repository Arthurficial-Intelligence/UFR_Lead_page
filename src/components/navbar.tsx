'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { SITE_CONFIG } from '@/lib/constants'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-espresso">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo-sand.png"
            alt={SITE_CONFIG.name}
            width={160}
            height={56}
            className="h-12 w-auto sm:h-14"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {SITE_CONFIG.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-subheading text-sm tracking-wide transition-colors ${
                pathname === link.href
                  ? 'text-desert-sand'
                  : 'text-desert-sand/60 hover:text-desert-sand'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center text-desert-sand lg:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-desert-sand/10 bg-espresso px-6 pb-6 lg:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {SITE_CONFIG.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-subheading text-sm tracking-wide transition-colors ${
                  pathname === link.href
                    ? 'text-desert-sand'
                    : 'text-desert-sand/60 hover:text-desert-sand'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
