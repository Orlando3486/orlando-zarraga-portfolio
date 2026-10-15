"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

export type LightboxImage = { src: string; alt: string };

/**
 * Vista ampliada con <dialog> modal nativo: atrapa el foco, cierra con Escape
 * y al cerrar devuelve el foco al elemento que la abrió.
 */
export default function Lightbox({
  images,
  startIndex,
  labels,
  onClose,
}: {
  images: LightboxImage[];
  startIndex: number;
  labels: { previous: string; next: string; close: string };
  // Recibe la última imagen vista, para sincronizar el carrusel
  onClose: (lastIndex: number) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [current, setCurrent] = useState(startIndex);
  const image = images[current];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
    closeRef.current?.focus();
  }, []);

  const go = (step: number) =>
    setCurrent((value) => (value + step + images.length) % images.length);

  const onKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    // Que las flechas no lleguen al carrusel que contiene al diálogo
    event.stopPropagation();
    go(event.key === "ArrowLeft" ? -1 : 1);
  };

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label={image.alt}
      onKeyDown={onKeyDown}
      onClose={() => onClose(current)}
      onClick={(event) => {
        // Clic en el fondo (fuera de la imagen y los controles) cierra
        if (event.target === event.currentTarget) dialogRef.current?.close();
      }}>
      <div className="lightbox-figure">
        <Image src={image.src} alt={image.alt} fill sizes="100vw" className="lightbox-image" />
      </div>

      <div className="lightbox-bar">
        <p className="small lightbox-caption">
          {current + 1} / {images.length} · {image.alt}
        </p>
        <div className="lightbox-actions">
          <button type="button" className="icon-btn" onClick={() => go(-1)} aria-label={labels.previous}>
            <FiChevronLeft className="icon" aria-hidden="true" />
          </button>
          <button type="button" className="icon-btn" onClick={() => go(1)} aria-label={labels.next}>
            <FiChevronRight className="icon" aria-hidden="true" />
          </button>
          <button
            ref={closeRef}
            type="button"
            className="icon-btn"
            onClick={() => dialogRef.current?.close()}
            aria-label={labels.close}>
            <FiX className="icon" aria-hidden="true" />
          </button>
        </div>
      </div>
    </dialog>
  );
}
