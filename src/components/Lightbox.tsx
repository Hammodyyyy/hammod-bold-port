'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

interface LightboxProps {
  src: string | null;
  caption?: string;
  onClose: () => void;
}

// Full-resolution viewer. The shots are 1280x720 to 1920x1080, so opening one
// is a real jump in legible detail rather than a modest bump.
export default function Lightbox({ src, caption, onClose }: LightboxProps) {
  useEffect(() => {
    if (!src) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [src, onClose]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-8 md:p-11"
          style={{ background: 'rgba(10,10,14,.85)', backdropFilter: 'blur(10px)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={caption ? `${caption}, full size` : 'Full size image'}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="fixed right-5 top-5 z-[10001] flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-transform duration-200 hover:scale-105 hover:bg-white/20"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          <motion.figure
            className="flex max-h-full w-full max-w-[1500px] flex-col gap-3"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={src}
              alt={caption ?? ''}
              className="max-h-[86vh] w-full rounded-xl border border-white/15 object-contain shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
            />
            {caption && (
              <figcaption className="text-center text-[11px] uppercase tracking-[0.1em] text-white/70">
                {caption}
              </figcaption>
            )}
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
