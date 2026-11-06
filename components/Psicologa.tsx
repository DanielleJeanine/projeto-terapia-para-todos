import Image from 'next/image';

const facts = ["Consulta online", "Escuta ativa", "Sigilo profissional", "Acolhimento sem julgamentos", "Atendimento humanizado"];

export default function Psicologa() {
  return (
    <section id="psicologa" className="py-22">
      <div className="max-w-[1080px] mx-auto px-7 py-16 grid md:grid-cols-[0.85fr_1.15fr] gap-16 items-center">
        <div
          className="aspect-[4/5] rounded-[20px] p-4 relative flex flex-col
                     bg-gradient-to-br from-sage to-sage-deep"
        >
          <div className="absolute inset-0 rounded-[20px] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_60%)]" />

          {/* Foto — ocupa a maior parte do card, moldura visível ao redor */}
          <div className="relative flex-1 rounded-[14px] overflow-hidden">
            <Image
              src="/images/dra-luziane.jpeg"
              alt="Luziane Rodrigues, psicóloga"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover object-[center_30%] rounded-[14px]"
              priority
            />
          </div>

          {/* Legenda — dentro da moldura, abaixo da foto */}
          <div className="relative z-10 text-cream text-[0.85rem] px-2 pt-4 pb-1">
            <strong className="block font-serif text-[1.3rem] font-medium mb-1">Luziane Rodrigues</strong>
            Psicóloga · Idealizadora do projeto <br/>
            CRP 05/67737
          </div>
        </div>

        <div>
          <div className="text-[1.25rem] uppercase tracking-wider text-clay font-medium mb-3">
            Quem está do outro lado
          </div>
          <h2 className="font-serif font-normal text-[clamp(1.7rem,3.2vw,2.5rem)] leading-tight tracking-tight">
            Uma trajetória que começou <em className="italic font-medium text-sage-deep dark:text-clay">com escuta.</em>
          </h2>
          <p className="font-serif italic text-[1.4rem] leading-snug text-sage-deep dark:text-clay my-6">
            &ldquo;O que mais me gratifica é ver alguém ressignificar sua própria história.&rdquo;
          </p>
          <p className="text-[1rem] text-[#4a4838] dark:text-[#c8c5b5]">
            Luziane chegou à Psicologia depois de uma vida inteira observando o comportamento
            humano com curiosidade genuína. O interesse sempre esteve ali — na atenção aos
            detalhes, na escuta atenta — até que ela decidiu torná-lo profissão. Hoje, o que
            mais a diferencia é justamente isso: um acolhimento sem julgamento, construído
            sessão após sessão.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-7">
            {facts.map((f) => (
              <span
                key={f}
                className="text-[0.82rem] border border-line dark:border-dark-line px-3.5 py-1.5 rounded-full text-sage-deep dark:text-clay"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}