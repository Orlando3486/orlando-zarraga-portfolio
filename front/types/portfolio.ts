import type { ElementType } from "react";
import type { Locale } from "../lib/i18n";

// Texto que puede variar por idioma (string si es igual en todos)
export type LocalizedText = string | Record<Locale, string>;

export type Link = {
  label: string;
  url: string;
};

export type Profile = {
  name: string;
  title: string;
  roles: string[];
  heroDescription: string;
  summary: string;
  highlights: string[];
  languages: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
    location: string;
  };
};

export type Experience = {
  company: string;
  location?: string;
  role: string;
  period: string;
  description?: string;
  links?: Link[];
  achievements: string[];
  tags: string[];
};

export type ProjectTech = {
  name: string;
  icon: ElementType;
  color: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export type Project = {
  title: string;
  description: string;
  image?: string;
  // Si existe, reemplaza a image por una galería con miniaturas
  gallery?: GalleryImage[];
  featured?: boolean;
  context?: string;
  technologies?: ProjectTech[];
  tags?: string[];
  github?: string;
  demo?: string;
  links?: Link[];
};

export type SkillCategory =
  | "languages"
  | "backend"
  | "architecture"
  | "security"
  | "frontend"
  | "databases"
  | "cloud"
  | "testing"
  | "ai"
  | "integrations"
  | "tools";

export type Skill = {
  name: LocalizedText;
  icon: ElementType;
  color: string;
  category: SkillCategory;
};

export type Education = {
  title: string;
  institution: string;
  detail?: string;
  period: string;
};

export type PortfolioContent = {
  profile: Profile;
  experience: Experience[];
  projects: Project[];
  education: Education[];
};
