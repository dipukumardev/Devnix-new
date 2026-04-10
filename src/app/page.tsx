import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <main>
        <Hero />
        <Services />
        <About />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
