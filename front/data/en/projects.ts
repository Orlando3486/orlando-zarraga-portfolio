import type { Project } from "../../types/portfolio";

export const projects: Project[] = [
  {
    title: "ZarMedi - Medical Practice Management SaaS",
    description:
      "Multi-tenant medical platform in production for practices and clinics in Argentina and LATAM: scheduling, medical records, telehealth, prescriptions, digitally signed consent forms, generative AI and a WhatsApp bot. More than 270 REST endpoints.",
    image: "/images/zarmedi/zarmedi-01-panel.png",
    caseStudy: {
      problem:
        "Appointments, medical records and patient communication spread across separate, manual tools.",
      solution:
        "Scheduling, medical records, telehealth, prescriptions with verification QR codes, digitally signed consent forms and a 24/7 WhatsApp bot in a single platform.",
      result:
        "Less administrative work, automatic reminders, appointments booked after hours and centralized, secure information.",
    },
    galleryAspect: "1535 / 815",
    gallery: [
      {
        src: "/images/zarmedi/zarmedi-01-panel.png",
        alt: "ZarMedi home dashboard with monthly metrics, today's schedule and quick actions",
      },
      {
        src: "/images/zarmedi/zarmedi-02-agenda.png",
        alt: "ZarMedi weekly schedule with color-coded appointment statuses and calendar or list view",
      },
      {
        src: "/images/zarmedi/zarmedi-03-pacientes.png",
        alt: "ZarMedi patient management with search, filters and patient import",
      },
      {
        src: "/images/zarmedi/zarmedi-04-teleconsulta.png",
        alt: "ZarMedi telehealth module for starting video calls with patients",
      },
      {
        src: "/images/zarmedi/zarmedi-05-recetas.png",
        alt: "ZarMedi digital prescriptions with draft, signed and sent counters",
      },
      {
        src: "/images/zarmedi/zarmedi-06-analisis.png",
        alt: "ZarMedi analytics dashboard with appointments, revenue, cancellations and no-show rate",
      },
      {
        src: "/images/zarmedi/zarmedi-07-facturacion.png",
        alt: "ZarMedi billing with amounts invoiced, collected and pending for the month",
      },
      {
        src: "/images/zarmedi/zarmedi-08-inventario.png",
        alt: "ZarMedi inventory with active products, stock alerts and inventory value",
      },
      {
        src: "/images/zarmedi/zarmedi-09-recordatorios.png",
        alt: "ZarMedi personal reminders, configurable by channel",
      },
      {
        src: "/images/zarmedi/zarmedi-10-configuracion.png",
        alt: "ZarMedi general settings for the healthcare center, organized in tabs",
      },
      {
        src: "/images/zarmedi/zarmedi-11-registro.png",
        alt: "ZarMedi sign-up with a choice between healthcare center and independent professional",
      },
      {
        src: "/images/zarmedi/zarmedi-12-login.png",
        alt: "ZarMedi sign-in screen",
      },
    ],
    featured: true,
    context: "Lead Developer — 2026 – Present",
    tags: [
      "NestJS",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "DDD",
      "Hexagonal architecture",
      "Groq",
      "WhatsApp Cloud API",
    ],
    links: [
      { label: "Website", url: "https://zarmedi.com/" },
      { label: "App", url: "https://app.zarmedi.com/login" },
    ],
  },
  {
    title: "Canarias Equipamientos — Credit Sales Management",
    description:
      "End-to-end management platform for companies that sell equipment on credit: it digitizes the full cycle, from field sales and customer validation to delivery, installment collection on daily routes and cash closing, with role-based dashboards and multi-company operation. My role: backend architecture and development.",
    image: "/images/canarias002.png",
    caseStudy: {
      problem:
        "Tracking credit sales, deliveries and door-to-door collections relied on manual, scattered processes.",
      solution:
        "A platform that brings together the sale, customer validation, delivery, installment collection on daily routes and cash closing, with role-based dashboards and multi-company operation.",
      result:
        "Full control over the lifecycle of every sale, organized collections and up-to-date reports for management.",
    },
    // App privada con login: sin enlace público
    galleryAspect: "1910 / 862",
    gallery: [
      { src: "/images/canarias002.png", alt: "Canarias - Sales rep home dashboard" },
      { src: "/images/canarias004.png", alt: "Canarias - My sales" },
      { src: "/images/canarias005.png", alt: "Canarias - Customer management" },
      { src: "/images/canarias003.png", alt: "Canarias - New sale" },
      { src: "/images/canarias001.png", alt: "Canarias - Sign in" },
    ],
    context: "InfinitySoftware project · In development",
    tags: ["NestJS", "Next.js", "TypeScript", "PostgreSQL", "Docker"],
  },
  {
    title: "¡Si Chef! - Recipe Platform",
    description:
      "Backend for a culinary social network built with NestJS, PostgreSQL and TypeORM on a modular architecture, with JWT and OAuth, roles, Stripe, Socket.IO, Cloudinary, Google Cloud Vision and Vertex AI.",
    image: "/images/si-chef.png",
    caseStudy: {
      problem:
        "Recipes and interaction between cooks were scattered across different sites, with no single place to share, save and monetize content.",
      solution:
        "A modular backend for a culinary social network, with secure authentication, roles, payments, real-time notifications, image management and AI features that enrich recipes.",
      result:
        "A modular, maintainable foundation for the culinary community, built as a team and delivered within the bootcamp deadline.",
    },
    context: "Academic project — Henry Bootcamp — Nov 2025 – Jan 2026",
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
];
