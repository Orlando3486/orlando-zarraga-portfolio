"use client";

import "../../styles/navbar.css";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import type { Dictionary } from "../../i18n";
import { localePath, locales, type Locale } from "../../lib/i18n";

export default function Navbar({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary["nav"];
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { id: "hero", label: dict.home },
    { id: "about", label: dict.about },
    { id: "experience", label: dict.experience },
    { id: "projects", label: dict.projects },
    { id: "tecnologies", label: dict.skills },
    { id: "contact", label: dict.contact },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "";

      setMenuOpen(false);

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
    <nav className="navbar" aria-label={dict.label}>
      <div className="container navbar-inner">
        <a href="#hero" aria-label={dict.home}>
          <Image
            src="/images/logo-orlandoz.png"
            alt="Logo Orlando Zárraga"
            width={170}
            height={110}
            className="logo"
            priority
          />
        </a>

        <ul id="nav-links" className={menuOpen ? "nav-links active" : "nav-links"}>
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className={activeSection === link.id ? "active-link" : ""}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          {/* Selector de idioma: enlaces normales, sin redirección automática */}
          <ul className="lang-switch" aria-label={dict.language}>
            {locales.map((item) => (
              <li key={item}>
                <a
                  href={localePath(item)}
                  hrefLang={item}
                  lang={item}
                  aria-current={item === locale ? "true" : undefined}>
                  {item.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="icon-btn menu-icon"
            aria-label={menuOpen ? dict.closeMenu : dict.openMenu}
            aria-expanded={menuOpen}
            aria-controls="nav-links"
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaTimes className="icon" aria-hidden="true" />
            ) : (
              <FaBars className="icon" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
