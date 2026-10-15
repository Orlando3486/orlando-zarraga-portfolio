import type { SectionHeadText } from "../../i18n/types";

// Jerarquía común a todas las secciones: eyebrow → h2 → bajada
export default function SectionHead({
  id,
  text,
}: {
  id: string;
  text: SectionHeadText;
}) {
  return (
    <header className="section-head">
      <p className="eyebrow">{text.eyebrow}</p>
      <h2 id={id}>{text.title}</h2>
      <p className="lead">{text.lead}</p>
    </header>
  );
}
