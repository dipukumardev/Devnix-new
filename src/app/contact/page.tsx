import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { SITE_EMAIL, SITE_PHONE_DISPLAY } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Contact | Devnix Digital Agency",
  description: `Reach Devnix at ${SITE_EMAIL} or ${SITE_PHONE_DISPLAY} for web development, SEO, design, and digital marketing. We respond within one business day.`,
  keywords: [
    "contact",
    "digital agency",
    "web development quote",
    "Devnix",
    "consultation",
    SITE_EMAIL,
    SITE_PHONE_DISPLAY,
  ],
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Contact variant="page" />
      </main>
      <Footer />
    </>
  );
}
