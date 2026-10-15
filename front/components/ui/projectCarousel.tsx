"use client";

import "../../styles/carousel.css";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
} from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Lightbox, { type LightboxImage } from "./lightbox";

export type CarouselImage = LightboxImage;

export type CarouselLabels = {
  roleDescription: string;
  previous: string;
  next: string;
  open: string;
  close: string;
};

const DRAG_THRESHOLD = 5;

function scrollBehavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

// Distancia entre el inicio de una captura y la siguiente (ancho + gap)
function slideStep(track: HTMLElement): number {
  const first = track.firstElementChild as HTMLElement | null;
  if (!first) return 0;
  const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
  return first.offsetWidth + gap;
}

/**
 * Carrusel horizontal de capturas con scroll-snap.
 * Se recorre deslizando (táctil y trackpad), arrastrando con el mouse, con las
 * flechas ‹ › y con las flechas del teclado; cada captura se abre en un lightbox.
 * Muestra una o dos capturas según el ancho del contenedor (container query).
 */
export default function ProjectCarousel({
  images,
  label,
  labels,
  aspectRatio = "16 / 9",
}: {
  images: CarouselImage[];
  // Nombre accesible del carrusel, por ejemplo "Capturas de ZarMedi"
  label: string;
  labels: CarouselLabels;
  // Relación de aspecto de cada captura, en formato CSS ("1535 / 815")
  aspectRatio?: string;
}) {
  const trackRef = useRef<HTMLUListElement>(null);
  const drag = useRef({ active: false, moved: false, startX: 0, startScroll: 0 });
  const [index, setIndex] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(images.length <= 1);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const syncPosition = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const step = slideStep(track);
    setIndex(step ? Math.round(track.scrollLeft / step) : 0);
    setAtStart(track.scrollLeft <= 1);
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = requestAnimationFrame(syncPosition);
    const onChange = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(syncPosition);
    };

    track.addEventListener("scroll", onChange, { passive: true });
    window.addEventListener("resize", onChange);
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onChange);
      window.removeEventListener("resize", onChange);
    };
  }, [syncPosition]);

  const goTo = useCallback(
    (target: number) => {
      const track = trackRef.current;
      if (!track) return;
      const clamped = Math.max(0, Math.min(images.length - 1, target));
      track.scrollTo({ left: clamped * slideStep(track), behavior: scrollBehavior() });
    },
    [images.length],
  );

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    }
  };

  // Arrastre con mouse; el táctil y el trackpad usan el scroll nativo
  const onPointerDown = (event: PointerEvent<HTMLUListElement>) => {
    const track = trackRef.current;
    if (!track || event.pointerType !== "mouse" || event.button !== 0) return;

    drag.current = {
      active: true,
      moved: false,
      startX: event.clientX,
      startScroll: track.scrollLeft,
    };

    const onMove = (moveEvent: globalThis.PointerEvent) => {
      const dx = moveEvent.clientX - drag.current.startX;
      if (!drag.current.moved && Math.abs(dx) < DRAG_THRESHOLD) return;
      drag.current.moved = true;
      track.dataset.dragging = "true";
      track.scrollLeft = drag.current.startScroll - dx;
    };

    const onUp = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      drag.current.active = false;
      if (!drag.current.moved) return;
      // Reactiva el snap y acomoda en la captura más cercana
      const nearest = Math.round(track.scrollLeft / (slideStep(track) || 1));
      delete track.dataset.dragging;
      goTo(nearest);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  };

  const openSlide = (event: MouseEvent<HTMLButtonElement>, slide: number) => {
    // Un arrastre no debe abrir la captura al soltar el botón
    if (drag.current.moved) {
      event.preventDefault();
      drag.current.moved = false;
      return;
    }
    setOpenIndex(slide);
  };

  const closeLightbox = (lastIndex: number) => {
    setOpenIndex(null);
    goTo(lastIndex);
  };

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription={labels.roleDescription}
      aria-label={label}
      onKeyDown={onKeyDown}
      data-at-start={atStart}
      data-at-end={atEnd}
      style={{ "--carousel-aspect": aspectRatio } as React.CSSProperties}>
      <ul ref={trackRef} className="carousel-track" onPointerDown={onPointerDown}>
        {images.map((image, slide) => (
          <li key={image.src} className="carousel-slide">
            <button
              type="button"
              className="carousel-open"
              aria-label={`${labels.open}: ${image.alt}`}
              onClick={(event) => openSlide(event, slide)}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                draggable={false}
                sizes="(min-width: 1200px) 560px, (min-width: 720px) 50vw, 100vw"
                className="carousel-image"
                priority={slide === 0}
              />
            </button>
          </li>
        ))}
      </ul>

      <div className="carousel-controls">
        <button
          type="button"
          className="icon-btn"
          onClick={() => goTo(index - 1)}
          disabled={atStart}
          aria-label={labels.previous}>
          <FiChevronLeft className="icon" aria-hidden="true" />
        </button>
        <p className="small carousel-counter" aria-live="polite">
          {Math.min(index + 1, images.length)} / {images.length}
        </p>
        <button
          type="button"
          className="icon-btn"
          onClick={() => goTo(index + 1)}
          disabled={atEnd}
          aria-label={labels.next}>
          <FiChevronRight className="icon" aria-hidden="true" />
        </button>
      </div>

      {openIndex !== null && (
        <Lightbox
          images={images}
          startIndex={openIndex}
          labels={labels}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
}
