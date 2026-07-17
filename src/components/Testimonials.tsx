"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "Devnix transformed our online presence completely. Our website traffic increased by 200% and our conversion rate doubled within the first three months.",
    rating: 5,
    avatar: "/images/avatars/01.jpg",
  },
  {
    name: "Michael Chen",
    role: "Founder, GreenLeaf",
    content:
      "The team's attention to detail and creative approach exceeded our expectations. They didn't just build a website — they built a growth engine for our business.",
    rating: 5,
    avatar: "/images/avatars/02.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, HealthPlus",
    content:
      "Working with Devnix on our SEO strategy was a game-changer. We went from page 5 to page 1 for our target keywords. Outstanding results.",
    rating: 5,
    avatar: "/images/avatars/03.jpg",
  },
  {
    name: "David Kim",
    role: "CTO, FinFlow",
    content:
      "Their technical expertise is unmatched. The custom dashboard they built handles millions of data points seamlessly. Highly recommend for complex projects.",
    rating: 5,
    avatar: "/images/avatars/04.jpg",
  },
  {
    name: "Lisa Thompson",
    role: "Owner, Bella Boutique",
    content:
      "From branding to e-commerce, Devnix handled everything. My online store now generates 3x more revenue than my physical store. Incredible team!",
    rating: 5,
    avatar: "/images/avatars/05.jpg",
  },
  {
    name: "James Wilson",
    role: "Product Manager, CloudSync",
    content:
      "The mobile app they developed is smooth, fast, and our users love it. Downloads increased by 150% after the redesign. Best investment we've made.",
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
              {/* Quote Icon */}
              <Quote
                size={32}
                className="text-primary/20 mb-4 group-hover:text-primary/40 transition-colors"
              />

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

              {/* Author with avatar */}
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-primary/20">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
