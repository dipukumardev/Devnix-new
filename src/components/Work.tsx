"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { portfolioProjects, type PortfolioProject } from "@/data/portfolio";

function ProjectCardBody({
  project,
}: {
  project: Pick<
    PortfolioProject,
    "title" | "category" | "summary" | "tags" | "image"
  >;
}) {
  return (
    <>
      <div className="relative h-52 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-black/30 to-transparent" />
        <div className="pointer-events-none absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            <ArrowRight size={16} className="text-white" aria-hidden />
          </div>
        </div>
        <div className="absolute bottom-4 left-6">
          <span className="rounded-full bg-black/30 px-3 py-1 text-sm text-white/80 backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-primary-light">
          {project.title}
        </h3>
        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-muted">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-surface-light px-3 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-4 text-xs font-medium text-primary-light/90">
          View case study →
        </p>
      </div>
    </>
  );
}

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Our Portfolio
          </span>
          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            A selection of projects that showcase our expertise across different
            industries and technologies. Click a card for the full case study.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project, index) => {
            const cardClass =
              "group relative rounded-2xl overflow-hidden bg-surface border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2";
            const motionProps = {
              initial: { opacity: 0, y: 40 },
              animate: isInView ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.5, delay: index * 0.1 },
              className: cardClass,
            };
            return (
              <motion.div key={project.slug} {...motionProps}>
                <Link
                  href={`/work/${project.slug}`}
                  className="block h-full rounded-2xl text-inherit no-underline outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <ProjectCardBody project={project} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
