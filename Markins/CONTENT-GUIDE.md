# Content Guide

Where to change things on the Markins Development Group site. Every file below is
plain text/TypeScript — no build tools needed to *find* the right spot, though you'll
still need to run `npm run build` (or ask a developer to) to publish a change.

## Contact info, phone numbers, address

These appear in five places and are **not** pulled from one shared config, so update
all of them together:
- `src/components/Nav.astro` — phone number in the header
- `src/components/Footer.astro` — address, both phone numbers, owner name
- `src/components/QuoteForm.astro` — the two `tel:` cards
- `src/layouts/BaseLayout.astro` — the `LocalBusiness` structured data (`address`,
  `telephone`) used by Google — search this file for `localBusinessJsonLd`
- `src/components/ServiceArea.astro` — the address line under the map graphic

## Homepage copy

Each homepage section is its own file in `src/components/`. Text lives directly in
the component's markup (between HTML-like tags) — search for the sentence you want to
change and edit it in place:
- Hero headline/subhead: `src/components/Hero.astro`
- "Who we are" paragraph: `src/components/IntroStatement.astro`
- Services (Kitchen & Bath / Renovation / New Construction) copy and bullet lists:
  `src/components/Services.astro`, in the `services` array near the top
- Process steps: `src/components/Process.astro`, in the `steps` array
- Stat numbers: `src/components/StatsSection.astro`, in the `stats` array
- FAQ questions/answers: `src/lib/faq.ts`

## Featured projects

All six project cards are defined in one file: `src/lib/projects.ts`. Each entry has:
- `title`, `neighborhood`, `category` — shown on the card and detail page
- `blurb` — short card description
- `detail` — the longer paragraph on the project's own page
- `hero` / `gallery` — which photos to use (see "Adding photos" below)

To add a **new** project, copy an existing object in that file, give it a unique
`slug` (used in the URL, e.g. `/projects/your-slug-here`), and point it at new photos.
The page at `/projects/[slug].astro` builds itself automatically from this list —
no new page to create.

## Adding or swapping photos

1. Drop the image file into `src/assets/images/projects/<some-folder>/`.
2. Import it at the top of `src/lib/projects.ts` (follow the existing `import img1Hero
   from '../assets/images/projects/sheldon-st/01-hero.jpg';` pattern).
3. Reference that import in the project's `hero` or `gallery` array.

Images are automatically resized, compressed, and converted to modern formats
(AVIF/WebP) at build time — just use a good-quality original (the source photos in
this project were resized to a 2400px-long-edge JPEG before importing, which is a
reasonable target for new photos too, to keep the repo size sane).

## Testimonials

`src/lib/testimonials.ts`. **The five entries currently there are placeholders** — see
`ASSETS-TODO.md`. Replace `name`, `neighborhood`, `quote`, `rating` (1–5), and
`project` with real, permissioned client reviews before launch.

## Quote form destination

The form in `src/components/QuoteForm.astro` submits to Netlify Forms automatically
once deployed on Netlify — no extra setup needed there. Submissions show up in the
Netlify dashboard under **Forms**, and can be forwarded to an email address from
Netlify's site settings (Forms → Form notifications).

## SEO title/description per page

Each page file in `src/pages/` (and `src/pages/projects/[slug].astro`) passes a
`title` and `description` prop to `<BaseLayout>` near the top of the file — that's
what shows up in Google search results and browser tabs.

## Legal/footer boilerplate

- Privacy policy text: `src/pages/privacy.astro`
- Copyright year updates automatically; license number is a placeholder in
  `src/components/Footer.astro` (search for `PA HIC License`)
