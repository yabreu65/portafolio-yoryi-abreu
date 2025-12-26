"use client";

import { motion } from "framer-motion";
import { CheckCircle2, LucideIcon } from "lucide-react";

// TypeScript Interface para Skill Category
export interface SkillCategoryType {
  id: number;
  title: string;
  icon: LucideIcon;
  skills: readonly string[];
  color: "primary" | "secondary" | "accent";
}

interface SkillCategoryProps {
  category: SkillCategoryType;
  index: number;
}

export default function SkillCategory({ category, index }: SkillCategoryProps) {
  const Icon = category.icon;

  // Color mappings
  const colorClasses = {
    primary: {
      iconBg: "bg-primary/10",
      iconText: "text-primary",
      border: "hover:border-primary/50",
      glow: "hover:shadow-glow-primary",
      checkmark: "text-primary",
    },
    secondary: {
      iconBg: "bg-secondary/10",
      iconText: "text-secondary",
      border: "hover:border-secondary/50",
      glow: "hover:shadow-glow-secondary",
      checkmark: "text-secondary",
    },
    accent: {
      iconBg: "bg-primary/10",
      iconText: "text-primary",
      border: "hover:border-primary/50",
      glow: "hover:shadow-glow-primary",
      checkmark: "text-primary",
    },
  };

  const colors = colorClasses[category.color];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.15,
        ease: "easeOut",
      },
    },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3 + index * 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="group relative"
    >
      <div
        className={`
        h-full bg-surface border border-border rounded-xl p-8
        transition-all duration-300
        ${colors.border} ${colors.glow}
        hover:-translate-y-2
      `}
      >
        {/* Icon Circle */}
        <motion.div
          className={`
          w-16 h-16 rounded-full ${colors.iconBg}
          flex items-center justify-center mb-6
          group-hover:scale-110 transition-transform duration-300
        `}
          whileHover={{ rotate: 5 }}
        >
          <Icon className={`w-8 h-8 ${colors.iconText}`} />
        </motion.div>

        {/* Category Title */}
        <h3 className="text-xl font-bold text-text-primary mb-6">
          {category.title}
        </h3>

        {/* Skills List */}
        <motion.ul
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-3"
        >
          {category.skills.map((skill, skillIndex) => (
            <motion.li
              key={skillIndex}
              variants={itemVariants}
              className="flex items-start gap-3 group/item"
            >
              {/* Checkmark Icon */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex-shrink-0 mt-0.5"
              >
                <CheckCircle2
                  className={`w-5 h-5 ${colors.checkmark} group-hover/item:scale-110 transition-transform duration-200`}
                />
              </motion.div>

              {/* Skill Text */}
              <span className="text-sm text-text-secondary group-hover/item:text-text-primary transition-colors duration-200">
                {skill}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Gradient Border Effect on Hover */}
        <div
          className={`
          absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
          transition-opacity duration-300 pointer-events-none
          bg-gradient-to-br ${
            category.color === "primary"
              ? "from-primary/5 via-transparent to-transparent"
              : category.color === "secondary"
              ? "from-secondary/5 via-transparent to-transparent"
              : "from-primary/5 via-transparent to-transparent"
          }
        `}
        />

        {/* Glow Border on Hover */}
        <div
          className={`
          absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100
          transition-opacity duration-300 pointer-events-none blur-sm -z-10
          ${
            category.color === "primary"
              ? "bg-gradient-to-r from-primary/20 to-primary/0"
              : category.color === "secondary"
              ? "bg-gradient-to-r from-secondary/20 to-secondary/0"
              : "bg-gradient-to-r from-primary/20 to-primary/0"
          }
        `}
        />
      </div>
    </motion.article>
  );
}
