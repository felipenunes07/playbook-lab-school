# AI Enablement para Empresas — Playbook Lab

Landing page B2B para a oferta de AI Workforce Enablement.

```bash
npm install
npm run dev        # http://localhost:3010
npm run build      # typecheck + build de produção em dist/
npm run typecheck
```

React 18 + TypeScript + Vite. CSS autoral com design tokens — sem Tailwind,
sem biblioteca de UI, sem biblioteca de animação. Só `react` e `react-dom`
em produção (~55 kB JS gzip, ~6,8 kB CSS gzip). **Zero requisições a
terceiros**: fontes auto-hospedadas, verificado no runtime.

---

## Sistema visual

Direção: **editorial institucional**. O diagnóstico do cliente, depois de
três versões rejeitadas, foi "wireframe refinado / produto SaaS / página
utilitária". A causa não era cor nem espaçamento — era o vocabulário
tipográfico.

| | |
| --- | --- |
| Display | **Bodoni Moda** 400–600, `opsz` variável |
| Corpo e labels | **Libre Franklin** 400/500/600 |
| Base | branco frio `#f8f9fb` |
| Superfície de contraste | stone `#eef0f3` |
| Sala branca | `#ffffff` |
| Escuro | grafite `#0d0e11` |
| Acento | terracota queimada `#a8431f` — 6 usos |

### As três decisões que tiraram o ar de SaaS

**1. Didone em vez de grotesca.** Archivo, Inter e Space Grotesk são o
vocabulário de interface — é literalmente o que o cliente enxergava
quando dizia "produto". O contraste modulado de um Didone é indexical:
existe porque houve buril e prensa, e é o acervo de prospecto, memorando
de conselho e relatório institucional. Presença por detalhe interno, não
por área: uma grotesca a 80px/600 dá massa, e massa sem evento dentro da
letra é exatamente o que o olho lê como placeholder.

`font-optical-sizing: auto` + `font-variation-settings: "opsz"` por nível
não são detalhe: sem o eixo óptico o navegador serve o desenho de texto
num corpo de display e o filete engrossa. E o tracking foi de −0,026em
para −0,005em — aperto negativo num Didone fecha o branco entre haste e
filete e a hairline desaparece. Grotesca pede aperto; Didone pede ar.

**2. Monospace eliminado da página.** Eram 14 usos — eyebrows, botões,
tags, números, captions. Mono com tracking é o registro de changelog e
status page, e era a causa direta de a página ler como "mais técnica do
que elegante". O registro de label agora é grotesca de notícia em
caixa-alta espaçada: "QUADRO 1", "CONFIDENCIAL" — relatório, não
terminal.

**3. Corpo maior, não menor.** Subiu de 15px para 17px com entrelinha
1,65. Corpo pequeno é densidade de aplicação: página utilitária embala
informação. Corpo grande com entrelinha larga é o gesto mais eficaz de
"isto não tem pressa". Razão h1:corpo = 92/17 = **5,4:1**.

O ritmo vertical passou a ser múltiplo do baseline de 28px do corpo
(bandas de 112/168/224px) em vez de derivado de `vw`.

### A regra de cor

**A única cor viva da página é a da ferramenta de IA no hero.** Ela entra
em itálico do Didone, não em chip com fundo — escrito na grotesca do
fornecedor, "Claude" volta a ser um logo, e nenhum tratamento de cor
desfaz isso; em itálico de serifa passa a ser substantivo próprio dentro
de um documento nosso.

### Ritmo de fundos

```
hero paper · CLIENTES ESCURO · maturidade paper · gap STONE
· programas paper · tailored ESCURO · "Exatamente." paper
· practitioners paper · entregas STONE · "não deixamos" paper
· why now BRANCO · recursos paper · CTA ESCURO
```

A quebra escura chega a uma tela do topo, na faixa de clientes.

### Momentos memoráveis

1. **Hero** — Didone a 92px, a ferramenta contratada trocando em itálico
2. **Faixa de clientes** em grafite, com os 10 logos reais e 45+/230+
3. **Banda escura** "Feito para sua equipe"
4. **Sala branca** do Why Now, com o último passo da ponte em tinta cheia

---

## Referências

- **[go9x.com](https://go9x.com)** — disciplina de copy, ordem dos
  argumentos, estrutura de programas, practitioner positioning. As
  proporções foram medidas na página renderizada a 1280px (container 1184 +
  gutters 48, bandas 80px, título de card 24/1.2, coluna curta 16/600 +
  13/1.5, eyebrow mono 12 maiúsculo, cards raio 12 + borda 1px). A escala de
  display aqui é bem maior — é o que dá o impacto.
- **FoundersOS** (`../FoundersOS`) — origem das fontes Inter auto-hospedadas.

---

## Estrutura

```
src/
  data/site.ts                  ← toda a copy, links e dados
  lib/reveal-support.ts         ← guarda de progressive enhancement da animação
  styles/tokens.css             ← @font-face, cores, tipografia, espaçamento
  styles/base.css               ← reset, primitivas de layout e tipografia
  styles/app.css                ← estilos por seção
  components/ui/                ← Button, Reveal, ToolMark
  components/layout/            ← Navbar, Footer
  components/sections/          ← Hero, SocialProof, AdoptionGap, Programs,
                                  Tailored, FalseBeliefPace, Practitioners,
                                  Deliverables, FalseBeliefImplementation,
                                  WhyNow, Resources, Testimonials, FinalCTA
```

`src/data/site.ts` é a única fonte de conteúdo. Nenhum componente de seção
tem texto hardcoded.

### Ordem narrativa

Cada objeção aparece logo depois da seção que a provoca, não num bloco de
FAQ:

| # | Seção | Função |
| --- | --- | --- |
| 01 | Hero | A empresa já comprou IA |
| 02 | Proof + régua de maturidade | 45+/230+ · quebra "meu time já é avançado" |
| 03 | Adoption Gap | Comprar tecnologia não muda o trabalho |
| 04 | Programs | Foundations · Workflows · Builders (feature) |
| 05 | Tailored (escuro) | Ferramentas / processos / nível |
| 06 | "Exatamente." | Quebra "IA muda rápido demais" |
| 07 | Practitioners | Quem ensina implementa |
| 08 | Entregas | Pessoas + Sistemas — "o que eu recebo?" |
| 09 | "Não deixamos p/ depois" | Quebra "ninguém implementa" |
| 10 | Why Now | Ponte investimento → ROI |
| 11 | Recursos | Avalie antes de comprar |
| 12 | CTA final | Falar com a Playbook |

---

## Placeholders — o que falta de informação real

Nada foi inventado.

| Item | Estado |
| --- | --- |
| **Logos Claude/ChatGPT/Gemini** | ⚠️ **Reproduções de boa-fé desenhadas à mão** em `src/components/ui/ToolMark.tsx`, **não** são os assets oficiais. Baixar os press kits da Anthropic, OpenAI e Google e trocar os paths — a geometria está isolada nesse arquivo. |
| **Fotografia** | ⚠️ **Bloqueio conhecido.** Não existe nenhuma fotografia de equipe, founder ou workshop em nenhuma pasta do projeto, nem no site (`/`, `/sobre/`) — verificado forçando o lazy-load das duas páginas. Practitioners renderiza um frame sinalizado. Apontar `PRACTITIONERS.image.src` para o arquivo real. |
| **Nomes dos clientes** | Os 10 logos são reais (do carousel de clientes da própria playbooklab.com.br), mas os arquivos de origem não trazem os nomes das empresas (`download-8-1-1-1.png`). Os `alt` ficaram vazios e a faixa é rotulada como conjunto. Preencher os nomes e confirmar autorização de uso de marca. |
| **URL do YouTube** | `"#"`. Card de recurso e links de footer renderizam como **texto**, não link. |
| **Depoimentos** | Array vazio. `Testimonials` retorna `null` — a seção não existe até haver dado real. |
| **Logos de clientes** | Nenhum arquivo real. Faixa **removida** em vez de preenchida com marcas inventadas. |
| **og:image** | Nenhum asset 1200×630. Meta tag comentada. |
| **Páginas de programa** | Não existem. Cards apontam para `CONTACT_URL`. |

Reais e em uso: contato, comunidade, materiais, sobre, serviços, LinkedIn, e
os números **45+ empresas** / **230+ projetos**. Nenhuma terceira métrica,
percentual, duração, preço ou prazo foi criado.

---

## Decisões que valem registro

- **Headline travada em três linhas.** Claude, ChatGPT e Gemini têm larguras
  diferentes (linha 1 mede 828–897px). Deixando o texto refluir sozinho, a
  quebra mudava a cada troca — layout shift a cada 3s. Com as três linhas
  fixas, a altura do h1 é **225px em todos os estados**, medido.
- **Headline em largura total.** Na primeira composição ela vivia numa
  coluna de 678px e 86px quebrava em quatro linhas ruins ("Você contratou /
  Claude / para / sua equipe."). Em largura total cada frase cabe.
- **A banda de acento foi eliminada.** Além de puxar a página inteira para
  quente, ela tinha um teto de contraste: branco puro sobre `#f04a1e` mede
  **3.68:1**, reprova AA — nem o branco passava. Virou a sala branca.
- **Peso de display 600, não 700.** Com tracking muito fechado, 700 lia
  "landing de produto"; 600 com tracking mais aberto e `line-height` 1.0 lê
  editorial. Raios caíram de 5/10/14 para 3/6/8 pelo mesmo motivo.
- **Cor podada de 24 para 6 usos.** Todo o resto virou grafite, para que a
  única cor viva seja a da ferramenta de IA.
- **Rotação pausa com a aba oculta** e em `prefers-reduced-motion`. A
  headline visual é toda `aria-hidden`; leitores de tela recebem uma única
  versão linear.
- **Sem faixa de logos, sem depoimentos, sem foto stock.** Omitir é melhor
  que fabricar.

### Sobre a animação de entrada

Os blocos `.reveal` começam invisíveis e ganham `.is-in` via
`IntersectionObserver`. Isso tem um modo de falha real: se os callbacks não
chegarem, o conteúdo fica **permanentemente invisível** — aconteceu durante
o desenvolvimento, num contexto de navegador que não compõe frames.

Por isso o efeito é opt-in: `src/lib/reveal-support.ts` liga a animação
antes do primeiro paint, sonda se os callbacks chegam e, em 600ms sem
resposta, desliga tudo — o conteúdo volta a ser conteúdo visível.

---

## QA executado

- **Build**: `tsc --noEmit` + `vite build` limpos, sem warnings.
- **Console**: nenhum erro.
- **Requisições externas**: nenhuma (`resourceOrigins` = só o próprio host).
- **Larguras medidas**: 375, 430, 768, 1024, 1440 — **nenhum overflow
  horizontal** em nenhuma.
- **Contraste**: varredura de **todos** os elementos com texto próprio
  (189 no mobile, 189 no tablet, 194 no desktop), excluindo decorativos
  `aria-hidden`. **Zero falhas WCAG AA** em todos. Depois da repintura o par
  mais apertado da página subiu de 4.31:1 para **5.01:1**.
- **Temperatura**: medida em CIELAB ponderada por área — ver tabela acima.
- **Quebras de linha**: medidas caractere a caractere. Corrigidos "também"
  órfão em Practitioners, o CTA final em três linhas curtas, e o statement
  do Adoption Gap que estava em **11 linhas de ~160px** (o `max-width: 20ch`
  resolvia contra o wrapper de 16px, não contra o parágrafo de 52px).
- **Semântica**: um `h1`, 12 `section` todas com nome acessível, skip link,
  `alt` em todas as imagens, `rel="noopener"` em todo link externo, nenhum
  link vazio, nenhuma âncora quebrada, nenhum `href="#"`.
- **Menu mobile**: abre, fecha, Esc fecha, trava e restaura o scroll.
- **Alvos de toque**: nenhum abaixo de 38px no mobile.

### Não verificado

**Screenshots são impossíveis neste ambiente** — a pane do navegador não
compõe frames, então o loop "renderize → screenshot → avalie" não pôde ser
executado. Tudo acima foi medido no DOM renderizado, o que pega geometria,
contraste e quebras, mas **não substitui olhar a página**. Igualmente não
observáveis aqui:

- a **rotação Claude → ChatGPT → Gemini** (a aba conta como
  `document.hidden`, e a rotação pausa por design; a lógica e a estabilidade
  de layout foram validadas medindo as três larguras possíveis);
- as **animações de entrada** e transições de hover.

Vale abrir em um navegador normal antes de publicar.
