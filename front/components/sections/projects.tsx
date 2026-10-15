import Image from "next/image";
import "./../../styles/projects.css";
import { FaGithub } from "react-icons/fa";
import { FiChevronDown, FiExternalLink, FiStar } from "react-icons/fi";
import type { Dictionary } from "../../i18n";
import type { Project } from "../../types/portfolio";
import SectionHead from "../ui/sectionHead";
import ProjectCarousel from "../ui/projectCarousel";

function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="browser-frame">
      <div className="browser-header" aria-hidden="true">
        <span className="browser-dot red" />
        <span className="browser-dot yellow" />
        <span className="browser-dot green" />
      </div>
      {children}
    </div>
  );
}

export default function Projects({
  dict,
  projects,
}: {
  dict: Dictionary["projects"];
  projects: Project[];
}) {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHead id="projects-title" text={dict} />

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`card project-card ${project.featured ? "is-featured" : ""}`}>
              {project.gallery ? (
                <ProjectCarousel
                  images={project.gallery}
                  label={`${dict.carousel.screenshotsOf} ${project.title}`}
                  labels={dict.carousel}
                  aspectRatio={project.galleryAspect}
                />
              ) : (
                <BrowserFrame>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={300}
                      className="project-image"
                      sizes="(max-width: 768px) 100vw, 560px"
                    />
                  ) : (
                    <div className="project-placeholder">
                      <span>{project.title.split(" - ")[0]}</span>
                    </div>
                  )}
                </BrowserFrame>
              )}

              <div className="project-body">
                {project.featured && (
                  <span className="badge">
                    <FiStar className="icon" aria-hidden="true" />
                    {dict.featured}
                  </span>
                )}

                <h3>{project.title}</h3>

                {project.context && <p className="small">{project.context}</p>}

                <p className="project-description">{project.description}</p>

                {project.caseStudy && (
                  <details className="disclosure project-case">
                    <summary>
                      {dict.viewCase}
                      <FiChevronDown className="icon" aria-hidden="true" />
                    </summary>
                    <dl className="case-study">
                      <div>
                        <dt>{dict.problem}</dt>
                        <dd>{project.caseStudy.problem}</dd>
                      </div>
                      <div>
                        <dt>{dict.solution}</dt>
                        <dd>{project.caseStudy.solution}</dd>
                      </div>
                      <div>
                        <dt>{dict.result}</dt>
                        <dd>{project.caseStudy.result}</dd>
                      </div>
                    </dl>
                  </details>
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
                      className="text-link">
                      <FaGithub className="icon" aria-hidden="true" /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link">
                      <FiExternalLink className="icon" aria-hidden="true" /> Demo
                    </a>
                  )}
                  {project.links?.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link">
                      <FiExternalLink className="icon" aria-hidden="true" /> {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
