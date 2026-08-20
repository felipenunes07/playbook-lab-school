import { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { ToolMark, TOOLS } from "../ui/ToolMark";
import { CTA, CONTACT_URL, HERO, PROOF } from "../../data/site";

const ROTATE_MS = 3400;

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
        <div className="container hero-grid">
          <div className="hero-inner">
            <div className="hero-overline">
              <p className="eyebrow hero-eyebrow">
                <span className="hero-eyebrow-dot" aria-hidden="true" />
                {HERO.eyebrow}
              </p>
              <span className="hero-edition">Estratégia · Capacitação · Implementação</span>
            </div>

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
              <Button href={CONTACT_URL} variant="primary" arrow>
                {CTA.primary}
              </Button>
              <Button href="#programas" variant="secondary">
                {CTA.secondary}
              </Button>
            </div>
            <p className="hero-micro"><span aria-hidden="true">↳</span>{HERO.microcopy}</p>
          </div>

          <aside className="hero-mandate" aria-label="Arquitetura do programa">
            <div className="mandate-head">
              <span>Mandato de transformação</span>
              <span>PL / 01</span>
            </div>
            <div className="mandate-statement">
              <span>De acesso contratado</span>
              <strong>à capacidade instalada.</strong>
            </div>
            <ol className="mandate-steps">
              <li><span>01</span><div><strong>Diagnóstico</strong><p>Onde a IA pode mudar o trabalho.</p></div></li>
              <li><span>02</span><div><strong>Capacitação</strong><p>Aprendizado sobre casos reais.</p></div></li>
              <li><span>03</span><div><strong>Implementação</strong><p>Workflows entram em operação.</p></div></li>
            </ol>
            <div className="mandate-proof">
              {PROOF.stats.map((stat) => (
                <div key={stat.value}><strong>{stat.value}</strong><span>{stat.label}</span></div>
              ))}
            </div>
            <div className="hero-tool-rail" aria-label="Ferramentas compatíveis">
              {TOOLS.map((item, itemIndex) => (
                <button
                  key={item.id}
                  type="button"
                  className={`hero-tool ${itemIndex === index ? "is-active" : ""}`}
                  onClick={() => setIndex(itemIndex)}
                  aria-pressed={itemIndex === index}
                  style={{ ["--tool" as string]: item.color }}
                >
                  <ToolMark tool={item.id} size={17} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </aside>
        </div>

        <div className="container hero-outcomes" aria-label="Da licença ao resultado">
          <div>
            <span>01</span>
            <strong>Acesso</strong>
            <p>As ferramentas já estão contratadas.</p>
          </div>
          <div>
            <span>02</span>
            <strong>Capacitação</strong>
            <p>O time aprende sobre o próprio trabalho.</p>
          </div>
          <div>
            <span>03</span>
            <strong>ROI</strong>
            <p>Novos workflows entram em operação.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
