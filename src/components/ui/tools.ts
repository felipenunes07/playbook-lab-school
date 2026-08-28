/* ============================================================
   As ferramentas de IA citadas no hero.

   Só nome e cor. Os SVGs desenhados à mão que existiam aqui antes
   (ToolMark) foram removidos: eram reproduções de boa-fé, não os
   assets oficiais da Anthropic, OpenAI e Google, e ficavam no lugar
   mais visível da página. Marca aproximada de terceiro num hero é
   risco sem retorno — e a mesma regra que já valia para depoimento
   e foto stock vale aqui: omitir é melhor que fabricar.

   Para colocar os logos de verdade: baixar os press kits oficiais,
   dropar em /public/tools e trocar o nome por <img> nesta lista.

   O uso do nome é nominativo — a página fala de empresas que já
   contrataram essas ferramentas.
   ============================================================ */

export type ToolId = "claude" | "chatgpt" | "gemini";

export type Tool = {
  id: ToolId;
  /** Nome como aparece na headline. */
  label: string;
  /** Cor característica do fornecedor. */
  color: string;
  /** Variante escura o suficiente para texto sobre papel (>= 4.5:1). */
  colorInk: string;
};

export const TOOLS: Tool[] = [
  { id: "claude", label: "Claude", color: "#D97757", colorInk: "#A24A26" },
  { id: "chatgpt", label: "ChatGPT", color: "#0F9D77", colorInk: "#0B6B51" },
  { id: "gemini", label: "Gemini", color: "#4285F4", colorInk: "#1B57C4" },
];
