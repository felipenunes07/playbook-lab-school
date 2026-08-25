import { Reveal } from "../ui/Reveal";
import { Check } from "../ui/Check";
import { TAILORED } from "../../data/site";

/**
 * A fórmula da Stripe que o Victor apontou na tela: "título,
 * subtítulo, daí uma frase de duas, três linhas, menor. E daí algumas
 * caixinhas falando de coisas — item 1, item 2, item 3. Bem bonito."
 *
 * Duas correções depois de olhar a seção renderizada:
 *
 * 1. Os cards 2 e 3 tinham título + três linhas e um buraco embaixo,
 *    enquanto o card 1 tinha uma lista. Cabeça desequilibrada e
 *    "espaço em branco sem nada". Agora os três carregam lista
 *    concreta — e ela responde a pergunta que o card levanta.
 * 2. A cabeça da seção ocupava metade da largura com a outra metade
 *    vazia. Virou duas colunas: título à esquerda, frase à direita.
 *
 * Sem ícone decorativo e sem pílula tingida. A marca de check é
 * informação — diz "isto entra".
 */
export function Tailored() {
  return (
    <section
      className="tailored band band--lg"
      id="personalizacao"
      aria-labelledby="tailored-title"
    >
      <div className="container">
        <Reveal className="section-head section-head--split">
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

              <div className="spec">
                <p className="spec-label">{column.listLabel}</p>
                <ul aria-label={`${column.listLabel} — ${column.title}`}>
                  {column.items.map((item) => (
                    <li key={item.label}>
                      <Check />
                      <span>
                        <strong>{item.label}</strong>
                        {"note" in item && item.note ? <em>{item.note}</em> : null}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
