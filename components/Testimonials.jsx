"use client";
import { useCallback, useEffect, useState } from "react";
import { testimonials } from "@/lib/data";

// One review on screen at a time, advancing on its own. The timer is keyed to
// the active index, so arrows and dots restart the countdown instead of
// leaving a half-elapsed one running.
const AUTO_MS = 6500;

function Stars({ count }) {
  return (
    <div className="stars" aria-label={`Rated ${count} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} className={i < count ? "on" : ""} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 17.27 5.82 21l1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63 7.19.61-5.46 4.73L18.18 21z" />
        </svg>
      ))}
    </div>
  );
}

function Arrow({ dir }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={dir === "prev" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
    </svg>
  );
}

export default function Testimonials() {
  const total = testimonials.length;
  const [active, setActive] = useState(0);
  const [held, setHeld] = useState(false);

  const step = useCallback((delta) => setActive((p) => (p + delta + total) % total), [total]);

  useEffect(() => {
    if (held || total < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setActive((p) => (p + 1) % total), AUTO_MS);
    return () => clearTimeout(id);
  }, [active, held, total]);

  return (
    <section className="sec wrap" id="words">
      <div className="sec-head">
        <span className="eyebrow mono reveal"><span className="dot"></span>Client Words</span>
        <h2 className="reveal">What it&apos;s like to work with me.</h2>
      </div>

      <div
        className="quotes reveal"
        role="group"
        aria-roledescription="carousel"
        aria-label="Client reviews"
        onMouseEnter={() => setHeld(true)}
        onMouseLeave={() => setHeld(false)}
        onFocus={() => setHeld(true)}
        onBlur={() => setHeld(false)}
      >
        <div className="q-stage">
          {testimonials.map((t, i) => (
            <div className={`q card${i === active ? " on" : ""}`} key={t.name} aria-hidden={i === active ? undefined : "true"}>
              <div className="who">
                <div className="av"><img src={t.avatar} alt="" loading="lazy" /></div>
                <div>
                  <div className="nm">{t.name}</div>
                  <div className="rl">{t.role}</div>
                </div>
              </div>
              <div className="qt">“{t.quote}”</div>
              {t.stars ? <Stars count={t.stars} /> : null}
            </div>
          ))}
        </div>

        {total > 1 && (
          <div className="q-ctl">
            <button type="button" className="q-arrow" onClick={() => step(-1)} data-cursor aria-label="Previous review">
              <Arrow dir="prev" />
            </button>
            <div className="q-dots">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  className={`q-dot${i === active ? " on" : ""}`}
                  onClick={() => setActive(i)}
                  data-cursor
                  aria-label={`Show review ${i + 1} of ${total}`}
                  aria-current={i === active ? "true" : undefined}
                />
              ))}
            </div>
            <button type="button" className="q-arrow" onClick={() => step(1)} data-cursor aria-label="Next review">
              <Arrow dir="next" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
