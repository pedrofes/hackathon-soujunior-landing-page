"use client";

import { useState } from "react";
import PlanCard from "./PlanCard";

export default function PlanCarousel({ plans }) {
  const [current, setCurrent] = useState(0);
  const hasMultiple = plans.length > 1;

  const goTo = (index) => setCurrent((index + plans.length) % plans.length);
  const goPrev = () => goTo(current - 1);
  const goNext = () => goTo(current + 1);

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

  const arrowClasses =
    "absolute top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-2xl leading-none text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white";

  return (
    <div
      className="relative"
      role="group"
      aria-roledescription="carrossel"
      aria-label="Planos de apoio"
      onKeyDown={handleKeyDown}
    >
      <div aria-live="polite">
        <div
          role="group"
          aria-roledescription="slide"
          aria-label={`Plano ${current + 1} de ${plans.length}`}
        >
          <PlanCard plan={plans[current]} />
        </div>
      </div>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Plano anterior"
            className={`${arrowClasses} -left-3 lg:-left-10`}
          >
            <span aria-hidden="true">&lsaquo;</span>
          </button>

          <button
            type="button"
            onClick={goNext}
            aria-label="Próximo plano"
            className={`${arrowClasses} -right-3 lg:-right-10`}
          >
            <span aria-hidden="true">&rsaquo;</span>
          </button>

          <ul className="mt-6 flex justify-center gap-2">
            {plans.map((plan, index) => (
              <li key={plan.id}>
                <button
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Ir para o plano ${index + 1}`}
                  aria-current={index === current}
                  className={`h-2 rounded-full transition-all motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                    index === current ? "w-4 bg-white" : "w-2 bg-white/40"
                  }`}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
