const perguntas = [
  { q: "Quanto custa uma sessão?", a: "O valor é definido de forma transparente durante o primeiro contato, dentro da faixa social do projeto." },
  { q: "Como funciona o valor social?", a: "É uma faixa de preço reduzida para quem encontra barreiras financeiras para iniciar a terapia. A avaliação é feita com respeito e sem burocracia." },
  { q: "Atende adolescentes?", a: "Sim, com autorização dos responsáveis e respeitando o sigilo terapêutico." },
  { q: "Emite recibo?", a: "Sim. O recibo psicológico pode ser usado para reembolso ou dedução no Imposto de Renda." },
  { q: "Os atendimentos são online?", a: "Sim, por plataforma segura — e também presencial, conforme disponibilidade." },
  { q: "A terapia é sigilosa?", a: "Absolutamente. O sigilo é princípio fundamental do código de ética da profissão." },
];

export default function Faq() {
  return (
    <section id="faq" className="py-22">
      <div className="max-w-[1080px] mx-auto px-7 py-16">
        <div className="text-[0.8rem] uppercase tracking-wider text-clay font-medium mb-3">Perguntas frequentes</div>
        <h2 className="font-serif font-normal text-[clamp(1.7rem,3.2vw,2.5rem)] leading-tight tracking-tight max-w-[640px]">
          Tire suas <em className="italic font-medium text-sage-deep dark:text-clay">dúvidas.</em>
        </h2>

        <div className="mt-10">
          {perguntas.map((item, i) => (
            <details
              key={item.q}
              open={i === 0}
              className={`group border-t border-line dark:border-dark-line py-5 ${
                i === perguntas.length - 1 ? "border-b" : ""
              }`}
            >
              <summary className="cursor-pointer list-none flex justify-between items-center font-serif text-[1.05rem] font-medium">
                {item.q}
                <span className="text-clay text-2xl font-light transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3.5 text-[0.94rem] max-w-[640px] text-[#5a5847] dark:text-[#b5b19f]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
