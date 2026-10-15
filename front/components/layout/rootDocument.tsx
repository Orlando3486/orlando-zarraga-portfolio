import "../../app/globals.css";
import type { ReactNode } from "react";
import type { Locale } from "../../lib/i18n";
import { inter, poppins } from "../../lib/fonts";
import { introScript } from "../../lib/intro";
import { personJsonLd } from "../../lib/seo";

// <html> compartido por los root layouts de cada idioma: el lang sale del servidor
export default function RootDocument({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {/* Primero en el body: decide la intro antes de pintar el contenido */}
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(locale)) }}
        />
        {children}
      </body>
    </html>
  );
}
