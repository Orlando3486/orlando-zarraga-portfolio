export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

// Español en "/" (por defecto) e inglés en "/en"
export function localePath(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}`;
}
