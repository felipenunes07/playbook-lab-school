/* ============================================================
   Single source of truth for copy, links and data.
   Edit here — no section component hardcodes content.
   ============================================================ */

/* ---------- links ------------------------------------------------
   Verified against playbooklab.com.br and the Playbook Lab offer
   docs. Anything not verified is marked PLACEHOLDER and points at
   "#" so nothing invented ships as if it were real.
   ------------------------------------------------------------- */
export const LINKS = {
  /** Real: the live contact page. Swap for a scheduling link when one exists. */
  contact: "https://playbooklab.com.br/contato/",
  /** Real */
  site: "https://playbooklab.com.br",
  /** Real */
  community: "https://comunidade.playbooklab.com.br/",
  /** Real */
  materials: "https://playbooklab.com.br/materiais/",
  /** Real */
  about: "https://playbooklab.com.br/sobre/",
  /** Real */
  services: "https://playbooklab.com.br/servicos/",
  /** Real */
  linkedin: "https://www.linkedin.com/company/playbooklab",
  /** PLACEHOLDER — no official channel URL found in project sources. */
  youtube: "#",
} as const;

export const CONTACT_URL = LINKS.contact;

export const CTA = {
  primary: "Falar com a Playbook",
  secondary: "Conhecer os programas",
} as const;

/* ---------- navigation ---------- */
export const NAV_LINKS = [
  { label: "Programas", href: "#programas" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Quem conduz", href: "#autoridade" },
  { label: "O que fica", href: "#entregaveis" },
] as const;

/* ---------- hero ----------
   Opção A do briefing. A headline é partida em torno do chip da
   ferramenta, que roda entre Claude / ChatGPT / Gemini.
   Alternativas mantidas para teste:
   B "Você colocou [x] nas mãos do seu time." / "Agora faça isso mudar a forma como ele trabalha."
   C "Sua equipe já tem [x]." / "Agora faça ela trabalhar diferente."
   D "Você já investiu em [x]." / "Agora coloque esse investimento para trabalhar." */
export const HERO = {
  eyebrow: "IA aplicada ao trabalho real",
  headlineBefore: "Você contratou",
  headlineAfter: "para sua equipe.",
  headlineRoi: "Agora transforme isso em ROI.",
  /** Versão linear para leitores de tela, já que o chip é animado. */
  headlineA11y:
    "Você contratou Claude, ChatGPT ou Gemini para sua equipe. Agora transforme isso em ROI.",
  subheadline:
    "Treinamento prático de IA, conduzido por quem implementa e construído sobre as ferramentas, processos e casos reais da sua empresa.",
  microcopy: "Desenhamos o programa junto com sua equipe.",
} as const;

/* ---------- social proof ----------
   Only the two numbers the business actually has. No third stat
   invented to fill a grid, and no client logo strip, since no real
   client logo files exist anywhere in the project. */
export const PROOF = {
  eyebrow: "Quem conduz",
  clientsLabel: "Operações onde já implementamos",
  lead: "A Playbook Lab entrou em produção antes de entrar em sala de aula.",
  stats: [
    { value: "45+", label: "empresas atendidas" },
    { value: "230+", label: "projetos de IA entregues" },
  ],
} as const;

/* ---------- logos de clientes ----------
   Reais: baixados do carousel de clientes da própria playbooklab.com.br.
   Todos em versão branca com transparência, feitos para fundo escuro.

   ⚠️ Os arquivos de origem não trazem o nome das empresas, então os `alt`
   ficaram vazios e a faixa é rotulada como conjunto. Antes de publicar,
   confirmar que todas as marcas podem ser exibidas e preencher os nomes. */
export const CLIENT_LOGOS = [
  "/clientes/automotive-1024x365-1-1.png",
  "/clientes/download-10-1-1-1.png",
  "/clientes/download-8-1-1-1.png",
  "/clientes/frame-74-2-1.png",
  "/clientes/group-2.png",
  "/clientes/idnklkvs2h-1770035839599-1-1.png",
  "/clientes/idpmhegfru-logos-1-1-1.png",
  "/clientes/mask-group-5.png",
  "/clientes/motorista-px-white-1.png",
  "/clientes/pjus-1-1-1.png",
] as const;

/* ---------- adoption gap ---------- */
export const ADOPTION_GAP = {
  eyebrow: "O gap de adoção",
  headline: "Onde o investimento em IA trava.",
  lead: "Comprar as ferramentas é só o começo. O desafio é transformar acesso em uma nova forma de trabalhar.",
  problems: [
    {
      index: "01",
      title: "Ferramentas sozinhas não mudam o trabalho.",
      body: "Sua equipe pode ter Claude, ChatGPT ou Copilot e continuar executando praticamente os mesmos processos da mesma forma.",
    },
    {
      index: "02",
      title: "Casos de uso são o verdadeiro gargalo.",
      body: "O desafio não é descobrir mais ferramentas. É encontrar onde IA realmente melhora um processo que já existe.",
    },
    {
      index: "03",
      title: "Conhecimento isolado não vira capacidade.",
      body: "Algumas pessoas avançam rápido. Mas os melhores prompts, Skills e workflows raramente viram uma forma compartilhada de trabalhar.",
    },
  ],
  statement: [
    "O problema não é ter IA.",
    "É fazer ela mudar a forma como sua empresa trabalha.",
  ],
} as const;

/* ---------- programs ----------
   `id` and `name` are working names: change them here and the cards,
   the footer column and the anchors all follow. */
export const PROGRAMS = [
  {
    id: "ai-foundations",
    name: "AI Foundations",
    title: "Faça toda a equipe trabalhar melhor com IA.",
    body: "Para criar uma base comum de uso, aumentar adoção e ajudar cada pessoa a identificar onde IA pode melhorar seu trabalho.",
    tags: ["Fundamentos", "Uso diário", "Casos de uso"],
    /** Diagrama do card — a lógica do programa em três passos. */
    flow: ["Prompt", "Contexto", "Resultado"],
    cta: "Conhecer programa",
  },
  {
    id: "ai-workflows",
    name: "AI Workflows",
    title: "Transforme IA em parte do trabalho diário.",
    body: "Para equipes prontas para sair de prompts isolados e transformar tarefas recorrentes em Skills, workflows e sistemas reutilizáveis.",
    tags: ["Skills", "Workflows", "Contexto"],
    flow: ["Tarefa", "Skill", "Workflow"],
    cta: "Conhecer programa",
  },
  {
    id: "ai-builders",
    name: "AI Builders",
    title: "Desenvolva capacidade interna para construir.",
    body: "Para pessoas que precisam avançar para automações, agentes, integrações e pequenas ferramentas internas.",
    tags: ["Automação", "Agentes", "Internal tools"],
    flow: ["Workflow", "API", "Agente"],
    cta: "Conhecer programa",
  },
] as const;

/** Progressão mostrada no card largo de Builders. */
export const BUILDER_LADDER = [
  { label: "User", note: "Usa a ferramenta" },
  { label: "Operator", note: "Desenha o workflow" },
  { label: "Builder", note: "Constrói o sistema" },
] as const;

export const PROGRAMS_HEAD = {
  eyebrow: "Programas",
  headline: "Um caminho para cada nível de maturidade.",
  lead: "Da adoção em toda a empresa à formação de pessoas capazes de construir com IA.",
} as const;

/* ---------- built around your team ---------- */
export const TAILORED = {
  eyebrow: "Como trabalhamos",
  headline: ["Feito para sua equipe.", "Construído sobre o trabalho real."],
  lead: "Não ensinamos IA através de exemplos genéricos. O programa é adaptado ao ambiente onde sua equipe realmente trabalha.",
  columns: [
    {
      title: "Suas ferramentas.",
      body: "Usamos o stack que sua empresa já utiliza. Claude, ChatGPT, Copilot, Gemini, Google Workspace, Microsoft, CRM e outras ferramentas relevantes.",
    },
    {
      title: "Seus processos.",
      body: "Os exemplos, demos e exercícios partem de workflows e processos reais da equipe.",
    },
    {
      title: "Seu nível.",
      body: "Iniciantes começam pelos fundamentos. Usuários avançados podem avançar para Skills, workflows, automações e agentes.",
    },
  ],
} as const;

/* ---------- practitioner positioning ---------- */
export const PRACTITIONERS = {
  eyebrow: "Por que Playbook Lab",
  headline: "Quem ensina também implementa.",
  statement:
    "A Playbook Lab não nasceu como escola. Nasceu construindo sistemas de IA dentro de empresas reais.",
  body: "O que ensinamos nasce da execução. Isso muda nossa forma de abordar treinamento: em vez de perguntar apenas o que uma ferramenta consegue fazer, começamos entendendo como o trabalho da sua equipe deveria funcionar.",
  quote: {
    beforeLabel: "Não começamos com:",
    before: "Que funcionalidades precisamos ensinar?",
    afterLabel: "Começamos com:",
    after: "Como esse trabalho deveria funcionar com IA?",
  },
  /* PLACEHOLDER — no team/workshop photograph exists in the project.
     Drop a real file in /public/brand and point `src` at it to enable
     the photo; until then the section renders a labelled empty frame. */
  image: {
    src: null as string | null,
    alt: "Equipe da Playbook Lab durante uma implementação com o time do cliente",
  },
} as const;

/* ---------- resources / risk reversal ---------- */
export const RESOURCES = {
  eyebrow: "Antes de decidir",
  headline: "Veja como ensinamos antes de levar para sua equipe.",
  lead: "Nossa abordagem já está aberta em conteúdos, aulas e materiais. Conheça como pensamos e ensinamos antes de conversar sobre um programa corporativo.",
  items: [
    {
      kind: "Comunidade",
      title: "Comunidade Playbook Lab",
      body: "Conteúdos e materiais práticos para quem quer aplicar IA e automação no trabalho.",
      cta: "Conhecer comunidade",
      href: LINKS.community,
    },
    {
      kind: "Vídeos",
      title: "YouTube",
      body: "Tutoriais e casos práticos de IA aplicada a vendas e operações.",
      cta: "Assistir conteúdos",
      href: LINKS.youtube,
    },
    {
      kind: "Materiais",
      title: "Materiais práticos",
      body: "Workflows, templates e conteúdos construídos a partir da operação da Playbook Lab.",
      cta: "Explorar materiais",
      href: LINKS.materials,
    },
  ],
} as const;

/* ---------- testimonials ----------
   Intentionally empty. The Testimonials component renders nothing
   while this array is empty, so no fabricated quote can ship. Add
   real entries (quote/name/role/company) to switch the section on. */
export type Testimonial = {
  highlight: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
};

export const TESTIMONIALS: Testimonial[] = [];

/* ---------- final CTA ---------- */
export const FINAL_CTA = {
  headline: "Coloque suas ferramentas de IA para trabalhar.",
  lead: "Vamos entender sua equipe, seus processos e onde um programa de capacitação e implementação de IA pode gerar mais impacto.",
  microcopy: "Começamos entendendo sua operação.",
} as const;

/* ---------- footer ---------- */
export const FOOTER_COLUMNS = [
  {
    title: "Programas",
    links: PROGRAMS.map((p) => ({ label: p.name, href: `#${p.id}` })),
  },
  {
    title: "Playbook Lab",
    links: [
      { label: "Sobre", href: LINKS.about },
      { label: "Serviços", href: LINKS.services },
      { label: "Contato", href: LINKS.contact },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Comunidade", href: LINKS.community },
      { label: "YouTube", href: LINKS.youtube },
      { label: "Materiais", href: LINKS.materials },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "LinkedIn", href: LINKS.linkedin },
      { label: "YouTube", href: LINKS.youtube },
    ],
  },
] as const;

/* ============================================================
   Momentos de quebra de objeção.

   Não viram uma seção "objeções": cada um é um statement editorial
   grande, colocado no ponto da narrativa onde a dúvida aparece
   naturalmente. Um argumento por momento.
   ============================================================ */
export const FALSE_BELIEFS = {
  /** Depois de Programs + Tailored: "mas IA muda toda semana". */
  pace: {
    eyebrow: "Mas IA muda toda semana.",
    headline: "Exatamente.",
    statement: ["Por isso não ensinamos ferramentas.", "Ensinamos uma forma de trabalhar."],
    body: "Modelos mudam. Interfaces mudam. A capacidade de encontrar casos de uso, criar contexto e transformar trabalho em workflows continua.",
    /** Rotativo no visual: o que muda por cima da estrutura que fica. */
    changing: ["Modelos", "Interfaces", "Preços", "Funcionalidades", "Fornecedores"],
    stable: "Encontrar casos de uso · Estruturar contexto · Transformar trabalho em workflow",
  },
  /** Depois de Deliverables: "ninguém implementa depois". */
  implementation: {
    eyebrow: "Mas depois ninguém implementa.",
    headline: "Então não deixamos a implementação para depois.",
    body: "Os próprios processos entram no treinamento. Sua equipe aprende trabalhando sobre problemas que já existem.",
    steps: ["Trabalho real", "Treinamento", "Construído", "Em uso"],
  },
  /** Perto de Programs: "meu time já é avançado". */
  maturity: {
    eyebrow: "Meu time já usa IA.",
    headline: "Ótimo. Então não começamos do zero.",
    body: "Usuários avançados podem ir direto para Skills, workflows, automações e builders.",
    scale: [
      { label: "Iniciante", note: "Fundamentos e uso diário" },
      { label: "Intermediário", note: "Contexto e Skills" },
      { label: "Avançado", note: "Workflows e automações" },
      { label: "Builder", note: "Agentes e ferramentas internas" },
    ],
  },
} as const;

/* ============================================================
   O que fica depois do programa — responde "what do I actually get?".
   Duas colunas: pessoas e sistemas. Sem lista gigante.
   ============================================================ */
export const DELIVERABLES = {
  eyebrow: "O que fica",
  headline: ["Seu time aprende.", "Sua empresa fica com o que foi construído."],
  lead: "Um programa de IA aplicada não termina em certificado. Termina em capacidade instalada e em ativos que continuam sendo usados.",
  columns: [
    {
      kind: "Pessoas",
      title: "Gente capaz de conduzir.",
      items: [
        "Usar as ferramentas com método",
        "Identificar casos de uso no próprio trabalho",
        "Estruturar contexto que a IA entende",
        "Construir o que a equipe repete",
      ],
    },
    {
      kind: "Sistemas",
      title: "Ativos que permanecem.",
      items: ["Skills", "Workflows", "Playbooks", "Automações", "Roadmap de evolução"],
    },
  ],
} as const;

/* ============================================================
   Why now — fecha a conta do ROI. Sem urgência artificial:
   nenhuma vaga limitada, nenhum prazo, nenhum desconto.
   ============================================================ */
export const WHY_NOW = {
  eyebrow: "Por que agora",
  /* Opção B do briefing, que era a preferida para teste.
     A: ["O custo da IA já existe.", "O ROI ainda precisa aparecer."] */
  headline: ["Você já está pagando pela ferramenta.", "Quanto trabalho ela já mudou?"],
  body: "Cada mês em que Claude, ChatGPT ou Gemini continuam sendo usados apenas como chat é mais um mês em que parte do investimento fica parado.",
  /** Ponte investimento → ROI. Conceitual, sem números inventados. */
  bridge: [
    { step: "Investimento", note: "Licenças já contratadas" },
    { step: "Comportamento", note: "A equipe muda como trabalha" },
    { step: "Workflows", note: "O trabalho vira processo" },
    { step: "ROI", note: "O investimento aparece no resultado" },
  ],
} as const;
