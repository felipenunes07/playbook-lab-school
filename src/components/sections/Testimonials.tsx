import { Reveal } from "../ui/Reveal";
import { TESTIMONIALS } from "../../data/site";

/**
 * Built, but renders nothing while TESTIMONIALS is empty. The project
 * contains no real client quotes, and a landing page must not ship
 * fabricated ones. Add entries to src/data/site.ts and the section
 * appears with no further changes.
 */
export function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="band band--lg band--sand" id="clientes" aria-labelledby="testimonials-title">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">Clientes</p>
          <h2 id="testimonials-title" className="h2">
            O que nossos clientes dizem.
          </h2>
        </header>

        <ul className="testimonials-grid">
          {TESTIMONIALS.map((item, i) => (
            <Reveal key={item.name} as="li" order={i} className="testimonial-card">
              <figure>
                <p className="testimonial-highlight">{item.highlight}</p>
                <blockquote className="testimonial-quote">{item.quote}</blockquote>
                <figcaption className="testimonial-author">
                  {item.avatar ? (
                    <img src={item.avatar} alt="" width={44} height={44} loading="lazy" />
                  ) : null}
                  <span>
                    <strong>{item.name}</strong>
                    <em>
                      {item.role}, {item.company}
                    </em>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
