"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypingText({ roles }: { roles: string[] }) {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Con movimiento reducido queda el primer rol fijo
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const typed = new Typed(el.current!, {
      strings: roles,
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, [roles]);

  return <span ref={el}>{roles[0]}</span>;
}
