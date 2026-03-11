"use client";

import "./../../styles/hero.css";

import Image from "next/image";
import TypingText from "./typingText";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-wrapper">
        <div className="hero-text">
          <p className="hero-intro">Hola, soy</p>

          <h1 className="hero-title">Orlando Zárraga</h1>

          <h2 className="hero-role">
            <TypingText />
          </h2>

          <p className="hero-description">
            Construyo aplicaciones modernas, escalables y bien estructuradas
            utilizando tecnologías del ecosistema JavaScript.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              Ver proyectos
            </a>

            <a href="#contact" className="btn-secondary">
              Contactarme
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/Orlando3486" target="_blank">
              <FaGithub size={34} color="#ffffff" />
            </a>
            <a
              href="https://www.linkedin.com/in/orlando-ismael-zarraga-medina-327211171/"
              target="_blank">
              <FaLinkedin size={34} color="#0A66C2" />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <Image
            src="/images/profile-image.png"
            alt="Foto Orlando Zárraga"
            width={290}
            height={320}
            className="profile-img"
          />
        </div>
      </div>
    </section>
  );
}
