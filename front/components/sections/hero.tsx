"use client";

import "./../../styles/hero.css";

import Image from "next/image";
import TypingText from "./typingText";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { profile } from "../../data/profile";

export default function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}>
      <section id="hero" className="hero">
        <div className="hero-wrapper">
          <div className="hero-text">
            <p className="hero-intro">Hola, soy</p>

            <h1 className="hero-title">{profile.name}</h1>

            <h2 className="hero-role">
              <TypingText />
            </h2>

            <p className="hero-description">
              {profile.heroDescription}
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
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub">
                <FaGithub size={34} color="#ffffff" />
              </a>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn">
                <FaLinkedin size={34} color="#0A66C2" />
              </a>
            </div>
          </div>

          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer">
            <Image
              src="/images/orlando-profile-cartoon.png"
              alt={`Foto ${profile.name}`}
              width={260}
              height={350}
              className="profile-img"
            />
          </a>
        </div>
      </section>
    </motion.section>
  );
}
