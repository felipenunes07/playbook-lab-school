import { useEffect, useMemo, useRef, useState } from "react";

export function CountUp({ value, duration = 1200 }: { value: string; duration?: number }) {
  const parsed = useMemo(() => {
    const match = value.match(/^(\d+)(.*)$/);
    return match ? { target: Number(match[1]), suffix: match[2] } : null;
  }, [value]);
  const [current, setCurrent] = useState(0);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!parsed || !elementRef.current) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setCurrent(parsed.target);
      return;
    }

    let frame = 0;
    let started = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return;
      started = true;
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCurrent(Math.round(parsed.target * eased));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.45 });

    observer.observe(elementRef.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [duration, parsed]);

  if (!parsed) return <>{value}</>;
  return <span ref={elementRef} aria-label={value}>{current}{parsed.suffix}</span>;
}
