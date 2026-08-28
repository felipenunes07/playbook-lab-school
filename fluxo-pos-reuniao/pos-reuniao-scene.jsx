/* Fluxo pós-reunião — composição contínua renderizada a partir de T (segundos autorais). */

const F = "'Helvetica Neue', Helvetica, Arial, sans-serif";
const NAVY = '#10265a', SLATE = '#616f9c';
const CXC = 432;

/* Resolução de saída. A composição é autorada numa folha de 864x1080 que sobe
   inteira num único transform, então render-scale mexe só na densidade de
   pixels do arquivo exportado — enquadramento, tipografia e traços continuam
   idênticos e vetoriais. Cada .dc.html escolhe a sua:
     ausente = 1 -> 1080x1350 (padrão)   2 -> 2160x2700   4 -> 4320x5400 (4K)
   Chega como string pelo <x-import>, daí a coerção. */
const SHEET_W = 864, SHEET_H = 1080;      /* folha autoral (não mexer) */
const BASE_ZOOM = 1.25;                   /* folha -> 1080x1350 */
const BASE_W = 1080, BASE_H = 1350;       /* saída de referência */
const readScale = (v) => { const n = +v; return n > 0 ? n : 1; };

/* Cada marca é um <image-slot>: o src é a reconstrução vetorial que desenhei
   (provisório) e arrastar o SVG oficial em cima substitui de forma permanente. */
const dataSvg = (s) => `data:image/svg+xml;utf8,${encodeURIComponent(s)}`;

const SRC_PIPEDRIVE = dataSvg(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">' +
  '<path d="M4.8 3.4h6v3.1c1.5-2.4 3.9-3.6 6.8-3.6 5.2 0 8.8 4.2 8.8 10.6s-3.8 10.8-9.1 10.8c-2.6 0-4.6-1.1-5.9-2.8v7.7H4.8V3.4z" fill="#017737"/>' +
  '<path d="M16.4 8.2c-3 0-5.1 2.2-5.1 5.3s2.1 5.4 5.1 5.4 5-2.2 5-5.4-2-5.3-5-5.3z" fill="#fff"/></svg>');

const SRC_GMAIL = dataSvg(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">' +
  '<path d="M2.6 23.2h3.5V10.9L1 7.1v14a2.1 2.1 0 0 0 2.1 2.1z" fill="#4285f4"/>' +
  '<path d="M25.9 23.2h3.5A2.1 2.1 0 0 0 31 21.1v-14l-5.1 3.8v12.3z" fill="#34a853"/>' +
  '<path d="M25.9 2.9v8l5.1-3.8V4c0-2.4-2.7-3.7-4.6-2.3l-.5.4z" fill="#fbbc04"/>' +
  '<path d="M6.1 10.9v-8L16 10.3l9.9-7.4v8L16 18.3z" fill="#ea4335"/>' +
  '<path d="M1 4v3.1l5.1 3.8v-8l-.5-.4C3.7.3 1 1.6 1 4z" fill="#c5221f"/></svg>');

const SRC_TLDV = dataSvg(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40">' +
  '<text x="60" y="31" text-anchor="middle" font-family="Helvetica Neue,Helvetica,Arial,sans-serif" ' +
  'font-size="34" font-weight="800" letter-spacing="-1.8" fill="#1D1DFF">tl;dv</text></svg>');

const slot = (id, src, w, h, placeholder) => (
  <image-slot id={id} src={src} fit="contain" shape="rect" placeholder={placeholder}
    style={{ display: 'block', width: w, height: h, background: 'transparent', color: '#8b95a8' }}></image-slot>
);

const NODES = [
  { id: 'pipedrive', x: 156, num: '03', name: 'Pipedrive', desc: 'Atualiza o CRM',
    mark: slot('logo-pipedrive', SRC_PIPEDRIVE, 34, 34, 'SVG oficial Pipedrive') },
  { id: 'gmail', x: 432, num: '04', name: 'Gmail', desc: 'Prepara o follow-up',
    mark: slot('logo-gmail', SRC_GMAIL, 36, 28, 'SVG oficial Gmail') },
  { id: 'clickup', x: 708, num: '05', name: 'ClickUp', desc: 'Cria tarefas',
    mark: slot('logo-clickup', './assets/clickup-icon-color.png', 30, 36, 'SVG oficial ClickUp') },
];

const ROW_Y = 780, DISC = 68;

const LINKS = {
  badge: 'M432 302 L432 336',
  tldv: 'M432 432 L432 474',
  fan1: 'M432 700 L432 726 Q432 752 396 752 L192 752 Q156 752 156 776',
  fan2: 'M432 700 L432 776',
  fan3: 'M432 700 L432 726 Q432 752 468 752 L672 752 Q708 752 708 776',
};

const RAYS = [[62, 10.6, 0], [49, 9.6, 29], [59, 10.6, 61], [53, 10, 90], [61, 10.6, 121], [47, 9.6, 149],
  [57, 10.4, 180], [51, 9.8, 211], [61, 10.6, 239], [48, 9.6, 270], [58, 10.4, 301], [54, 10, 330]];

function Piece(props) {
  const { useComposition, Easing, animate } = window;
  const { T, CUES } = useComposition();
  const accent = props.accent || '#e86038';
  const burst = props.burst || '#d97757';
  const showGrid = props.showGrid !== false;
  const showConnectors = props.showConnectors !== false;
  const zoom = BASE_ZOOM * readScale(props.renderScale);

  const ramp = (start, end) => animate({ from: 0, to: 1, start, end, ease: Easing.easeInOutCubic })(T);
  const rise = (from, to, start, end) => animate({ from, to, start, end, ease: Easing.easeOutCubic })(T);

  const C = CUES;
  const beat = Math.sin((T / 2.4) * Math.PI * 2);

  const badgeIn = ramp(C.Reuniao, C.Reuniao + 0.55);
  const tldvIn = ramp(C.Tldv, C.Tldv + 0.6);
  const claudeIn = ramp(C.Claude, C.Claude + 0.7);
  const fanIn = ramp(C.Saidas, C.Saidas + 0.8);
  const phraseIn = ramp(C.Fecho, C.Fecho + 0.7);
  const footerIn = ramp(C.Fecho + 0.35, C.Fecho + 1.05);

  const nodeIn = {
    pipedrive: { op: ramp(C.Saidas + 0.65, C.Saidas + 1.25), y: rise(14, 0, C.Saidas + 0.65, C.Saidas + 1.35) },
    gmail: { op: ramp(C.Saidas + 0.85, C.Saidas + 1.45), y: rise(14, 0, C.Saidas + 0.85, C.Saidas + 1.55) },
    clickup: { op: ramp(C.Saidas + 1.05, C.Saidas + 1.65), y: rise(14, 0, C.Saidas + 1.05, C.Saidas + 1.75) },
  };

  const linkP = {
    badge: ramp(C.Reuniao + 0.45, C.Reuniao + 0.9),
    tldv: ramp(C.Tldv + 0.5, C.Tldv + 1.0),
    fan1: fanIn, fan2: fanIn, fan3: fanIn,
  };

  const coreOpen = ramp(C.Claude, C.Claude + 0.85);
  const core = (0.6 + 0.4 * coreOpen) * (1 + 0.022 * beat);
  const coreRot = rise(-18, 0, C.Claude, C.Claude + 1.1);
  const glow = (0.6 + 0.4 * coreOpen) * (1 + 0.08 * beat);

  const discShadow = '0 3px 12px rgba(15,30,60,.11),0 0 0 1px rgba(15,30,60,.03)';

  const num = (t) => <span style={{ fontSize: 11.5, fontWeight: 800, letterSpacing: '.12em', color: accent }}>{t}</span>;

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fbfbfc', overflow: 'hidden', fontFamily: F }}>
      <div style={{ position: 'absolute', left: 0, top: 0, width: SHEET_W, height: SHEET_H, transform: `scale(${zoom})`, transformOrigin: 'top left' }}>

        {showGrid && (
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(to right,rgba(20,35,70,.045) 1px,transparent 1px),linear-gradient(to bottom,rgba(20,35,70,.045) 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
        )}

        <div style={{
          position: 'absolute', left: CXC, top: 542, width: 380, height: 380,
          transform: `translate(-50%,-50%) scale(${glow})`,
          background: `radial-gradient(circle closest-side, ${burst}17, ${burst}06 46%, transparent 74%)`,
        }} />

        <div style={{ position: 'absolute', top: 62, left: 0, right: 0, textAlign: 'center' }}>
          <div style={{ opacity: ramp(0.1, 0.95), transform: `translateY(${rise(14, 0, 0.1, 1.05)}px)`, fontSize: 54, fontWeight: 700, letterSpacing: '-.028em', lineHeight: 1.1, color: NAVY }}>
            <div>1 reunião terminou.</div>
            <div style={{ color: accent }}>5 automações começaram.</div>
          </div>
          <div style={{ marginTop: 16, opacity: ramp(0.55, 1.3), fontSize: 17, fontWeight: 500, letterSpacing: '.005em', color: SLATE }}>
            Meu stack de IA pós-reunião
          </div>
        </div>

        <div style={{
          position: 'absolute', left: CXC, top: 250, transform: `translate(-50%,${rise(10, 0, C.Reuniao, C.Reuniao + 0.6)}px)`,
          opacity: badgeIn, display: 'flex', alignItems: 'center', gap: 9,
          padding: '10px 20px 10px 16px', borderRadius: 999, background: '#fff',
          boxShadow: `0 2px 8px rgba(15,30,60,.06),0 0 0 1.5px ${accent}33`,
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2.6" y="6.4" width="12.4" height="11.2" rx="2.4" />
            <path d="M15 11.2 21.4 7.6v8.8L15 12.8z" />
          </svg>
          <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: '.11em', color: NAVY }}>REUNIÃO FINALIZADA</span>
        </div>

        <svg width={SHEET_W} height={SHEET_H} viewBox={`0 0 ${SHEET_W} ${SHEET_H}`} style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
          <defs>
            {Object.keys(LINKS).map((k) => (
              <mask key={k} id={`m-${k}`} maskUnits="userSpaceOnUse">
                <path d={LINKS[k]} stroke="#fff" strokeWidth="10" fill="none" pathLength="1"
                  strokeDasharray="1 1" strokeDashoffset={1 - linkP[k]} />
              </mask>
            ))}
          </defs>
          {showConnectors && (
            <g fill="none" stroke={`color-mix(in oklab, ${accent} 44%, #7c88a6)`} strokeWidth="1.6" strokeLinecap="round" strokeDasharray="4 6">
              {Object.keys(LINKS).map((k) => <path key={k} d={LINKS[k]} mask={`url(#m-${k})`} />)}
            </g>
          )}
        </svg>

        <div style={{
          position: 'absolute', left: CXC, top: 344, width: 320,
          transform: `translate(-50%,${rise(14, 0, C.Tldv, C.Tldv + 0.75)}px)`, opacity: tldvIn,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
        }}>
          {slot('logo-tldv', SRC_TLDV, 108, 38, 'wordmark oficial tl;dv (SVG)')}
          <div style={{ marginTop: 14 }}>{num('01')}</div>
          <span style={{ marginTop: 7, fontSize: 18, lineHeight: 1.25, color: SLATE }}>Entrega a transcrição</span>
        </div>

        <div style={{
          position: 'absolute', left: CXC, top: 486, width: 380,
          transform: `translate(-50%,${rise(12, 0, C.Claude, C.Claude + 0.8)}px)`, opacity: claudeIn,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
        }}>
          <svg width="112" height="112" viewBox="-70 -70 140 140" style={{ display: 'block', overflow: 'visible' }}>
            <g transform={`rotate(${coreRot}) scale(${core})`} fill={burst} opacity={coreOpen}
              style={{ filter: 'drop-shadow(0 6px 16px rgba(15,30,60,.13))' }}>
              {RAYS.map(([len, w, a], k) => (
                <rect key={k} x={-w / 2} y={-len} width={w} height={len} rx={w / 2} transform={`rotate(${a})`} />
              ))}
            </g>
          </svg>
          <div style={{ marginTop: 12 }}>{num('02')}</div>
          <span style={{ marginTop: 6, fontSize: 32, fontWeight: 700, letterSpacing: '-.03em', color: NAVY, lineHeight: 1 }}>Claude</span>
          <span style={{ marginTop: 10, fontSize: 18, lineHeight: 1.25, color: SLATE, textAlign: 'center' }}>Extrai contexto e próximos passos</span>
        </div>

        {NODES.map((n) => {
          const a = nodeIn[n.id];
          return (
            <div key={n.id} style={{
              position: 'absolute', left: n.x, top: ROW_Y, width: 240,
              transform: `translate(-50%,${a.y}px)`, opacity: a.op,
              display: 'flex', flexDirection: 'column', alignItems: 'center',
            }}>
              <div style={{
                width: DISC, height: DISC, borderRadius: '50%', background: '#fff', boxShadow: discShadow,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>{n.mark}</div>
              <div style={{ marginTop: 14 }}>{num(n.num)}</div>
              <span style={{ marginTop: 6, fontSize: 23, fontWeight: 700, letterSpacing: '-.025em', color: NAVY, lineHeight: 1 }}>{n.name}</span>
              <span style={{ marginTop: 9, fontSize: 17, lineHeight: 1.25, color: SLATE, textAlign: 'center' }}>{n.desc}</span>
            </div>
          );
        })}

        <div style={{
          position: 'absolute', left: 0, right: 0, top: 958, textAlign: 'center',
          opacity: phraseIn, transform: `translateY(${rise(10, 0, C.Fecho, C.Fecho + 0.8)}px)`,
          fontSize: 21, fontWeight: 600, letterSpacing: '-.015em', color: NAVY,
        }}>O vendedor revisa. O sistema executa.</div>

        <div style={{
          position: 'absolute', left: 0, right: 0, top: 1010, opacity: footerIn,
          display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 8,
        }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.09em', color: NAVY }}>VICTOR BAGGIO</span>
          <span style={{ fontSize: 12, color: '#a9b3ca' }}>•</span>
          <span style={{ fontSize: 13, fontWeight: 500, color: SLATE }}>Playbook Lab</span>
        </div>
      </div>
    </div>
  );
}

function PosReuniaoAnimation(props) {
  const { CompositionStage } = window;
  const s = readScale(props.renderScale);
  return (
    <CompositionStage width={BASE_W * s} height={BASE_H * s} scenes={window.OM_SCENES} playback={window.OM_PLAYBACK} bg="#fbfbfc">
      <Piece accent={props.accent} burst={props.burst} showGrid={props.showGrid} showConnectors={props.showConnectors} renderScale={props.renderScale} />
    </CompositionStage>
  );
}

window.PosReuniaoAnimation = PosReuniaoAnimation;
