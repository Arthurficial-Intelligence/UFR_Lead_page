# Unfiltered Rays Media Co. — Full Site Build Design Spec

**Date:** 2026-03-16
**Client:** Jazmen Howard
**Source of truth:** Jazmen's Master Website Copy & Brand Voice Guide (March 2026)

---

## Overview

Rebuild the Unfiltered Rays single-page lead gen site into a multi-page marketing site with 9 total routes. All copy comes verbatim from Jazmen's brand guide. The existing tech stack (Next.js 16, App Router, Tailwind v4, Supabase, Resend, PostHog) is preserved. Google Analytics (GA4) is added.

## Routes

| Route | Page | In Main Nav? | Indexed? |
|---|---|---|---|
| `/` | Home | Yes | Yes |
| `/about` | About | Yes | Yes |
| `/services` | Services & Collections | Yes | Yes |
| `/gallery` | Gallery | Yes | Yes |
| `/faq` | FAQ | Yes | Yes |
| `/contact` | Contact / Inquiry | Yes | Yes |
| `/privacy-policy` | Privacy Policy | No (footer only) | No |
| `/terms-of-use` | Terms of Use | No (footer only) | No |
| `/thank-you` | Post-submission confirmation | No | No |

## Shared Components

### Navbar

- **Desktop:** Brand name/logo left, nav links center-right (Home, About, Services, Gallery, FAQ, Contact), "Inquire" CTA button far right linking to `/contact`
- **Mobile:** Hamburger icon triggers slide-out or dropdown menu with all links
- **Style:** Sticky on scroll. Espresso background, desert-sand text. CTA button: desert-sand bg, espresso text, max 4px border-radius
- **Data:** Reads from `SITE_CONFIG.navLinks`

### Footer

- **Layout:** 3-column on desktop (brand+tagline left, nav links center, contact right), stacked on mobile
- **Content:**
  - Brand: "Unfiltered Rays Media Co." + tagline "Preserving the moment, as it is."
  - Nav: Home · About · Services · Gallery · FAQ · Contact
  - Contact: hello@unfilteredrays.com · @unfilteredraysmediaco (linked to Instagram)
  - Service areas: Nashville, Murfreesboro, Clarksville, Franklin, Spring Hill, Lebanon
  - Legal row: Privacy Policy · Terms of Use (links to respective pages)
  - Copyright: © 2026 Unfiltered Rays Media Co. All rights reserved.

### CTA Button

- Reusable component for consistent styling across pages
- Espresso (#5A3A2A) background, desert-sand (#E1D6C0) text
- Max 4px border-radius, no drop shadows
- Accepts `href`, `children`, optional `variant` (inverted for dark backgrounds)

### Section Divider

- Decorative motif between major page sections (carry over existing pattern)

## Page Designs

### Home (`/`)

Full rebuild replacing current 12-section page with 5 focused sections:

**1. Hero**
- Full-bleed warm candid image (reuse `hero-couple.jpg`)
- Subtle logo/monogram overlay
- Headline: "The moment, held."
- Subheadline: "A refined photo booth experience for weddings, celebrations, and the gatherings that matter most."
- CTA: "Inquire" → `/contact`

**2. Brand Statement**
- Two-column: large editorial image left (`positioning-moment.jpg`), text right
- Heading: "Gathered. Real. Yours."
- Copy: "Some moments are too good to let slip by unnoticed..." (from Jazmen's guide)

**3. How It Works**
- Three steps, horizontal on desktop, stacked on mobile
- Heading: "A seamless addition to your celebration."
- Step 1: Reserve your date
- Step 2: Design your experience
- Step 3: Arrive and enjoy
- Brief copy under each per Jazmen's guide

**4. Event Types**
- Grid or two-column card layout with images, no icons
- Heading: "Every gathering deserves to be remembered."
- Cards: Weddings, Private Celebrations, Corporate & Brand Activations, Milestone Events
- 1-2 lines copy each per Jazmen's guide

**5. Closing CTA**
- Full-width warm background (desert-sand or espresso)
- Heading: "Your date is waiting."
- Copy about limited seasonal availability
- CTA: "Submit an Inquiry" → `/contact`

### About (`/about`)

**1. Hero/Headline:** "We started this because moments matter."

**2. Brand Story:** Three paragraphs from Jazmen's copy about real photos, the intentional team, working with people who value authenticity.

**3. Founders:** Warm candid photo (placeholder for now). "Jazmen Howard — Co-Founder" and "[Co-Founder Name] — Co-Founder". First names and roles only.

**4. Closing:** "We'd love to be part of yours."

### Services & Collections (`/services`)

**1. Intro:** "Considered experiences, designed for your day." + paragraph about the promise and Nashville availability.

**2. What's Included:** Clean grid/list of 12 items included in every collection. Styled icons or brand illustrations, not checkmarks.

**3. Three Private Collections — equal-weight cards, side by side (stacked mobile):**

| Collection | Price | Duration | Tagline |
|---|---|---|---|
| The Gathered Collection | $795 | 3 hours | For the people worth slowing down for. |
| The Evening Collection | $1,050 | 3 hours | Refined. Considered. Unhurried. |
| The Curated Collection | $1,350 | 4 hours | Every detail, designed with intention. |

Each card: name, price, duration, tagline, description, "What's Included" details. Evening and Curated show additive items ("Everything in [previous], plus:").

**Important framing rules:**
- Gathered is complete, never "entry-level"
- Never use "tier", "level", or "plan" — always "collection"
- Never use "smoothing" for AI finish — use "polished finish" or "glam-ready output"

**4. The Canvas Collection — own section, contrasting background (espresso or sky):**
- "Your brand. Your moment. Built together."
- Pricing upon inquiry · Custom duration
- Copy about corporate/brand activations
- Who it's for: product launches, holiday parties, experiential marketing, conferences
- CTA: "Let's Talk About Your Event" → `/contact`

**5. Fine Print:** Add-on hours ($150/hr), mileage ($0.70/mi beyond 50mi), contract/retainer. Small, muted almond text.

**6. Closing CTA:** "Not sure which collection fits your event?" → "Submit an Inquiry"

### Gallery (`/gallery`)

- Headline: "Moments we've been trusted to hold."
- Optional subhead: "A selection of experiences from our recent gatherings."
- Masonry or two-column grid of curated images from `/public/images/`
- Warm, candid images only. No further body copy.
- Quiet closing CTA: "Ready to add your story to ours? Inquire here." → `/contact`

### FAQ (`/faq`)

- Headline: "A few things people like to know."
- Accordion-style: 9 Q&A pairs from Jazmen's guide
- Questions in heading font, answers in body font
- All copy verbatim from brand guide

Questions covered:
1. What types of events do you serve?
2. How far in advance should I book?
3. What's included in every collection?
4. Can I customize my overlay or backdrop?
5. Do you travel for events?
6. Can I add more time to my collection?
7. What if I need to cancel or reschedule?
8. How do guests receive their digital photos?
9. What does the experience actually look like at my event?

### Contact (`/contact`)

- Headline: "Let's talk about your gathering."
- Intro: "We'd love to hear about your event. Fill out the form below and a member of our team will be in touch within 2 business days."
- Reuse existing `ContactForm` component (name, email, phone, event type, event date, message)
- Warm image as side panel or background
- Below form: "Prefer to reach us directly?" + hello@unfilteredrays.com + @unfilteredraysmediaco
- No phone number

### Privacy Policy (`/privacy-policy`)

- Long-form text page with Jazmen's legal copy
- All email references updated to hello@unfilteredrays.com
- All Instagram references updated to @unfilteredraysmediaco
- Effective date: April 1, 2026
- `robots: { index: false }` in metadata
- Not in main nav, linked from footer

### Terms of Use (`/terms-of-use`)

- Same structure as Privacy Policy
- Jazmen's legal copy with updated contact info
- `robots: { index: false }` in metadata
- Not in main nav, linked from footer

## Google Analytics Integration

- GA4 property ID: `G-ZW8NWPXGTX`
- Add via `@next/third-parties/google` package (`GoogleAnalytics` component in layout) or Script tag
- Alongside existing PostHog — both analytics systems coexist

## Contact Info Updates

All references site-wide updated to:
- Email: hello@unfilteredrays.com
- Instagram: @unfilteredraysmediaco (URL: https://www.instagram.com/unfilteredraysmediaco)
- No phone number anywhere on site

**Note for Jazmen:** Legal docs (Privacy Policy, Terms of Use) originally referenced unfilteredrays@gmail.com and @unfilteredraysmedia. These have been updated to match the correct contact info. Confirm with Jazmen in morning meeting.

## Constants Updates

`SITE_CONFIG.navLinks` updated to match route structure:
```
Home → /
About → /about
Services → /services
Gallery → /gallery
FAQ → /faq
Contact → /contact
```

## Brand Voice Rules (Reference)

From Jazmen's guide — apply when writing any UI microcopy:
- Warm but elevated, intimate & intentional, quietly confident, human & unposed
- Use: gathered, held, witnessed, felt, remembered, quiet, warm, genuine, intimate, considered, refined
- Avoid: fun, luxury, amazing, stunning, beautiful, unforgettable, "your big day", photo booth (say "the experience"), tier/level/plan (say "collection")

## Files to Create/Modify

**New files:**
- `src/components/navbar.tsx` — Responsive navigation
- `src/components/footer.tsx` — Site footer
- `src/components/cta-button.tsx` — Reusable CTA
- `src/app/about/page.tsx`
- `src/app/services/page.tsx`
- `src/app/gallery/page.tsx`
- `src/app/faq/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/privacy-policy/page.tsx`
- `src/app/terms-of-use/page.tsx`

**Modified files:**
- `src/app/page.tsx` — Full rewrite with Jazmen's home page copy
- `src/app/layout.tsx` — Add Navbar, Footer, Google Analytics
- `src/lib/constants.ts` — Update navLinks routes, remove phone references
- `src/components/collections-dropdown.tsx` — Update to new collection names/pricing or replace
- `src/components/email-capture-form.tsx` — Update event types if needed, remove phone field display issues

**Deleted/deprecated:**
- Nothing deleted — existing files are modified in place
