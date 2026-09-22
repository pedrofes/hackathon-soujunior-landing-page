"use client";

import { useEffect, useRef, useState } from "react";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/data/testimonials";

const AUTOPLAY_INTERVAL_MS = 4500;
const COUNT = TESTIMONIALS.length;
// Triplica a lista para permitir loop infinito: sempre navegamos dentro da
// cópia do meio e "teletransportamos" (sem animação) de volta para lá assim
// que o autoplay ultrapassa uma das cópias extras nas pontas.
const EXTENDED_TESTIMONIALS = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

export default function Testimonials() {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const indexRef = useRef(COUNT);
  const isPausedRef = useRef(false);
  const isRealigningRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index, behavior = "smooth") => {
    indexRef.current = index;

    const container = containerRef.current;
    const card = cardRefs.current[index];
    if (!container || !card) return;

    // Rola apenas o eixo horizontal do carrossel: scrollIntoView também
    // rola a página inteira quando o card está fora da viewport vertical.
    const containerRect = container.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const cardOffsetLeft = cardRect.left - containerRect.left + container.scrollLeft;
    const targetScrollLeft = cardOffsetLeft - (container.clientWidth - card.clientWidth) / 2;

    container.scrollTo({ left: targetScrollLeft, behavior });
  };

  // Posiciona o carrossel na cópia do meio assim que os cards estão medidos,
  // sem nenhuma animação visível.
  useEffect(() => {
    goTo(COUNT, "auto");
  }, []);

  // Autoplay: avança para o próximo depoimento periodicamente, sem nunca parecer terminar.
  useEffect(() => {
    const interval = setInterval(() => {
      if (isPausedRef.current || isRealigningRef.current) return;
      goTo(indexRef.current + 1);
    }, AUTOPLAY_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  // Mantém as bolinhas sincronizadas e realinha o loop infinito quando o
  // scroll (por autoplay ou arraste manual) chega perto das cópias extras.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;
    let realignTimeout;

    const updateActiveFromScroll = () => {
      ticking = false;
      const containerCenter =
        container.getBoundingClientRect().left + container.clientWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const cardCenter =
          card.getBoundingClientRect().left + card.clientWidth / 2;
        const distance = Math.abs(cardCenter - containerCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      indexRef.current = closestIndex;
      setActiveIndex(((closestIndex % COUNT) + COUNT) % COUNT);

      // Espera o scroll assentar antes de checar se precisa realinhar,
      // evitando teletransportar o carrossel no meio de um gesto de arraste.
      clearTimeout(realignTimeout);
      realignTimeout = setTimeout(() => {
        if (closestIndex < COUNT) {
          isRealigningRef.current = true;
          goTo(closestIndex + COUNT, "auto");
          isRealigningRef.current = false;
        } else if (closestIndex >= COUNT * 2) {
          isRealigningRef.current = true;
          goTo(closestIndex - COUNT, "auto");
          isRealigningRef.current = false;
        }
      }, 150);
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateActiveFromScroll);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", handleScroll);
      clearTimeout(realignTimeout);
    };
  }, []);

  return (
    <section
      id="depoimentos"
      className="flex w-full min-h-screen flex-col overflow-hidden bg-accent px-6 py-16 lg:py-20"
    >
      <h2 className="-translate-y-6 text-center font-display text-[36px] font-bold text-white lg:-translate-y-8">
        Depoimentos
      </h2>

      <div className="flex flex-1 flex-col justify-center">
        <div
          ref={containerRef}
          onMouseEnter={() => (isPausedRef.current = true)}
          onMouseLeave={() => (isPausedRef.current = false)}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-[max(1.5rem,calc(50%-170px))] pb-2 sm:px-[max(1.5rem,calc(50%-220px))] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
        >
          {EXTENDED_TESTIMONIALS.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="shrink-0 snap-center"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Depoimentos">
          {TESTIMONIALS.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              onClick={() => goTo(COUNT + index)}
              aria-label={`Ir para o depoimento de ${testimonial.name}`}
              aria-current={index === activeIndex}
              className={`h-2 rounded-full transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                index === activeIndex ? "w-4 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
