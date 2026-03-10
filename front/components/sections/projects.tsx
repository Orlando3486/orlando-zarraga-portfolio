import Image from "next/image";
import "./../../styles/projects.css";
import { FaReact, FaNodeJs, FaDocker, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiPostgresql, SiTypescript } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      title: "Sistema de Citas - Centro Estético Dr. Jose L. Ferrer",
      description:
        "Aplicación web para gestión de citas médicas con autenticación, panel administrativo y base de datos.",
      image: "/images/centro-estetico.png",
      technologies: [
        <FaReact key="react" color="#61DBFB" size={28} />,
        <SiNextdotjs key="nextjs" color="#ffffff" size={28} />,
        <FaNodeJs key="nodejs" color="#3C873A" size={28} />,
        <SiPostgresql key="postgresql" color="#336791" size={28} />,
        <SiTypescript key="typescript" color="#3178C6" size={28} />,
      ],
      github:
        "https://github.com/Orlando3486/Centro-Estetico-Dr.-Jose-Leonardo-Ferrer",
      demo: "https://centroesteticodrjoseferrer.netlify.app/",
    },
    {
      title: "¡Si Chef! - Plataforma de Recetas",
      description:
        "Plataforma social y colaborativa para compartir recetas, aprender cocina y crear comunidad.",
      image: "/images/si-chef.png",
      technologies: [
        <FaReact key="react" color="#61DBFB" size={28} />,
        <SiNextdotjs key="nextjs" color="#ffffff" size={28} />,
        <FaNodeJs key="nodejs" color="#3C873A" size={28} />,
        <SiPostgresql key="postgresql" color="#336791" size={28} />,
        <SiTypescript key="typescript" color="#3178C6" size={28} />,
        <FaDocker key="docker" />,
      ],
      github: "https://github.com/Orlando3486/Sichef",
      demo: "https://si-chef.vercel.app/login",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Proyectos</h2>
      {/* <p className="projects-subtitle">Algunos trabajos recientes</p> */}

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="browser-frame">
              <div className="browser-header">
                <div className="browser-dot red"></div>
                <div className="browser-dot yellow"></div>
                <div className="browser-dot green"></div>
              </div>
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={220}
                className="project-image"
              />
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-icons">
              {project.technologies.map((Tech, index) => (
                <span key={index} className="tech-icon">
                  {Tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github} target="_blank">
                <FaGithub size={30} color="#ffffff" />
              </a>
              <a href={project.demo} target="_blank">
                <FiExternalLink size={30} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// async function getProjects() {
//   const res = await fetch("http://localhost:4000/projects", {
//     cache: "no-store", // importante para SSR dinámico
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch projects");
//   }

//   return res.json();
// }

// export default async function ProjectsPage() {
//   const projects = await getProjects();

//   return (
//     <div className="space-y-8">
//       <h1 className="text-3xl font-bold">Proyectos</h1>

//       <div className="grid gap-6 md:grid-cols-2">
//         {projects.map((project: any) => (
//           <div
//             key={project.id}
//             className="p-6 rounded-xl border shadow-sm hover:shadow-lg transition duration-300">
//             <h2 className="text-xl font-semibold">{project.title}</h2>
//             <p className="opacity-80 mt-2">{project.description}</p>

//             <div className="flex flex-wrap gap-2 mt-4">
//               {project.stack.map((tech: string) => (
//                 <span
//                   key={tech}
//                   className="text-sm px-2 py-1 rounded-md bg-gray-200 dark:bg-gray-800">
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
