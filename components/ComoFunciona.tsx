const passos = [
  { num: "01", title: "Primeiro contato", desc: "Você envia uma mensagem contando um pouco de si — idade e dias/horários disponíveis — e recebemos seu pedido com cuidado." },
  { num: "02", title: "Conversa inicial", desc: "Um bate-papo breve e sem compromisso, só para nos conhecermos e entendermos sua necessidade." },
  { num: "03", title: "Avaliação social", desc: "Avaliamos juntos, sem burocracia, se o valor social é o mais adequado para o seu momento." },
  { num: "04", title: "Planejamento terapêutico", desc: "Traçamos um caminho de acompanhamento no seu ritmo, não no ritmo de um protocolo." },
  { num: "05", title: "Início do acompanhamento", desc: "O processo começa quando você estiver pronta — nunca antes disso." },
];

export default function ComoFunciona() {
  return (
    <section id="como" className="bg-cream-deep dark:bg-dark-surface py-22">
      <div className="max-w-[1080px] mx-auto px-7 py-16">
        <div className="text-[0.8rem] uppercase tracking-wider text-clay font-medium mb-3">Como funciona</div>
        <h2 className="font-serif font-normal text-[clamp(1.7rem,3.2vw,2.5rem)] leading-tight tracking-tight max-w-[640px]">
          Um caminho <em className="italic font-medium text-sage-deep dark:text-clay">leve</em> até o cuidado.
        </h2>

        <div className="mt-12 flex flex-col">
          {passos.map((p, i) => (
            <div
              key={p.num}
              className={`grid grid-cols-[64px_1fr] gap-6 py-6 border-t border-line dark:border-dark-line
                          ${i === passos.length - 1 ? "border-b" : ""}`}
            >
              <div className="font-serif italic text-[1.4rem] text-clay">{p.num}</div>
              <div>
                <h3 className="font-serif font-medium text-[1.15rem] mb-1.5">{p.title}</h3>
                <p className="text-[0.95rem] max-w-[520px] text-[#5a5847] dark:text-[#b5b19f]">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
