# Hero Section Documentation

## 📋 Descripción

El Hero Section es la primera sección del portfolio que da la bienvenida a los visitantes. Incluye animaciones suaves, efectos visuales atractivos y navegación intuitiva.

## ✨ Características Implementadas

### Layout
- ✅ Full viewport height (100vh)
- ✅ Contenido centrado vertical y horizontalmente
- ✅ Max-width: 1200px con padding responsivo
- ✅ Background con gradiente animado

### Contenido
1. **Badge de Disponibilidad**
   - Texto: "Available for work"
   - Indicador pulsante animado (ping effect)
   - Glassmorphism effect

2. **Nombre Principal**
   - Gradient text (Primary → Secondary)
   - Tamaños responsivos: 5xl/7xl/8xl
   - Animación de gradiente continua

3. **Tagline**
   - "Full-Stack Developer | Building Scalable Web Applications"
   - Separador con color primary

4. **Descripción**
   - 1-2 líneas explicativas
   - Max-width: 2xl para legibilidad óptima

5. **CTAs (Call to Actions)**
   - Primary: "View My Work" → scroll a #projects
   - Secondary: "Contact Me" → scroll a #contact
   - Iconos con animaciones en hover
   - Glow effects

6. **Social Links**
   - GitHub, LinkedIn, Twitter
   - Iconos de Lucide React
   - Scale + rotate effect en hover
   - Stagger animation en entrada

7. **Scroll Indicator**
   - Indicador animado "Scroll Down"
   - Bounce animation continua

### Animaciones (Framer Motion)

| Elemento | Animación | Delay |
|----------|-----------|-------|
| Badge | fade-in desde arriba | 0s |
| Nombre | fade-in + slide-up | 0.2s |
| Tagline | fade-in + slide-up | 0.4s |
| Descripción | fade-in | 0.6s |
| CTAs | fade-in + scale | 0.8s |
| Social links | stagger fade-in | 1s + (index * 0.1s) |
| Scroll indicator | fade-in | 1.5s |

### Background Animado

**3 Gradient Orbs:**
1. **Orb 1 (Primary)** - Top-left
   - Color: primary/20
   - Blur: 3xl
   - Movimiento: x: 100px, y: -100px, scale: 1.2
   - Duración: 20s
   - Parallax: Sigue el mouse

2. **Orb 2 (Secondary)** - Bottom-right
   - Color: secondary/20
   - Blur: 3xl
   - Movimiento: x: -100px, y: 100px, scale: 1.3
   - Duración: 25s
   - Parallax: Inverso al mouse

3. **Orb 3 (Blend)** - Center
   - Color: primary/10
   - Blur: 3xl
   - Movimiento: x: -50px, y: -50px, scale: 1.1
   - Duración: 15s
   - Parallax: Medio

**Grid Pattern:**
- Overlay sutil con opacity 30%
- Pattern de líneas verticales y horizontales

### Efectos Visuales

1. **Parallax Effect**
   - Los orbs se mueven sutilmente con el mouse
   - Rango: ±20px en X e Y

2. **Glow Effects en Botones**
   - Primary button: glow azul en hover
   - Secondary button: glow degradado en hover

3. **Social Icons**
   - Scale: 1.2 en hover
   - Rotate: 5° en hover
   - Color change según plataforma

4. **Gradient Text**
   - Animación continua de gradiente
   - Background-size: 200%
   - Animation: 3s ease infinite

## 🎨 Personalización

### 1. Cambiar el Nombre

```tsx
<span className="gradient-text text-gradient-animate">
  Tu Nombre Aquí  {/* Cambiar aquí */}
</span>
```

### 2. Modificar el Tagline

```tsx
<motion.p variants={itemVariants} className="...">
  Tu Título | Tu Especialización  {/* Personalizar */}
</motion.p>
```

### 3. Actualizar la Descripción

```tsx
<motion.p variants={itemVariants} className="...">
  Tu descripción personalizada aquí.  {/* Cambiar texto */}
</motion.p>
```

### 4. Cambiar URLs de Social Links

```tsx
const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: <Github className="w-6 h-6" />,
    href: "https://github.com/tu-usuario",  // Cambiar aquí
    color: "hover:text-primary",
  },
  // ... otros enlaces
];
```

### 5. Agregar Más Redes Sociales

```tsx
import { Github, Linkedin, Twitter, Mail } from "lucide-react";  // Agregar icono

const socialLinks: SocialLink[] = [
  // ... enlaces existentes
  {
    name: "Email",
    icon: <Mail className="w-6 h-6" />,
    href: "mailto:tu@email.com",
    color: "hover:text-primary",
  },
];
```

### 6. Modificar Badge de Disponibilidad

```tsx
<span className="inline-flex items-center gap-2 ...">
  {/* Cambiar el indicador o el texto */}
  <span className="relative flex h-2 w-2">
    {/* ... */}
  </span>
  Tu Mensaje Aquí  {/* Por ejemplo: "Open to opportunities" */}
</span>
```

### 7. Ajustar Colores de los Orbs

```tsx
{/* Cambiar primary/20 por secondary/20 o ajustar opacidad */}
<motion.div
  className="absolute w-96 h-96 rounded-full bg-primary/30 blur-3xl"
  // ...
/>
```

### 8. Modificar Velocidad de Animaciones

```tsx
// En los itemVariants
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,  // Cambiar duración (más alto = más lento)
      ease: "easeOut",
    },
  },
};
```

## 📱 Responsive Design

### Breakpoints

- **Mobile (< 640px)**
  - Text: 5xl
  - Buttons: Stack vertical
  - Orbs: Tamaño reducido

- **Tablet (640px - 1024px)**
  - Text: 7xl
  - Buttons: Horizontal
  - Orbs: Tamaño medio

- **Desktop (> 1024px)**
  - Text: 8xl
  - Buttons: Horizontal
  - Orbs: Tamaño completo

## 🔧 Dependencias Utilizadas

- `framer-motion`: Animaciones
- `lucide-react`: Iconos
- `react`: Hooks (useState, useEffect)

## 💡 Tips

1. **Performance**: Los orbs usan `will-change` implícitamente con Framer Motion para mejor rendimiento

2. **Accesibilidad**: Todos los links tienen `aria-label` apropiados

3. **SEO**: El componente usa tags semánticos correctos (`<section>`, `<h1>`, etc.)

4. **Smooth Scroll**: La función `scrollToSection` usa `behavior: "smooth"` nativo del navegador

## 🚀 Próximos Pasos

1. Personalizar el contenido con tu información
2. Reemplazar "[Tu Nombre]" con tu nombre real
3. Actualizar los URLs de redes sociales
4. Ajustar colores si es necesario
5. Agregar tu foto/avatar (opcional)

## 🐛 Troubleshooting

**Problema**: Las animaciones no funcionan
- **Solución**: Verificar que Framer Motion esté instalado: `npm install framer-motion`

**Problema**: Los iconos no aparecen
- **Solución**: Verificar que Lucide React esté instalado: `npm install lucide-react`

**Problema**: El scroll suave no funciona
- **Solución**: Asegurarse de que las secciones tengan los IDs correctos (`#projects`, `#contact`)
