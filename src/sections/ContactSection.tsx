import FadeIn from '../components/FadeIn';
import GhostButton from '../components/GhostButton';
import SocialIcon from '../components/SocialIcon';
import { contact, profile, socials } from '../lib/data';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full px-5 pb-16 pt-10 sm:px-8 md:px-10"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <div
          className="relative mx-auto max-w-[1160px] overflow-hidden rounded-[32px] px-6 py-16 text-center sm:rounded-[40px] sm:py-20 md:py-24"
          style={{
            // Violet counterpoint to the cyan controls. Cleaner than the
            // original: no near-black start, no burnt-orange end. Every stop
            // clears 4.75:1 against white, so the copy stays readable.
            background:
              'radial-gradient(90% 120% at 50% -15%, rgba(255,255,255,.16), transparent 55%), linear-gradient(150deg, #4C1D95 0%, #7C3AED 50%, #C026D3 100%)',
            boxShadow: '0 30px 70px rgba(124, 58, 237, .32)',
          }}
        >
          <h2
            className="font-display font-black uppercase leading-[1.04] tracking-tight text-white"
            style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
          >
            {contact.headline[0]}
            <br />
            <span className="text-white/70">{contact.headline[1]}</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[560px] text-base font-light leading-relaxed text-white/80 sm:text-lg">
            {contact.sub}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={contact.ctaPrimary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-white px-8 py-3.5 font-display text-xs font-medium uppercase tracking-widest text-[#7C3AED] shadow-[0_10px_26px_rgba(0,0,0,0.2)] transition-transform duration-200 hover:scale-[1.03] sm:px-10 sm:text-sm"
            >
              {contact.ctaPrimary.label}
            </a>
            <GhostButton href={contact.ctaSecondary.href} className="border-white/45 text-white hover:bg-white/15">
              {contact.ctaSecondary.label}
            </GhostButton>
          </div>

          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.08em] text-white/60">
            {contact.replyTime}
          </p>

          <div className="mt-11 flex flex-wrap justify-center gap-3 border-t border-white/20 pt-8">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[44px] items-center gap-2.5 rounded-full border border-white/25 bg-white/[0.08] px-4 py-2.5 font-mono text-[10.5px] text-white/85 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/15 hover:text-white"
              >
                <SocialIcon name={s.platform} className="h-[15px] w-[15px] shrink-0" />
                <span className="uppercase tracking-[0.08em]">{s.label}</span>
                <span className="text-white/55 transition-colors group-hover:text-white">
                  {s.handle}
                </span>
              </a>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* footer */}
      <footer className="mx-auto mt-12 flex max-w-[1160px] flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 font-mono text-[10px] uppercase tracking-[0.08em] text-[#D7E2EA]/40">
        <span>
          © {new Date().getFullYear()} {profile.name}. {profile.role}
        </span>
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="-m-2 flex h-11 w-11 items-center justify-center text-[#D7E2EA]/40 transition-colors hover:text-[#C084FC]"
            >
              <SocialIcon name={s.platform} className="h-[15px] w-[15px]" />
            </a>
          ))}
        </div>
      </footer>
    </section>
  );
}
