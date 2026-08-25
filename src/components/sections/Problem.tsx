import { Reveal } from "../ui/Reveal";
import { PROBLEM } from "../../data/site";

/**
 * Frase grande à esquerda, os três sintomas espremidos à direita —
 * o layout que o próprio Victor desenhou na call olhando uma seção
 * que não tinha funcionado: "talvez se isso tiver espremido do lado
 * direito, e do lado esquerdo essa frase maior ali, talvez funcione."
 *
 * Os sintomas ficaram na vertical, não em três caixas horizontais:
 * "dá pra só transformar a orientação, ao invés de horizontal na
 * vertical". E sem ícone — ícone em caixinha foi o que ele apontou
 * como cara de página gerada por IA.
 *
 * É a seção que ele mais quer: "mostrar que a gente sabe qual é o
 * problema que o cara está vivendo."
 */
export function Problem() {
  return (
    <section
      className="problem band band--lg band--surface"
      id="problema"
      aria-labelledby="problem-title"
    >
      <div className="container problem-inner">
        <Reveal className="problem-side">
          <p className="eyebrow">{PROBLEM.eyebrow}</p>
          <h2 id="problem-title" className="h2 problem-statement">
            {PROBLEM.statement.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="lead">{PROBLEM.lead}</p>

          <p className="problem-close">
            {PROBLEM.close.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
        </Reveal>

        <ol className="problem-list">
          {PROBLEM.symptoms.map((symptom, index) => (
            <Reveal as="li" key={symptom.title} order={index}>
              <span className="problem-num" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="h3">{symptom.title}</h3>
                <p>{symptom.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
