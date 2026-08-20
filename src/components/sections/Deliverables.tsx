import { Reveal } from "../ui/Reveal";
import { DELIVERABLES } from "../../data/site";

/** Responde "o que eu realmente recebo?" — pessoas de um lado, sistemas do outro. */
export function Deliverables() {
  return (
    <section
      className="band band--xl deliverables"
      id="entregas"
      aria-labelledby="deliverables-title"
    >
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">{DELIVERABLES.eyebrow}</p>
          <h2 id="deliverables-title" className="h2 stacked-title">
            {DELIVERABLES.headline.map((line, i) => (
              <span key={line} className={i === 1 ? "is-muted" : undefined}>
                {line}
              </span>
            ))}
          </h2>
          <p className="lead">{DELIVERABLES.lead}</p>
        </header>

        <div className="deliverables-grid">
          {DELIVERABLES.columns.map((col, i) => (
            <Reveal key={col.kind} order={i} className="deliverable">
              <div className="deliverable-head">
                <span className="mono-label">{col.kind}</span>
                <span className="deliverable-rule" aria-hidden="true" />
              </div>
              <h3 className="deliverable-title">{col.title}</h3>
              <ul className="deliverable-list">
                {col.items.map((item) => (
                  <li key={item}>
                    <span className="deliverable-tick" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
