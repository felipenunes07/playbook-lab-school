import { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { TOOLS } from "../ui/tools";
import { Aurora } from "../art/Aurora";
import { CLIENT_LOGOS, CTA, CONTACT_URL, HERO, PROOF } from "../../data/site";

const ROTATE_MS = 4200;

function LogoRow({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul className="marquee-row" aria-hidden={duplicate || undefined}>
      {CLIENT_LOGOS.map((src) => (
        <li key={src}>
          {/* alt vazio: os arquivos de origem não trazem o nome das
              empresas. A faixa toda é rotulada pelo h2 ao lado.

              `eager`, não `lazy`: a faixa está ACIMA DO FOLD, e lazy
              em imagem acima do fold é sempre errado — mediu
              naturalWidth 0 e o marquee colapsou para 0px de altura.
              A cópia duplicada também carrega eager, senão abre um
              buraco no meio da rolagem. São ~60 kB no total. */}
          <img src={src} alt="" loading="eager" decoding="async" />
        </li>
      ))}
    </ul>
  );
}

/**
 * "Uma hero curtinha, aí alguns [logos]" — e a fórmula exata que o
 * Victor descreveu na call: "tem título, subtítulo, botõezinhos,
 * empresas passando. Legal, bem isso."
 *
 * A faixa de logos voltou a rolar. Eu tinha trocado por fileira
 * estática; ele foi perguntado direto ("gosta assim ou gosta
 * passando?") e respondeu "acho que passando é mais legal, cara. Aí
 * deixa mais fininha essa linha". Então: rola, e a faixa é fina.
 *
 * O nome da ferramenta contratada alterna entre Claude / ChatGPT /
 * Gemini. É a única cor viva fora do acento de marca.
 */
export function Hero() {
  const [index, setIndex] = useState(0);
  const tool = TOOLS[index];

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % TOOLS.length);
    }, ROTATE_MS);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-wash" aria-hidden="true">
        <Aurora />
      </div>

      <div className="container hero-inner">
        <p className="eyebrow">{HERO.eyebrow}</p>

        <h1 id="hero-title" className="display hero-title">
          <span className="visually-hidden">{HERO.headlineA11y}</span>
          <span aria-hidden="true">
            {HERO.headlineBefore}{" "}
            <em className="hero-tool" style={{ ["--tool" as string]: tool.colorInk }}>
              <span key={tool.id}>{tool.label}</span>
            </em>{" "}
            {HERO.headlineAfter}
            <span className="hero-payoff">{HERO.headlinePayoff}</span>
          </span>
        </h1>

        <p className="lead hero-lead">{HERO.subheadline}</p>

        <div className="hero-actions">
          <Button href={CONTACT_URL} variant="primary" arrow>{CTA.primary}</Button>
          <Button href="#programas" variant="secondary">{CTA.secondary}</Button>
        </div>
        <p className="hero-micro">{HERO.microcopy}</p>
      </div>

      <div className="proof">
        <div className="container proof-inner">
          <h2 className="proof-label">{PROOF.label}</h2>
          <div className="marquee" aria-label="Empresas atendidas pela Playbook Lab">
            <div className="marquee-track">
              <LogoRow />
              <LogoRow duplicate />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
