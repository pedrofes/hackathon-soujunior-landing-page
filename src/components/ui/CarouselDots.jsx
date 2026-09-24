"use client";

/**
 * Componente unificado e reutilizável de indicadores (dots) para carrosséis.
 * Aplica o efeito de vidro (glassmorphism) translúcido e especular derivado da Navbar.
 */
export default function CarouselDots({
  count = 0,
  activeIndex = 0,
  onDotClick,
  ariaLabel = "Indicadores do carrossel",
  getItemTitle,
  className = "",
}) {
  if (count <= 1) return null;

  return (
    <ul
      className={`flex items-center justify-center gap-1.5 ${className}`}
      aria-label={ariaLabel}
    >
      {Array.from({ length: count }).map((_, index) => {
        const isActive = index === activeIndex;
        const itemTitle = getItemTitle ? getItemTitle(index) : `slide ${index + 1}`;

        return (
          <li key={index} className="flex items-center justify-center">
            <button
              type="button"
              onClick={() => onDotClick && onDotClick(index)}
              aria-label={`Ir para ${itemTitle}`}
              aria-current={isActive ? "true" : undefined}
              className="group flex h-9 w-9 items-center justify-center rounded-full transition-transform active:scale-90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white touch-manipulation cursor-pointer"
            >
              {/* Esfera de Vidro inspirada na Navbar */}
              <span
                className={`block rounded-full transition-all duration-300 ${
                  isActive
                    ? "h-3 w-3 bg-white shadow-[0_0_10px_rgba(255,255,255,0.9),0_2px_6px_rgba(0,0,0,0.3)] scale-110 border border-white"
                    : "h-2.5 w-2.5 glass-card border border-white/20 shadow-inner group-hover:scale-125"
                }`}
              />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
