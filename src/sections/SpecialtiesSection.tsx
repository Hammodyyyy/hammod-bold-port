import FadeIn from '../components/FadeIn';
import { specialties } from '../lib/data';

export default function SpecialtiesSection() {
  return (
    <section
      id="specialties"
      className="relative w-full rounded-t-[40px] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="text-center font-display font-black uppercase leading-none tracking-tight text-[#0C0C0C]"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          What I design
        </h2>
      </FadeIn>

      <FadeIn delay={0.12} y={20}>
        <p
          className="mx-auto mb-16 mt-6 max-w-[56ch] text-center font-light leading-relaxed text-[#0C0C0C]/60 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)' }}
        >
          Organized by system, so you can find the part of your game that needs
          the most help.
        </p>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {specialties.map((item, i) => (
          <FadeIn key={item.n} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-5 py-8 sm:gap-8 sm:py-10 md:gap-12 md:py-12"
              style={{
                borderTop:
                  i === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : undefined,
                borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
              }}
            >
              <span
                className="shrink-0 font-display font-black leading-none text-[#0C0C0C]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {item.n}
              </span>

              <div className="flex flex-col gap-3 pt-1 md:gap-4">
                <h3
                  className="font-display font-semibold uppercase leading-tight text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {item.h}
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed text-[#0C0C0C]"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    opacity: 0.6,
                  }}
                >
                  {item.p}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
