import { Arrow } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { RESOURCES } from "../../data/site";

/**
 * Risk reversal, framed as "evaluate our teaching before you buy" rather
 * than "recent blog posts". Cards carry no imagery — there are no real
 * thumbnails to use, and a placeholder image in each of three cards would
 * dominate the section.
 */
export function Resources() {
  return (
    <section
      className="band band--lg band--line-top"
      id="recursos"
      aria-labelledby="resources-title"
    >
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">{RESOURCES.eyebrow}</p>
          <h2 id="resources-title" className="h2">
            {RESOURCES.headline}
          </h2>
          <p className="lead">{RESOURCES.lead}</p>
        </header>

        <ul className="resources-grid">
          {RESOURCES.items.map((item, i) => {
            // A card whose URL is still a placeholder renders as plain content:
            // href="#" would scroll the visitor to the top of the page, which
            // reads as a broken link rather than a pending one.
            const isLive = item.href !== "#";
            const inner = (
              <>
                <span className="eyebrow resource-kind">{item.kind}</span>
                <h3 className="h3 resource-title">{item.title}</h3>
                <p className="resource-body">{item.body}</p>
                {isLive ? (
                  <span className="resource-cta">
                    {item.cta}
                    <Arrow />
                  </span>
                ) : (
                  <span className="resource-cta resource-cta--pending">
                    Link em breve
                  </span>
                )}
              </>
            );

            return (
              <Reveal
                key={item.title}
                as="li"
                order={i}
                className={`resource-card ${isLive ? "" : "resource-card--pending"}`.trim()}
              >
                {isLive ? (
                  <a
                    href={item.href}
                    className="resource-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="resource-link">{inner}</div>
                )}
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
