# Jazmen Feedback Round 1 — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement Jazmen Howard's first round of client feedback — photo replacement, nav/footer/SEO updates, form changes, founder section removal, and scroll fade-in animations.

**Architecture:** All changes are to existing Next.js pages and components. One new client component (`FadeIn`) is created. Photos are processed with a shell script using `sharp` via npx. No new dependencies beyond `sharp` (dev-only, one-time use).

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, sharp (image processing)

---

## File Structure

| File | Action | Responsibility |
|---|---|---|
| `src/components/fade-in.tsx` | Create | Scroll fade-in wrapper component |
| `src/components/footer.tsx` | Modify | Service areas layout, tagline font |
| `src/components/collection-cards.tsx` | Modify | "Starting at" price prefix |
| `src/components/email-capture-form.tsx` | Modify | Add event type option |
| `src/lib/constants.ts` | Modify | Remove Gallery from navLinks |
| `src/app/page.tsx` | Modify | Photo paths, FadeIn wrappers |
| `src/app/about/page.tsx` | Modify | Remove founder section, photo, title, FadeIn |
| `src/app/services/page.tsx` | Modify | Add images, title, FadeIn |
| `src/app/contact/page.tsx` | Modify | Photo path, title, FadeIn |
| `src/app/gallery/page.tsx` | Modify | Replace gallery images array |
| `src/app/faq/page.tsx` | Modify | FadeIn wrappers |
| `src/app/sitemap.ts` | Modify | Remove gallery entry |

---

### Task 1: Process and Add Photos

**Files:**
- Create: `public/images/ufr-1085.jpg` through `ufr-1825.jpg` (12 files)

- [ ] **Step 1: Install sharp and process photos**

Run this script to resize all 12 photos to max 1600px wide at quality 80:

```bash
npx sharp-cli --input "/Users/bigpoppa/Downloads/edits/030526_Unfiltered Rays1085.jpg" --output public/images/ufr-1085.jpg resize 1600 --withoutEnlargement --jpeg --quality 80
```

If `sharp-cli` isn't available, use this Node.js one-liner per file:

```bash
node -e "
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const files = [1085,1196,1241,1489,1545,1548,1622,1757,1777,1784,1808,1825];
(async () => {
  for (const n of files) {
    const input = path.join(process.env.HOME, 'Downloads/edits', '030526_Unfiltered Rays' + n + '.jpg');
    const output = path.join('public/images', 'ufr-' + n + '.jpg');
    await sharp(input).resize(1600, null, { withoutEnlargement: true }).jpeg({ quality: 80 }).toFile(output);
    const stat = fs.statSync(output);
    console.log(n + ': ' + (stat.size / 1024).toFixed(0) + 'KB');
  }
})();
"
```

Install sharp first if needed: `npm install --save-dev sharp`

- [ ] **Step 2: Verify photos exist and are reasonably sized**

```bash
ls -lh public/images/ufr-*.jpg
```

Expected: 12 files, each roughly 100–400KB.

- [ ] **Step 3: Commit**

```bash
git add public/images/ufr-*.jpg
git commit -m "feat: add optimized event photos from Jazmen's edits"
```

---

### Task 2: Quick Fixes — Gallery Nav, Event Type, Prices, SEO Titles

These are all small, independent single-line edits. Group them into one task.

**Files:**
- Modify: `src/lib/constants.ts`
- Modify: `src/app/sitemap.ts`
- Modify: `src/components/email-capture-form.tsx`
- Modify: `src/components/collection-cards.tsx`
- Modify: `src/app/about/page.tsx`
- Modify: `src/app/services/page.tsx`
- Modify: `src/app/contact/page.tsx`

- [ ] **Step 1: Remove Gallery from navLinks**

In `src/lib/constants.ts`, remove this line from the `navLinks` array:

```typescript
    { label: 'Gallery', href: '/gallery' },
```

The array should go: Home, About, Services, FAQ, Contact.

- [ ] **Step 2: Remove Gallery from sitemap**

In `src/app/sitemap.ts`, delete the entire gallery entry (the object with `url: \`\${SITE_CONFIG.url}/gallery\``).

- [ ] **Step 3: Add "Milestone / Anniversary" event type**

In `src/components/email-capture-form.tsx`, change the `EVENT_TYPES` array from:

```typescript
const EVENT_TYPES = [
  'Wedding',
  'Corporate Event',
  'Birthday Party',
  'Baby / Bridal Shower',
  'Holiday Party',
  'Other',
]
```

To:

```typescript
const EVENT_TYPES = [
  'Wedding',
  'Milestone / Anniversary',
  'Corporate Event',
  'Birthday Party',
  'Baby / Bridal Shower',
  'Holiday Party',
  'Other',
]
```

- [ ] **Step 4: Add "Starting at" to collection prices**

In `src/components/collection-cards.tsx`, change the price display line (around line 62) from:

```tsx
            {collection.price} &middot; {collection.duration}
```

To:

```tsx
            Starting at {collection.price} &middot; {collection.duration}
```

- [ ] **Step 5: Update SEO title tags**

In `src/app/about/page.tsx`, change:
```typescript
  title: 'About',
```
To:
```typescript
  title: 'About Us',
```

In `src/app/services/page.tsx`, change:
```typescript
  title: 'Services & Collections',
```
To:
```typescript
  title: 'Collections & Pricing',
```

In `src/app/contact/page.tsx`, change:
```typescript
  title: 'Contact',
```
To:
```typescript
  title: 'Inquire',
```

- [ ] **Step 6: Verify build**

```bash
npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 7: Commit**

```bash
git add src/lib/constants.ts src/app/sitemap.ts src/components/email-capture-form.tsx src/components/collection-cards.tsx src/app/about/page.tsx src/app/services/page.tsx src/app/contact/page.tsx
git commit -m "feat: hide gallery, add event type, starting-at prices, SEO titles"
```

---

### Task 3: Footer Updates

**Files:**
- Modify: `src/components/footer.tsx`

- [ ] **Step 1: Update service areas layout**

In `src/components/footer.tsx`, replace the service areas block. Change from:

```tsx
          <p className="text-sm text-desert-sand/40">
            {SITE_CONFIG.serviceAreas.join(' · ')}
          </p>
```

To:

```tsx
          <p className="text-sm text-desert-sand/40">
            Nashville · Murfreesboro · Clarksville
            <br />
            Franklin · Spring Hill · Lebanon
          </p>
```

- [ ] **Step 2: Update tagline font**

In `src/components/footer.tsx`, change the tagline paragraph class. Change from:

```tsx
            <p className="font-accent text-lg text-desert-glow/70">
```

To:

```tsx
            <p className="font-subheading text-base italic text-desert-glow/70">
```

- [ ] **Step 3: Commit**

```bash
git add src/components/footer.tsx
git commit -m "feat: footer service areas two-row layout, legible tagline font"
```

---

### Task 4: About Page — Remove Founder Section

**Files:**
- Modify: `src/app/about/page.tsx`

- [ ] **Step 1: Delete the third section**

In `src/app/about/page.tsx`, delete the entire third `<section>` block (lines 45–63). This is the section that contains:
- The founder photo (`brand-couple.jpg`)
- "Jazmen Howard — Founder" text
- "We'd love to be part of yours." italic line

The file should end with the closing `</>` right after the second section's closing `</section>` tag. The result:

```tsx
import type { Metadata } from 'next'
import { SectionDivider } from '@/components/section-divider'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet the team behind Unfiltered Rays Media Co. — an intentional photo booth experience for the moments that matter.',
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-desert-sand px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 font-heading text-5xl leading-tight text-espresso sm:text-6xl">
            We started this because moments matter.
          </h1>
        </div>
      </section>

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
    </>
  )
}
```

Also remove the `import Image from 'next/image'` on line 2 — it's no longer used.

- [ ] **Step 2: Verify build**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/app/about/page.tsx
git commit -m "feat: remove founder section from About page per client feedback"
```

---

### Task 5: Create FadeIn Component

**Files:**
- Create: `src/components/fade-in.tsx`

- [ ] **Step 1: Create the component**

Create `src/components/fade-in.tsx`:

```tsx
'use client'

import { useRef, useEffect, useState } from 'react'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function FadeIn({ children, className = '', delay = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/components/fade-in.tsx
git commit -m "feat: add FadeIn scroll animation component"
```

---

### Task 6: Update Photo Paths & Apply FadeIn — Home Page

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Add FadeIn import and update photo paths**

In `src/app/page.tsx`:

1. Add import at top:
```tsx
import { FadeIn } from '@/components/fade-in'
```

2. Update hero image `src` (line ~83):
```tsx
          src="/images/ufr-1085.jpg"
```

3. Update brand statement image `src` (line ~114):
```tsx
                src="/images/ufr-1808.jpg"
```

4. Update event types images in the `eventTypes` array (lines ~46-69):
```tsx
  {
    title: 'Weddings',
    copy: '...',
    image: '/images/ufr-1777.jpg',
    alt: 'Couple sharing a joyful moment at their wedding photo booth',
  },
  {
    title: 'Private Celebrations',
    copy: '...',
    image: '/images/ufr-1622.jpg',
    alt: 'Friends celebrating together at a private event',
  },
  {
    title: 'Corporate & Brand Activations',
    copy: '...',
    image: '/images/ufr-1757.jpg',
    alt: 'Professional portrait at a corporate brand activation',
  },
  {
    title: 'Milestone Events',
    copy: '...',
    image: '/images/ufr-1784.jpg',
    alt: 'Intimate toast at a milestone celebration',
  },
```

- [ ] **Step 2: Wrap sections in FadeIn**

Wrap the inner content of sections 2–5 (NOT the hero) in `<FadeIn>`. The hero (section 1) stays immediately visible.

For the **Brand Statement** section, wrap the grid:
```tsx
      <section className="bg-desert-sand/20 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* ... existing content ... */}
            </div>
            <SectionDivider className="mt-16" />
          </FadeIn>
        </div>
      </section>
```

For the **How It Works** section, wrap inner content:
```tsx
      <section className="bg-desert-sand/40 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="mb-16 ...">...</h2>
            <div className="grid gap-12 sm:grid-cols-3">
              {/* steps */}
            </div>
            <SectionDivider className="mt-16" />
          </FadeIn>
        </div>
      </section>
```

For the **Event Types** section, wrap inner content:
```tsx
      <section className="bg-desert-sand/20 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="mb-16 ...">...</h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {/* event cards */}
            </div>
          </FadeIn>
        </div>
      </section>
```

For the **Closing CTA** section, wrap inner content:
```tsx
      <section className="bg-espresso px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 ...>...</h2>
            <p ...>...</p>
            <CtaButton ...>...</CtaButton>
          </FadeIn>
        </div>
      </section>
```

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: update home page photos and add scroll animations"
```

---

### Task 7: Apply FadeIn & Photos — About, Services, FAQ, Contact

**Files:**
- Modify: `src/app/about/page.tsx`
- Modify: `src/app/services/page.tsx`
- Modify: `src/app/contact/page.tsx`
- Modify: `src/app/faq/page.tsx`

- [ ] **Step 1: About page — add FadeIn + photo**

In `src/app/about/page.tsx`:

1. Add imports:
```tsx
import Image from 'next/image'
import { FadeIn } from '@/components/fade-in'
```

2. Add an image to the story section (second section), right before the first `<p>` tag inside the `mx-auto max-w-3xl` div:
```tsx
          <FadeIn>
            <div className="relative mb-10 aspect-[4/3] overflow-hidden rounded">
              <Image
                src="/images/ufr-1825.jpg"
                alt="The Unfiltered Rays team sharing an unposed, joyful moment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 700px"
              />
            </div>
            <p className="mb-6 ...">...</p>
            <p className="mb-6 ...">...</p>
            <p className="mb-12 ...">...</p>
            <SectionDivider />
          </FadeIn>
```

- [ ] **Step 2: Services page — add FadeIn + images**

In `src/app/services/page.tsx`:

1. Add imports:
```tsx
import Image from 'next/image'
import { FadeIn } from '@/components/fade-in'
```

2. Add an image to the top section, right before the first `<p>` tag inside the `mx-auto max-w-3xl` div:
```tsx
          <div className="relative mb-10 aspect-[4/3] overflow-hidden rounded">
            <Image
              src="/images/ufr-1545.jpg"
              alt="The Unfiltered Rays photo booth setup"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 700px"
            />
          </div>
```

3. Add another image in the "What's Included" section, after the grid of items and before the SectionDivider:
```tsx
          <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded">
            <Image
              src="/images/ufr-1489.jpg"
              alt="Guests interacting with the photo booth"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1000px"
            />
          </div>
```

4. Wrap each section's inner content (sections 2–7, not the hero) in `<FadeIn>`.

- [ ] **Step 3: Contact page — update photo + add FadeIn**

In `src/app/contact/page.tsx`:

1. Add import:
```tsx
import { FadeIn } from '@/components/fade-in'
```

2. Change sidebar image src from:
```tsx
                  src="/images/contact-viewing.jpg"
```
To:
```tsx
                  src="/images/ufr-1808.jpg"
```

3. Wrap second section's inner content in `<FadeIn>`.

- [ ] **Step 4: FAQ page — add FadeIn**

In `src/app/faq/page.tsx`:

1. Add import:
```tsx
import { FadeIn } from '@/components/fade-in'
```

2. Wrap the accordion section's inner content in `<FadeIn>`:
```tsx
      <section className="bg-desert-sand/20 px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <FaqAccordion items={faqItems} />
          </FadeIn>
        </div>
      </section>
```

3. Wrap the closing CTA section's inner content in `<FadeIn>`:
```tsx
      <section className="bg-desert-sand/40 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <p className="mb-6 font-heading text-2xl text-espresso">
              Have a question we didn&rsquo;t cover?
            </p>
            <CtaButton href="/contact">Reach Out</CtaButton>
          </FadeIn>
        </div>
      </section>
```

- [ ] **Step 5: Verify build**

```bash
npm run build
```

- [ ] **Step 6: Commit**

```bash
git add src/app/about/page.tsx src/app/services/page.tsx src/app/contact/page.tsx src/app/faq/page.tsx
git commit -m "feat: add photos and scroll animations to About, Services, Contact, FAQ"
```

---

### Task 8: Update Gallery Images

**Files:**
- Modify: `src/app/gallery/page.tsx`

- [ ] **Step 1: Replace gallery images array**

In `src/app/gallery/page.tsx`, replace the entire `galleryImages` array with the new photos. Also update the `<Image>` component dimensions from `width={600} height={750}` to `width={800} height={600}` since the new photos are landscape-oriented (the CSS `w-full object-cover` handles display sizing regardless):

Replace the array:

```tsx
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
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/app/gallery/page.tsx
git commit -m "feat: update gallery with Jazmen's edited event photos"
```

---

### Task 9: Final Verification

- [ ] **Step 1: Full build check**

```bash
npm run build
```

- [ ] **Step 2: Lint check**

```bash
npm run lint
```

- [ ] **Step 3: Start dev server and manually verify all pages**

```bash
npm run dev
```

Use Playwright MCP to navigate each page and verify:
- Home: new photos loading, fade-in animations on scroll
- About: founder section removed, 1825 photo shows, fade-in works
- Services: 1545 + 1489 photos, "Starting at" on prices, fade-in works
- FAQ: fade-in on accordion and CTA
- Contact: 1808 photo, "Milestone / Anniversary" in dropdown, title is "Inquire | ..."
- Footer: two-row service areas, legible tagline font
- Nav: no Gallery link
- All page titles correct in browser tab
