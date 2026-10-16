"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hero, ctaLabel, studioDemo } from "@/lib/data";
import RollText from "@/components/RollText";

// The hero is a stage: two huge lines with the Studio recording between them.
// On desktop it pins, and scrolling grows the recording to fill the screen
// while the lines slide apart, so the work literally takes over the page.
// Phones and reduced motion get the same layout without the pin.
export default function Hero() {
  const root = useRef(null);
  const frame = useRef(null);
  const video = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const v = video.current;
    if (v) {
      if (reduce) v.pause();
      else { const p = v.play(); if (p && p.catch) p.catch(() => {}); }
    }
    if (reduce) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 900px)", () => {
      const f = frame.current;
      // scale and offset that make the frame cover most of the viewport
      const target = () => {
        const w = f.offsetWidth, h = f.offsetHeight;
        const s = Math.min((window.innerWidth * 0.94) / w, (window.innerHeight * 0.84) / h);
        // offsets ignore transforms, so this holds however far the tween has run
        const dy = window.innerHeight / 2 + 24 - (f.parentElement.offsetTop + f.offsetTop + h / 2);
        return { s, dy };
      };
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=110%",
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });
      tl.to(f, { scale: () => target().s, y: () => target().dy, borderRadius: 2 }, 0)
        .to(".hero-l1", { xPercent: -60, opacity: 0 }, 0)
        .to(".hero-l2", { xPercent: 60, opacity: 0 }, 0)
        .to(".hero-foot", { y: 40, opacity: 0, duration: 0.5 }, 0)
        .to(".hero-cap", { opacity: 0, duration: 0.3 }, 0);
    });

    // entrance: lines rise from their masks, then the frame and footer settle in
    const intro = gsap.timeline({ defaults: { ease: "expo.out" } });
    intro.from(".hero-l1 .ln, .hero-l2 .ln", { yPercent: 105, duration: 1.2, stagger: 0.08 })
      .from(frame.current, { clipPath: "inset(50% 50% 50% 50%)", duration: 1.3 }, 0.15)
      .from(".hero-foot > *", { y: 20, opacity: 0, duration: 0.9, stagger: 0.06 }, 0.4);

    return () => { mm.revert(); intro.kill(); };
  }, []);

  return (
    <header className="hero" id="top" ref={root}>
      <div className="hero-stage">
        <h1 className="hero-h" aria-label={hero.headline.join(" ")}>
          <span className="hero-l1 clip" aria-hidden="true"><span className="ln">{hero.headline[0]}</span></span>
          <span className="hero-l2 clip" aria-hidden="true"><span className="ln">{hero.headline[1]}</span></span>
        </h1>
        <figure className="hero-media">
          <div className="hero-frame" ref={frame}>
            <video
              ref={video}
              src={studioDemo.video}
              poster={studioDemo.poster}
              muted
              loop
              playsInline
              autoPlay
              preload="auto"
              tabIndex={-1}
              aria-label="Screen recording of an animated Roblox skill tree UI running in Studio"
            />
          </div>
          <figcaption className="hero-cap">{studioDemo.caption}</figcaption>
        </figure>
        <div className="hero-foot">
          <p className="hero-sub">{hero.sub}</p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-fill roll-host"><RollText text={ctaLabel} /></a>
            <a href={hero.ctaSecondary.href} className="btn btn-line roll-host"><RollText text={hero.ctaSecondary.label} /></a>
          </div>
        </div>
      </div>
    </header>
  );
}
