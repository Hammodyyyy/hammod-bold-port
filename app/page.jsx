import Loader from "@/components/Loader";
import Cursor from "@/components/Cursor";
import Backdrop from "@/components/Backdrop";
import Grain from "@/components/Grain";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Rules from "@/components/Rules";
import Process from "@/components/Process";
import BeforeAfter from "@/components/BeforeAfter";
import Work from "@/components/Work";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Sign from "@/components/Sign";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";

export default function Page() {
  return (
    <>
      <Loader />
      <Cursor />
      <Backdrop />
      <Grain />
      <div className="content">
        <Nav />
        <Hero />
        <Marquee />
        <Rules />
        <Process />
        <BeforeAfter />
        <Work />
        <FAQ />
        <Testimonials />
        <Sign />
        <Footer />
      </div>
      <SiteEffects />
    </>
  );
}
