"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-stack e-commerce solution with custom CMS, payment integration, and analytics dashboard.",
    tags: ["Next.js", "Stripe", "Tailwind"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
  },
  {
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    description: "Intuitive analytics dashboard for a B2B SaaS startup. Increased user retention by 40%.",
    tags: ["React", "D3.js", "Figma"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
  },
  {
    title: "Healthcare App",
    category: "Mobile Development",
    description: "Cross-platform health tracking app with real-time monitoring and doctor consultation features.",
    tags: ["React Native", "Node.js", "AWS"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
  },
  {
    title: "Restaurant Chain SEO",
    category: "SEO & Marketing",
    description: "300% organic traffic increase in 6 months. Ranked #1 for 50+ local keywords.",
    tags: ["SEO", "Content", "Analytics"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=500&fit=crop",
  },
  {
    title: "FinTech Landing Page",
    category: "Web Development",
    description: "High-converting landing page with A/B testing. Achieved 12% conversion rate.",
    tags: ["Next.js", "GSAP", "Vercel"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&h=500&fit=crop",
  },
  {
    title: "Brand Identity Overhaul",
    category: "Branding",
    description: "Complete rebrand for a tech startup. Logo, guidelines, social media kit, and website redesign.",
    tags: ["Branding", "Design", "Strategy"],
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=500&fit=crop",
  },
];

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-widest">
            Our Portfolio
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Featured{" "}
            <span className="gradient-text">Work</span>
          </h2>
          <p className="mt-6 text-lg text-muted max-w-2xl mx-auto">
            A selection of projects that showcase our expertise across different
            industries and technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-surface border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-black/30 to-transparent" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ExternalLink size={16} className="text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-6">
                  <span className="text-sm text-white/80 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-surface-light border border-border text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
