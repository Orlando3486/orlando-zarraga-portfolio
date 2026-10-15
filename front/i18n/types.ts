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
    available: string;
    viewProjects: string;
    contact: string;
    photoAlt: string;
  };
  cv: { button: string; fullstack: string; backend: string };
  about: SectionHeadText & { languages: string; education: string; location: string };
  experience: SectionHeadText & { showMore: string };
  projects: SectionHeadText & {
    viewCase: string;
    problem: string;
    solution: string;
    result: string;
    featured: string;
    // Carrusel de capturas y vista ampliada
    carousel: {
      roleDescription: string;
      screenshotsOf: string;
      previous: string;
      next: string;
      open: string;
      close: string;
    };
  };
  skills: SectionHeadText & { core: string; categories: Record<SkillCategory, string> };
  contact: SectionHeadText & {
    email: string;
    infinity: { title: string; text: string; website: string; schedule: string };
    backToTop: string;
    role: string;
    rights: string;
  };
};
