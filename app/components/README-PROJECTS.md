# Projects Section Documentation

## 📋 Descripción

La Projects Section muestra un showcase profesional de tus proyectos destacados con cards interactivas, tech tags, y links a demos y código.

## ✨ Características Implementadas

### Layout Principal
- ✅ Padding vertical: py-24
- ✅ Max-width: 1280px (7xl)
- ✅ Background: background-light (#1E293B) - contraste con otras secciones
- ✅ Grid pattern background sutil
- ✅ Gradient orb animado (decoración)

### Section Header
- ✅ Label pequeño: "Portfolio" (uppercase, primary)
- ✅ Título: "Featured Projects" con gradient
- ✅ Subtítulo descriptivo
- ✅ Alineación izquierda

### Projects Grid
- ✅ **3 columnas** en desktop (lg:)
- ✅ **2 columnas** en tablet (md:)
- ✅ **1 columna** en mobile
- ✅ Gap generoso: gap-8 (2rem)
- ✅ 6 proyectos placeholder

### Project Card Design

#### 1. Contenedor
- ✅ Background: surface (#1E293B)
- ✅ Border: border-border sutil
- ✅ Border radius: rounded-xl
- ✅ Hover: translateY -8px (lift effect)
- ✅ Hover: shadow-card-hover (sombra aumentada)
- ✅ Hover: border-primary/50
- ✅ Transition: 300ms ease
- ✅ Gradient glow overlay en hover

#### 2. Thumbnail/Image (Aspect 16:9)
- ✅ Aspect ratio 16:9 perfecto
- ✅ Rounded top
- ✅ Overflow hidden
- ✅ Placeholder con gradiente animado
- ✅ Pattern animado de fondo
- ✅ Número de proyecto (badge top-right)
- ✅ Hover: scale 1.05 en imagen
- ✅ Hover: brightness 110%
- ✅ Gradient overlay en hover (from-background)

#### 3. Contenido (padding: p-6)
- ✅ **Tech Tags** (arriba):
  - Text-xs
  - Rounded-full (pill shape)
  - Alternating colors (primary/secondary)
  - Max 4 tags visible
  - Hover: background intensificado

- ✅ **Título** (text-xl, bold):
  - Color: text-primary
  - Hover: text-primary (color change)
  - Transition suave

- ✅ **Descripción** (text-sm):
  - Color: text-secondary
  - Line-clamp-3 (max 3 líneas)
  - Leading-relaxed

- ✅ **Links** (flex gap-4):
  - **Live Demo**: Primary color, ExternalLink icon
  - **View Code**: Secondary color, Github icon
  - Underline animation en hover
  - Icon animation en hover

### Tech Tags Styling
- ✅ Text-xs, font-medium
- ✅ Padding: px-3 py-1
- ✅ Rounded-full
- ✅ Border con opacity 20%
- ✅ Background con opacity 10%
- ✅ Alternating primary/secondary colors
- ✅ Hover: opacity 20% en background
- ✅ Transition suave

### Animaciones

#### Section Level
| Elemento | Animación | Timing |
|----------|-----------|--------|
| Header | fade-in-up | 0s (when in view) |
| Container | fade-in | 0.2s delay |
| Cards | stagger fade-in-up | 0.1s between each |

#### Card Level
| Elemento | Animación | Trigger |
|----------|-----------|---------|
| Card | y: -8px | Hover |
| Image | scale: 1.05, brightness: 110% | Hover |
| Gradient overlay | opacity: 0 → 60% | Hover |
| Border glow | opacity: 0 → 100% | Hover |
| Title color | text-primary → primary | Hover |
| Link underline | width: 0 → 100% | Hover |
| External icon | translate x:0.5, y:-0.5 | Hover |
| Github icon | rotate: 12deg | Hover |

#### Entry Animation
```tsx
// Card stagger animation
variants={{
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    delay: index * 0.1  // Stagger effect
  }
}}
```

### CTA Button (View All)
- ✅ "View All Projects on GitHub"
- ✅ Github icon SVG
- ✅ Border hover effect
- ✅ Shadow glow en hover
- ✅ Scale animation
- ✅ Y lift en hover

## 📦 Componentes Creados

### 1. ProjectCard.tsx
**Componente reutilizable para cada card**

**Props:**
```typescript
interface ProjectCardProps {
  project: Project;
  index: number;  // Para stagger animation
}
```

**Características:**
- Thumbnail con placeholder gradient
- Número de proyecto overlay
- Tech tags con alternating colors
- Title con hover effect
- Description con line-clamp
- Links con underline animation
- Border glow effect

### 2. Projects.tsx
**Componente de la sección completa**

**Características:**
- Array de proyectos al inicio (fácil editar)
- Grid responsive
- Header con animaciones
- CTA button al final
- Background decorativo

### 3. Project Interface (TypeScript)
```typescript
export interface Project {
  id: number;
  name: string;
  description: string;
  tech: string[];
  links: {
    demo?: string;
    code?: string;
  };
  image?: string;
  featured?: boolean;
}
```

## 🎨 6 Proyectos Placeholder

### 1. E-Commerce Platform
- **Tech**: Next.js, TypeScript, Stripe, PostgreSQL
- **Descripción**: Full-stack e-commerce con admin dashboard y pagos

### 2. Task Management App
- **Tech**: React, Node.js, Socket.io, MongoDB
- **Descripción**: Task manager colaborativo con real-time updates

### 3. Analytics Dashboard
- **Tech**: Next.js, Prisma, Recharts, PostgreSQL
- **Descripción**: Platform de analytics con visualización de datos

### 4. Social Media Platform
- **Tech**: React, Express, Redis, AWS S3
- **Descripción**: Red social con posts, comments y notificaciones

### 5. AI Content Generator
- **Tech**: Next.js, OpenAI, Tailwind, Vercel
- **Descripción**: Herramienta de generación de contenido con IA

### 6. Fitness Tracking App
- **Tech**: React Native, Node.js, MongoDB, Chart.js
- **Descripción**: App de fitness con tracking y recomendaciones

## 🎯 Personalización

### 1. Editar Proyectos

**En Projects.tsx (líneas 9-71):**

```tsx
const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Tu Proyecto",
    description: "Descripción de tu proyecto...",
    tech: ["Tech1", "Tech2", "Tech3", "Tech4"],
    links: {
      demo: "https://tu-demo.com",
      code: "https://github.com/tu-usuario/tu-repo",
    },
    featured: true,  // Opcional
  },
  // Agregar más proyectos...
];
```

### 2. Agregar Imágenes Reales

**Opción A: Agregar imagen local**
```tsx
{
  id: 1,
  name: "Proyecto",
  // ...
  image: "/images/projects/proyecto1.jpg",  // Agregar
}
```

**Opción B: Usar Next.js Image Optimization**
- Colocar imágenes en `/public/images/projects/`
- El componente ProjectCard ya usa `next/image`
- Automáticamente se optimizarán

### 3. Cambiar Cantidad de Columnas

**En Projects.tsx:**
```tsx
// Actual: 3 columnas desktop, 2 tablet, 1 mobile
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"

// Para 2 columnas desktop:
className="grid grid-cols-1 lg:grid-cols-2 gap-8"

// Para 4 columnas desktop:
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
```

### 4. Cambiar Colores de Tech Tags

**En ProjectCard.tsx (línea ~95):**
```tsx
className={`
  ${
    i % 2 === 0
      ? "bg-primary/10 text-primary border-primary/20"
      : "bg-secondary/10 text-secondary border-secondary/20"
  }
`}

// Cambiar a:
// Todos primary:
"bg-primary/10 text-primary border-primary/20"

// Todos secondary:
"bg-secondary/10 text-secondary border-secondary/20"

// Por índice (0,1,2,3):
i % 3 === 0 ? "primary" : i % 3 === 1 ? "secondary" : "accent"
```

### 5. Modificar URL del CTA "View All"

**En Projects.tsx (línea ~170):**
```tsx
<motion.a
  href="https://github.com/yourusername"  // Cambiar aquí
  target="_blank"
  rel="noopener noreferrer"
  // ...
>
```

### 6. Ocultar/Mostrar CTA Button

**En Projects.tsx:**
```tsx
// Para ocultar, comentar o eliminar todo el <motion.div> del CTA
// O agregar un condicional:
{showCTA && (
  <motion.div>
    {/* CTA content */}
  </motion.div>
)}
```

### 7. Cambiar Descripción del Header

**En Projects.tsx (líneas 114-119):**
```tsx
<h2 className="...">
  Tu Título{" "}
  <span className="gradient-text">Con Énfasis</span>
</h2>

<p className="...">
  Tu subtítulo personalizado aquí.
</p>
```

### 8. Ajustar Límite de Tech Tags

**En ProjectCard.tsx (línea ~92):**
```tsx
{project.tech.slice(0, 4).map((tech, i) => (
  // Cambiar 4 por el número que quieras (ej: 3 o 5)
```

### 9. Agregar Badge "Featured"

**En ProjectCard.tsx, agregar después del número:**
```tsx
{project.featured && (
  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary">
    <span className="text-xs font-bold text-primary">Featured</span>
  </div>
)}
```

### 10. Cambiar Velocidad de Animaciones

**En ProjectCard.tsx (líneas 28-36):**
```tsx
const cardVariants = {
  // ...
  visible: {
    duration: 0.5,  // Cambiar duración (más alto = más lento)
    delay: index * 0.1,  // Cambiar delay entre cards
  },
};
```

## 📱 Responsive Design

### Breakpoints

**Mobile (< 768px)**
- Grid: 1 columna
- Cards: Full width
- Tech tags: 2 líneas máx
- Gap: 8 (2rem)

**Tablet (768px - 1024px)**
- Grid: 2 columnas
- Cards: 50% width each
- Tech tags: 1 línea
- Gap: 8

**Desktop (> 1024px)**
- Grid: 3 columnas
- Cards: ~33% width each
- Tech tags: 1 línea
- Gap: 8

## 💡 Tips

1. **Imágenes**:
   - Usa aspect ratio 16:9 para mejores resultados
   - Optimiza imágenes antes de subir (usa TinyPNG o similar)
   - Recomendado: 800x450px

2. **Descripciones**:
   - Mantén descripciones entre 100-150 caracteres
   - Usa `line-clamp-3` para consistencia visual
   - Resalta logros o features principales

3. **Tech Stack**:
   - Limita a 4 tech tags para mejor visualización
   - Usa nombres cortos (ej: "Next.js" no "Next.js Framework")
   - Ordena de más a menos relevante

4. **Links**:
   - Siempre incluye al menos uno (demo o code)
   - Si el proyecto es privado, omite el link o usa "#"
   - Usa rel="noopener noreferrer" para seguridad

5. **Performance**:
   - Las animaciones usan `once: true` para ejecutarse solo una vez
   - Lazy loading automático con Next.js Image

## 🚀 Mejoras Futuras (Opcionales)

1. **Filtros**: Agregar filtros por tech stack
2. **Search**: Barra de búsqueda de proyectos
3. **Pagination**: Si tienes más de 9 proyectos
4. **Modal**: Click para ver detalles completos
5. **Tags Cloud**: Mostrar todas las techs disponibles
6. **Load More**: Cargar proyectos dinámicamente
7. **Analytics**: Track clicks en demos/code

## 🐛 Troubleshooting

**Problema**: Las imágenes no cargan
- **Solución**: Verificar que la ruta sea correcta y la imagen exista en `/public`
- Agregar el dominio a `next.config.mjs` si es externo

**Problema**: El grid se ve desalineado
- **Solución**: Verificar que todas las cards tengan la misma cantidad de tech tags
- Usar `line-clamp` para descripciones

**Problema**: Las animaciones no funcionan
- **Solución**: Verificar que `framer-motion` esté instalado
- Verificar que `useInView` esté importado correctamente

**Problema**: Los links no abren
- **Solución**: Verificar que los URLs tengan `http://` o `https://`
- Verificar `target="_blank"` esté presente
