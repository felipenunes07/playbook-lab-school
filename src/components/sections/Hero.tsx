import { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { TOOLS } from "../ui/ToolMark";
import { WorkSurfaces } from "../art/WorkSurfaces";
import { CTA, CONTACT_URL, HERO } from "../../data/site";

const ROTATE_MS = 3400;

/**
 * Primeira dobra: só tipografia. O painel-artefato que ficava à direita
 * foi removido — lia como caixa de software, e uma caixa de UI ao lado da
 * headline é exatamente o que faz uma oferta de alto ticket parecer
 * produto. O que sustenta a dobra agora é escala, silêncio e o nome da
 * ferramenta que o visitante já contratou.
 *
 * A ferramenta aparece como nome na cor da marca com um sublinhado
 * fino, não como chip com borda e fundo — o chip lia como adesivo
 * promocional.
 *
 * A rotação para em `prefers-reduced-motion` e com a aba oculta. Toda a
 * headline visual é aria-hidden; leitores de tela recebem uma única
 * versão linear.
 */
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
      <div className="container hero-inner">
        <p className="eyebrow hero-eyebrow">{HERO.eyebrow}</p>

        <h1 id="hero-title" className="display hero-title">
          <span className="visually-hidden">{HERO.headlineA11y}</span>
          <span aria-hidden="true">
            <span className="hero-line">
              {HERO.headlineBefore}{" "}
              <span
                className="tool-name"
                style={{ ["--tool" as string]: tool.colorInk }}
              >
                <span key={tool.id}>{tool.label}</span>
              </span>
            </span>
            <span className="hero-line">{HERO.headlineAfter}</span>
            <span className="hero-line hero-line--payoff">{HERO.headlineRoi}</span>
          </span>
        </h1>

        <div className="hero-base">
          <div className="hero-copy">
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
          </div>

          <WorkSurfaces tool={tool.id} toolColor={tool.color} />
        </div>
      </div>
    </section>
  );
}
