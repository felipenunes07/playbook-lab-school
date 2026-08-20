import type { ToolId } from "../ui/ToolMark";

/* ============================================================
   Composição do hero: a ferramenta de IA entrando no trabalho
   que já existe.

   Isto é ilustração desenhada, não um card de UI. A diferença
   importa: um retângulo com texto dentro é wireframe; camadas com
   profundidade, sobreposição e um fio condutor colorido são
   conteúdo visual. A página não tinha nenhum — era layout puro,
   e é por isso que nenhum ajuste de escala mudou a sensação.

   As três superfícies mostram estados diferentes do mesmo
   trabalho: manual, em transição, e já virado workflow. É a tese
   da oferta desenhada em vez de escrita.
   ============================================================ */

type Props = { tool: ToolId; toolColor: string };

const SURFACES = [
  { label: "Proposta comercial", lines: 4, state: "manual" },
  { label: "Pesquisa de conta", lines: 3, state: "parcial" },
  { label: "Relatório mensal", lines: 4, state: "workflow" },
] as const;

export function WorkSurfaces({ tool, toolColor }: Props) {
  return (
    <svg
      viewBox="0 0 520 440"
      className="work-surfaces"
      role="img"
      aria-label="A ferramenta de IA contratada entrando em três processos que já existem, o último já convertido em workflow"
    >
      <defs>
        <linearGradient id={`ws-glow-${tool}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={toolColor} stopOpacity="0.22" />
          <stop offset="100%" stopColor={toolColor} stopOpacity="0" />
        </linearGradient>
        <filter id="ws-lift" x="-30%" y="-30%" width="160%" height="180%">
          <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#151a20" floodOpacity="0.09" />
        </filter>
      </defs>

      {/* halo da ferramenta ativa */}
      <ellipse cx="260" cy="52" rx="190" ry="86" fill={`url(#ws-glow-${tool})`} />

      {/* a ferramenta, no topo */}
      <g filter="url(#ws-lift)">
        <rect x="196" y="20" width="128" height="46" rx="23" fill="#fff" stroke={toolColor} strokeWidth="1.5" />
      </g>
      <circle cx="222" cy="43" r="7" fill={toolColor} />
      <rect x="240" y="37" width="62" height="5" rx="2.5" fill={toolColor} opacity="0.55" />
      <rect x="240" y="47" width="40" height="5" rx="2.5" fill={toolColor} opacity="0.28" />

      {/* fios do topo até cada superfície */}
      {[112, 260, 408].map((x, i) => (
        <path
          key={x}
          d={`M260 68 C260 ${104 + i * 4}, ${x} ${104 + i * 4}, ${x} 140`}
          fill="none"
          stroke={toolColor}
          strokeWidth="1.25"
          strokeOpacity={0.2 + i * 0.28}
          strokeDasharray={i === 2 ? undefined : "3 4"}
        />
      ))}

      {SURFACES.map((s, i) => {
        const x = [40, 188, 336][i];
        const done = s.state === "workflow";
        const partial = s.state === "parcial";
        return (
          <g key={s.label} transform={`translate(${x} 140)`}>
            <g filter="url(#ws-lift)">
              <rect
                width="144"
                height="182"
                rx="10"
                fill="#fff"
                stroke={done ? toolColor : "#dbd8c8"}
                strokeWidth={done ? 1.5 : 1}
              />
            </g>

            {/* barra de estado no topo da folha */}
            <rect
              width="144"
              height="4"
              rx="2"
              fill={done ? toolColor : partial ? toolColor : "#dbd8c8"}
              opacity={done ? 1 : partial ? 0.45 : 1}
            />

            {/* linhas de texto da folha */}
            {Array.from({ length: s.lines }).map((_, l) => (
              <rect
                key={l}
                x="18"
                y={30 + l * 15}
                width={l === s.lines - 1 ? 58 : 108 - l * 6}
                height="6"
                rx="3"
                fill="#151a20"
                opacity={done ? 0.16 : 0.1}
              />
            ))}

            {/* bloco que a IA passou a produzir */}
            {(done || partial) && (
              <rect
                x="18"
                y={30 + s.lines * 15 + 8}
                width={done ? 108 : 62}
                height={done ? 34 : 20}
                rx="5"
                fill={toolColor}
                opacity={done ? 0.14 : 0.08}
                stroke={toolColor}
                strokeOpacity={done ? 0.4 : 0.2}
                strokeWidth="1"
              />
            )}

            {/* etiqueta de estado no pé */}
            <text
              x="18"
              y="166"
              className="ws-label"
              fill={done ? toolColor : "#657081"}
            >
              {done ? "workflow" : partial ? "em transição" : "manual"}
            </text>
          </g>
        );
      })}

      {/* rótulo do resultado */}
      <g transform="translate(336 340)">
        <path d="M72 0 L72 22" stroke={toolColor} strokeWidth="1.25" />
        <rect x="18" y="28" width="108" height="34" rx="6" fill="#151a20" />
        <text x="72" y="50" className="ws-out" textAnchor="middle" fill="#fffdf9">
          repetível
        </text>
      </g>
    </svg>
  );
}
