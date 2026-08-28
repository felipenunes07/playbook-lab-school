import { Reveal } from "../ui/Reveal";
import { FAQ as FAQ_DATA } from "../../data/site";

export function FAQ() {
  return (
    <section className="faq band band--surface" id="duvidas" aria-labelledby="faq-title">
      <div className="container faq-grid">
        <Reveal className="faq-head">
          <p className="eyebrow">{FAQ_DATA.eyebrow}</p>
          <h2 id="faq-title" className="h2">{FAQ_DATA.headline}</h2>
        </Reveal>

        <div className="faq-list">
          {FAQ_DATA.items.map((item, index) => (
            <Reveal as="details" key={item.question} order={index > 2 ? 2 : index}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
