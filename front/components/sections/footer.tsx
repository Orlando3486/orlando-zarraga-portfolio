import "../../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Orlando Zarraga | Desarrollador Full Stack, &copy;{" "}
        {new Date().getFullYear()}. Todos los derechos reservados.
      </p>
    </footer>
  );
}
