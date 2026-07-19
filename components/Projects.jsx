"use client";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/data";
import CaseMedia from "@/components/CaseMedia";

export default function Projects() {
  const trackRef = useRef(null);
  const [idx, setIdx] = useState(0);
  const count = projects.length;

  const scrollToIdx = (i) => {
    const track = trackRef.current;
    const card = track && track.children[0];
    if (!card) return;
    const gap = parseInt(getComputedStyle(track).columnGap || "20") || 20;
    track.scrollTo({ left: i * (card.offsetWidth + gap), behavior: "smooth" });
  };

  useEffect(() => { scrollToIdx(idx); }, [idx]);

  // gentle auto-advance, paused while the pointer is over the carousel
  useEffect(() => {
    const track = trackRef.current;
    let paused = false;
    const enter = () => { paused = true; };
    const leave = () => { paused = false; };
    if (track) { track.addEventListener("pointerenter", enter); track.addEventListener("pointerleave", leave); }
    const id = setInterval(() => { if (!paused) setIdx((p) => (p + 1) % count); }, 4500);
    return () => {
      clearInterval(id);
      if (track) { track.removeEventListener("pointerenter", enter); track.removeEventListener("pointerleave", leave); }
    };
  }, [count]);

  const go = (dir) => setIdx((p) => (p + dir + count) % count);

  return (
    <section className="sec wrap" id="projects">
      <div className="sec-head">
        <span className="eyebrow mono reveal"><span className="dot"></span>Selected Work</span>
        <h2 className="reveal">Interfaces, shipped.</h2>
        <p className="reveal">UI I&apos;ve designed and built for live Roblox games. Click any shot to see it full-size.</p>
      </div>

      <div className="proj-carousel reveal">
        <div className="proj-track" ref={trackRef}>
          {projects.map((p, i) => (
            <div className="proj card" key={i}>
              <CaseMedia img={p.img} video={p.video} title={p.title} kind={p.tag} />
              <div className="proj-meta">
                <span className="pt">{p.title}</span>
                <span className="ptag">{p.tag}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="car-nav">
          <button type="button" className="car-btn" onClick={() => go(-1)} aria-label="Previous project">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <div className="car-dots">
            {projects.map((_, i) => (
              <button type="button" key={i} className={`car-dot${i === idx ? " on" : ""}`} onClick={() => setIdx(i)} aria-label={`Go to project ${i + 1}`}></button>
            ))}
          </div>
          <button type="button" className="car-btn" onClick={() => go(1)} aria-label="Next project">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
