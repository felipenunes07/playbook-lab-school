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
  /** PLACEHOLDER — o canal existe (60+ aulas), mas a URL não foi
      confirmada em nenhuma fonte do projeto. Enquanto for "#", o card
      e o link de footer renderizam como texto, não como link. */
  youtube: "#",
} as const;

export const CONTACT_URL = LINKS.contact;

export const CTA = {
  primary: "Falar com a Playbook",
  secondary: "Ver os programas",
} as const;

/* ---------- navegação ---------- */
export const NAV_LINKS = [
  { label: "O problema", href: "#problema" },
  { label: "Programas", href: "#programas" },
  { label: "Por que a Playbook", href: "#autoridade" },
  { label: "Como ensinamos", href: "#conteudos" },
] as const;

/* ============================================================
   01 · HERO
   H1 do Victor, quebrada em três linhas para o payoff ("ROI")
   ganhar linha própria. O nome da ferramenta roda entre
   Claude / ChatGPT / Gemini e é a única cor viva da página.
   ============================================================ */
export const HERO = {
  eyebrow: "Treinamento corporativo de IA",
  headlineBefore: "Você contratou",
  headlineAfter: "para sua equipe.",
  headlinePayoff: "Agora transforme isso em ROI.",
  /** Versão linear para leitores de tela, já que o nome é animado. */
  headlineA11y:
    "Você contratou Claude, ChatGPT ou Gemini para sua equipe. Agora transforme isso em ROI.",
  subheadline:
    "Aplicamos treinamentos e workshops corporativos para que sua equipe extraia o máximo da IA que você já está pagando.",
  microcopy: "Desenhamos o programa junto com a sua equipe.",
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
  eyebrow: "O problema",
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
  eyebrow: "A virada",
  headline: "Ferramenta sozinha não gera ROI.",
  lead: "A IA que você contratou não dá retorno porque as pessoas ainda não sabem aplicar no trabalho que fazem todo dia. Construímos treinamentos corporativos para capacitar equipes e líderes nas habilidades de IA.",
  cta: "Ver programa",
} as const;

/* ============================================================
   04 · PERSONALIZAÇÃO
   As três colunas que o Victor escreveu em inglês, em PT-BR.
   ============================================================ */
export const TAILORED = {
  eyebrow: "Personalização",
  headline: ["Personalizado", "para a sua realidade."],
  lead: "Cada treinamento é desenhado em cima do que sua equipe já tem em mão. Suas ferramentas, seus processos, seus casos de uso. Nada de exemplo genérico.",
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
} as const;

/* ============================================================
   05 · AUTORIDADE
   O número que o Victor confirmou (50+) entra aqui, grande.
   ============================================================ */
export const AUTHORITY = {
  eyebrow: "Por que a Playbook Lab",
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
    "Já implementamos projetos de IA dentro de mais de 50 empresas — de pequenos negócios a líderes de mercado. Sabemos exatamente como a IA precisa ser usada para gerar impacto de verdade.",
    "Viver o campo de batalha, tocando projetos de IA em operações grandes, foi o que nos deu a bagagem para fundar a escola.",
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
  eyebrow: "Ainda em dúvida?",
  headline: "Conheça nosso modo de ensinar antes de contratar.",
  lead: "Já educamos milhares de pessoas de graça, pelas nossas redes e pela comunidade. Nossa forma de ensinar está aberta — veja antes de levar para o seu time.",
  /* Sem número aqui: 60+ e 2k+ subiram para a fileira única de
     Autoridade. Repetir os dois na mesma página enfraquece os dois
     lugares. O trabalho desta seção é o link, não a métrica. */
  items: [
    {
      kind: "YouTube",
      title: "Aulas e tutoriais abertos.",
      body: "Casos práticos de IA aplicada ao trabalho, publicados toda semana.",
      cta: "Ver o canal",
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
  statement: ["Seu time está subutilizando a IA.", "E isso custa caro."],
  body: "A cada mês que passa a fatura do cartão aumenta e a produtividade segue no mesmo lugar. Vamos resolver isso.",
  microcopy: "Começamos entendendo a sua operação.",
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
