import { Plus } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import SectionHead from '../components/SectionHead';
import { faqs } from '../lib/data';

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="w-full px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28"
      style={{ background: '#0C0C0C' }}
    >
      <SectionHead
        eyebrow="FAQ"
        title="Questions, answered."
        className="mb-12 sm:mb-14 md:mb-16"
      />

      <div className="mx-auto max-w-[820px] border-t border-white/10">
        {faqs.map((faq, i) => (
          <FadeIn key={faq.q} delay={Math.min(i * 0.05, 0.3)} y={20}>
            <details className="group border-b border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 font-display text-base font-semibold leading-snug text-[#D7E2EA] transition-colors duration-200 hover:text-[#C084FC] sm:text-lg md:text-xl [&::-webkit-details-marker]:hidden">
                {faq.q}
                <Plus
                  size={20}
                  className="shrink-0 text-[#C084FC] transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="max-w-[62ch] pb-7 text-[15px] font-light leading-relaxed text-[#D7E2EA]/60 sm:text-base">
                {faq.a}
              </p>
            </details>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
