import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

/** Register GSAP plugins once per page load. Safe to call from every island. */
export function initGsap(): typeof gsap {
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return gsap;
}

export const HINGE = 'cubic-bezier(0.16, 1, 0.3, 1)';

export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Run `animate` normally, or `fallback` (defaulting to an instant end-state via
 * gsap.set) when the visitor has reduced motion enabled. Keeps every component's
 * accessibility gate identical instead of re-implementing the check per-section.
 */
export function withMotionGate(animate: () => void, fallback?: () => void): void {
  if (prefersReducedMotion()) {
    fallback?.();
    return;
  }
  animate();
}

/**
 * Run `fn` once the PageLoader intro has finished (or immediately if it already
 * finished before this listener attached — checks the sync flag PageLoader sets
 * to avoid the deferred-script ordering race).
 */
export function runAfterIntro(fn: () => void): void {
  const w = window as unknown as { __markinsIntroDone?: boolean };
  if (w.__markinsIntroDone) {
    fn();
  } else {
    window.addEventListener('markins:loaded', fn, { once: true });
  }
}

export { gsap, ScrollTrigger };
