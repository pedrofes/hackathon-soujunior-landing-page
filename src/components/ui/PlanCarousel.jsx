"use client";

import { useState, useRef, useCallback } from "react";
import PlanCard from "./PlanCard";
import CarouselArrow from "@/components/ui/CarouselArrow";
import CarouselDots from "@/components/ui/CarouselDots";

export default function PlanCarousel({ plans }) {
  const [current, setCurrent] = useState(0);
  const count = plans.length;
  const hasMultiple = count > 1;

  // Refs para controle preciso de Touch-Swipe no mobile
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchDeltaX = useRef(0);
  const isSwiping = useRef(false);

  const goTo = useCallback(
    (index) => {
      setCurrent((index + count) % count);
    },
    [count]
  );

  const goPrev = useCallback(() => {
    goTo(current - 1);
  }, [current, goTo]);

  const goNext = useCallback(() => {
    goTo(current + 1);
  }, [current, goTo]);

  const handleKeyDown = (event) => {
    if (!hasMultiple) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  };

  // Touch handlers para suporte ergonômico a swipe no mobile
  const handleTouchStart = (e) => {
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

  return (
    <div
      className="relative w-full px-7 sm:px-9 focus:outline-hidden"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Planos de apoio"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Viewport do carrossel com deslizamento suave */}
      <div
        className="overflow-hidden py-3"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out will-change-transform"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {plans.map((plan, index) => {
            const isCurrent = index === current;
            return (
              <div
                key={plan.id}
                className="w-full shrink-0 px-2"
                aria-hidden={!isCurrent}
              >
                <PlanCard plan={plan} />
              </div>
            );
          })}
        </div>
      </div>

      {hasMultiple && (
        <span className="sr-only" aria-live="polite">
          {`Plano ${current + 1} de ${count}: ${plans[current].title}`}
        </span>
      )}

      {hasMultiple && (
        <>
          {/* Seta Anterior */}
          <CarouselArrow
            direction="prev"
            onClick={goPrev}
            ariaLabel="Plano anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2"
          />

          {/* Seta Próxima */}
          <CarouselArrow
            direction="next"
            onClick={goNext}
            ariaLabel="Próximo plano"
            className="absolute right-0 top-1/2 -translate-y-1/2"
          />

          {/* Dots de navegação em esfera de vidro */}
          <CarouselDots
            count={count}
            activeIndex={current}
            onDotClick={goTo}
            getItemTitle={(index) => plans[index]?.price || `plano ${index + 1}`}
            className="mt-6"
          />
        </>
      )}
    </div>
  );
}
