import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Brand } from "@/components/Brand";

export const metadata: Metadata = {
  title: "Dashboard em construção",
  description: "O dashboard público da Lumina Deck está sendo preparado.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/dashboard/" },
};

export default function DashboardConstructionPage() {
  return (
    <main className="construction">
      <div className="construction-brand"><Brand /></div>
      <div className="construction-visual" aria-hidden="true">
        <div className="build-orbit orbit-a" /><div className="build-orbit orbit-b" />
        <span className="build-core"><Image src="/logo-lumina.svg" width={180} height={117} alt="" /></span>
        <span className="build-card build-card-a">FLASHCARDS</span><span className="build-card build-card-b">QUIZ</span><span className="build-card build-card-c">FSRS</span>
      </div>
      <div className="construction-copy">
        <p className="eyebrow"><span />Quase pronto</p>
        <h1>Estamos deixando tudo <em>mais leve.</em></h1>
        <p>O dashboard público da Lumina Deck está em construção. Enquanto finalizamos os últimos detalhes, conheça a experiência e acompanhe o lançamento.</p>
        <div className="hero-actions"><Link className="button button-light" href="/">Voltar para o início</Link><a className="button button-glass" href="mailto:contato@luminadeck.com.br?subject=Quero%20acompanhar%20a%20Lumina%20Deck">Quero ser avisado</a></div>
      </div>
      <p className="construction-foot">Lumina Deck · Aprender fica mais leve</p>
    </main>
  );
}
