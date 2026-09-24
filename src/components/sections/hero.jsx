import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full flex flex-col justify-start pt-6 pb-8 sm:pt-8 sm:pb-12 md:min-h-[calc(100svh-76px)] md:pt-8 md:pb-0 lg:pt-10 px-4 sm:px-6 bg-accent overflow-hidden"
    >
      <div className="w-full max-w-[1220px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start justify-between">

        {/* Lado esquerdo: Narrativa, Textos e CTA */}
        <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl shrink-0 md:pt-6 lg:pt-10 xl:pt-12">
          
          <h1 className="font-display text-[28px] xs:text-[32px] sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight">
            Quem está começando <br />
            hoje pode{" "}
            <span className="text-yellow-accent">transformar</span> <br />
            a tecnologia amanhã.
          </h1>

          <p className="font-sans text-white/90 text-sm sm:text-base lg:text-lg xl:text-xl font-normal leading-relaxed mt-4 sm:mt-5 lg:mt-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            Apoie profissionais juniores e ajude a fortalecer uma comunidade que
            transforma início de carreira em oportunidade.
          </p>

          <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col items-center md:items-start w-full sm:w-auto">
            <a
              href="#planos"
              className="bg-dark-surface w-full max-w-[280px] sm:w-auto inline-flex items-center justify-center text-base sm:text-lg xl:text-xl text-white font-bold py-3.5 sm:py-4 px-8 sm:px-10 rounded-2xl hover:bg-dark-hover active:bg-primary transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl hover:shadow-[0_16px_36px_rgba(0,0,0,0.4)] text-center"
            >
              Apoie a SouJunior
            </a>

            <p className="text-white/75 mt-3 sm:mt-4 text-xs sm:text-sm xl:text-base font-sans">
              Apoie a partir de R$2/mês.
            </p>
          </div>
        </div>

        {/* Lado direito: Mascote 3D em camada sobreposta e escala proporcional conforme o Figma */}
        <div className="hidden md:flex shrink-0 items-center justify-center relative z-0 md:-ml-8 lg:-ml-12 xl:-ml-16 2xl:-ml-20 pointer-events-none select-none">
          <Image
            src="/sou_junior_mascote.svg"
            alt="Mascote da SouJunior comemorando com livros"
            width={640}
            height={677}
            priority
            className="w-[420px] md:w-[440px] lg:w-[500px] xl:w-[580px] 2xl:w-[640px] h-auto drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}