import type { ElementType } from "react";

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
  seoDescription: string;
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
  | "Lenguajes"
  | "Backend"
  | "Arquitectura"
  | "Seguridad"
  | "Frontend"
  | "Bases de datos"
  | "Cloud y DevOps"
  | "Testing"
  | "IA"
  | "Integraciones"
  | "Herramientas";

export type Skill = {
  name: string;
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
