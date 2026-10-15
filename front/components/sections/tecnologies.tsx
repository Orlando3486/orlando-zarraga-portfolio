import "./../../styles/tecnologies.css";
import { localize } from "../../data";
import { skillCategories, skills } from "../../data/skills";
import type { Dictionary } from "../../i18n";
import type { Locale } from "../../lib/i18n";

export default function Tecnologies({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary["skills"];
}) {
  return (
    <section id="tecnologies" className="section-tecnologies">
      <h2>{dict.title}</h2>

      {skillCategories.map((category) => (
        <div key={category} className="tech-category">
          <h3>{dict.categories[category]}</h3>

          <div className="tech-grid">
            {skills
              .filter((tech) => tech.category === category)
              .map((tech) => {
                const Icon = tech.icon;
                const name = localize(tech.name, locale);

                return (
                  <div key={name} className="tech-item">
                    <Icon size={24} color={tech.color} />
                    <span>{name}</span>
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </section>
  );
}
