import { Reveal } from "../ui/Reveal";
import { Arrow } from "../ui/Button";
import { CASES, CASES_HEAD } from "../../data/site";

/**
 * Cases com antes/depois. Pedido explícito na call:
 *
 *   "colocar no site, que a gente tem pouca coisa de case no site"
 *   "PDF por cliente, explicando o contexto geral, tudo o que foi
 *    feito, resultados atingidos"
 *   "aí vem a chamadinha: olha como esse cliente passou de x pra y,
 *    cinco x aqui com automação"
 *
 * RENDERIZA NULL enquanto `CASES` estiver vazio. É a mesma regra que
 * já valia para depoimento e foto stock: omitir é melhor que fabricar.
 * Nenhum "de 5 horas para 15 segundos" entra no ar sem o dado real.
 *
 * Para ligar: preencher `CASES` em src/data/site.ts. O layout, o
 * responsivo e o contraste já estão prontos e medidos.
 */
export function Cases() {
  if (CASES.length === 0) return null;

  return (
    <section className="cases band band--lg band--surface" id="cases" aria-labelledby="cases-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{CASES_HEAD.eyebrow}</p>
          <h2 id="cases-title" className="h2">{CASES_HEAD.headline}</h2>
          <p className="lead">{CASES_HEAD.lead}</p>
        </Reveal>

        <div className="cards" style={{ ["--cols" as string]: Math.min(CASES.length, 3) }}>
          {CASES.map((item, index) => (
            <Reveal as="article" key={item.company} className="card case" order={index}>
              <p className="eyebrow case-sector">{item.sector}</p>
              <h3 className="h3">{item.company}</h3>
              <p>{item.context}</p>

              {/* O antes/depois no formato que ele descreveu na call. */}
              <div className="case-metric">
                <span className="case-metric-label">{item.metric.label}</span>
                <p>
                  <s>{item.metric.before}</s>
                  <i aria-hidden="true">→</i>
                  <strong>{item.metric.after}</strong>
                </p>
              </div>

              <p className="case-built">{item.built}</p>

              {item.href ? (
                <a
                  className="case-cta"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver o case completo <Arrow />
                </a>
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
