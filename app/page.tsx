import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import WaveDivider from "@/components/WaveDivider";
import Projeto from "@/components/Projeto";
import Psicologa from "@/components/Psicologa";
import ComoFunciona from "@/components/ComoFunciona";
import ParaQuem from "@/components/ParaQuem";
import Beneficios from "@/components/Beneficios";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#conteudo-principal" className="skip-link">Pular para o conteúdo</a>
      <SiteHeader />
      <main id="conteudo-principal" tabIndex={-1}>
        <Hero />
        <WaveDivider />
        <Projeto />
        <Psicologa />
        <WaveDivider flip />
        <ComoFunciona />
        <ParaQuem />
        <Beneficios />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
