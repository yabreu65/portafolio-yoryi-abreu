// ============================================
// 🎯 ARCHIVO DE CONFIGURACIÓN DEL PORTFOLIO
// ============================================
// Edita este archivo con tu información personal
// Todos los componentes usarán estos datos automáticamente

export const siteConfig = {
  // ============================================
  // 📌 INFORMACIÓN PERSONAL
  // ============================================
  name: "Yoryi Abreu Portillo",
  shortName: "Yoryi Abreu", // Para el navbar
  title: "Full-Stack Developer",
  tagline: "Building Scalable Web Applications",
  description:
    "I create modern web applications with focus on performance, scalability, and user experience. Specialized in React, Next.js, and Node.js.",

  // Foto de perfil para la sección About
  profileImage: "/images/image-portafolio.png",

  // ============================================
  // 📧 CONTACTO
  // ============================================
  email: "yoryiabreu@gmail.com",
  location: "Buenos Aire, Argentina",
  availability: "Available for work", // o "Open to opportunities"

  // ============================================
  // 🔗 REDES SOCIALES
  // ============================================
  social: {
    github: "https://github.com/yabreu65",
    linkedin: "https://www.linkedin.com/in/yoryi-abreu-92999216b/",
    twitter: "",
    // Opcionales:
    instagram: "",
    youtube: "",
    dribbble: "",
    behance: "",
  },

  // ============================================
  // 💼 ABOUT SECTION
  // ============================================
  about: {
    paragraphs: [
      "Hi there! I'm a Full-Stack Developer with a passion for creating elegant solutions to complex problems. With several years of experience in web development, I've had the privilege of working on diverse projects that challenge and inspire me.",
      "My journey in tech began with a curiosity about how things work under the hood. Today, I specialize in building scalable web applications using modern technologies like React, Next.js, and Node.js. I believe in writing clean, maintainable code and creating intuitive user experiences.",
      "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing what I've learned with the developer community. I'm always excited to take on new challenges and collaborate on innovative projects.",
    ],
    stats: [
      { number: "3+", label: "Years Experience" },
      { number: "50+", label: "Projects Completed" },
      { number: "30+", label: "Happy Clients" },
      { number: "100%", label: "Dedication" },
    ],
  },

  // ============================================
  // 💻 SKILLS
  // ============================================
  skills: {
  frontend: [
    "React / Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "HTML5 / CSS3",
  ],
  backend: [
    "Node.js / Express",
    "Strapi (Headless CMS)",
    "PostgreSQL / MongoDB",
    "REST APIs / OpenAPI",
    "Authentication (JWT, OAuth)",
    "Webhooks & Integrations",
  ],
  devops: [
    "Docker / Docker Compose",
    "Nginx",
    "Linux Server Management",
    "PM2",
    "CI/CD (GitHub Actions)",
    "DigitalOcean / Vercel / Netlify",
  ],
  ai: [
    "OpenAI API",
    "Ollama Local Models",
    "n8n Automations",
  ],
  tools: [
    "Git / GitHub",
    "VS Code",
    "Postman",
  ],
  learning: [
    "GraphQL",
    "React Native",
    "AWS",
    "TypeScript Advanced",
  ],
},


  // ============================================
  // 🚀 PROYECTOS
  // ============================================
  projects: [
    {
      id: 1,
      name: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with admin dashboard, payment integration, and real-time inventory management. Features include product filtering, shopping cart, order tracking, and analytics.",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      links: {
        demo: "https://tu-demo1.com",
        code: "https://github.com/tu-usuario/proyecto1",
      },
      image: "", // "/images/projects/ecommerce.jpg"
      featured: true,
    },
    {
      id: 2,
      name: "Task Management App",
      description:
        "Collaborative task manager with real-time updates, team workspaces, and advanced filtering. Built with WebSocket for instant synchronization across devices and users.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      links: {
        demo: "https://tu-demo2.com",
        code: "https://github.com/tu-usuario/proyecto2",
      },
      image: "",
      featured: true,
    },
    {
      id: 3,
      name: "Analytics Dashboard",
      description:
        "Real-time analytics platform with custom charts, data visualization, and export functionality. Processes large datasets efficiently with interactive graphs and customizable metrics.",
      tech: ["Next.js", "Prisma", "Recharts", "PostgreSQL"],
      links: {
        demo: "https://tu-demo3.com",
        code: "https://github.com/tu-usuario/proyecto3",
      },
      image: "",
      featured: true,
    },
    {
      id: 4,
      name: "Social Media Platform",
      description:
        "Modern social networking application with posts, comments, real-time notifications, and user profiles. Includes image uploads, likes, follows, and a personalized feed algorithm.",
      tech: ["React", "Express", "Redis", "AWS S3"],
      links: {
        demo: "https://tu-demo4.com",
        code: "https://github.com/tu-usuario/proyecto4",
      },
      image: "",
    },
    {
      id: 5,
      name: "AI Content Generator",
      description:
        "AI-powered content creation tool that generates blog posts, social media content, and marketing copy. Integrates with OpenAI API and includes template customization.",
      tech: ["Next.js", "OpenAI", "Tailwind", "Vercel"],
      links: {
        demo: "https://tu-demo5.com",
        code: "https://github.com/tu-usuario/proyecto5",
      },
      image: "",
    },
    {
      id: 6,
      name: "Fitness Tracking App",
      description:
        "Comprehensive fitness application for tracking workouts, nutrition, and progress. Features workout plans, calorie counter, progress charts, and personalized recommendations.",
      tech: ["React Native", "Node.js", "MongoDB", "Chart.js"],
      links: {
        demo: "https://tu-demo6.com",
        code: "https://github.com/tu-usuario/proyecto6",
      },
      image: "",
    },
  ],

  // ============================================
  // 🌐 SEO & METADATA
  // ============================================
  seo: {
  title: "Yoryi Abreu | Full-Stack Developer & AI Engineer",
  description:
    "Portfolio profesional de Yoryi Abreu, desarrollador full-stack especializado en Next.js, React, Node.js, inteligencia artificial y telecomunicaciones. Proyectos escalables, dashboards modernos y soluciones con IA para empresas.",
  keywords: [
    "Yoryi Abreu",
    "Full-Stack Developer",
    "AI Developer",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "Telecomunicaciones",
    "SEO Tools",
    "Desarrollador web",
    "Inteligencia Artificial",
    "Portfolio",
  ],
  siteUrl: "https://yoryiabreu.com",
  ogImage: "/images/image-portafolio.png", 
},

  // ============================================
  // ⚙️ CONFIGURACIÓN ADICIONAL
  // ============================================
  config: {
    // Año actual (se calcula automáticamente)
    year: new Date().getFullYear(),
    // Mostrar/ocultar secciones
    showHero: true,
    showAbout: true,
    showSkills: true,
    showProjects: true,
    showContact: true,
    // Características opcionales
    showBackToTop: true,
    showStatusDot: true,
  },
} as const;

// Type exports para TypeScript
export type SiteConfig = typeof siteConfig;
export type Project = typeof siteConfig.projects[number];
export type SocialLinks = typeof siteConfig.social;
