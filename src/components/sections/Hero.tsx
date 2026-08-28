import { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { CLIENT_LOGOS, CTA, CONTACT_URL, HERO } from "../../data/site";
import { TOOLS } from "../ui/tools";

const HERO_LOGOS = CLIENT_LOGOS.slice(0, 6);

export function Hero() {
  const [toolIndex, setToolIndex] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    const interval = window.setInterval(() => {
      if (!document.hidden) setToolIndex((current) => (current + 1) % TOOLS.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, []);

  const activeTool = TOOLS[toolIndex];

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{HERO.eyebrow}</p>
          <h1 id="hero-title" className="display hero-title">
            <span className="visually-hidden">{HERO.headline}</span>
            <span aria-hidden="true">
              <span className="hero-title-use">
                Sua equipe já usa{" "}
                <span
                  className="hero-tool"
                  key={activeTool.id}
                  style={{ color: activeTool.colorInk }}
                >
                  {activeTool.label}.
                </span>
              </span>
              <span className="hero-title-outcome">Agora transforme isso em resultado.</span>
            </span>
          </h1>
          <p className="lead hero-lead">{HERO.subheadline}</p>

          <div className="hero-actions">
            <Button href={CONTACT_URL} variant="primary">{CTA.primary}</Button>
            <a className="hero-secondary" href="#programas">{CTA.secondary}</a>
          </div>
          <p className="hero-micro">{HERO.microcopy}</p>
        </div>

        <div
          className="education-visual"
          role="img"
          aria-label="Composição visual de um treinamento in-company da Playbook Lab, do contexto real à aplicação no trabalho"
        >
          <div className="education-fold education-fold--one" aria-hidden="true" />
          <div className="education-fold education-fold--two" aria-hidden="true" />

          <div className="education-brand" aria-hidden="true">
            <img src="/brand/playbooklab-logo-light.svg" alt="" />
            <small>EDUCAÇÃO CORPORATIVA</small>
          </div>

          <div className="education-board" aria-hidden="true">
            <span className="education-status"><i /> AULA EM ANDAMENTO</span>
            <strong>Treinamento<br />in-company</strong>
            <p>IA aplicada aos processos da sua equipe.</p>
          </div>

          <div className="education-route" aria-hidden="true">
            <span className="education-route-label">DA AULA AO TRABALHO</span>
            <ol>
              <li><span>01</span><strong>Contexto real</strong></li>
              <li><span>02</span><strong>Prática guiada</strong></li>
              <li><span>03</span><strong>Aplicação</strong></li>
            </ol>
          </div>

          <div className="education-tags" aria-hidden="true">
            <span>AO VIVO</span><span>POR ÁREA</span><span>HANDS-ON</span>
          </div>
        </div>
      </div>

      <div className="proof" role="group" aria-labelledby="proof-title">
        <div className="container proof-inner">
          <div className="proof-copy">
            <p className="eyebrow">Experiência em implementação</p>
            <h2 id="proof-title">Clientes de implementação — a base prática do que ensinamos.</h2>
          </div>
          <ul className="logo-grid" aria-label="Empresas atendidas em projetos de implementação pela Playbook Lab">
            {HERO_LOGOS.map((src) => (
              <li key={src}><img src={src} alt="" loading="eager" decoding="async" /></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
