# Navbar Component Documentation

## 📋 Descripción

El Navbar es un componente de navegación fixed con detección automática de la sección activa, mobile menu slide-in, y efectos de blur cuando se hace scroll.

## ✨ Características Implementadas

### Layout y Estados

#### Fixed Top ✅
- Position: fixed
- Full width
- z-index: 50 (alto)
- Responsive max-width: 1280px (7xl)
- Height: 80px (h-20)

#### Estados del Navbar

**1. Top (scroll = 0):**
- Background: Transparente
- Sin blur
- Sin border

**2. Scrolled (scroll > 50px):**
- Background: rgba(#0F172A, 0.8) - background/80
- Backdrop blur: blur-lg
- Border bottom: border-border

**Transition:** 300ms duration

### Contenido del Navbar

#### Izquierda - Logo/Nombre ✅
- Text: `<YourName />` (formato código)
- Size: text-xl, bold
- Style: gradient-text
- Hover: opacity 80% + scale 1.05
- Click: Scroll to top (smooth)

#### Centro/Derecha Desktop ✅
- **4 Nav Links**:
  - About
  - Skills
  - Projects
  - Contact

**Link Features:**
- Text-sm, font-medium
- Color: text-secondary (default)
- Active: text-primary
- Hover: text-primary
- Underline animation: left to right (0 → 100%)
- Active state: underline permanente

#### CTA Button Desktop ✅
- Text: "Get In Touch"
- Style: bg-primary, rounded-lg
- Hover: bg-primary-light + shadow-glow-primary + scale 1.05
- Hover: translateY -2px
- Click: Scroll to contact section

#### Mobile - Hamburger Button ✅
- Display: md:hidden (solo mobile)
- Icon: Menu (lucide-react)
- Hover: text-primary
- Click: Abre mobile menu
- Animation: rotate al cambiar entre Menu y X

### Mobile Menu

#### Backdrop ✅
- Full screen overlay
- Background: bg-background/95
- Backdrop blur: backdrop-blur-md
- Click: Cierra menu
- Animation: fade-in/out (300ms)

#### Menu Content ✅
- Position: Fixed right side
- Width: Full width (mobile) / 320px (sm)
- Background: bg-surface
- Border left: border-border
- Slide-in animation: desde derecha
- Transition: Spring animation (damping 25, stiffness 200)

**Header:**
- Title: "Menu" (gradient-text)
- Close button (X icon)

**Navigation Links:**
- Text: text-2xl, font-semibold
- Layout: Vertical stack
- Spacing: gap-2, py-4
- Active state:
  - text-primary
  - bg-primary/10
  - border-left-4 border-primary
- Hover: bg-surface-light
- Entry animation: Stagger (index * 0.1s)

**Footer:**
- CTA button: "Get In Touch"
- Copyright text: "© 2024 Your Name"
- Animation: Fade-in with delay

### Estados y Hooks

#### 1. isScrolled (useState)
```typescript
const [isScrolled, setIsScrolled] = useState(false);
```
- Detecta scroll > 50px
- Activa blur y background
- useEffect con scroll listener

#### 2. mobileMenuOpen (useState)
```typescript
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
```
- Controla apertura del mobile menu
- Previene scroll del body cuando está abierto
- Se cierra al hacer click en link

#### 3. activeSection (useState)
```typescript
const [activeSection, setActiveSection] = useState<SectionId>("hero");
```
- Detecta sección activa actual
- Actualizado por Intersection Observer
- Tipo: "hero" | "about" | "skills" | "projects" | "contact"

### Funcionalidades Avanzadas

#### Intersection Observer ✅
```typescript
const observerOptions = {
  root: null,
  rootMargin: "-20% 0px -70% 0px",
  threshold: 0,
};
```

**Características:**
- Detecta automáticamente la sección visible
- Actualiza activeSection
- Aplica underline al link activo
- Observer en: hero, about, skills, projects, contact

#### Smooth Scroll con Offset ✅
```typescript
const scrollToSection = (sectionId: string) => {
  const navbarHeight = 80;
  const offsetPosition = elementPosition - navbarHeight;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};
```

**Features:**
- Offset: 80px (navbar height)
- Smooth behavior nativo
- Cierra mobile menu después del scroll
- Maneja caso especial para "hero" (scroll to top)

#### ESC Key Handler ✅
```typescript
useEffect(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape") setMobileMenuOpen(false);
  };
  // ...
}, [mobileMenuOpen]);
```

**Features:**
- ESC key cierra mobile menu
- Previene scroll del body cuando menu abierto
- Cleanup al desmontar

### Animaciones

#### Entry Animation (Navbar)
```typescript
variants={{
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, duration: 0.5 },
}}
```

#### Hamburger Icon Animation
- Menu → X: rotate transition
- AnimatePresence con mode="wait"
- Duration: 200ms

#### Mobile Menu Animations

**Backdrop:**
- Fade in/out
- Duration: 300ms

**Menu Content:**
- Slide-in from right (x: 100% → 0)
- Spring animation
- Damping: 25, Stiffness: 200

**Links:**
- Stagger entry: delay = index * 0.1s
- Initial: { opacity: 0, x: 50 }
- Animate: { opacity: 1, x: 0 }

**Footer:**
- CTA: delay 0.4s
- Copyright: delay 0.5s

#### Hover Animations

**Logo:**
- Scale: 1.05
- Opacity: 0.8

**Nav Links:**
- Underline: width 0 → 100%
- Color: text-secondary → text-primary

**CTA Button:**
- TranslateY: -2px
- Scale: 1.05
- Shadow: glow-primary

### Responsive Design

#### Desktop (≥ 768px)
- Full navbar visible
- Horizontal nav links
- CTA button visible
- Mobile menu hidden

#### Mobile (< 768px)
- Logo + Hamburger only
- Nav links hidden
- CTA hidden (está en mobile menu)
- Mobile menu disponible

## 🎯 Personalización

### 1. Cambiar Logo/Nombre

**En Navbar.tsx (línea ~132):**
```tsx
<motion.button
  onClick={() => scrollToSection("hero")}
  className="..."
>
  {"<Tu Nombre />"}  {/* Cambiar aquí */}
</motion.button>
```

### 2. Modificar Nav Links

**En Navbar.tsx (líneas 9-14):**
```tsx
const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
  // Agregar más:
  { id: "blog", label: "Blog" },
] as const;
```

**IMPORTANTE:** Asegúrate de que el ID coincida con el ID de la sección HTML.

### 3. Cambiar Texto del CTA

**En Navbar.tsx (líneas 177-186):**
```tsx
<motion.a
  href="#contact"
  // ...
>
  Tu Texto Aquí  {/* Cambiar "Get In Touch" */}
</motion.a>
```

### 4. Ajustar Scroll Offset

**En Navbar.tsx (línea 93):**
```tsx
const scrollToSection = (sectionId: string) => {
  const navbarHeight = 80;  // Cambiar si el navbar tiene otra altura
  // ...
};
```

### 5. Modificar Threshold de Scroll

**En Navbar.tsx (línea 25):**
```tsx
const handleScroll = () => {
  setIsScrolled(window.scrollY > 50);  // Cambiar 50 por otro valor
};
```

### 6. Cambiar Intersection Observer Margins

**En Navbar.tsx (líneas 38-40):**
```tsx
const observerOptions = {
  rootMargin: "-20% 0px -70% 0px",  // Ajustar márgenes
  // top: -20%, right: 0, bottom: -70%, left: 0
};
```

### 7. Modificar Mobile Menu Width

**En Navbar.tsx (línea 233):**
```tsx
className="... w-full sm:w-80 ..."
// Cambiar:
// w-full sm:w-96 (más ancho)
// w-3/4 sm:w-72 (más estrecho)
```

### 8. Cambiar Copyright Text

**En Navbar.tsx (línea 288):**
```tsx
<motion.p className="...">
  © 2024 Your Name  {/* Cambiar año y nombre */}
</motion.p>
```

### 9. Agregar Redes Sociales al Mobile Menu

**En Navbar.tsx, después del CTA button:**
```tsx
{/* Social Links */}
<div className="flex justify-center gap-4 mt-4">
  <a href="https://github.com" className="...">
    <Github className="w-6 h-6" />
  </a>
  {/* Más links */}
</div>
```

### 10. Cambiar Animación del Mobile Menu

**En Navbar.tsx (líneas 227-230):**
```tsx
<motion.div
  initial={{ x: "100%" }}  // Desde derecha
  // Cambiar a:
  // initial={{ y: "-100%" }}  // Desde arriba
  // initial={{ scale: 0 }}  // Scale in
  // initial={{ opacity: 0 }}  // Fade in
```

## 💡 Tips de Uso

1. **Secciones**:
   - Todas las secciones deben tener un ID único
   - IDs deben coincidir con NAV_LINKS
   - Hero section debe tener `id="hero"`

2. **Scroll Detection**:
   - El Intersection Observer usa márgenes para detectar antes
   - Ajusta rootMargin si la detección es muy temprana/tardía

3. **Mobile UX**:
   - El menu se cierra automáticamente al hacer click en un link
   - ESC key también cierra el menu
   - Click fuera del menu lo cierra

4. **Performance**:
   - useEffect cleanup importante para evitar memory leaks
   - Scroll listener throttled por el navegador
   - AnimatePresence para unmount animations

## 🚀 Integración

El Navbar se integra en `layout.tsx`:

```tsx
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />  {/* Antes de children */}
        {children}
      </body>
    </html>
  );
}
```

## 🐛 Troubleshooting

**Problema**: Active section no se detecta
- **Solución**: Verificar que todas las secciones tengan ID correcto
- Verificar que el ID esté en el elemento `<section>`, no en un div interno
- Ajustar rootMargin del Intersection Observer

**Problema**: Smooth scroll no funciona
- **Solución**: Verificar que `scroll-behavior: smooth` esté en globals.css
- Verificar que los IDs existan en el DOM

**Problema**: Mobile menu no cierra
- **Solución**: Verificar que `setMobileMenuOpen(false)` esté en los click handlers
- Verificar que ESC key listener esté activo

**Problema**: Navbar no se blur al hacer scroll
- **Solución**: Verificar que el scroll listener esté activo
- Verificar threshold de 50px
- Verificar que backdrop-blur-lg esté en la clase cuando isScrolled=true

**Problema**: Links no funcionan
- **Solución**: Verificar preventDefault() en los click handlers
- Verificar que scrollToSection reciba el ID correcto
