import FadeIn from '../components/FadeIn';
import SectionHead from '../components/SectionHead';
import ToolIcon from '../components/ToolIcon';
import { steps, toolkit } from '../lib/data';

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="w-full px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <SectionHead
        eyebrow="How it works"
        title="First message to handoff."
        sub="Four steps, no surprises. You know the price and the timeline before anything begins."
        className="mb-14 sm:mb-16 md:mb-20"
      />

      <div className="mx-auto flex max-w-[640px] flex-col gap-5">
        {steps.map((step, i) => (
          <FadeIn key={step.n} delay={i * 0.1} y={30}>
            <div className="relative pl-10 sm:pl-12">
              {/* spine + node */}
              <span className="absolute left-[7px] top-[26px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#C084FC] shadow-[0_0_0_4px_rgba(192,132,252,0.16)]" />
              {i < steps.length - 1 && (
                <span className="absolute bottom-[-20px] left-[7px] top-[26px] w-[2px] -translate-x-1/2 bg-white/10" />
              )}

              <div className="rounded-[22px] border border-white/12 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-white/25 sm:p-7">
                <span className="block font-display text-4xl font-black leading-none text-white/15 sm:text-5xl">
                  {step.n}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold uppercase tracking-wide text-[#D7E2EA] sm:text-xl">
                  {step.h}
                </h3>
                <p className="mt-2.5 text-[15px] font-light leading-relaxed text-[#D7E2EA]/55">
                  {step.p}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Toolkit used to be its own section head plus a three-card grid, which
          was a lot of page for three logos. It belongs to the process. */}
      <FadeIn delay={0.1} y={20}>
        <div className="mx-auto mt-14 flex max-w-[640px] flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-white/10 pt-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#D7E2EA]/35">
            Built with
          </span>
          {toolkit.map((tool) => (
            <span key={tool.name} className="inline-flex items-center gap-2.5">
              <ToolIcon name={tool.key} />
              <span className="font-display text-sm font-semibold tracking-tight text-[#D7E2EA]/75">
                {tool.name}
              </span>
            </span>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
