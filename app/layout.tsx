import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://luminadeck.com.br"),
  title: {
    default: "Lumina Deck — aprenda muito, esqueça menos",
    template: "%s — Lumina Deck",
  },
  description:
    "Transforme PDFs, slides, fotos e anotações em flashcards, quizzes e revisões inteligentes. A Lumina organiza. Você aprende.",
  applicationName: "Lumina Deck",
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon-lumina.png",
    apple: "/favicon-lumina.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Lumina Deck",
    title: "Lumina Deck — aprenda muito, esqueça menos",
    description:
      "Transforme seu conteúdo em flashcards, quizzes e revisões inteligentes. 100% grátis.",
    url: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1672ef",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
