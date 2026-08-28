import { Reveal } from "../ui/Reveal";
import { Arrow } from "../ui/Button";
import { AUTHORITY, TEACHING } from "../../data/site";

export function Authority() {
  return (
    <section className="authority band" id="sobre" aria-labelledby="authority-title">
      <div className="container authority-grid">
        <Reveal className="authority-heading">
          <p className="eyebrow">{AUTHORITY.eyebrow}</p>
          <h2 id="authority-title" className="h2">
            {AUTHORITY.headline[0]} <span>{AUTHORITY.headline[1]}</span>
          </h2>
        </Reveal>

        <Reveal className="authority-copy" order={1}>
          <p className="lead">{AUTHORITY.lead}</p>
          {AUTHORITY.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <blockquote>{AUTHORITY.quote}</blockquote>
        </Reveal>
      </div>

      <div className="container">
        <Reveal className="stat-panel">
          <dl className="stat-row">
            {AUTHORITY.stats.map((stat) => (
              <div key={stat.value}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <div className="container teaching-inline" role="group" aria-labelledby="teaching-title">
        <Reveal className="teaching-intro">
          <p className="eyebrow">{TEACHING.eyebrow}</p>
          <h3 id="teaching-title">{TEACHING.headline}</h3>
          <p>{TEACHING.lead}</p>
        </Reveal>
        <div className="teaching-links">
          {TEACHING.items.map((item, index) => (
            <Reveal key={item.kind} order={index}>
              <a className="teaching-link" href={item.href} target="_blank" rel="noopener noreferrer">
                <span className="teaching-kind">{item.kind}</span>
                <strong>{item.title}</strong>
                <span>{item.body}</span>
                <em>{item.cta} <Arrow /></em>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
