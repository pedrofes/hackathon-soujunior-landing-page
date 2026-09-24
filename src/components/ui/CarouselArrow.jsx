"use client";

/**
 * Componente unificado e acessível para setas de navegação de carrosséis.
 * Possui touch target ergonômico (mínimo 44x44px), SVG minimalista e z-index protegido.
 */
export default function CarouselArrow({
  direction = "next",
  onClick,
  disabled = false,
  ariaLabel,
  className = "",
}) {
  const isPrev = direction === "prev";
  const defaultLabel = isPrev ? "Slide anterior" : "Próximo slide";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || defaultLabel}
      className={`z-20 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white/70 transition-all duration-200 hover:text-white hover:scale-110 active:scale-95 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white/80 disabled:pointer-events-none disabled:opacity-30 touch-manipulation cursor-pointer ${className}`}
    >
      <svg
        className="h-8 w-8 sm:h-9 sm:w-9"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        {isPrev ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        )}
      </svg>
    </button>
  );
}
