import type { SkillCategory } from "../types/portfolio";

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
  about: { title: string; languages: string; education: string };
  experience: { title: string };
  projects: {
    title: string;
    featured: string;
    previousImage: string;
    nextImage: string;
    viewImage: string;
    repository: string;
    demo: string;
  };
  skills: { title: string; categories: Record<SkillCategory, string> };
  contact: {
    title: string;
    subtitle: string;
    backToTop: string;
    role: string;
    rights: string;
  };
};
