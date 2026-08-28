import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { CTA, CONTACT_URL, FINAL_CTA } from "../../data/site";

/**
 * Fecho em banda escura — o único bloco escuro da página, e o lugar
 * onde o verde de marca finalmente aparece em cheio.
 */
export function FinalCTA() {
  return (
    <section className="final band" aria-labelledby="final-title">
      <div className="container final-inner">
        <Reveal className="final-copy">
          <p className="eyebrow">{FINAL_CTA.eyebrow}</p>
          <h2 id="final-title" className="h2 final-statement">
            {FINAL_CTA.statement.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="lead">{FINAL_CTA.body}</p>
        </Reveal>

        <Reveal className="final-action" order={1}>
          <Button href={CONTACT_URL} variant="primary">{CTA.primary}</Button>
          <span className="final-micro">{FINAL_CTA.microcopy}</span>
        </Reveal>
      </div>
    </section>
  );
}
