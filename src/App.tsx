import type { ReactNode } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { ClientLogos } from "./components/sections/ClientLogos";
import { Button, Arrow } from "./components/ui/Button";
import { Reveal } from "./components/ui/Reveal";
import { ToolMark, TOOLS } from "./components/ui/ToolMark";
import { CountUp } from "./components/ui/CountUp";
import {
  ADOPTION_GAP,
  CONTACT_URL,
  DELIVERABLES,
  FALSE_BELIEFS,
  FINAL_CTA,
  PRACTITIONERS,
  PROGRAMS,
  TAILORED,
  WHY_NOW,
} from "./data/site";

const DECISION_QUESTIONS = [
  ["É para mim?", "Para empresas que já investiram em IA e precisam transformar acesso em capacidade."],
  ["Vocês entendem o problema?", "A licença chegou. O trabalho, os hábitos e os processos ainda não mudaram."],
  ["Vocês conseguem resolver?", "Quem conduz a capacitação também implementa IA em operações reais."],
  ["O que fica depois?", "Pessoas capacitadas, workflows prontos e ativos que continuam em uso."],
  ["Por que agora?", "O investimento já existe. Cada mês de subutilização adia o retorno."],
] as const;

const METHOD = [
  ["Diagnóstico", "Entendemos ferramentas, maturidade e onde o trabalho realmente trava."],
  ["Capacitação", "A equipe aprende usando processos, documentos e casos reais da empresa."],
  ["Construção", "O conhecimento vira Skills, workflows, automações e novos padrões de trabalho."],
  ["Adoção", "Acompanhamos aplicação, removemos bloqueios e medimos sinais de mudança."],
] as const;

function Kicker({ index, children }: { index?: string; children: ReactNode }) {
  return (
    <p className="section-kicker">
      {index ? <span>{index}</span> : null}
      {children}
    </p>
  );
}

function PractitionersSection() {
  return (
    <section className="practitioners-section" id="autoridade" aria-labelledby="practitioners-title">
      <div className="container practitioners-grid-v2">
        <Reveal as="figure" className="practitioners-image">
          <img src="/brand/executive-workshop.jpg" alt="Equipe reunida em um workshop executivo colaborativo" loading="lazy" decoding="async" />
          <figcaption><span>Presença humana</span>Capacitação ao vivo, aplicada ao contexto da empresa.</figcaption>
        </Reveal>

        <Reveal className="practitioners-copy" order={1}>
          <Kicker index="01">{PRACTITIONERS.eyebrow}</Kicker>
          <h2 id="practitioners-title" className="section-title">Quem ensina também implementa.</h2>
          <p className="practitioners-statement">{PRACTITIONERS.statement}</p>
          <p>{PRACTITIONERS.body}</p>
          <dl className="practitioner-stats">
            <div><dt><CountUp value="45+" /></dt><dd>empresas atendidas</dd></div>
            <div><dt><CountUp value="230+" /></dt><dd>projetos entregues</dd></div>
          </dl>
          <blockquote>“Não começamos perguntando quais funcionalidades ensinar. Começamos perguntando como o trabalho deveria funcionar com IA.”</blockquote>
        </Reveal>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a href="#conteudo" className="skip-link">Ir para o conteúdo</a>
      <Navbar />

      <main id="conteudo">
        <Hero />
        <ClientLogos />
        <PractitionersSection />

        <section className="decision-section" id="como-funciona" aria-labelledby="decision-title">
          <div className="container decision-layout">
            <Reveal className="decision-intro">
              <Kicker index="02">O gap de adoção</Kicker>
              <h2 id="decision-title" className="section-title">
                Comprar IA foi a parte fácil.
                <span>Fazer o trabalho mudar é a transformação.</span>
              </h2>
              <p className="section-copy">{ADOPTION_GAP.lead}</p>
            </Reveal>

            <div className="decision-ledger" aria-label="Perguntas que a página responde">
              {DECISION_QUESTIONS.map(([question, answer], index) => (
                <Reveal key={question} className="decision-row" order={index % 3}>
                  <span className="decision-index">0{index + 1}</span>
                  <h3>{question}</h3>
                  <p>{answer}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="programs-section" id="programas" aria-labelledby="programs-title">
          <div className="container">
            <Reveal className="programs-head">
              <div>
                <Kicker index="03">Programas</Kicker>
                <h2 id="programs-title" className="section-title">Um caminho para cada nível de maturidade.</h2>
              </div>
              <p className="section-copy">Da primeira adoção à formação de pessoas capazes de construir soluções internas com IA.</p>
            </Reveal>

            <div className="programs-grid-v2">
              {PROGRAMS.map((program, index) => (
                <Reveal
                  as="article"
                  id={program.id}
                  key={program.id}
                  className={`program-card-v2 ${index === 1 ? "is-featured" : ""}`}
                  order={index}
                >
                  <div className="program-card-top">
                    <span className="program-number">0{index + 1}</span>
                    <span className="program-name">{program.name}</span>
                  </div>
                  <div className={`program-visual program-visual--${index + 1}`} aria-label={`Progressão do programa ${program.name}`}>
                    <div className="program-visual-head">
                      <span>Mapa de capacidade</span>
                      <strong>{program.name}</strong>
                    </div>
                    <div className="program-visual-path">
                      {program.flow.map((step, stepIndex) => (
                        <div key={step}>
                          <span>0{stepIndex + 1}</span>
                          <strong>{step}</strong>
                          {stepIndex < program.flow.length - 1 ? <i aria-hidden="true">→</i> : null}
                        </div>
                      ))}
                    </div>
                  </div>
                  <h3>{program.title}</h3>
                  <p>{program.body}</p>
                  <ul className="program-tags" aria-label="Tópicos do programa">
                    {program.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" className="program-cta">
                    {program.cta} <Arrow />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="tailored-section" aria-labelledby="tailored-title">
          <div className="container tailored-grid">
            <Reveal className="tailored-copy">
              <Kicker index="04">{TAILORED.eyebrow}</Kicker>
              <h2 id="tailored-title" className="section-title">
                {TAILORED.headline[0]}<span>{TAILORED.headline[1]}</span>
              </h2>
              <p>{TAILORED.lead}</p>
              <Button href={CONTACT_URL} variant="onDark">Desenhar um programa</Button>
            </Reveal>

            <Reveal className="work-system" order={1}>
              <div className="work-system-tools" aria-label="Ferramentas que sua equipe já usa">
                {TOOLS.map((tool) => (
                  <span key={tool.id} style={{ ["--tool" as string]: tool.color }}>
                    <ToolMark tool={tool.id} size={19} />{tool.label}
                  </span>
                ))}
              </div>
              <div className="work-system-core">
                <span>Trabalho real da sua equipe</span>
                <strong>Processos, contexto e casos de uso</strong>
              </div>
              <div className="work-system-output">
                <span>Skills</span><span>Workflows</span><span>Automações</span><span>Agentes</span>
              </div>
              <p className="work-system-caption">A ferramenta muda. A capacidade instalada permanece.</p>
            </Reveal>
          </div>

          <div className="container method-grid">
            {METHOD.map(([title, body], index) => (
              <Reveal key={title} className="method-item" order={index % 3}>
                <span>0{index + 1}</span><h3>{title}</h3><p>{body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="deliverables-section" id="entregaveis" aria-labelledby="deliverables-title">
          <div className="container">
            <Reveal className="deliverables-head">
              <div>
                <Kicker index="05">{DELIVERABLES.eyebrow}</Kicker>
                <h2 id="deliverables-title" className="section-title">{DELIVERABLES.headline[0]}<span>{DELIVERABLES.headline[1]}</span></h2>
              </div>
              <p className="section-copy">{DELIVERABLES.lead}</p>
            </Reveal>
            <div className="deliverables-grid-v2">
              {DELIVERABLES.columns.map((column, columnIndex) => (
                <Reveal key={column.kind} as="article" className="deliverable-card-v2" order={columnIndex}>
                  <span className="deliverable-kind">{column.kind}</span>
                  <h3>{column.title}</h3>
                  <ul>{column.items.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="beliefs-section" aria-labelledby="beliefs-title">
          <div className="container beliefs-layout">
            <Reveal className="beliefs-intro">
              <Kicker index="06">As objeções reais</Kicker>
              <h2 id="beliefs-title" className="section-title">Não vendemos uma aula bonita.<span>Construímos uma mudança que continua.</span></h2>
            </Reveal>
            <div className="belief-list">
              {[FALSE_BELIEFS.pace, FALSE_BELIEFS.implementation, FALSE_BELIEFS.maturity].map((belief, index) => (
                <Reveal key={belief.eyebrow} className="belief-row" order={index}>
                  <span>0{index + 1}</span><p>{belief.eyebrow}</p><h3>{belief.headline}</h3><div>{belief.body}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="why-section" aria-labelledby="why-title">
          <div className="container why-grid">
            <Reveal className="why-copy">
              <Kicker index="07">{WHY_NOW.eyebrow}</Kicker>
              <h2 id="why-title" className="section-title">{WHY_NOW.headline[0]}<span>{WHY_NOW.headline[1]}</span></h2>
              <p className="section-copy">{WHY_NOW.body}</p>
            </Reveal>
            <Reveal className="roi-bridge" order={1}>
              {WHY_NOW.bridge.map((item, index) => (
                <div key={item.step} className={index === WHY_NOW.bridge.length - 1 ? "is-result" : ""}>
                  <span>0{index + 1}</span><strong>{item.step}</strong><p>{item.note}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="final-section" aria-labelledby="final-title">
          <div className="container final-inner">
            <Reveal>
              <Kicker>Próximo passo</Kicker>
              <h2 id="final-title">{FINAL_CTA.headline}</h2>
              <p>{FINAL_CTA.lead}</p>
              <div className="final-actions"><Button href={CONTACT_URL} variant="onDark">Falar com a Playbook</Button><span>{FINAL_CTA.microcopy}</span></div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
