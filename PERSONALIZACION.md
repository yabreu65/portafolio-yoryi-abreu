# 📝 Guía de Personalización del Portfolio

Esta guía te ayudará a personalizar todo el contenido del portfolio con tu información real.

## 🎯 Archivo Principal de Configuración

**Archivo:** `/config/site.config.ts`

Este archivo contiene **TODA** la información personalizable del portfolio. Solo necesitas editarlo una vez y todos los componentes se actualizarán automáticamente.

---

## 📋 Checklist de Personalización

### ✅ 1. INFORMACIÓN PERSONAL

**Ubicación:** Líneas 9-16

```typescript
name: "Tu Nombre Completo",
shortName: "Tu Nombre",
title: "Full-Stack Developer",
tagline: "Building Scalable Web Applications",
description: "Tu descripción profesional aquí...",
```

**Ejemplo:**
```typescript
name: "Juan Pérez",
shortName: "Juan",
title: "Full-Stack Developer & UI Designer",
tagline: "Creating Beautiful & Functional Web Experiences",
description: "Passionate developer with 5+ years building modern web applications...",
```

---

### ✅ 2. CONTACTO

**Ubicación:** Líneas 21-24

```typescript
email: "tu@email.com",
location: "Tu Ciudad, País",
availability: "Available for work",
```

**Ejemplo:**
```typescript
email: "juan.perez@gmail.com",
location: "Madrid, España",
availability: "Open to opportunities",
```

---

### ✅ 3. REDES SOCIALES

**Ubicación:** Líneas 29-38

```typescript
social: {
  github: "https://github.com/tu-usuario",
  linkedin: "https://linkedin.com/in/tu-perfil",
  twitter: "https://twitter.com/tu-handle",
  instagram: "",  // Opcional
  youtube: "",    // Opcional
}
```

**Instrucciones:**
1. Reemplaza `tu-usuario`, `tu-perfil`, `tu-handle` con tus URLs reales
2. Si no usas alguna red, déjala vacía: `instagram: ""`
3. Para agregar más redes, añade líneas nuevas

**Ejemplo:**
```typescript
social: {
  github: "https://github.com/juanperez",
  linkedin: "https://linkedin.com/in/juan-perez-dev",
  twitter: "https://twitter.com/juandev",
  instagram: "https://instagram.com/juancodes",
  youtube: "",  // No lo uso
}
```

---

### ✅ 4. ABOUT SECTION

**Ubicación:** Líneas 43-57

#### Párrafos (3 párrafos)

```typescript
paragraphs: [
  "Primer párrafo: Introducción...",
  "Segundo párrafo: Experiencia y especialización...",
  "Tercer párrafo: Intereses y valores...",
],
```

**Tips para escribir:**
- **Párrafo 1**: Quién eres, qué haces
- **Párrafo 2**: Tu experiencia y tecnologías
- **Párrafo 3**: Tus intereses fuera del código

#### Estadísticas

```typescript
stats: [
  { number: "5+", label: "Years Experience" },
  { number: "50+", label: "Projects Completed" },
  { number: "30+", label: "Happy Clients" },
  { number: "100%", label: "Dedication" },
],
```

**Personaliza:**
- Cambia los números según tu experiencia
- Puedes cambiar los labels
- Mantén 4 stats para mejor diseño

---

### ✅ 5. SKILLS

**Ubicación:** Líneas 62-82

```typescript
skills: {
  frontend: ["React / Next.js", "TypeScript", ...],
  backend: ["Node.js / Express", "PostgreSQL", ...],
  tools: ["Git / GitHub", "VS Code", ...],
  learning: ["GraphQL", "AWS", ...],
}
```

**Instrucciones:**
1. Agrega/elimina skills según tu experiencia
2. Mantén 5-7 skills por categoría para mejor visualización
3. Usa nombres cortos y reconocibles
4. En `learning`: skills que estás aprendiendo actualmente

**Ejemplo:**
```typescript
skills: {
  frontend: [
    "React / Next.js",
    "Vue.js",
    "TypeScript",
    "Tailwind CSS",
    "Sass/SCSS",
  ],
  backend: [
    "Node.js / Express",
    "Python / Django",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
  ],
  tools: [
    "Git / GitHub",
    "Docker",
    "AWS",
    "CI/CD",
    "Figma",
  ],
  learning: ["Rust", "Kubernetes", "Three.js"],
}
```

---

### ✅ 6. PROYECTOS

**Ubicación:** Líneas 87-168

Cada proyecto tiene esta estructura:

```typescript
{
  id: 1,
  name: "Nombre del Proyecto",
  description: "Descripción de 2-3 líneas...",
  tech: ["Tech1", "Tech2", "Tech3", "Tech4"],
  links: {
    demo: "https://proyecto-demo.com",
    code: "https://github.com/tu-usuario/repo",
  },
  image: "/images/projects/proyecto.jpg",  // Opcional
  featured: true,  // Para destacar
}
```

**Instrucciones:**

#### Opción A: Editar Proyectos Existentes

Reemplaza los 6 proyectos placeholder con tus proyectos reales:

```typescript
{
  id: 1,
  name: "Mi E-Commerce Real",
  description: "Tienda online con 10,000+ productos, sistema de pagos con Stripe, y dashboard de administración. Procesa $50K mensuales en ventas.",
  tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
  links: {
    demo: "https://mi-tienda.com",
    code: "https://github.com/juanperez/ecommerce",
  },
  image: "/images/projects/tienda.jpg",
  featured: true,
}
```

#### Opción B: Agregar Más Proyectos

```typescript
{
  id: 7,  // Siguiente ID
  name: "Nuevo Proyecto",
  description: "...",
  tech: [...],
  links: { demo: "...", code: "..." },
}
```

#### Opción C: Eliminar Proyectos

Simplemente borra el objeto completo del proyecto que no quieras mostrar.

**Tips:**
- Pon tus mejores proyectos primero
- Usa `featured: true` para tus top 3 proyectos
- Descripción: 100-150 caracteres, enfócate en logros
- Tech: Máximo 4 tecnologías principales
- Si no tienes demo/code, usa `#` o omite el link

---

### ✅ 7. SEO & METADATA

**Ubicación:** Líneas 173-184

```typescript
seo: {
  title: "Tu Nombre | Full-Stack Developer",
  description: "Portfolio profesional de...",
  keywords: ["developer", "full-stack", ...],
  siteUrl: "https://tu-sitio-web.com",
  ogImage: "/og-image.jpg",
}
```

**Instrucciones:**
1. `title`: Aparece en la pestaña del navegador
2. `description`: Para SEO y cuando compartes en redes sociales
3. `keywords`: 5-10 palabras clave para SEO
4. `siteUrl`: Tu dominio (cuando lo tengas)
5. `ogImage`: Imagen para Open Graph (1200x630px)

---

## 🖼️ Agregar Imágenes

### 1. Foto de Perfil (About Section)

**Ubicación:** `/public/images/profile.jpg`

**Especificaciones:**
- Tamaño: 800x800px (cuadrado)
- Formato: JPG o WebP
- Peso: < 200KB

**Dónde usarla:**
Edita `/app/components/About.tsx` (línea ~89) y reemplaza el placeholder.

### 2. Imágenes de Proyectos

**Ubicación:** `/public/images/projects/`

**Especificaciones:**
- Aspect ratio: 16:9
- Tamaño recomendado: 800x450px
- Formato: JPG o WebP
- Peso: < 200KB cada una

**Pasos:**
1. Coloca tus imágenes en `/public/images/projects/`
2. Nombra los archivos: `proyecto1.jpg`, `proyecto2.jpg`, etc.
3. En `site.config.ts`, actualiza cada proyecto:
   ```typescript
   image: "/images/projects/proyecto1.jpg",
   ```

### 3. Favicon

**Ubicación:** `/public/favicon.ico`

Genera tu favicon en: https://favicon.io/

---

## 🎨 Personalización Avanzada

### Cambiar Colores

**Archivo:** `/tailwind.config.ts`

```typescript
colors: {
  primary: {
    DEFAULT: "#0EA5E9",  // Cambia este color
    light: "#38BDF8",
    dark: "#0284C7",
  },
  secondary: {
    DEFAULT: "#8B5CF6",  // Y este
    // ...
  },
}
```

### Cambiar Fuentes

**Archivo:** `/app/layout.tsx`

```typescript
const inter = Inter({...});  // Cambia por otra Google Font
```

---

## ✅ Checklist Final

Antes de publicar, verifica que hayas actualizado:

- [ ] ✅ Nombre y título profesional
- [ ] ✅ Email y ubicación
- [ ] ✅ URLs de todas las redes sociales
- [ ] ✅ Los 3 párrafos de About
- [ ] ✅ Estadísticas reales
- [ ] ✅ Tu stack de tecnologías
- [ ] ✅ Tus proyectos reales con links
- [ ] ✅ Descripción SEO
- [ ] ✅ Foto de perfil
- [ ] ✅ Screenshots de proyectos
- [ ] ✅ Favicon

---

## 🚀 Cómo Aplicar los Cambios

1. **Edita** `/config/site.config.ts` con tu información
2. **Guarda** el archivo
3. El servidor de desarrollo **se recarga automáticamente**
4. **Revisa** los cambios en http://localhost:3000

---

## 🐛 Solución de Problemas

**Problema:** Los cambios no se reflejan
- **Solución:** Guarda el archivo y espera a que Next.js recompile (unos segundos)

**Problema:** Errores de TypeScript
- **Solución:** Verifica que no hayas borrado comas o comillas por error

**Problema:** Las imágenes no cargan
- **Solución:** Verifica que el path sea correcto y que la imagen exista en `/public/`

---

## 💡 Tips Finales

1. **Sé Auténtico**: Usa tu propia voz, no copies textos genéricos
2. **Sé Específico**: En lugar de "Tengo experiencia", di "5 años de experiencia"
3. **Muestra Resultados**: En proyectos, menciona logros: "Aumentó conversiones 40%"
4. **Actualiza Regular**: Agrega nuevos proyectos y skills conforme aprendes
5. **Prueba en Mobile**: Verifica que todo se vea bien en móvil

---

## 🎯 Próximo Paso

Una vez personalizado todo, el siguiente paso es:

**DEPLOY** - Publicar tu portfolio en Vercel:
1. Crea cuenta en vercel.com
2. Conecta tu repositorio de GitHub
3. Deploy con un click
4. Tu portfolio estará en línea en minutos

¿Necesitas ayuda con el deploy? Solo pregunta!
