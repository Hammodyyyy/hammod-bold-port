import AboutSection from '@/sections/AboutSection';
import ContactSection from '@/sections/ContactSection';
import FAQSection from '@/sections/FAQSection';
import HeroSection from '@/sections/HeroSection';
import MarqueeSection from '@/sections/MarqueeSection';
import PricingSection from '@/sections/PricingSection';
import ProcessSection from '@/sections/ProcessSection';
import ProjectsSection from '@/sections/ProjectsSection';
import SpecialtiesSection from '@/sections/SpecialtiesSection';
import StudioDemoSection from '@/sections/StudioDemoSection';
import TestimonialsSection from '@/sections/TestimonialsSection';

export default function Page() {
  return (
    <main
      id="top"
      className="relative w-full"
      style={{ background: '#0C0C0C', overflowX: 'clip' }}
    >
      <HeroSection />
      <MarqueeSection />
      <StudioDemoSection />
      <AboutSection />
      <SpecialtiesSection />
      <ProjectsSection />
      <PricingSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
