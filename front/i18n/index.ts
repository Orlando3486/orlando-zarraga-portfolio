import type { Locale } from "../lib/i18n";
import { en } from "./en";
import { es } from "./es";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
