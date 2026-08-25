import { Reveal } from "../ui/Reveal";
import { Arrow } from "../ui/Button";
import { Check } from "../ui/Check";
import { CONTACT_URL, PROGRAMS, PROGRAMS_HEAD } from "../../data/site";

/**
 * Tese e oferta na MESMA seção, e os três programas lado a lado.
 *
 * Duas correções que vieram direto da call:
 *
 * 1. Eram duas seções. O Victor: "'ferramenta sozinha não gera ROI',
 *    daí uma [frase] e logo embaixo os programas... 'três formas de
 *    instalar essa capacidade' isso aí SOME, e o AI Foundations, o AI
 *    não sei o quê fica incorporado na seção anterior." Ou seja: a
 *    tese virou o título dos programas, o segundo título morreu.
 *
 * 2. Eu tinha empilhado os três em linhas. "Esses aí eu acho que dá
 *    pra ficar meio que do lado do outro, sabe? Não embaixo do outro.
 *    E daí uma breve descrição e daí [ver] programa, pra ele abrir
 *    uma aba nova."
 *
 * Nenhum é marcado como destaque: não são planos de assinatura, e
 * destacar o do meio inventaria uma recomendação que a oferta não faz.
 */
export function Programs() {
  return (
    <section className="programs band band--lg" id="programas" aria-labelledby="programs-title">
      <div className="container">
        <Reveal className="section-head programs-head">
          <p className="eyebrow">{PROGRAMS_HEAD.eyebrow}</p>
          <h2 id="programs-title" className="h2">{PROGRAMS_HEAD.headline}</h2>
          <p className="lead">{PROGRAMS_HEAD.lead}</p>
        </Reveal>

        <div className="programs-grid">
          {PROGRAMS.map((program, index) => (
            <Reveal
              as="article"
              id={program.id}
              key={program.id}
              className="program"
              order={index}
            >
              <div className="program-head">
                <h3 className="program-name">{program.name}</h3>
                <span className="program-format">{program.format}</span>
              </div>

              <p className="program-title">{program.title}</p>
              <p className="program-copy">{program.body}</p>

              <div className="spec">
                <p className="spec-label">No programa</p>
                <ul aria-label={`O que entra em ${program.name}`}>
                  {program.tags.map((tag) => (
                    <li key={tag}>
                      <Check />
                      <span><strong>{tag}</strong></span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="program-for">{program.forWho}</p>

              <a
                href={CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="program-cta"
              >
                {PROGRAMS_HEAD.cta} <Arrow />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
