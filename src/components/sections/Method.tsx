import { Reveal } from "../ui/Reveal";
import { METHOD } from "../../data/site";

/**
 * Como um programa in-company roda, em sequência.
 *
 * Responde a pergunta que a página não respondia — "como isso
 * acontece dentro da minha empresa?" — e é onde o caráter de IA
 * aparece em concreto: nos artefatos que ficam (Skills, workflows,
 * automações, agentes), não em ícone de robô nem em grade de fundo.
 *
 * Usa o vocabulário de banda aprovado, mas com uma diferença que
 * importa: esta tem DIREÇÃO. Os quatro passos ficam pendurados numa
 * régua contínua em degradê de aurora, com o marcador de cada um
 * sobre ela. As outras duas bandas da página são colunas paralelas;
 * uma sequência lê diferente de uma comparação.
 */
export function Method() {
  return (
    <section className="method band band--lg band--surface" id="como-roda" aria-labelledby="method-title">
      <div className="container">
        <Reveal className="section-head section-head--split">
          <p className="eyebrow">{METHOD.eyebrow}</p>
          <h2 id="method-title" className="h2">{METHOD.headline}</h2>
          <p className="lead">{METHOD.lead}</p>
        </Reveal>

        <ol className="track" aria-label="Sequência de um programa in-company">
          {METHOD.steps.map((step, index) => (
            <Reveal as="li" key={step.label} order={index} className="track-step">
              <span className="track-dot" aria-hidden="true" />
              <span className="track-num" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="track-label">{step.label}</h3>
              <p>{step.body}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="assets" order={1}>
          <p className="spec-label">{METHOD.assetsLabel}</p>
          <p className="assets-list">{METHOD.assets.join(" · ")}</p>
        </Reveal>
      </div>
    </section>
  );
}
