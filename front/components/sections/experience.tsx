import "./../../styles/experience.css";
import "./../../styles/tags.css";
import { FiExternalLink } from "react-icons/fi";
import type { Dictionary } from "../../i18n";
import type { Experience as ExperienceItem } from "../../types/portfolio";

export default function Experience({
  dict,
  experience,
}: {
  dict: Dictionary["experience"];
  experience: ExperienceItem[];
}) {
  return (
    <section id="experience" className="section-experience">
      <h2>{dict.title}</h2>

      <ol className="experience-timeline">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="experience-card">
            <div className="experience-header">
              <div>
                <h3>
                  {job.company}
                  {job.location && (
                    <span className="experience-location">
                      {" "}
                      ({job.location})
                    </span>
                  )}
                </h3>
                <p className="experience-role">{job.role}</p>
              </div>
              <span className="experience-period">{job.period}</span>
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
                    rel="noopener noreferrer">
                    <FiExternalLink size={16} /> {link.label}
                  </a>
                ))}
              </div>
            )}

            <ul className="experience-achievements">
              {job.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>

            <ul className="tag-list experience-tags">
              {job.tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
