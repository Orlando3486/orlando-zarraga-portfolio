"use client";

import { useEffect } from "react";
import { INTRO_STORAGE_KEY } from "../../lib/intro";

function closeIntro() {
  delete document.documentElement.dataset.intro;
}

// Capa por encima del contenido, que ya está en el HTML desde el inicio.
// Se oculta sola con la animación CSS, con un clic o con Escape.
export default function IntroScreen({ subtitle }: { subtitle: string }) {
  useEffect(() => {
    if (!document.documentElement.dataset.intro) return;

    try {
      sessionStorage.setItem(INTRO_STORAGE_KEY, "1");
    } catch {
      // sessionStorage bloqueado: la intro se vuelve a mostrar en la próxima visita
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeIntro();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div
      className="intro-screen"
      aria-hidden="true"
      onClick={closeIntro}
      onAnimationEnd={(event) => {
        if (event.target === event.currentTarget) closeIntro();
      }}>
      <p className="intro-title">{"<OrlandoZarraga />"}</p>
      <p className="intro-sub">{subtitle}</p>
    </div>
  );
}
