# Treinamento corporativo de IA — Playbook Lab

Landing page B2B da oferta de capacitação em IA.

```bash
npm install
npm run dev        # http://localhost:3010
npm run build      # typecheck + build de produção em dist/
npm run typecheck
```

React 18 + TypeScript + Vite. CSS autoral com design tokens — sem Tailwind,
sem biblioteca de UI, sem biblioteca de animação. Só `react` e `react-dom`
em produção (**52 kB JS gzip, 4,9 kB CSS gzip**). **Zero requisições a
terceiros**: fontes auto-hospedadas, verificado no runtime.

---

## Sistema visual: registro Stripe, cor Playbook

**As regras vieram da call de 24/08 com o Victor**, apontando para sites
na tela. Estão citadas literalmente em `tokens.css` porque cada uma
corrige um erro específico de uma versão anterior.

| Ele disse | Vira |
| --- | --- |
| "tem título, subtítulo, botõezinhos, **empresas passando**. Legal, bem isso" | fórmula do hero |
| "acho que **passando** é mais legal, deixa **mais fininha** essa linha" | marquee de logos, faixa de 72px de altura total |
| "essa seção está **linda**... título, subtítulo, uma frase menor, e daí algumas caixinhas — item 1, 2, 3" | a fileira de números em Autoridade |
| "**não** com essa paradinha aqui, **parece ouriço do mar**" | a fileira veio SEM o gráfico generativo da original |
| "poderia ter título, subtítulo, daí uma frase de duas, três linhas, **menor**. E daí **algumas caixinhas** — item 1, 2, 3, 4. Bem bonito" | `.eyebrow → .h2 → .lead → .cards` em **toda** seção |
| "muito muito grande, **em exagero**. Deixar pouquinho mais curto, **fonte menor**" | h1 a 58px, não 90px |
| "aqui tem **espaço gigantesco**. Aproveitar melhor o espaçamento" | banda de 96px, não 168px |
| "essas caixinhas com esses **ícones** é coisa [de IA]... a mesma estrutura só que **não parece web codado**" | **zero ícone e zero pílula** — ver abaixo |
| "se [o fundo] **não fizer parte da identidade visual** ou não agregar, eu também nem quero" | o único degradê é verde de marca, no hero |
| "**muita poluição visual**" **e também** "não gosto de **espaço em branco sem nada**" | densidade média: grade cheia e organizada |
| "eu quero que site **converta**, não que fique só bonito" | CTA em toda seção de programa |

### A regra que fecha o assunto "cara de IA"

**IA decora categoria. Design compõe informação.**

A pílula de fundo tingido — fundo claro tingido + raio total + texto
pequeno, três repetidas em fila — é a assinatura mais reconhecível de
página gerada por IA. E ela não informava nada: só pintava a categoria.

Cinco lugares tinham o mesmo vício, e todos foram trocados por
informação de verdade:

| Antes | Agora |
| --- | --- |
| 3 pílulas verdes de tag no card de programa | tabela de especificação com filete, sob o rótulo "No programa" |
| 6 pílulas com borda listando ferramentas | uma linha de texto com meio-ponto |
| número em círculo de 32px com fundo tingido | algarismo marginal, como numeração de relatório |
| bloco de fundo tingido na métrica do case | filete em cima e embaixo |
| régua de acento de 34px no topo de todo card | nada — o acento aparece só no hover |

Varredura por **padrão, não por classe** (`raio >= 12px` + fundo ou
borda + `font-size <= 14px`, excluindo `.btn`): **zero pílulas restantes**
na página. O único `border-radius: 999px` que sobrou é o do botão, que
no registro Stripe é correto.

`--accent-wash` ficou com um uso só: `::selection`. Não é para voltar a
pintar caixinha.

### O erro que isto corrige

O registro anterior ("memorando executivo": filete, zero sombra, zero
raio, bandas de 168px, h1 de 90px) caiu direto na segunda metade da
contradição do Victor — leu como "espaço em branco sem nada" e "parece
blog". Antes dele, uma versão com verde neon, glow e órbitas tinha caído
na primeira ("poluição visual").

O ponto médio é a Stripe: **densa, organizada, com elevação suave**.

### Tipografia

| | |
| --- | --- |
| Display | **Archivo** 500/600/700 |
| Corpo e labels | **Inter** 400/500/600 |
| h1 | `clamp(35px, 3.9vw, 58px)` · `max-width: 16em` |
| h2 | `clamp(28px, 2.9vw, 42px)` |
| caixinha | 19px |
| eyebrow | 13px caixa-alta **na cor de marca** — o gesto que mais diz "Stripe" |

`max-width: 16em` e não `19ch` no h1: medido a 1440/56px, a frase pede
~1003px e o payoff ~766px, então qualquer largura entre os dois dá três
linhas. Em `em` a proporção se mantém quando o clamp encolhe a fonte.

### Cor

```
branco  #ffffff     superfície #f6f9f6     escuro #08281a
tinta   #0d2a1d     suave      #3f594c     fraca  #5f7568
```

Verde de marca em **duas versões, por contraste medido**:

- `--accent` `#0d7d3c` — texto, eyebrow, link, botão. **5,2:1** sobre
  branco, passa AA.
- `--accent-live` `#14c114` — a cor de marca. Só em fundo escuro e no
  degradê do hero. Sobre branco mede **2,3:1** e reprova, então nunca
  aparece como texto ali.

### Movimento

Voltou, depois de ter sido removido demais:

- **marquee de logos** — 42s linear, pausa no hover
- **nome da ferramenta** alternando Claude / ChatGPT / Gemini a cada 4,2s
- **degradê do hero** com deriva lenta de 26s
- **entrada suave** no scroll (`IntersectionObserver`)
- **header** ganha filete e sombra depois do scroll

Tudo desliga em `prefers-reduced-motion`. Nada pisca, nada pulsa, não
voltou a barra de progresso de leitura.

---

## Ordem narrativa

Outline do Victor, com as duas fusões que ele pediu na call.

| # | Seção | Superfície |
| --- | --- | --- |
| 01 | Hero — título, subtítulo, botões, **empresas passando** | branco + degradê |
| 02 | Problema — frase grande à esquerda, 3 sintomas **na vertical** à direita | verde-claro |
| 03 | Programas — **"Ferramenta sozinha não gera ROI" é o título desta seção** | branco |
| 04 | Personalização — fórmula Stripe, 3 caixinhas | branco |
| 05 | Autoridade — **título centralizado + fileira 50+ / 2k+ / 60+** + foto | degradê verde |
| — | **Cases** — antes/depois por cliente | *null até ter dado* |
| — | **Depoimentos** | *null até ter dado* |
| 06 | Conteúdos — veja como ensinamos antes de contratar | branco |
| 07 | CTA final | **escuro** |

Sete seções. As duas fusões:

1. **A Tese virou o cabeçalho de Programas.** Eram duas seções. Victor:
   *"'ferramenta sozinha não gera ROI', daí uma frase e logo embaixo os
   programas... 'três formas de instalar essa capacidade' isso aí SOME,
   e o AI Foundations fica incorporado na seção anterior."*
2. **A faixa de logos entrou no Hero.** *"Uma hero curtinha, aí alguns
   [logos]."* Hero + logos terminam a **601px** — cabem no fold a 900px.

E os programas ficaram **lado a lado**, não empilhados: *"esses aí dá
pra ficar meio que do lado do outro, não embaixo do outro."*

### Onde ficam os números

Os três **na mesma fileira**, em Autoridade — no formato da seção da
Stripe que o Victor apontou e chamou de *"linda"*: título centralizado,
frase curta, e embaixo as células com número grande e rótulo pequeno,
separadas por filete.

Ficou **sem o gráfico generativo** que acompanha a original. Ele elogiou
e rejeitou na mesma frase: *"essa seção aqui está bem legal. **Não** com
essa paradinha aqui, parece ouriço do mar, pô."*

| | |
| --- | --- |
| 50+ | empresas onde já implementamos projetos de IA |
| 2k+ | membros na comunidade |
| 60+ | aulas e tutoriais publicados |

São só três, não quatro como na referência: são os únicos números
confirmados. Nenhum quarto foi inventado para fechar a grade.

A seção de Conteúdos **perdeu** os números — 60+ e 2k+ repetidos ali
enfraqueceriam os dois lugares. O trabalho dela é o link.

**Logos** → marquee fino no hero, uma vez só.

---

## Estrutura

```
src/
  data/site.ts                  ← toda a copy, links e dados
  lib/reveal-support.ts         ← guarda de progressive enhancement
  styles/tokens.css             ← @font-face, cores, tipografia, espaçamento
  styles/base.css               ← reset e as 5 primitivas de layout/tipo
  styles/app.css                ← layout por seção
  components/ui/                ← Button, Reveal, tools
  components/layout/            ← Navbar, Footer
  components/sections/          ← Hero, Problem, Programs, Tailored,
                                  Authority, Cases, Testimonials,
                                  Teaching, FinalCTA
```

`src/data/site.ts` é a única fonte de conteúdo. Nenhum componente de seção
tem texto hardcoded.

Cada seção repete a mesma fórmula — `.eyebrow → .h2 → .lead → .cards > .card`
— sobre as primitivas de `base.css`. É a repetição dela que dá organização:
o registro anterior variava o layout a cada seção e o resultado foi ler
"disperso". Se uma seção precisar de estilo que não seja composição das
primitivas, é sinal de que está tentando ser especial sem motivo.

---

## Placeholders — o que falta de informação real

Nada foi inventado.

| Item | Estado |
| --- | --- |
| **Logos Claude/ChatGPT/Gemini** | ⚠️ **Removidos.** Eram SVGs desenhados à mão — reproduções de boa-fé, não os assets oficiais — e ficavam no lugar mais visível da página. Marca aproximada de terceiro num hero é risco sem retorno. Hoje só o nome aparece (uso nominativo). Para colocar os de verdade: baixar os press kits, dropar em `/public/tools` e trocar por `<img>` em `src/components/ui/tools.ts`. |
| **URL do YouTube** | `"#"`. O canal existe (60+ aulas), mas a URL não foi confirmada em nenhuma fonte do projeto. Enquanto for `"#"`, o card e os links de footer renderizam como **texto**, não link morto. |
| **Nomes dos clientes** | Os 10 logos são reais (do carousel de `playbooklab.com.br`), mas os arquivos de origem não trazem os nomes (`download-8-1-1-1.png`). Os `alt` ficaram vazios e a faixa é rotulada como conjunto. Preencher os nomes e confirmar autorização de uso de marca. |
| **"PBL School"** | O brain-dump escreve "Por que escolher a PBL School?". A página usa **Playbook Lab**, que é o que está no logo, no domínio e no footer. Decidir se a escola tem marca própria antes de publicar. |
| **Cases / resultados** | ⚠️ **Pedido na call, sem dado.** Victor: *"colocar no site, que a gente tem pouca coisa de case no site"*; *"PDF por cliente, explicando o contexto, tudo o que foi feito, resultados atingidos"*; *"olha como esse cliente passou de x pra y"*. A seção `Cases` está montada, estilizada e responsiva, e **retorna `null`** enquanto `CASES` estiver vazio — nenhum "de 5 horas para 15 segundos" entra no ar sem o número real. Preencher `CASES` em `site.ts` liga a seção. |
| **Depoimentos** | ⚠️ **Pedido na call** (*"depoimentos é legal"*), sem dado. Mesma mecânica: `Testimonials` retorna `null` com `TESTIMONIALS` vazio. |
| **Nome da oferta** | ⚠️ **Bloqueia o lançamento.** Na call: *"o lançamento do braço de educação... a gente precisa finalizar a página, subir pra domínio, **criar nome**, e publicar sobre"* e *"alguém tem ideia de nome pra esse novo serviço? A gente chama de [x], eu acho ruim."* Felipe sugeriu **"Enterprise AI"**. A página usa **Playbook Lab** em todo lugar. |
| **Captura de lead** | ⚠️ **Maior lacuna de conversão.** A página só linka para `/contato/`. O funil do concorrente que o Victor estudou na call é um **mini-formulário chamado "diagnóstico"** — *"quantos colaboradores tem sua empresa?"* — e os dois concordaram que é isso que funciona: *"é volume mesmo, e na chamada eles decidem se fecha"*. A página vai receber **tráfego pago** (*"colocar no GPT pra gente fazer [ads] em cima dele"*), e ele disse *"eu quero que site converta, não que fique só bonito"*. Decidir: formulário na página (Tally? HubSpot, que eles já usam?) ou manter o link. |
| **Páginas de programa** | Não existem. Os três CTAs apontam para `CONTACT_URL`. |
| **og:image** | Nenhum asset 1200×630. Meta tag comentada. |

Reais e em uso: contato, comunidade, materiais, sobre, serviços, LinkedIn, e
os números **50+ empresas**, **2k+ membros**, **60+ aulas** (confirmados
pelo Victor). Nenhuma quarta métrica, percentual, duração, preço ou prazo
foi criado.

---

## Decisões que valem registro

- **Hero de quatro blocos.** Empilhava sete: pill de eyebrow, headline,
  lead, dois botões, microcopy, rail de três ferramentas, painel
  "PL / CONFIDENCIAL 01" de três colunas e uma faixa gradiente verde→azul.
  Antes do fold isso vira ruído — e o painel prometia informação que não
  estava lá. Sobraram label, headline, lead e ações.
- **Headline em três linhas fixas.** Claude, ChatGPT e Gemini têm larguras
  diferentes; deixando o texto refluir, a quebra mudava a cada troca. Com as
  três linhas fixas, o h1 mede **252px a 1440px e 218px a 375px nos três
  estados** — medido, zero layout shift.
- **Programas empilhados, não em grid de três cards.** Três colunas de
  largura igual forçam o texto a encolher; o título vira duas linhas
  apertadas e os três acabam parecendo o mesmo produto em tamanhos
  diferentes. Em linhas com filete, cada um tem largura de manchete.
- **Nenhum programa marcado como "featured".** Não são planos de assinatura,
  e destacar o do meio inventaria uma recomendação que a oferta não faz.
- **Os diagramas saíram.** "Mapa de capacidade", o work-system com fio verde
  animado e a ponte de ROI em quatro caixas desenhavam a metáfora sem
  informar um fato novo. A única ilustração que ficou é a lista de
  ferramentas em Personalização, porque ela *é* informação.
- **A foto é a única imagem e a única coisa com sombra da página.** É o que
  dá presença humana a uma página que fala de treinar gente.
- **CTA final alinhado à esquerda.** Centralizado com gradiente radial e
  grid de fundo era a assinatura de landing de produto. Uma página que
  argumenta termina de argumentar — não abre os braços.
- **Nenhuma pílula de conteúdo na página.** Ver "A regra que fecha o
  assunto cara de IA" acima. Todos os elementos novos passam AA com
  folga: rótulo de spec 4,96:1, item de spec 7,65:1, linha de
  ferramentas 4,96:1, algarismo marginal 5,23:1.
- **Cases e Depoimentos existem no código, mas não na tela.** Os dois
  foram pedidos na call e nenhum tem dado real. Em vez de inventar um
  case ou uma citação, as seções retornam `null` com o array vazio.
  O CSS foi validado injetando a marcação real no DOM renderizado —
  card de 367px, raio 8px, sombra, o valor antigo riscado e o novo a
  27px. Preencher o array é a única coisa que falta.
- **Dois bugs na faixa de logos.** (1) `loading="lazy"` numa imagem
  **acima do fold** nunca dispara em contexto que não compõe frames:
  medi `naturalWidth: 0` nas dez, e o marquee colapsou para **0px de
  altura** — os logos simplesmente não existiam na tela. Virou `eager`
  (~60 kB no total). (2) As proporções dos dez arquivos vão de **1,37 a
  6,12** — 4,5x de variação. Limitando só a altura, os logos largos
  ficavam com o triplo da área dos estreitos; e `height: 100%` dentro de
  um `li` com `place-items: center` não resolvia contra a célula (medi
  94px numa faixa de 30px). Dimensão explícita 128x30 + `object-fit:
  contain` resolve os dois.
- **A barra de progresso de leitura saiu.** Em página única é ansiedade
  decorativa, e vinha com glow verde.
- **Rotação da ferramenta pausa com a aba oculta** e em
  `prefers-reduced-motion`. A headline visual é `aria-hidden`; leitores de
  tela recebem uma versão linear única.

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
- **Requisições externas**: nenhuma.
- **Larguras medidas**: 375, 768, 1440 — **nenhum overflow horizontal**.
  Os únicos elementos que passam do viewport são o degradê do hero e o
  trilho do marquee, ambos dentro de `overflow: hidden`.
- **Contraste**: varredura de todos os elementos com texto próprio (120
  no desktop, 119 no mobile), excluindo decorativos `aria-hidden`.
  **Zero falhas WCAG AA** em 375, 768 e 1440. Par mais apertado: 4,68:1
  contra mínimo de 4,5.
- **Quebras de linha**: medidas manchete a manchete. Quatro corrigidas
  nesta versão — o h1 estava em 4 linhas (`19ch` era estreito demais), o
  statement do problema em 4 (42px numa coluna de 491px, e a frase pedia
  673px), e o CTA final em 3 (pedia 653px numa coluna de 575px). Todas as
  `h2` da página fecham em **2 linhas**.
- **"Hero curtinha"**: hero + faixa de logos terminam a **601px** —
  cabem no fold a 900px de altura.
- **Altura da página**: 5.316px a 1440. A versão anterior tinha 8.424px.
- **Faixa de logos**: 20 de 20 imagens carregando, todas em caixa
  uniforme de 128x30. Dois bugs corrigidos aqui — ver abaixo.
- **Alvos de toque**: nenhum abaixo de 24px (WCAG 2.5.8).
- **Menu mobile**: abre, fecha, Esc fecha, trava e restaura o scroll.
- **Semântica**: um `h1`, 7 `section` todas com nome acessível, ordem de
  heading sem salto, skip link, `alt` em todas as imagens, `rel="noopener"`
  em todo link externo, nenhum `href="#"` renderizado como link, nenhuma
  âncora quebrada.

### Não verificado

**Screenshots são impossíveis neste ambiente** — a pane do navegador não
compõe frames, então o loop "renderize → screenshot → avalie" não pôde ser
executado. Tudo acima foi medido no DOM renderizado, o que pega geometria,
contraste, quebra de linha e estilo computado, mas **não substitui olhar a
página**. Igualmente não observáveis aqui: o marquee rolando, a rotação
Claude → ChatGPT → Gemini, a deriva do degradê e as transições de hover.

---

## Referências

- **[go9x.com](https://go9x.com)** — disciplina de copy e ordem dos
  argumentos.
- **FoundersOS** (`../FoundersOS`) — origem das fontes Inter auto-hospedadas.
