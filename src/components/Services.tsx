"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Globe,
  Search,
  Palette,
  Megaphone,
  Smartphone,
  ShieldCheck,
  BarChart3,
  Code2,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Custom websites built with cutting-edge technologies. Fast, responsive, and optimized for conversions.",
    color: "from-violet-500 to-purple-600",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    icon: Search,
    title: "SEO Management",
    description:
      "Dominate search rankings with data-driven SEO strategies. On-page, off-page, and technical SEO expertise.",
    color: "from-cyan-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&h=400&fit=crop",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that users love. Research-backed designs that drive engagement.",
    color: "from-pink-500 to-rose-600",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Full-funnel marketing strategies. PPC, social media, email campaigns, and content marketing.",
    color: "from-orange-500 to-amber-600",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=400&fit=crop",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps. iOS, Android, and Progressive Web Apps built to perform.",
    color: "from-green-500 to-emerald-600",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
  },
  {
    icon: ShieldCheck,
    title: "Brand Identity",
    description:
      "Craft a memorable brand. Logo design, brand guidelines, visual identity, and brand strategy.",
    color: "from-indigo-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Data-driven decisions with comprehensive analytics. Track, measure, and optimize your performance.",
    color: "from-teal-500 to-cyan-600",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Tailored software solutions for complex business needs. APIs, dashboards, and enterprise tools.",
    color: "from-fuchsia-500 to-purple-600",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Services We{" "}
            <span className="gradient-text">Offer</span>
          </h2>
          <p className="mt-6 text-lg text-muted max-w-2xl mx-auto">
            End-to-end digital solutions tailored to elevate your brand, grow
            your audience, and maximize your ROI.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-surface border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Background Image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${service.color} opacity-60`} />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
                {/* Icon overlay */}
                <div className="absolute bottom-4 left-6">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} shadow-lg`}
                  >
                    <service.icon size={22} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-4">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-light transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
