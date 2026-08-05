'use client';

import { useEffect, useRef, useState } from 'react';
import FadeIn from '../components/FadeIn';
import Shot from '../components/Shot';
import { clients, projects, studioDemo } from '../lib/data';

// Real screens only. The poster frame joins the five project shots so each row
// has three tiles before it repeats.
const SHOTS = [...projects.map((p) => p.img), studioDemo.poster];
const ROW_ONE = SHOTS.slice(0, 3);
const ROW_TWO = SHOTS.slice(3);

// A 420px tile is wider than a phone, so the strip would show barely one shot.
// Tile width steps down with the viewport; height stays 16:9 to match the
// source captures so nothing is cropped.
const TILE_GAP = 12; // gap-3

function tileWidthFor(vw: number) {
  if (vw < 480) return 240;
  if (vw < 768) return 300;
  if (vw < 1280) return 360;
  return 420;
}

function Row({
  images,
  offset,
  tileW,
}: {
  images: string[];
  offset: number;
  tileW: number;
}) {
  // tripled so the strip never runs out of tiles while translating
  const tiles = [...images, ...images, ...images];
  // start one full set to the left so travelling either way stays covered
  const setWidth = images.length * (tileW + TILE_GAP);

  return (
    <div
      className="flex gap-3"
      style={{
        marginLeft: -setWidth,
        transform: `translate3d(${offset}px,0,0)`,
        willChange: 'transform',
      }}
    >
      {tiles.map((src, i) => (
        <div
          key={i}
          className="shrink-0 overflow-hidden rounded-xl border border-white/10 sm:rounded-2xl"
          style={{ width: tileW, height: Math.round((tileW * 9) / 16) }}
        >
          <Shot
            src={src}
            alt=""
            sizes={`${tileW}px`}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  // Must match what the server rendered, so it cannot read window here: the
  // real width is applied by measure() on mount.
  const [tileW, setTileW] = useState(420);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const node = sectionRef.current;
      if (!node) return;
      setTileW(tileWidthFor(window.innerWidth));
      setOffset((window.scrollY - node.offsetTop + window.innerHeight) * 0.3);
    };

    // scroll fires far more often than we can paint, so coalesce to one
    // measurement per frame: this is the difference between smooth and
    // janky on a mid-range phone
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const shift = offset - 200;

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden pb-14 pt-20 sm:pt-24 md:pt-28"
      style={{ background: '#0C0C0C' }}
    >
      {/* trusted by */}
      <FadeIn delay={0} y={20}>
        <div className="mx-auto mb-14 flex max-w-[1160px] flex-wrap items-center justify-center gap-x-10 gap-y-5 border-y border-white/10 px-6 py-7 sm:mb-16 sm:gap-x-14">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#D7E2EA]/45">
            Trusted by
          </span>
          {clients.map((c) => (
            <span key={c.name} className="inline-flex items-center gap-3">
              <Shot
                src={c.logo}
                alt=""
                sizes="36px"
                className="h-8 w-8 rounded-lg object-cover ring-1 ring-white/10 sm:h-9 sm:w-9"
              />
              <span className="font-display text-lg font-semibold tracking-tight text-[#D7E2EA]/70 sm:text-xl">
                {c.name}
              </span>
            </span>
          ))}
        </div>
      </FadeIn>

      <div className="flex flex-col gap-3">
        <Row images={ROW_ONE} offset={shift} tileW={tileW} />
        <Row images={ROW_TWO} offset={-shift} tileW={tileW} />
      </div>
    </section>
  );
}
