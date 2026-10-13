import Image from "next/image";
import "./../../styles/projects.css";
import "./../../styles/tags.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { projects } from "../../data/projects";
import ProjectGallery from "./projectGallery";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Proyectos</h2>
      {/* <p className="projects-subtitle">Algunos trabajos recientes</p> */}

      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`project-card ${project.featured ? "featured" : ""}`}>
            {project.featured && (
              <span className="project-badge">Proyecto destacado</span>
            )}

            {project.gallery ? (
              <ProjectGallery images={project.gallery} />
            ) : (
              <div className="browser-frame">
                <div className="browser-header">
                  <div className="browser-dot red"></div>
                  <div className="browser-dot yellow"></div>
                  <div className="browser-dot green"></div>
                </div>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="project-image"
                    style={{ width: "100%", height: "auto" }}
                  />
                ) : (
                  <div className="project-placeholder">
                    <span>{project.title.split(" - ")[0]}</span>
                  </div>
                )}
              </div>
            )}

            <h3>{project.title}</h3>

            {project.context && (
              <p className="project-context">{project.context}</p>
            )}

            <p>{project.description}</p>

            {project.technologies && (
              <div className="tech-icons">
                {project.technologies.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <span key={tech.name} className="tech-icon" title={tech.name}>
                      <Icon color={tech.color} size={28} />
                    </span>
                  );
                })}
              </div>
            )}

            {project.tags && (
              <ul className="tag-list">
                {project.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
            )}

            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Repositorio de ${project.title}`}>
                  <FaGithub size={30} color="#ffffff" />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Demo de ${project.title}`}>
                  <FiExternalLink size={30} />
                </a>
              )}
              {project.links?.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-text-link">
                  <FiExternalLink size={20} /> {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
