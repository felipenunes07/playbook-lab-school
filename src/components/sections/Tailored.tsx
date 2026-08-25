import { Reveal } from "../ui/Reveal";
import { TAILORED } from "../../data/site";

/**
 * Uma banda de borda a borda, três colunas, nada mais.
 *
 * Terceira forma desta seção. As duas anteriores foram recusadas:
 *
 *  1. Três cards com lista e check — lia como Programas duas vezes.
 *  2. Três faixas numeradas — recusada também.
 *
 * Esta usa o único vocabulário aprovado nesta página: a banda de
 * números da Autoridade. Filetes horizontais correndo de borda a borda,
 * ZERO filete vertical (o "margem feia"), respiro grande, e o hover que
 * acende o filete verde.
 *
 * Não ecoa a Autoridade porque lá a banda é centrada e carrega números
 * gigantes; aqui é alinhada à esquerda e carrega título e prosa.
 *
 * Cada coluna tem três blocos de texto e nada além: título, parágrafo,
 * linha de detalhe. Sem card, sem borda, sem número, sem marca de item.
 * A versão com lista usava 13 filetes e 13 checks para dizer o que três
 * frases dizem.
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
      </div>

      {/* Fora do container: os filetes correm de borda a borda. */}
      <Reveal className="aspect-band">
        <div className="container aspect-row">
          {TAILORED.columns.map((column) => (
            <article key={column.key}>
              <h3 className="aspect-title">{column.title}</h3>
              <p className="aspect-body">{column.body}</p>
              <p className="aspect-detail">{column.detail}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
