"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Send, Mail, Phone, MapPin, ArrowUpRight, ArrowLeft } from "lucide-react";
import {
  SITE_EMAIL,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
} from "@/lib/site-contact";

type ContactVariant = "section" | "page";

export default function Contact({ variant = "section" }: { variant?: ContactVariant }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [statusDetail, setStatusDetail] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    setStatusDetail(null);

    if (!accessKey) {
      setStatusDetail(
        "Contact form is not configured yet. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY (free key at web3forms.com)."
      );
      setStatus("error");
      setTimeout(() => {
        setStatus("idle");
        setStatusDetail(null);
      }, 8000);
      return;
    }

    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const service = String(formData.get("service") ?? "");
    const message = String(formData.get("message") ?? "");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Devnix contact: ${name}`,
          name,
          email,
          service: service || "Not specified",
          message: [
            `Name: ${name}`,
            `Email: ${email}`,
            `Service: ${service || "Not specified"}`,
            "",
            "Message:",
            message,
          ].join("\n"),
        }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        success?: boolean;
        message?: string;
      };

      if (!res.ok || data.success === false) {
        setStatusDetail(data.message || `Request failed (${res.status})`);
        setStatus("error");
        setTimeout(() => {
          setStatus("idle");
          setStatusDetail(null);
        }, 8000);
        return;
      }

      setStatus("sent");
      form.reset();
      setTimeout(() => {
        setStatus("idle");
        setStatusDetail(null);
      }, 4000);
    } catch {
      setStatusDetail("Network error. Check your connection and try again.");
      setStatus("error");
      setTimeout(() => {
        setStatus("idle");
        setStatusDetail(null);
      }, 8000);
    }
  };

  const isPage = variant === "page";

  return (
    <section
      id="contact"
      className={`relative overflow-hidden ${isPage ? "py-16 lg:py-24" : "py-32"}`}
    >
      {/* Section background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/contact-bg.jpg"
          alt="Modern office space"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.06]"
        />
      </div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8" ref={ref}>
        {isPage ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mb-12"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-white"
            >
              <ArrowLeft size={16} aria-hidden />
              Back to home
            </Link>
          </motion.div>
        ) : null}

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={`text-center ${isPage ? "mb-14" : "mb-20"}`}
        >
          <span className="text-sm font-medium text-accent uppercase tracking-widest">
            {isPage ? "Contact us" : "Get In Touch"}
          </span>
          {isPage ? (
            <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Get in <span className="gradient-text">touch</span>
            </h1>
          ) : (
            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Let&apos;s Start Your{" "}
              <span className="gradient-text">Project</span>
            </h2>
          )}
          <p className="mt-6 text-lg text-muted max-w-2xl mx-auto">
            {isPage
              ? "Tell us about your goals, timeline, and budget. We reply within one business day."
              : "Ready to transform your digital presence? Drop us a message and we&apos;ll get back to you within 24 hours."}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-muted mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3.5 rounded-xl bg-surface border border-border text-white placeholder:text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-surface border border-border text-white placeholder:text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-muted mb-2">
                  Service Interested In
                </label>
                <select name="service" className="w-full px-4 py-3.5 rounded-xl bg-surface border border-border text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none cursor-pointer">
                  <option value="">Select a service</option>
                  <option value="web">Website Development</option>
                  <option value="seo">SEO Management</option>
                  <option value="design">UI/UX Design</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="branding">Brand Identity</option>
                  <option value="software">Custom Software</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-muted mb-2">
                  Project Details
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project, goals, and timeline..."
                  className="w-full px-4 py-3.5 rounded-xl bg-surface border border-border text-white placeholder:text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium text-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === "sending" && "Sending..."}
                {status === "sent" && "Message Sent!"}
                {status === "error" && "Failed to send"}
                {status === "idle" && (
                  <>
                    Send Message
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </>
                )}
              </button>
              {statusDetail ? (
                <p
                  role="status"
                  className={`mt-3 text-sm leading-relaxed ${
                    status === "error" ? "text-red-400" : "text-muted"
                  }`}
                >
                  {statusDetail}
                </p>
              ) : null}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Mail size={20} className="text-primary-light" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email Us</h4>
                  <a
                    href={`mailto:${SITE_EMAIL}`}
                    className="mt-1 block text-muted transition-colors hover:text-primary-light"
                  >
                    {SITE_EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Phone size={20} className="text-primary-light" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Call Us</h4>
                  <a
                    href={`tel:${SITE_PHONE_TEL}`}
                    className="mt-1 block text-muted transition-colors hover:text-primary-light"
                  >
                    {SITE_PHONE_DISPLAY}
                  </a>
                  <p className="text-muted">Mon–Sat, 9am–7pm IST</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <MapPin size={20} className="text-primary-light" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Visit Us</h4>
                  <p className="text-muted mt-1">123 Digital Avenue</p>
                  <p className="text-muted">San Francisco, CA 94102</p>
                </div>
              </div>
            </div>

            {/* CTA Card with background image */}
            <div className="mt-12 relative rounded-2xl overflow-hidden border border-primary/20">
              <div className="absolute inset-0">
                <Image
                  src="/images/contact-meeting.jpg"
                  alt="Consultation meeting"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
              </div>
              <div className="relative p-8">
                <h3 className="text-xl font-bold text-white mb-2">
                  Free Consultation
                </h3>
                <p className="text-muted text-sm mb-6">
                  Not sure where to start? Book a free 30-minute strategy session
                  with our experts.
                </p>
                <a
                  href={`mailto:${SITE_EMAIL}?subject=${encodeURIComponent("Consultation request")}`}
                  className="inline-flex items-center gap-2 text-primary-light hover:text-accent transition-colors font-medium"
                >
                  Book a Call
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
