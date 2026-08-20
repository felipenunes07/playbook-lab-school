/* ============================================================
   Marcas das ferramentas de IA usadas no hero.

   ⚠️  ATENÇÃO — SUBSTITUIR ANTES DE PUBLICAR
   Estes SVGs são reproduções de boa-fé desenhadas à mão, NÃO são os
   assets oficiais da Anthropic, OpenAI ou Google. Foram feitos para
   sustentar a composição do hero enquanto os arquivos oficiais não
   entram. Baixe os press kits e troque os paths aqui — a geometria
   está isolada neste arquivo justamente para isso.

   O uso do nome e da marca das ferramentas aqui é nominativo: a página
   fala de empresas que já contrataram essas ferramentas.
   ============================================================ */

export type ToolId = "claude" | "chatgpt" | "gemini";

export type Tool = {
  id: ToolId;
  /** Nome como aparece na headline. */
  label: string;
  /** Cor característica, usada no chip e no fio condutor do painel. */
  color: string;
  /** Variante escura o suficiente para texto sobre creme (>= 4.5:1). */
  colorInk: string;
};

export const TOOLS: Tool[] = [
  { id: "claude", label: "Claude", color: "#D97757", colorInk: "#A24A26" },
  { id: "chatgpt", label: "ChatGPT", color: "#0F9D77", colorInk: "#0B6B51" },
  { id: "gemini", label: "Gemini", color: "#4285F4", colorInk: "#1B57C4" },
];

type Props = { tool: ToolId; size?: number };

export function ToolMark({ tool, size = 22 }: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
    focusable: "false" as const,
  };

  if (tool === "gemini") {
    // Estrela de quatro pontas côncava.
    return (
      <svg {...common}>
        <path
          d="M12 1.6c0 5.2 5.2 10.4 10.4 10.4C17.2 12 12 17.2 12 22.4 12 17.2 6.8 12 1.6 12 6.8 12 12 6.8 12 1.6Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (tool === "claude") {
    // Explosão radial de lâminas afiladas.
    const blades = Array.from({ length: 10 }, (_, i) => (i * 360) / 10);
    return (
      <svg {...common}>
        <g fill="currentColor">
          {blades.map((angle) => (
            <path
              key={angle}
              d="M12 12 L11.1 2.6 Q12 1.9 12.9 2.6 Z"
              transform={`rotate(${angle} 12 12)`}
            />
          ))}
        </g>
      </svg>
    );
  }

  // ChatGPT — nó hexagonal simplificado, em traço.
  return (
    <svg {...common}>
      <path
        d="M12 2.6 19.1 6.7v8.2L12 19 4.9 14.9V6.7L12 2.6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M12 7.1 15.6 9.2v4.2L12 15.5 8.4 13.4V9.2L12 7.1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        opacity="0.55"
      />
    </svg>
  );
}
