import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./../../styles/contact.css";
import { MdEmail } from "react-icons/md";
import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="section-contact">
      <h2>Contacto</h2>
      <h3>¿Trabajamos juntos?</h3>
      <ul className="contacts-links">
        <li className="contact-links">
          <a href="mailto:orlandozarraga31@hotmail.com">
            <MdEmail size={36} />
          </a>
        </li>
        <li className="contact-links">
          <a href="https://www.linkedin.com/in/orlando-ismael-zarraga-medina-327211171/">
            <FaLinkedin size={36} color="#0A66C2" />
          </a>
        </li>
        <li className="contact-links">
          <a href="https://github.com/Orlando3486">
            {" "}
            <FaGithub size={36} color="#ffffff" />
          </a>
        </li>
      </ul>
      <div className="hero-image">
        <Image
          src="/images/orlando-cartoon.jpg"
          alt="Foto Orlando Zárraga"
          width={260}
          height={320}
          className="profile-img"
        />
      </div>
      <p>
        Orlando Zarraga | Desarrollador Full Stack, copyright © 2026. Todos los
        derechos reservados.
      </p>
    </section>
  );
}
