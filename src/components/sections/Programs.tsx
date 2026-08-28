import { Reveal } from "../ui/Reveal";
import { Arrow } from "../ui/Button";
import { CONTACT_URL, PROGRAMS, PROGRAMS_HEAD } from "../../data/site";

export function Programs() {
  return (
    <section className="programs band" id="programas" aria-labelledby="programs-title">
      <div className="container">
        <Reveal className="section-head programs-head">
          <p className="eyebrow">{PROGRAMS_HEAD.eyebrow}</p>
          <h2 id="programs-title" className="h2">{PROGRAMS_HEAD.headline}</h2>
          <p className="lead">{PROGRAMS_HEAD.lead}</p>
        </Reveal>

        <div className="program-list">
          {PROGRAMS.map((program, index) => (
            <Reveal as="article" id={program.id} key={program.id} className="program-row">
              <span className="program-index">{String(index + 1).padStart(2, "0")}</span>

              <div className="program-identity">
                <p className="program-format">{program.format}</p>
                <h3 className="program-name">{program.name}</h3>
                <p className="program-title">{program.title}</p>
              </div>

              <div className="program-summary">
                <p className="program-copy">{program.body}</p>
                <p className="program-includes">{program.tags.join(" · ")}</p>
                <p className="program-for">{program.forWho}</p>
                <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" className="program-cta">
                  {PROGRAMS_HEAD.cta} <Arrow />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
