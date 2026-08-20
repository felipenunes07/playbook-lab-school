import { FOOTER_COLUMNS, LINKS } from "../../data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href={LINKS.site} aria-label="Playbook Lab — página inicial">
            <img
              src="/brand/playbooklab-logo.svg"
              alt="Playbook Lab"
              width={52}
              height={44}
              loading="lazy"
            />
          </a>
          <p>Capacitação e implementação de IA para empresas.</p>
        </div>

        <div className="footer-columns">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="footer-column">
              <h2 className="eyebrow">{column.title}</h2>
              <ul>
                {column.links.map((link) => {
                  const external = link.href.startsWith("http");
                  // Placeholder URLs render as text — see Resources for why.
                  const pending = link.href === "#";
                  return (
                    <li key={`${column.title}-${link.label}`}>
                      {pending ? (
                        <span className="footer-link-pending">{link.label}</span>
                      ) : (
                        <a
                          href={link.href}
                          {...(external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {year} Playbook Lab. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
