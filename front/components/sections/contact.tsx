"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./../../styles/contact.css";
import { MdEmail } from "react-icons/md";
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
          <a href="mailto:orlandozarraga31@hotmail.com">
            <MdEmail size={36} />
          </a>
        </li>
        <li className="contact-links">
          <a
            href="https://www.linkedin.com/in/orlando-ismael-zarraga-medina-327211171/"
            target="_blank">
            <FaLinkedin size={36} color="#0A66C2" />
          </a>
        </li>
        <li className="contact-links">
          <a href="https://github.com/Orlando3486" target="_blank">
            <FaGithub size={36} color="#ffffff" />
          </a>
        </li>
      </ul>
      <a
        href="#hero"
        className={`scroll-top ${idle ? "is-idle" : ""}`}
        style={{ bottom: `${bottomOffset}px` }}
        aria-label="Volver al inicio">
        ↑
      </a>
    </section>
  );
}
