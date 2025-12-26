# About Section Documentation

## 📋 Descripción

La About Section presenta información personal y profesional del desarrollador, incluyendo una foto, descripción, estadísticas y el tech stack completo.

## ✨ Características Implementadas

### Layout
- ✅ Padding vertical generoso (py-24)
- ✅ Max-width contenedor: 1200px
- ✅ Grid de 2 columnas en desktop (1 col en mobile)
- ✅ Background con dot-pattern sutil

### Columna Izquierda - Foto
- ✅ Aspect ratio 1:1 (cuadrado)
- ✅ Border radius grande (rounded-2xl)
- ✅ Border con gradient animado (primary → secondary)
- ✅ Hover effect: gradient opacity + overlay
- ✅ Shadow sutil
- ✅ Placeholder con gradiente animado y orbs
- ✅ Icono de usuario centrado
- ✅ Badge flotante "Available for work"

### Columna Derecha - Contenido
1. **Section Header**
   - Small heading: "About Me" (uppercase, primary)
   - Large title: "Building digital experiences that matter"
   - Palabra "that matter" con gradient

2. **Párrafos (3)**
   - Quién soy (introducción)
   - Qué hago (especialización)
   - Mi enfoque/filosofía (valores)

3. **Estadísticas (Grid 2x2)**
   - Years Experience: 5+
   - Projects Completed: 50+
   - Happy Clients: 30+
   - Dedication: 100%
   - Cada card con hover effect

4. **Tech Stack**
   - Componente separado (TechStack.tsx)
   - 3 categorías: Frontend, Backend, Tools
   - Grid responsive: 2 cols mobile / 4 cols desktop
   - Hover effects en cada item

### Animaciones

**About Component:**
| Elemento | Animación | Timing |
|----------|-----------|--------|
| Section header | fade-in-up | 0s (when in view) |
| Photo | slide-in-left | 0s |
| Content | slide-in-right | 0.2s |
| Floating badge | scale + fade-in | 0.8s |
| Stat cards | stagger fade-in-up | 0.4s + (index * 0.1s) |
| Tech stack | fade-in-up | 0.6s |

**TechStack Component:**
| Elemento | Animación | Timing |
|----------|-----------|--------|
| Container | fade-in | 0s |
| Categories | stagger fade-in-up | 0.1s delay between |
| Tech items | stagger scale-in | Within category |

### Intersection Observer
- ✅ Las animaciones se activan cuando la sección entra en viewport
- ✅ `once: true` - Animaciones ocurren solo una vez
- ✅ `margin: "-100px"` - Trigger antes de que sea completamente visible

## 🎨 Tech Stack Items

### Frontend
- **React** - Color: #61DAFB (cyan)
- **Next.js** - Color: white
- **TypeScript** - Color: #3178C6 (blue)
- **Tailwind CSS** - Color: #06B6D4 (cyan)

### Backend
- **Node.js** - Color: #339933 (green)
- **Express** - Color: white
- **PostgreSQL** - Color: #4169E1 (blue)
- **Prisma** - Color: white

### Tools
- **Git** - Color: #F05032 (red)
- **VS Code** - Color: #007ACC (blue)
- **Vercel** - Color: white
- **Docker** - Color: #2496ED (blue)

## 📦 Componentes Creados

### 1. About.tsx
Componente principal que contiene:
- Layout de 2 columnas
- Photo section con placeholder
- Content section con texto y stats
- Integración de TechStack

### 2. TechStack.tsx
Componente reutilizable que contiene:
- TypeScript types exportados
- Props: `animated?: boolean`
- 3 categorías configurables
- Grid responsive
- Animaciones independientes

## 🎯 Personalización

### 1. Cambiar el Texto "About Me"

**En About.tsx:**

```tsx
// Línea ~67 - Section Header
<span className="...">
  About Me  {/* Cambiar aquí */}
</span>
```

### 2. Modificar el Título Principal

```tsx
// Línea ~70-73
<h2 className="...">
  Tu título personalizado{" "}
  <span className="gradient-text">con énfasis</span>
</h2>
```

### 3. Actualizar los Párrafos

```tsx
// Líneas ~147-168 - Los 3 párrafos
<p className="text-lg">
  Tu primer párrafo aquí...
</p>
<p className="text-lg">
  Tu segundo párrafo aquí...
</p>
<p className="text-lg">
  Tu tercer párrafo aquí...
</p>
```

### 4. Cambiar las Estadísticas

```tsx
// Línea ~173-178
{[
  { number: "5+", label: "Years Experience" },
  { number: "50+", label: "Projects Completed" },
  { number: "30+", label: "Happy Clients" },
  { number: "100%", label: "Dedication" },
].map((stat, index) => (
  // Modificar números y labels aquí
```

### 5. Reemplazar Placeholder de Foto

**Opción A: Agregar imagen real**

```tsx
// Reemplazar el contenido del div con aspect-square por:
<img
  src="/images/profile.jpg"
  alt="Tu Nombre"
  className="w-full h-full object-cover"
/>
```

**Opción B: Mantener el placeholder pero cambiar el icono**

```tsx
// Línea ~104 - Cambiar User por otro icono
import { Camera } from "lucide-react";  // En imports

<Camera className="w-16 h-16 text-primary" />
```

### 6. Modificar Tech Stack Items

**En TechStack.tsx:**

```tsx
// Líneas ~29-95 - Array de categorías
const techCategories: TechCategory[] = [
  {
    title: "Frontend",
    items: [
      {
        name: "React",
        icon: <Code2 className="w-6 h-6" />,
        color: "hover:text-[#61DAFB]",
      },
      // Agregar más items aquí
    ],
  },
  // Agregar más categorías aquí
];
```

### 7. Agregar Nueva Categoría de Tech Stack

```tsx
// Agregar al array techCategories
{
  title: "DevOps",  // Nueva categoría
  items: [
    {
      name: "AWS",
      icon: <Cloud className="w-6 h-6" />,
      color: "hover:text-[#FF9900]",
    },
    {
      name: "CI/CD",
      icon: <RefreshCw className="w-6 h-6" />,
      color: "hover:text-primary",
    },
  ],
},
```

### 8. Cambiar Colores del Gradient Border

```tsx
// Línea ~83 - Border de la foto
<div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary ..." />

// Cambiar a:
<div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary-light to-secondary ..." />
```

### 9. Desactivar Animaciones en TechStack

```tsx
// Al usar el componente
<TechStack animated={false} />
```

### 10. Modificar el Floating Badge

```tsx
// Línea ~120-134 - Badge flotante
<motion.div className="absolute -bottom-4 -right-4 ...">
  <div className="flex items-center gap-2">
    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
    <span className="text-sm font-semibold text-text-primary">
      Tu mensaje aquí  {/* Cambiar texto */}
    </span>
  </div>
</motion.div>
```

## 📱 Responsive Design

### Breakpoints

**Mobile (< 640px)**
- Layout: 1 columna
- Photo: Full width
- Stats grid: 2 columnas
- Tech grid: 2 columnas

**Tablet (640px - 1024px)**
- Layout: 1 columna
- Photo: Full width
- Stats grid: 2 columnas
- Tech grid: 4 columnas

**Desktop (> 1024px)**
- Layout: 2 columnas (1:1)
- Photo: Left column
- Content: Right column
- Stats grid: 2 columnas
- Tech grid: 4 columnas

## 🔧 TypeScript Types

### TechItem
```typescript
interface TechItem {
  name: string;
  icon: React.ReactNode;
  color: string;  // Tailwind hover class
}
```

### TechCategory
```typescript
interface TechCategory {
  title: string;
  items: TechItem[];
}
```

### TechStackProps
```typescript
interface TechStackProps {
  animated?: boolean;  // Default: true
}
```

## 💡 Tips

1. **Performance**:
   - Las animaciones usan `once: true` para ejecutarse solo una vez
   - El Intersection Observer tiene un margen de -100px para activación temprana

2. **Accesibilidad**:
   - Usa text-lg para mejor legibilidad
   - Colores con suficiente contraste
   - Estructura semántica correcta

3. **SEO**:
   - Usa el ID `#about` para navegación interna
   - Estructura de headings correcta (h2, h3, h4)

4. **Customización**:
   - El componente TechStack es completamente independiente
   - Puedes reutilizarlo en otras páginas (ej: CV, Resume)

## 🚀 Mejoras Futuras (Opcionales)

1. **Foto Real**: Reemplazar placeholder con tu foto
2. **Download CV**: Agregar botón para descargar CV/Resume
3. **Certificaciones**: Agregar sección de certificados
4. **Timeline**: Agregar timeline de experiencia
5. **Skills Progress**: Barras de progreso para cada tech
6. **Testimonials**: Agregar sección de testimonios de clientes

## 🐛 Troubleshooting

**Problema**: Las animaciones no funcionan al hacer scroll
- **Solución**: Verificar que `framer-motion` esté instalado y el componente use `useInView`

**Problema**: El placeholder de la foto no se ve bien
- **Solución**: Ajustar los colores del gradiente o agregar una imagen real

**Problema**: Los iconos de tech no aparecen
- **Solución**: Verificar imports de `lucide-react` en TechStack.tsx

**Problema**: El layout se rompe en mobile
- **Solución**: Verificar las clases responsive (`lg:grid-cols-2`, `sm:grid-cols-4`)
