import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Problem } from "./components/sections/Problem";
import { Programs } from "./components/sections/Programs";
import { Tailored } from "./components/sections/Tailored";
import { Authority } from "./components/sections/Authority";
import { FAQ } from "./components/sections/FAQ";
import { FinalCTA } from "./components/sections/FinalCTA";

/**
 * Narrativa V2: promessa → programas → método → autoridade → FAQ → contato.
 * Cases e depoimentos continuam preservados no código e só devem voltar
 * quando houver dados reais e aprovados.
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
        <Tailored />
        <Authority />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
