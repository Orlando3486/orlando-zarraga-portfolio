"use client";

import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

// Aparece después del hero para no tapar sus acciones en mobile
export default function ScrollTop({ label }: { label: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#hero"
      className="icon-btn scroll-top"
      aria-label={label}
      hidden={!visible}>
      <FiArrowUp className="icon" aria-hidden="true" />
    </a>
  );
}
