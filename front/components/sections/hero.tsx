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
    <section id="hero" className="hero section">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="eyebrow">{dict.hero.greeting}</p>
          <h1>{profile.name}</h1>
          <p className="hero-role">
            <TypingText roles={profile.roles} />
          </p>
          <p className="lead hero-lead">{profile.heroDescription}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              {dict.hero.viewProjects}
            </a>
            <CvMenu locale={locale} labels={dict.cv} />
            <a href="#contact" className="btn btn-secondary">
              {dict.hero.contact}
            </a>
          </div>

          <ul className="hero-socials">
            <li>
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                aria-label="GitHub">
                <FaGithub className="icon" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                aria-label="LinkedIn">
                <FaLinkedin className="icon" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <div className="hero-media">
          <Image
            src="/images/orlando-profile-cartoon.png"
            alt={dict.hero.photoAlt}
            width={260}
            height={350}
            priority
            className="profile-img"
          />
        </div>
      </div>
    </section>
  );
}
