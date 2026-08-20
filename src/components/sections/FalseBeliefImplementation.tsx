import { Reveal } from "../ui/Reveal";
import { FALSE_BELIEFS } from "../../data/site";

/** "Meu time não vai implementar depois." — resposta curta + a sequência real. */
export function FalseBeliefImplementation() {
  const { implementation } = FALSE_BELIEFS;

  return (
    <section className="band band--lg belief-impl" aria-labelledby="impl-title">
      <div className="container">
        <Reveal className="belief-impl-inner">
          <div className="belief-impl-copy">
            <p className="eyebrow belief-eyebrow">“{implementation.eyebrow}”</p>
            <h2 id="impl-title" className="h2">
              {implementation.headline}
            </h2>
            <p className="lead">{implementation.body}</p>
          </div>

          <ol className="belief-steps" aria-label="Sequência do programa">
            {implementation.steps.map((step, i) => (
              <li key={step}>
                <span className="belief-step-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="belief-step-label">{step}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
