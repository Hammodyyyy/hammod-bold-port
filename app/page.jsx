import Loader from "@/components/Loader";
import Cursor from "@/components/Cursor";
import Grain from "@/components/Grain";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyMe from "@/components/WhyMe";
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
      <Grain />
      <div className="content">
        <Nav />
        <Hero />
        <TrustedBy />
        <Work />
        <Services />
        <Process />
        <WhyMe />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </div>
      <SiteEffects />
    </>
  );
}
