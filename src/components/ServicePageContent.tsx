"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, ArrowRight } from "lucide-react";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

export default function ServicePageContent({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug);
  if (!service) {
    notFound();
  }
  const Icon = service.icon;

  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
            <div
              className={`absolute inset-0 bg-gradient-to-b ${service.color} opacity-70`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-colors mb-8"
              >
                <ArrowLeft size={16} />
                Back to Services
              </Link>

              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg`}
                >
                  <Icon size={30} className="text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  {service.title}
                </h1>
              </div>

              <p className="text-lg md:text-xl text-muted max-w-3xl leading-relaxed">
                {service.heroDescription}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="text-sm font-medium text-accent uppercase tracking-widest">
                What&apos;s Included
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
                Key{" "}
                <span className="gradient-text">Features</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group rounded-2xl bg-surface border border-border p-8 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} mb-5`}
                  >
                    <span className="text-white font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-light transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process & Benefits */}
        <section className="py-20 lg:py-28 bg-surface/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Process */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-sm font-medium text-accent uppercase tracking-widest">
                  How We Work
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white mb-10">
                  Our{" "}
                  <span className="gradient-text">Process</span>
                </h2>
                <div className="space-y-6">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white font-bold text-sm`}
                      >
                        {index + 1}
                      </div>
                      <div className="pt-2">
                        <p className="text-white font-medium">{step}</p>
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
                <span className="text-sm font-medium text-accent uppercase tracking-widest">
                  Why Choose Us
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white mb-10">
                  Key{" "}
                  <span className="gradient-text">Benefits</span>
                </h2>
                <div className="space-y-5">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mt-0.5`}
                      >
                        <Check size={14} className="text-white" />
                      </div>
                      <p className="text-muted">{benefit}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="text-sm font-medium text-accent uppercase tracking-widest">
                Budget Friendly
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
                Pricing{" "}
                <span className="gradient-text">Plans</span>
              </h2>
              <p className="mt-4 text-muted max-w-2xl mx-auto">
                Transparent pricing with no hidden fees. Pick the plan that fits
                your budget and scale up as you grow.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                        ? "bg-gradient-to-b from-primary/10 to-surface border-2 border-primary/40 scale-105"
                        : "bg-surface border border-border"
                    }`}
                  >
                    {isPopular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span
                          className={`px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${service.color}`}
                        >
                          Most Popular
                        </span>
                      </div>
                    )}

                    <h3 className="text-lg font-semibold text-white capitalize mb-2">
                      {tier}
                    </h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">
                        {plan.price}
                      </span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm"
                        >
                          <Check
                            size={16}
                            className="text-accent flex-shrink-0 mt-0.5"
                          />
                          <span className="text-muted">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/#contact"
                      className={`inline-flex items-center justify-center w-full py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                        isPopular
                          ? `bg-gradient-to-r ${service.color} text-white hover:shadow-lg hover:shadow-primary/25 hover:scale-105`
                          : "bg-surface-light border border-border text-white hover:border-primary/30 hover:text-primary-light"
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

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-surface/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started with{" "}
                <span className="gradient-text">{service.title}</span>?
              </h2>
              <p className="text-muted max-w-2xl mx-auto mb-10 text-lg">
                Let&apos;s discuss your project and find the perfect solution for
                your business. Free consultation — no strings attached.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className={`inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r ${service.color} text-white font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105`}
                >
                  Start Your Project
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link
                  href="/#services"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-border text-white font-medium hover:border-primary/30 hover:text-primary-light transition-all duration-300"
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
