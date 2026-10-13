import "./../../styles/tecnologies.css";
import { skillCategories, skills } from "../../data/skills";

export default function Tecnologies() {
  return (
    <section id="tecnologies" className="section-tecnologies">
      <h2>Tecnologías y Herramientas</h2>

      {skillCategories.map((category) => (
        <div key={category} className="tech-category">
          <h3>{category}</h3>

          <div className="tech-grid">
            {skills
              .filter((tech) => tech.category === category)
              .map((tech) => {
                const Icon = tech.icon;

                return (
                  <div key={tech.name} className="tech-item">
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
