"use client";
import { useEffect, useRef, useState } from "react";
import { studioDemo } from "@/lib/data";

// Screen recording of animated UI running in Studio. The <source> is only
// attached once the frame is near the viewport, so the file costs nothing on
// first paint; the poster carries the space until then. Autoplay, muted, looped,
// no controls, and non-interactive by design: it reads as a live surface, not a
// player. Falls back to a sized placeholder while `studioDemo.video` is null.
export default function StudioDemo() {
  const frameRef = useRef(null);
  const videoRef = useRef(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (!studioDemo.video) return;
    const frame = frameRef.current;
    if (!frame) return;
    // No IntersectionObserver (or reduced data preference): just load it.
    if (typeof IntersectionObserver === "undefined") { setLoad(true); return; }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) { setLoad(true); io.disconnect(); }
      },
      { rootMargin: "400px 0px" }
    );
    io.observe(frame);
    return () => io.disconnect();
  }, []);

  // Attaching the src after mount means play() has to be kicked off by hand.
  useEffect(() => {
    if (!load) return;
    const v = videoRef.current;
    if (!v) return;
    v.load();
    const p = v.play();
    if (p && p.catch) p.catch(() => {}); // autoplay refusal is not an error worth surfacing
  }, [load]);

  return (
    <section className="sec wrap" id="demo">
      <div className="sec-head">
        <span className="eyebrow mono reveal"><span className="dot"></span>{studioDemo.eyebrow}</span>
        <h2 className="reveal">{studioDemo.h}</h2>
        <p className="reveal">{studioDemo.p}</p>
      </div>

      <div className="demo-frame reveal" ref={frameRef}>
        {studioDemo.video ? (
          <video
            ref={videoRef}
            className="demo-video"
            poster={studioDemo.poster || undefined}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            tabIndex={-1}
            aria-label="Screen recording of animated Roblox UI running in Studio"
          >
            {load && <source src={studioDemo.video} type="video/mp4" />}
          </video>
        ) : (
          /* TODO: video file. Placeholder holds the exact 16:9 box the recording
             will occupy, so dropping the file in changes nothing about layout. */
          <div className="demo-placeholder" aria-hidden="true">
            <span className="mono">Studio recording</span>
          </div>
        )}
      </div>
    </section>
  );
}
