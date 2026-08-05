'use client';

import { useEffect, useRef, useState } from 'react';
import FadeIn from '../components/FadeIn';
import SectionHead from '../components/SectionHead';
import { widestSrc } from '../components/Shot';
import { useReducedMotion } from '../hooks/useMediaQuery';
import { studioDemo } from '../lib/data';

export default function StudioDemoSection() {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [near, setNear] = useState(false);
  const reduced = useReducedMotion();

  // The clip is 1.4MB. Holding the src back until the reader is close means a
  // phone that never reaches this section never pays for it, and the poster
  // still occupies the exact same box so nothing shifts when it arrives.
  useEffect(() => {
    const node = frameRef.current;
    if (!node) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: '400px 0px' }
    );

    io.observe(node);
    return () => io.disconnect();
  }, []);

  // pause off-screen so it is not decoding frames nobody is watching
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !near || reduced) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.15 }
    );

    io.observe(video);
    return () => io.disconnect();
  }, [near, reduced]);

  return (
    <section
      id="demo"
      className="w-full px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28"
      style={{ background: '#0C0C0C' }}
    >
      <SectionHead
        eyebrow={studioDemo.eyebrow}
        title={studioDemo.h}
        sub={studioDemo.p}
        className="mb-14 sm:mb-16 md:mb-20"
      />

      <FadeIn delay={0.1} y={40}>
        <div
          ref={frameRef}
          className="mx-auto aspect-video max-w-[1000px] overflow-hidden rounded-[20px] border border-white/12 shadow-[0_40px_100px_rgba(0,0,0,0.6)] sm:rounded-[36px]"
        >
          <video
            ref={videoRef}
            className="block h-full w-full object-cover"
            src={near ? studioDemo.video : undefined}
            poster={widestSrc(studioDemo.poster)}
            autoPlay={!reduced}
            muted
            loop
            playsInline
            controls={reduced}
            preload="none"
          />
        </div>
      </FadeIn>
    </section>
  );
}
