"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { getServiceBySlug, type ServiceData } from "@/data/services";
import { notFound } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

function getStats(service: ServiceData) {
  if (service.stats && service.stats.length > 0) return service.stats;
  return [
    { number: `${service.features.length}+`, label: "Key Features" },
    { number: `${service.process.length}`, label: "Step Process" },
    { number: "100%", label: "Custom Built" },
    { number: "24/7", label: "Support" },
  ];
}

function getFaqs(service: ServiceData) {
  if (service.faqs && service.faqs.length > 0) return service.faqs;
  const title = service.title.toLowerCase();
  return [
    {
      q: `How long does a ${title} project take?`,
      a: "Timelines depend on scope, but most projects move from kickoff to launch in a few weeks. After discovery we give you a clear milestone plan with delivery dates.",
    },
    {
      q: "Is the solution built specifically for us?",
      a: `Yes. We tailor every ${title} engagement to your goals, brand, and workflow — no generic templates or unused features.`,
    },
    {
      q: "Can you work with our existing tools?",
      a: "Absolutely. We integrate with the systems you already use — from analytics and email to CRMs and payment gateways — so everything stays connected.",
    },
    {
      q: "Do you offer ongoing support after launch?",
      a: "Yes. Every plan includes a support window, and we offer flexible retainers for maintenance, improvements, and scaling as you grow.",
    },
  ];
}

export default function ServicePageContent({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug);
  if (!service) {
    notFound();
  }
  const Icon = service.icon;
  const stats = getStats(service);
  const faqs = getFaqs(service);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden py-24 lg:py-36">
          <div className="absolute inset-0">
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background" />
            <div className="absolute inset-0 bg-grid opacity-60" />
          </div>

          {/* Orbs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[140px]" />
            <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-accent/15 blur-[140px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/#services"
                className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-white"
              >
                <ArrowLeft size={16} />
                Back to Services
              </Link>

              <div className="mb-6 flex items-center gap-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg">
                  <Icon size={30} className="text-white" />
                </div>
                <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                  {service.title}
                </h1>
              </div>

              <p className="max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
                {service.heroDescription}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
                >
                  Start Your Project
                  <ArrowRight
                    size={20}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:bg-surface-light"
                >
                  Explore Features
                </a>
              </div>

              {/* Stats */}
              <div className="mt-16 grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-border bg-surface/50 p-5 text-center backdrop-blur-sm"
                  >
                    <div className="gradient-text text-3xl font-bold md:text-4xl">
                      {stat.number}
                    </div>
                    <div className="mt-1 text-sm text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16 text-center"
            >
              <span className="text-sm font-medium uppercase tracking-widest text-accent">
                What&apos;s Included
              </span>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                Key <span className="gradient-text">Features</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted">
                Everything you need, built to a premium standard and tailored to
                your business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {service.features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                  className="group rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                    <span className="text-lg font-bold text-white">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white transition-colors group-hover:text-primary-light">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process & Benefits */}
        <section className="border-y border-border bg-surface/40 py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-8">
            {/* Process */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-medium uppercase tracking-widest text-accent">
                How We Work
              </span>
              <h2 className="mb-10 mt-4 text-3xl font-bold text-white md:text-4xl">
                Our <span className="gradient-text">Process</span>
              </h2>
              <div className="relative space-y-8 before:absolute before:left-5 before:top-2 before:h-[calc(100%-2rem)] before:w-px before:bg-border">
                {service.process.map((step, index) => (
                  <div key={index} className="relative flex gap-5">
                    <div className="z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <div className="pt-2">
                      <p className="font-medium text-white">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-medium uppercase tracking-widest text-accent">
                Why Choose Us
              </span>
              <h2 className="mb-10 mt-4 text-3xl font-bold text-white md:text-4xl">
                Key <span className="gradient-text">Benefits</span>
              </h2>
              <div className="rounded-2xl border border-border bg-surface p-8">
                <div className="space-y-5">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                        <Check size={14} className="text-white" />
                      </div>
                      <p className="text-muted">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16 text-center"
            >
              <span className="text-sm font-medium uppercase tracking-widest text-accent">
                Transparent Pricing
              </span>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                Plans That <span className="gradient-text">Scale With You</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted">
                Transparent pricing with no hidden fees. Pick the plan that fits
                your budget and scale up as you grow.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {(
                Object.entries(service.pricing) as [
                  string,
                  { price: string; features: string[] },
                ][]
              ).map(([tier, plan], index) => {
                const isPopular = tier === "professional";
                return (
                  <motion.div
                    key={tier}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    className={`relative rounded-2xl p-8 ${
                      isPopular
                        ? "scale-105 border-2 border-primary/40 bg-gradient-to-b from-primary/10 to-surface"
                        : "border border-border bg-surface"
                    }`}
                  >
                    {isPopular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1.5 text-xs font-bold text-white">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <h3 className="mb-2 text-lg font-semibold capitalize text-white">
                      {tier}
                    </h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">
                        {plan.price}
                      </span>
                    </div>

                    <ul className="mb-8 space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm"
                        >
                          <Check
                            size={16}
                            className="mt-0.5 flex-shrink-0 text-accent"
                          />
                          <span className="text-muted">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className={`inline-flex w-full items-center justify-center rounded-xl py-3 text-sm font-medium transition-all duration-300 ${
                        isPopular
                          ? "bg-gradient-to-r from-primary to-accent text-white hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                          : "border border-border bg-surface-light text-white hover:border-primary/30 hover:text-primary-light"
                      }`}
                    >
                      Get Started
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-y border-border bg-surface/40 py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-14 text-center"
            >
              <span className="text-sm font-medium uppercase tracking-widest text-accent">
                Questions
              </span>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                Frequently <span className="gradient-text">Asked</span>
              </h2>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="rounded-2xl border border-border bg-surface p-6"
                >
                  <h3 className="mb-2 font-semibold text-white">{faq.q}</h3>
                  <p className="text-sm leading-relaxed text-muted">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                Ready to Get Started with{" "}
                <span className="gradient-text">{service.title}</span>?
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-lg text-muted">
                Let&apos;s discuss your project and find the perfect solution for
                your business. Free consultation — no strings attached.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                >
                  Start Your Project
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link
                  href="/#services"
                  className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 font-medium text-white transition-all duration-300 hover:border-primary/30 hover:text-primary-light"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
