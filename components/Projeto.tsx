import { Leaf } from "./Leaf";
import { HandCoins, Ear, ShieldCheck, Users } from "lucide-react";

const valores = [
  {
    icon: HandCoins,
    title: "Valor social",
    desc: "Sessões com preço acessível pensado para caber no seu momento de vida, sem abrir mão da qualidade do atendimento.",
  },
  {
    icon: Ear,
    title: "Atendimento acolhedor",
    desc: "Escuta sem pressa, sem julgamento, com respeito à sua história.",
  },
  {
    icon: ShieldCheck,
    title: "Ética profissional",
    desc: "Cumprimento do Código de Ética do Conselho Federal de Psicologia, com sigilo e respeito à autonomia do paciente.",
  },
  {
    icon: Users,
    title: "Saúde mental acessível",
    desc: "A crença que sustenta o projeto desde o primeiro dia: cuidar da mente é direito, não privilégio.",
  },
];

export default function Projeto() {
  return (
    <section
      id="projeto"
      className="relative isolate overflow-hidden bg-cream-deep dark:bg-dark-surface py-22"
    >
      {/* Decoração responsiva */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute top-8 right-5 w-12 md:top-20 md:right-10 md:w-[120px]">
          <Leaf
            className="block h-auto w-full text-olive"
            size={120}
          />
        </div>

        <div className="absolute top-12 left-5 w-6 md:top-[180px] md:left-16 md:w-10">
          <Leaf
            className="block h-auto w-full text-sage float-leaf"
            size={40}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-[1080px] mx-auto px-4 py-16">
        {/* Cabeçalho */}
        <div className="text-center">
          <div className="text-[1.25rem] uppercase tracking-wider text-clay font-medium mb-3">
            O Projeto
          </div>

          <h2 className="font-serif font-normal text-[clamp(1.7rem,3.2vw,2.5rem)] leading-tight tracking-tight mx-auto">
            Nasceu de uma escuta{" "}
            <em className="italic font-medium text-sage-deep dark:text-clay">
              que não podia parar.
            </em>
          </h2>
        </div>

        {/* História */}
        <div className="mx-auto mt-14 space-y-6 text-center">
          <p className="text-[1.02rem] leading-8 text-[#4a4838] dark:text-[#c8c5b5]">
            Após a pandemia e a enchente que atingiu Petrópolis em 2022,
            muitas pessoas passaram a olhar para a própria saúde mental
            como nunca antes. Durante esse período, o atendimento
            psicológico oferecido nos abrigos foi essencial, mas teve
            duração limitada. Quando esse suporte terminou, muitas
            pessoas que ainda precisavam de acompanhamento ficaram sem
            alternativas para dar continuidade ao tratamento.
          </p>

          <p className="text-[1.02rem] leading-8 text-[#4a4838] dark:text-[#c8c5b5]">
            Foi dessa realidade que nasceu o{" "}
            <strong>Terapia para Todos</strong>: um projeto criado para
            ampliar o acesso à psicoterapia e garantir que ninguém
            precise interromper o cuidado com a própria saúde mental
            por falta de recursos.
          </p>
        </div>

        {/* Missão */}
        <div className="max-w-3xl mx-auto my-16">
          <div className="bg-cream dark:bg-dark-bg border border-line dark:border-dark-line rounded-[18px] p-10 text-center shadow-sm">
            <span className="block text-[0.78rem] uppercase tracking-wide text-sage-deep dark:text-clay mb-4">
              Nossa missão
            </span>

            <p className="font-serif italic text-[1.35rem] text-sage-deep dark:text-clay leading-relaxed">
              &ldquo;Facilitar o acesso à psicoterapia com acolhimento,
              ética e humanidade — porque cuidar da mente também deve
              ser um direito.&rdquo;
            </p>

            <div className="mt-8 pt-6 border-t border-line dark:border-dark-line">
              <p className="text-[#4a4838] dark:text-[#c8c5b5] leading-7">
                Hoje o projeto segue atendendo quem mais precisa, com
                o objetivo de expandir ainda mais o acesso — inclusive
                a públicos que ainda encontram poucas portas abertas
                na terapia.
              </p>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="mt-18">
          <div className="text-center mb-10">
            <span className="uppercase tracking-widest text-clay text-md">
              Nossos valores
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {valores.map((v) => (
              <div
                key={v.title}
                className="bg-cream dark:bg-dark-bg border border-line dark:border-dark-line rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-full bg-cream-deep dark:bg-dark-surface flex items-center justify-center mb-4">
                  <v.icon
                    className="w-6 h-6 text-clay"
                    strokeWidth={1.75}
                  />
                </div>

                <h3 className="font-serif text-xl font-medium mb-3">
                  {v.title}
                </h3>

                <p className="text-[#5a5847] dark:text-[#b5b19f] leading-7">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}