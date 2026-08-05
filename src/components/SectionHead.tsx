import FadeIn from './FadeIn';

interface SectionHeadProps {
  eyebrow?: string;
  title: string;
  sub?: string;
  /** Dark canvas uses the gradient wordmark, the white panel uses solid ink. */
  tone?: 'dark' | 'light';
  className?: string;
}

export default function SectionHead({
  eyebrow,
  title,
  sub,
  tone = 'dark',
  className = '',
}: SectionHeadProps) {
  const light = tone === 'light';

  return (
    <div className={`mx-auto max-w-[640px] text-center ${className}`}>
      {eyebrow && (
        <FadeIn delay={0} y={20}>
          <span
            className={`mb-6 inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] ${
              light
                ? 'border-[#0C0C0C]/15 bg-[#0C0C0C]/[0.04] text-[#0C0C0C]/70'
                : 'border-white/10 bg-white/[0.04] text-[#D7E2EA]/70'
            }`}
          >
            <span
              className={`h-[5px] w-[5px] rounded-full ${
                light ? 'bg-[#0C0C0C]' : 'bg-[#C084FC]'
              }`}
            />
            {eyebrow}
          </span>
        </FadeIn>
      )}

      <FadeIn delay={0.08} y={40}>
        <h2
          className={`font-display font-black uppercase leading-none tracking-tight ${
            light ? 'text-[#0C0C0C]' : 'hero-heading'
          }`}
          style={{ fontSize: 'clamp(2.25rem, 6vw, 4.5rem)' }}
        >
          {title}
        </h2>
      </FadeIn>

      {sub && (
        <FadeIn delay={0.16} y={20}>
          <p
            className={`mx-auto mt-5 max-w-[56ch] font-light leading-relaxed ${
              light ? 'text-[#0C0C0C]/60' : 'text-[#D7E2EA]/65'
            }`}
            style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)' }}
          >
            {sub}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
