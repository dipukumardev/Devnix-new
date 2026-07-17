"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Star, Quote, Building2 } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Director, Devyora GRC Studio",
    service: "CRM Solutions",
    content:
      "The custom CRM they built runs our entire sales floor — quotations, telecaller EOD reports, call recordings, and site visits all in one dashboard. Our team finally has a single source of truth and follow-ups never slip anymore.",
    rating: 5,
    avatar: "/images/avatars/01.jpg",
  },
  {
    name: "Ananya Deshpande",
    role: "Founder, ShipEasy Logistics",
    service: "Custom Software",
    content:
      "Off-the-shelf tools never fit our workflow. Devnix built custom software with role-based dashboards and APIs exactly around how we operate. It removed hours of manual work every single day.",
    rating: 5,
    avatar: "/images/avatars/02.jpg",
  },
  {
    name: "Vikram Singh",
    role: "Operations Head, Metro Traders",
    service: "Automation Software",
    content:
      "They automated our repetitive reporting and connected all our tools — WhatsApp, email, and sheets. What used to take our team 15+ hours a week now runs completely on autopilot.",
    rating: 5,
    avatar: "/images/avatars/03.jpg",
  },
  {
    name: "Priya Nair",
    role: "Marketing Head, Greentech Services",
    service: "Website Development",
    content:
      "Our new website is blazing fast and beautifully designed. Traffic is up over 180% and enquiries have doubled. The team understood our brand and delivered ahead of schedule.",
    rating: 5,
    avatar: "/images/avatars/04.jpg",
  },
  {
    name: "Arjun Kapoor",
    role: "Product Manager, CanHiring",
    service: "Mobile App Development",
    content:
      "The mobile app they built is smooth, reliable, and our users love it. Downloads jumped 150% after launch and our retention has never been better. Best investment we've made.",
    rating: 5,
    avatar: "/images/avatars/05.jpg",
  },
  {
    name: "Sneha Iyer",
    role: "Co-Founder, Listify.ae",
    service: "Marketplace & Portal",
    content:
      "From listings and search to user dashboards and payments, they delivered a complete marketplace platform. It's scalable, SEO-ready, and our sellers find it incredibly easy to use.",
    rating: 5,
    avatar: "/images/avatars/06.jpg",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      {/* Section background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/testimonials-bg.jpg"
          alt="Business meeting"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.05]"
        />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-accent/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            What Our Clients{" "}
            <span className="gradient-text">Say</span>
          </h2>
          <p className="mt-6 text-lg text-muted max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from the businesses
            we&apos;ve helped transform.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-surface border border-border hover:border-primary/20 transition-all duration-500 group"
            >
              {/* Header: quote icon + service tag */}
              <div className="mb-4 flex items-center justify-between">
                <Quote
                  size={32}
                  className="text-primary/20 group-hover:text-primary/40 transition-colors"
                />
                <span className="rounded-full border border-border bg-surface-light px-3 py-1 text-xs font-medium text-primary-light">
                  {testimonial.service}
                </span>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Company / role */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent ring-2 ring-primary/20">
                  <Building2 size={18} className="text-white" />
                </div>
                <div className="text-sm font-semibold text-white">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
