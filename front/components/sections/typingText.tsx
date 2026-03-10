"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./../../styles/typingText.css";

export default function TypingText() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current!, {
      strings: [
        "Full Stack Developer",
        "Backend Developer",
        "Next.js Developer",
        "React Specialist",
        "Node.js Engineer",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <span
      ref={el}
      style={{
        color: "#38bdf8",
        fontWeight: "600",
      }}
    />
  );
}
