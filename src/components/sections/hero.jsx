"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <section id="hero" className="w-full min-h-screen -mt-[79px] pt-[79px] flex items-center px-6 border-b border-neutral/10 bg-[#0E14BF]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
                    <div className="text-left">
                        <div className="text-left">
                        <h1 className="font-display text-[52px] font-extrabold text-[#E7E8EA] mt-2 mb-6 text-left">
                            Quem está começando <br />
                            hoje pode <span className="text-yellow-accent">transformar</span> <br />
                            a tecnologia amanhã.
                        </h1>
                        <h3 className="font-sans text-[#E7E8EA] max-w-xl mb-8 text-left text-[24px]">
                            Apoie profissionais juniores e ajude a fortalecer uma<br />
                            comunidade que transforma início de carreira em<br /> oportunidade.
                        </h3>
                    </div>
                    <div className="text-left mt-10">
                        <button
                            onClick={() => {
                                setIsPressed(true);
                                document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className={`bg-[#171123] text-[24px] text-white font-bold py-3 px-6 w-[300px] h-[72px] rounded-2xl hover:bg-[#171123E5] active:bg-[#3C7EF9] transition-transform duration-200 hover:scale-105 ${isPressed ? "scale-105" : ""}`}
                        >
                            Apoie a SouJunior
                        </button>
                        <p className="text-[#E7E8EA] mt-6 text-[16.89px]">
                            Apoie a partir de R$2/mês.
                        </p>
                    </div>
                </div>
                <div className="shrink-0">
                    <Image
                        src="/sou_junior_mascote.svg"
                        alt="Mascote da SouJunior"
                        width={600}
                        height={600}
                        priority
                        className="w-full max-w-[500px] h-auto"
                    />
                </div>
            </div>
        </section>
    );
}
