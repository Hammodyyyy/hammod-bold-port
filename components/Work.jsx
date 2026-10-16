"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, specialties } from "@/lib/data";
import CaseMedia from "@/components/CaseMedia";

const pad = (n) => String(n).padStart(2, "0");

// Pinned work showcase. Scrolling swings each shot in from the right in 3D,
// settles it flat in the centre, then sends it back into a deck behind the
// next one. A rolling counter and the project list follow the active shot.
// Below 900px it becomes a swipeable carousel with its own counter; at
// desktop width with reduced motion it is a plain vertical list.
export default function Work() {
  const root = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
      const el = root.current;
      el.classList.add("is-stage");
      const cards = gsap.utils.toArray(".wcard", el);
      const items = gsap.utils.toArray(".wlist li", el);
      const roller = el.querySelector(".roller");
      const n = cards.length;
      let active = -1;
      const setActive = (i) => {
        if (i === active) return;
        active = i;
        cards.forEach((c, k) => c.classList.toggle("on", k === i));
        items.forEach((li, k) => li.classList.toggle("on", k === i));
        // percent of the roller itself, which is n digits tall
        if (roller) roller.style.transform = `translateY(${(-i * 100) / n}%)`;
      };

      // waiting: off to the right, swung away. deck: shrunk back and left.
      const waiting = { xPercent: 115, rotationY: -48, rotationZ: 3, scale: 0.86, opacity: 0 };
      const deck = (k) => ({ xPercent: -22 - k * 2, yPercent: -4 - k * 3, rotationY: 18, rotationZ: -3 + (k % 3) * 2.5, scale: 0.72, opacity: 0.55 });
      cards.forEach((c, k) => gsap.set(c, k === 0 ? { xPercent: 0, rotationY: 0, rotationZ: 0, scale: 1, opacity: 1 } : waiting));

      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut", duration: 1 },
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: () => `+=${(n - 1) * window.innerHeight * 0.85}`,
          pin: true,
          scrub: 0.9,
          snap: { snapTo: 1 / (n - 1), duration: { min: 0.25, max: 0.6 }, ease: "power2.inOut" },
          invalidateOnRefresh: true,
          onUpdate: (self) => setActive(Math.round(self.progress * (n - 1))),
        },
      });
      for (let k = 1; k < n; k++) {
        const at = k - 1;
        tl.to(cards[k], { xPercent: 0, rotationY: 0, rotationZ: 0, scale: 1, opacity: 1 }, at);
        tl.to(cards[k - 1], deck(0), at);
        // older cards sink further into the deck and fade out
        for (let j = k - 2; j >= 0; j--) tl.to(cards[j], { ...deck(k - 1 - j), opacity: k - 1 - j > 1 ? 0 : 0.3 }, at);
      }
      setActive(0);

      return () => {
        el.classList.remove("is-stage");
        gsap.set(cards, { clearProps: "all" });
        if (roller) roller.style.transform = "";
      };
    });
    return () => mm.revert();
  }, []);

  // phone carousel: whichever card is mostly in view drives the counter
  useEffect(() => {
    if (!window.matchMedia("(max-width: 899px)").matches || !("IntersectionObserver" in window)) return;
    const el = root.current;
    const track = el.querySelector(".wcards");
    const cur = el.querySelector(".wswipe .cur");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting && cur) cur.textContent = pad(Number(e.target.dataset.i) + 1);
      }),
      { root: track, threshold: 0.6 }
    );
    el.querySelectorAll(".wcard").forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section className="work" id="work" ref={root}>
      <div className="work-pin">
        <div className="work-side">
          <h2 className="work-h">Selected work</h2>
          <div className="counter" aria-hidden="true">
            <span className="counter-win"><span className="roller">{projects.map((_, i) => <span key={i}>{pad(i + 1)}</span>)}</span></span>
            <span className="of">/{pad(projects.length)}</span>
          </div>
          <ul className="work-tags" aria-label="What I design">
            {specialties.map((s) => (<li key={s}>{s}</li>))}
          </ul>
        </div>

        <div className="wcards">
          {projects.map((p, i) => (
            <div className="wcard" key={p.title} data-i={i} style={{ zIndex: i + 1 }}>
              <CaseMedia img={p.img} video={p.video} title={p.title} kind={p.tag} />
              <div className="wcard-meta"><span>{p.title}</span><span className="t">{p.tag}</span></div>
            </div>
          ))}
        </div>
        <div className="wswipe" aria-hidden="true"><span className="cur">01</span> / {pad(projects.length)}<span className="hint">Swipe for more</span></div>

        <ol className="wlist" aria-hidden="true">
          {projects.map((p, i) => (
            <li key={p.title}><span className="n">{pad(i + 1)}</span><span className="nm">{p.title}</span><span className="t">{p.tag}</span></li>
          ))}
        </ol>
      </div>
    </section>
  );
}
