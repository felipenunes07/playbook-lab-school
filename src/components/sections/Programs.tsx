import { Arrow } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { BuildersArt, FoundationsArt, WorkflowsArt } from "../art/ProgramArt";
import {
  BUILDER_LADDER,
  CONTACT_URL,
  PROGRAMS,
  PROGRAMS_HEAD,
} from "../../data/site";

/**
 * Assimetria intencional: Foundations e Workflows dividem a primeira
 * linha, Builders ocupa a largura toda como card-feature. A razão
 * visual é o conteúdo — Builders é o único que carrega uma progressão
 * (User → Operator → Builder), e é o espaço extra que permite mostrá-la.
 *
 * Os cards apontam para CONTACT_URL: as páginas por programa ainda não
 * existem e um link morto seria pior.
 */
export function Programs() {
  const [foundations, workflows, builders] = PROGRAMS;

  return (
    <section className="band band--xl programs" id="programas" aria-labelledby="programs-title">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">{PROGRAMS_HEAD.eyebrow}</p>
          <h2 id="programs-title" className="h2">
            {PROGRAMS_HEAD.headline}
          </h2>
          <p className="lead">{PROGRAMS_HEAD.lead}</p>
        </header>

        <ul className="programs-grid">
          {[foundations, workflows].map((program, i) => (
            <ProgramCard
              key={program.id}
              program={program}
              order={i}
              art={i === 0 ? <FoundationsArt /> : <WorkflowsArt />}
            />
          ))}

          <Reveal as="li" order={2} className="program-card program-card--feature" id={builders.id}>
            <a
              href={CONTACT_URL}
              className="program-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="program-feature-copy">
                <span className="eyebrow program-name">{builders.name}</span>
                <h3 className="h3 program-title">{builders.title}</h3>
                <p className="program-body">{builders.body}</p>
                <ul className="program-tags">
                  {builders.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <span className="program-cta">
                  {builders.cta}
                  <Arrow />
                </span>
              </div>

              <div className="program-feature-art">
                <BuildersArt />
              </div>

              <ol className="ladder" aria-label="Progressão de capacidade">
                {BUILDER_LADDER.map((rung, i) => (
                  <li key={rung.label} style={{ ["--i" as string]: i }}>
                    <span className="ladder-index">{String(i + 1).padStart(2, "0")}</span>
                    <span className="ladder-label">{rung.label}</span>
                    <span className="ladder-note">{rung.note}</span>
                  </li>
                ))}
              </ol>
            </a>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}

function ProgramCard({
  program,
  order,
  art,
}: {
  program: (typeof PROGRAMS)[number];
  order: number;
  art: React.ReactNode;
}) {
  return (
    <Reveal as="li" order={order} className="program-card" id={program.id}>
      <a href={CONTACT_URL} className="program-link" target="_blank" rel="noopener noreferrer">
        <span className="eyebrow program-name">{program.name}</span>
        <h3 className="h3 program-title">{program.title}</h3>
        <p className="program-body">{program.body}</p>

        <div className="program-art-well">{art}</div>

        <ol className="program-flow" aria-hidden="true">
          {program.flow.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        <ul className="program-tags">
          {program.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <span className="program-cta">
          {program.cta}
          <Arrow />
        </span>
      </a>
    </Reveal>
  );
}
