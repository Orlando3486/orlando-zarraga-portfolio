import type { MetadataRoute } from "next";
import { localePath, locales } from "../lib/i18n";
import { siteUrl } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${siteUrl}${path === "/" ? "" : path}`;
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, url(localePath(locale))]),
  );

  return locales.map((locale) => ({
    url: url(localePath(locale)),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "es" ? 1 : 0.9,
    alternates: { languages },
  }));
}
