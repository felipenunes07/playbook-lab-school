import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { ClientLogos } from "./components/sections/ClientLogos";
import { SocialProof } from "./components/sections/SocialProof";
import { AdoptionGap } from "./components/sections/AdoptionGap";
import { Programs } from "./components/sections/Programs";
import { Tailored } from "./components/sections/Tailored";
import { FalseBeliefPace } from "./components/sections/FalseBeliefPace";
import { Practitioners } from "./components/sections/Practitioners";
import { Deliverables } from "./components/sections/Deliverables";
import { FalseBeliefImplementation } from "./components/sections/FalseBeliefImplementation";
import { WhyNow } from "./components/sections/WhyNow";
import { Resources } from "./components/sections/Resources";
import { Testimonials } from "./components/sections/Testimonials";
import { FinalCTA } from "./components/sections/FinalCTA";

/**
 * Ordem narrativa. Cada objeção aparece logo depois da seção que a
 * provoca, em vez de num bloco de FAQ:
 *   Programs/Tailored → "mas IA muda toda semana"
 *   Deliverables      → "mas ninguém implementa depois"
 * A objeção "meu time já é avançado" vive na régua de maturidade da
 * banda de prova, logo abaixo do hero, porque é lá que ela surge.
 *
 * Ritmo de fundo: creme → creme → argila → creme+grid → escuro →
 * creme → editorial → creme → creme → acento → creme → escuro.
 */
export default function App() {
  return (
    <>
      <a href="#conteudo" className="skip-link">
        Ir para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <ClientLogos />
        <SocialProof />
        <AdoptionGap />
        <Programs />
        <Tailored />
        <FalseBeliefPace />
        <Practitioners />
        <Deliverables />
        <FalseBeliefImplementation />
        <WhyNow />
        <Resources />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
