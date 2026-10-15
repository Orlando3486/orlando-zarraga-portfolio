import "./../../styles/experience.css";
import { FiChevronDown, FiExternalLink } from "react-icons/fi";
import type { Dictionary } from "../../i18n";
import type { Experience as ExperienceItem } from "../../types/portfolio";
import SectionHead from "../ui/sectionHead";

// Logros visibles por experiencia; el resto va en "Ver más"
const VISIBLE_ACHIEVEMENTS = 3;

export default function Experience({
  dict,
  experience,
}: {
  dict: Dictionary["experience"];
  experience: ExperienceItem[];
}) {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHead id="experience-title" text={dict} />

        <ol className="experience-timeline">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="card experience-card">
              <div className="experience-header">
                <div>
                  <h3>
                    {job.company}
                    {job.location && (
                      <span className="experience-location"> · {job.location}</span>
                    )}
                  </h3>
                  <p className="experience-role">{job.role}</p>
                </div>
                <span className="small">{job.period}</span>
              </div>

              {job.description && (
                <p className="experience-description">{job.description}</p>
              )}

              {job.links && (
                <div className="experience-links">
                  {job.links.map((link) => (
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
              )}

              <ul className="experience-achievements">
                {job.achievements.slice(0, VISIBLE_ACHIEVEMENTS).map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>

              {job.achievements.length > VISIBLE_ACHIEVEMENTS && (
                <details className="disclosure experience-more">
                  <summary>
                    {dict.showMore} ({job.achievements.length - VISIBLE_ACHIEVEMENTS})
                    <FiChevronDown className="icon" aria-hidden="true" />
                  </summary>
                  <ul className="experience-achievements">
                    {job.achievements.slice(VISIBLE_ACHIEVEMENTS).map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </details>
              )}

              <ul className="tag-list">
                {job.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
