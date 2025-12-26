"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import TechStack from "./TechStack";
import { User } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function About() {
  const t = useTranslations("about");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="section-spacing bg-background relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            {t("title")}
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-text-primary">
            {t("subtitle")}{" "}
            <span className="gradient-text">{t("subtitleHighlight")}</span>
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column - Photo */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative group">
              {/* Gradient Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />

              {/* Image Container */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-surface">
                {/* Profile Image */}
                <Image
                  src={siteConfig.profileImage}
                  alt={siteConfig.name}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 px-6 py-3 rounded-xl bg-surface border border-border backdrop-blur-sm shadow-card"
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0 }
                }
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-semibold text-text-primary">
                    {t("availability")}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {/* Intro Paragraph */}
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p className="text-lg">{t("paragraph1")}</p>
              <p className="text-lg">{t("paragraph2")}</p>
              <p className="text-lg">{t("paragraph3")}</p>
            </div>

            {/* Key Points / Skills Summary */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                { number: "3+", labelKey: "stats.experience" },
                { number: "50+", labelKey: "stats.projects" },
                { number: "30+", labelKey: "stats.clients" },
                { number: "100%", labelKey: "stats.dedication" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.labelKey}
                  className="p-4 rounded-xl bg-surface/50 border border-border backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02, borderColor: "rgba(14, 165, 233, 0.5)" }}
                >
                  <div className="text-3xl font-bold gradient-text">
                    {stat.number}
                  </div>
                  <div className="text-sm text-text-secondary mt-1">
                    {t(stat.labelKey)}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <TechStack animated={true} />
        </motion.div>
      </div>
    </section>
  );
}
