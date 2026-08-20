import { useEffect, useState } from "react";
import { Reveal } from "../ui/Reveal";
import { FALSE_BELIEFS } from "../../data/site";

const SWAP_MS = 1700;

/**
 * "IA muda rápido demais." — statement editorial, não card.
 *
 * O visual carrega o argumento: a coluna da esquerda troca de palavra
 * o tempo todo, a da direita nunca muda. É a tese da seção desenhada,
 * e amarra de volta no hero (onde a ferramenta também troca).
 */
export function FalseBeliefPace() {
  const { pace } = FALSE_BELIEFS;
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => {
      if (!document.hidden) setI((v) => (v + 1) % pace.changing.length);
    }, SWAP_MS);
    return () => window.clearInterval(t);
  }, [pace.changing.length]);

  return (
    <section className="band band--xl belief-pace" aria-labelledby="pace-title">
      <div className="container">
        <Reveal className="belief-inner">
          <p className="eyebrow belief-eyebrow">“{pace.eyebrow}”</p>

          <h2 id="pace-title" className="belief-answer">
            {pace.headline}
          </h2>

          <p className="belief-statement">
            {pace.statement.map((line, idx) => (
              <span key={line} className={idx === 1 ? "is-accent" : undefined}>
                {line}
              </span>
            ))}
          </p>

          <div className="belief-split">
            <div className="belief-col belief-col--changes">
              <span className="mono-label">O que muda</span>
              <span className="belief-rotator" aria-hidden="true">
                <span key={pace.changing[i]}>{pace.changing[i]}</span>
              </span>
              <span className="visually-hidden">{pace.changing.join(", ")}</span>
            </div>

            <div className="belief-col belief-col--stays">
              <span className="mono-label">O que fica</span>
              <p>{pace.stable}</p>
            </div>
          </div>

          <p className="belief-body">{pace.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
