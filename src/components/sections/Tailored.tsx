import { Reveal } from "../ui/Reveal";
import { TAILORED } from "../../data/site";

/** Quantas colunas a régua de cada faixa usa. */
const COLS: Record<string, number> = { tools: 3, cases: 3, level: 4 };

/**
 * Três FAIXAS numeradas, não três cards.
 *
 * A versão anterior usava a mesma `.card` de Programas: três cards
 * brancos em fila, título, parágrafo, filete, label e lista com check.
 * Colada embaixo de Programas, lia como a mesma seção duas vezes — a
 * segunda não acrescentava nada visualmente.
 *
 * O erro foi meu de sistema: escrevi em base.css que "toda seção repete
 * a fórmula" e apliquei à letra. A repetição organiza quando as seções
 * estão separadas; em duas seções adjacentes ela vira eco.
 *
 * Aqui o ritmo muda: sai "três cards atravessando" e entra "três faixas
 * descendo", numeradas, sem card e sem sombra. É o formato que o Victor
 * elogiou na call ("sessões tipo ponto dois, ponto três, ponto quatro").
 * E a largura cheia deixa cada conjunto de itens virar uma régua
 * horizontal — no caso dos níveis, uma progressão de verdade.
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

        <ol className="lanes">
          {TAILORED.columns.map((column, index) => (
            <Reveal as="li" key={column.key} className="lane" order={index % 2}>
              <span className="lane-num" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="lane-copy">
                <h3 className="lane-title">{column.title}</h3>
                <p>{column.body}</p>
              </div>

              <div className="lane-scale">
                <p className="spec-label">{column.listLabel}</p>
                <ul
                  aria-label={`${column.listLabel} — ${column.title}`}
                  style={{ ["--cols" as string]: COLS[column.key] ?? 3 }}
                >
                  {column.items.map((item) => (
                    <li key={item.label}>
                      <strong>{item.label}</strong>
                      {"note" in item && item.note ? <em>{item.note}</em> : null}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
