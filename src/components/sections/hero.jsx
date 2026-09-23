import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="hero"
            className="w-full min-h-[calc(100vh+100px)] -mt-[100px] pt-[100px] flex items-center px-3 md:px-6 border-b border-neutral/10 bg-accent"
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
                <div className="text-center min-[1000px]:text-left">
                    <div className="text-center min-[1000px]:text-left">

                        <h1 className="font-display text-[34px] md:text-[46px] min-[1000px]:text-5xl font-extrabold text-base-white mt-2 mb-12 md:mb-20 min-[1000px]:mb-4 text-center min-[1000px]:text-left leading-tight">
                            Quem está começando <br />
                            hoje pode <span className="text-yellow-accent">transformar</span> <br />
                            a tecnologia amanhã.
                        </h1>

                        <h3 className="font-sans text-base-white max-w-xl md:max-w-none min-[1000px]:max-w-xl mb-18 md:mb-40 min-[1000px]:mb-6 text-center min-[1000px]:text-left text-[16px] md:text-[22px] min-[1000px]:text-xl font-normal leading-relaxed">

                            {/* Celular */}
                            <span className="md:hidden">
                                Apoie profissionais juniores e ajude a fortalecer uma comunidade que transforma início de carreira em oportunidade.
                            </span>

                            {/* Tablet */}
                            <span className="hidden md:inline min-[1000px]:hidden">
                                Apoie profissionais juniores e ajude a fortalecer uma comunidade que
                                <br />
                                transforma início de carreira em oportunidade.
                            </span>

                            {/* Desktop */}
                            <span className="hidden min-[1000px]:inline">
                                Apoie profissionais juniores e ajude a fortalecer uma
                                <br />
                                comunidade que transforma início de carreira em
                                <br />
                                oportunidade.
                            </span>

                        </h3>
                    </div>

                    <div className="text-center min-[1000px]:text-left mt-4 min-[1000px]:mt-8">
                        <a
                            href="#planos"
                            className="bg-dark-surface inline-flex items-center justify-center text-lg sm:text-xl text-white font-bold py-4 px-8 rounded-2xl hover:bg-dark-hover active:bg-primary transition-all duration-200 hover:scale-105"
                        >
                            Apoie a SouJunior
                        </a>

                        <p className="text-base-white/80 mt-4 text-sm font-sans">
                            Apoie a partir de R$2/mês.
                        </p>
                    </div>
                </div>

                <div className="hidden min-[1000px]:block shrink-0">
                    <Image
                        src="/sou_junior_mascote.svg"
                        alt="Mascote da SouJunior"
                        width={500}
                        height={500}
                        priority
                        className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto"
                    />
                </div>
            </div>
        </section>
    );
}