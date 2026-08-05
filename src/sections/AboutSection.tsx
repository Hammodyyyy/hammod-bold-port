import AnimatedText from '../components/AnimatedText';
import FadeIn from '../components/FadeIn';
import GradientButton from '../components/GradientButton';
import Magnet from '../components/Magnet';
import Shot from '../components/Shot';
import { about, contact, profile, projects } from '../lib/data';

// Ambient corner props. The template shipped stock 3D renders hotlinked from a
// figma.site domain: these are real screens from the work instead, dimmed so
// they read as texture rather than competing with the copy.
const PROPS = [
  {
    img: projects[0].img,
    cls: 'left-[1%] top-[5%] w-[96px] sm:left-[2%] sm:w-[210px] md:left-[4%] md:w-[280px]',
    delay: 0.1,
    x: -80,
  },
  {
    img: projects[3].img,
    cls: 'bottom-[6%] left-[2%] w-[84px] sm:left-[6%] sm:w-[180px] md:left-[8%] md:w-[240px]',
    delay: 0.25,
    x: -80,
  },
  {
    img: projects[2].img,
    cls: 'right-[1%] top-[5%] w-[96px] sm:right-[2%] sm:w-[210px] md:right-[4%] md:w-[280px]',
    delay: 0.15,
    x: 80,
  },
  {
    img: projects[4].img,
    cls: 'bottom-[6%] right-[2%] w-[84px] sm:right-[6%] sm:w-[180px] md:right-[8%] md:w-[240px]',
    delay: 0.3,
    x: 80,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-5 py-24 supports-[min-height:100svh]:min-h-[100svh] sm:px-8 md:px-10"
      style={{ background: '#0C0C0C' }}
    >
      {PROPS.map((p, i) => (
        <div key={i} className={`pointer-events-none absolute ${p.cls}`}>
          <FadeIn delay={p.delay} x={p.x} y={0} duration={0.9}>
            <Shot
              src={p.img}
              alt=""
              sizes="280px"
              className="w-full rounded-xl border border-white/10 opacity-[0.18] blur-[1px]"
            />
          </FadeIn>
        </div>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <div className="flex flex-col items-center gap-7">
              <Magnet
                padding={120}
                strength={4}
                activeTransition="transform 0.3s ease-out"
                inactiveTransition="transform 0.6s ease-in-out"
              >
                <Shot
                  src={profile.avatar}
                  alt={profile.name}
                  sizes="112px"
                  className="h-24 w-24 rounded-full border-2 border-[#D7E2EA]/25 object-cover shadow-[0_18px_50px_rgba(0,0,0,0.6)] sm:h-28 sm:w-28"
                  draggable={false}
                />
              </Magnet>

              <h2
                className="hero-heading text-center font-display font-black uppercase leading-none tracking-tight"
                style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
              >
                {about.h}
              </h2>
            </div>
          </FadeIn>

          <AnimatedText
            text={about.text}
            className="max-w-[620px] text-center font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        <FadeIn delay={0.1} y={20}>
          <GradientButton href={contact.ctaPrimary.href}>
            Contact Me
          </GradientButton>
        </FadeIn>
      </div>
    </section>
  );
}
