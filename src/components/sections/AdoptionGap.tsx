import { Reveal } from "../ui/Reveal";
import { ADOPTION_GAP } from "../../data/site";

/**
 * Copy preservada integralmente — era o ponto forte da versão anterior.
 * O que mudou é só a arte: os índices viram números enormes que sangram
 * atrás do texto, e as colunas perdem a caixa branca. Vira composição
 * editorial em vez de três cards.
 */
export function AdoptionGap() {
  return (
    <section className="band band--xl band--stone gap" id="gap" aria-labelledby="gap-title">
      <div className="container">
        <header className="section-head gap-head">
          <p className="eyebrow">{ADOPTION_GAP.eyebrow}</p>
          <h2 id="gap-title" className="h2">
            {ADOPTION_GAP.headline}
          </h2>
          <p className="lead">{ADOPTION_GAP.lead}</p>
        </header>

        <ol className="gap-grid">
          {ADOPTION_GAP.problems.map((problem, i) => (
            <Reveal key={problem.index} as="li" order={i} className="gap-item">
              <span className="gap-index" aria-hidden="true">
                {problem.index}
              </span>
              <div className="gap-item-body">
                <h3 className="gap-title">{problem.title}</h3>
                <p className="gap-body">{problem.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="gap-statement">
          <p>
            {ADOPTION_GAP.statement[0]} <span>{ADOPTION_GAP.statement[1]}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
