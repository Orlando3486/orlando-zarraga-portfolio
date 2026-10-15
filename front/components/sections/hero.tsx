"use client";

import "./../../styles/hero.css";

import Image from "next/image";
import TypingText from "./typingText";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { Dictionary } from "../../i18n";
import type { Locale } from "../../lib/i18n";
import type { Profile } from "../../types/portfolio";
import CvMenu from "../ui/cvMenu";

export default function Hero({
  locale,
  dict,
  profile,
}: {
  locale: Locale;
  dict: Dictionary;
  profile: Profile;
}) {
  return (
    <section className="hero">
      <section id="hero" className="hero">
        <div className="hero-wrapper">
          <div className="hero-text">
            <p className="hero-intro">{dict.hero.greeting}</p>

            <h1 className="hero-title">{profile.name}</h1>

            <h2 className="hero-role">
              <TypingText roles={profile.roles} />
            </h2>

            <p className="hero-description">
              {profile.heroDescription}
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                {dict.hero.viewProjects}
              </a>

              <CvMenu locale={locale} labels={dict.cv} />

              <a href="#contact" className="btn-secondary">
                {dict.hero.contact}
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
              alt={dict.hero.photoAlt}
              width={260}
              height={350}
              className="profile-img"
            />
          </a>
        </div>
      </section>
    </section>
  );
}
