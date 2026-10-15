import { ogSize, renderOgImage } from "../../../lib/ogImage";

export const alt = "Orlando Zárraga — Full Stack Developer · Backend";
export const size = ogSize;
export const contentType = "image/png";

export default function TwitterImage() {
  return renderOgImage("en");
}
