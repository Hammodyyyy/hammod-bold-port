'use client';

import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import FadeIn from '../components/FadeIn';
import SectionHead from '../components/SectionHead';
import { useReducedMotion } from '../hooks/useMediaQuery';
import { testimonials } from '../lib/data';

const ROTATE_MS = 6500;
const SWIPE_PX = 45;

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const touchX = useRef<number | null>(null);

  const go = useCallback((i: number) => {
    setActive((i + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    // touch has no hover to pause on, and auto-advance is exactly the kind of
    // motion reduced-motion users are asking us to stop
    if (paused || reduced) return;
    const id = window.setInterval(
      () => setActive((a) => (a + 1) % testimonials.length),
      ROTATE_MS
    );
    return () => window.clearInterval(id);
  }, [paused, reduced]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
    setPaused(true);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchX.current;
    touchX.current = null;
    if (start === null) return;
    const dx = e.changedTouches[0].clientX - start;
    if (Math.abs(dx) > SWIPE_PX) go(active + (dx < 0 ? 1 : -1));
  };

  return (
    <section
      id="testimonials"
      className="w-full px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28"
      style={{ background: '#0C0C0C' }}
    >
      <SectionHead
        eyebrow="Testimonials"
        title="What clients say."
        className="mb-12 sm:mb-14 md:mb-16"
      />

      <FadeIn delay={0.1} y={30}>
        <div
          className="mx-auto max-w-[720px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* slides share one grid cell, so the card height is the tallest
              quote and never jumps as it rotates */}
          <div className="grid">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                aria-hidden={i !== active}
                className={`col-start-1 row-start-1 flex min-h-[236px] flex-col gap-5 rounded-[24px] border border-white/12 bg-white/[0.03] p-7 transition-all duration-300 sm:p-8 ${
                  i === active
                    ? 'visible translate-y-0 opacity-100'
                    : 'invisible pointer-events-none translate-y-2 opacity-0'
                }`}
              >
                <figcaption className="flex items-center gap-3.5">
                  <img
                    src={t.avatar}
                    alt=""
                    className="h-11 w-11 shrink-0 rounded-full border border-white/15 object-cover"
                  />
                  <span className="flex flex-col">
                    <span className="font-display text-[15px] font-semibold text-[#D7E2EA]">
                      {t.name}
                    </span>
                    <span className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-[#D7E2EA]/40">
                      {t.role}
                    </span>
                  </span>
                </figcaption>

                <blockquote className="text-[16.5px] font-light leading-relaxed text-[#D7E2EA]/70">
                  {t.quote}
                </blockquote>

                <div className="mt-auto flex gap-1" aria-label={`${t.stars} out of 5`}>
                  {Array.from({ length: 5 }, (_, s) => (
                    <Star
                      key={s}
                      size={15}
                      className={
                        s < t.stars
                          ? 'fill-[#C084FC] text-[#C084FC]'
                          : 'text-white/15'
                      }
                    />
                  ))}
                </div>
              </figure>
            ))}
          </div>

          {/* controls */}
          <div className="mt-7 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => go(active - 1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-[#D7E2EA] transition-all duration-200 hover:scale-105 hover:border-transparent hover:bg-[#C084FC] hover:text-[#0C0C0C]"
            >
              <ChevronLeft size={18} />
            </button>

            {/* the dot stays small, the button around it is thumb-sized */}
            <div className="flex items-center">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === active}
                  className="group flex h-11 w-6 items-center justify-center"
                >
                  <span
                    className={`h-[7px] rounded-full transition-all duration-300 ${
                      i === active
                        ? 'w-[22px] bg-[#C084FC]'
                        : 'w-[7px] bg-white/25 group-hover:bg-white/50'
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(active + 1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-[#D7E2EA] transition-all duration-200 hover:scale-105 hover:border-transparent hover:bg-[#C084FC] hover:text-[#0C0C0C]"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
