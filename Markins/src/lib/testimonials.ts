export interface Testimonial {
  name: string;
  neighborhood: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
  project: string;
}

/**
 * TODO: confirm with client — placeholder quotes in the brand voice until real
 * reviews (with permission to publish) are collected. Do not launch with these
 * verbatim; swap for verified client reviews before going live.
 */
export const testimonials: Testimonial[] = [
  {
    name: 'J. Marchetti',
    neighborhood: 'Port Richmond',
    quote:
      'Marjus walked the job with us every week, no surprises on the invoice, no surprises on the timeline. The kitchen looks better than the renderings.',
    rating: 5,
    project: 'Sheldon Street Kitchen',
  },
  {
    name: 'A. Delgado',
    neighborhood: 'Fishtown',
    quote:
      'We interviewed four contractors. Markins was the only one who showed up with an actual schedule instead of a guess. They hit it.',
    rating: 5,
    project: 'Thompson Street Rebuild',
  },
  {
    name: 'R. Okafor',
    neighborhood: 'Northern Liberties',
    quote:
      'Small footprint, big improvement. They were honest early that the layout couldn’t change without moving plumbing, saved us money we would have wasted.',
    rating: 5,
    project: 'Northern Liberties Galley Remodel',
  },
  {
    name: 'T. Sanchez',
    neighborhood: 'Kensington',
    quote:
      'Clean job sites every single day, which mattered a lot with two kids in the house during the renovation.',
    rating: 4,
    project: 'Kensington Open-Concept Kitchen',
  },
  {
    name: 'M. Boyle',
    neighborhood: 'Manayunk',
    quote:
      'They caught a framing issue the last contractor left behind and fixed it without turning it into a change-order ambush.',
    rating: 5,
    project: 'Manayunk Custom Kitchen',
  },
];
