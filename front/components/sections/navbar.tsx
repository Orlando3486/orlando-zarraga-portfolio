"use client";

import "../../styles/navbar.css";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id") || "";
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <h2 className="logo">MiPortfolio</h2>

      {/* icono hamburguesa */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a
            href="#hero"
            onClick={() => setMenuOpen(false)}
            className={activeSection === "hero" ? "active-link" : ""}>
            Inicio
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className={activeSection === "projects" ? "active-link" : ""}>
            Proyectos
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className={activeSection === "about" ? "active-link" : ""}>
            Sobre mí
          </a>
        </li>
        <li>
          <a
            href="#tecnologies"
            onClick={() => setMenuOpen(false)}
            className={activeSection === "tecnologies" ? "active-link" : ""}>
            Tecnologías
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className={activeSection === "contact" ? "active-link" : ""}>
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}
