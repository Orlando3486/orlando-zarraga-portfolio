import { ImageResponse } from "next/og";
import { profile } from "../data/es/profile";
import type { Locale } from "./i18n";
import { ogTagline } from "./seo";
import { siteUrl } from "./site";

export const ogSize = { width: 1200, height: 630 };

// Vista previa al compartir: fondo oscuro con la paleta del sitio
const portfolioLabel: Record<Locale, string> = { es: "Portafolio", en: "Portfolio" };

export function renderOgImage(locale: Locale) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background: "linear-gradient(135deg, #020617 0%, #0f172a 60%, #082f49 100%)",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}>
        <div style={{ display: "flex", fontSize: 32, color: "#38bdf8", fontFamily: "monospace" }}>
          {`<OrlandoZarraga /> · ${portfolioLabel[locale]}`}
        </div>
        <div style={{ display: "flex", marginTop: 32, fontSize: 88, fontWeight: 700, lineHeight: 1.05 }}>
          {profile.name}
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 44, color: "#38bdf8" }}>
          {ogTagline}
        </div>
        <div style={{ display: "flex", width: 120, height: 6, marginTop: 48, background: "#38bdf8", borderRadius: 3 }} />
        <div style={{ display: "flex", marginTop: 32, fontSize: 28, color: "#cbd5e1" }}>
          {siteUrl.replace("https://", "")}
        </div>
      </div>
    ),
    ogSize,
  );
}
