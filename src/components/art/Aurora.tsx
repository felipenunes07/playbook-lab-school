/* ============================================================
   A aurora da Stripe, em fitas.

   A primeira tentativa usou degradê cônico com `filter: blur()`.
   Errado: a da Stripe são FITAS NÍTIDAS — laços com borda definida
   que se cruzam, como seda. O borrão lê como fundo genérico de
   template; a fita lê como ilustração feita de propósito.

   Cada fita é uma banda entre duas curvas de Bézier, preenchida com
   um degradê que satura no topo e desaparece embaixo. Sem blur, sem
   imagem: 3 kB de SVG.

   `preserveAspectRatio="xMaxYMid slice"` ancora o desenho na direita
   e deixa ele sangrar por cima e por baixo, que é como a referência
   se comporta quando a janela muda de tamanho.
   ============================================================ */

type Ribbon = {
  id: string;
  /** Deslocamento horizontal da fita no topo. */
  x: number;
  /** Largura da fita. */
  w: number;
  from: string;
  to: string;
  opacity: number;
};

/* O leque, da esquerda para a direita. A ordem importa: as frias vão
   atrás, as quentes na frente, e a rosa fecha por cima — é a mesma
   sobreposição da referência. */
const RIBBONS: Ribbon[] = [
  { id: "r1", x: 132, w: 96, from: "#00d4ff", to: "#7aa2ff", opacity: 0.62 },
  { id: "r2", x: 214, w: 128, from: "#7aa2ff", to: "#9089fc", opacity: 0.7 },
  { id: "r3", x: 320, w: 150, from: "#9089fc", to: "#b57bf5", opacity: 0.72 },
  { id: "r4", x: 452, w: 168, from: "#ffb84d", to: "#ff8a3d", opacity: 0.9 },
  { id: "r5", x: 596, w: 152, from: "#ff7a45", to: "#ff5f9e", opacity: 0.88 },
  { id: "r6", x: 716, w: 190, from: "#ff80b5", to: "#c86bf0", opacity: 0.84 },
];

/**
 * Uma fita: sobe do canto inferior esquerdo para fora pelo topo
 * direito, com barriga no meio. As duas curvas usam os mesmos pontos
 * de controle deslocados pela largura, então as bordas ficam
 * paralelas e a fita tem espessura constante.
 */
function ribbonPath(x: number, w: number): string {
  const c1 = `${x - 300},240 ${x - 470},560`;
  const c2 = `${x + w - 300},240 ${x + w - 470},560`;
  return [
    `M ${x},-60`,
    `C ${c1} ${x - 540},900`,
    `L ${x + w - 540},900`,
    `C ${c2.split(" ").reverse().join(" ")} ${x + w},-60`,
    "Z",
  ].join(" ");
}

export function Aurora() {
  return (
    <svg
      className="aurora"
      viewBox="0 0 900 760"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {RIBBONS.map((r) => (
          <linearGradient key={r.id} id={`aurora-${r.id}`} x1="0" y1="0" x2="0.35" y2="1">
            <stop offset="0%" stopColor={r.from} stopOpacity="0.95" />
            <stop offset="46%" stopColor={r.to} stopOpacity="0.72" />
            <stop offset="100%" stopColor={r.to} stopOpacity="0" />
          </linearGradient>
        ))}
      </defs>

      <g>
        {RIBBONS.map((r) => (
          <path
            key={r.id}
            d={ribbonPath(r.x, r.w)}
            fill={`url(#aurora-${r.id})`}
            opacity={r.opacity}
          />
        ))}
      </g>
    </svg>
  );
}
