"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { Code2, Server, Wrench } from "lucide-react";
import SkillCategory, { SkillCategoryType } from "./SkillCategory";
import { siteConfig } from "@/config/site.config";

export default function Skills() {
  const t = useTranslations("skills");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Transform siteConfig.skills into SKILL_CATEGORIES format with translations
  const SKILL_CATEGORIES: SkillCategoryType[] = [
    {
      id: 1,
      title: t("categories.frontend"),
      icon: Code2,
      color: "primary",
      skills: siteConfig.skills.frontend,
    },
    {
      id: 2,
      title: t("categories.backend"),
      icon: Server,
      color: "secondary",
      skills: siteConfig.skills.backend,
    },
    {
      id: 3,
      title: t("categories.devops"),
      icon: Wrench,
      color: "accent",
      skills: [...siteConfig.skills.devops, ...siteConfig.skills.tools],
    },
  ];

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="section-spacing bg-background relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />

      {/* Floating Gradient Orbs */}
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-secondary/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          {/* Small Label */}
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            {t("title")}
          </span>

          {/* Title */}
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-text-primary">
            {t("subtitle")}{" "}
            <span className="gradient-text">{t("subtitleHighlight")}</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SKILL_CATEGORIES.map((category, index) => (
            <SkillCategory
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </motion.div>

        {/* Optional: Additional Info or CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-text-secondary mb-4">
            {t("learningText")}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {siteConfig.skills.learning.map(
              (skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                  className="px-4 py-2 bg-surface/50 border border-border rounded-full text-sm text-text-secondary hover:border-primary/50 hover:text-primary transition-all duration-300"
                >
                  {skill}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
