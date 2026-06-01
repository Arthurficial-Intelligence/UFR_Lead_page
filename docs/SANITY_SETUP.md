# Sanity CMS — Setup Guide (for the developer)

This site uses [Sanity](https://www.sanity.io) as its content management system
so the client can edit copy and photos themselves — no code, no deploys.

**Key design point:** the site works with *or without* Sanity. If the Sanity
environment variables are not set, the site renders the built-in default content
(`src/content/defaults.ts`). Nothing breaks during setup. Once you complete the
steps below, Sanity content takes over automatically.

---

## What the client can edit

Everything visible on these pages, via a friendly editor at `/studio`:

- **Site Settings** — business name, tagline, contact email, Instagram, service areas
- **Home Page** — hero, brand statement, "how it works" steps, event types, closing
- **About / Services / FAQ / Gallery / Contact** — all copy and all photos

Things that stay in code (SEO metadata, page structure, navigation links, legal
pages) live in `src/lib/constants.ts` and the page files.

---

## One-time setup (~15 minutes)

### 1. Create a Sanity project

1. Go to <https://www.sanity.io> and sign up (free tier is plenty).
2. Create a new project. Name it "Unfiltered Rays".
3. Create a dataset called `production` (public).
4. Copy the **Project ID** from <https://www.sanity.io/manage>.

### 2. Set environment variables

Add these to `.env.local` (and to Vercel's project settings for production):

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=<your project id>
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-10-01

# Only for the one-time seed below — a token with Editor/write access.
# Create at: Manage → API → Tokens. Do NOT add this one to Vercel.
SANITY_API_WRITE_TOKEN=<write token>

# Make up any random string; reused in step 5 for instant publishing.
SANITY_REVALIDATE_SECRET=<random string>
```

### 3. Seed the current content + images

This pushes everything currently on the site (all copy and all photos in
`public/images`) into Sanity, so the client starts from exactly what's live:

```bash
npm run seed
```

Run it once. It uploads images and creates the page documents. (Safe to re-run,
but it re-uploads images, so only do so intentionally.)

### 4. Allow the Studio to talk to Sanity (CORS)

Add your domains as CORS origins so the embedded Studio can log in:

```bash
npx sanity cors add http://localhost:3000 --credentials
npx sanity cors add https://unfilteredrays.com --credentials
```

(Or do it in the UI: Manage → API → CORS Origins.)

### 5. (Optional) Instant publishing webhook

Without this, edits appear on the live site within ~60 seconds (ISR). With it,
they appear immediately.

1. In Sanity: **Manage → API → Webhooks → Create webhook**.
2. URL: `https://unfilteredrays.com/api/revalidate`
3. Trigger on: Create, Update, Delete. Dataset: `production`.
4. Set the **Secret** to the same value as `SANITY_REVALIDATE_SECRET`.
5. Add `SANITY_REVALIDATE_SECRET` to Vercel's environment variables too.

### 6. Deploy

Deploy as usual (e.g. push to the deploy branch / Vercel). Make sure the
`NEXT_PUBLIC_SANITY_*` vars and `SANITY_REVALIDATE_SECRET` are set in Vercel.
Do **not** put `SANITY_API_WRITE_TOKEN` in Vercel — it's only for local seeding.

### 7. Invite the client

In Sanity (Manage → Members), invite the client by email with the **Editor**
role. Send them `docs/CLIENT_GUIDE.md` and the link `https://unfilteredrays.com/studio`.

---

## How it works (architecture)

```
Client edits at /studio
        │  (publishes)
        ▼
   Sanity dataset  ──webhook──▶  /api/revalidate  ──▶  pages refresh
        │
        ▼  (GROQ fetch, cached 60s)
src/content/index.ts  ── falls back to ──▶  src/content/defaults.ts
        │
        ▼
   Page components (src/app/**)
```

- `src/sanity/` — client, image URL builder, schemas, Studio structure, queries.
- `sanity.config.ts` — Studio config (also used by the `sanity` CLI).
- `src/app/studio/[[...tool]]/page.tsx` — the embedded Studio route.
- `src/content/` — the content layer: `defaults.ts` (fallback + seed source),
  `index.ts` (Sanity-or-default getters), `types.ts` (shared shapes).
- `scripts/seed.ts` — one-time content/image import.

Each content page is a **singleton** in Sanity (one editable entry per page),
so the Studio sidebar reads like the website, not like a database.

## Editing content models

To add or change an editable field: update the schema in
`src/sanity/schemaTypes/`, the matching type in `src/content/types.ts`, the
default in `src/content/defaults.ts`, and the mapping in `src/content/index.ts`,
then surface it in the relevant page component.
