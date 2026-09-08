import img1Hero from '../assets/images/projects/sheldon-st/01-hero.jpg';
import img1B from '../assets/images/projects/sheldon-st/02.jpg';
import img1C from '../assets/images/projects/sheldon-st/03.jpg';
import img1D from '../assets/images/projects/sheldon-st/04.jpg';

import img2Hero from '../assets/images/projects/thompson-st/01-hero.jpg';
import img2B from '../assets/images/projects/thompson-st/02.jpg';
import img2C from '../assets/images/projects/thompson-st/03.jpg';
import img2D from '../assets/images/projects/thompson-st/04.jpg';

import img3Hero from '../assets/images/projects/nice-crib/01-hero.jpg';
import img3B from '../assets/images/projects/nice-crib/02.jpg';
import img3C from '../assets/images/projects/nice-crib/03.jpg';
import img3D from '../assets/images/projects/nice-crib/04.jpg';

import img4Hero from '../assets/images/projects/chester-building/01-hero.jpg';
import img4B from '../assets/images/projects/chester-building/02.jpg';
import img4C from '../assets/images/projects/chester-building/03.jpg';
import img4D from '../assets/images/projects/chester-building/04.jpg';

import img5Hero from '../assets/images/projects/south-philly/01-hero.jpg';
import img5B from '../assets/images/projects/south-philly/02.jpg';
import img5C from '../assets/images/projects/south-philly/03.jpg';

import img6Hero from '../assets/images/projects/miffle/01-hero.jpg';
import img6B from '../assets/images/projects/miffle/02.jpg';
import img6C from '../assets/images/projects/miffle/03.jpg';

import type { ImageMetadata } from 'astro';

export interface Project {
  slug: string;
  title: string;
  neighborhood: string;
  category: 'Kitchen & Bath' | 'Renovation' | 'New Construction';
  size: 'lg' | 'md' | 'sm';
  blurb: string;
  detail: string;
  hero: ImageMetadata;
  gallery: ImageMetadata[];
  /** TODO: confirm exact address/scope with client before publishing publicly. */
  addressConfirmed: false;
}

export const projects: Project[] = [
  {
    slug: 'sheldon-street-kitchen',
    title: 'Sheldon Street Kitchen',
    neighborhood: 'Port Richmond',
    category: 'Kitchen & Bath',
    size: 'lg',
    blurb: 'A full gut kitchen built around a book-matched waterfall island.',
    detail:
      'The client wanted one piece the whole room could revolve around. We opened the wall to the dining room, ran a waterfall quartz island down the center, and let brushed-gold fixtures and a full slab backsplash carry the light. Integrated paneling keeps the refrigerator out of sight so the island stays the focal point.',
    hero: img1Hero,
    gallery: [img1Hero, img1B, img1C, img1D],
    addressConfirmed: false,
  },
  {
    slug: 'thompson-street-rebuild',
    title: 'Thompson Street Rebuild',
    neighborhood: 'Fishtown',
    category: 'New Construction',
    size: 'md',
    blurb: 'Ground-up kitchen build with a reeded-oak island and brass pendants.',
    detail:
      'Built out as part of a full interior new-construction package. High-gloss white uppers keep the room bright, a fluted-oak island adds warmth against the stainless run, and paired brass pendants replace what would have been a single flush-mount fixture.',
    hero: img2Hero,
    gallery: [img2Hero, img2B, img2C, img2D],
    addressConfirmed: false,
  },
  {
    slug: 'northern-liberties-galley',
    title: 'Northern Liberties Galley Remodel',
    neighborhood: 'Northern Liberties',
    category: 'Renovation',
    size: 'md',
    blurb: 'A narrow galley kitchen reworked with green zellige tile and a live-edge shelf.',
    detail:
      'The existing footprint stayed put; everything in it changed. Hand-glazed emerald tile runs floor-to-cabinet behind a farmhouse sink, a reclaimed-wood shelf replaces a run of upper cabinets, and a pot filler over the range does the rest of the talking.',
    hero: img3Hero,
    gallery: [img3Hero, img3B, img3C, img3D],
    addressConfirmed: false,
  },
  {
    slug: 'kensington-open-concept',
    title: 'Kensington Open-Concept Kitchen',
    neighborhood: 'Kensington',
    category: 'Renovation',
    size: 'sm',
    blurb: 'Floating oak shelves and a warm-tone palette open up a once-closed kitchen.',
    detail:
      'We removed the wall separating the kitchen from the hallway pantry and replaced upper cabinets with floating oak shelving, so the finished quartz countertop and tile backsplash carry the whole wall instead of being boxed in.',
    hero: img4Hero,
    gallery: [img4Hero, img4B, img4C, img4D],
    addressConfirmed: false,
  },
  {
    slug: 'south-philly-new-construction',
    title: 'South Philly New Build',
    neighborhood: 'South Philadelphia',
    category: 'New Construction',
    size: 'sm',
    blurb: 'A clean, efficient kitchen layout built for a new-construction rowhome.',
    detail:
      'Part of a full new-construction interior package: shaker-style cabinetry, quartz counters, and a stainless appliance suite built to a budget without looking like it. Designed to show well and hold up to daily use.',
    hero: img5Hero,
    gallery: [img5Hero, img5B, img5C],
    addressConfirmed: false,
  },
  {
    slug: 'manayunk-custom-kitchen',
    title: 'Manayunk Custom Kitchen',
    neighborhood: 'Manayunk',
    category: 'Kitchen & Bath',
    size: 'md',
    blurb: 'Custom cabinetry, brass hardware, and floating shelves built around the client’s collection.',
    detail:
      'This one was about display as much as function — floating shelves for glassware and ceramics, brass bridge faucet, and custom cabinetry with hand-selected hardware throughout. Every drawer was sized to what the client already owned.',
    hero: img6Hero,
    gallery: [img6Hero, img6B, img6C],
    addressConfirmed: false,
  },
];
