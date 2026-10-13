import {
  FaAws,
  FaBootstrap,
  FaCubes,
  FaDatabase,
  FaDocker,
  FaKey,
  FaLock,
  FaNodeJs,
  FaReact,
  FaRobot,
  FaShieldAlt,
  FaUserShield,
  FaVial,
} from "react-icons/fa";
import {
  SiAuth0,
  SiClaude,
  SiCloudinary,
  SiExpress,
  SiGooglecloud,
  SiGooglecloudstorage,
  SiJavascript,
  SiJest,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNetlify,
  SiNextdotjs,
  SiOllama,
  SiPassport,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPwa,
  SiPytest,
  SiPython,
  SiRailway,
  SiReactquery,
  SiRedis,
  SiRender,
  SiSendgrid,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiSwagger,
  SiTailwindcss,
  SiTypeorm,
  SiTypescript,
  SiVercel,
  SiVite,
  SiZod,
} from "react-icons/si";
import {
  TbApi,
  TbBrain,
  TbBuildings,
  TbHexagonLetterD,
  TbHexagons,
  TbSql,
} from "react-icons/tb";
import { GiCycle } from "react-icons/gi";
import { MdArchitecture } from "react-icons/md";
import { HiCode } from "react-icons/hi";
import { HiQueueList } from "react-icons/hi2";
import type { Skill, SkillCategory } from "../types/portfolio";

export const skillCategories: SkillCategory[] = [
  "Lenguajes",
  "Backend",
  "Arquitectura",
  "Seguridad",
  "Frontend",
  "Bases de datos",
  "Cloud y DevOps",
  "Testing",
  "IA",
  "Integraciones",
  "Herramientas",
];

export const skills: Skill[] = [
  // Lenguajes
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Lenguajes" },
  { name: "JavaScript", icon: SiJavascript, color: "#F0DB4F", category: "Lenguajes" },
  { name: "Python", icon: SiPython, color: "#FFD43B", category: "Lenguajes" },
  { name: "SQL", icon: TbSql, color: "#38bdf8", category: "Lenguajes" },
  { name: "PHP", icon: SiPhp, color: "#777BB4", category: "Lenguajes" },

  // Backend
  { name: "Node.js", icon: FaNodeJs, color: "#3C873A", category: "Backend" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E", category: "Backend" },
  { name: "Express", icon: SiExpress, color: "#ffffff", category: "Backend" },
  { name: "APIs REST", icon: TbApi, color: "#38bdf8", category: "Backend" },
  { name: "Swagger", icon: SiSwagger, color: "#85EA2D", category: "Backend" },
  { name: "Socket.IO", icon: SiSocketdotio, color: "#ffffff", category: "Backend" },
  { name: "BullMQ", icon: HiQueueList, color: "#E0234E", category: "Backend" },

  // Arquitectura
  { name: "DDD", icon: TbHexagonLetterD, color: "#38bdf8", category: "Arquitectura" },
  { name: "Arquitectura hexagonal", icon: TbHexagons, color: "#38bdf8", category: "Arquitectura" },
  { name: "Clean Architecture", icon: MdArchitecture, color: "#38bdf8", category: "Arquitectura" },
  { name: "Monolito modular", icon: FaCubes, color: "#38bdf8", category: "Arquitectura" },
  { name: "Multi-tenancy", icon: TbBuildings, color: "#38bdf8", category: "Arquitectura" },

  // Seguridad
  { name: "JWT", icon: SiJsonwebtokens, color: "#000000", category: "Seguridad" },
  { name: "OAuth2", icon: SiAuth0, color: "#EB5424", category: "Seguridad" },
  { name: "Auth0", icon: SiAuth0, color: "#EB5424", category: "Seguridad" },
  { name: "Passport", icon: SiPassport, color: "#34E27A", category: "Seguridad" },
  { name: "NextAuth", icon: SiNextdotjs, color: "#ffffff", category: "Seguridad" },
  { name: "RBAC", icon: FaUserShield, color: "#38bdf8", category: "Seguridad" },
  { name: "OTP", icon: FaKey, color: "#38bdf8", category: "Seguridad" },
  { name: "HMAC", icon: FaShieldAlt, color: "#ef4444", category: "Seguridad" },
  { name: "bcrypt", icon: FaLock, color: "#38bdf8", category: "Seguridad" },

  // Frontend
  { name: "React", icon: FaReact, color: "#61DBFB", category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", category: "Frontend" },
  { name: "PWA", icon: SiPwa, color: "#5A0FC8", category: "Frontend" },
  { name: "Vite", icon: SiVite, color: "#646CFF", category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC", category: "Frontend" },
  { name: "shadcn/ui", icon: SiShadcnui, color: "#ffffff", category: "Frontend" },
  { name: "TanStack Query", icon: SiReactquery, color: "#FF4154", category: "Frontend" },
  { name: "Zustand", icon: HiCode, color: "#38bdf8", category: "Frontend" },
  { name: "Zod", icon: SiZod, color: "#3E67B1", category: "Frontend" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#563d7c", category: "Frontend" },

  // Bases de datos
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", category: "Bases de datos" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E", category: "Bases de datos" },
  { name: "Redis", icon: SiRedis, color: "#DC382D", category: "Bases de datos" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "Bases de datos" },
  { name: "SQL Server", icon: FaDatabase, color: "#CC2927", category: "Bases de datos" },
  { name: "MongoDB", icon: SiMongodb, color: "#4DB33D", category: "Bases de datos" },
  { name: "TypeORM", icon: SiTypeorm, color: "#E83524", category: "Bases de datos" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748", category: "Bases de datos" },

  // Cloud y DevOps
  { name: "Docker", icon: FaDocker, color: "#2496ED", category: "Cloud y DevOps" },
  { name: "AWS (Lambda, S3)", icon: FaAws, color: "#FF9900", category: "Cloud y DevOps" },
  { name: "Google Cloud Storage", icon: SiGooglecloudstorage, color: "#4285F4", category: "Cloud y DevOps" },
  { name: "Railway", icon: SiRailway, color: "#ffffff", category: "Cloud y DevOps" },
  { name: "Netlify", icon: SiNetlify, color: "#00C7B7", category: "Cloud y DevOps" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff", category: "Cloud y DevOps" },
  { name: "Render", icon: SiRender, color: "#46E3B7", category: "Cloud y DevOps" },
  { name: "CI/CD", icon: GiCycle, color: "#38bdf8", category: "Cloud y DevOps" },

  // Testing
  { name: "Jest", icon: SiJest, color: "#C21325", category: "Testing" },
  { name: "Supertest", icon: FaVial, color: "#22c55e", category: "Testing" },
  { name: "pytest", icon: SiPytest, color: "#0A9EDC", category: "Testing" },

  // IA
  { name: "Claude Code", icon: SiClaude, color: "#D97757", category: "IA" },
  { name: "Groq", icon: TbBrain, color: "#F55036", category: "IA" },
  { name: "Ollama", icon: SiOllama, color: "#ffffff", category: "IA" },
  { name: "Desarrollo asistido por agentes", icon: FaRobot, color: "#38bdf8", category: "IA" },
  { name: "Vertex AI", icon: SiGooglecloud, color: "#4285F4", category: "IA" },
  { name: "Google Cloud Vision", icon: SiGooglecloud, color: "#4285F4", category: "IA" },

  // Integraciones
  { name: "Cloudinary", icon: SiCloudinary, color: "#C13584", category: "Integraciones" },
  { name: "SendGrid", icon: SiSendgrid, color: "#00A4D6", category: "Integraciones" },

  // Herramientas
  { name: "Postman", icon: SiPostman, color: "#FF6C37", category: "Herramientas" },
];
