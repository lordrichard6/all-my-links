"use client";

import { motion } from "framer-motion";
import { useLocale, SUPPORTED_LOCALES } from "@/lib/locale";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="flex justify-center gap-1 mb-6"
      role="group"
      aria-label="Language selector"
    >
      {SUPPORTED_LOCALES.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLocale(lang.code)}
          aria-current={locale === lang.code ? "true" : undefined}
          className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${
            locale === lang.code
              ? "bg-white/15 text-cyan-400 border border-cyan-400/30"
              : "bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 hover:text-white/80"
          }`}
        >
          <span className="mr-1">{lang.flag}</span>
          {lang.label}
        </button>
      ))}
    </motion.div>
  );
}
