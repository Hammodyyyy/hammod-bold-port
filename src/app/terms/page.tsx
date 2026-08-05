import type { Metadata } from 'next';
import SocialIcon from '@/components/SocialIcon';
import { profile, socials, terms, termsHead } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Terms · Hammody',
  description:
    'Payment split, revision policy, scope changes, and delivery for Roblox UI projects.',
};

export default function TermsPage() {
  return (
    <main
      className="relative w-full px-5 pb-16 pt-24 sm:px-8 md:px-10 md:pt-32"
      style={{ background: '#0C0C0C' }}
    >
      <div className="mx-auto max-w-[720px]">
        <a
          href="/"
          className="-mx-2 inline-flex min-h-[44px] items-center px-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#D7E2EA]/45 transition-colors hover:text-[#C084FC]"
        >
          ← Back to site
        </a>

        <h1
          className="hero-heading mt-5 font-display font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.75rem, 9vw, 5rem)' }}
        >
          {termsHead.h}
        </h1>

        <p className="mt-5 max-w-[62ch] text-base font-light leading-relaxed text-[#D7E2EA]/65 sm:text-lg">
          {termsHead.lead}
        </p>

        {terms.map((section) => (
          <section
            key={section.h}
            className="mt-10 border-t border-white/10 pt-7 sm:mt-12"
          >
            <h2 className="font-display text-lg font-semibold uppercase tracking-wide text-[#D7E2EA] sm:text-xl">
              {section.h}
            </h2>
            {section.p.map((line) => (
              <p
                key={line}
                className="mt-3 max-w-[62ch] text-[15px] font-light leading-relaxed text-[#D7E2EA]/60 sm:text-base"
              >
                {line}
              </p>
            ))}
          </section>
        ))}

        <p className="mt-12 text-sm font-light text-[#D7E2EA]/45">
          {termsHead.updated} Questions?{' '}
          <a
            href={profile.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C084FC] underline decoration-1 underline-offset-[3px] transition-colors hover:text-white"
          >
            Message me on Discord.
          </a>
        </p>

        <footer className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 font-mono text-[10px] uppercase tracking-[0.08em] text-[#D7E2EA]/40">
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
      </div>
    </main>
  );
}
