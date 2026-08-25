import Image from "next/image";
import { Brand, StoreBadges } from "@/components/Brand";
import { LandingInteractions } from "@/components/LandingInteractions";

const storySteps = [
  {
    chapter: "O ponto de partida",
    title: <>Jogue o conteúdo.<br /><em>A gente organiza.</em></>,
    text: "PDF, foto, texto ou anotação: você escolhe a fonte e mantém o controle antes de gerar qualquer material.",
  },
  {
    chapter: "Clareza com IA",
    title: <>Um conteúdo.<br /><em>Três jeitos de aprender.</em></>,
    text: "Flashcards para retenção, quiz para testar e áudio para reforçar. Só aparecem os formatos realmente disponíveis.",
  },
  {
    chapter: "Ritmo inteligente",
    title: <>Revisar menos.<br /><em>Lembrar por mais tempo.</em></>,
    text: "O FSRS aprende com suas respostas e encontra o próximo momento ideal de revisão, cartão por cartão.",
  },
  {
    chapter: "Progresso contínuo",
    title: <>Seu estudo segue.<br /><em>Onde você estiver.</em></>,
    text: "Comece na web, continue no celular e enxergue o avanço sem transformar aprendizado em uma planilha.",
  },
];

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <p className={`eyebrow${dark ? " eyebrow-dark" : ""}`}><span />{children}</p>;
}

function ProductPreview() {
  return (
    <div className="hero-product reveal" aria-label="Prévia da experiência Lumina Deck">
      <div className="product-glow" />
      <div className="app-window">
        <div className="window-top">
          <span className="mini-brand"><Image src="/logo-lumina.svg" width={48} height={31} alt="" /></span>
          <span className="window-pill">Hoje</span><span className="avatar">L</span>
        </div>
        <div className="window-content">
          <div className="welcome-line"><small>Bom dia, Lucas</small><strong>O que vamos aprender?</strong></div>
          <div className="focus-card">
            <div><span className="focus-label">REVISÃO DO DIA</span><strong>12 cartões te esperam</strong><small>Uma sessão rápida mantém seu ritmo.</small></div>
            <span className="focus-play">▶</span>
          </div>
          <div className="metric-row">
            <span><small>Sequência</small><strong>8 dias</strong></span>
            <span><small>Retenção</small><strong>91%</strong></span>
            <span><small>Esta semana</small><strong>2h 40</strong></span>
          </div>
          <div className="deck-row"><span className="deck-icon">Bio</span><span><strong>Biologia celular</strong><small>8 para revisar</small></span><i>62%</i></div>
          <div className="deck-row"><span className="deck-icon amber">His</span><span><strong>Brasil República</strong><small>4 para revisar</small></span><i>84%</i></div>
        </div>
      </div>
      <div className="float-chip chip-ai"><span>✦</span> Material pronto</div>
      <div className="float-chip chip-fsrs"><span>↗</span> FSRS ajustado</div>
    </div>
  );
}

function StoryVisual() {
  return (
    <div className="story-visual" data-story-visual data-step="0" aria-hidden="true">
      <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
      <div className="source-card source-pdf"><span>PDF</span><strong>Biologia celular</strong><small>32 páginas</small></div>
      <div className="source-card source-note"><span>TXT</span><strong>Minhas anotações</strong><small>Colado agora</small></div>
      <div className="magic-core"><Image src="/logo-lumina.svg" width={125} height={81} alt="" /><span /></div>
      <div className="format-card format-flash"><span>01</span><strong>Flashcards</strong><small>Revisão ativa</small></div>
      <div className="format-card format-quiz"><span>02</span><strong>Quiz</strong><small>Teste imediato</small></div>
      <div className="format-card format-audio"><span>03</span><strong>Áudio</strong><small>Reforço leve</small></div>
      <div className="review-card"><small>FRENTE</small><strong>Qual é a função da mitocôndria?</strong><span>Toque para revelar</span></div>
      <div className="schedule-ring"><span><strong>91%</strong><small>retenção</small></span></div>
      <div className="device desktop-device"><div /><span>Lumina web</span></div>
      <div className="device phone-device"><div><Image src="/logo-lumina.svg" width={120} height={78} alt="" /></div><span>Lumina app</span></div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <LandingInteractions />
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="site-header" data-header>
        <Brand />
        <nav aria-label="Navegação principal"><a href="#como-funciona">Como funciona</a><a href="#recursos">Recursos</a><a href="#escolas">Para escolas</a></nav>
        <a className="button button-small button-ghost" href="/dashboard/">Acessar dashboard <span aria-hidden="true">↗</span></a>
      </header>

      <main id="conteudo">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-aurora" aria-hidden="true" data-aurora /><div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy reveal">
            <Eyebrow>IA para estudar, não para complicar</Eyebrow>
            <h1 id="hero-title">Seu material de estudo, <em>finalmente estudando com você.</em></h1>
            <p className="hero-lead">Envie o conteúdo. A Lumina organiza, transforma e lembra o que revisar — para você gastar energia aprendendo, não montando planilhas.</p>
            <div className="hero-actions"><a className="button button-primary" href="#como-funciona">Ver como funciona <span aria-hidden="true">↓</span></a><a className="button button-secondary" href="/dashboard/">Acessar dashboard</a></div>
            <StoreBadges />
          </div>
          <ProductPreview />
          <div className="scroll-cue" aria-hidden="true"><span />role para descobrir</div>
        </section>

        <div className="trust-marquee" aria-label="Recursos principais"><div className="marquee-track">
          {[0, 1].map((group) => <span className="marquee-group" key={group}><b>FLASHCARDS INTELIGENTES</b><i>✦</i><b>QUIZZES PERSONALIZADOS</b><i>✦</i><b>ÁUDIO PARA REVISAR</b><i>✦</i><b>REPETIÇÃO ESPAÇADA FSRS</b><i>✦</i></span>)}
        </div></div>

        <section className="story" id="como-funciona" data-story aria-labelledby="story-title">
          <div className="story-sticky">
            <div className="story-topline"><Eyebrow dark>Do material à memória</Eyebrow><p><strong data-step-counter>01</strong> / 04</p></div>
            <div className="story-layout">
              <div className="story-copies">
                {storySteps.map((step, index) => <article className={`story-copy${index === 0 ? " is-active" : ""}`} data-story-copy={index} key={step.chapter}>
                  <p className="chapter">{step.chapter}</p><h2 id={index === 0 ? "story-title" : undefined}>{step.title}</h2><p>{step.text}</p>
                </article>)}
              </div>
              <StoryVisual />
            </div>
            <div className="story-progress" aria-hidden="true"><span data-story-progress /></div>
          </div>
        </section>

        <section className="bento-section section-pad" id="recursos" aria-labelledby="resources-title">
          <div className="section-heading reveal"><Eyebrow dark>Feito para o estudo real</Eyebrow><h2 id="resources-title">Tecnologia quando ajuda.<br /><em>Silêncio quando não precisa.</em></h2><p>Uma interface que mostra o próximo passo, reduz decisões e deixa o conteúdo ocupar o centro.</p></div>
          <div className="bento-grid">
            <article className="bento bento-main reveal"><div className="bento-copy"><span className="number">01</span><h3>Revisão que se adapta</h3><p>Errou, achou difícil ou dominou? Cada resposta recalibra o calendário com FSRS.</p></div><div className="rating-demo"><button>Errei<small>10 min</small></button><button>Difícil<small>3 dias</small></button><button>Bom<small>8 dias</small></button><button>Fácil<small>21 dias</small></button></div></article>
            <article className="bento bento-purple reveal"><span className="bento-icon">✦</span><h3>IA com revisão humana</h3><p>Você confere e edita antes de transformar geração em material de verdade.</p><div className="spark-lines"><i /><i /><i /></div></article>
            <article className="bento bento-mint reveal"><span className="bento-icon">◎</span><h3>Progresso sem culpa</h3><p>Métricas úteis para ajustar o ritmo — não para criar ansiedade.</p><div className="mini-chart">{Array.from({ length: 7 }, (_, index) => <i key={index} />)}</div></article>
            <article className="bento bento-wide reveal"><div><span className="number">04</span><h3>Um baralho, várias formas de voltar ao conteúdo.</h3><p>Flashcards, quiz e áudio compartilham a mesma base, sem criar três rotinas paralelas.</p></div><div className="mode-pills"><span>Flashcards</span><span>Quiz</span><span>Áudio</span></div></article>
          </div>
        </section>

        <section className="school-section section-pad" id="escolas" aria-labelledby="schools-title"><div className="school-card reveal">
          <div className="school-copy"><Eyebrow>Lumina para escolas</Eyebrow><h2 id="schools-title">Acompanhe a turma.<br /><em>Sem vigiar o aluno.</em></h2><p>Distribua acessos, organize materiais e enxergue adesão e evolução em um panorama claro para coordenação e professores.</p><a className="button button-light" href="mailto:contato@luminadeck.com.br?subject=Lumina%20Deck%20para%20minha%20escola">Conversar sobre minha escola <span aria-hidden="true">↗</span></a></div>
          <div className="school-dashboard" aria-hidden="true"><div className="school-head"><span>Panorama da escola</span><i>Este mês</i></div><div className="school-metrics"><span><small>Alunos ativos</small><strong>184</strong><i>+12%</i></span><span><small>Revisões</small><strong>3.842</strong><i>+28%</i></span></div><div className="school-bars">{Array.from({ length: 8 }, (_, index) => <i key={index} />)}</div><div className="school-foot">{["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((day) => <span key={day}>{day}</span>)}</div></div>
        </div></section>

        <section className="closing section-pad" aria-labelledby="closing-title"><div className="closing-orb" aria-hidden="true"><Image src="/logo-lumina.svg" width={150} height={97} alt="" /></div><Eyebrow dark>Seu próximo estudo começa aqui</Eyebrow><h2 id="closing-title">Mais clareza.<br /><em>Menos atrito.</em></h2><p>Estamos preparando o acesso público ao dashboard. Entre para acompanhar o lançamento.</p><div className="hero-actions"><a className="button button-primary" href="/dashboard/">Acessar dashboard</a><a className="button button-secondary" href="mailto:contato@luminadeck.com.br">Falar com a Lumina</a></div><StoreBadges dark /></section>
      </main>

      <footer><Brand footer /><p>Aprender fica mais leve quando cada revisão tem um porquê.</p><div><a href="mailto:contato@luminadeck.com.br">Contato</a><a href="/dashboard/">Dashboard</a><span>© 2026 Lumina Deck</span></div></footer>
    </>
  );
}
