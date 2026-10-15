import "./../../styles/about.css";
import { Fragment } from "react";
import { FaGraduationCap, FaLanguage, FaMapMarkerAlt } from "react-icons/fa";
import type { Dictionary } from "../../i18n";
import type { Education, Profile } from "../../types/portfolio";
import SectionHead from "../ui/sectionHead";

// Envuelve en .highlight los fragmentos de profile.highlights dentro del resumen
function renderSummary(text: string, highlights: string[]) {
  const escaped = highlights.map((h) =>
    h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  );
  const parts = text.split(new RegExp(`(${escaped.join("|")})`));

  return parts.map((part, index) =>
    highlights.includes(part) ? (
      <span key={index} className="highlight">
        {part}
      </span>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    ),
  );
}

export default function About({
  dict,
  profile,
  education,
}: {
  dict: Dictionary["about"];
  profile: Profile;
  education: Education[];
}) {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHead id="about-title" text={dict} />

        <div className="about-grid">
          <div className="card about-summary">
            <p>{renderSummary(profile.summary, profile.highlights)}</p>

            <dl className="about-facts">
              <div>
                <dt>
                  <FaMapMarkerAlt className="icon" aria-hidden="true" />
                  {dict.location}
                </dt>
                <dd>{profile.contact.location}</dd>
              </div>
              <div>
                <dt>
                  <FaLanguage className="icon" aria-hidden="true" />
                  {dict.languages}
                </dt>
                <dd>{profile.languages}</dd>
              </div>
            </dl>
          </div>

          <div className="card about-education">
            <h3>
              <FaGraduationCap className="icon" aria-hidden="true" />
              {dict.education}
            </h3>
            <ul>
              {education.map((item) => (
                <li key={`${item.institution}-${item.period}`}>
                  <p className="about-education-title">{item.title}</p>
                  <p className="small">
                    {item.institution}
                    {item.detail && ` · ${item.detail}`} · {item.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
