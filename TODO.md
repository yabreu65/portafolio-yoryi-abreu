# ✅ TODO List - Personalización del Portfolio

Lista de tareas para completar la personalización de tu portfolio.

---

## 🎯 PRIORIDAD ALTA - Esencial

### 1. ✏️ Personalizar Información Personal

**Archivo:** `/config/site.config.ts`

- [ ] Cambiar `name: "Tu Nombre Completo"`
- [ ] Cambiar `shortName: "Tu Nombre"`
- [ ] Actualizar `title: "Full-Stack Developer"` (si aplica)
- [ ] Personalizar `tagline`
- [ ] Escribir tu `description` única
- [ ] Actualizar `email`
- [ ] Cambiar `location`

### 2. 🔗 Actualizar Redes Sociales

**Archivo:** `/config/site.config.ts` (líneas 29-38)

- [ ] GitHub URL → https://github.com/**tu-usuario**
- [ ] LinkedIn URL → https://linkedin.com/in/**tu-perfil**
- [ ] Twitter URL → https://twitter.com/**tu-handle**
- [ ] (Opcional) Instagram, YouTube, etc.

### 3. 📝 Escribir About Section

**Archivo:** `/config/site.config.ts` (líneas 43-51)

- [ ] Párrafo 1: Quién eres y qué haces
- [ ] Párrafo 2: Tu experiencia y especialización
- [ ] Párrafo 3: Tus valores e intereses
- [ ] Actualizar estadísticas (años, proyectos, clientes)

### 4. 💻 Actualizar Skills

**Archivo:** `/config/site.config.ts` (líneas 62-82)

- [ ] Frontend: Agregar/quitar tus tecnologías reales
- [ ] Backend: Agregar/quitar tus tecnologías reales
- [ ] Tools: Agregar/quitar herramientas que usas
- [ ] Learning: Skills que estás aprendiendo actualmente

### 5. 🚀 Reemplazar Proyectos Placeholder

**Archivo:** `/config/site.config.ts` (líneas 87-168)

Para cada proyecto (6 total):
- [ ] Proyecto 1: Nombre, descripción, tech, links
- [ ] Proyecto 2: Nombre, descripción, tech, links
- [ ] Proyecto 3: Nombre, descripción, tech, links
- [ ] Proyecto 4: Nombre, descripción, tech, links
- [ ] Proyecto 5: Nombre, descripción, tech, links
- [ ] Proyecto 6: Nombre, descripción, tech, links

**Tips:**
- Usa proyectos REALES que hayas desarrollado
- Links de demo funcionales (no "#")
- Descripción de 100-150 caracteres
- Menciona logros concretos

---

## 📸 PRIORIDAD MEDIA - Imágenes

### 6. 🖼️ Agregar Foto de Perfil

- [ ] Conseguir foto profesional (800x800px, < 200KB)
- [ ] Guardar en `/public/images/profile.jpg`
- [ ] Actualizar About.tsx para usar la imagen

**Ubicación del código:**
`/app/components/About.tsx` (línea ~89)

```tsx
<img
  src="/images/profile.jpg"
  alt="Tu Nombre"
  className="w-full h-full object-cover"
/>
```

### 7. 📷 Screenshots de Proyectos

- [ ] Crear carpeta `/public/images/projects/`
- [ ] Screenshot proyecto 1 (800x450px, < 200KB)
- [ ] Screenshot proyecto 2 (800x450px, < 200KB)
- [ ] Screenshot proyecto 3 (800x450px, < 200KB)
- [ ] Screenshot proyecto 4 (800x450px, < 200KB)
- [ ] Screenshot proyecto 5 (800x450px, < 200KB)
- [ ] Screenshot proyecto 6 (800x450px, < 200KB)

Luego actualizar en `/config/site.config.ts`:
```typescript
image: "/images/projects/proyecto1.jpg",
```

### 8. 🎨 Favicon

- [ ] Crear favicon en [favicon.io](https://favicon.io/)
- [ ] Guardar como `/public/favicon.ico`
- [ ] Verificar que aparece en el tab del navegador

---

## 🌐 PRIORIDAD MEDIA - SEO & Metadata

### 9. 📊 Configurar SEO

**Archivo:** `/config/site.config.ts` (líneas 173-184)

- [ ] Actualizar `title` con tu nombre
- [ ] Escribir `description` para SEO (155 caracteres max)
- [ ] Agregar `keywords` relevantes (5-10 palabras)
- [ ] Cambiar `siteUrl` cuando tengas dominio

### 10. 📝 Actualizar Metadata en Layout

**Archivo:** `/app/layout.tsx`

- [ ] Línea 22: Cambiar `authors: [{ name: "Your Name" }]`
- [ ] Línea 23: Cambiar `creator: "Your Name"`
- [ ] Línea 36: Cambiar `creator: "@yourhandle"`

---

## 🔧 PRIORIDAD BAJA - Opcionales

### 11. 📧 Contact Section

**Archivo:** `/app/page.tsx` (líneas 54-90)

- [ ] Cambiar `mailto:tu@email.com` (línea 55)
- [ ] Cambiar LinkedIn URL (línea 61)
- [ ] Cambiar GitHub URL (línea 74)
- [ ] Cambiar Twitter URL (línea 83)

**Opcional - Formulario de Contacto:**
- [ ] Integrar servicio de email (EmailJS, Formspree, etc.)
- [ ] Crear componente Contact.tsx
- [ ] Agregar validación de formulario

### 12. 🎨 Personalizar Colores (Opcional)

**Archivo:** `/tailwind.config.ts`

Si quieres cambiar la paleta de colores:
- [ ] Primary color (línea ~14)
- [ ] Secondary color (línea ~19)
- [ ] Background colors (línea ~24)

### 13. 🔤 Cambiar Fuentes (Opcional)

**Archivo:** `/app/layout.tsx`

- [ ] Cambiar Inter por otra Google Font
- [ ] Cambiar JetBrains Mono por otra monospace font

### 14. 📱 Agregar Google Analytics (Opcional)

- [ ] Crear cuenta Google Analytics
- [ ] Agregar tracking ID a layout.tsx
- [ ] Verificar que funciona

---

## 🚀 DEPLOY - Publicar

### 15. 📦 Preparar para Deploy

- [ ] Verificar que `npm run build` funciona sin errores
- [ ] Verificar que todos los links funcionen
- [ ] Probar en diferentes navegadores
- [ ] Probar responsive en diferentes dispositivos

### 16. 🌐 Deploy a Vercel

- [ ] Crear cuenta en [vercel.com](https://vercel.com)
- [ ] Push código a GitHub
- [ ] Importar repositorio en Vercel
- [ ] Click "Deploy"
- [ ] Verificar que el sitio funciona en producción

### 17. 🔗 Dominio Custom (Opcional)

- [ ] Comprar dominio (Namecheap, GoDaddy, etc.)
- [ ] Configurar DNS en Vercel
- [ ] Actualizar `siteUrl` en site.config.ts
- [ ] Verificar que el dominio funciona

---

## ✅ CHECKLIST FINAL - Antes de Publicar

Verifica que TODO esté completo:

### Contenido
- [ ] ✅ Nombre real en todas partes
- [ ] ✅ Email real (no placeholder)
- [ ] ✅ URLs de redes sociales funcionales
- [ ] ✅ Párrafos de About escritos
- [ ] ✅ Skills actualizados con tus tecnologías
- [ ] ✅ 6 proyectos con información real
- [ ] ✅ Links de proyectos funcionales (no "#")

### Imágenes
- [ ] ✅ Foto de perfil profesional
- [ ] ✅ Screenshots de proyectos (mínimo 3)
- [ ] ✅ Favicon personalizado

### SEO & Meta
- [ ] ✅ Meta title personalizado
- [ ] ✅ Meta description personalizado
- [ ] ✅ Keywords relevantes
- [ ] ✅ Open Graph image (opcional)

### Testing
- [ ] ✅ Build sin errores (`npm run build`)
- [ ] ✅ Todos los links funcionan
- [ ] ✅ Responsive en móvil
- [ ] ✅ Responsive en tablet
- [ ] ✅ Funciona en Chrome
- [ ] ✅ Funciona en Safari
- [ ] ✅ Funciona en Firefox

### Deploy
- [ ] ✅ Código en GitHub
- [ ] ✅ Deployed en Vercel
- [ ] ✅ Dominio configurado (opcional)
- [ ] ✅ SSL certificado activo
- [ ] ✅ Sitio accesible públicamente

---

## 📝 Notas Adicionales

### Tips para Completar Rápido

1. **Día 1**: Personalizar información (TODO 1-5)
2. **Día 2**: Agregar imágenes (TODO 6-8)
3. **Día 3**: SEO y deploy (TODO 9-16)

### Prioriza

Si tienes poco tiempo, enfócate en:
1. Información personal (nombre, email, social)
2. About section (3 párrafos)
3. Al menos 3 proyectos reales
4. Deploy a Vercel

Lo demás puede esperar.

### Recursos Útiles

- **Imágenes gratis**: [Unsplash](https://unsplash.com), [Pexels](https://pexels.com)
- **Iconos**: [Lucide](https://lucide.dev), [Heroicons](https://heroicons.com)
- **Favicon generator**: [favicon.io](https://favicon.io)
- **Optimizar imágenes**: [TinyPNG](https://tinypng.com)
- **Screenshot tool**: [Screely](https://screely.com)

---

## 🎯 Orden Recomendado

1. ✏️ Personalizar info (TODO 1-5) → **30 min**
2. 📧 Contact links (TODO 11) → **5 min**
3. 🖼️ Foto perfil (TODO 6) → **10 min**
4. 📷 Screenshots proyectos (TODO 7) → **30 min**
5. 📊 SEO (TODO 9-10) → **15 min**
6. 🚀 Deploy (TODO 15-16) → **20 min**

**Total: ~2 horas** para tener el portfolio en línea.

---

**¿Completaste todo? ¡Felicidades! 🎉**

Tu portfolio está listo para impresionar a reclutadores y clientes.

No olvides:
- 📤 Compartir en LinkedIn
- 📧 Incluir en tu CV
- 🔗 Agregar a tu perfil de GitHub
- 💼 Usar en aplicaciones de trabajo

---

**Última actualización**: Noviembre 2024
