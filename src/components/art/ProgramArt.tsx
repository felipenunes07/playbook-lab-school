/* ============================================================
   Área visual de cada card de programa.

   O briefing pedia "uma área visual lateral/inferior" por card —
   Foundations: prompt → contexto → resultado; Workflows: tarefa →
   Skill → workflow; Builders: workflow → API → agente. O que eu
   tinha entregue era uma lista de texto com setas, que é legenda,
   não visual. Estes são diagramas desenhados: mesma lógica, agora
   com forma.

   Traço em 1,25px e paleta em tinta + terracota, para não competir
   com o texto do card.
   ============================================================ */

const INK = "#151a20";
const LINE = "#dbd8c8";
const ACCENT = "#b8502a";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 340 132" className="program-art" aria-hidden="true">
      {children}
    </svg>
  );
}

/** Prompt solto → prompt com contexto em volta → resultado utilizável. */
export function FoundationsArt() {
  return (
    <Frame>
      {/* prompt cru */}
      <rect x="8" y="46" width="76" height="40" rx="6" fill="#fff" stroke={LINE} />
      <rect x="20" y="60" width="42" height="5" rx="2.5" fill={INK} opacity="0.22" />
      <rect x="20" y="71" width="28" height="5" rx="2.5" fill={INK} opacity="0.12" />

      {/* contexto orbitando */}
      <g opacity="0.9">
        <rect x="120" y="16" width="52" height="26" rx="5" fill="#fff" stroke={LINE} />
        <rect x="130" y="26" width="26" height="4" rx="2" fill={INK} opacity="0.18" />
        <rect x="120" y="90" width="52" height="26" rx="5" fill="#fff" stroke={LINE} />
        <rect x="130" y="100" width="32" height="4" rx="2" fill={INK} opacity="0.18" />
        <rect x="112" y="53" width="68" height="26" rx="5" fill={ACCENT} fillOpacity="0.1" stroke={ACCENT} strokeOpacity="0.4" />
        <rect x="122" y="63" width="40" height="4" rx="2" fill={ACCENT} opacity="0.6" />
      </g>

      <path d="M84 66 L108 66" stroke={INK} strokeOpacity="0.3" strokeWidth="1.25" />
      <path d="M146 42 L146 51" stroke={LINE} strokeWidth="1.25" />
      <path d="M146 81 L146 88" stroke={LINE} strokeWidth="1.25" />
      <path d="M180 66 L212 66" stroke={INK} strokeOpacity="0.3" strokeWidth="1.25" />

      {/* resultado */}
      <rect x="216" y="34" width="112" height="64" rx="7" fill="#fff" stroke={INK} strokeOpacity="0.5" />
      <rect x="230" y="50" width="84" height="6" rx="3" fill={INK} opacity="0.24" />
      <rect x="230" y="63" width="66" height="6" rx="3" fill={INK} opacity="0.16" />
      <rect x="230" y="76" width="46" height="6" rx="3" fill={ACCENT} opacity="0.5" />
    </Frame>
  );
}

/** Tarefa repetida → uma Skill que a encapsula → workflow que roda. */
export function WorkflowsArt() {
  return (
    <Frame>
      {/* a mesma tarefa, tres vezes */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(8 ${16 + i * 34})`}>
          <rect width="72" height="26" rx="5" fill="#fff" stroke={LINE} />
          <circle cx="15" cy="13" r="4" fill={INK} opacity="0.18" />
          <rect x="26" y="10" width="34" height="5" rx="2.5" fill={INK} opacity="0.16" />
        </g>
      ))}

      {[29, 63, 97].map((y) => (
        <path key={y} d={`M80 ${y} C100 ${y}, 104 66, 124 66`} fill="none" stroke={INK} strokeOpacity="0.22" strokeWidth="1.25" />
      ))}

      {/* a Skill */}
      <rect x="126" y="44" width="80" height="44" rx="7" fill={ACCENT} fillOpacity="0.1" stroke={ACCENT} strokeOpacity="0.5" />
      <path d="M148 66 L162 55 L162 77 Z" fill={ACCENT} opacity="0.65" />
      <rect x="168" y="59" width="24" height="5" rx="2.5" fill={ACCENT} opacity="0.55" />
      <rect x="168" y="69" width="16" height="5" rx="2.5" fill={ACCENT} opacity="0.3" />

      <path d="M206 66 L230 66" stroke={INK} strokeOpacity="0.3" strokeWidth="1.25" />

      {/* workflow em trilha */}
      <rect x="234" y="30" width="96" height="72" rx="7" fill="#fff" stroke={INK} strokeOpacity="0.5" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(248 ${44 + i * 20})`}>
          <circle cx="5" cy="5" r="4.5" fill={i === 2 ? ACCENT : INK} opacity={i === 2 ? 0.8 : 0.28} />
          <rect x="16" y="2" width={i === 1 ? 42 : 54} height="5" rx="2.5" fill={INK} opacity="0.16" />
        </g>
      ))}
      <path d="M253 53 L253 62" stroke={INK} strokeOpacity="0.25" strokeWidth="1.25" />
      <path d="M253 73 L253 82" stroke={INK} strokeOpacity="0.25" strokeWidth="1.25" />
    </Frame>
  );
}

/** Workflow → API/integração → agente que opera sozinho. */
export function BuildersArt() {
  return (
    <Frame>
      {/* workflow de origem */}
      <rect x="8" y="38" width="84" height="56" rx="7" fill="#fff" stroke={LINE} />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(20 ${50 + i * 16})`}>
          <circle cx="4" cy="4" r="3.5" fill={INK} opacity="0.24" />
          <rect x="13" y="1.5" width="44" height="4.5" rx="2.25" fill={INK} opacity="0.14" />
        </g>
      ))}

      <path d="M92 66 L118 66" stroke={INK} strokeOpacity="0.3" strokeWidth="1.25" />

      {/* nó de integração */}
      <g transform="translate(122 42)">
        <rect width="72" height="48" rx="7" fill="#fff" stroke={INK} strokeOpacity="0.42" />
        <path d="M18 24 H54" stroke={ACCENT} strokeWidth="1.5" strokeOpacity="0.7" />
        <circle cx="18" cy="24" r="4.5" fill="#fff" stroke={ACCENT} strokeWidth="1.5" />
        <circle cx="54" cy="24" r="4.5" fill={ACCENT} />
        <path d="M36 12 V36" stroke={INK} strokeOpacity="0.2" strokeWidth="1.25" strokeDasharray="2 3" />
      </g>

      <path d="M194 66 L222 66" stroke={INK} strokeOpacity="0.3" strokeWidth="1.25" />

      {/* agente: nucleo com orbitas */}
      <g transform="translate(226 22)">
        <rect width="104" height="88" rx="8" fill={INK} />
        <circle cx="52" cy="44" r="13" fill="none" stroke={ACCENT} strokeWidth="1.5" />
        <circle cx="52" cy="44" r="5" fill={ACCENT} />
        <ellipse cx="52" cy="44" rx="30" ry="13" fill="none" stroke="#fffdf9" strokeOpacity="0.26" strokeWidth="1.1" />
        <ellipse cx="52" cy="44" rx="13" ry="30" fill="none" stroke="#fffdf9" strokeOpacity="0.16" strokeWidth="1.1" />
        <circle cx="82" cy="44" r="3.5" fill="#fffdf9" fillOpacity="0.7" />
        <circle cx="52" cy="14" r="3" fill="#fffdf9" fillOpacity="0.45" />
        <circle cx="22" cy="44" r="3" fill="#fffdf9" fillOpacity="0.45" />
      </g>
    </Frame>
  );
}
