import Loader from "@/components/Loader";
import Cursor from "@/components/Cursor";
import Aurora from "@/components/Aurora";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Specialties from "@/components/Specialties";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyMe from "@/components/WhyMe";
import Toolkit from "@/components/Toolkit";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Sign";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";

export default function Page() {
  return (
    <>
      <Loader />
      <Cursor />
      <Aurora />
      <div className="content">
        <Nav />
        <Hero />
        <TrustedBy />
        <Projects />
        <Specialties />
        <Services />
        <Process />
        <WhyMe />
        <Toolkit />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </div>
      <SiteEffects />
    </>
  );
}
