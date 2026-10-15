import type { Metadata } from "next";
import type { ReactNode } from "react";
import RootDocument from "../../components/layout/rootDocument";
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata("es");

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <RootDocument locale="es">{children}</RootDocument>;
}
