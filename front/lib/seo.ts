import type { Metadata } from "next";
import { profile } from "../data/es/profile";
import { defaultLocale, localePath, locales, type Locale } from "./i18n";
import { siteUrl } from "./site";

export const ogTagline = "Full Stack Developer · Backend";

const seoText: Record<Locale, { title: string; description: string; ogLocale: string }> = {
  es: {
    title: `${profile.name} | Full Stack Developer · Backend`,
    description:
      "Portafolio de Orlando Zárraga, Full Stack Developer especializado en backend: plataformas SaaS seguras y escalables con TypeScript, NestJS, Next.js y PostgreSQL, bajo DDD y arquitectura hexagonal.",
    ogLocale: "es_AR",
  },
  en: {
    title: `${profile.name} | Full Stack Developer · Backend`,
    description:
      "Portfolio of Orlando Zárraga, a backend-focused Full Stack Developer who builds secure, scalable SaaS platforms with TypeScript, NestJS, Next.js and PostgreSQL, using DDD and hexagonal architecture.",
    ogLocale: "en_US",
  },
};

const languageAlternates = {
  ...Object.fromEntries(locales.map((locale) => [locale, localePath(locale)])),
  "x-default": localePath(defaultLocale),
};

export function buildMetadata(locale: Locale): Metadata {
  const { title, description, ogLocale } = seoText[locale];
  const path = localePath(locale);

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    authors: [{ name: profile.name, url: siteUrl }],
    alternates: { canonical: path, languages: languageAlternates },
    openGraph: {
      type: "website",
      url: path,
      siteName: profile.name,
      title,
      description,
      locale: ogLocale,
      alternateLocale: locales
        .filter((other) => other !== locale)
        .map((other) => seoText[other].ogLocale),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export function personJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Full Stack Developer",
    url: `${siteUrl}${localePath(locale) === "/" ? "" : localePath(locale)}`,
    sameAs: [profile.contact.linkedin, profile.contact.github],
    knowsLanguage: ["es", "en"],
  };
}
