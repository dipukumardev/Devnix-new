"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { getProjectBySlug } from "@/data/portfolio";
import { notFound } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ProjectPageContent({ slug }: { slug: string }) {
  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="overflow-hidden pt-20">
        {/* Hero */}
        <section className="relative min-h-[calc(100dvh-5rem)] lg:min-h-[90vh]">
          <div className="absolute inset-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-background/75 lg:bg-background/65" />
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/10" />
            <div className="absolute inset-0 bg-grid opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
          </div>

          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                x: [0, 40, 0],
                y: [0, -30, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute -left-20 top-1/4 h-[28rem] w-[28rem] rounded-full bg-primary/25 blur-[120px]"
            />
            <motion.div
              animate={{
                x: [0, -50, 0],
                y: [0, 40, 0],
              }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute -right-20 bottom-1/4 h-[24rem] w-[24rem] rounded-full bg-accent/20 blur-[100px]"
            />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-5rem)] max-w-7xl flex-col justify-center px-6 py-14 lg:min-h-[90vh] lg:flex-row lg:items-center lg:gap-16 lg:py-20 xl:px-8">
            <div className="flex-1 lg:max-w-xl xl:max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
              >
                <Link
                  href="/#work"
                  className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted backdrop-blur-sm transition-colors hover:border-primary/30 hover:text-white"
                >
                  <ArrowLeft size={16} />
                  Back to work
                </Link>

                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm backdrop-blur-md">
                  <Sparkles size={15} className="text-accent" />
                  <span className="text-muted">Case study</span>
                  <span className="text-border">·</span>
                  <span className="font-medium text-primary-light">
                    {project.category}
                  </span>
                </div>

                <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
                  <span className="gradient-text">{project.title}</span>
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-muted md:text-xl">
                  {project.lead}
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  {project.tags.map((tag, ti) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.15 + ti * 0.04 }}
                      className="rounded-full border border-white/10 bg-surface/70 px-4 py-1.5 text-xs font-medium text-muted shadow-sm backdrop-blur-md"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30"
                    >
                      <ExternalLink size={18} />
                      {project.liveUrlLabel ?? "View live site"}
                    </a>
                  ) : null}
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-primary/10"
                  >
                    Discuss this build
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="relative mt-14 hidden flex-1 lg:mt-0 lg:block"
            >
              <div className="relative mx-auto aspect-[4/3] max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-surface/40 shadow-2xl shadow-black/50 ring-1 ring-white/5">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 480px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/10" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-background/60 p-4 backdrop-blur-xl">
                  <p className="text-xs font-medium uppercase tracking-wider text-accent">
                    Deliverables
                  </p>
                  <p className="mt-1 text-sm text-white/90">
                    Responsive UI · SEO-ready pages · Lead capture · CMS-ready
                    structure
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-2xl border border-primary/30 bg-primary/10 blur-sm" />
              <div className="pointer-events-none absolute -bottom-4 -left-4 h-20 w-20 rounded-full border border-accent/25 bg-accent/10" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 lg:block"
          >
            <div className="flex flex-col items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
              <span>Scroll</span>
              <span className="h-8 w-px bg-gradient-to-b from-accent to-transparent" />
            </div>
          </motion.div>
        </section>

        {/* Highlights — bento */}
        {project.highlights?.length ? (
          <section className="relative border-t border-border py-20 lg:py-28">
            <div className="pointer-events-none absolute left-1/2 top-0 h-px w-1/3 max-w-md -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-14 text-center"
              >
                <span className="text-sm font-medium uppercase tracking-widest text-accent">
                  At a glance
                </span>
                <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                  Project <span className="gradient-text">highlights</span>
                </h2>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {project.highlights.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="group relative overflow-hidden rounded-2xl border border-border/80 bg-surface/50 p-6 transition-colors duration-300 hover:border-primary/25 hover:bg-surface-light/30"
                  >
                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 text-accent">
                      <Check size={20} strokeWidth={2.5} aria-hidden />
                    </div>
                    <p className="relative text-sm leading-relaxed text-muted">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* Deep dive sections */}
        <section className="relative border-t border-border py-20 lg:py-28">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
          <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <span className="text-sm font-medium uppercase tracking-widest text-accent">
                Deep dive
              </span>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                How we <span className="gradient-text">approached it</span>
              </h2>
            </motion.div>

            <div className="space-y-8">
              {project.sections.map((section, i) => (
                <motion.article
                  key={section.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: Math.min(i * 0.06, 0.3) }}
                  className="relative overflow-hidden rounded-2xl border border-border/90 bg-gradient-to-br from-surface/90 to-surface-light/20 p-8 shadow-lg shadow-black/20 md:p-10"
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary/30" />
                  <div className="pl-2 md:pl-4">
                    <div className="mb-4 flex items-baseline gap-4">
                      <span className="font-mono text-3xl font-bold text-primary-light/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-xl font-semibold text-white md:text-2xl">
                        {section.title}
                      </h3>
                    </div>
                    <p className="leading-relaxed text-muted md:text-[1.05rem]">
                      {section.body}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden border-t border-border py-24 lg:py-32">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-accent/10" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />

          <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Want something{" "}
                <span className="gradient-text">similar?</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
                Share your sector, timeline, and goals — we&apos;ll propose a
                stack and roadmap that fits.
              </p>
              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-10 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-[1.03] hover:shadow-xl"
                >
                  Start a project
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link
                  href="/#work"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-10 py-4 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-primary/35 hover:text-primary-light"
                >
                  More case studies
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
