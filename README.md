# Playbook Lab School — treinamento corporativo de IA

Landing page B2B da oferta de capacitação em IA da Playbook Lab.

```bash
npm install
npm run dev        # http://localhost:3010
npm run build      # typecheck + builds client e worker
npm run typecheck
```

React 18 + TypeScript + Vite, com CSS autoral e fontes auto-hospedadas.

## Estrutura atual

1. Hero: promessa direta, CTA comercial e uma composição estática que conecta ferramenta, processo e resultado.
2. Prova inicial: logos de clientes de implementação, identificados explicitamente como tal.
3. Programas: AI Foundations, AI Workshops e AI Tech-help em linhas amplas alternadas.
4. Como funciona: contexto, desenho do treinamento e prática com processos reais.
5. Autoridade: posicionamento “Quem ensina também implementa”, foto existente e números confirmados.
6. Prova complementar: uma aula pública real e a comunidade.
7. FAQ: nível, ferramentas, formato, personalização e contratação.
8. Próximo passo: CTA para o destino comercial já existente.

## Oferta confirmada

| Programa | Escopo preservado |
| --- | --- |
| AI Foundations | Fundamentos e aplicação de IA no trabalho; online ou in-company. |
| AI Workshops | Prática com processos e casos reais da empresa; in-company, por área. |
| AI Tech-help | Apoio técnico e mentoria 1:1, sob demanda, para destravar implementações. |

Links, textos, programas, FAQ e métricas ficam centralizados em `src/data/site.ts`.

## Direção visual

- Fundo principal branco e fundo secundário `#f7f9f8`.
- Verde de ação `#0d7d3c`; títulos em `#17382b`.
- Archivo para títulos e Inter para texto.
- Sem gradientes, manchas, carrosséis automáticos, troca de headline ou contadores.
- Ritmo de seção amplo, visual editorial e superfícies discretas.

## Pendências antes de publicar

- Confirmar o nome definitivo do braço de educação: a página usa Playbook Lab.
- Confirmar autorização de uso e nomes acessíveis dos logos de clientes. Os arquivos existentes não trazem os nomes.
- Adicionar cases e depoimentos somente quando houver conteúdo real e aprovado. As estruturas antigas continuam preservadas no código, mas não renderizam.
- Decidir se o contato continuará em `/contato/` ou se haverá formulário de diagnóstico na própria página.
- Confirmar se a foto `public/brand/executive-workshop.jpg` é a versão final aprovada para publicação.
- A versão publicada não foi usada como fonte de verdade porque o briefing não incluiu sua URL; o projeto local e as notas existentes prevaleceram.

## Referências usadas no redesign

- Viver de IA: branco, respiro e seções de entrega em linhas amplas.
- Livrobits: clareza da promessa e explicação do método em poucos passos.

Somente composição e princípios de hierarquia foram usados. Copy, métricas, imagens e identidade continuam sendo da Playbook Lab.
