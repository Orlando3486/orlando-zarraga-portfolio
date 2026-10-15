import type { Locale } from "../lib/i18n";
import type { LocalizedText, PortfolioContent } from "../types/portfolio";
import * as en from "./en";
import * as es from "./es";

const content: Record<Locale, PortfolioContent> = { es, en };

export function getContent(locale: Locale): PortfolioContent {
  return content[locale];
}

export function localize(text: LocalizedText, locale: Locale): string {
  return typeof text === "string" ? text : text[locale];
}
