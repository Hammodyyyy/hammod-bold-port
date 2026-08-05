'use client';

import { useEffect, useState } from 'react';

/**
 * Subscribes to a media query and re-renders when it flips.
 *
 * Always starts at `fallback` rather than reading matchMedia during the first
 * render. Under SSR the server has no window and would render the fallback,
 * so reading the real value on the client would produce a hydration mismatch
 * wherever the query changes the markup. The true value lands on mount.
 */
export function useMediaQuery(query: string, fallback = false) {
  const [matches, setMatches] = useState(fallback);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

/** True on touch devices, where hover and magnetic cursor effects are dead weight. */
export const useCoarsePointer = () => useMediaQuery('(pointer: coarse)');

export const useReducedMotion = () =>
  useMediaQuery('(prefers-reduced-motion: reduce)');
