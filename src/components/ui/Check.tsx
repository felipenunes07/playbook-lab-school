/**
 * Marca de item incluído.
 *
 * Não é ícone decorativo — é informação: diz "isto entra". A objeção
 * do Victor na call foi a "caixinha com ícone" como padrão de
 * decoração ("é coisa de IA"), não a qualquer marca. Uma marca ao lado
 * de um entregável carrega significado.
 *
 * Path desenhado à mão em SVG inline, não fonte de ícone nem emoji:
 * fonte de ícone é peso de rede e emoji renderiza diferente em cada
 * sistema operacional.
 */
export function Check() {
  return (
    <svg
      className="check"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M3.4 7.9l2.6 2.6 5.6-6"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
