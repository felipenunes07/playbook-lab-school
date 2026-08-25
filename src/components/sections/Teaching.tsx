import { Reveal } from "../ui/Reveal";
import { Arrow } from "../ui/Button";
import { TEACHING } from "../../data/site";

/**
 * Reversão de risco, e o lugar dos outros dois números.
 *
 * Sem número: 60+ e 2k+ subiram para a fileira única de Autoridade,
 * junto do 50+. Repetidos aqui, enfraqueceriam os dois lugares. O
 * trabalho desta seção é o link — "veja antes de contratar".
 *
 * Link com href "#" renderiza como texto, não link morto: a URL do
 * canal ainda não foi confirmada.
 */
export function Teaching() {
  return (
    <section className="teaching band band--lg" id="conteudos" aria-labelledby="teaching-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{TEACHING.eyebrow}</p>
          <h2 id="teaching-title" className="h2">{TEACHING.headline}</h2>
          <p className="lead">{TEACHING.lead}</p>
        </Reveal>

        <div className="cards" style={{ ["--cols" as string]: 2 }}>
          {TEACHING.items.map((item, index) => {
            const pending = item.href === "#";
            const external = item.href.startsWith("http");

            return (
              <Reveal as="article" key={item.kind} className="card teaching-card" order={index}>
                <p className="eyebrow teaching-kind">{item.kind}</p>
                <h3 className="h3">{item.title}</h3>
                <p>{item.body}</p>
                {pending ? (
                  <span className="teaching-cta is-pending">{item.cta}</span>
                ) : (
                  <a
                    className="teaching-cta"
                    href={item.href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {item.cta} <Arrow />
                  </a>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
