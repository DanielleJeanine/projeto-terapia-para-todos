import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WaveDivider from "@/components/WaveDivider";
import Projeto from "@/components/Projeto";
import Psicologa from "@/components/Psicologa";
import ComoFunciona from "@/components/ComoFunciona";
import ParaQuem from "@/components/ParaQuem";
import Beneficios from "@/components/Beneficios";
import Faq from "@/components/Faq";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WaveDivider />
      <Projeto />
      <Psicologa />
      <WaveDivider flip />
      <ComoFunciona />
      <ParaQuem />
      <Beneficios />
      {/* <Faq /> */}
      <CtaFinal />
      <Footer />
    </>
  );
}
