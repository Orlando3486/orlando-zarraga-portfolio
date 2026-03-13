"use client";

import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";

export default function IntroScreen({ onFinish }: { onFinish: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const startFade = setTimeout(() => {
      setFadeOut(true); // empieza la animación
    }, 2800);

    const finish = setTimeout(() => {
      onFinish(); // cambia a la página
    }, 3500);

    return () => {
      clearTimeout(startFade);
      clearTimeout(finish);
    };
  }, [onFinish]);

  return (
    <div className={`intro-screen ${fadeOut ? "fade-out" : ""}`}>
      <TypeAnimation
        sequence={[
          "> initializing portfolio...",
          800,
          "<OrlandoZarraga/>",
          800,
          "Full Stack Developer",
        ]}
        wrapper="span"
        speed={50}
        repeat={0}
        className="intro-text"
      />
    </div>
  );
}
