import { Leaf } from "./Leaf";

export default function Hero() {
  return (
    <header className="relative isolate overflow-hidden pt-24 pb-20 md:pb-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute top-6 left-4 w-12 md:top-20 md:left-10 md:w-[120px]">
          <Leaf
            className="block h-auto w-full text-olive"
            size={120}
          />
        </div>

        <div className="absolute top-10 right-5 w-7 md:top-32 md:right-10 md:w-[60px]">
          <Leaf
            className="block h-auto w-full text-sage float-leaf"
            size={60}
          />
        </div>

        <div className="absolute bottom-4 left-6 w-6 md:bottom-20 md:left-16 md:w-10">
          <Leaf
            className="block h-auto w-full text-sage float-leaf"
            size={40}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-[1080px] mx-auto px-7 flex flex-col items-center text-center">
        <h1 className="font-serif font-normal leading-[1.08] tracking-tight text-[clamp(2.4rem,5.2vw,4rem)] max-w-[820px]">
          Toda pessoa merece um espaço seguro para cuidar da própria{" "}
          <em className="italic font-medium text-sage dark:text-clay">
            saúde mental
          </em>
          .
        </h1>

        <p className="mt-8 mb-4 max-w-[560px] text-[1.15rem] font-light text-[#5a5847] dark:text-[#c8c5b5]">
          O projeto{" "}
          <em className="italic font-semibold text-sage-deep dark:text-clay">
            Terapia para Todos
          </em>{" "}
          oferece atendimento psicológico com valores sociais, tornando a
          psicoterapia mais acessível, acolhedora e inclusiva para quem
          precisa de apoio emocional.
        </p>
      </div>
    </header>
  );
}