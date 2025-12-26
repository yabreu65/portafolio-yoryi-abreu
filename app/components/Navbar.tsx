"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site.config";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";

// Navigation links configuration
const NAV_LINK_IDS = ["about", "skills", "projects", "contact"] as const;

type SectionId = typeof NAV_LINK_IDS[number] | "hero";

export default function Navbar() {
  const t = useTranslations("nav");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("hero");

  // Navigation links with translations
  const NAV_LINKS = NAV_LINK_IDS.map((id) => ({
    id,
    label: t(id),
  }));

  // Scroll listener for navbar state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for active section detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as SectionId);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    const sections: SectionId[] = ["hero", ...NAV_LINK_IDS];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };

    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Smooth scroll function with offset
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: sectionId === "hero" ? 0 : offsetPosition,
        behavior: "smooth",
      });

      setMobileMenuOpen(false);
    }
  };

  // Navbar animation variants
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${
            isScrolled
              ? "bg-background/80 backdrop-blur-lg border-b border-border"
              : "bg-transparent"
          }
        `}
      >
        <div className="container-custom max-w-7xl">
          <div className="flex items-center justify-between h-20">
            {/* Logo / Brand */}
            <motion.button
              onClick={() => scrollToSection("hero")}
              className="text-xl font-bold gradient-text cursor-pointer hover:opacity-80 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {"<" + siteConfig.shortName + " />"}
            </motion.button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="relative group"
                >
                  <span
                    className={`
                    text-sm font-medium transition-colors duration-200
                    ${
                      activeSection === link.id
                        ? "text-primary"
                        : "text-text-secondary hover:text-primary"
                    }
                  `}
                  >
                    {link.label}
                  </span>

                  {/* Underline animation */}
                  <span
                    className={`
                    absolute -bottom-1 left-0 h-0.5 bg-primary
                    transition-all duration-300 ease-out
                    ${
                      activeSection === link.id
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                  />
                </button>
              ))}

              {/* Theme Toggle & Language Switcher */}
              <div className="flex items-center gap-3">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </nav>

            {/* CTA Button Desktop (Optional) */}
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="hidden md:inline-flex items-center px-6 py-2.5 bg-primary text-white font-semibold rounded-lg transition-all duration-300 hover:bg-primary-light hover:shadow-glow-primary hover:scale-105"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {t("contact")}
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-text-primary hover:text-primary transition-colors"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-background/95 backdrop-blur-md z-40 md:hidden"
            />

            {/* Mobile Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-surface border-l border-border z-50 md:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <span className="text-lg font-bold gradient-text">
                    Menu
                  </span>
                  <div className="flex items-center gap-4">
                    {/* Language Switcher */}
                    <LanguageSwitcher />
                    {/* Theme Toggle */}
                    <ThemeToggle />
                    <motion.button
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 text-text-primary hover:text-primary transition-colors"
                      whileTap={{ scale: 0.9 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.button>
                  </div>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-2 p-6">
                  {NAV_LINKS.map((link, index) => (
                    <motion.button
                      key={link.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(link.id)}
                      className={`
                        text-left text-2xl font-semibold py-4 px-4 rounded-lg
                        transition-all duration-200
                        ${
                          activeSection === link.id
                            ? "text-primary bg-primary/10 border-l-4 border-primary"
                            : "text-text-primary hover:text-primary hover:bg-surface-light"
                        }
                      `}
                    >
                      {link.label}
                    </motion.button>
                  ))}
                </nav>

                {/* Mobile Menu Footer */}
                <div className="mt-auto p-6 border-t border-border">
                  <motion.a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("contact");
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="block w-full px-6 py-3 bg-primary text-white text-center font-semibold rounded-lg hover:bg-primary-light transition-colors"
                  >
                    {t("contact")}
                  </motion.a>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-sm text-text-secondary mt-6"
                  >
                    © {siteConfig.config.year} {siteConfig.name}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
