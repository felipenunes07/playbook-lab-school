import { Reveal } from "../ui/Reveal";
import { PROBLEM, WHY_TRAIN } from "../../data/site";

export function Problem() {
  return (
    <>
      <section className="why band" id="por-que-treinar" aria-labelledby="why-title">
        <div className="container">
          <Reveal className="why-head">
            <div>
              <p className="eyebrow">{WHY_TRAIN.eyebrow}</p>
              <h2 id="why-title" className="h2">{WHY_TRAIN.headline}</h2>
            </div>
            <p className="lead">{WHY_TRAIN.lead}</p>
          </Reveal>

          <ol className="why-reasons">
            {WHY_TRAIN.reasons.map((reason, index) => (
              <Reveal as="li" key={reason.title} order={index}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{reason.title}</h3>
                <p>{reason.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="pain band band--surface" id="problema" aria-labelledby="pain-title">
        <div className="container pain-grid">
          <Reveal className="pain-head">
            <p className="eyebrow">{PROBLEM.eyebrow}</p>
            <h2 id="pain-title" className="h2">{PROBLEM.headline}</h2>
            <p className="lead">{PROBLEM.lead}</p>
          </Reveal>

          <ol className="pain-list">
            {PROBLEM.symptoms.map((symptom, index) => (
              <Reveal as="li" key={symptom.title} order={index}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{symptom.title}</h3>
                  <p>{symptom.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
