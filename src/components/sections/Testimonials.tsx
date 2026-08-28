import { Reveal } from "../ui/Reveal";
import { TESTIMONIALS, TESTIMONIALS_HEAD } from "../../data/site";

/**
 * Depoimentos. Victor, olhando o site de um concorrente na call:
 * "mas olha, depoimentos é legal, essa parte toda tem [os
 * depoimentos] deles palestrando".
 *
 * RENDERIZA NULL enquanto `TESTIMONIALS` estiver vazio — nenhuma
 * citação inventada entra no ar. Para ligar: preencher o array em
 * src/data/site.ts com quote, nome, cargo e empresa reais.
 */
export function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="quotes band band--lg" aria-labelledby="quotes-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{TESTIMONIALS_HEAD.eyebrow}</p>
          <h2 id="quotes-title" className="h2">{TESTIMONIALS_HEAD.headline}</h2>
        </Reveal>

        <div className="cards" style={{ ["--cols" as string]: Math.min(TESTIMONIALS.length, 3) }}>
          {TESTIMONIALS.map((item, index) => (
            <Reveal as="figure" key={item.name} className="card quote" order={index}>
              <blockquote>{item.quote}</blockquote>
              <figcaption>
                <strong>{item.name}</strong>
                <span>{item.role} · {item.company}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
