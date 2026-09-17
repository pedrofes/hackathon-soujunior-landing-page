import Image from "next/image";

export default function Hero() {
    return (
        <section id="hero" className="w-full py-16 px-6 border-b border-neutral/10 bg-[#0E14BF]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="text-left">
                    <h1 className="font-display text-4xl font-extrabold text-[#E7E8EA] mt-2 mb-4 text-left">
                        Quem está começando <br />
                        hoje pode <span className="text-yellow-accent">transformar</span> <br />
                        a tecnologia amanhã.
                    </h1>
                    <h3 className="font-sans text-[#E7E8EA] max-w-xl mb-6 text-left">
                        Apoie profissionais juniores e ajude a fortalecer uma<br />
                        comunidade que transforma início de carreira em<br /> oportunidade.
                    </h3>
                    <button className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-500">
                        Apoie a SouJunior
                    </button>
                </div>
                <div className="shrink-0">
                    <Image
                        src="/sou_junior_mascote.svg"
                        alt="Mascote da SouJunior"
                        width={500}
                        height={500}
                        priority
                        className="w-full max-w-[420px] h-auto"
                    />
                </div>
            </div>
        </section>
    );
}
