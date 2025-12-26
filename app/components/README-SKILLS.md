# Skills Section Documentation

## 📋 Descripción

La Skills Section presenta tus habilidades técnicas organizadas por categorías con cards interactivas y animaciones elegantes.

## ✨ Características Implementadas

### Layout Principal
- ✅ Padding vertical: py-20
- ✅ Max-width: 1200px
- ✅ Background: background (#0F172A) - igual al fondo principal
- ✅ Dot pattern background sutil
- ✅ 2 gradient orbs flotantes animados

### Section Header
- ✅ Label pequeño: "Expertise" (uppercase, primary)
- ✅ Título: "Skills & **Technologies**" (con gradient)
- ✅ Subtítulo: "The tools I use to bring ideas to life..."
- ✅ Centrado

### Skills Grid
- ✅ **3 columnas** en desktop (lg:)
- ✅ **2 columnas** en tablet (md:)
- ✅ **1 columna** en mobile
- ✅ Gap: 2rem (gap-8)
- ✅ 3 categorías principales

### Category Card Design

#### Contenedor
- ✅ Background: surface (#1E293B)
- ✅ Border: border-border sutil
- ✅ Border radius: rounded-xl
- ✅ Padding: p-8 (generoso)
- ✅ Hover: translateY(-8px) - lift effect
- ✅ Hover: border glow (color específico por categoría)
- ✅ Hover: shadow-glow
- ✅ Gradient overlay en hover
- ✅ Gradient border blur en hover
- ✅ Transition: 300ms

#### Icon Circle (arriba)
- ✅ Tamaño: 64px (w-16 h-16)
- ✅ Rounded-full
- ✅ Background: color/10 (primary, secondary, o accent)
- ✅ Icon: 32px (w-8 h-8)
- ✅ Color específico por categoría
- ✅ Hover: scale 1.1
- ✅ Hover: rotate 5deg

#### Title
- ✅ Text-xl, bold
- ✅ Color: text-primary
- ✅ Margin bottom: mb-6

#### Skills List
- ✅ Spacing entre items: space-y-3
- ✅ Cada item con:
  - Checkmark icon (CheckCircle2)
  - Text-sm
  - Color: text-secondary
  - Hover: text-primary
  - Flex layout con gap

### Categorías de Skills

#### 1. Frontend Development
- **Icon**: Code2 (lucide-react)
- **Color**: Primary (#0EA5E9)
- **Skills**:
  - React / Next.js
  - TypeScript
  - Tailwind CSS
  - Framer Motion
  - HTML5 / CSS3

#### 2. Backend Development
- **Icon**: Server (lucide-react)
- **Color**: Secondary (#8B5CF6)
- **Skills**:
  - Node.js / Express
  - PostgreSQL / MongoDB
  - Prisma ORM
  - REST APIs
  - Authentication (JWT, OAuth)

#### 3. Tools & DevOps
- **Icon**: Wrench (lucide-react)
- **Color**: Accent (Primary)
- **Skills**:
  - Git / GitHub
  - VS Code
  - Vercel / Netlify
  - Docker
  - Postman

### Animaciones

#### Section Level
| Elemento | Animación | Timing |
|----------|-----------|--------|
| Header | fade-in-up | 0s (when in view) |
| Cards container | fade-in | 0.2s delay |
| Card 1 | fade-in-up | 0s |
| Card 2 | fade-in-up | 0.15s |
| Card 3 | fade-in-up | 0.3s |
| Additional skills | stagger scale-in | 1s + (index * 0.1s) |

#### Card Level
| Elemento | Animación | Trigger |
|----------|-----------|---------|
| Card | y: -8px | Hover |
| Icon circle | scale: 1.1, rotate: 5deg | Hover |
| Border | opacity: 0 → 100%, glow | Hover |
| Gradient overlay | opacity: 0 → 100% | Hover |

#### Skills List Level
| Elemento | Animación | Timing |
|----------|-----------|--------|
| List container | fade-in | When in view |
| Skill items | stagger fade-in-left | 0.3s + (card index * 0.15s) + (item * 0.1s) |
| Checkmark | scale: 1 → 1.2 | Hover item |
| Text | color: secondary → primary | Hover item |

### Additional Skills Section
- ✅ 4 skills badges extra
- ✅ "Always learning..." text
- ✅ Rounded-full pills
- ✅ Hover: border-primary/50
- ✅ Stagger animation (1s base + index * 0.1s)
- ✅ Skills: GraphQL, React Native, AWS, TypeScript Advanced

### Color System por Categoría

```typescript
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
```

## 📦 Componentes Creados

### 1. SkillCategory.tsx
**Componente reutilizable para cada categoría**

**Props:**
```typescript
interface SkillCategoryProps {
  category: SkillCategoryType;
  index: number;  // Para stagger animation
}
```

**Características:**
- Icon circle con color dinámico
- Title de categoría
- Lista de skills con checkmarks
- Animaciones en entrada y hover
- Color system por categoría
- Gradient border effect
- Glow effect en hover

### 2. Skills.tsx
**Componente de la sección completa**

**Características:**
- Array de categorías al inicio (fácil editar)
- Grid responsive
- Header con animaciones
- Background decorativo (dot pattern + orbs)
- Additional skills section

### 3. SkillCategoryType Interface (TypeScript)
```typescript
export interface SkillCategoryType {
  id: number;
  title: string;
  icon: LucideIcon;
  skills: string[];
  color: "primary" | "secondary" | "accent";
}
```

## 🎯 Personalización

### 1. Editar Skills

**En Skills.tsx (líneas 9-46):**

```tsx
const SKILL_CATEGORIES: SkillCategoryType[] = [
  {
    id: 1,
    title: "Tu Categoría",
    icon: Code2,  // O cualquier icono de lucide-react
    color: "primary",  // "primary" | "secondary" | "accent"
    skills: [
      "Skill 1",
      "Skill 2",
      "Skill 3",
    ],
  },
  // Agregar más categorías...
];
```

### 2. Agregar Nueva Categoría

```tsx
import { Database } from "lucide-react";  // Importar nuevo icono

// Agregar al array SKILL_CATEGORIES:
{
  id: 4,
  title: "Database & Storage",
  icon: Database,
  color: "secondary",
  skills: [
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "AWS S3",
  ],
}
```

### 3. Cambiar Iconos

**Iconos disponibles de lucide-react:**
- `Code2` - Para frontend/coding
- `Server` - Para backend
- `Wrench` - Para tools
- `Database` - Para databases
- `Cloud` - Para cloud/DevOps
- `Layers` - Para architecture
- `Zap` - Para performance
- `Shield` - Para security

```tsx
import { Cloud, Shield, Layers } from "lucide-react";

// Usar en la categoría:
icon: Cloud,
```

### 4. Modificar Colores de Categorías

**En SkillCategory.tsx (líneas 17-45):**

Agregar un nuevo color:
```tsx
const colorClasses = {
  primary: { /* ... */ },
  secondary: { /* ... */ },
  accent: { /* ... */ },
  // Nuevo color:
  custom: {
    iconBg: "bg-green-500/10",
    iconText: "text-green-500",
    border: "hover:border-green-500/50",
    glow: "hover:shadow-green-500/30",
    checkmark: "text-green-500",
  },
};
```

### 5. Cambiar Additional Skills

**En Skills.tsx (líneas 165-169):**

```tsx
{["GraphQL", "React Native", "AWS", "TypeScript Advanced"].map(
  // Cambiar por tus skills:
  {["Tu Skill 1", "Tu Skill 2", "Tu Skill 3", "Tu Skill 4"].map(
```

### 6. Ajustar Cantidad de Columnas

**En Skills.tsx (línea 150):**

```tsx
// Actual: 3 cols desktop, 2 tablet, 1 mobile
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"

// Para 2 columnas desktop:
className="grid grid-cols-1 lg:grid-cols-2 gap-8"

// Para 4 columnas desktop:
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
```

### 7. Ocultar Additional Skills Section

**En Skills.tsx:**

Comentar o eliminar el bloque `<motion.div>` (líneas 159-190):
```tsx
{/* Optional: Additional Info or CTA */}
{/* <motion.div>...</motion.div> */}
```

### 8. Cambiar Velocidad de Animaciones

**En SkillCategory.tsx (líneas 49-56):**

```tsx
const cardVariants = {
  visible: {
    duration: 0.5,  // Cambiar duración (más alto = más lento)
    delay: index * 0.15,  // Cambiar delay entre cards
  },
};
```

**En SkillCategory.tsx (líneas 58-64):**

```tsx
const listVariants = {
  visible: {
    staggerChildren: 0.1,  // Delay entre skills
    delayChildren: 0.3,  // Delay inicial
  },
};
```

### 9. Modificar Padding de Cards

**En SkillCategory.tsx (línea 85):**

```tsx
// Actual: p-8
className="... p-8 ..."

// Menos padding:
className="... p-6 ..."

// Más padding:
className="... p-10 ..."
```

### 10. Agregar Skill Level Indicators (Opcional)

**En SkillCategory.tsx, modificar el list item:**

```tsx
<motion.li>
  <CheckCircle2 className="..." />
  <div className="flex-1">
    <span className="...">{skill}</span>
    {/* Agregar level bar */}
    <div className="w-full h-1 bg-border rounded-full mt-1">
      <div className="h-full bg-primary rounded-full" style={{ width: "80%" }} />
    </div>
  </div>
</motion.li>
```

## 📱 Responsive Design

### Breakpoints

**Mobile (< 768px)**
- Grid: 1 columna
- Cards: Full width
- Icon: 64px
- Padding: p-8

**Tablet (768px - 1024px)**
- Grid: 2 columnas
- Cards: 50% width each
- Icon: 64px
- Padding: p-8

**Desktop (> 1024px)**
- Grid: 3 columnas
- Cards: ~33% width each
- Icon: 64px
- Padding: p-8

## 💡 Tips

1. **Skills Organization**:
   - Agrupa skills relacionados
   - Pon las más importantes primero
   - Máximo 5-7 skills por categoría para mejor visualización

2. **Naming**:
   - Usa nombres cortos y reconocibles
   - Evita abreviaciones confusas
   - Sé consistente con la nomenclatura

3. **Categorías**:
   - Máximo 3-4 categorías para mejor legibilidad
   - Usa iconos que representen claramente la categoría
   - Alterna colores para mejor distinción visual

4. **Additional Skills**:
   - Usa para skills que estás aprendiendo
   - O skills complementarias
   - Máximo 4-5 para no saturar

5. **Performance**:
   - Las animaciones usan `once: true`
   - Intersection Observer optimizado
   - Lazy animations (solo cuando es visible)

## 🚀 Mejoras Futuras (Opcionales)

1. **Skill Levels**: Agregar barras de progreso
2. **Tooltips**: Hover para más info sobre cada skill
3. **Certificates**: Links a certificaciones
4. **Years of Experience**: Mostrar años de experiencia
5. **Filter**: Filtrar por tipo de skill
6. **Timeline**: Cuándo aprendiste cada skill
7. **Interactive**: Click para ver proyectos usando esa skill

## 🐛 Troubleshooting

**Problema**: Los iconos no aparecen
- **Solución**: Verificar imports de `lucide-react`
- Verificar que el icono existe en la librería

**Problema**: Las animaciones no funcionan
- **Solución**: Verificar que `framer-motion` esté instalado
- Verificar que `useInView` esté importado

**Problema**: Los colores no se aplican
- **Solución**: Verificar que el color en `color` property sea válido ("primary", "secondary", "accent")
- Verificar que los colores estén definidos en colorClasses

**Problema**: El grid se ve desalineado
- **Solución**: Asegurar que todas las categorías tengan similar cantidad de skills
- O ajustar el height de las cards con `h-full`
