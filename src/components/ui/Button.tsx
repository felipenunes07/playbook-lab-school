import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "onDark";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  /** Adds a trailing arrow — used for inline "read more" style links. */
  arrow?: boolean;
  className?: string;
};

/**
 * Both references label buttons in small monospace rather than bold sans.
 * That single choice is most of why their CTAs read as enterprise
 * software instead of a marketing funnel, so it is the default here.
 */
export function Button({
  href,
  children,
  variant = "primary",
  arrow = false,
  className = "",
}: Props) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={`btn btn--${variant} ${className}`.trim()}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>{children}</span>
      {arrow ? <Arrow /> : null}
    </a>
  );
}

export function Arrow() {
  return (
    <svg
      className="btn-arrow"
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M2.7 6.5h7.1M6.9 3.3l3.2 3.2-3.2 3.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
