"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/data/testimonials";
import CarouselDots from "@/components/ui/CarouselDots";

// Triplicamos a lista para criar um loop contínuo e infinito sem saltos bruscos
const EXTENDED_TESTIMONIALS = [
  ...TESTIMONIALS,
  ...TESTIMONIALS,
  ...TESTIMONIALS,
];

export default function Testimonials() {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const isPausedRef = useRef(false);
  const pauseTimeoutRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Rolagem suave, contínua e dinâmica a 60fps usando requestAnimationFrame
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId;
    const speed = 0.8; // Velocidade fluida e confortável para leitura contínua

    const step = () => {
      if (!isPausedRef.current && container) {
        container.scrollLeft += speed;

        // Loop infinito: quando atinge a segunda metade do conteúdo duplicado, reposiciona imperceptivelmente
        const singleSetWidth = container.scrollWidth / 3;
        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft -= singleSetWidth;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += singleSetWidth;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  // Mantém os dots sincronizados com o depoimento mais próximo do centro
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;

    const updateActiveFromScroll = () => {
      ticking = false;
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + container.clientWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const cardCenter =
          card.getBoundingClientRect().left + card.clientWidth / 2;
        const distance = Math.abs(cardCenter - containerCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index % TESTIMONIALS.length;
        }
      });

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

  // Navegar diretamente para um depoimento ao clicar no dot
  const goTo = useCallback((targetIndex) => {
    const container = containerRef.current;
    if (!container) return;

    // Pausa temporariamente por 4 segundos para focar no card selecionado
    isPausedRef.current = true;
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, 4000);

    // Encontra o card correspondente mais próximo no conjunto intermediário
    const targetElement =
      cardRefs.current[targetIndex + TESTIMONIALS.length] ||
      cardRefs.current[targetIndex];
    if (!targetElement) return;

    const containerRect = container.getBoundingClientRect();
    const cardRect = targetElement.getBoundingClientRect();
    const cardOffsetLeft = cardRect.left - containerRect.left + container.scrollLeft;
    const targetScrollLeft =
      cardOffsetLeft - (container.clientWidth - cardRect.clientWidth) / 2;

    container.scrollTo({ left: targetScrollLeft, behavior: "smooth" });
  }, []);

  // Handlers para pausar ao passar o mouse ou interagir via toque
  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  const handleTouchStart = () => {
    isPausedRef.current = true;
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
  };

  const handleTouchEnd = () => {
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, 2500);
  };

  return (
    <section
      id="depoimentos"
      className="w-full overflow-hidden bg-accent px-4 sm:px-6 py-16 sm:py-20 lg:py-24"
    >
      <h2 className="text-center font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-8 sm:mb-12">
        Depoimentos
      </h2>

      <div className="flex flex-col justify-center">
        {/* Trilho de rolagem contínua fluida */}
        <div
          ref={containerRef}
          role="region"
          aria-label="Carrossel de depoimentos"
          tabIndex={0}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="flex gap-6 overflow-x-auto px-6 pb-4 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white/40 rounded-2xl [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden select-none cursor-grab active:cursor-grabbing will-change-scroll"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}
        >
          {EXTENDED_TESTIMONIALS.map((testimonial, index) => {
            const isClone = index >= TESTIMONIALS.length;
            return (
              <div
                key={`${testimonial.id}-${index}`}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="shrink-0"
                aria-hidden={isClone ? "true" : undefined}
                {...(isClone ? { inert: "" } : {})}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            );
          })}
        </div>

        {/* Indicadores sincronizados */}
        <CarouselDots
          count={TESTIMONIALS.length}
          activeIndex={activeIndex}
          onDotClick={goTo}
          getItemTitle={(index) =>
            TESTIMONIALS[index]?.name || `depoimento ${index + 1}`
          }
          className="mt-8"
        />
      </div>
    </section>
  );
}
