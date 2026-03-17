# Unfiltered Rays Full Site Build — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the single-page Unfiltered Rays site into a 9-route multi-page marketing site with all copy from Jazmen's brand guide, updated collections/pricing, shared nav/footer, GA4 integration, and legal pages.

**Architecture:** Next.js 16 App Router with server components for all pages, client components only for interactive elements (navbar mobile toggle, FAQ accordion, contact form). Shared Navbar and Footer rendered in root layout. All copy is static — no CMS. Existing lead capture flow (Supabase + Resend + PostHog) untouched.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, @next/third-parties (GA4), PostHog (existing)

**Spec:** `docs/superpowers/specs/2026-03-16-ufr-full-site-build-design.md`

---

## File Structure

### New Files
| File | Responsibility |
|---|---|
| `src/components/cta-button.tsx` | Reusable CTA link with default/inverted variants |
| `src/components/section-divider.tsx` | Decorative divider motif between sections |
| `src/components/navbar.tsx` | Responsive sticky nav with mobile dropdown (client component) |
| `src/components/footer.tsx` | Site-wide footer with nav, contact, legal links (server component) |
| `src/components/collection-cards.tsx` | Equal-weight collection cards for Services page |
| `src/components/faq-accordion.tsx` | Accordion Q&A component (client component) |
| `src/app/about/page.tsx` | About page |
| `src/app/services/page.tsx` | Services & Collections page |
| `src/app/gallery/page.tsx` | Gallery page |
| `src/app/faq/page.tsx` | FAQ page |
| `src/app/contact/page.tsx` | Contact / Inquiry page |
| `src/app/privacy-policy/page.tsx` | Privacy Policy legal page |
| `src/app/terms-of-use/page.tsx` | Terms of Use legal page |

### Modified Files
| File | Changes |
|---|---|
| `src/app/layout.tsx` | Add Navbar, Footer, GoogleAnalytics component |
| `src/app/page.tsx` | Full rewrite — 5 sections with Jazmen's home copy |
| `src/app/sitemap.ts` | Add 5 new indexed routes, remove /thank-you |
| `src/app/robots.ts` | Add disallow for /privacy-policy, /terms-of-use, /thank-you |
| `.env.example` | Add NEXT_PUBLIC_GA_ID |

### Deleted Files
| File | Reason |
|---|---|
| `src/components/collections-dropdown.tsx` | Replaced by `collection-cards.tsx` |

---

## Task 1: Foundation — CTA Button, Section Divider, Env Vars

**Files:**
- Create: `src/components/cta-button.tsx`
- Create: `src/components/section-divider.tsx`
- Modify: `.env.example`

- [ ] **Step 1: Create CTA Button component**

```tsx
// src/components/cta-button.tsx
import Link from 'next/link'

export function CtaButton({
  href,
  children,
  variant = 'default',
  className = '',
}: {
  href: string
  children: React.ReactNode
  variant?: 'default' | 'inverted'
  className?: string
}) {
  const base = 'inline-block rounded font-subheading text-base tracking-wide transition-colors duration-300 px-10 py-4'
  const variants = {
    default: 'bg-espresso text-desert-sand hover:bg-almond',
    inverted: 'bg-desert-sand text-espresso hover:bg-desert-sand/80',
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  )
}
```

- [ ] **Step 2: Create Section Divider component**

```tsx
// src/components/section-divider.tsx
export function SectionDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`mx-auto flex items-center justify-center gap-3 ${className}`}>
      <div className="h-[1px] w-12 bg-desert-glow/40" />
      <div className="h-2 w-2 rounded-full bg-desert-glow/60" />
      <div className="h-[1px] w-12 bg-desert-glow/40" />
    </div>
  )
}
```

- [ ] **Step 3: Add GA env var to .env.example**

Add this line to the end of `.env.example`:

```
# Google Analytics
NEXT_PUBLIC_GA_ID=G-ZW8NWPXGTX
```

- [ ] **Step 4: Verify no TypeScript errors**

Run: `npx tsc --noEmit`
Expected: No errors related to new files

- [ ] **Step 5: Commit**

```bash
git add src/components/cta-button.tsx src/components/section-divider.tsx .env.example
git commit -m "feat: add CTA button and section divider components, GA env var"
```

---

## Task 2: Navbar Component

**Files:**
- Create: `src/components/navbar.tsx`

- [ ] **Step 1: Create Navbar component**

```tsx
// src/components/navbar.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SITE_CONFIG } from '@/lib/constants'
import { CtaButton } from '@/components/cta-button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-espresso">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link href="/" className="font-heading text-xl text-desert-sand sm:text-2xl">
          {SITE_CONFIG.shortName}
        </Link>

        {/* Desktop nav */}
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
          <CtaButton href="/contact" variant="inverted" className="px-6 py-2.5 text-sm">
            Inquire
          </CtaButton>
        </div>

        {/* Mobile hamburger */}
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

      {/* Mobile dropdown overlay */}
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
            <CtaButton href="/contact" variant="inverted" className="mt-2 px-6 py-2.5 text-center text-sm">
              Inquire
            </CtaButton>
          </div>
        </div>
      )}
    </header>
  )
}
```

- [ ] **Step 2: Verify no TypeScript errors**

Run: `npx tsc --noEmit`

- [ ] **Step 3: Commit**

```bash
git add src/components/navbar.tsx
git commit -m "feat: add responsive navbar with mobile dropdown"
```

---

## Task 3: Footer Component

**Files:**
- Create: `src/components/footer.tsx`

- [ ] **Step 1: Create Footer component**

```tsx
// src/components/footer.tsx
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-espresso px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 grid gap-10 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="mb-2 font-heading text-2xl text-desert-sand">
              {SITE_CONFIG.shortName}
            </p>
            <p className="font-accent text-lg text-desert-glow/70">
              Preserving the moment, as it is.
            </p>
          </div>

          {/* Navigation */}
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

          {/* Contact */}
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

        {/* Service areas */}
        <div className="mb-8 text-center">
          <p className="mb-2 font-subheading text-xs tracking-widest text-desert-glow/60 uppercase">
            Serving
          </p>
          <p className="text-sm text-desert-sand/40">
            {SITE_CONFIG.serviceAreas.join(' · ')}
          </p>
        </div>

        {/* Legal + copyright */}
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
```

- [ ] **Step 2: Verify no TypeScript errors**

Run: `npx tsc --noEmit`

- [ ] **Step 3: Commit**

```bash
git add src/components/footer.tsx
git commit -m "feat: add site-wide footer with nav, contact, legal links"
```

---

## Task 4: Layout Update — Navbar, Footer, Google Analytics

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Install @next/third-parties**

Run: `npm install @next/third-parties`

- [ ] **Step 2: Update layout.tsx**

Replace the body contents in `src/app/layout.tsx`. The full updated file:

```tsx
import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import { PostHogProvider } from '@/components/posthog-provider'
import { AnalyticsPageView } from '@/components/analytics-page-view'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SITE_CONFIG } from '@/lib/constants'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: 'Unfiltered Rays | Luxury Wedding Photo Booth in Nashville',
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [...SITE_CONFIG.keywords],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: 'Unfiltered Rays | Luxury Wedding Photo Booth in Nashville',
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unfiltered Rays | Luxury Wedding Photo Booth in Nashville',
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable} font-body antialiased`}>
        <PostHogProvider>
          <AnalyticsPageView />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </PostHogProvider>
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  )
}
```

- [ ] **Step 3: Verify dev server loads without errors**

Run: `npm run dev` — check http://localhost:3000 loads. Navbar and footer should appear. The existing home page content will look off (inline footer duplicated) — that's expected, fixed in Task 5.

- [ ] **Step 4: Commit**

```bash
git add src/app/layout.tsx package.json package-lock.json
git commit -m "feat: add navbar, footer, and Google Analytics to root layout"
```

---

## Task 5: Home Page Rewrite

**Files:**
- Modify: `src/app/page.tsx` (full rewrite)

- [ ] **Step 1: Rewrite page.tsx**

Replace the entire contents of `src/app/page.tsx` with the new 5-section home page. Key changes:
- Hero: "The moment, held." headline, single Inquire CTA
- Brand Statement: "Gathered. Real. Yours." two-column section
- How It Works: 3 steps horizontal
- Event Types: 4-card grid
- Closing CTA: "Your date is waiting."
- JSON-LD: Remove `telephone` field, keep email/address/url
- Remove inline footer and contact section (now in layout)

```tsx
// src/app/page.tsx
import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/constants'
import { CtaButton } from '@/components/cta-button'
import { SectionDivider } from '@/components/section-divider'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
  email: SITE_CONFIG.contact.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE_CONFIG.address.locality,
    addressRegion: SITE_CONFIG.address.region,
    addressCountry: SITE_CONFIG.address.country,
  },
  priceRange: '$$',
  areaServed: SITE_CONFIG.serviceAreas.map((city) => ({
    '@type': 'City',
    name: `${city}, TN`,
  })),
}

const steps = [
  {
    number: '1',
    title: 'Reserve your date',
    copy: 'Reach out and tell us about your event. We\u2019ll confirm availability and walk you through the collections.',
  },
  {
    number: '2',
    title: 'Design your experience',
    copy: 'Choose your backdrop, overlay, and styling details. We handle every element so you don\u2019t have to.',
  },
  {
    number: '3',
    title: 'Arrive and enjoy',
    copy: 'Our team sets up before your guests arrive and stays present throughout. You celebrate. We take care of the rest.',
  },
]

const eventTypes = [
  {
    title: 'Weddings',
    copy: 'An intimate addition to your reception \u2014 giving guests a printed keepsake and a reason to linger a little longer.',
    image: '/images/wedding-couple.jpg',
    alt: 'Couple sharing a joyful moment at their wedding photo booth',
  },
  {
    title: 'Private Celebrations',
    copy: 'Birthdays, anniversaries, baby showers, graduations. The milestones that call for something more than a camera phone.',
    image: '/images/social-celebration.jpg',
    alt: 'Friends celebrating together at a private event',
  },
  {
    title: 'Corporate & Brand Activations',
    copy: 'We bring the same warmth and refinement to brand experiences \u2014 helping your guests connect with your brand in a way that feels human.',
    image: '/images/corporate-portrait.jpg',
    alt: 'Professional portrait at a corporate brand activation',
  },
  {
    title: 'Milestone Events',
    copy: 'The moments worth marking. We make sure the day exists beyond the memory.',
    image: '/images/toast-intimate.jpg',
    alt: 'Intimate toast at a milestone celebration',
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-desert-sand px-6">
        {/* Background image */}
        <Image
          src="/images/hero-couple.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          priority
          aria-hidden="true"
        />

        {/* Decorative arch */}
        <div className="pointer-events-none absolute inset-0 flex items-end justify-center">
          <div className="h-[70%] w-[min(600px,90vw)] rounded-t-full border border-sunlit-clay/20" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h1 className="mb-6 font-heading text-5xl leading-tight tracking-tight text-espresso sm:text-6xl md:text-7xl">
            The moment, <span className="italic">held.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl font-subheading text-lg font-light leading-relaxed text-almond/80 sm:text-xl">
            A refined photo booth experience for weddings, celebrations, and
            the gatherings that matter most.
          </p>
          <CtaButton href="/contact">Inquire</CtaButton>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="h-10 w-[1px] bg-gradient-to-b from-sunlit-clay/60 to-transparent" />
        </div>
      </section>

      {/* ── Brand Statement ── */}
      <section className="bg-desert-sand/20 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded">
              <Image
                src="/images/positioning-moment.jpg"
                alt="An intimate, unposed moment at a photo booth experience"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="mb-8 font-heading text-4xl leading-snug text-espresso sm:text-5xl">
                Gathered. Real. Yours.
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-almond/80">
                Some moments are too good to let slip by unnoticed. At
                Unfiltered Rays, we create space for your guests to slow
                down &mdash; to laugh, connect, and leave with something
                tangible from the night.
              </p>
              <p className="text-lg leading-relaxed text-almond/80">
                We&rsquo;re not here to add noise to your event. We&rsquo;re
                here to add warmth.
              </p>
            </div>
          </div>
          <SectionDivider className="mt-16" />
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-desert-sand/40 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-16 font-heading text-4xl text-espresso sm:text-5xl">
            A seamless addition to your celebration.
          </h2>
          <div className="grid gap-12 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-sunlit-clay/30">
                  <span className="font-heading text-3xl text-sunlit-clay">
                    {step.number}
                  </span>
                </div>
                <h3 className="mb-3 font-heading text-xl text-espresso">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-almond/70">{step.copy}</p>
              </div>
            ))}
          </div>
          <SectionDivider className="mt-16" />
        </div>
      </section>

      {/* ── Event Types ── */}
      <section className="bg-desert-sand/20 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-16 font-heading text-4xl text-espresso sm:text-5xl">
            Every gathering deserves to be remembered.
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {eventTypes.map((event) => (
              <div key={event.title} className="group overflow-hidden rounded">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="bg-desert-sand/40 p-6">
                  <h3 className="mb-2 font-heading text-2xl text-espresso">
                    {event.title}
                  </h3>
                  <p className="leading-relaxed text-almond/70">
                    {event.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="bg-espresso px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-heading text-4xl text-desert-sand sm:text-5xl">
            Your date is waiting.
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-lg leading-relaxed text-desert-sand/70">
            We take a limited number of events each season to ensure every
            experience gets our full attention. Reach out to check
            availability.
          </p>
          <CtaButton href="/contact" variant="inverted">
            Submit an Inquiry
          </CtaButton>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 2: Verify dev server renders new home page**

Run: `npm run dev` — check http://localhost:3000. Verify all 5 sections render, images load, CTA links point to `/contact`.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: rewrite home page with Jazmen's brand guide copy"
```

---

## Task 6: About Page

**Files:**
- Create: `src/app/about/page.tsx`

- [ ] **Step 1: Create About page**

```tsx
// src/app/about/page.tsx
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
      {/* Hero */}
      <section className="bg-desert-sand px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 font-heading text-5xl leading-tight text-espresso sm:text-6xl">
            We started this because moments matter.
          </h1>
        </div>
      </section>

      {/* Brand Story */}
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

      {/* Founders */}
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
```

- [ ] **Step 2: Verify page renders at /about**

Run: `npm run dev` — check http://localhost:3000/about

- [ ] **Step 3: Commit**

```bash
git add src/app/about/page.tsx
git commit -m "feat: add About page with brand story and founder section"
```

---

## Task 7: Collection Cards Component + Services Page

**Files:**
- Create: `src/components/collection-cards.tsx`
- Create: `src/app/services/page.tsx`
- Delete: `src/components/collections-dropdown.tsx`

- [ ] **Step 1: Create collection-cards.tsx**

```tsx
// src/components/collection-cards.tsx
const collections = [
  {
    name: 'The Gathered Collection',
    price: '$795',
    duration: '3 hours of booth time',
    tagline: 'For the people worth slowing down for.',
    description:
      'Our most-loved experience, and the clearest expression of what we do. Designed for weddings, birthday celebrations, anniversaries, and any gathering where the people in the room are the whole point. Every detail is handled. Every guest leaves with something real in their hands.',
    note: 'This collection includes everything listed above \u2014 a complete, warmly considered experience with nothing missing and nothing superfluous.',
    includes: [
      'Personalized overlay design, tailored to your event',
      'Standard backdrop from our curated selection',
      'Classic color photo output',
      'Standard photo strip prints',
    ],
  },
  {
    name: 'The Evening Collection',
    price: '$1,050',
    duration: '3 hours of booth time',
    tagline: 'Refined. Considered. Unhurried.',
    description:
      'Everything in The Gathered Collection, elevated for your most polished occasions. Designed for upscale receptions, milestone celebrations, and hosts who want the finer details to feel exactly right. The same warmth, the same presence \u2014 with a more refined finish throughout.',
    note: null,
    includes: [
      'Everything in The Gathered Collection, plus:',
      'Premium backdrop upgrade \u2014 elevated materials and finishes',
      'Premium pearl print upgrade \u2014 a richer, more luxurious photo strip',
      'AI-enhanced photo finish \u2014 a polished, glam-ready output for every guest',
      'Choice of color, black & white, or sepia photo output',
    ],
  },
  {
    name: 'The Curated Collection',
    price: '$1,350',
    duration: '4 hours of booth time',
    tagline: 'Every detail, designed with intention.',
    description:
      'Our most comprehensive experience, built for those who want full creative control. Extends your rental by an additional hour and unlocks complete bespoke design \u2014 from a fully custom overlay crafted around your event aesthetic, to a custom back screen that makes every photo feel made for this moment specifically.',
    note: 'If you\u2019ve been saving inspiration for months, this one\u2019s for you.',
    includes: [
      'Everything in The Evening Collection, plus:',
      'One additional hour of booth time \u2014 4 hours total',
      'Fully bespoke overlay design \u2014 built from scratch around your event, not pulled from a template',
      'Custom back screen design \u2014 a fully branded experience from the moment guests approach',
    ],
  },
]

export function CollectionCards() {
  return (
    <div className="grid items-start gap-6 md:grid-cols-3">
      {collections.map((collection) => (
        <div
          key={collection.name}
          className="rounded border border-espresso/10 bg-desert-sand/30 p-8 sm:p-10"
        >
          <h3 className="mb-1 font-heading text-2xl text-espresso">
            {collection.name}
          </h3>
          <p className="mb-1 font-subheading text-sm font-light tracking-wide text-sunlit-clay">
            {collection.price} &middot; {collection.duration}
          </p>
          <p className="mb-6 font-subheading text-sm italic text-almond/60">
            {collection.tagline}
          </p>
          <p className="mb-4 leading-relaxed text-almond/70">
            {collection.description}
          </p>
          {collection.note && (
            <p className="mb-4 leading-relaxed text-almond/70">
              {collection.note}
            </p>
          )}
          <p className="mb-2 font-subheading text-xs tracking-widest text-sunlit-clay uppercase">
            What&rsquo;s Included
          </p>
          <ul className="space-y-1.5 text-sm leading-relaxed text-almond/60">
            {collection.includes.map((item) => (
              <li key={item}>&mdash; {item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
```

- [ ] **Step 2: Create services page**

```tsx
// src/app/services/page.tsx
import type { Metadata } from 'next'
import { CollectionCards } from '@/components/collection-cards'
import { CtaButton } from '@/components/cta-button'
import { SectionDivider } from '@/components/section-divider'

export const metadata: Metadata = {
  title: 'Services & Collections',
  description:
    'Explore our collections — thoughtfully designed photo booth experiences for weddings, celebrations, and brand activations in Nashville.',
}

const includedItems = [
  'Handcrafted wooden booth with high-powered mirrorless/DSLR camera',
  'Professional studio lighting',
  'On-site printed photo strips throughout your event',
  'Unlimited digital photos with full online gallery',
  'Instant sharing via text and email — no app required',
  'GIFs and boomerang capability',
  'Personalized photo overlay (name, date, and event details)',
  'Curated backdrop selection',
  'Thoughtfully styled props',
  'Custom welcome screen',
  'Dedicated on-site attendant for the full rental period',
  'Delivery, full setup, and breakdown — Nashville and surrounding areas',
]

const canvasAudience = [
  'Product launches and brand activations',
  'Corporate holiday parties and client appreciation events',
  'Experiential marketing campaigns',
  'Conferences, retreats, and team events',
]

export default function ServicesPage() {
  return (
    <>
      {/* Intro */}
      <section className="bg-desert-sand px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 font-heading text-5xl leading-tight text-espresso sm:text-6xl">
            Considered experiences, designed for your day.
          </h1>
          <p className="mb-6 text-lg leading-relaxed text-almond/80">
            Every Unfiltered Rays collection is built around the same promise
            &mdash; a seamless, beautiful experience that your guests will
            actually remember. We handle setup, styling, and takedown so you
            can be fully present.
          </p>
          <p className="text-lg leading-relaxed text-almond/80">
            Collections are available for weddings, private celebrations,
            milestones, and corporate brand activations in Nashville and
            surrounding areas.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-desert-sand/20 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 font-heading text-4xl text-espresso sm:text-5xl">
            What&rsquo;s Included in Every Collection
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {includedItems.map((item) => (
              <div
                key={item}
                className="rounded border border-espresso/5 bg-desert-sand/30 p-5"
              >
                <p className="text-sm leading-relaxed text-almond/70">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <SectionDivider className="mt-16" />
        </div>
      </section>

      {/* Collections */}
      <section className="bg-desert-sand/40 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 font-heading text-4xl text-espresso sm:text-5xl">
            The Collections
          </h2>
          <CollectionCards />
          <SectionDivider className="mt-16" />
        </div>
      </section>

      {/* Canvas Collection — Corporate */}
      <section className="bg-espresso px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 font-subheading text-sm font-light tracking-widest text-desert-glow uppercase">
            The Canvas Collection &mdash; Corporate &amp; Brand
          </p>
          <h2 className="mb-4 font-heading text-4xl text-desert-sand sm:text-5xl">
            Your brand. Your moment. Built together.
          </h2>
          <p className="mb-8 font-subheading text-sm text-desert-sand/50">
            Pricing upon inquiry &middot; Custom duration
          </p>
          <p className="mb-6 text-lg leading-relaxed text-desert-sand/70">
            Designed for corporate clients, brand activations, and experiential
            marketing moments. The Canvas Collection is fully bespoke &mdash;
            we work directly with your team to design a photo booth experience
            that feels native to your brand, not like a vendor add-on.
          </p>
          <p className="mb-10 text-lg leading-relaxed text-desert-sand/70">
            Whether you&rsquo;re launching a product, hosting a client
            appreciation event, or building a social-worthy activation, we
            bring the same warmth and intention that defines every Unfiltered
            Rays experience &mdash; built entirely around your audience.
          </p>
          <p className="mb-4 font-subheading text-xs tracking-widest text-desert-glow uppercase">
            Who it&rsquo;s for
          </p>
          <ul className="mb-10 space-y-2 text-desert-sand/60">
            {canvasAudience.map((item) => (
              <li key={item}>&mdash; {item}</li>
            ))}
          </ul>
          <CtaButton href="/contact" variant="inverted">
            Let&rsquo;s Talk About Your Event
          </CtaButton>
        </div>
      </section>

      {/* Fine Print */}
      <section className="bg-desert-sand/20 px-6 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-almond/50">
            Additional hours may be added to any collection at $150 per hour.
            A mileage fee of $0.70 per mile applies to events outside a
            50-mile radius of Nashville, TN. All bookings are subject to a
            signed contract and retainer.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-desert-sand/40 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-heading text-3xl text-espresso sm:text-4xl">
            Not sure which collection fits your event?
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-lg leading-relaxed text-almond/70">
            Reach out and tell us about your gathering. We&rsquo;ll help you
            find the right fit.
          </p>
          <CtaButton href="/contact">Submit an Inquiry</CtaButton>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 3: Delete old collections-dropdown.tsx**

Run: `rm src/components/collections-dropdown.tsx`

- [ ] **Step 4: Verify /services renders and no import errors**

Run: `npm run dev` — check http://localhost:3000/services. Also verify home page still works (it no longer imports CollectionCards from old file).

- [ ] **Step 5: Commit**

```bash
git add src/components/collection-cards.tsx src/app/services/page.tsx
git rm src/components/collections-dropdown.tsx
git commit -m "feat: add Services page with updated collections, replace old dropdown"
```

---

## Task 8: Gallery Page

**Files:**
- Create: `src/app/gallery/page.tsx`

- [ ] **Step 1: Create Gallery page**

```tsx
// src/app/gallery/page.tsx
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
      {/* Hero */}
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

      {/* Gallery Grid */}
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

      {/* Closing CTA */}
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
```

- [ ] **Step 2: Verify /gallery renders**

Run: `npm run dev` — check http://localhost:3000/gallery. Masonry layout should show all images.

- [ ] **Step 3: Commit**

```bash
git add src/app/gallery/page.tsx
git commit -m "feat: add Gallery page with masonry image grid"
```

---

## Task 9: FAQ Accordion Component + FAQ Page

**Files:**
- Create: `src/components/faq-accordion.tsx`
- Create: `src/app/faq/page.tsx`

- [ ] **Step 1: Create FAQ accordion component**

```tsx
// src/components/faq-accordion.tsx
'use client'

import { useState } from 'react'

export function FaqAccordion({
  items,
}: {
  items: { question: string; answer: string }[]
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="divide-y divide-espresso/10">
      {items.map((item, index) => (
        <div key={item.question}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between gap-4 py-6 text-left"
            aria-expanded={openIndex === index}
          >
            <h3 className="font-heading text-xl text-espresso sm:text-2xl">
              {item.question}
            </h3>
            <svg
              className={`h-5 w-5 shrink-0 text-sunlit-clay transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{
              maxHeight: openIndex === index ? '500px' : '0px',
              opacity: openIndex === index ? 1 : 0,
            }}
          >
            <p className="pb-6 leading-relaxed text-almond/70">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
```

- [ ] **Step 2: Create FAQ page**

```tsx
// src/app/faq/page.tsx
import type { Metadata } from 'next'
import { FaqAccordion } from '@/components/faq-accordion'
import { CtaButton } from '@/components/cta-button'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Common questions about booking, collections, customization, and what to expect from an Unfiltered Rays experience.',
}

const faqItems = [
  {
    question: 'What types of events do you serve?',
    answer:
      'We specialize in weddings, private celebrations, milestone events, and corporate brand activations. If you have a gathering that deserves to be remembered, we\u2019d love to hear about it.',
  },
  {
    question: 'How far in advance should I book?',
    answer:
      'We recommend reaching out at least 8\u201312 weeks before your event, especially during peak wedding and holiday seasons. We take a limited number of events each season to give every experience our full attention.',
  },
  {
    question: 'What\u2019s included in every collection?',
    answer:
      'Every collection includes a handcrafted wooden booth, professional studio lighting, on-site printed photo strips, unlimited digital photos with a full online gallery, instant sharing via text and email, GIFs and boomerangs, a personalized photo overlay, curated backdrop selection, styled props, a custom welcome screen, a dedicated on-site attendant, and full setup and breakdown. The difference between collections is duration, print quality, and customization depth.',
  },
  {
    question: 'Can I customize my overlay or backdrop?',
    answer:
      'Yes \u2014 customization is part of our process. During booking we\u2019ll work with you to design an overlay that fits your event aesthetic and select a backdrop that complements your venue. Our Curated Collection includes a fully bespoke overlay and custom back screen designed from scratch.',
  },
  {
    question: 'Do you travel for events?',
    answer:
      'We\u2019re based in Nashville, TN, and serve the surrounding area within a 50-mile radius. Events beyond that radius are welcome \u2014 a mileage fee of $0.70 per mile applies. Reach out and we\u2019ll work out the details.',
  },
  {
    question: 'Can I add more time to my collection?',
    answer:
      'Yes. Additional hours may be added to any collection at $150 per hour. Just let us know when you inquire and we\u2019ll include it in your proposal.',
  },
  {
    question: 'What if I need to cancel or reschedule?',
    answer:
      'Life happens. Our rescheduling and cancellation policies are outlined in your contract at the time of booking. We\u2019re always happy to work with you when circumstances change.',
  },
  {
    question: 'How do guests receive their digital photos?',
    answer:
      'Immediately after each session, guests receive a link via text or email to download and share their photos. No app required.',
  },
  {
    question: 'What does the experience actually look like at my event?',
    answer:
      'We arrive early, set up completely before your guests arrive, and stay present throughout the rental period. Our team is warm, unobtrusive, and there to make the experience feel effortless. When the event ends, we pack up quietly so you never have to think about it.',
  },
]

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-desert-sand px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 font-heading text-5xl leading-tight text-espresso sm:text-6xl">
            A few things people like to know.
          </h1>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-desert-sand/20 px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-desert-sand/40 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 font-heading text-2xl text-espresso">
            Have a question we didn&rsquo;t cover?
          </p>
          <CtaButton href="/contact">Reach Out</CtaButton>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 3: Verify /faq renders with working accordion**

Run: `npm run dev` — check http://localhost:3000/faq. Click questions to expand/collapse.

- [ ] **Step 4: Commit**

```bash
git add src/components/faq-accordion.tsx src/app/faq/page.tsx
git commit -m "feat: add FAQ page with accordion component"
```

---

## Task 10: Contact Page

**Files:**
- Create: `src/app/contact/page.tsx`

- [ ] **Step 1: Create Contact page**

```tsx
// src/app/contact/page.tsx
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
      {/* Hero */}
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

      {/* Form Section */}
      <section className="bg-desert-sand/20 px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            {/* Left — image + direct contact */}
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

            {/* Right — form */}
            <div className="rounded bg-desert-sand/30 p-8 sm:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 2: Verify /contact renders with working form**

Run: `npm run dev` — check http://localhost:3000/contact. Form fields should display, email/Instagram links visible.

- [ ] **Step 3: Commit**

```bash
git add src/app/contact/page.tsx
git commit -m "feat: add Contact page with inquiry form and direct contact info"
```

---

## Task 11: Legal Pages — Privacy Policy & Terms of Use

**Files:**
- Create: `src/app/privacy-policy/page.tsx`
- Create: `src/app/terms-of-use/page.tsx`

- [ ] **Step 1: Create Privacy Policy page**

Create `src/app/privacy-policy/page.tsx` with:
- `metadata: { title: 'Privacy Policy', robots: { index: false } }`
- Full legal text from Jazmen's brand guide Document 1
- All email references changed to `hello@unfilteredrays.com`
- All Instagram references changed to `@unfilteredraysmediaco`
- Effective date: April 1, 2026
- Styled as long-form text: espresso headings, almond body text, desert-sand background

The page is a server component with static text. Use `<h2>` for section headings (1-12), `<p>` for body text, `<ul>` for lists. Wrap in a max-w-3xl container.

- [ ] **Step 2: Create Terms of Use page**

Create `src/app/terms-of-use/page.tsx` with:
- `metadata: { title: 'Terms of Use', robots: { index: false } }`
- Full legal text from Jazmen's brand guide Document 2
- Same contact info corrections as Privacy Policy
- Same styling pattern

- [ ] **Step 3: Verify both pages render**

Run: `npm run dev` — check `/privacy-policy` and `/terms-of-use`. Verify footer links work.

- [ ] **Step 4: Commit**

```bash
git add src/app/privacy-policy/page.tsx src/app/terms-of-use/page.tsx
git commit -m "feat: add Privacy Policy and Terms of Use legal pages"
```

---

## Task 12: Sitemap, Robots, and Final Cleanup

**Files:**
- Modify: `src/app/sitemap.ts`
- Modify: `src/app/robots.ts`

- [ ] **Step 1: Update sitemap.ts**

Replace contents of `src/app/sitemap.ts`:

```tsx
import type { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_CONFIG.url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_CONFIG.url}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_CONFIG.url}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_CONFIG.url}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_CONFIG.url}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_CONFIG.url}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
```

- [ ] **Step 2: Update robots.ts**

Replace contents of `src/app/robots.ts`:

```tsx
import type { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/constants'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/privacy-policy', '/terms-of-use', '/thank-you'],
    },
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  }
}
```

- [ ] **Step 3: Run build to verify everything compiles**

Run: `npm run build`
Expected: Build succeeds with no errors. All 9 routes should appear in the build output.

- [ ] **Step 4: Commit**

```bash
git add src/app/sitemap.ts src/app/robots.ts
git commit -m "feat: update sitemap and robots for all new routes"
```

---

## Task 13: Final Verification

- [ ] **Step 1: Run lint**

Run: `npm run lint`
Expected: No errors

- [ ] **Step 2: Run production build**

Run: `npm run build`
Expected: Build succeeds. Output shows all routes: /, /about, /services, /gallery, /faq, /contact, /privacy-policy, /terms-of-use, /thank-you

- [ ] **Step 3: Smoke test all routes in dev**

Run: `npm run dev` and manually visit each route:
- http://localhost:3000 — Home (5 sections, new copy)
- http://localhost:3000/about — About (brand story, founders)
- http://localhost:3000/services — Services (included items, 3 collections, Canvas, fine print)
- http://localhost:3000/gallery — Gallery (masonry grid)
- http://localhost:3000/faq — FAQ (9 questions, accordion works)
- http://localhost:3000/contact — Contact (form, email, Instagram)
- http://localhost:3000/privacy-policy — Privacy Policy (long-form text)
- http://localhost:3000/terms-of-use — Terms of Use (long-form text)
- http://localhost:3000/thank-you — Thank You (existing, should still work)

Verify:
- Navbar appears on all pages with correct active state
- Footer appears on all pages with legal links
- All CTA buttons link to /contact
- Mobile hamburger menu works
- No console errors

- [ ] **Step 4: Final commit and push**

```bash
git push origin claude/update-contact-footer-DbJHf
```
