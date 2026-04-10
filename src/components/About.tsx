"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { CheckCircle2, Zap, Users, Target } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "We move fast without sacrificing quality. Your project launched on time, every time.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "A passionate team of developers, designers, and strategists committed to your success.",
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "Every pixel, every line of code is optimized for real business outcomes and growth.",
  },
  {
    icon: CheckCircle2,
    title: "Transparent Process",
    description: "Regular updates, clear communication, and no surprises. You're always in the loop.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Section background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
          alt="Team collaboration"
          fill
          className="object-cover opacity-[0.07]"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual with real image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative shapes */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 rotate-6 scale-95" />
              <div className="absolute inset-0 rounded-3xl overflow-hidden border border-border">
                <Image
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=800&fit=crop"
                  alt="Our team working together"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-surface/30" />

                {/* Overlay content */}
                <div className="absolute inset-0 flex items-end justify-center pb-16">
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="w-24 h-24 mx-auto mb-6 rounded-full border-2 border-dashed border-primary/30 flex items-center justify-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">Dx</span>
                      </div>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-1">5+ Years</h3>
                    <p className="text-muted text-sm">Of Digital Excellence</p>
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-12 right-12 px-4 py-2 rounded-xl glass text-sm text-white"
                >
                  150+ Projects
                </motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute bottom-12 left-12 px-4 py-2 rounded-xl glass text-sm text-white"
                >
                  50+ Clients
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-medium text-accent uppercase tracking-widest">
              Why Choose Us
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
              We Don&apos;t Just Build —{" "}
              <span className="gradient-text">We Transform</span>
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Devnix is more than a digital agency. We&apos;re your strategic
              partner in navigating the digital landscape. We combine creativity
              with data to deliver solutions that don&apos;t just look great — they
              perform.
            </p>

            <div className="mt-10 grid gap-6">
              {reasons.map((reason, i) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl hover:bg-surface transition-colors duration-300"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <reason.icon size={22} className="text-primary-light" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{reason.title}</h4>
                    <p className="text-sm text-muted mt-1">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
