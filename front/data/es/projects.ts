// Íconos del proyecto Centro Estético (comentado más abajo); descomentar junto con él
// import { FaReact, FaNodeJs } from "react-icons/fa";
// import { SiNextdotjs, SiPostgresql, SiTypescript } from "react-icons/si";
import type { Project } from "../../types/portfolio";

export const projects: Project[] = [
  {
    title: "ZarMedi - SaaS de Gestión Médica",
    description:
      "Plataforma médica multi-tenant en producción para consultorios y clínicas de Argentina y LATAM: agenda, historia clínica, teleconsulta, recetas, consentimientos con firma digital, IA generativa y bot de WhatsApp. Más de 270 endpoints REST.",
    image: "/images/zarmedi-inicio.png",
    caseStudy: {
      problem:
        "Turnos, historias clínicas y comunicación con pacientes en herramientas separadas y manuales.",
      solution:
        "Agenda, historia clínica, teleconsulta, recetas con QR de verificación, consentimientos con firma digital y bot de WhatsApp 24/7 en una sola plataforma.",
      result:
        "Menos tareas administrativas, recordatorios automáticos, turnos atendidos fuera de horario e información centralizada y segura.",
    },
    gallery: [
      { src: "/images/zarmedi-inicio.png", alt: "ZarMedi - Panel de inicio" },
      { src: "/images/projects/zarmedi/estadisticas-zarmedi.png", alt: "ZarMedi - Estadísticas de la clínica" },
      { src: "/images/projects/zarmedi/teleconsulta-zarmedi.png", alt: "ZarMedi - Teleconsulta" },
      { src: "/images/projects/zarmedi/inventario-zarmedi.png", alt: "ZarMedi - Inventario" },
      { src: "/images/projects/zarmedi/configuraciones-zarmedi.png", alt: "ZarMedi - Configuración de la clínica" },
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
    title: "Canarias Equipamientos — Gestión de ventas a crédito",
    description:
      "Plataforma de gestión integral para empresas de venta de equipamiento a crédito: digitaliza el ciclo completo, desde la venta en calle y la validación del cliente hasta la entrega, el cobro de cuotas en hojas de ruta diarias y el cierre de caja, con paneles por rol y operación multi-empresa. Mi rol: arquitectura y desarrollo del backend.",
    image: "/images/canarias002.png",
    caseStudy: {
      problem:
        "El seguimiento de ventas a crédito, entregas y cobros en domicilio se hacía con procesos manuales y dispersos.",
      solution:
        "Una plataforma que integra la venta, la validación del cliente, la entrega, el cobro de cuotas en rutas diarias y el cierre de caja, con paneles por rol y operación multi-empresa.",
      result:
        "Control del ciclo completo de cada venta, cobranza organizada y reportes al día para la gestión.",
    },
    // App privada con login: sin enlace público
    gallery: [
      { src: "/images/canarias002.png", alt: "Canarias - Panel inicial del vendedor" },
      { src: "/images/canarias004.png", alt: "Canarias - Mis ventas" },
      { src: "/images/canarias005.png", alt: "Canarias - Gestión de clientes" },
      { src: "/images/canarias003.png", alt: "Canarias - Nueva venta" },
      { src: "/images/canarias001.png", alt: "Canarias - Inicio de sesión" },
    ],
    context: "Proyecto de InfinitySoftware · En desarrollo",
    tags: ["NestJS", "Next.js", "TypeScript", "PostgreSQL", "Docker"],
  },
  {
    title: "¡Si Chef! - Plataforma de Recetas",
    description:
      "Backend de una red social culinaria con NestJS, PostgreSQL y TypeORM bajo arquitectura modular, con JWT y OAuth, roles, Stripe, Socket.IO, Cloudinary, Google Cloud Vision y Vertex AI.",
    image: "/images/si-chef.png",
    caseStudy: {
      problem:
        "Las recetas y la interacción entre cocineros estaban dispersas en distintos sitios, sin un espacio para compartir, guardar y monetizar contenido.",
      solution:
        "Un backend modular para una red social culinaria, con autenticación segura, roles, pagos, notificaciones en tiempo real, gestión de imágenes y funciones de IA para enriquecer las recetas.",
      result:
        "Una base modular y mantenible para la comunidad culinaria, desarrollada en equipo y entregada dentro del plazo del bootcamp.",
    },
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
