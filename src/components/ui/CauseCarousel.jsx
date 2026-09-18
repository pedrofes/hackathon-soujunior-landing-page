"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

export default function CauseCarousel({ causes }) {
  const count = causes.length;
  const extendedCauses = [...causes, ...causes, ...causes];

  const [currentIndex, setCurrentIndex] = useState(count);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);
  const isMoving = useRef(false);

  // Detecta a largura da tela para saber quantos cards estão visíveis (1 mobile, 2 tablet, 3 desktop)
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(1);
      } else if (width < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

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

  const handleTransitionEnd = () => {
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

  // Pular para um card  ao clicar nas dots
  const goToSlide = (dotIndex) => {
    if (isMoving.current) return;
    isMoving.current = true;
    setIsTransitioning(true);
    const activeDot = ((currentIndex % count) + count) % count;
    const diff = dotIndex - activeDot;
    setCurrentIndex((prev) => prev + diff);
  };

  // Entende qual card em foco no momento
  const activeDotIndex = ((currentIndex % count) + count) % count;

  const arrowClasses =
    "flex items-center justify-center text-white/50 hover:text-white transition-all duration-200 hover:scale-125 active:scale-95 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white/50 rounded-lg p-1";

  return (
    <div
      className="relative w-full max-w-6xl mx-auto px-4 sm:px-10"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Motivos para apoiar a SouJunior"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="overflow-hidden py-4 -mx-3">
        <div
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            transition: isTransitioning
              ? "transform 500ms cubic-bezier(0.25, 1, 0.5, 1)"
              : "none",
          }}
          className="flex will-change-transform"
        >
          {extendedCauses.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3"
            >
              <article className="relative h-[440px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-secondary/40 group transition-all duration-300 hover:-translate-y-2 hover:border-primary/50">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  quality={90}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Overlay Escuro para facilitar a leitura do texto*/}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent"
                  aria-hidden="true"
                />

                <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-end text-left z-10">
                  <h3 className="font-display text-2xl font-bold text-white mb-2.5 leading-snug drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-white/95 leading-relaxed drop-shadow-sm">
                    {item.description}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Botão Seta Voltar*/}
      <button
        type="button"
        onClick={goPrev}
        aria-label="Card anterior"
        className={`${arrowClasses} absolute -left-2 sm:-left-6 lg:-left-8 top-1/2 -translate-y-1/2`}
      >
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Botão Seta Próximo*/}
      <button
        type="button"
        onClick={goNext}
        aria-label="Próximo card"
        className={`${arrowClasses} absolute -right-2 sm:-right-6 lg:-right-8 top-1/2 -translate-y-1/2`}
      >
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots de Paginação*/}
      <ul
        className="mt-8 flex justify-center items-center gap-2.5"
        aria-label="Indicadores do carrossel"
      >
        {causes.map((item, index) => {
          const isActive = index === activeDotIndex;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Ir para o card ${index + 1}: ${item.title}`}
                aria-current={isActive}
                className={`rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white ${
                  isActive
                    ? "w-7 h-2.5 bg-white shadow-md"
                    : "w-2.5 h-2.5 bg-white/40 hover:bg-white/75"
                }`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
