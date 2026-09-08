# Assets To-Do

Everything the client (or whoever takes this over) needs to know about placeholder
content, real photos already in use, and media that was deliberately **not** used.

## Photos currently on the site

All project photography is real, unwatermarked work pulled from
`~/Documents/Kitchen Remodel/` on the machine this was built on — not stock photos.
Six jobs were curated into the Featured Projects section:

| Site slug | Source folder | Labeled as | Address confirmed? |
|---|---|---|---|
| `sheldon-street-kitchen` | `Sheldon St/` | Port Richmond | No — TODO |
| `thompson-street-rebuild` | `3514 E Thompson St/` | Fishtown | No — TODO |
| `northern-liberties-galley` | `Nice crib /` | Northern Liberties | No — TODO |
| `kensington-open-concept` | `chester building/` | Kensington | No — TODO |
| `south-philly-new-construction` | `South philly units/` | South Philadelphia | No — TODO |
| `manayunk-custom-kitchen` | `Miffle/` | Manayunk | No — TODO |

**Action needed:** confirm the real address/neighborhood and rough completion date for
each job with the client before this goes live publicly — the neighborhood labels
above are placeholders matching the brief's requested list, not verified locations.
Every project page and the projects grid intro already carries an inline
`<!-- TODO: confirm with client -->` comment next to this claim.

Each project folder above has more usable photos than the 3–4 selected per project —
worth a deeper pass with the client to pick their favorites once real hosting is set
up, especially for jobs like `Sheldon St/` (15 photos available) and `Nice crib /`
(72 photos available).

## Hero video — do not use `hero.mp4`

The only video file in the source folder actually named for hero use,
`hero.mp4`, **is not usable.** Sampling its frames (not just the filename) showed a
"Universal Marble & Granite / Quality Kitchen and Bath Design" title card baked into
the footage around the 0:02 mark. UMG is a different, unrelated business — the same
source folder contains a large amount of clearly UMG-branded marketing material
(`Kitchen types/`, `Who we are/`, `Carasuel 1/`, `Carasouel 2/`, `Umg Sinks/`,
`umg_flyer.pdf`, `UMGmural.psd`, `logo.png`, `NoBGlogo.png`, root-level `Artboard *.png`
files) that must never appear on the Markins site.

Given that, the hero currently runs on a **static curated photo** (the Sheldon Street
kitchen) with a slow CSS "Ken Burns" drift and an animated gradient-canvas fallback
layer — see `src/components/Hero.astro` and `src/components/GradientCanvas.astro`.

**Other raw video in the source folder** (`Remodel 1/2/3.MOV`, `Before 1/2.mov`,
`After 1/2/3.mov`, `IMG_7094.mov`, `IMG_7497.mov`, `IMG_7505.mov`, `IMG_9095.mov`,
`IMG_9096.mov`) was **not** screened frame-by-frame the way `hero.mp4` was — given
`hero.mp4` turned out to be UMG's, don't assume any of these are clean. Before using
any of them:
1. Watch the full clip for branding/title cards, not just a few seconds.
2. Transcode to MP4 (H.264) and WebM — browsers don't reliably play `.mov`/QuickTime
   in a `<video>` tag. This machine has no `ffmpeg`/Handbrake installed; use
   `ffmpeg -i input.mov -c:v libx264 -crf 20 -c:a aac output.mp4` (and a WebM pass)
   on a machine that has it, or a tool like Handbrake.
3. Once a clean, confirmed-Markins clip exists, swap it into
   `src/assets/video/hero.mp4` and restore the `<video>` element in `Hero.astro`
   (the component still has the CSS in place for a video layer if needed — see the
   git history / this file's note — but it was fully removed rather than left as
   dead disabled code, so re-adding it is a small, deliberate change, not a flag flip).

## Logo

The "M" mark used sitewide (`src/components/Logo.astro`, `public/favicon.svg`) is a
**hand-rebuilt recreation** of the mark on the business card — a Poppins ExtraBold "M"
set in an inline SVG with the card's navy → sky → lime gradient — not a cropped photo
of the card. This was a deliberate choice (crisp at every size, recolorable per theme)
but it is **not a locked final logo.** If Markins commissions a real vector logo from a
designer, swap the SVG markup in those two files.

## Stats section

`src/components/StatsSection.astro` has four numbers (years in business, projects
completed, licensed & insured, warranty length) marked as placeholders in a code
comment. Confirm real figures with the client before launch.

## Testimonials

`src/lib/testimonials.ts` has five placeholder reviews in the brand voice, explicitly
marked as **not real** in a comment at the top of the file. These must be replaced
with actual client reviews (with permission to publish) before launch — do not ship
the placeholder quotes as-is.

## License number

Footer and FAQ both reference a placeholder PA HIC license number
(`#PA000000`) — get the real number from the client.

## Open Graph image

`public/og-image.jpg` is a 1200×630 crop of a Sheldon Street kitchen photo. Fine as a
placeholder; a designer could build a proper composed OG card (photo + wordmark) later.
