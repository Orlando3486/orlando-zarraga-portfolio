import "./../../styles/contact.css";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { FiCalendar, FiExternalLink } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import type { Dictionary } from "../../i18n";
import type { Locale } from "../../lib/i18n";
import { infinitySoftware } from "../../lib/site";
import type { Profile } from "../../types/portfolio";
import CvMenu from "../ui/cvMenu";
import SectionHead from "../ui/sectionHead";

export default function Contact({
  locale,
  dict,
  profile,
}: {
  locale: Locale;
  dict: Dictionary;
  profile: Profile;
}) {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <SectionHead id="contact-title" text={dict.contact} />

        <div className="contact-grid">
          <div className="card contact-card">
            <div className="contact-actions">
              <a href={`mailto:${profile.contact.email}`} className="btn btn-primary">
                <MdEmail className="icon" aria-hidden="true" />
                {dict.contact.email}
              </a>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary">
                <FaLinkedin className="icon" aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary">
                <FaGithub className="icon" aria-hidden="true" />
                GitHub
              </a>
              <CvMenu locale={locale} labels={dict.cv} />
            </div>

            <p className="small contact-location">
              <FaMapMarkerAlt className="icon" aria-hidden="true" />
              {profile.contact.location}
            </p>
          </div>

          <div className="card contact-card">
            <h3>{dict.contact.infinity.title}</h3>
            <p className="contact-text">{dict.contact.infinity.text}</p>
            <div className="contact-actions">
              <a
                href={infinitySoftware.calendar}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary">
                <FiCalendar className="icon" aria-hidden="true" />
                {dict.contact.infinity.schedule}
              </a>
              <a
                href={infinitySoftware.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link">
                <FiExternalLink className="icon" aria-hidden="true" />
                {dict.contact.infinity.website}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
