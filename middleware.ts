import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n";

export default createMiddleware({
  // Lista de idiomas soportados
  locales,

  // Idioma por defecto
  defaultLocale,

  // Siempre usar prefijo de idioma en la URL
  localePrefix: "always",
});

export const config = {
  // Match all pathnames except for:
  // - API routes
  // - _next (Next.js internals)
  // - _vercel (Vercel internals)
  // - Files with extensions (static files)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
