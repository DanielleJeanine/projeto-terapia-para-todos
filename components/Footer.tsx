export default function Footer() {
  return (
    <footer className="py-14">
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="flex justify-between flex-wrap gap-8 border-t border-line dark:border-dark-line pt-9">
          <div>
            <div className="font-serif font-medium text-lg mb-2.5">
              Terapia <span className="text-clay">para Todos</span>
            </div>
            <p className="text-[0.85rem] max-w-[320px] text-[#8a8770] dark:text-[#8a8770]">
              Um projeto social que acredita no direito ao cuidado emocional — com escuta,
              ética e acolhimento. Idealizado por Luziane Rodrigues.
            </p>
          </div>

          <div>
            <h4 className="text-[0.8rem] uppercase tracking-wide text-sage-deep dark:text-clay mb-3">Institucional</h4>
            <a href="#projeto" className="block text-[0.9rem] mb-2 text-[#5a5847] dark:text-[#b5b19f]">Sobre o projeto</a>
            <a href="#psicologa" className="block text-[0.9rem] mb-2 text-[#5a5847] dark:text-[#b5b19f]">A psicóloga</a>
            <a href="#faq" className="block text-[0.9rem] mb-2 text-[#5a5847] dark:text-[#b5b19f]">FAQ</a>
          </div>

          <div>
            <h4 className="text-[0.8rem] uppercase tracking-wide text-sage-deep dark:text-clay mb-3">Contato</h4>
            <a href="#" className="block text-[0.9rem] mb-2 text-[#5a5847] dark:text-[#b5b19f]">WhatsApp</a>
            <a href="#" className="block text-[0.9rem] mb-2 text-[#5a5847] dark:text-[#b5b19f]">contato@terapiaparatodos.com</a>
          </div>
        </div>

        <div className="mt-10 text-[0.8rem] text-[#a09d88] text-center">
          © 2026 Terapia para Todos · Luziane Rodrigues · CRP xx/xxxxx
        </div>
      </div>
    </footer>
  );
}
