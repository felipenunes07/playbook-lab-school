import { Reveal } from "../ui/Reveal";
import { WHY_NOW } from "../../data/site";

/**
 * Fechamento de ROI. A "sala branca": a única banda 100% branca da
 * página, delimitada por hairlines. Antes era 100% laranja — medido,
 * essa banda sozinha respondia por 8,5% da área da página em cor
 * saturada e puxava toda a percepção para "quente". Sem contador, sem
 * vagas, sem prazo.
 */
export function WhyNow() {
  return (
    <section className="band band--xl band--room why-now" aria-labelledby="why-now-title">
      <div className="container">
        <div className="why-now-top">
          <p className="eyebrow">{WHY_NOW.eyebrow}</p>
          <h2 id="why-now-title" className="h2 stacked-title why-now-title">
            {WHY_NOW.headline.map((line, i) => (
              <span key={line} className={i === 1 ? "is-quiet" : undefined}>
                {line}
              </span>
            ))}
          </h2>
          <p className="lead why-now-body">{WHY_NOW.body}</p>
        </div>

        <ol className="bridge" aria-label="Do investimento ao ROI">
          {WHY_NOW.bridge.map((item, i) => (
            <Reveal key={item.step} as="li" order={i} className="bridge-item">
              <span className="bridge-index">{String(i + 1).padStart(2, "0")}</span>
              <span className="bridge-step">{item.step}</span>
              <span className="bridge-note">{item.note}</span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
