import { useEffect, useRef, useState } from "react";

/** O probe de reveal-support leva 600ms para decidir. */
const ARM_DELAY_MS = 700;
const DURATION_MS = 1100;

const SCALES: Record<string, number> = { k: 1_000, m: 1_000_000 };

type Parsed = { magnitude: number; scale: number; unit: string; suffix: string; final: string };

/**
 * "50+" -> conta 0..50 em inteiros.
 * "2k+" -> conta 0..2000 e exibe em milhares.
 *
 * Contar o inteiro exibido de "2k+" seria ir de 0 a 2: medido, dá 3
 * valores distintos e o número fica parado no final por 64% da
 * animação, enquanto 50+ e 60+ ainda passam por ~40 valores. A célula
 * do meio parecia travada ao lado das outras. Contando a grandeza, as
 * três ficam em movimento pelo mesmo tempo.
 */
function parse(value: string): Parsed | null {
  const m = /^(\d+)([kKmM]?)(.*)$/.exec(value);
  if (!m) return null;
  const scale = SCALES[m[2].toLowerCase()] ?? 1;
  return {
    magnitude: Number(m[1]) * scale,
    scale,
    unit: m[2],
    suffix: m[3],
    final: m[1],
  };
}

function format(current: number, p: Parsed): string {
  // Inteiro simples: conta direto.
  if (p.scale === 1) return `${Math.round(current)}${p.unit}${p.suffix}`;
  // Escalado: uma decimal durante a contagem, e o rótulo limpo no fim.
  const done = current >= p.magnitude;
  const n = done ? p.final : (current / p.scale).toFixed(1);
  return `${n}${p.unit}${p.suffix}`;
}

/**
 * Número que conta até o valor final quando entra na tela.
 *
 * A primeira versão disto foi REMOVIDA porque mostrava "0+" na tela.
 * A causa não era o efeito: era iniciar o estado em 0 e depender do
 * IntersectionObserver para chegar ao valor real. Em contexto que não
 * compõe frames (pane oculta, alguns webviews) o callback nunca chega
 * e o número trava em zero para sempre — um número de prova que mostra
 * zero é pior que nenhuma animação.
 *
 * Aqui a lógica é invertida: o valor REAL é o estado inicial.
 *
 *  1. Renderiza o valor final. Sem JS, com observer quebrado, com
 *     prefers-reduced-motion ou em navegador antigo, é isto que fica na
 *     tela. O modo de falha mostra a verdade.
 *  2. Depois de 700ms — tempo do probe de reveal-support decidir se os
 *     callbacks chegam — só arma se o observer é confiável E o elemento
 *     ainda está abaixo da dobra. Se já estiver visível, não mexe, para
 *     não piscar o número real e voltar a zero.
 *  3. Só então zera e conta.
 *
 * O valor final vai no aria-label: leitor de tela recebe "50+" direto,
 * sem os passos intermediários.
 */
export function CountUp({ value }: { value: string }) {
  const parsed = parse(value);
  const [current, setCurrent] = useState<number | null>(null);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!parsed) return;
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const magnitude = parsed.magnitude;
    let frame = 0;
    let observer: IntersectionObserver | null = null;

    const arm = window.setTimeout(() => {
      // O probe global desligou a animação: fica no valor real.
      if (!document.documentElement.classList.contains("js-reveal")) return;
      // Já visível: contar agora piscaria o número real e voltaria a zero.
      if (el.getBoundingClientRect().top < window.innerHeight) return;

      setCurrent(0);
      observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((e) => e.isIntersecting)) return;
          observer?.disconnect();
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / DURATION_MS, 1);
            setCurrent(magnitude * (1 - Math.pow(1 - t, 3)));
            if (t < 1) frame = requestAnimationFrame(tick);
          };
          frame = requestAnimationFrame(tick);
        },
        { threshold: 0.4 },
      );
      observer.observe(el);
    }, ARM_DELAY_MS);

    return () => {
      window.clearTimeout(arm);
      observer?.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [parsed?.magnitude]);

  if (!parsed) return <>{value}</>;

  return (
    <span ref={ref} aria-label={value}>
      {current === null ? value : format(current, parsed)}
    </span>
  );
}
