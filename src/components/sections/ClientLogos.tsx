import { CLIENT_LOGOS, PROOF } from "../../data/site";

function LogoList({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul className="clients-strip" aria-hidden={duplicate || undefined}>
      {CLIENT_LOGOS.map((src) => (
        <li key={src}>
          <img src={src} alt="" loading="lazy" decoding="async" />
        </li>
      ))}
    </ul>
  );
}

export function ClientLogos() {
  return (
    <section className="clients" aria-labelledby="clients-title">
      <div className="container clients-inner">
        <div className="clients-head">
          <h2 id="clients-title" className="eyebrow">
            {PROOF.clientsLabel}
          </h2>
          <p className="clients-lead">{PROOF.lead}</p>
        </div>

        <div className="clients-marquee" aria-label="Empresas atendidas pela Playbook Lab">
          <div className="clients-track">
            <LogoList />
            <LogoList duplicate />
          </div>
        </div>

        <dl className="clients-stats">
          {PROOF.stats.map((stat) => (
            <div key={stat.value}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
