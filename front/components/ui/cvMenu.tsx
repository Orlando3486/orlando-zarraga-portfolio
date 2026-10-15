"use client";

import { useEffect, useId, useRef, useState } from "react";
import { FiChevronDown, FiDownload } from "react-icons/fi";
import type { Locale } from "../../lib/i18n";
import { cvFiles, type CvVariant } from "../../lib/site";

export type CvMenuLabels = {
  button: string;
  fullstack: string;
  backend: string;
};

const variants: CvVariant[] = ["fullstack", "backend"];

// Botón "Descargar CV" con un menú para elegir la versión Full Stack o Backend
export default function CvMenu({
  locale,
  labels,
  className = "btn-secondary",
}: {
  locale: Locale;
  labels: CvMenuLabels;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="cv-menu" ref={rootRef}>
      <button
        ref={buttonRef}
        type="button"
        className={className}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}>
        <FiDownload size={20} aria-hidden="true" />
        {labels.button}
        <FiChevronDown size={20} aria-hidden="true" className="cv-menu-chevron" />
      </button>

      <ul id={menuId} className="cv-menu-list" hidden={!open}>
        {variants.map((variant) => (
          <li key={variant}>
            <a
              href={cvFiles[locale][variant]}
              download
              onClick={() => setOpen(false)}>
              {labels[variant]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
