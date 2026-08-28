import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/Button";
import { CTA, CONTACT_URL, LINKS, NAV_LINKS } from "../../data/site";

/**
 * Barra translúcida que só ganha filete e sombra depois do scroll.
 *
 * A barra de progresso de leitura não voltou: em página única é
 * ansiedade decorativa, e vinha com glow verde.
 */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // O filete e a sombra aparecem apenas depois do scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava a página atrás da gaveta mobile, e Esc fecha.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <a href={LINKS.site} className="brand" aria-label="Playbook Lab — página inicial">
          <img
            src="/brand/playbooklab-logo.svg"
            alt="Playbook Lab"
            width={48}
            height={41}
            className="brand-mark"
          />
          <span className="brand-offer">Treinamento de IA</span>
        </a>

        <nav className="nav-center" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <Button href={CONTACT_URL} variant="primary" className="nav-cta">
            {CTA.primary}
          </Button>
          <button
            type="button"
            className="nav-burger"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`burger-icon ${open ? "is-open" : ""}`} aria-hidden="true">
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>

      <div id="mobile-nav" ref={panelRef} className={`mobile-nav ${open ? "is-open" : ""}`}>
        <nav aria-label="Navegação mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
        <Button href={CONTACT_URL} variant="primary" className="mobile-nav-cta">
          {CTA.primary}
        </Button>
      </div>
    </header>
  );
}
