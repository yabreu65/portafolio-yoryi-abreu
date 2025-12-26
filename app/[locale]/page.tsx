import { Metadata } from "next";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

// Metadata para SEO
export const metadata: Metadata = {
  title: "Portfolio | Full-Stack Developer",
  description:
    "Portfolio profesional de desarrollador full-stack especializado en Next.js, React y TypeScript. Explora mis proyectos y habilidades.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section - Landing con nombre y CTAs */}
      <Hero />

      {/* About Section - Información personal y experiencia */}
      <About />

      {/* Projects Section - Showcase de proyectos */}
      <Projects />

      {/* Skills Section - Tecnologías y herramientas */}
      <Skills />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
