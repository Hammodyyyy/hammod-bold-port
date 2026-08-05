import { Check } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import GhostButton from '../components/GhostButton';
import SectionHead from '../components/SectionHead';
import { contact, priceNote, priceUnit, pricingHead, services } from '../lib/data';

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="w-full px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <SectionHead
        eyebrow={pricingHead.eyebrow}
        title={pricingHead.h}
        sub={pricingHead.p}
        className="mb-14 sm:mb-16 md:mb-20"
      />

      {/* three tiers in 768px leaves ~240px each, which is too tight for the
          feature lists: tablets get the stacked layout instead */}
      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
        {services.map((svc, i) => (
          <FadeIn key={svc.tier} delay={i * 0.1} y={30} className="h-full">
            <div
              className={`relative flex h-full flex-col rounded-[28px] p-7 transition-transform duration-300 hover:-translate-y-1.5 sm:p-8 ${
                svc.highlight
                  ? 'border-2 border-transparent text-white shadow-[0_28px_60px_rgba(124,58,237,0.42)]'
                  : 'border border-white/12 bg-white/[0.03] text-[#D7E2EA]'
              }`}
              style={
                svc.highlight
                  ? {
                      // same violet family as the contact band: the two
                      // featured surfaces share a colour, the controls do not
                      background:
                        'radial-gradient(120% 100% at 50% 0%, rgba(255,255,255,0.16), transparent 58%), linear-gradient(160deg, #4C1D95 0%, #7C3AED 52%, #C026D3 100%)',
                      outline: '2px solid rgba(255,255,255,0.9)',
                      outlineOffset: '-3px',
                    }
                  : undefined
              }
            >
              {svc.highlight && (
                <span className="absolute right-7 top-7 rounded-full bg-white px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-[#7C3AED] sm:right-8 sm:top-8">
                  Most picked
                </span>
              )}

              <h3 className="font-display text-xl font-semibold uppercase tracking-wide">
                {svc.tier}
              </h3>

              <p className="mt-3.5 font-display text-[26px] font-black leading-none">
                {svc.price}
                <span
                  className={`ml-1.5 text-sm font-light ${
                    svc.highlight ? 'text-white/70' : 'text-[#D7E2EA]/45'
                  }`}
                >
                  {priceUnit}
                </span>
              </p>

              <p
                className={`mb-5 mt-4 border-b pb-5 text-[13.5px] font-light ${
                  svc.highlight
                    ? 'border-white/25 text-white/75'
                    : 'border-white/10 text-[#D7E2EA]/45'
                }`}
              >
                {svc.forWho}
              </p>

              <ul className="flex flex-1 flex-col gap-3">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14.5px] font-light leading-snug">
                    <Check
                      size={15}
                      strokeWidth={2.5}
                      className={`mt-[3px] shrink-0 ${
                        svc.highlight ? 'text-white' : 'text-[#C084FC]'
                      }`}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                {svc.highlight ? (
                  <a
                    href={contact.ctaPrimary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[44px] w-full items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium uppercase tracking-widest text-[#7C3AED] shadow-[0_8px_22px_rgba(0,0,0,0.2)] transition-transform duration-200 hover:scale-[1.03]"
                  >
                    {svc.cta}
                  </a>
                ) : (
                  <GhostButton
                    href={contact.ctaPrimary.href}
                    className="w-full"
                  >
                    {svc.cta}
                  </GhostButton>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.1} y={20}>
        <p className="mx-auto mt-9 max-w-[62ch] text-center text-base font-light leading-relaxed text-[#D7E2EA]/60">
          {priceNote.main}
        </p>
        <p className="mx-auto mt-3 max-w-[62ch] text-center text-sm font-light text-[#D7E2EA]/40">
          {priceNote.small}{' '}
          <a
            href={contact.ctaPrimary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C084FC] underline decoration-1 underline-offset-[3px] transition-colors hover:text-white"
          >
            {priceNote.smallLink}
          </a>
        </p>
      </FadeIn>
    </section>
  );
}
