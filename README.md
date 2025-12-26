# 💼 Portfolio Full-Stack Developer

Portfolio profesional y moderno desarrollado con Next.js 14, TypeScript y Tailwind CSS. Diseño minimalista con animaciones fluidas y experiencia de usuario excepcional.

🌐 **[Ver Demo en Vivo](#)** | 📝 **[Guía de Personalización](./PERSONALIZACION.md)**

---

## ✨ Características

- ⚡ **Next.js 14** - App Router y Server Components
- 🎨 **Tailwind CSS** - Diseño responsive y moderno
- 🎭 **Framer Motion** - Animaciones fluidas y profesionales
- 📱 **100% Responsive** - Perfecto en móvil, tablet y desktop
- 🎯 **TypeScript** - Type-safe en todo el código
- 🚀 **Optimizado** - Core Web Vitals excelentes
- 🌙 **Dark Theme** - Tema oscuro profesional (Cyber Blue)
- 📊 **SEO Optimizado** - Meta tags y Open Graph
- ♿ **Accesible** - ARIA labels y navegación por teclado

---

## 🎨 Secciones del Portfolio

### 1. **Hero Section**
- Landing page con nombre y presentación
- Gradient text animado
- CTAs con smooth scroll
- Social links con hover effects
- Background con orbs animados

### 2. **About Section**
- Información personal y profesional
- Foto de perfil (placeholder personalizable)
- Estadísticas destacadas
- Tech stack visual

### 3. **Projects Section**
- Grid de 6 proyectos showcase
- Cards con hover effects elegantes
- Tech tags por proyecto
- Links a demo y código
- Responsive 3/2/1 columnas

### 4. **Skills Section**
- 3 categorías: Frontend, Backend, Tools
- Iconos con animaciones
- Skills con checkmarks
- Hover effects por categoría

### 5. **Navbar Fixed**
- Scroll detection con blur
- Active section highlighting
- Mobile menu slide-in
- Smooth scroll navigation

### 6. **Footer**
- 3 columnas con links
- Social icons
- Back to top button
- Copyright y tech stack

---

## 🛠️ Tech Stack

### Core
- **Framework**: Next.js 14.2.5
- **Language**: TypeScript 5.5.4
- **Styling**: Tailwind CSS 3.4.7
- **Animations**: Framer Motion 11.3.19

### UI & Icons
- **Icons**: Lucide React 0.408.0
- **Fonts**: Google Fonts (Inter, JetBrains Mono)

### Tools & DevOps
- **Linting**: ESLint
- **Package Manager**: npm
- **Version Control**: Git
- **Deployment**: Vercel (recomendado)

---

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18.x o superior
- npm o yarn

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/portfolio.git
cd portfolio

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en **http://localhost:3000**

### Comandos Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm start        # Servidor de producción
npm run lint     # Linter ESLint
```

---

## 📝 Personalización

### Método Rápido - Archivo de Configuración

**Archivo**: `/config/site.config.ts`

Este archivo contiene **TODA** tu información personalizable:

```typescript
export const siteConfig = {
  name: "Tu Nombre",
  email: "tu@email.com",
  social: {
    github: "https://github.com/tu-usuario",
    linkedin: "https://linkedin.com/in/tu-perfil",
  },
  // ... más configuración
}
```

### Guía Completa de Personalización

Ver **[PERSONALIZACION.md](./PERSONALIZACION.md)** para instrucciones detalladas.

### Áreas Principales a Personalizar

1. **Información Personal** (`/config/site.config.ts`)
   - Nombre, email, ubicación
   - Redes sociales
   - Descripción profesional

2. **About Section** (`/config/site.config.ts`)
   - 3 párrafos personales
   - Estadísticas (años, proyectos, clientes)
   - Tech stack

3. **Proyectos** (`/config/site.config.ts`)
   - 6 proyectos con:
     - Nombre y descripción
     - Tecnologías usadas
     - Links a demo y código
     - Screenshots (opcional)

4. **Skills** (`/config/site.config.ts`)
   - Frontend technologies
   - Backend technologies
   - Tools & DevOps

5. **Imágenes**
   - Foto de perfil: `/public/images/profile.jpg`
   - Screenshots: `/public/images/projects/`
   - Favicon: `/public/favicon.ico`

---

## 📁 Estructura del Proyecto

```
portfolio/
├── app/                      # Next.js App Router
│   ├── components/          # Componentes React
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Projects.tsx    # Projects section
│   │   ├── ProjectCard.tsx # Project card component
│   │   ├── Skills.tsx      # Skills section
│   │   ├── SkillCategory.tsx
│   │   ├── TechStack.tsx   # Tech stack component
│   │   ├── Navbar.tsx      # Navigation bar
│   │   └── Footer.tsx      # Footer component
│   ├── globals.css         # Estilos globales
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Página principal
├── config/                  # Configuración
│   └── site.config.ts      # ⭐ Configuración principal
├── public/                  # Assets estáticos
│   ├── images/             # Imágenes
│   └── icons/              # Iconos
├── tailwind.config.ts      # Configuración Tailwind
├── tsconfig.json           # Configuración TypeScript
├── next.config.mjs         # Configuración Next.js
├── package.json            # Dependencias
├── PERSONALIZACION.md      # Guía de personalización
└── README.md               # Este archivo
```

---

## 🎨 Paleta de Colores

### Cyber Blue Theme

```css
/* Primary Colors */
--color-primary: #0EA5E9       /* Sky Blue - CTAs, links */
--color-primary-light: #38BDF8  /* Hover states */
--color-primary-dark: #0284C7   /* Active states */

/* Secondary Colors */
--color-secondary: #8B5CF6      /* Purple - Accents */
--color-secondary-light: #A78BFA
--color-secondary-dark: #7C3AED

/* Background */
--color-background: #0F172A     /* Dark Navy */
--color-surface: #1E293B        /* Slate - Cards */

/* Text */
--color-text-primary: #F8FAFC   /* Off-white */
--color-text-secondary: #64748B /* Gray */

/* Border */
--color-border: #334155         /* Slate Gray */
```

### Personalizar Colores

Edita `/tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#0EA5E9",  // Tu color aquí
    // ...
  }
}
```

---

## 📱 Responsive Design

El portfolio es 100% responsive con breakpoints:

- **Mobile**: < 768px (1 columna)
- **Tablet**: 768px - 1024px (2 columnas)
- **Desktop**: > 1024px (3 columnas)

Todas las secciones se adaptan automáticamente.

---

## 🚀 Deploy a Producción

### Opción 1: Vercel (Recomendado)

1. Push tu código a GitHub
2. Crea cuenta en [vercel.com](https://vercel.com)
3. Importa tu repositorio
4. Click en "Deploy"

**¡Listo!** Tu portfolio estará en línea en minutos.

### Opción 2: Netlify

```bash
npm run build
# Sube la carpeta .next a Netlify
```

### Opción 3: Self-Hosting

```bash
npm run build
npm start  # Puerto 3000
```

---

## 📊 Performance

- ⚡ **Lighthouse Score**: 95+
- 🎯 **Core Web Vitals**: Excelente
- 📦 **Bundle Size**: Optimizado
- 🖼️ **Images**: Next.js Image Optimization
- 🔄 **SSR**: Server-Side Rendering

---

## 🔧 Personalización Avanzada

### Cambiar Fuentes

Edita `/app/layout.tsx`:

```typescript
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
```

### Agregar Nuevas Secciones

1. Crea componente en `/app/components/`
2. Importa en `/app/page.tsx`
3. Agrega link en Navbar y Footer

### Modificar Animaciones

Las animaciones usan Framer Motion. Edita los `variants` en cada componente:

```typescript
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
```

---

## 🐛 Troubleshooting

### Error: Module not found

```bash
rm -rf node_modules package-lock.json
npm install
```

### Cambios no se reflejan

- Guarda el archivo y espera recompilación
- Ctrl/Cmd + R para refrescar
- Verifica errores en la consola

### Imágenes no cargan

- Verifica que el path sea correcto (`/images/...`)
- Imágenes deben estar en `/public/`

---

## 📚 Recursos Adicionales

- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Framer Motion**: [framer.com/motion](https://framer.com/motion)
- **Lucide Icons**: [lucide.dev](https://lucide.dev)

---

## 📝 Licencia

MIT License - Siéntete libre de usar este portfolio para tu uso personal.

---

## 🙏 Agradecimientos

Portfolio creado con:
- ❤️ Next.js
- 🎨 Tailwind CSS
- ✨ Framer Motion
- 🚀 Vercel

---

## 📬 Contacto

¿Preguntas o sugerencias? Contáctame:

- **Email**: tu@email.com
- **LinkedIn**: [Tu Perfil](https://linkedin.com/in/tu-perfil)
- **GitHub**: [@tu-usuario](https://github.com/tu-usuario)

---

**⭐ Si te gustó este portfolio, no olvides darle una estrella en GitHub!**
# portafolio-yoryi-abreu
