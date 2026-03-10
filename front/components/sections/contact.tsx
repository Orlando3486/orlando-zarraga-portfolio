import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./../../styles/contact.css";
import { MdEmail } from "react-icons/md";
import Image from "next/image";

export default function Contact() {
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
            {" "}
            <FaGithub size={36} color="#ffffff" />
          </a>
        </li>
      </ul>
      <p>
        Orlando Zarraga | Desarrollador Full Stack, © 2026. <br /> Todos los
        derechos reservados.
      </p>
    </section>
  );
}
