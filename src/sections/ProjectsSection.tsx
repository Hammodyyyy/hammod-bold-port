'use client';

import { useCallback, useState } from 'react';
import { Maximize2 } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Lightbox from '../components/Lightbox';
import Shot, { widestSrc } from '../components/Shot';
import { projects } from '../lib/data';
import type { Project } from '../lib/data';

interface RowProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

// The sticky stack that used to live here looked like a pile of empty
// concentric outlines mid-scroll, and made all five projects structurally
// identical. An alternating editorial row lets each one carry its own detail.
function ProjectRow({ project, index, onOpen }: RowProps) {
  const flipped = index % 2 === 1;

  return (
    <article className="grid items-center gap-7 md:grid-cols-12 md:gap-10 lg:gap-14">
      <FadeIn
        delay={0}
        y={40}
        className={`md:col-span-7 ${flipped ? 'md:order-2' : ''}`}
      >
        <button
          type="button"
          onClick={() => onOpen(project)}
          aria-label={`View ${project.title} full size`}
          className="group relative block w-full overflow-hidden rounded-[20px] border border-white/12 sm:rounded-[28px]"
        >
          <Shot
            src={project.img}
            alt={`${project.title} interface`}
            sizes="(min-width: 768px) 58vw, 92vw"
            className="aspect-video w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
          />
          <span className="pointer-events-none absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-black/55 text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100">
            <Maximize2 size={15} />
          </span>
        </button>
      </FadeIn>

      <FadeIn
        delay={0.12}
        y={30}
        className={`md:col-span-5 ${flipped ? 'md:order-1' : ''}`}
      >
        <div>
          <div className="flex items-baseline gap-4">
            <span
              className="hero-heading font-display font-black leading-none"
              style={{ fontSize: 'clamp(2.25rem, 4.5vw, 4rem)' }}
            >
              {project.n}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#C084FC]">
              {project.tag}
            </span>
          </div>

          <h3
            className="mt-3 font-display font-semibold uppercase leading-tight text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1.35rem, 2.4vw, 2.1rem)' }}
          >
            {project.title}
          </h3>

          <p className="mt-3 max-w-[46ch] text-[15px] font-light leading-relaxed text-[#D7E2EA]/60">
            {project.p}
          </p>

          <ul className="mt-5 flex flex-col gap-2 border-t border-white/10 pt-5">
            {project.solves.map((item) => (
              <li
                key={item}
                className="flex gap-2.5 text-[13.5px] font-light leading-snug text-[#D7E2EA]/55"
              >
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#C084FC]" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#D7E2EA]/35">
            {project.role}
          </p>
        </div>
      </FadeIn>
    </article>
  );
}

export default function ProjectsSection() {
  const [open, setOpen] = useState<Project | null>(null);
  const close = useCallback(() => setOpen(null), []);

  return (
    <section
      id="work"
      className="relative z-10 -mt-10 w-full rounded-t-[40px] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading mb-4 text-center font-display font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Work
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p className="mx-auto mb-14 max-w-[52ch] text-center text-[15px] font-light leading-relaxed text-[#D7E2EA]/55 sm:mb-20 md:mb-24">
          Five interfaces, each designed and then built in Studio. Open any shot
          full size to read the detail.
        </p>
      </FadeIn>

      <div className="mx-auto flex max-w-[1160px] flex-col gap-20 sm:gap-24 md:gap-28">
        {projects.map((project, i) => (
          <ProjectRow
            key={project.n}
            project={project}
            index={i}
            onOpen={setOpen}
          />
        ))}
      </div>

      <Lightbox
        src={open ? widestSrc(open.img) : null}
        caption={open ? `${open.title} · ${open.tag}` : undefined}
        onClose={close}
      />
    </section>
  );
}
