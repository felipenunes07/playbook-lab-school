import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Problem } from "./components/sections/Problem";
import { Programs } from "./components/sections/Programs";
import { Method } from "./components/sections/Method";
import { Tailored } from "./components/sections/Tailored";
import { Authority } from "./components/sections/Authority";
import { Cases } from "./components/sections/Cases";
import { Testimonials } from "./components/sections/Testimonials";
import { Teaching } from "./components/sections/Teaching";
import { FinalCTA } from "./components/sections/FinalCTA";

/**
 * ORDEM NARRATIVA — outline do Victor, com as fusões que ele pediu
 * na call de 24/08.
 *
 *  01  Hero        Título, subtítulo, botões, empresas passando.
 *  02  Problema    "Assinar foi fácil" + 3 sintomas na vertical.
 *  03  Programas   "Ferramenta sozinha não gera ROI" É o título desta
 *                  seção — a tese e os três programas são uma coisa só.
 *  04  Como roda   A sequência de um programa in-company + os ativos
 *                  que ficam. É onde a página fala IA em concreto.
 *  05  Personaliz. Uma banda, três colunas.
 *  05  Autoridade  Sobre nós, com a foto + fileira 50+ / 2k+ / 60+.
 *  --  Cases       Pedidos na call. RENDERIZA NULL até ter dado real.
 *  --  Depoimentos Pedidos na call. RENDERIZA NULL até ter dado real.
 *  06  Conteúdos   Veja como ensinamos antes de contratar.
 *  07  CTA         Banda escura.
 *
 * Sete seções no ar. Cases e Depoimentos estão montados mas retornam
 * null enquanto os arrays em site.ts estiverem vazios: os dois foram
 * pedidos na call, e nenhum dos dois tem dado real ainda. Preencher o
 * array liga a seção — layout, responsivo e contraste já prontos.
 *
 * A Tese virou o cabeçalho de Programas, e a faixa de logos entrou no
 * Hero em vez de ser seção própria — "uma hero curtinha, aí alguns
 * [logos]".
 *
 * Superfície: branco · VERDE-CLARO · branco · VERDE-CLARO · branco ·
 * ESCURO. Alternância regular em vez de blocos aleatórios.
 */
export default function App() {
  return (
    <>
      <a href="#conteudo" className="skip-link">Ir para o conteúdo</a>
      <Navbar />

      <main id="conteudo">
        <Hero />
        <Problem />
        <Programs />
        <Method />
        <Tailored />
        <Authority />
        <Cases />
        <Testimonials />
        <Teaching />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
