# Markins Development Group — Website

Marketing site for Markins Development Group, LLC, a Port Richmond-based residential
construction and renovation contractor. Astro + Tailwind CSS + GSAP, statically built.

## Stack

- **Astro** (static output, zero client JS by default)
- **Tailwind CSS 4** (via the Vite plugin, CSS-first `@theme` tokens in
  `src/styles/tokens.css`)
- **GSAP + ScrollTrigger** for scroll-driven motion (`src/lib/motion.ts` centralizes
  plugin registration and the `prefers-reduced-motion` gate every animated component
  checks)
- **Fontsource** self-hosted fonts (Poppins, Fraunces, Inter) — no Google Fonts
  network request
- Netlify Forms for the quote request form (no backend needed)

## Getting started

```sh
npm install
npm run dev
```

Dev server runs at `http://localhost:4321`.

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server |
| `npm run build` | Build the static site to `./dist/` |
| `npm run preview` | Serve the built `./dist/` locally, to test the real production output |
| `npx astro check` | TypeScript/Astro type-checking |

## Project structure

```
src/
  assets/images/projects/  Curated project photos, organized per job
  components/              One file per site section/UI piece
  layouts/BaseLayout.astro SEO meta, JSON-LD, skip link, shared <head>
  lib/                     Typed content: projects.ts, testimonials.ts, faq.ts, motion.ts
  pages/                   index.astro, projects/[slug].astro, privacy.astro, thank-you.astro, 404.astro
  styles/                  tokens.css (design tokens), fonts.css, global.css
public/                    favicon.svg, robots.txt, og-image.jpg
```

See `CONTENT-GUIDE.md` for where to edit copy, photos, and reviews, and
`ASSETS-TODO.md` for what's still placeholder and needs the client's input before
launch.

## Deploying to Netlify

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In Netlify: **Add new site → Import an existing project**, connect the repo.
3. Build settings (Netlify should auto-detect these from `netlify.toml`, but to
   confirm): **Build command** `npm run build`, **Publish directory** `dist`.
4. Deploy. The quote form is picked up automatically — Netlify scans the built HTML
   for `data-netlify="true"` forms, so no extra config is needed. Submissions appear
   under the site's **Forms** tab in the Netlify dashboard; turn on email
   notifications there if the client wants an email per submission.
5. Once a real domain is chosen, update the `site` value in `astro.config.mjs` (and
   `public/robots.txt`'s sitemap line) so canonical URLs, Open Graph tags, and the
   sitemap all point at the right domain.

## Before going live

Read `ASSETS-TODO.md` in full — in short: confirm real project addresses/dates,
replace placeholder testimonials with real ones, confirm the license number and
business stats, and do not use `hero.mp4` from the original photo archive (it carries
another company's branding — see that file for details).
