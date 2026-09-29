import Image from "next/image";
import { Brand } from "@/components/Brand";
import { LandingInteractions } from "@/components/LandingInteractions";

const learningSteps = [
  {
    title: "Envie seu material",
    text: "PDF, slide, texto, foto ou anotação.",
  },
  {
    title: "A Lumina transforma",
    text: "Seu conteúdo vira flashcards e quizzes.",
  },
  {
    title: "Pratique de verdade",
    text: "Responda, erre, acerte e descubra o que realmente sabe.",
  },
  {
    title: "Revise na hora certa",
    text: "A Lumina organiza o que precisa voltar antes que você esqueça.",
  },
];

const features = [
  {
    icon: "▤",
    title: "Flashcards inteligentes",
    text: "Transforme seu material em prática ativa.",
  },
  {
    icon: "?",
    title: "Quizzes",
    text: "Descubra o que você realmente sabe.",
  },
  {
    icon: "↻",
    title: "Revisões inteligentes",
    text: "O conteúdo volta na hora certa.",
  },
  {
    icon: "◎",
    title: "Pontos fracos",
    text: "Veja onde precisa melhorar.",
  },
  {
    icon: "✓",
    title: "Estudo do dia",
    text: "Saiba exatamente o que estudar agora.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

function Oito({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Image
      className={className}
      src="/logo-lumina.svg"
      width={768}
      height={765}
      alt="Oito, o mascote azul da Lumina, segurando flashcards"
      priority={priority}
    />
  );
}

function LearningStoryVisual() {
  return (
    <div className="story-visual" data-story-visual data-step="0" aria-hidden="true">
      <div className="story-halo" />
      <Oito className="story-oito" />
      <div className="visual-step visual-step-0">
        <span className="source-chip source-pdf"><b>PDF</b>Biologia celular</span>
        <span className="source-chip source-photo"><b>FOTO</b>Anotação da aula</span>
        <span className="source-chip source-text"><b>TEXTO</b>Resumo colado</span>
      </div>
      <div className="visual-step visual-step-1">
        <span className="result-card result-flash"><small>FLASHCARD</small><b>Qual é a função da mitocôndria?</b></span>
        <span className="result-card result-quiz"><small>QUIZ</small><b>Teste o que você entendeu</b></span>
      </div>
      <div className="visual-step visual-step-2">
        <span className="answer-card"><small>SUA RESPOSTA</small><b>Produzir energia para a célula.</b><em>✓ Boa resposta</em></span>
        <span className="feedback-chip">Aprendi</span>
      </div>
      <div className="visual-step visual-step-3">
        <span className="review-calendar"><small>PRÓXIMA REVISÃO</small><b>Amanhã, 18:30</b><i><em /><em /><em /><em /></i></span>
        <span className="memory-chip">Oito te avisa</span>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <LandingInteractions />
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <header className="site-header" data-header>
        <Brand />
        <nav aria-label="Navegação principal">
          <a href="#como-funciona">Como funciona</a>
          <a href="#recursos">Recursos</a>
          <a href="#oito">Conheça o Oito</a>
        </nav>
        <a className="button button-small button-secondary" href="/dashboard/">
          Entrar
        </a>
      </header>

      <main id="conteudo">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <Eyebrow>APRENDA DE VERDADE</Eyebrow>
            <h1 id="hero-title">Pare de estudar do jeito errado.</h1>
            <p className="hero-lead">
              Transforme seus <strong>PDFs, slides, fotos e anotações</strong> em
              flashcards e quizzes prontos para estudar.
            </p>
            <p>
              A Lumina te ajuda a <strong>aprender de verdade, saber o que revisar e
              lembrar quando você mais precisa.</strong>
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="/dashboard/">
                Começar grátis
              </a>
              <span className="free-note"><b>100% grátis.</b> Sem cartão de crédito.</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Seu plano de estudo na Lumina">
            <span className="hero-orb" aria-hidden="true" />
            <Oito className="hero-oito" priority />
            <div className="today-card">
              <div className="today-card-head">
                <span>SEU ESTUDO DE HOJE</span>
                <b>18 min</b>
              </div>
              <strong>Você já sabe por onde começar.</strong>
              <div className="today-progress"><span /></div>
              <div className="today-task is-current"><i>1</i><span><b>12 revisões</b><small>Primeiro passo</small></span><em>Começar</em></div>
              <div className="today-task"><i>2</i><span><b>8 novos flashcards</b><small>Depois da revisão</small></span></div>
              <div className="today-task"><i>3</i><span><b>1 quiz recomendado</b><small>Para fechar o estudo</small></span></div>
            </div>
          </div>
        </section>

        <section className="recognition section-pad" aria-labelledby="recognition-title">
          <div className="section-heading centered">
            <Eyebrow>RECONHECER NÃO É LEMBRAR</Eyebrow>
            <h2 id="recognition-title">
              Você estuda.
              <span className="title-break">Mas será que está aprendendo?</span>
            </h2>
            <p>
              Reler, grifar e fazer resumos podem dar a sensação de aprendizado.
              Mas reconhecer uma informação não significa conseguir lembrá-la sozinho.
            </p>
          </div>
          <div className="recall-card">
            <div className="recall-passive">
              <span>LEITURA PASSIVA</span>
              <p>A resposta parece familiar quando está na sua frente.</p>
              <div className="fake-highlight">
                <span>A mitocôndria produz energia para a célula.</span>
              </div>
              <small>“Ah, isso eu sei.”</small>
            </div>
            <div className="recall-arrow" aria-hidden="true">→</div>
            <div className="recall-active">
              <span>RECUPERAÇÃO ATIVA</span>
              <p>Você tenta buscar a resposta sem olhar.</p>
              <div className="question-card">Qual é a função da mitocôndria?</div>
              <small>É aí que o aprendizado acontece.</small>
            </div>
          </div>
          <div className="recall-statement">
            <p>É aí que entra a <strong>Recuperação Ativa.</strong></p>
            <h3>Pare de apenas reconhecer.<br />Treine seu cérebro para lembrar.</h3>
          </div>
        </section>

        <section className="how-story" id="como-funciona" data-story aria-labelledby="how-title">
          <div className="how-sticky">
            <div className="story-topline">
              <Eyebrow>SEM COMPLICAÇÃO</Eyebrow>
              <p><strong data-step-counter>01</strong> / 04</p>
            </div>
            <div className="story-layout">
              <div className="story-copies">
                <div className="story-intro">
                  <h2 id="how-title">Como funciona?</h2>
                  <p>Do seu material ao estudo do dia em quatro passos claros.</p>
                </div>
                {learningSteps.map((step, index) => (
                  <article
                    className={`story-copy${index === 0 ? " is-active" : ""}`}
                    data-story-copy={index}
                    key={step.title}
                  >
                    <span className="step-number">{index + 1}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                    {index === learningSteps.length - 1 ? <strong>Você só precisa estudar.</strong> : null}
                  </article>
                ))}
              </div>
              <LearningStoryVisual />
            </div>
            <div className="story-progress" aria-hidden="true"><span data-story-progress /></div>
          </div>
        </section>

        <section className="before-after section-pad" aria-labelledby="change-title">
          <div className="section-heading centered">
            <Eyebrow>MENOS ATRITO. MAIS CLAREZA.</Eyebrow>
            <h2 id="change-title">De “tenho muita coisa para estudar”...</h2>
            <p className="heading-punch">para “sei exatamente o que fazer agora”.</p>
          </div>
          <div className="comparison-grid">
            <article className="comparison-card before-card">
              <span className="comparison-label">ANTES</span>
              <ul>
                <li>PDFs enormes.</li>
                <li>Releitura.</li>
                <li>Dúvida sobre por onde começar.</li>
                <li>Revisões esquecidas.</li>
              </ul>
            </article>
            <article className="comparison-card after-card">
              <span className="comparison-label">COM A LUMINA</span>
              <ul>
                <li>Flashcards e quizzes prontos.</li>
                <li>Pontos fracos identificados.</li>
                <li>Revisões organizadas.</li>
                <li>Um plano claro para hoje.</li>
              </ul>
            </article>
          </div>
          <p className="comparison-result">De “acho que sei” para <strong>“eu consigo lembrar”.</strong></p>
        </section>

        <section className="daily section-pad" aria-labelledby="daily-title">
          <div className="daily-copy">
            <Eyebrow>UM PASSO DE CADA VEZ</Eyebrow>
            <h2 id="daily-title">Abra a Lumina e saiba o que estudar hoje.</h2>
            <p>Menos tempo planejando.<br /><strong>Mais tempo aprendendo.</strong></p>
          </div>
          <div className="daily-board">
            <div className="daily-score"><span>HOJE</span><strong>18</strong><small>min de estudo</small></div>
            <ul>
              <li><i>12</i><span><b>revisões</b><small>prioridade agora</small></span></li>
              <li><i>8</i><span><b>novos flashcards</b><small>conteúdo novo</small></span></li>
              <li><i>1</i><span><b>quiz recomendado</b><small>teste seu domínio</small></span></li>
            </ul>
          </div>
        </section>

        <section className="oito-section section-pad" id="oito" aria-labelledby="oito-title">
          <div className="oito-stage">
            <span className="oito-bubble bubble-one">Hora de revisar!</span>
            <Oito className="oito-large" />
            <span className="oito-bubble bubble-two">Você consegue.</span>
          </div>
          <div className="oito-copy">
            <Eyebrow>SEU COMPANHEIRO DE ESTUDOS</Eyebrow>
            <h2 id="oito-title">Conheça o Oito.</h2>
            <h3>Seu fiel escudeiro nos estudos.</h3>
            <p>O Oito acompanha sua rotina, lembra suas revisões e ajuda você a não perder o ritmo.</p>
            <div className="oito-reminders">
              <p>Errou? <strong>Oito lembra.</strong></p>
              <p>Está na hora de revisar? <strong>Oito te avisa.</strong></p>
            </div>
            <div className="brand-promise"><b>A Lumina organiza.</b><b>O Oito lembra.</b><b>Você aprende.</b></div>
          </div>
        </section>

        <section className="features section-pad" id="recursos" aria-labelledby="features-title">
          <div className="section-heading centered">
            <Eyebrow>TUDO NO MESMO RITMO</Eyebrow>
            <h2 id="features-title">Tudo para você aprender melhor.</h2>
          </div>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <article className={`feature-card feature-${index + 1}`} key={feature.title}>
                <span className="feature-icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="audience section-pad" aria-labelledby="audience-title">
          <div>
            <Eyebrow>PARA O QUE VOCÊ QUISER APRENDER</Eyebrow>
            <h2 id="audience-title">Aprenda muito. Esqueça menos.</h2>
            <p><strong>ENEM e Vestibulares. Faculdade. Concursos. Idiomas.</strong></p>
            <p>Transforme seu conteúdo em <strong>flashcards, quizzes e revisões inteligentes</strong> para aprender de verdade e lembrar depois.</p>
            <p className="audience-promise"><b>A Lumina organiza.</b> Você aprende.</p>
          </div>
          <div className="subject-cloud" aria-hidden="true">
            <span>Biologia</span><span>Direito</span><span>Inglês</span><span>História</span><span>Medicina</span><span>Matemática</span>
          </div>
        </section>

        <section className="price section-pad" aria-labelledby="price-title">
          <Oito className="price-oito" />
          <div>
            <Eyebrow>SEM PEGADINHA</Eyebrow>
            <h2 id="price-title">E quanto custa?</h2>
            <p className="price-answer">Nada.</p>
            <p>Hoje, a Lumina é <strong>100% grátis.</strong></p>
            <p>Entre, envie seu material e comece a estudar.</p>
            <a className="button button-primary" href="/dashboard/">Criar minha conta grátis</a>
          </div>
        </section>

        <section className="closing section-pad" aria-labelledby="closing-title">
          <Oito className="closing-oito" />
          <Eyebrow>SEU PRÓXIMO PASSO</Eyebrow>
          <h2 id="closing-title">Estudar mais nem sempre é a resposta.<br /><span>Estudar melhor é.</span></h2>
          <div className="closing-steps"><span>Transforme seu material.</span><span>Pratique de verdade.</span><span>Revise na hora certa.</span></div>
          <p>E saiba exatamente o que estudar todos os dias.</p>
          <div className="closing-promise"><b>A Lumina organiza.</b><b>O Oito lembra.</b><b>Você aprende.</b></div>
          <p><strong>100% grátis.</strong></p>
          <a className="button button-light" href="/dashboard/">Começar a estudar grátis</a>
        </section>
      </main>

      <footer>
        <Brand footer />
        <p><strong>Lumina Deck</strong><br /><em>Esquecer é uma escolha.</em></p>
        <div><a href="mailto:contato@luminadeck.com.br">Contato</a><a href="/dashboard/">Entrar</a><span>© 2026 Lumina Deck</span></div>
      </footer>
    </>
  );
}
