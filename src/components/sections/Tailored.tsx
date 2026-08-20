import { Reveal } from "../ui/Reveal";
import { TAILORED } from "../../data/site";

/**
 * A principal quebra de ritmo da página: a única banda quase preta.
 * Grid visível no fundo, headline em escala grande, três colunas com
 * régua de acento. Sem diagrama — a copy já faz o argumento.
 */
export function Tailored() {
  return (
    <section
      className="band band--xl band--dark tailored"
      id="como-funciona"
      aria-labelledby="tailored-title"
    >

      <div className="container">
        <header className="section-head">
          <p className="eyebrow">{TAILORED.eyebrow}</p>
          <h2 id="tailored-title" className="h2 stacked-title tailored-title">
            {TAILORED.headline.map((line, i) => (
              <span key={line} className={i === 1 ? "is-muted" : undefined}>
                {line}
              </span>
            ))}
          </h2>
          <p className="lead">{TAILORED.lead}</p>
        </header>

        <ul className="tailored-cols">
          {TAILORED.columns.map((column, i) => (
            <Reveal key={column.title} as="li" order={i} className="tailored-col">
              <span className="tailored-col-rule" aria-hidden="true" />
              <span className="mono-label">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="tailored-col-title">{column.title}</h3>
              <p className="tailored-col-body">{column.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
