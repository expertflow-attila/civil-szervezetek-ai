import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Civil Szervezetek AI — 12 magyar szervezet, kulcsrakész AI-csomag · Expert Flow",
  description:
    "12 magyar civil szervezet AI-bevezetési csomagja: vezetői összefoglaló, prompt-csomag, Claude Desktop konfig, premium weboldal. Tölts le Claude Code-dal.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`${inter.variable} ${instrumentSerif.variable} ${jetbrains.variable}`}>
      <body className="grain antialiased">{children}</body>
    </html>
  );
}
