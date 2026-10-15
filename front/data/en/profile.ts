import type { Profile } from "../../types/portfolio";

export const profile: Profile = {
  name: "Orlando Zárraga",
  title: "Full Stack Developer",
  roles: [
    "Full Stack Developer",
    "Backend Developer · NestJS",
    "SaaS & Multi-tenant",
    "DDD & Hexagonal Architecture",
    "Next.js Developer",
  ],
  heroDescription:
    "I design and ship SaaS platforms and business systems to production with TypeScript, NestJS, Next.js and PostgreSQL.",
  summary:
    "Full Stack Developer with hands-on experience designing and shipping SaaS platforms and business systems to production with TypeScript, NestJS, Next.js and PostgreSQL. Lead developer of ZarMedi and backend architect at InfinitySoftware. ZarMedi is a multi-tenant medical platform in production with more than 270 endpoints, generative AI, a WhatsApp bot and digital signatures. I specialize in Domain-Driven Design (DDD), hexagonal architecture, security (JWT, RBAC, OAuth2), asynchronous processing with Redis and BullMQ, third-party API integrations and AI-assisted development with Claude Code. Professional internships at Monetae (El Salvador), MMI Internacional · Equipamientos Canarias (Spain) and TRAMA (Peru).",
  // Fragmentos del resumen que se resaltan con la clase .highlight
  highlights: [
    "TypeScript, NestJS, Next.js and PostgreSQL",
    "ZarMedi",
    "Domain-Driven Design (DDD), hexagonal architecture",
  ],
  languages: "Spanish (native) · English (B1)",
  contact: {
    email: "orlandozarraga31@hotmail.com",
    linkedin: "https://www.linkedin.com/in/orlando-ismael-zarraga-medina",
    github: "https://github.com/Orlando3486",
    location: "Palermo, Buenos Aires, Argentina",
  },
};
