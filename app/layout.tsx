import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://luminadeck.com.br"),
  title: {
    default: "Lumina Deck — seu material vira aprendizado",
    template: "%s — Lumina Deck",
  },
  description:
    "Transforme PDFs, imagens e anotações em flashcards, quizzes e áudio. Revise no momento certo com inteligência artificial e repetição espaçada FSRS.",
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
    title: "Lumina Deck — seu material vira aprendizado",
    description:
      "Menos tempo organizando. Mais tempo aprendendo com IA, flashcards e FSRS.",
    url: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101a3d",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
