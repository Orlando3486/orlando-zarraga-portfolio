import type { Locale } from "./i18n";

export const siteUrl = "https://orlando-zarraga-portfolio.vercel.app";

export type CvVariant = "fullstack" | "backend";

export const cvFiles: Record<Locale, Record<CvVariant, string>> = {
  es: {
    fullstack: "/cv/CV_Orlando_Zarraga_FullStack_Developer.pdf",
    backend: "/cv/CV_Orlando_Zarraga_Backend_Developer.pdf",
  },
  en: {
    fullstack: "/cv/Resume_Orlando_Zarraga_FullStack_Developer_EN.pdf",
    backend: "/cv/Resume_Orlando_Zarraga_Backend_Developer_EN.pdf",
  },
};
