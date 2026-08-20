import { Button } from "../ui/Button";
import { CTA, CONTACT_URL, FINAL_CTA } from "../../data/site";

/** Two buttons and a line of microcopy. No form, no countdown — this is an
 *  enterprise sale and the ask is a conversation. */
export function FinalCTA() {
  return (
    <section className="band band--lg final-cta" aria-labelledby="cta-title">
      <div className="container">
        <div className="section-head section-head--center">
          <h2 id="cta-title" className="h2">
            {FINAL_CTA.headline}
          </h2>
          <p className="lead">{FINAL_CTA.lead}</p>
        </div>
        <div className="final-cta-actions">
          <Button href={CONTACT_URL} variant="primary">
            {CTA.primary}
          </Button>
          <Button href="#programas" variant="secondary">
            {CTA.secondary}
          </Button>
        </div>
        <p className="final-cta-micro">{FINAL_CTA.microcopy}</p>
      </div>
    </section>
  );
}
