import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="hero"
            className="w-full min-h-[calc(100vh+100px)] -mt-[100px] pt-[100px] flex items-center px-6 md:max-[999px]:px-14 border-b border-neutral/10 bg-accent"
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
                <div className="text-left">
                    <div className="text-left">
                        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-base-white mt-2 mb-4 text-left leading-tight">
                            Quem está começando <br />
                            hoje pode <span className="text-yellow-accent">transformar</span> <br />
                            a tecnologia amanhã.
                        </h1>

                        <h3 className="font-sans text-base-white max-w-xl mb-6 text-left text-lg sm:text-xl font-normal leading-relaxed">
                            Apoie profissionais juniores e ajude a fortalecer uma<br />
                            comunidade que transforma início de carreira em<br /> oportunidade.
                        </h3>
                    </div>

                    <div className="text-left mt-8">
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

                <div className="shrink-0">
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