"use client";

import { useEffect, useRef, useState } from "react";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/data/testimonials";

const AUTOPLAY_INTERVAL_MS = 3000;

export default function Testimonials() {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const indexRef = useRef(0);
  const isPausedRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index) => {
    indexRef.current = index;
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  // Autoplay: avança para o próximo depoimento a cada 3s.
  useEffect(() => {
    const interval = setInterval(() => {
      if (isPausedRef.current) return;
      goTo((indexRef.current + 1) % TESTIMONIALS.length);
    }, AUTOPLAY_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  // Mantém as bolinhas sincronizadas quando o usuário arrasta o scroll manualmente.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;

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
      setActiveIndex(closestIndex);
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateActiveFromScroll);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="depoimentos"
      className="flex w-full min-h-screen flex-col justify-center overflow-hidden bg-[#0E14BF] px-6 py-20 lg:py-28"
    >
      <h2 className="text-center font-display text-3xl font-extrabold text-white lg:text-4xl">
        Depoimentos
      </h2>

      <div
        ref={containerRef}
        onMouseEnter={() => (isPausedRef.current = true)}
        onMouseLeave={() => (isPausedRef.current = false)}
        className="mt-20 flex snap-x snap-mandatory gap-6 overflow-x-auto px-[max(1.5rem,calc(50%-170px))] pb-2 sm:px-[max(1.5rem,calc(50%-220px))] lg:mt-24 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <div
            key={testimonial.id}
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
            onClick={() => goTo(index)}
            aria-label={`Ir para o depoimento de ${testimonial.name}`}
            aria-current={index === activeIndex}
            className={`h-2 rounded-full transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
              index === activeIndex ? "w-4 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
