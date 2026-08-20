import { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { ToolMark, TOOLS } from "../ui/ToolMark";
import { CTA, CONTACT_URL, HERO } from "../../data/site";

const ROTATE_MS = 3400;

const APPLICATIONS = [
  { area: "Operações", from: "Tarefa manual", to: "Workflow com IA" },
  { area: "Conhecimento", from: "Documentos dispersos", to: "Contexto consultável" },
  { area: "Times comerciais", from: "Informação solta", to: "Decisão assistida" },
] as const;

export function Hero() {
  const [index, setIndex] = useState(0);
  const tool = TOOLS[index];

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % TOOLS.length);
    }, ROTATE_MS);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-shell">
        <div className="container hero-inner">
          <div className="hero-atmosphere" aria-hidden="true">
            <span className="hero-orbit hero-orbit--outer"><i /><i /><i /></span>
            <span className="hero-orbit hero-orbit--inner"><i /><i /></span>
          </div>
          <p className="eyebrow hero-eyebrow">
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            {HERO.eyebrow}
          </p>

          <h1 id="hero-title" className="display hero-title">
            <span className="visually-hidden">{HERO.headlineA11y}</span>
            <span aria-hidden="true">
              <span className="hero-line hero-line--tool">
                {HERO.headlineBefore}{" "}
                <span
                  className="tool-chip"
                  style={{ ["--tool" as string]: tool.colorInk }}
                >
                  <ToolMark tool={tool.id} size={30} />
                  <span key={tool.id}>{tool.label}</span>
                </span>
              </span>
              <span className="hero-line">{HERO.headlineAfter}</span>
              <span className="hero-line hero-line--payoff">{HERO.headlineRoi}</span>
            </span>
          </h1>

          <p className="lead hero-sub">{HERO.subheadline}</p>

          <div className="hero-actions">
            <Button href={CONTACT_URL} variant="primary">
              {CTA.primary}
            </Button>
            <Button href="#programas" variant="secondary">
              {CTA.secondary}
            </Button>
          </div>
          <p className="hero-micro">{HERO.microcopy}</p>

          <div className="hero-tool-rail" aria-label="Ferramentas compatíveis">
            {TOOLS.map((item, itemIndex) => (
              <button
                key={item.id}
                type="button"
                className={`hero-tool ${itemIndex === index ? "is-active" : ""}`}
                onClick={() => setIndex(itemIndex)}
                aria-pressed={itemIndex === index}
                style={{ ["--tool" as string]: item.colorInk }}
              >
                <ToolMark tool={item.id} size={18} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="hero-dossier" aria-label="Estrutura do programa in-company">
            <div className="hero-dossier-head">
              <span>PL / PROGRAMA IN-COMPANY</span>
              <strong><i aria-hidden="true" /> Mandato de transformação</strong>
              <span>CONFIDENCIAL / 01</span>
            </div>
            <div className="hero-dossier-grid">
              <article>
                <span>01 / DIAGNÓSTICO</span>
                <strong>Onde a IA muda o trabalho</strong>
                <p>Ferramentas, processos e oportunidades priorizadas.</p>
              </article>
              <article>
                <span>02 / CAPACITAÇÃO</span>
                <strong>Aprendizado sobre casos reais</strong>
                <p>Sessões construídas com o contexto da sua equipe.</p>
              </article>
              <article>
                <span>03 / IMPLEMENTAÇÃO</span>
                <strong>Capacidade em operação</strong>
                <p>Skills, workflows e agentes que continuam em uso.</p>
              </article>
            </div>
            <div className="hero-dossier-foot" aria-hidden="true">
              <span>SUA OPERAÇÃO</span><i>→</i><span>CAPACIDADE INSTALADA</span><i>→</i><strong>ROI</strong>
            </div>
          </div>
        </div>

        <div className="container application-strip">
          <span className="visually-hidden">Exemplos de aplicação: tarefa manual em workflow com IA, documentos dispersos em contexto consultável e informação solta em decisão assistida.</span>
          <p aria-hidden="true">Exemplos de aplicação</p>
          <div className="application-live" key={APPLICATIONS[index].area} aria-hidden="true">
            <span>{APPLICATIONS[index].area}</span>
            <strong>{APPLICATIONS[index].from}</strong>
            <i>→</i>
            <strong>{APPLICATIONS[index].to}</strong>
          </div>
          <div className="application-tool" aria-hidden="true" style={{ ["--tool" as string]: tool.colorInk }}>
            <ToolMark tool={tool.id} size={17} />
            <span>{tool.label} em contexto</span>
          </div>
        </div>
      </div>
    </section>
  );
}
