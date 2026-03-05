"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

import en from "@/translations/en.json";
import pt from "@/translations/pt.json";
import de from "@/translations/de.json";
import fr from "@/translations/fr.json";
import it from "@/translations/it.json";
import es from "@/translations/es.json";

export type Locale = "en" | "pt" | "de" | "fr" | "it" | "es";

export type Translations = typeof en;

const translations: Record<Locale, Translations> = { en, pt, de, fr, it, es };

const VALID_LOCALES = new Set<string>(["en", "pt", "de", "fr", "it", "es"]);

export const SUPPORTED_LOCALES: { code: Locale; flag: string; label: string }[] = [
  { code: "en", flag: "\u{1F1EC}\u{1F1E7}", label: "EN" },
  { code: "pt", flag: "\u{1F1F5}\u{1F1F9}", label: "PT" },
  { code: "de", flag: "\u{1F1E9}\u{1F1EA}", label: "DE" },
  { code: "fr", flag: "\u{1F1EB}\u{1F1F7}", label: "FR" },
  { code: "it", flag: "\u{1F1EE}\u{1F1F9}", label: "IT" },
  { code: "es", flag: "\u{1F1EA}\u{1F1F8}", label: "ES" },
];

function getStoredLocale(): Locale | null {
  try {
    const stored = localStorage.getItem("locale");
    if (stored && VALID_LOCALES.has(stored)) return stored as Locale;
  } catch {
    // localStorage unavailable (private browsing, etc.)
  }
  return null;
}

function detectLocale(): Locale {
  if (typeof window === "undefined") return "en";

  const stored = getStoredLocale();
  if (stored) return stored;

  const browserLang = navigator.language.toLowerCase();
  const langPrefix = browserLang.split("-")[0];

  if (VALID_LOCALES.has(langPrefix)) return langPrefix as Locale;

  return "en";
}

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: "en",
  setLocale: () => {},
  t: en,
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const detected = detectLocale();
    setLocaleState(detected);
    document.documentElement.lang = detected;
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    document.documentElement.lang = newLocale;
    try {
      localStorage.setItem("locale", newLocale);
    } catch {
      // localStorage unavailable
    }
  };

  const t = translations[locale];

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
