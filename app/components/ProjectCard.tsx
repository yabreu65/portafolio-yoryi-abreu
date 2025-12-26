"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

// TypeScript Interface para Project
export interface Project {
  id: number;
  name: string;
  description: string;
  tech: readonly string[];
  links: {
    demo?: string;
    code?: string;
  };
  image?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const t = useTranslations("projects");

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
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
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <div className="h-full bg-surface border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-card-hover">
        {/* Project Thumbnail */}
        <div className="relative aspect-video overflow-hidden bg-surface-light">
          {/* Gradient Background as Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10">
            {/* Animated Pattern */}
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  linear-gradient(30deg, transparent 12%, rgba(14, 165, 233, 0.1) 12.5%, rgba(14, 165, 233, 0.1) 13%, transparent 13.5%),
                  linear-gradient(150deg, transparent 12%, rgba(139, 92, 246, 0.1) 12.5%, rgba(139, 92, 246, 0.1) 13%, transparent 13.5%)
                `,
                backgroundSize: "60px 60px",
              }}
              animate={{
                backgroundPosition: ["0px 0px", "60px 60px"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Project Number Overlay */}
            <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-surface/80 backdrop-blur-sm border border-border flex items-center justify-center">
              <span className="text-lg font-bold gradient-text">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Image (if provided) */}
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
            />
          )}

          {/* Hover Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
        </div>

        {/* Card Content */}
        <div className="p-6 space-y-4">
          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className={`
                  text-xs font-medium px-3 py-1 rounded-full
                  border transition-colors duration-200
                  ${
                    i % 2 === 0
                      ? "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                      : "bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20"
                  }
                `}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Project Title */}
          <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors duration-200">
            {t(`items.${project.id}.name`)}
          </h3>

          {/* Project Description */}
          <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
            {t(`items.${project.id}.description`)}
          </p>

          {/* Links */}
          <div className="flex items-center gap-4 pt-2">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors duration-200"
              >
                <span className="relative">
                  {t("liveDemo")}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover/link:w-full transition-all duration-300" />
                </span>
                <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
              </a>
            )}

            {project.links.code && (
              <a
                href={project.links.code}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary-light transition-colors duration-200"
              >
                <span className="relative">
                  {t("viewCode")}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover/link:w-full transition-all duration-300" />
                </span>
                <Github className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-200" />
              </a>
            )}
          </div>
        </div>

        {/* Card Border Glow Effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.article>
  );
}
