// Íconos del proyecto Centro Estético (comentado más abajo); descomentar junto con él
// import { FaReact, FaNodeJs } from "react-icons/fa";
// import { SiNextdotjs, SiPostgresql, SiTypescript } from "react-icons/si";
import type { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    title: "ZarMedi - SaaS de Gestión Médica",
    description:
      "Plataforma médica multi-tenant en producción para consultorios y clínicas de Argentina y LATAM: agenda, historia clínica, teleconsulta, recetas, consentimientos con firma digital, IA generativa y bot de WhatsApp. Más de 270 endpoints REST.",
    image: "/images/zarmedi-inicio.png",
    gallery: [
      { src: "/images/zarmedi-inicio.png", alt: "ZarMedi - Panel de inicio" },
      { src: "/images/zarmedi-agenda.png", alt: "ZarMedi - Agenda semanal" },
      {
        src: "/images/zarmedi-pacientes.png",
        alt: "ZarMedi - Gestión de pacientes",
      },
      { src: "/images/zarmedi-equipo.png", alt: "ZarMedi - Equipo del centro" },
      { src: "/images/zarmedi-login.png", alt: "ZarMedi - Inicio de sesión" },
    ],
    featured: true,
    context: "Desarrollador Principal — 2026 – Presente",
    tags: [
      "NestJS",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "DDD",
      "Arquitectura hexagonal",
      "Groq",
      "WhatsApp Cloud API",
    ],
    links: [
      { label: "Sitio", url: "https://zarmedi.com/" },
      { label: "App", url: "https://app.zarmedi.com/login" },
    ],
  },
  {
    title: "¡Si Chef! - Plataforma de Recetas",
    description:
      "Backend de una red social culinaria con NestJS, PostgreSQL y TypeORM bajo arquitectura modular, con JWT y OAuth, roles, Stripe, Socket.IO, Cloudinary, Google Cloud Vision y Vertex AI.",
    image: "/images/si-chef.png",
    context: "Proyecto académico — Henry Bootcamp — Nov. 2025 – Ene. 2026",
    tags: [
      "NestJS",
      "PostgreSQL",
      "TypeORM",
      "JWT",
      "OAuth",
      "Stripe",
      "Socket.IO",
      "Cloudinary",
      "Google Cloud Vision",
      "Vertex AI",
    ],
    github: "https://github.com/Orlando3486/Sichef",
    demo: "https://si-chef.vercel.app/login",
  },
  // {
  //   title: "Sistema de Citas - Centro Estético Dr. Jose L. Ferrer",
  //   description:
  //     "Aplicación web para gestión de citas médicas con autenticación, panel administrativo y base de datos.",
  //   image: "/images/centro-estetico.png",
  //   technologies: [
  //     { name: "React", icon: FaReact, color: "#61DBFB" },
  //     { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  //     { name: "Node.js", icon: FaNodeJs, color: "#3C873A" },
  //     { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  //     { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  //   ],
  //   github:
  //     "https://github.com/Orlando3486/Centro-Estetico-Dr.-Jose-Leonardo-Ferrer",
  //   demo: "https://centroesteticodrjoseferrer.netlify.app/",
  // },
];
