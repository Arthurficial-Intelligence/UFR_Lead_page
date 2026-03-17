# Unfiltered Rays Media Co. — Full Site Build Design Spec

**Date:** 2026-03-16
**Client:** Jazmen Howard
**Source of truth:** Jazmen's Master Website Copy & Brand Voice Guide (March 2026)

---

## Overview

Rebuild the Unfiltered Rays single-page lead gen site into a multi-page marketing site with 9 total routes. All copy comes verbatim from Jazmen's brand guide (embedded below where needed). The existing tech stack (Next.js 16, App Router, Tailwind v4, Supabase, Resend, PostHog) is preserved. Google Analytics (GA4) is added.

## Routes

| Route | Page | In Main Nav? | Indexed? | Has Nav/Footer? |
|---|---|---|---|---|
| `/` | Home | Yes | Yes | Yes |
| `/about` | About | Yes | Yes | Yes |
| `/services` | Services & Collections | Yes | Yes | Yes |
| `/gallery` | Gallery | Yes | Yes | Yes |
| `/faq` | FAQ | Yes | Yes | Yes |
| `/contact` | Contact / Inquiry | Yes | Yes | Yes |
| `/privacy-policy` | Privacy Policy | No (footer only) | No | Yes |
| `/terms-of-use` | Terms of Use | No (footer only) | No | Yes |
| `/thank-you` | Post-submission confirmation | No | No | Yes (minimal — no CTA in nav) |

## Per-Page SEO Metadata

Each page exports Next.js `metadata` using the existing `%s | Unfiltered Rays Media Co.` title template:

| Route | Title | Description |
|---|---|---|
| `/` | Home | Intentional, refined photo experiences for weddings and elevated events in Nashville. Preserving the moment, as it is. |
| `/about` | About | Meet the team behind Unfiltered Rays Media Co. — an intentional photo booth experience for the moments that matter. |
| `/services` | Services & Collections | Explore our collections — thoughtfully designed photo booth experiences for weddings, celebrations, and brand activations in Nashville. |
| `/gallery` | Gallery | A selection of warm, candid moments from recent Unfiltered Rays gatherings. |
| `/faq` | FAQ | Common questions about booking, collections, customization, and what to expect from an Unfiltered Rays experience. |
| `/contact` | Contact | Reach out to reserve your date or learn more about Unfiltered Rays photo booth experiences in Nashville. |
| `/privacy-policy` | Privacy Policy | (noindex) |
| `/terms-of-use` | Terms of Use | (noindex) |
| `/thank-you` | Thank You | (noindex) |

## Sitemap & Robots

The existing `src/app/sitemap.ts` and `src/app/robots.ts` must be updated to include all new indexed routes (`/about`, `/services`, `/gallery`, `/faq`, `/contact`). Legal pages and `/thank-you` remain excluded.

## Shared Components

### Navbar

- **Desktop:** Brand name/logo left, nav links center-right (Home, About, Services, Gallery, FAQ, Contact), "Inquire" CTA button far right linking to `/contact`
- **Mobile:** Hamburger icon triggers a dropdown overlay menu with all links + "Inquire" CTA
- **Style:** Sticky on scroll. Espresso background, desert-sand text.
- **Data:** Reads from `SITE_CONFIG.navLinks`
- **File:** `src/components/navbar.tsx` (client component for mobile toggle state)

### Footer

- **Layout:** 3-column on desktop (brand+tagline left, nav links center, contact right), stacked on mobile
- **Content:**
  - Brand: "Unfiltered Rays Media Co." + tagline "Preserving the moment, as it is."
  - Nav: Home · About · Services · Gallery · FAQ · Contact
  - Contact: hello@unfilteredrays.com · @unfilteredraysmediaco (linked to Instagram)
  - Service areas: Nashville, Murfreesboro, Clarksville, Franklin, Spring Hill, Lebanon
  - Legal row: Privacy Policy · Terms of Use (links to respective pages)
  - Copyright: © 2026 Unfiltered Rays Media Co. All rights reserved.
- **File:** `src/components/footer.tsx` (server component)

### CTA Button

- Reusable component for consistent styling across pages
- **Default variant:** Espresso (#5A3A2A) background, desert-sand (#E1D6C0) text — used on light backgrounds (most pages)
- **Inverted variant:** Desert-sand bg, espresso text — used in the navbar and on dark/espresso background sections
- Max 4px border-radius, no drop shadows
- Accepts `href`, `children`, `variant?: 'default' | 'inverted'`
- **File:** `src/components/cta-button.tsx`

### Section Divider

- Decorative motif between major page sections (carry over existing pattern from current page.tsx)

## Page Designs

### Home (`/`)

Full rewrite replacing current page. The current `page.tsx` references `SITE_CONFIG.contact.phone` in 3 places (JSON-LD line 13, contact section line 498, footer line 553) — all removed in the rewrite. The inline footer and contact section are also removed since those move to shared components.

**1. Hero**
- Full-bleed warm candid image (reuse `hero-couple.jpg`)
- Subtle logo/monogram overlay
- Headline: "The moment, held."
- Subheadline: "A refined photo booth experience for weddings, celebrations, and the gatherings that matter most."
- CTA: "Inquire" → `/contact` (default espresso button)

**2. Brand Statement**
- Two-column: large editorial image left (`positioning-moment.jpg`), text right
- Heading: "Gathered. Real. Yours."
- Copy:
  > Some moments are too good to let slip by unnoticed. At Unfiltered Rays, we create space for your guests to slow down — to laugh, connect, and leave with something tangible from the night.
  >
  > We're not here to add noise to your event. We're here to add warmth.

**3. How It Works**
- Three steps, horizontal on desktop, stacked on mobile
- Heading: "A seamless addition to your celebration."
- Step 1 — Reserve your date: "Reach out and tell us about your event. We'll confirm availability and walk you through the collections."
- Step 2 — Design your experience: "Choose your backdrop, overlay, and styling details. We handle every element so you don't have to."
- Step 3 — Arrive and enjoy: "Our team sets up before your guests arrive and stays present throughout. You celebrate. We take care of the rest."

**4. Event Types**
- Grid or two-column card layout with images, no icons
- Heading: "Every gathering deserves to be remembered."
- Weddings: "An intimate addition to your reception — giving guests a printed keepsake and a reason to linger a little longer."
- Private Celebrations: "Birthdays, anniversaries, baby showers, graduations. The milestones that call for something more than a camera phone."
- Corporate & Brand Activations: "We bring the same warmth and refinement to brand experiences — helping your guests connect with your brand in a way that feels human."
- Milestone Events: "The moments worth marking. We make sure the day exists beyond the memory."

**5. Closing CTA**
- Full-width warm background (desert-sand or espresso)
- Heading: "Your date is waiting."
- Copy: "We take a limited number of events each season to ensure every experience gets our full attention. Reach out to check availability."
- CTA: "Submit an Inquiry" → `/contact`

**JSON-LD structured data:** Carry over LocalBusiness schema from current page, updated with correct contact info. Remove `telephone` field entirely (no phone). Keep `email`, `address`, `url`.

### About (`/about`)

**1. Hero/Headline:** "We started this because moments matter."

**2. Brand Story:**
> Unfiltered Rays Media Co. was built around a simple belief: the best photos are the ones that actually look like you. Not the posed version. Not the camera-ready version. The real one — mid-laugh, leaning in, completely present.
>
> We're a small, intentional team that brings a calm, elevated photo booth experience to the events we care about most. Every setup is thoughtfully designed. Every interaction is warm. And every photo is a piece of the day, exactly as it happened.
>
> We work with couples, families, and brands who understand the difference between documentation and memory-making. If you're here, you probably do too.

**3. Founders:**
- Warm candid photo — **TODO: Jazmen to provide founder photo. Use placeholder image for now.**
- "Jazmen Howard — Co-Founder"
- **TODO: Co-founder name TBD — use "[Co-Founder Name] — Co-Founder" as placeholder until Jazmen confirms.**

**4. Closing:** "We'd love to be part of yours."

### Services & Collections (`/services`)

**1. Intro:** "Considered experiences, designed for your day."
> Every Unfiltered Rays collection is built around the same promise — a seamless, beautiful experience that your guests will actually remember. We handle setup, styling, and takedown so you can be fully present.
>
> Collections are available for weddings, private celebrations, milestones, and corporate brand activations in Nashville and surrounding areas.

**2. What's Included in Every Collection:**

Display as a clean grid or icon list (styled icons or brand illustrations, not checkmarks):

1. Handcrafted wooden booth with high-powered mirrorless/DSLR camera
2. Professional studio lighting
3. On-site printed photo strips throughout your event
4. Unlimited digital photos with full online gallery
5. Instant sharing via text and email — no app required
6. GIFs and boomerang capability
7. Personalized photo overlay (name, date, and event details)
8. Curated backdrop selection
9. Thoughtfully styled props
10. Custom welcome screen
11. Dedicated on-site attendant for the full rental period
12. Delivery, full setup, and breakdown — Nashville and surrounding areas

**3. Three Private Collections — equal-weight cards, side by side (stacked mobile):**

The existing `collections-dropdown.tsx` accordion component is **deleted and replaced** with a new `src/components/collection-cards.tsx` component that renders equal-weight cards.

**The Gathered Collection** — $795 · 3 hours of booth time
> For the people worth slowing down for.
>
> Our most-loved experience, and the clearest expression of what we do. Designed for weddings, birthday celebrations, anniversaries, and any gathering where the people in the room are the whole point. Every detail is handled. Every guest leaves with something real in their hands.
>
> This collection includes everything listed above — a complete, warmly considered experience with nothing missing and nothing superfluous.

What's Included:
- Personalized overlay design, tailored to your event
- Standard backdrop from our curated selection
- Classic color photo output
- Standard photo strip prints

**The Evening Collection** — $1,050 · 3 hours of booth time
> Refined. Considered. Unhurried.
>
> Everything in The Gathered Collection, elevated for your most polished occasions. Designed for upscale receptions, milestone celebrations, and hosts who want the finer details to feel exactly right. The same warmth, the same presence — with a more refined finish throughout.

What's Included (everything in Gathered, plus):
- Premium backdrop upgrade — elevated materials and finishes
- Premium pearl print upgrade — a richer, more luxurious photo strip
- AI-enhanced photo finish — a polished, glam-ready output for every guest
- Choice of color, black & white, or sepia photo output

**The Curated Collection** — $1,350 · 4 hours of booth time
> Every detail, designed with intention.
>
> Our most comprehensive experience, built for those who want full creative control. Extends your rental by an additional hour and unlocks complete bespoke design — from a fully custom overlay crafted around your event aesthetic, to a custom back screen that makes every photo feel made for this moment specifically.
>
> If you've been saving inspiration for months, this one's for you.

What's Included (everything in Evening, plus):
- One additional hour of booth time — 4 hours total
- Fully bespoke overlay design — built from scratch around your event, not pulled from a template
- Custom back screen design — a fully branded experience from the moment guests approach

**Important framing rules:**
- Gathered is complete, never "entry-level" — never position it as lesser
- Never use "tier", "level", or "plan" — always "collection"
- Never use "smoothing" for AI finish — use "polished finish" or "glam-ready output"

**4. The Canvas Collection — own section, contrasting espresso background:**

Heading: "Your brand. Your moment. Built together."
Pricing upon inquiry · Custom duration

> Designed for corporate clients, brand activations, and experiential marketing moments. The Canvas Collection is fully bespoke — we work directly with your team to design a photo booth experience that feels native to your brand, not like a vendor add-on.
>
> Whether you're launching a product, hosting a client appreciation event, or building a social-worthy activation, we bring the same warmth and intention that defines every Unfiltered Rays experience — built entirely around your audience.

Who it's for: Product launches and brand activations · Corporate holiday parties and client appreciation events · Experiential marketing campaigns · Conferences, retreats, and team events

CTA: "Let's Talk About Your Event" → `/contact` (inverted button variant on dark bg)

**5. Fine Print:**
> Additional hours may be added to any collection at $150 per hour. A mileage fee of $0.70 per mile applies to events outside a 50-mile radius of Nashville, TN. All bookings are subject to a signed contract and retainer.

Small, muted almond-colored text. Present but not prominent.

**6. Closing CTA:**
> Not sure which collection fits your event?
> Reach out and tell us about your gathering. We'll help you find the right fit.

CTA: "Submit an Inquiry" → `/contact`

### Gallery (`/gallery`)

- Headline: "Moments we've been trusted to hold."
- Optional subhead: "A selection of experiences from our recent gatherings."
- Masonry or two-column grid of images
- **Image selection:** Use these from `/public/images/` — prioritize warm, candid, people-first images. Exclude product-only and stark shots. Curate ~12-16 of the best. Exact selection is an implementation decision.
- No further body copy.
- Quiet closing CTA: "Ready to add your story to ours? Inquire here." → `/contact`

### FAQ (`/faq`)

- Headline: "A few things people like to know."
- Accordion-style (client component for toggle state): questions in heading font, answers in body font
- All 9 Q&A pairs with verbatim copy:

**Q: What types of events do you serve?**
A: We specialize in weddings, private celebrations, milestone events, and corporate brand activations. If you have a gathering that deserves to be remembered, we'd love to hear about it.

**Q: How far in advance should I book?**
A: We recommend reaching out at least 8–12 weeks before your event, especially during peak wedding and holiday seasons. We take a limited number of events each season to give every experience our full attention.

**Q: What's included in every collection?**
A: Every collection includes a handcrafted wooden booth, professional studio lighting, on-site printed photo strips, unlimited digital photos with a full online gallery, instant sharing via text and email, GIFs and boomerangs, a personalized photo overlay, curated backdrop selection, styled props, a custom welcome screen, a dedicated on-site attendant, and full setup and breakdown. The difference between collections is duration, print quality, and customization depth.

**Q: Can I customize my overlay or backdrop?**
A: Yes — customization is part of our process. During booking we'll work with you to design an overlay that fits your event aesthetic and select a backdrop that complements your venue. Our Curated Collection includes a fully bespoke overlay and custom back screen designed from scratch.

**Q: Do you travel for events?**
A: We're based in Nashville, TN, and serve the surrounding area within a 50-mile radius. Events beyond that radius are welcome — a mileage fee of $0.70 per mile applies. Reach out and we'll work out the details.

**Q: Can I add more time to my collection?**
A: Yes. Additional hours may be added to any collection at $150 per hour. Just let us know when you inquire and we'll include it in your proposal.

**Q: What if I need to cancel or reschedule?**
A: Life happens. Our rescheduling and cancellation policies are outlined in your contract at the time of booking. We're always happy to work with you when circumstances change.

**Q: How do guests receive their digital photos?**
A: Immediately after each session, guests receive a link via text or email to download and share their photos. No app required.

**Q: What does the experience actually look like at my event?**
A: We arrive early, set up completely before your guests arrive, and stay present throughout the rental period. Our team is warm, unobtrusive, and there to make the experience feel effortless. When the event ends, we pack up quietly so you never have to think about it.

### Contact (`/contact`)

- Headline: "Let's talk about your gathering."
- Intro: "We'd love to hear about your event. Fill out the form below and a member of our team will be in touch within 2 business days."
- Warm image as side panel or background (reuse `contact-viewing.jpg`)
- **Form:** Reuse existing `ContactForm` from `src/components/email-capture-form.tsx`
  - Fields: Name, Email, Phone, Event Type, Event Date, Message (max 6 fields per Jazmen's spec)
  - Phone field is for the *visitor's* phone number (lead capture), not the business phone. This stays.
  - On success: show inline "Thank You!" message (existing behavior). The `/thank-you` route remains available as an alternative landing page but the form does not redirect to it.
- Below form: "Prefer to reach us directly?" + hello@unfilteredrays.com + @unfilteredraysmediaco
- No business phone number displayed

### Privacy Policy (`/privacy-policy`)

- Long-form text page with Jazmen's legal copy (full text in brand guide, Document 1)
- All email references updated from `unfilteredrays@gmail.com` to `hello@unfilteredrays.com`
- All Instagram references updated from `@unfilteredraysmedia` to `@unfilteredraysmediaco`
- Effective date: April 1, 2026
- `robots: { index: false }` in metadata
- Not in main nav, linked from footer only

### Terms of Use (`/terms-of-use`)

- Same structure as Privacy Policy
- Jazmen's legal copy (full text in brand guide, Document 2) with same contact info corrections
- `robots: { index: false }` in metadata
- Not in main nav, linked from footer only

## Google Analytics Integration

- GA4 property ID stored as env var: `NEXT_PUBLIC_GA_ID=G-ZW8NWPXGTX`
- Add to `.env.example` and `.env.local`
- Implement via `@next/third-parties/google` package (`GoogleAnalytics` component) in `layout.tsx`
- Coexists alongside PostHog — both analytics systems active

## Environment Variables

Add to `.env.example`:
```
NEXT_PUBLIC_GA_ID=G-ZW8NWPXGTX
```

Existing vars unchanged:
```
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=
NEXT_PUBLIC_SITE_URL=
```

## Contact Info Updates

All references site-wide updated to:
- Email: hello@unfilteredrays.com
- Instagram: @unfilteredraysmediaco (URL: https://www.instagram.com/unfilteredraysmediaco)
- No business phone number anywhere on site

**Note for Jazmen:** Legal docs originally referenced unfilteredrays@gmail.com and @unfilteredraysmedia. Updated to match correct info. Confirm in morning meeting.

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
- `src/components/navbar.tsx` — Responsive navigation (client component)
- `src/components/footer.tsx` — Site footer (server component)
- `src/components/cta-button.tsx` — Reusable CTA button with default/inverted variants
- `src/components/collection-cards.tsx` — Equal-weight collection cards for Services page
- `src/components/faq-accordion.tsx` — Accordion Q&A component (client component)
- `src/app/about/page.tsx`
- `src/app/services/page.tsx`
- `src/app/gallery/page.tsx`
- `src/app/faq/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/privacy-policy/page.tsx`
- `src/app/terms-of-use/page.tsx`

**Modified files:**
- `src/app/page.tsx` — Full rewrite with Jazmen's home page copy; removes all phone references and inline footer/contact
- `src/app/layout.tsx` — Add Navbar, Footer (shared), Google Analytics component
- `src/lib/constants.ts` — Update navLinks routes
- `src/app/sitemap.ts` — Add new indexed routes
- `src/app/robots.ts` — Verify new routes are covered
- `.env.example` — Add `NEXT_PUBLIC_GA_ID`

**Deleted files:**
- `src/components/collections-dropdown.tsx` — Replaced by `collection-cards.tsx` with new names, pricing, and card layout

## Open TODOs (Blocked on Jazmen)

1. **Co-founder name** for About page — placeholder until confirmed
2. **Founder photo** for About page — placeholder image until provided
3. **Confirm legal doc contact info change** — updated from gmail to hello@ email
