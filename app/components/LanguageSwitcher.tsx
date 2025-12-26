"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Languages } from "lucide-react";
import { useState, useTransition } from "react";

const languages = [
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "en", label: "English", flag: "🇺🇸" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (newLocale: string) => {
    if (newLocale === locale) return;

    startTransition(() => {
      // Remove the current locale from pathname and add the new one
      const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, "");
      router.push(`/${newLocale}${pathWithoutLocale}`);
      router.refresh();
    });

    setIsOpen(false);
  };

  const currentLanguage = languages.find((lang) => lang.code === locale);

  return (
    <div className="relative">
      {/* Language Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-8 rounded-full bg-surface border border-border hover:border-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background flex items-center justify-center gap-1"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Change language"
        disabled={isPending}
      >
        <Languages className="w-4 h-4 text-text-secondary" />
        <span className="text-xs font-medium text-text-primary uppercase">
          {currentLanguage?.code}
        </span>
      </motion.button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-40 rounded-lg bg-surface border border-border shadow-card z-50 overflow-hidden"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                disabled={lang.code === locale || isPending}
                className={`
                  w-full px-4 py-2.5 flex items-center gap-3 text-left
                  transition-colors duration-200
                  ${
                    lang.code === locale
                      ? "bg-primary/10 text-primary cursor-default"
                      : "text-text-primary hover:bg-surface-light hover:text-primary"
                  }
                  ${isPending ? "opacity-50 cursor-not-allowed" : ""}
                `}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.label}</span>
              </button>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
}
