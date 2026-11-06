export default function CtaFinal() {
  const telefone = "5524992667998";
  const mensagem =
    "Olá! Vim pelo site e gostaria de saber mais sobre o Projeto Terapia para Todos e seus atendimentos.";


  const whatsappUrl = `https://wa.me/${telefone}?text=${encodeURIComponent(
    mensagem
  )}`;

  return (
    <section id="agendar" className="py-22">
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="bg-ink dark:bg-dark-surface text-cream rounded-[28px] px-10 py-12 text-center">
          <h2 className="font-serif font-normal text-[clamp(1.7rem,3.2vw,2.5rem)] leading-tight max-w-[600px] mx-auto">
            Dar o primeiro passo pode ser mais{" "}
            <em className="italic font-medium text-clay">simples</em> do
            que você imagina.
          </h2>

          <p className="text-[#c8c5b5] max-w-[480px] mx-auto my-5 font-light">
            Se você sente que precisa de um espaço de escuta, estamos
            aqui para conversar — sem pressa e sem julgamento.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-clay hover:bg-[#c99878] text-ink px-7 py-4 rounded-full text-[0.95rem] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 shrink-0"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.46 0 .1 5.36.1 11.95c0 2.1.55 4.16 1.6 5.97L0 24l6.25-1.64a11.94 11.94 0 0 0 5.8 1.48h.01c6.59 0 11.95-5.36 11.95-11.95 0-3.19-1.24-6.19-3.49-8.41ZM12.06 21.82a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.9 9.9 0 0 1-1.52-5.26c0-5.48 4.46-9.94 9.94-9.94a9.87 9.87 0 0 1 7.03 2.91 9.87 9.87 0 0 1 2.91 7.03c0 5.48-4.46 9.94-10 9.87Zm5.45-7.44c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
            </svg>

            Quero conversar
          </a>
        </div>
      </div>
    </section>
  );
}