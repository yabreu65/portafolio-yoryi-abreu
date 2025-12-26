"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Github, Linkedin, Twitter, Mail, MapPin, ArrowUp } from "lucide-react";
import { siteConfig } from "@/config/site.config";

// Navigation link IDs
const NAV_LINK_IDS = ["about", "projects", "skills", "contact"] as const;

// Social links (open in new tab)
const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: Github,
    href: siteConfig.social.github,
    color: "hover:text-[#333333] dark:hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: siteConfig.social.linkedin,
    color: "hover:text-[#0A66C2]",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: siteConfig.social.twitter,
    color: "hover:text-[#1DA1F2]",
  },
  {
    name: "Email",
    icon: Mail,
    href: `mailto:${siteConfig.email}`,
    color: "hover:text-primary",
  },
] as const;

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Navigation links with translations
  const NAV_LINKS = NAV_LINK_IDS.map((id) => ({
    id,
    label: tNav(id),
  }));
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Back to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <footer
        ref={ref}
        className="bg-surface border-t border-border relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="container-custom max-w-7xl relative z-10"
        >
          {/* Top Section - Logo & Social */}
          <div className="pt-12 pb-8 text-center border-b border-border/50">
            <motion.div variants={itemVariants}>
              {/* Logo/Name */}
              <button
                onClick={scrollToTop}
                className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity cursor-pointer inline-block mb-3"
              >
                {"<" + siteConfig.shortName + " />"}
              </button>

              {/* Tagline */}
              <p className="text-text-secondary max-w-md mx-auto mb-6">
                {siteConfig.tagline}
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-4">
                {SOCIAL_LINKS.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg bg-background border border-border text-text-secondary transition-all duration-300 ${social.color} hover:scale-110 hover:border-primary/50`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Middle Section - 3 Columns */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1 - Navigation */}
            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
                {t("quickLinks")}
              </h3>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 2 - Social */}
            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
                {t("connect")}
              </h3>
              <ul className="space-y-3">
                {SOCIAL_LINKS.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm inline-flex items-center gap-2"
                    >
                      <social.icon className="w-4 h-4" />
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3 - Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
                Info
              </h3>
              <ul className="space-y-3">
                {/* Location */}
                <li className="text-text-secondary text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  {siteConfig.location}
                </li>

                {/* Status */}
                <li className="text-text-secondary text-sm flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  {siteConfig.availability}
                </li>

                {/* Email */}
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm inline-flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Section - Copyright */}
          <motion.div
            variants={itemVariants}
            className="py-6 border-t border-border/50"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-secondary">
              {/* Copyright */}
              <p>
                © {siteConfig.config.year} {siteConfig.name}. {t("rights")}.
              </p>

              {/* Tech Stack */}
              <p className="text-xs">
                {t("madeWith")}{" "}
                <span className="text-primary font-semibold">Next.js</span>,{" "}
                <span className="text-primary font-semibold">TypeScript</span> &{" "}
                <span className="text-primary font-semibold">Tailwind CSS</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </footer>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className={`
          fixed bottom-8 right-8 z-40
          p-3 rounded-full bg-primary text-white
          shadow-lg shadow-primary/30
          transition-all duration-300
          hover:bg-primary-light hover:scale-110
          hover:shadow-xl hover:shadow-primary/50
          ${showBackToTop ? "pointer-events-auto" : "pointer-events-none"}
        `}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </>
  );
}
