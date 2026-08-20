import { useEffect, useRef, useState } from "react";
import type { ElementType, ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Stagger index — multiplied by 70ms. Keep small; grids of 3 max. */
  order?: number;
  as?: ElementType;
  className?: string;
  id?: string;
};

/**
 * Minimal fade-and-rise on first entry. IntersectionObserver rather than a
 * motion library: it is ~20 lines and keeps the bundle at React only.
 * Reduced-motion users get the final state immediately, via CSS in base.css.
 */
export function Reveal({
  children,
  order = 0,
  as: Tag = "div",
  className = "",
  id,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${shown ? "is-in" : ""} ${className}`.trim()}
      style={order ? { transitionDelay: `${order * 70}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
