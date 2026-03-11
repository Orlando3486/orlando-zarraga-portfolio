import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
// import Navbar from "../components/sections/navbar"; // si lo tenés
import Footer from "../components/sections/footer"; // si lo tenés

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Orlando Zárraga | Portafolio",
  description: "Portafolio de Orlando Zárraga...",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Crítico para el fix de notch en iPhone */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
        <Footer /> {/* ✅ Footer aquí, fuera del main */}
      </body>
    </html>
  );
}
