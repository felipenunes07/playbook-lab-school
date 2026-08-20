import { PRACTITIONERS } from "../../data/site";
import { Reveal } from "../ui/Reveal";

/**
 * Um dos três momentos memoráveis da página. Split editorial com a foto
 * grande, crop assimétrico, moldura de acento e caption monospace.
 *
 * A foto real ainda não existe no projeto — nenhuma fotografia de
 * equipe, workshop ou founder foi encontrada em nenhuma pasta. O frame
 * renderiza como placeholder explicitamente sinalizado, com as
 * instruções de troca visíveis, em vez de receber um stock genérico
 * fingindo ser a equipe.
 */
export function Practitioners() {
  const { image, quote } = PRACTITIONERS;

  return (
    <section className="band band--xl practitioners-band" id="autoridade" aria-labelledby="why-title">
      <div className="container practitioners">
        <div className="practitioners-copy">
          <p className="eyebrow">{PRACTITIONERS.eyebrow}</p>
          <h2 id="why-title" className="h2">
            {PRACTITIONERS.headline}
          </h2>
          <p className="practitioners-statement">{PRACTITIONERS.statement}</p>
          <p className="practitioners-body">{PRACTITIONERS.body}</p>
        </div>

        <Reveal className="practitioners-media">
          <figure className="portrait">
            {image.src ? (
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
            ) : (
              <div className="portrait-placeholder" role="img" aria-label={image.alt}>
                <span className="mono-label">Foto pendente</span>
                <p>
                  Substituir por fotografia editorial real — founders, equipe,
                  workshop ou implementação com cliente.
                </p>
                <code>PRACTITIONERS.image.src</code>
              </div>
            )}
            <figcaption className="mono-label">
              Playbook Lab · practitioners
            </figcaption>
          </figure>
        </Reveal>
      </div>

      <div className="container">
        <Reveal as="figure" className="big-quote">
          <div className="big-quote-row">
            <span className="mono-label">{quote.beforeLabel}</span>
            <p className="big-quote-before">“{quote.before}”</p>
          </div>
          <div className="big-quote-row big-quote-row--accent">
            <span className="mono-label">{quote.afterLabel}</span>
            <p className="big-quote-after">“{quote.after}”</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
