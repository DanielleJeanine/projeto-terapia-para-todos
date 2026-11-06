const beneficios = [
  { title: "Qualidade de vida", desc: "Mais leveza no dia a dia, dentro e fora da sessão." },
  { title: "Autoconhecimento", desc: "Compreender-se com mais clareza e menos autocrítica." },
  { title: "Inteligência emocional", desc: "Nomear o que sente para lidar melhor com isso." },
  { title: "Relações mais saudáveis", desc: "Vínculos mais claros e verdadeiros." },
  { title: "Redução da ansiedade", desc: "Ferramentas reais para acalmar a mente." },
  { title: "Autoestima fortalecida", desc: "Um olhar mais gentil para si mesma." },
];

export default function Beneficios() {
  return (
    <section className="bg-cream-deep dark:bg-dark-surface py-22">
      <div className="max-w-[1080px] mx-auto px-7 py-16">
        <div className="text-[0.8rem] uppercase tracking-wider text-clay font-medium mb-3">Benefícios</div>
        <h2 className="font-serif font-normal text-[clamp(1.7rem,3.2vw,2.5rem)] leading-tight tracking-tight max-w-[640px]">
          O que <em className="italic font-medium text-sage-deep dark:text-clay">floresce</em> quando você se escuta.
        </h2>

        <div className="mt-11 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
          {beneficios.map((b) => (
            <div key={b.title}>
              <h3 className="font-serif font-medium text-[1.05rem] mb-2">{b.title}</h3>
              <p className="text-[0.88rem] text-[#5a5847] dark:text-[#b5b19f]">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
