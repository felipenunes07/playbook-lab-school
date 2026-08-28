/* ============================================================
   Fonte única de copy, links e dados.

   Base: brain-dump do Victor (23/08) — a narrativa e a ordem dos
   argumentos são dele. Aqui a copy foi refinada, passada para
   PT-BR consistente e amarrada aos números que ele confirmou:
   50+ empresas · 2k+ membros na comunidade · 60+ aulas.

   Nenhum componente de seção tem texto hardcoded.
   ============================================================ */

/* ---------- links ------------------------------------------------
   Verificados em playbooklab.com.br. O que não foi verificado está
   marcado PLACEHOLDER e aponta para "#" — assim nada inventado
   entra no ar como se fosse real.
   ------------------------------------------------------------- */
export const LINKS = {
  /** Real. Trocar por link de agendamento quando existir. */
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
  /** Aula pública real, verificada no YouTube em 28/08/2026. */
  youtube: "https://www.youtube.com/watch?v=SGz7D5aL2gM",
} as const;

export const CONTACT_URL = LINKS.contact;

export const CTA = {
  primary: "Falar com a Playbook",
  secondary: "Conhecer os programas",
} as const;

/* ---------- navegação ---------- */
export const NAV_LINKS = [
  { label: "Por que treinar", href: "#por-que-treinar" },
  { label: "Programas", href: "#programas" },
  { label: "Sobre", href: "#sobre" },
] as const;

/* ============================================================
   01 · HERO
   H1 do Victor, quebrada em três linhas para o payoff ("ROI")
   ganhar linha própria. O nome da ferramenta roda entre
   Claude / ChatGPT / Gemini e é a única cor viva da página.
   ============================================================ */
export const HERO = {
  eyebrow: "Treinamento corporativo de IA",
  headline: "Sua equipe já tem IA. Agora transforme isso em resultado.",
  subheadline:
    "Treinamentos corporativos para transformar o uso básico de IA em uma forma mais prática e consistente de trabalhar.",
  microcopy: "Online ou in-company, sempre conectado ao trabalho da equipe.",
} as const;

/* ---------- prova silenciosa, logo abaixo do hero ----------
   Reais: baixados do carousel de clientes da própria
   playbooklab.com.br. Todos em versão branca com transparência.

   ⚠️ Os arquivos de origem não trazem o nome das empresas, então os
   `alt` ficaram vazios e a faixa é rotulada como conjunto. Antes de
   publicar: confirmar autorização de uso de marca e preencher nomes. */
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

export const PROOF = {
  /* NBSP antes de "IA": na call o Victor apontou que "IA" estava
     caindo sozinho na linha de baixo. */
  label: "Onde já implementamos IA",
} as const;

/* ============================================================
   02 · O PROBLEMA
   "Assinar a IA foi a parte fácil" abre a seção — é a linha mais
   forte do brain-dump e funciona melhor aqui do que no hero.
   Os três sintomas são os do Victor, com uma linha de consequência
   cada, para não virar bullet solto.
   ============================================================ */
export const PROBLEM = {
  eyebrow: "A dor é conhecida",
  headline: "Você já passou por isso?",
  statement: ["Assinar a IA foi a parte fácil.", "Gerar resultado com ela é difícil."],
  lead: "A maioria dos fundadores e líderes está enfrentando o mesmo desafio: contrataram IA para o time e não estão vendo a performance melhorar.",
  symptoms: [
    {
      title: "As pessoas usam apenas o básico.",
      body: "A ferramenta virou um chat de perguntas soltas. Ninguém saiu do primeiro nível de uso.",
    },
    {
      title: "Os líderes não têm tempo de capacitar o time.",
      body: "Quem entende o suficiente para ensinar é justamente quem está mais ocupado entregando.",
    },
    {
      title: "As áreas ainda não pensaram em como implementar IA.",
      body: "Falta um plano por área: onde a IA entra, em qual processo e com qual resultado esperado.",
    },
  ],
  close: ["O investimento foi alto, mas o resultado não aparece.", "E a frustração só aumenta."],
} as const;

/* ============================================================
   03 · PROGRAMAS (tese + oferta, fundidas)
   Lista definida pelo Victor. `id` vira a âncora e alimenta a
   coluna do footer — mudar aqui propaga para os dois.
   ============================================================ */
export const PROGRAMS = [
  {
    id: "ai-foundations",
    name: "AI Foundations",
    format: "Online ou in-company",
    title: "Os fundamentos para toda a equipe.",
    body: "Coloca todo mundo no mesmo ponto de partida: como a IA funciona, o que ela faz bem, onde ela erra e como usar no trabalho de verdade.",
    forWho: "Quando o time inteiro precisa sair do básico ao mesmo tempo.",
    tags: ["Fundamentos", "Uso diário", "Turmas por área"],
  },
  {
    id: "ai-workshops",
    name: "AI Workshops",
    format: "In-company, por área",
    title: "Prática com os casos de uso da sua empresa.",
    body: "Sessões construídas sobre os processos reais do time. Cada exercício parte de um trabalho que a equipe já faz e termina em algo que ela continua usando.",
    forWho: "Para áreas que já sabem o básico e precisam aplicar no processo delas.",
    tags: ["Casos de uso reais", "Skills e workflows", "Hands-on"],
  },
  {
    id: "ai-tech-help",
    name: "AI Tech-help",
    format: "1:1, sob demanda",
    title: "Mentoria 1:1 quando o time trava.",
    body: "Sessões individuais para desbloquear implementação, revisar automações e tirar dúvidas de quem está construindo — no ritmo em que os problemas aparecem.",
    forWho: "Para quem já está construindo e precisa de alguém do lado.",
    tags: ["Mentoria 1:1", "Suporte técnico", "Sob demanda"],
  },
] as const;

/* Cabeçalho dos programas — era uma seção "Tese" separada, com um
   segundo título ("Três formas de instalar essa capacidade") logo
   abaixo. Na call o Victor pediu para fundir: a tese vira o título,
   e os três programas entram direto embaixo dela. */
export const PROGRAMS_HEAD = {
  eyebrow: "Como a Playbook resolve",
  headline: "Treinamento para cada etapa da sua equipe.",
  lead: "Ter acesso à ferramenta não basta. A Playbook transforma conhecimento solto em prática aplicada — do fundamento à implementação.",
  cta: "Conversar sobre este programa",
} as const;

export const WHY_TRAIN = {
  eyebrow: "Por que treinar sua equipe",
  headline: "Disponibilizar a ferramenta foi só o começo.",
  lead: "O resultado aparece quando a equipe entende onde a IA entra e aprende a usá-la no trabalho que já faz.",
  reasons: [
    {
      title: "Sair do uso básico.",
      body: "A IA deixa de ser um chat de perguntas soltas e passa a apoiar tarefas de verdade.",
    },
    {
      title: "Aplicar no processo real.",
      body: "Exemplos e exercícios partem dos casos que já existem dentro da empresa.",
    },
    {
      title: "Criar capacidade no time.",
      body: "Mais pessoas ganham repertório para usar IA sem depender sempre do mesmo líder.",
    },
  ],
} as const;

/* ============================================================
   04 · PERSONALIZAÇÃO
   As três colunas que o Victor escreveu em inglês, em PT-BR.
   ============================================================ */
export const TAILORED = {
  eyebrow: "Como funciona",
  headline: ["Desenhado com o seu time,", "não para um time genérico."],
  lead: "Suas ferramentas, seus casos e seu nível entram no método desde o começo.",
  /* Cada coluna: título, um parágrafo, e UMA linha de detalhe.
     Nada de lista vertical com marca em cada item.

     A versão com lista tinha 13 filetes e 13 checks na tela para dizer
     o que três frases dizem. O detalhe em prosa mantém o conteúdo
     concreto — as ferramentas, as áreas, os níveis — e tira a maior
     parte das linhas. */
  columns: [
    {
      key: "tools",
      title: "Suas ferramentas.",
      body: "Cada demo e cada exercício roda no stack que sua equipe já usa todo dia.",
      detail: "Claude · ChatGPT · Gemini · Copilot · Google Workspace · Microsoft 365",
    },
    {
      key: "cases",
      title: "Seus casos de uso.",
      body: "Os exercícios partem de workflows e processos reais do time, não de exemplos de aula.",
      detail: "Tarefa manual vira workflow. Documento disperso vira contexto consultável. Informação solta vira decisão assistida.",
    },
    {
      key: "level",
      title: "Seu nível.",
      body: "Numa turma com níveis misturados, cada participante sai de onde parou.",
      detail: "Iniciante · Intermediário · Avançado · Builder — quatro trilhas dentro do mesmo programa.",
    },
  ],
  steps: [
    {
      title: "Entendemos o contexto.",
      body: "Mapeamos as ferramentas, o nível e os desafios que a equipe encontra hoje.",
    },
    {
      title: "Desenhamos o treinamento.",
      body: "A trilha, os exemplos e os exercícios nascem desse contexto.",
    },
    {
      title: "Praticamos no trabalho real.",
      body: "A equipe aplica IA em processos e casos que já fazem parte da operação.",
    },
  ],
} as const;

/* ============================================================
   05 · AUTORIDADE
   O número que o Victor confirmou (50+) entra aqui, grande.
   ============================================================ */
export const AUTHORITY = {
  eyebrow: "Sobre a Playbook Lab",
  headline: ["Quem ensina", "também implementa."],
  /** Frase curta sob o título centralizado, antes da fileira de números. */
  lead: "A Playbook Lab não nasceu como escola. Nasceu implementando IA dentro de operações reais — e é de lá que vem tudo o que ensinamos.",
  /* Os três números confirmados pelo Victor, juntos numa fileira só.
     É o formato da seção da Stripe que ele apontou na call e chamou de
     "linda" — título centralizado, e embaixo as caixinhas com item 1,
     2, 3. Ficou SEM o gráfico generativo que acompanha a seção lá:
     "não com essa paradinha aqui, parece ouriço do mar, pô." */
  stats: [
    { value: "50+", label: "empresas onde já implementamos projetos de IA" },
    { value: "2k+", label: "membros na comunidade Playbook Lab" },
    { value: "60+", label: "aulas e tutoriais publicados de graça" },
  ],
  body: [
    "A experiência vem de projetos dentro de operações reais. É isso que mantém cada aula prática, direta e conectada ao que muda no trabalho da equipe.",
  ],
  quote:
    "Não começamos perguntando quais funcionalidades ensinar. Começamos perguntando como o trabalho deveria funcionar com IA.",
  image: {
    src: "/brand/executive-workshop.jpg",
    alt: "Equipe reunida em um workshop de IA conduzido pela Playbook Lab",
    caption: "Capacitação ao vivo, aplicada ao contexto da empresa.",
  },
} as const;

/* ============================================================
   06 · COMO ENSINAMOS — reversão de risco
   Os outros dois números do Victor moram aqui, porque é aqui que
   eles provam algo: 60+ aulas e 2k+ membros provam ensino, não
   implementação.
   ============================================================ */
export const TEACHING = {
  eyebrow: "Nossa forma de ensinar",
  headline: "Veja a Playbook em ação.",
  lead: "Aulas abertas e comunidade complementam a prova prática, sem substituir a conversa sobre o treinamento da sua equipe.",
  /* Sem número aqui: 60+ e 2k+ subiram para a fileira única de
     Autoridade. Repetir os dois na mesma página enfraquece os dois
     lugares. O trabalho desta seção é o link, não a métrica. */
  items: [
    {
      kind: "YouTube",
      title: "Uma aula prática, do início ao fim.",
      body: "Veja como ensinamos a analisar chamadas com IA, sem código.",
      cta: "Assistir à aula",
      href: LINKS.youtube,
    },
    {
      kind: "Comunidade",
      title: "Comunidade Playbook Lab.",
      body: "Conteúdos e materiais para quem quer aplicar IA e automação no dia a dia.",
      cta: "Entrar na comunidade",
      href: LINKS.community,
    },
  ],
} as const;

/* ============================================================
   07 · CTA FINAL
   ============================================================ */
export const FINAL_CTA = {
  eyebrow: "Próximo passo",
  statement: ["Vamos transformar IA", "em trabalho melhor feito?"],
  body: "Conte o que sua equipe já usa, onde ela trava e qual resultado precisa alcançar.",
  microcopy: "A conversa começa pela sua operação.",
} as const;

export const FAQ = {
  eyebrow: "Dúvidas essenciais",
  headline: "O que sua equipe precisa saber antes de começar.",
  items: [
    {
      question: "A equipe precisa ter experiência com IA?",
      answer: "Não existe um único ponto de entrada. O conteúdo é ajustado ao nível da equipe, do fundamento a quem já está construindo workflows e automações.",
    },
    {
      question: "Quais ferramentas entram no treinamento?",
      answer: "Trabalhamos com as ferramentas que a empresa já usa, como Claude, ChatGPT, Gemini, Copilot, Google Workspace e Microsoft 365.",
    },
    {
      question: "O treinamento é online ou presencial?",
      answer: "O AI Foundations pode ser online ou in-company. Os AI Workshops são in-company e organizados por área. O AI Tech-help acontece em sessões 1:1, sob demanda.",
    },
    {
      question: "É possível personalizar os exemplos?",
      answer: "Sim. Ferramentas, casos de uso e nível da equipe orientam o desenho do treinamento e dos exercícios.",
    },
    {
      question: "Como contratar?",
      answer: "Fale com a Playbook. A primeira conversa serve para entender a operação, o público e qual dos três programas faz sentido.",
    },
  ],
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
    title: "Conteúdos",
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
   CASES — pedido na call, ainda sem dado real.

   Victor: "colocar no site, que a gente tem pouca coisa de case no
   site"; "PDF por cliente, explicando o contexto geral, tudo o que
   foi feito, resultados atingidos"; "aí vem a chamadinha: olha como
   esse cliente passou de x pra y, cinco x aqui com automação".

   O array está VAZIO de propósito. A seção não renderiza enquanto
   estiver assim, então nenhum número inventado entra no ar. Assim
   que os dados chegarem, preencher aqui liga a seção inteira.

   O `before`/`after` é o formato que ele descreveu: "pergunta pro
   cara quanto tempo ele levava pra responder lead — nem que ele
   chute — aí agora a gente leva quinze segundos".
   ============================================================ */
export type Case = {
  /** Nome do cliente. Só entra com autorização de uso de marca. */
  company: string;
  /** Área ou setor, para o leitor se reconhecer. */
  sector: string;
  /** O que travava antes. */
  context: string;
  /** O que foi construído. */
  built: string;
  metric: { label: string; before: string; after: string };
  /** Opcional: o PDF do case que o Victor quer montar por cliente. */
  href?: string;
};

export const CASES: Case[] = [];

export const CASES_HEAD = {
  eyebrow: "Resultados",
  headline: "O que mudou depois do programa.",
  lead: "Antes e depois medido dentro da operação do cliente — não projeção.",
} as const;

/* ============================================================
   DEPOIMENTOS — também pedidos na call ("depoimentos é legal"),
   também sem dado real. Mesma regra: array vazio, seção não
   renderiza, nenhuma citação fabricada entra no ar.
   ============================================================ */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const TESTIMONIALS: Testimonial[] = [];

export const TESTIMONIALS_HEAD = {
  eyebrow: "Quem já passou pelo programa",
  headline: "O que as equipes dizem depois.",
} as const;
