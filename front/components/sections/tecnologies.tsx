import "./../../styles/tecnologies.css";
import { localize } from "../../data";
import { coreSkills, skillCategories, skills } from "../../data/skills";
import type { Dictionary } from "../../i18n";
import type { Locale } from "../../lib/i18n";
import SectionHead from "../ui/sectionHead";

export default function Tecnologies({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary["skills"];
}) {
  return (
    <section id="tecnologies" className="section" aria-labelledby="tecnologies-title">
      <div className="container">
        <SectionHead id="tecnologies-title" text={dict} />

        <div className="card is-featured tech-core">
          <h3>{dict.core}</h3>
          <ul className="tech-grid">
            {coreSkills.map((tech) => {
              const Icon = tech.icon;
              const name = localize(tech.name, locale);

              return (
                <li key={name} className="tech-item tech-item-core">
                  <Icon className="icon" color={tech.color} aria-hidden="true" />
                  <span>{name}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="tech-categories">
          {skillCategories.map((category) => (
            <div key={category} className="card tech-category">
              <h3>{dict.categories[category]}</h3>

              <ul className="tech-grid">
                {skills
                  .filter((tech) => tech.category === category)
                  .map((tech) => {
                    const Icon = tech.icon;
                    const name = localize(tech.name, locale);

                    return (
                      <li key={name} className="tech-item">
                        <Icon className="icon" color={tech.color} aria-hidden="true" />
                        <span>{name}</span>
                      </li>
                    );
                  })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
