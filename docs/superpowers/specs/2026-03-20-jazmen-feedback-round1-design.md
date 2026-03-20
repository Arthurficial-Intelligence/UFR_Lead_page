# Jazmen Feedback Round 1 — Design Spec

**Goal:** Implement Jazmen Howard's first round of client feedback on the Unfiltered Rays Media Co. website.

**Source:** Jazmen's iMessage feedback received 2026-03-20.

---

## 1. Photo Replacement

Replace placeholder/stock images with Jazmen's 12 edited event photos from `~/Downloads/edits/`.

### Processing

Original files are 12–26MB each. Resize and optimize before adding to the repo:
- Max width: 1600px (maintain aspect ratio)
- JPEG quality: 80
- Output to `public/images/` with clean filenames (e.g., `ufr-1085.jpg`)

### Placement Map

| Location | Photo | Why |
|---|---|---|
| Home — Hero background | 1085 | Editorial, intimate, great negative space for headline |
| Home — Brand Statement section | 1808 | Warm embrace, genuine, compositionally strong |
| Home — Event Types: Weddings | 1777 | Wedding context |
| Home — Event Types: Private Celebrations | 1622 | Playful group around booth |
| Home — Event Types: Corporate | 1757 | Most composed group shot |
| Home — Event Types: Milestones | 1784 | Milestone feel |
| About page — hero/story section | 1825 | Three laughing together, embodies "real, unposed" |
| Services page — top section | 1545 | Clean product/booth shot |
| Services page — lower detail | 1489 | Detail/interaction feel |
| Contact page — sidebar image | 1808 | Reuse same warm embrace shot from brand statement |
| Gallery page — full grid | All 12 | Lead with 1085, 1825, 1808 in first three positions |

### Files to modify
- `src/app/page.tsx` — update image paths in hero and event types
- `src/app/about/page.tsx` — update image path
- `src/app/services/page.tsx` — add images (currently has no images)
- `src/app/contact/page.tsx` — update existing sidebar image path (currently `contact-viewing.jpg`)
- `src/app/gallery/page.tsx` — replace entire `galleryImages` array

---

## 2. Home — Brand Mark (BLOCKED)

Jazmen requested the primary mark or word mark "unfiltered rays" in desert-sand color on the home page. **Blocked on receiving SVG/PNG asset from Jazmen.** No code changes until asset is provided.

---

## 3. Footer Changes

### 3a. Sun Mark (BLOCKED)

Jazmen requested a sun mark in desert-sand at the very bottom of the footer. **Blocked on receiving SVG/PNG asset from Jazmen.** No code changes until asset is provided.

### 3b. Service Areas Layout

**Current:** Single line — `Nashville · Murfreesboro · Clarksville · Franklin · Spring Hill · Lebanon`

**New:** Two balanced rows:
- Row 1: `Nashville · Murfreesboro · Clarksville`
- Row 2: `Franklin · Spring Hill · Lebanon`

This puts "Spring Hill" and "Lebanon" on the same line as Jazmen requested, and keeps 3 cities per row for visual balance.

**File:** `src/components/footer.tsx` — replace `{SITE_CONFIG.serviceAreas.join(' · ')}` with two explicit rows.

### 3c. Tagline Font

**Current:** `font-accent` (Cynthia June — decorative cursive script), hard to read at small sizes.

**New:** `font-subheading` (Inter) with `italic` styling. Legible but still has a softer feel.

**File:** `src/components/footer.tsx` — change class on the "Preserving the moment, as it is." paragraph from `font-accent text-lg` to `font-subheading text-base italic`.

---

## 4. Gallery — Hide from Navigation

Remove Gallery from site navigation until Jazmen has real event photos.

**Changes:**
- `src/lib/constants.ts` — remove `{ label: 'Gallery', href: '/gallery' }` from `navLinks`
- `src/app/sitemap.ts` — remove the `/gallery` entry
- Keep `src/app/gallery/page.tsx` intact — the route exists but is unlisted

**Reversibility:** To restore, add the navLink entry back and re-add to sitemap. Zero code changes to the gallery page itself.

---

## 5. About — Delete Founder Section

Remove the entire third `<section>` on the About page — the one containing the founder photo (`brand-couple.jpg`), "Jazmen Howard — Founder" text, and the closing italic line "We'd love to be part of yours."

Jazmen's reason: "It's a little awkward and doesn't list Tyler and my co-founder."

The About page will end after the brand story section (second `<section>`).

**File:** `src/app/about/page.tsx` — delete lines ~45–63 (the third section).

---

## 6. Services — "Starting at" Prices

Add "Starting at" prefix to collection prices since they can vary upward.

**Current:** `$795 · 3 hours of booth time`
**New:** `Starting at $795 · 3 hours of booth time`

Apply to all three collections (Gathered, Evening, Curated).

**File:** `src/components/collection-cards.tsx` — change the price display line to prepend "Starting at".

---

## 7. Contact Form — Add Event Type

Add "Milestone / Anniversary" to the event type dropdown.

**Current list:** Wedding, Corporate Event, Birthday Party, Baby / Bridal Shower, Holiday Party, Other

**New list:** Wedding, Milestone / Anniversary, Corporate Event, Birthday Party, Baby / Bridal Shower, Holiday Party, Other

Placed after "Wedding" since milestone events are a core offering.

**File:** `src/components/email-capture-form.tsx` — add to `EVENT_TYPES` array.

---

## 8. Scroll Fade-In Animations

Create a lightweight `<FadeIn>` client component for scroll-triggered entrance animations.

### Component: `src/components/fade-in.tsx`

- Uses `IntersectionObserver` via a `useRef` + `useEffect` hook
- Wraps children in a `<div>` that starts with `opacity-0 translate-y-6`
- When the element enters the viewport (threshold ~0.15), adds `opacity-100 translate-y-0`
- CSS transition: `transition-all duration-700 ease-out`
- Triggers once (unobserves after first intersection)
- Accepts optional `className` and `delay` props for staggering

### Application

Wrap major content blocks on all pages:
- Home: each of the 5 sections' inner content
- About: each section's inner content
- Services: each section's inner content
- FAQ: header + accordion
- Contact: header + form area

Do NOT animate the navbar, footer, or hero section (hero should be immediately visible).

Skip Gallery (hidden), Privacy Policy, and Terms of Use (legal pages don't need polish animations).

---

## 9. SEO Title Tags

Update `metadata.title` on each page to match Jazmen's requested titles.

| Page | Current `title` | New `title` |
|---|---|---|
| About | `"About"` | `"About Us"` |
| Services | `"Services & Collections"` | `"Collections & Pricing"` |
| FAQ | `"FAQ"` | `"FAQ"` (unchanged) |
| Contact | `"Contact"` | `"Inquire"` |

These combine with the layout template `%s | Unfiltered Rays Media Co.` to produce:
- "About Us | Unfiltered Rays Media Co."
- "Collections & Pricing | Unfiltered Rays Media Co."
- "FAQ | Unfiltered Rays Media Co."
- "Inquire | Unfiltered Rays Media Co."

**Files:** `src/app/about/page.tsx`, `src/app/services/page.tsx`, `src/app/contact/page.tsx`

---

## Blocked Items Summary

These items require assets from Jazmen before implementation:

1. **Home page brand mark** — needs primary mark or word mark SVG/PNG
2. **Footer sun mark** — needs sun mark SVG/PNG

All other items (1, 3b, 3c, 4, 5, 6, 7, 8, 9) can proceed immediately.

---

## Verification

After implementation:
1. `npm run build` — ensure no TypeScript/build errors
2. `npm run dev` — visual check of all pages
3. Manual browser verification (using Playwright MCP to navigate and screenshot) of each page for:
   - New photos loading correctly and sized appropriately
   - Gallery link absent from nav and footer
   - About page no longer shows founder section
   - Collection cards show "Starting at" prefix
   - Contact form dropdown includes "Milestone / Anniversary"
   - Fade-in animations trigger on scroll
   - Page titles correct in browser tab
   - Footer service areas split across two rows
   - Footer tagline in legible font
