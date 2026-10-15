"use client";

import Image from "next/image";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import type { Dictionary } from "../../i18n";
import type { GalleryImage } from "../../types/portfolio";

export default function ProjectGallery({
  images,
  dict,
}: {
  images: GalleryImage[];
  dict: Dictionary["projects"];
}) {
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) =>
    setCurrent((index + images.length) % images.length);

  return (
    <div className="project-gallery">
      <div className="browser-frame">
        <div className="browser-header" aria-hidden="true">
          <span className="browser-dot red" />
          <span className="browser-dot yellow" />
          <span className="browser-dot green" />
        </div>
        <div className="gallery-viewport">
          {images.map((image, index) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 560px"
              className={`gallery-image ${index === current ? "is-active" : ""}`}
              aria-hidden={index !== current}
              priority={index === 0}
            />
          ))}
          <button
            type="button"
            className="icon-btn gallery-arrow prev"
            onClick={() => goTo(current - 1)}
            aria-label={dict.previousImage}>
            <FiChevronLeft className="icon" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="icon-btn gallery-arrow next"
            onClick={() => goTo(current + 1)}
            aria-label={dict.nextImage}>
            <FiChevronRight className="icon" aria-hidden="true" />
          </button>
        </div>
      </div>

      <p className="small gallery-caption" aria-live="polite">
        {images[current].alt}
      </p>

      <div className="gallery-thumbs">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className={`gallery-thumb ${index === current ? "is-active" : ""}`}
            onClick={() => goTo(index)}
            aria-label={`${dict.viewImage} ${image.alt}`}
            aria-pressed={index === current}>
            <Image src={image.src} alt="" width={120} height={64} />
          </button>
        ))}
      </div>
    </div>
  );
}
