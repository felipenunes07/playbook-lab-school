import { Reveal } from "../ui/Reveal";
import { FALSE_BELIEFS } from "../../data/site";

/**
 * Os números 45+/230+ passaram para a banda escura de clientes, onde
 * fazem par com os logos e viram um só bloco de autoridade. O que fica
 * aqui é a régua de maturidade, que faz trabalho de conversão: responde
 * "meu time já é avançado" no ponto do scroll em que a dúvida aparece.
 */
export function SocialProof() {
  const { maturity } = FALSE_BELIEFS;

  return (
    <section className="band maturity-band" aria-labelledby="maturity-title">
      <div className="container">
        <Reveal className="maturity">
          <div className="maturity-head">
            <p className="eyebrow belief-eyebrow">“{maturity.eyebrow}”</p>
            <h2 id="maturity-title" className="maturity-answer">
              {maturity.headline}
            </h2>
            <p className="maturity-body">{maturity.body}</p>
          </div>

          <ol className="maturity-scale" aria-label="Níveis de entrada no programa">
            {maturity.scale.map((level, i) => (
              <li key={level.label} style={{ ["--i" as string]: i }}>
                <span className="maturity-node" aria-hidden="true" />
                <span className="maturity-label">{level.label}</span>
                <span className="maturity-note">{level.note}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
