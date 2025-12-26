"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Braces,
  FileCode2,
  Palette,
  Server,
  Database,
  Box,
  GitBranch,
  Code,
  Rocket,
  Container,
} from "lucide-react";

export interface TechItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

export interface TechCategory {
  title: string;
  items: TechItem[];
}

interface TechStackProps {
  animated?: boolean;
}

export default function TechStack({ animated = true }: TechStackProps) {
  const techCategories: TechCategory[] = [
    {
      title: "Frontend",
      items: [
        {
          name: "React",
          icon: <Code2 className="w-6 h-6" />,
          color: "hover:text-[#61DAFB]",
        },
        {
          name: "Next.js",
          icon: <Braces className="w-6 h-6" />,
          color: "hover:text-text-primary",
        },
        {
          name: "TypeScript",
          icon: <FileCode2 className="w-6 h-6" />,
          color: "hover:text-[#3178C6]",
        },
        {
          name: "Tailwind CSS",
          icon: <Palette className="w-6 h-6" />,
          color: "hover:text-[#06B6D4]",
        },
      ],
    },
    {
      title: "Backend",
      items: [
        {
          name: "Node.js",
          icon: <Server className="w-6 h-6" />,
          color: "hover:text-[#339933]",
        },
        {
          name: "Express",
          icon: <Code className="w-6 h-6" />,
          color: "hover:text-text-primary",
        },
        {
          name: "PostgreSQL",
          icon: <Database className="w-6 h-6" />,
          color: "hover:text-[#4169E1]",
        },
        {
          name: "Prisma",
          icon: <Box className="w-6 h-6" />,
          color: "hover:text-text-primary",
        },
      ],
    },
    {
      title: "Tools",
      items: [
        {
          name: "Git",
          icon: <GitBranch className="w-6 h-6" />,
          color: "hover:text-[#F05032]",
        },
        {
          name: "VS Code",
          icon: <Code2 className="w-6 h-6" />,
          color: "hover:text-[#007ACC]",
        },
        {
          name: "Vercel",
          icon: <Rocket className="w-6 h-6" />,
          color: "hover:text-text-primary",
        },
        {
          name: "Docker",
          icon: <Container className="w-6 h-6" />,
          color: "hover:text-[#2496ED]",
        },
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-text-primary mb-6">Tech Stack</h3>

      <motion.div
        className="space-y-8"
        variants={animated ? containerVariants : undefined}
        initial={animated ? "hidden" : undefined}
        whileInView={animated ? "visible" : undefined}
        viewport={{ once: true, margin: "-100px" }}
      >
        {techCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            variants={animated ? categoryVariants : undefined}
            className="space-y-4"
          >
            {/* Category Title */}
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wider">
              {category.title}
            </h4>

            {/* Tech Items Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {category.items.map((tech, itemIndex) => (
                <motion.div
                  key={tech.name}
                  variants={animated ? itemVariants : undefined}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  <div
                    className={`
                    flex flex-col items-center justify-center gap-3
                    p-6 rounded-xl bg-surface border border-border
                    transition-all duration-300 cursor-pointer
                    hover:border-primary/50 hover:shadow-glow-primary
                    ${tech.color}
                  `}
                  >
                    {/* Icon */}
                    <div className="text-text-secondary group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>

                    {/* Name */}
                    <span className="text-sm font-medium text-text-primary text-center">
                      {tech.name}
                    </span>

                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
