import { CLIENT_LOGOS, PROOF } from "../../data/site";

/**
 * Banda de autoridade, logo depois do hero. Os logos são reais — vieram
 * do carousel de clientes da própria playbooklab.com.br, e todos são
 * versões brancas com transparência, feitas para fundo escuro. Por isso
 * a banda é grafite: é onde eles funcionam, e coloca uma quebra de ritmo
 * a 100px de scroll em vez de deixar duas telas claras seguidas.
 *
 * Os `alt` estão vazios de propósito. Os arquivos originais não trazem o
 * nome das empresas (`download-8-1-1-1.png`), e um alt inventado seria
 * pior que nenhum: o significado está na faixa como conjunto, que tem o
 * rótulo do grupo. Ver README — os nomes reais devem entrar aqui.
 */
export function ClientLogos() {
  return (
    <section className="clients" aria-labelledby="clients-title">
      <div className="container clients-inner">
        <div className="clients-head">
          <h2 id="clients-title" className="eyebrow">
            {PROOF.clientsLabel}
          </h2>
          <p className="clients-lead">{PROOF.lead}</p>
        </div>

        <ul className="clients-strip">
          {CLIENT_LOGOS.map((src) => (
            <li key={src}>
              <img src={src} alt="" loading="lazy" decoding="async" />
            </li>
          ))}
        </ul>

        <dl className="clients-stats">
          {PROOF.stats.map((stat) => (
            <div key={stat.value}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
