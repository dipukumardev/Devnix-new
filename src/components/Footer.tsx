"use client";

import { motion } from "framer-motion";
import { Globe, MessageCircle, Users, Camera } from "lucide-react";

const footerLinks = {
  Services: [
    "Web Development",
    "SEO Management",
    "UI/UX Design",
    "Digital Marketing",
    "Mobile Apps",
    "Custom Software",
  ],
  Company: ["About Us", "Our Team", "Careers", "Blog", "Press Kit"],
  Support: ["Contact", "FAQ", "Help Center", "Privacy Policy", "Terms of Service"],
};

const socialLinks = [
  { icon: MessageCircle, href: "#", label: "Twitter" },
  { icon: Users, href: "#", label: "LinkedIn" },
  { icon: Globe, href: "#", label: "Website" },
  { icon: Camera, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg">Dx</span>
              </div>
              <span className="text-xl font-bold text-white">
                Devni<span className="text-primary-light">x</span>
              </span>
            </a>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Transforming businesses through innovative digital solutions. Your
              growth is our mission.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-xl bg-surface-light border border-border flex items-center justify-center text-muted hover:text-primary-light hover:border-primary/30 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted hover:text-primary-light transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Devnix. All rights reserved.
          </p>
          <p className="text-sm text-muted">
            Designed & Built with &#9829; by{" "}
            <span className="text-primary-light">Devnix Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
