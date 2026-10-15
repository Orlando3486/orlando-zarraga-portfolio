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
  "languages",
  "backend",
  "architecture",
  "security",
  "frontend",
  "databases",
  "cloud",
  "testing",
  "ai",
  "integrations",
  "tools",
];

export const skills: Skill[] = [
  // Lenguajes
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "languages" },
  { name: "JavaScript", icon: SiJavascript, color: "#F0DB4F", category: "languages" },
  { name: "Python", icon: SiPython, color: "#FFD43B", category: "languages" },
  { name: "SQL", icon: TbSql, color: "#38bdf8", category: "languages" },
  { name: "PHP", icon: SiPhp, color: "#777BB4", category: "languages" },

  // Backend
  { name: "Node.js", icon: FaNodeJs, color: "#3C873A", category: "backend" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E", category: "backend" },
  { name: "Express", icon: SiExpress, color: "#ffffff", category: "backend" },
  { name: { es: "APIs REST", en: "REST APIs" }, icon: TbApi, color: "#38bdf8", category: "backend" },
  { name: "Swagger", icon: SiSwagger, color: "#85EA2D", category: "backend" },
  { name: "Socket.IO", icon: SiSocketdotio, color: "#ffffff", category: "backend" },
  { name: "BullMQ", icon: HiQueueList, color: "#E0234E", category: "backend" },

  // Arquitectura
  { name: "DDD", icon: TbHexagonLetterD, color: "#38bdf8", category: "architecture" },
  { name: { es: "Arquitectura hexagonal", en: "Hexagonal architecture" }, icon: TbHexagons, color: "#38bdf8", category: "architecture" },
  { name: "Clean Architecture", icon: MdArchitecture, color: "#38bdf8", category: "architecture" },
  { name: { es: "Monolito modular", en: "Modular monolith" }, icon: FaCubes, color: "#38bdf8", category: "architecture" },
  { name: "Multi-tenancy", icon: TbBuildings, color: "#38bdf8", category: "architecture" },

  // Seguridad
  { name: "JWT", icon: SiJsonwebtokens, color: "#f8fafc", category: "security" },
  { name: "OAuth2", icon: SiAuth0, color: "#EB5424", category: "security" },
  { name: "Auth0", icon: SiAuth0, color: "#EB5424", category: "security" },
  { name: "Passport", icon: SiPassport, color: "#34E27A", category: "security" },
  { name: "NextAuth", icon: SiNextdotjs, color: "#ffffff", category: "security" },
  { name: "RBAC", icon: FaUserShield, color: "#38bdf8", category: "security" },
  { name: "OTP", icon: FaKey, color: "#38bdf8", category: "security" },
  { name: "HMAC", icon: FaShieldAlt, color: "#ef4444", category: "security" },
  { name: "bcrypt", icon: FaLock, color: "#38bdf8", category: "security" },

  // Frontend
  { name: "React", icon: FaReact, color: "#61DBFB", category: "frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", category: "frontend" },
  { name: "PWA", icon: SiPwa, color: "#5A0FC8", category: "frontend" },
  { name: "Vite", icon: SiVite, color: "#646CFF", category: "frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC", category: "frontend" },
  { name: "shadcn/ui", icon: SiShadcnui, color: "#ffffff", category: "frontend" },
  { name: "TanStack Query", icon: SiReactquery, color: "#FF4154", category: "frontend" },
  { name: "Zustand", icon: HiCode, color: "#38bdf8", category: "frontend" },
  { name: "Zod", icon: SiZod, color: "#3E67B1", category: "frontend" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#563d7c", category: "frontend" },

  // Bases de datos
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", category: "databases" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E", category: "databases" },
  { name: "Redis", icon: SiRedis, color: "#DC382D", category: "databases" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "databases" },
  { name: "SQL Server", icon: FaDatabase, color: "#CC2927", category: "databases" },
  { name: "MongoDB", icon: SiMongodb, color: "#4DB33D", category: "databases" },
  { name: "TypeORM", icon: SiTypeorm, color: "#E83524", category: "databases" },
  { name: "Prisma", icon: SiPrisma, color: "#f8fafc", category: "databases" },

  // Cloud y DevOps
  { name: "Docker", icon: FaDocker, color: "#2496ED", category: "cloud" },
  { name: "AWS (Lambda, S3)", icon: FaAws, color: "#FF9900", category: "cloud" },
  { name: "Google Cloud Storage", icon: SiGooglecloudstorage, color: "#4285F4", category: "cloud" },
  { name: "Railway", icon: SiRailway, color: "#ffffff", category: "cloud" },
  { name: "Netlify", icon: SiNetlify, color: "#00C7B7", category: "cloud" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff", category: "cloud" },
  { name: "Render", icon: SiRender, color: "#46E3B7", category: "cloud" },
  { name: "CI/CD", icon: GiCycle, color: "#38bdf8", category: "cloud" },

  // Testing
  { name: "Jest", icon: SiJest, color: "#C21325", category: "testing" },
  { name: "Supertest", icon: FaVial, color: "#22c55e", category: "testing" },
  { name: "pytest", icon: SiPytest, color: "#0A9EDC", category: "testing" },

  // IA
  { name: "Claude Code", icon: SiClaude, color: "#D97757", category: "ai" },
  { name: "Groq", icon: TbBrain, color: "#F55036", category: "ai" },
  { name: "Ollama", icon: SiOllama, color: "#ffffff", category: "ai" },
  { name: { es: "Desarrollo asistido por agentes", en: "Agent-assisted development" }, icon: FaRobot, color: "#38bdf8", category: "ai" },
  { name: "Vertex AI", icon: SiGooglecloud, color: "#4285F4", category: "ai" },
  { name: "Google Cloud Vision", icon: SiGooglecloud, color: "#4285F4", category: "ai" },

  // Integraciones
  { name: "Cloudinary", icon: SiCloudinary, color: "#C13584", category: "integrations" },
  { name: "SendGrid", icon: SiSendgrid, color: "#00A4D6", category: "integrations" },

  // Herramientas
  { name: "Postman", icon: SiPostman, color: "#FF6C37", category: "tools" },
];
