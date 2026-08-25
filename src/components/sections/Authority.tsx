import { Reveal } from "../ui/Reveal";
import { AUTHORITY } from "../../data/site";

/**
 * A seção que o Victor apontou na Stripe e chamou de "linda":
 * título centralizado, uma frase curta embaixo, e daí uma fileira de
 * caixinhas — "item, item dois, item três". Sobre degradê suave.
 *
 * O que NÃO veio junto foi o gráfico generativo que a Stripe põe
 * embaixo: "não com essa paradinha aqui, parece ouriço do mar, pô."
 * No lugar dele entra a foto, que é o que ele pediu para o sobre nós:
 * "coloca lá uma foto, umas pessoas sendo treinadas, e explica sobre
 * nós."
 *
 * Os três números da empresa moram aqui, juntos. Espalhados por duas
 * seções eles se diluíam; numa fileira só, eles somam.
 */
export function Authority() {
  return (
    <section className="authority band band--lg" id="autoridade" aria-labelledby="authority-title">
      <div className="authority-wash" aria-hidden="true" />

      <div className="container authority-inner">
        <Reveal className="authority-head">
          <p className="eyebrow">{AUTHORITY.eyebrow}</p>
          <h2 id="authority-title" className="h2 authority-title">
            {AUTHORITY.headline[0]}{" "}
            <span>{AUTHORITY.headline[1]}</span>
          </h2>
          <p className="lead">{AUTHORITY.lead}</p>
        </Reveal>

        <Reveal as="dl" className="stat-row" order={1}>
          {AUTHORITY.stats.map((stat) => (
            <div key={stat.value}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </Reveal>

        <div className="authority-story">
          <Reveal as="figure" className="authority-figure">
            <img
              src={AUTHORITY.image.src}
              alt={AUTHORITY.image.alt}
              loading="lazy"
              decoding="async"
            />
            <figcaption>{AUTHORITY.image.caption}</figcaption>
          </Reveal>

          <Reveal className="authority-copy" order={1}>
            {AUTHORITY.body.map((paragraph) => (
              <p key={paragraph} className="authority-para">{paragraph}</p>
            ))}
            <blockquote className="authority-quote">{AUTHORITY.quote}</blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
