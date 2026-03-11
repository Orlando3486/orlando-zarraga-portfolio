import {
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaFigma,
  FaLinux,
  FaRobot,
  FaShieldAlt,
} from "react-icons/fa";
import "./../../styles/tecnologies.css";
import {
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiCloudinary,
  SiNestjs,
  SiVite,
  SiSwagger,
  SiJsonwebtokens,
  SiPostman,
  SiOpenai,
} from "react-icons/si";
import { TbApi, TbTopologyStar3 } from "react-icons/tb";
import { GiCycle } from "react-icons/gi";
import { MdArchitecture } from "react-icons/md";
import { HiCode } from "react-icons/hi";
import { VscVscode } from "react-icons/vsc";

export default function Tecnologies() {
  type Tech = {
    name: string;
    icon: React.ElementType;
    color: string;
    category?: string;
  };
  const technologies: Tech[] = [
    { name: "React", icon: FaReact, color: "#61DBFB", category: "Frontend" },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "#ffffff",
      category: "Frontend",
    },
    { name: "HTML", icon: FaHtml5, color: "#E34C26", category: "Frontend" },
    { name: "CSS", icon: FaCss3Alt, color: "#264de4", category: "Frontend" },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F0DB4F",
      category: "Frontend",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#3178C6",
      category: "Frontend",
    },
    {
      name: "Tailwind",
      icon: SiTailwindcss,
      color: "#38B2AC",
      category: "Frontend",
    },
    {
      name: "Bootstrap",
      icon: FaBootstrap,
      color: "#563d7c",
      category: "Frontend",
    },
    { name: "Vite", icon: SiVite, color: "#646CFF", category: "Frontend" },

    { name: "Node.js", icon: FaNodeJs, color: "#3C873A", category: "Backend" },
    { name: "Express", icon: SiExpress, color: "#ffffff", category: "Backend" },
    { name: "NestJS", icon: SiNestjs, color: "#E0234E", category: "Backend" },
    { name: "REST API", icon: TbApi, color: "#38bdf8", category: "Backend" },
    {
      name: "JWT",
      icon: SiJsonwebtokens,
      color: "#000000",
      category: "Backend",
    },

    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      color: "#336791",
      category: "Database",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "#4DB33D",
      category: "Database",
    },
    { name: "Prisma", icon: SiPrisma, color: "#2D3748", category: "Database" },

    { name: "Git", icon: FaGitAlt, color: "#F1502F", category: "Tools" },
    { name: "GitHub", icon: FaGithub, color: "#ffffff", category: "Tools" },
    { name: "VS Code", icon: VscVscode, color: "#007ACC", category: "Tools" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37", category: "Tools" },
    { name: "Swagger", icon: SiSwagger, color: "#85EA2D", category: "Tools" },
    { name: "Docker", icon: FaDocker, color: "#2496ED", category: "DevOps" },
    { name: "CI/CD", icon: GiCycle, color: "#38bdf8", category: "DevOps" },
    { name: "Linux", icon: FaLinux, color: "#FCC624", category: "DevOps" },

    { name: "Figma", icon: FaFigma, color: "#F24E1E", category: "Tools" },
    {
      name: "Cloudinary",
      icon: SiCloudinary,
      color: "#C13584",
      category: "Tools",
    },

    {
      name: "Arquitectura Modular",
      icon: MdArchitecture,
      color: "#38bdf8",
      category: "Architecture",
    },
    {
      name: "Clean Code",
      icon: HiCode,
      color: "#38bdf8",
      category: "Architecture",
    },

    // {
    //   name: "Web Performance",
    //   icon: MdSpeed,
    //   color: "#facc15",
    //   category: "Engineering",
    // },
    // {
    //   name: "Testing",
    //   icon: FaVial,
    //   color: "#22c55e",
    //   category: "Engineering",
    // },
    {
      name: "AI Assisted Dev",
      icon: FaRobot,
      color: "#38bdf8",
      category: "Tools",
    },
    { name: "AI Tools", icon: SiOpenai, color: "#10A37F", category: "Tools" },
    {
      name: "Microservices",
      icon: TbTopologyStar3,
      color: "#38bdf8",
      category: "Architecture",
    },
    {
      name: "Web Security",
      icon: FaShieldAlt,
      color: "#ef4444",
      category: "Backend",
    },
    { name: "API Design", icon: TbApi, color: "#38bdf8", category: "Backend" },
  ];

  const categories = [
    "Frontend",
    "Backend",
    "Database",
    "DevOps",
    "Tools",
    // "Design",
    "Architecture",
    // "Engineering",
    // "Security",
    // "AI",
  ];

  return (
    <section id="tecnologies" className="section-tecnologies">
      <h2>Tecnologías y Herramientas</h2>

      {categories.map((category) => (
        <div key={category} className="tech-category">
          <h3>{category}</h3>

          <div className="tech-grid">
            {technologies
              .filter((tech) => tech.category === category)
              .map((tech, index) => {
                const Icon = tech.icon;

                return (
                  <div key={index} className="tech-item">
                    <Icon size={24} color={tech.color} />
                    <span>{tech.name}</span>
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </section>
  );
}
