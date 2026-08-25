import { Reveal } from "../ui/Reveal";
import { TOOLS } from "../ui/tools";
import { TAILORED } from "../../data/site";

/**
 * A fórmula da Stripe que o Victor apontou na tela, literal:
 * "poderia ter título, subtítulo, daí uma frase de duas, três linhas,
 * menor. E daí algumas caixinhas falando de coisas — item 1, item 2,
 * item 3, item 4. Bem bonito."
 *
 * Sem ícone e sem pílula tingida: "essas caixinhas com esses ícones é
 * coisa [de IA]... a mesma estrutura, só que não parece web codado."
 * As ferramentas viraram uma linha de texto com meio-ponto — pílula de
 * fundo tingido em fila é a assinatura mais reconhecível de página
 * gerada por IA, e seis delas numa caixinha era o pior caso da página.
 */
export function Tailored() {
  return (
    <section
      className="tailored band band--lg"
      id="personalizacao"
      aria-labelledby="tailored-title"
    >
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{TAILORED.eyebrow}</p>
          <h2 id="tailored-title" className="h2">
            {TAILORED.headline[0]}{" "}
            <span>{TAILORED.headline[1]}</span>
          </h2>
          <p className="lead">{TAILORED.lead}</p>
        </Reveal>

        <div className="cards">
          {TAILORED.columns.map((column, index) => (
            <Reveal as="article" key={column.key} className="card" order={index}>
              <h3 className="h3">{column.title}</h3>
              <p>{column.body}</p>

              {column.key === "tools" ? (
                <p className="card-tools">
                  <span className="spec-label">Cobrimos</span>
                  {[...TOOLS.map((t) => t.label), "Copilot", "Workspace", "Microsoft 365"]
                    .join(" · ")}
                </p>
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
