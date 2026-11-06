const itens = [
  { title: "Ansiedade", desc: "Para acalmar pensamentos acelerados.", destaque: false },
  { title: "Depressão", desc: "Para reencontrar sentido e leveza.", destaque: false },
  { title: "Luto", desc: "Para atravessar perdas com apoio.", destaque: false },
  { title: "Baixa autoestima", desc: "Para reconstruir a relação consigo.", destaque: false },
  { title: "Relacionamentos", desc: "Para vínculos mais claros e saudáveis.", destaque: false },
  { title: "Transições de vida", desc: "Para momentos de mudança e recomeço.", destaque: false },
];

export default function ParaQuem() {
  return (
    <section id="quem" className="py-22">
      <div className="max-w-[1080px] mx-auto px-7 py-16">
        <div className="text-[0.8rem] uppercase tracking-wider text-clay font-medium mb-3">Para quem é</div>
        <h2 className="font-serif font-normal text-[clamp(1.7rem,3.2vw,2.5rem)] leading-tight tracking-tight max-w-[640px]">
          Você não precisa ter um motivo <em className="italic font-medium text-sage-deep dark:text-clay">&ldquo;grande&rdquo;.</em>
        </h2>

        <div className="mt-11 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-line dark:bg-dark-line border border-line dark:border-dark-line rounded-2xl overflow-hidden">
          {itens.map((item) => (
            <div
              key={item.title}
              className={
                item.destaque
                  ? "bg-sage p-6"
                  : "bg-cream dark:bg-dark-bg p-6"
              }
            >
              <h3 className={`font-serif font-medium text-base mb-1.5 ${item.destaque ? "text-cream" : ""}`}>
                {item.title}
              </h3>
              <p className={`text-[0.87rem] ${item.destaque ? "text-cream/90" : "text-[#5a5847] dark:text-[#b5b19f]"}`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
