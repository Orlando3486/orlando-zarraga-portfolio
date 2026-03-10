import { FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import "./../../styles/tecnologies.css";
import { SiNextdotjs, SiPostgresql, SiTypescript } from "react-icons/si";

export default function Tecnologies() {
  type Tech = {
    icon: React.ElementType;
    color: string;
  };
  const technologies: Tech[] = [
    { icon: FaReact, color: "#61DBFB" },
    { icon: SiNextdotjs, color: "#ffffff" },
    { icon: FaNodeJs, color: "#3C873A" },
    { icon: SiPostgresql, color: "#336791" },
    { icon: SiTypescript, color: "#3178C6" },
    { icon: FaDocker, color: "#2496ED" },
  ];

  return (
    <section id="tecnologies" className="section-tecnologies">
      <h2>Tecnologías y Herramientas</h2>

      <div className="tech-icons">
        {technologies.map((tech, i) => {
          const Icon = tech.icon;
          return <Icon key={i} className="tech-icon" color={tech.color} />;
        })}
      </div>
    </section>
  );
}
