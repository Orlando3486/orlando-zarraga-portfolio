import type { SkillCategory } from "../types/portfolio";

// Encabezado de sección: eyebrow → h2 → bajada
export type SectionHeadText = { eyebrow: string; title: string; lead: string };

export type Dictionary = {
  intro: { subtitle: string };
  nav: {
    label: string;
    home: string;
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    language: string;
  };
  hero: {
    greeting: string;
    viewProjects: string;
    contact: string;
    photoAlt: string;
  };
  cv: { button: string; fullstack: string; backend: string };
  about: SectionHeadText & { languages: string; education: string; location: string };
  experience: SectionHeadText;
  projects: SectionHeadText & {
    featured: string;
    previousImage: string;
    nextImage: string;
    viewImage: string;
  };
  skills: SectionHeadText & { categories: Record<SkillCategory, string> };
  contact: SectionHeadText & {
    email: string;
    backToTop: string;
    role: string;
    rights: string;
  };
};
