"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden pt-20 pb-6 sm:pb-8"
    >
      {/* Background Video (image poster as fallback) */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-bg.jpg"
          aria-hidden="true"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Fallback image behind the video for no-JS / codec issues */}
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-grid" />
      </div>

      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-primary/20 blur-[128px] md:h-96 md:w-96"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-accent/20 blur-[128px] md:h-96 md:w-96"
        />
      </div>

      {/* Floating particles — hidden on short viewports to reduce clutter */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute hidden h-1 w-1 rounded-full bg-primary-light/40 min-[900px]:block"
          style={{
            top: `${20 + i * 12}%`,
            left: `${10 + i * 15}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 text-center lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1.5 backdrop-blur-sm sm:mb-6 sm:px-4 sm:py-2 [@media(max-height:720px)]:mb-3"
        >
          <Sparkles size={14} className="text-accent" />
          <span className="text-xs text-muted sm:text-sm">
            Automation • Custom Software • CRM
          </span>
        </motion.div>

        {/* Heading — fluid type so it fits short and tall screens */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[clamp(2rem,5.5vw+0.5rem,5.5rem)] font-bold leading-[1.05] tracking-tight [@media(max-height:720px)]:text-[clamp(1.75rem,4vw+0.5rem,3.25rem)]"
        >
          <span className="text-white">We Build</span>
          <br />
          <span className="gradient-text">Software That Runs</span>
          <br />
          <span className="text-white">Your Business</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted sm:mt-6 sm:text-lg md:text-xl [@media(max-height:720px)]:mt-3 [@media(max-height:720px)]:text-sm"
        >
          From business automation tools and custom software like CRMs to
          high-performing websites and mobile apps — we build everything your
          business needs to scale.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4 [@media(max-height:720px)]:mt-4"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25 sm:px-8 sm:py-3.5 sm:text-lg"
          >
            Start Your Project
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-surface-light sm:px-8 sm:py-3.5 sm:text-lg"
          >
            View Our Work
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:mt-12 sm:gap-6 md:mt-14 md:grid-cols-4 md:gap-8 [@media(max-height:720px)]:mt-6 [@media(max-height:720px)]:gap-3"
        >
          {[
            { number: "15+", label: "Projects Delivered" },
            { number: "12+", label: "Happy Clients" },
            { number: "2+", label: "Years Experience" },
            { number: "99%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl font-bold gradient-text sm:text-3xl md:text-4xl [@media(max-height:720px)]:text-2xl">
                {stat.number}
              </div>
              <div className="mt-1 text-xs text-muted sm:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade — shorter so it doesn't crowd stats */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent sm:h-24" />
    </section>
  );
}
