"use client";

import "./../../styles/about.css";
import { Fragment } from "react";
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import { profile } from "../../data/profile";
import { education } from "../../data/education";

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

export default function About() {
  return (
    <section id="about" className="section-about">
      <h2>Sobre mí</h2>
      <p>{renderSummary(profile.summary, profile.highlights)}</p>

      <ul className="about-facts">
        <li>
          <FaMapMarkerAlt color="#38bdf8" /> {profile.contact.location}
        </li>
        <li>Idiomas: {profile.languages}</li>
      </ul>

      <div className="about-education">
        <h3>
          <FaGraduationCap color="#38bdf8" /> Educación
        </h3>
        <ul>
          {education.map((item) => (
            <li key={`${item.institution}-${item.period}`}>
              <span>
                <span className="highlight">{item.title}</span> —{" "}
                {item.institution}
                {item.detail && ` · ${item.detail}`}
              </span>
              <span className="about-education-period">{item.period}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
