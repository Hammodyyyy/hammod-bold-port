import FadeIn from '../components/FadeIn';
import GhostButton from '../components/GhostButton';
import GradientButton from '../components/GradientButton';
import Magnet from '../components/Magnet';
import Shot from '../components/Shot';
import { availability, hero, navLinks, profile, projects } from '../lib/data';

// Three bright screens instead of one dark one. The old hero used the skill
// tree poster, which is navy on near-black and barely registered, with a scrim
// on top darkening it further for a wordmark that never overlapped it.
const FAN = [
  { img: projects[4].img, cls: 'hidden md:block w-[26%] -rotate-6 translate-y-6' },
  { img: projects[3].img, cls: 'w-[88%] md:w-[44%] z-10' },
  { img: projects[2].img, cls: 'hidden md:block w-[26%] rotate-6 translate-y-6' },
];

export default function HeroSection() {
  return (
    // svh is the viewport with the mobile browser chrome showing, so the hero
    // does not resize under the reader when the address bar hides
    <section
      className="relative flex h-screen min-h-[640px] flex-col supports-[height:100svh]:h-[100svh]"
      style={{ overflowX: 'clip' }}
    >
      {/* navbar */}
      <FadeIn as="nav" delay={0} y={-20} className="relative z-30 w-full">
        <div className="flex items-center justify-between gap-4 px-6 pt-6 md:px-10 md:pt-8">
          <a
            href="#top"
            className="-my-2 flex min-h-[44px] shrink-0 items-center gap-2.5 text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70"
          >
            <Shot
              src={profile.avatar}
              alt=""
              loading="eager"
              sizes="36px"
              className="h-8 w-8 rounded-full border border-white/15 object-cover md:h-9 md:w-9"
            />
            <span className="hidden font-display text-sm font-semibold tracking-tight xs:inline sm:text-base md:text-lg">
              {profile.name}
            </span>
          </a>

          <ul className="-my-2 flex items-center gap-1 sm:gap-5 md:gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="flex min-h-[44px] items-center px-2 font-mono text-[10px] uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 sm:text-xs md:text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>

      {/* the void between the wordmark and the artwork is now filled with the
          thing the hero was missing entirely: what he actually does */}
      <div className="relative z-30 flex flex-1 flex-col items-center justify-center px-6">
        <FadeIn delay={0.1} y={-10}>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-[#D7E2EA]/75 sm:text-[10px]">
            <span className="relative flex h-2 w-2 shrink-0">
              {availability.open && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              )}
              <span
                className={`relative inline-flex h-2 w-2 rounded-full ${
                  availability.open ? 'bg-emerald-400' : 'bg-amber-400'
                }`}
              />
            </span>
            {availability.open ? availability.label : 'Currently booked'}
          </span>
        </FadeIn>

        {/* breaks out of the parent's px-6 so 19vw of nowrap type still has a
            full viewport to sit in, otherwise the last letter is clipped */}
        <div className="-mx-6 w-screen overflow-hidden">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading mt-3 w-full whitespace-nowrap text-center text-[19vw] font-black uppercase leading-[0.85] tracking-tight lg:text-[19.5vw]">
              {profile.name}
            </h1>
          </FadeIn>
        </div>

        <FadeIn delay={0.28} y={20}>
          <p
            className="mx-auto mt-5 max-w-[620px] text-center font-light leading-relaxed text-[#D7E2EA]/70 sm:mt-6"
            style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)' }}
          >
            I design, animate, and build interfaces for Roblox games. Shops,
            HUDs, menus, and full systems, delivered working inside Studio.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} y={20}>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <GradientButton href={hero.ctaPrimary.href}>
              {hero.ctaPrimary.label}
            </GradientButton>
            <GhostButton href={hero.ctaSecondary.href}>
              {hero.ctaSecondary.label}
            </GhostButton>
          </div>
        </FadeIn>
      </div>

      {/* artwork fanned along the bottom edge, cropped by the fold so it reads
          as something to scroll into rather than a floating island */}
      <div className="pointer-events-none relative z-20 w-full px-4 md:px-10">
        <FadeIn delay={0.55} y={40}>
          <Magnet
            padding={160}
            strength={6}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            wrapperClassName="block w-full"
          >
            <div className="mx-auto flex max-w-[1100px] items-end justify-center gap-3 md:gap-5">
              {FAN.map((item, i) => (
                <div
                  key={i}
                  className={`overflow-hidden rounded-2xl border border-white/12 shadow-[0_-10px_60px_rgba(0,0,0,0.6)] ${item.cls}`}
                >
                  <Shot
                    src={item.img}
                    alt=""
                    loading="eager"
                    sizes="(min-width: 768px) 44vw, 64vw"
                    className="w-full select-none object-cover"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
}
