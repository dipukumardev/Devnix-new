"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

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
            <Link
              key={service.title}
              href={`/services/${service.slug}`}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden bg-surface border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 h-full"
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
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More
                    <ArrowRight size={14} />
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
