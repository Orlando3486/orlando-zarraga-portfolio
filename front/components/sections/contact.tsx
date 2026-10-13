"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./../../styles/contact.css";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { profile } from "../../data/profile";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [idle, setIdle] = useState(true);
  const [bottomOffset, setBottomOffset] = useState(20);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const footer = document.querySelector("footer");

    function updateBottomOffset() {
      if (!footer) return;
      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (footerRect.top < windowHeight) {
        const overlap = windowHeight - footerRect.top;
        setBottomOffset(overlap + 12);
      } else {
        setBottomOffset(20);
      }
    }

    function handleScroll() {
      setIdle(false);
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => setIdle(true), 800);
      updateBottomOffset();
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, []);

  return (
    <section id="contact" className="section-contact">
      <h2>Contacto</h2>
      <h3>¿Trabajamos juntos?</h3>
      <Image
        src="/images/orlando-image.png"
        alt="Orlando Zarraga icon"
        width={200}
        height={260}
        className="avatar"
      />
      <ul className="contacts-links">
        <li className="contact-links">
          <a href={`mailto:${profile.contact.email}`} aria-label="Email">
            <MdEmail size={36} />
          </a>
        </li>
        <li className="contact-links">
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn">
            <FaLinkedin size={36} color="#0A66C2" />
          </a>
        </li>
        <li className="contact-links">
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub">
            <FaGithub size={36} color="#ffffff" />
          </a>
        </li>
      </ul>
      <p className="contact-location">
        <FaMapMarkerAlt color="#38bdf8" /> {profile.contact.location}
      </p>
      <a
        href="#hero"
        className={`scroll-top ${idle ? "is-idle" : ""}`}
        style={{ bottom: `${bottomOffset}px` }}
        aria-label="Volver al inicio">
        ↑
      </a>
      <p>
        {profile.name} | Desarrollador Full Stack, <br /> &copy;{" "}
        {new Date().getFullYear()}. Todos los derechos reservados.
      </p>
    </section>
  );
}
