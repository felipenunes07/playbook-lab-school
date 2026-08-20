import { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { ToolMark, TOOLS } from "../ui/ToolMark";
import { CTA, CONTACT_URL, HERO } from "../../data/site";

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
        <div className="container hero-inner">
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
