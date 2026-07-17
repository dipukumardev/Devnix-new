"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Check,
  FileText,
  LayoutDashboard,
  MapPin,
  Phone,
  PlugZap,
  ShieldCheck,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import { getServiceBySlug } from "@/data/services";
import Navbar from "./Navbar";
import Footer from "./Footer";

const stats = [
  { number: "20+", label: "CRM Modules" },
  { number: "6+", label: "Team Roles" },
  { number: "1", label: "Unified Dashboard" },
  { number: "24/7", label: "Cloud Access" },
];

const modules = [
  {
    icon: Users,
    title: "Leads & Contacts",
    description:
      "Capture, organize, and segment every lead and customer with custom fields, groups, tags, and a full activity timeline.",
  },
  {
    icon: TrendingUp,
    title: "Sales Pipeline & Deals",
    description:
      "Visual pipelines with stage automation, deal forecasting, and confirmed vs lost tracking so nothing slips through.",
  },
  {
    icon: FileText,
    title: "Quotations & Orders",
    description:
      "Create quotations, manage client groups, track revisions, and convert approved quotes into confirmed orders.",
  },
  {
    icon: Phone,
    title: "Telecaller Operations",
    description:
      "Daily EOD reports, call logging, and call-recording uploads keep the sales floor accountable and measurable.",
  },
  {
    icon: MapPin,
    title: "Site Visits & Field Work",
    description:
      "Raise visit requests, approve them, and coordinate on-ground teams — closing the loop between office and field.",
  },
  {
    icon: Workflow,
    title: "Automation & Reminders",
    description:
      "Trigger follow-ups, task assignments, and reminders automatically so your team focuses on selling, not admin.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & Reports",
    description:
      "Real-time, role-based dashboards for revenue, conversion, team performance, and daily activity — all exportable.",
  },
  {
    icon: PlugZap,
    title: "Integrations",
    description:
      "Connect email, WhatsApp, calling, and payments so customer data stays in sync across your entire stack.",
  },
  {
    icon: ShieldCheck,
    title: "Roles & Permissions",
    description:
      "Registration with admin approval and granular access — every role sees exactly what it needs, nothing more.",
  },
];

const roles = [
  {
    title: "Admin",
    description:
      "Approves new users, configures modules, and gets full oversight across the whole organization.",
  },
  {
    title: "Sales Manager",
    description:
      "Monitors pipelines, quotations, and team targets with forecasting and conversion reporting.",
  },
  {
    title: "Telecaller",
    description:
      "Works leads, submits daily EOD reports, and uploads call recordings from a focused workspace.",
  },
  {
    title: "Dealer",
    description:
      "Registers for approved access, manages assigned clients, and raises quotations and orders.",
  },
  {
    title: "Field Staff",
    description:
      "Receives approved site visits and updates on-ground status directly from mobile.",
  },
  {
    title: "Support",
    description:
      "Handles customer queries with the full contact timeline and reminder workflows at hand.",
  },
];

const process = [
  {
    title: "Discovery & workflow mapping",
    description:
      "We study exactly how your team sells, reports, and runs field operations before designing anything.",
  },
  {
    title: "Data model & role design",
    description:
      "We architect your pipelines, modules, and role-based permissions around your real process.",
  },
  {
    title: "Build, automate & integrate",
    description:
      "Custom modules, automations, and integrations (email, WhatsApp, calling, payments) are developed and tested.",
  },
  {
    title: "Data migration & onboarding",
    description:
      "We migrate existing records and train each role so adoption is fast and friction-free.",
  },
  {
    title: "Launch & ongoing support",
    description:
      "We go live, monitor usage, and keep improving the CRM as your team and processes scale.",
  },
];

const benefits = [
  "One single source of truth for every customer and deal",
  "Role-based access with admin-approved registration",
  "Automation removes hours of manual follow-up each week",
  "Structured pipelines lift conversion and win rates",
  "Real-time dashboards for data-driven decisions",
  "Built to scale as you add roles, modules, and volume",
];

const faqs = [
  {
    q: "Is this a ready-made CRM or built for us?",
    a: "It's fully custom. We build the modules, pipelines, and roles around how your team actually works — not the other way around — so there are no unused features or awkward workarounds.",
  },
  {
    q: "Can you migrate our existing customer data?",
    a: "Yes. We import your existing leads, contacts, and deals from spreadsheets or your current tool, with deduplication and validation, as part of onboarding.",
  },
  {
    q: "Does it support role-based access and approvals?",
    a: "Absolutely. New telecallers and dealers register first and are approved by an admin before they can sign in, and each role only sees the modules relevant to them.",
  },
  {
    q: "Which tools can it integrate with?",
    a: "Email, WhatsApp, calling/call recordings, payment gateways, and marketing tools are all supported, so customer data stays in sync across your stack.",
  },
  {
    q: "Can we access it on mobile in the field?",
    a: "Yes. The CRM is a responsive cloud application, so field staff can update site visits and telecallers can log activity from any device, 24/7.",
  },
];

export default function CrmServiceContent() {
  const service = getServiceBySlug("crm-solutions");
  const pricing = service?.pricing;

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden py-24 lg:py-36">
          <div className="absolute inset-0">
            <Image
              src="/images/services/crm-solutions.jpg"
              alt="CRM Solutions"
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

              <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                A CRM Built Around{" "}
                <span className="gradient-text">How Your Team Sells</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
                We design and build custom CRM platforms that centralize leads,
                quotations, telecaller reporting, site visits, and pipelines into
                one unified, role-based dashboard — so your team closes more deals
                and management sees everything in real time.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
                >
                  Book a Free Demo
                  <ArrowRight
                    size={20}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <a
                  href="#modules"
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

        {/* Modules */}
        <section id="modules" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16 text-center"
            >
              <span className="text-sm font-medium uppercase tracking-widest text-accent">
                Everything In One Place
              </span>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                What Your <span className="gradient-text">CRM Manages</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted">
                From the first quotation to daily field reporting — every module
                is tailored to your workflow and connected through one dashboard.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {modules.map((mod, index) => (
                <motion.div
                  key={mod.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                  className="group rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                    <mod.icon size={22} className="text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white transition-colors group-hover:text-primary-light">
                    {mod.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {mod.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Roles */}
        <section className="border-y border-border bg-surface/40 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16 text-center"
            >
              <span className="text-sm font-medium uppercase tracking-widest text-accent">
                Role-Based Access
              </span>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                One Platform, <span className="gradient-text">Every Role</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted">
                Users register and get admin approval, then land in a workspace
                built for their responsibilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {roles.map((role, index) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-6"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                    <ShieldCheck size={20} className="text-primary-light" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{role.title}</h3>
                    <p className="mt-1 text-sm text-muted">{role.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process & Benefits */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-8">
            {/* Process */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-medium uppercase tracking-widest text-accent">
                How We Build It
              </span>
              <h2 className="mb-10 mt-4 text-3xl font-bold text-white md:text-4xl">
                Your CRM, <span className="gradient-text">Step by Step</span>
              </h2>
              <div className="relative space-y-8 before:absolute before:left-5 before:top-2 before:h-[calc(100%-2rem)] before:w-px before:bg-border">
                {process.map((step, index) => (
                  <div key={step.title} className="relative flex gap-5">
                    <div className="z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <div className="pt-1">
                      <h3 className="font-semibold text-white">{step.title}</h3>
                      <p className="mt-1 text-sm text-muted">
                        {step.description}
                      </p>
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
                Built for <span className="gradient-text">Real Results</span>
              </h2>
              <div className="rounded-2xl border border-border bg-surface p-8">
                <div className="space-y-5">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                        <Check size={14} className="text-white" />
                      </div>
                      <p className="text-muted">{benefit}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-3 rounded-xl border border-border bg-surface-light p-4">
                  <Bell size={18} className="text-accent" />
                  <p className="text-sm text-muted">
                    Automated reminders and EOD reports keep every deal moving —
                    even when your team is in the field.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing */}
        {pricing && (
          <section className="border-y border-border bg-surface/40 py-20 lg:py-28">
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
                  Start with the essentials and grow into a fully custom platform.
                  No hidden fees — just clear scope.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {(
                  Object.entries(pricing) as [
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
        )}

        {/* FAQ */}
        <section className="py-20 lg:py-28">
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
        <section className="border-t border-border bg-surface/40 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                Ready to Run Your Business on a{" "}
                <span className="gradient-text">Custom CRM</span>?
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-lg text-muted">
                Book a free consultation and we&apos;ll map your sales and field
                workflow to a CRM that fits perfectly — no strings attached.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                >
                  Book a Free Demo
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
