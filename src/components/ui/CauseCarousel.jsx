"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import CarouselArrow from "@/components/ui/CarouselArrow";
import CarouselDots from "@/components/ui/CarouselDots";

export default function CauseCarousel({ causes }) {
  const count = causes.length;
  const extendedCauses = [...causes, ...causes, ...causes];

  const [currentIndex, setCurrentIndex] = useState(count);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const isMoving = useRef(false);

  // Refs para controle preciso de Touch-Swipe no mobile
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchDeltaX = useRef(0);
  const isSwiping = useRef(false);

  // Navegar para o próximo card
  const goNext = useCallback(() => {
    if (isMoving.current) return;
    isMoving.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  // Navegar para o card anterior
  const goPrev = useCallback(() => {
    if (isMoving.current) return;
    isMoving.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  const handleTransitionEnd = (e) => {
    // Filtra para evitar que transições de elementos filhos disparem o fim do carrossel
    if (e && e.target !== e.currentTarget) return;

    isMoving.current = false;
    if (currentIndex >= count * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - count);
    } else if (currentIndex < count) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + count);
    }
  };

  // Navegação pelo teclado
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    }
  };

  // Gestos de Touch no mobile
  const handleTouchStart = (e) => {
    if (isMoving.current) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchDeltaX.current = 0;
    isSwiping.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isSwiping.current) return;
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = touchStartX.current - currentX;
    const diffY = touchStartY.current - currentY;

    // Se o usuário estiver fazendo scroll vertical da página, ignora o swipe
    if (Math.abs(diffY) > Math.abs(diffX)) {
      return;
    }

    touchDeltaX.current = diffX;
  };

  const handleTouchEnd = () => {
    if (!isSwiping.current) return;
    isSwiping.current = false;
    const threshold = 40; // 40px mínimo de deslocamento horizontal
    if (touchDeltaX.current > threshold) {
      goNext();
    } else if (touchDeltaX.current < -threshold) {
      goPrev();
    }
    touchDeltaX.current = 0;
  };

  // Pular para um card ao clicar nas dots
  const goToSlide = (dotIndex) => {
    if (isMoving.current) return;
    isMoving.current = true;
    setIsTransitioning(true);
    const activeDot = ((currentIndex % count) + count) % count;
    const diff = dotIndex - activeDot;
    setCurrentIndex((prev) => prev + diff);
  };

  // Entende qual card está em foco no momento
  const activeDotIndex = ((currentIndex % count) + count) % count;

  return (
    <div
      className="relative w-full max-w-6xl mx-auto px-8 sm:px-12 lg:px-14 focus:outline-hidden"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Motivos para apoiar a SouJunior"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div
        className="[--visible-count:1] sm:[--visible-count:2] lg:[--visible-count:3] overflow-hidden py-4 -mx-3"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(calc(-${currentIndex} * (100% / var(--visible-count))))`,
            transition: isTransitioning
              ? "transform 500ms cubic-bezier(0.25, 1, 0.5, 1)"
              : "none",
          }}
          className="flex will-change-transform select-none"
        >
          {extendedCauses.map((item, index) => {
            const isClone = index < count || index >= count * 2;
            return (
              <div
                key={`${item.id}-${index}`}
                className="shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3"
                aria-hidden={isClone ? "true" : undefined}
                {...(isClone ? { inert: "" } : {})}
              >
                <article className="relative h-[440px] rounded-2xl overflow-hidden border border-white/15 shadow-xl bg-secondary/40 group transition-all duration-300 hover:-translate-y-2 hover:border-primary/50">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none select-none"
                  />

                  {/* Overlay Escuro balanceado: topo nítido e base com contraste 100% legível */}
                  <div
                    className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 via-45% to-transparent pointer-events-none"
                    aria-hidden="true"
                  />

                  <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-end text-left z-10 pointer-events-none">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2 leading-tight drop-shadow-md">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-white/90 leading-relaxed drop-shadow-sm">
                      {item.description}
                    </p>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      {/* Botão Seta Voltar */}
      <CarouselArrow
        direction="prev"
        onClick={goPrev}
        ariaLabel="Card anterior"
        className="absolute left-0 sm:-left-3 lg:-left-6 top-1/2 -translate-y-1/2"
      />

      {/* Botão Seta Próximo */}
      <CarouselArrow
        direction="next"
        onClick={goNext}
        ariaLabel="Próximo card"
        className="absolute right-0 sm:-right-3 lg:-right-6 top-1/2 -translate-y-1/2"
      />

      {/* Dots de Paginação */}
      <CarouselDots
        count={count}
        activeIndex={activeDotIndex}
        onDotClick={goToSlide}
        getItemTitle={(index) => causes[index]?.title || `card ${index + 1}`}
        className="mt-8"
      />
    </div>
  );
}
