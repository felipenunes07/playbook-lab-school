import { Reveal } from "../ui/Reveal";
import { TAILORED } from "../../data/site";

export function Tailored() {
  return (
    <section className="method band band--surface" id="como-funciona" aria-labelledby="method-title">
      <div className="container">
        <Reveal className="section-head method-head">
          <p className="eyebrow">{TAILORED.eyebrow}</p>
          <h2 id="method-title" className="h2">
            {TAILORED.headline[0]} <span>{TAILORED.headline[1]}</span>
          </h2>
          <p className="lead">{TAILORED.lead}</p>
        </Reveal>

        <ol className="method-steps">
          {TAILORED.steps.map((step, index) => (
            <Reveal as="li" key={step.title} order={index}>
              <span className="method-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
