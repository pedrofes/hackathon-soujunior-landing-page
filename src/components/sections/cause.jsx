import CauseCarousel from "@/components/ui/CauseCarousel";
import { CAUSES } from "@/data/causes";

export default function Cause() {
  return (
    <section
      id="causa"
      aria-labelledby="causa-title"
      className="w-full py-20 px-4 sm:px-6 bg-secondary text-base-white border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2
          id="causa-title"
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
        >
          Por que apoiar?
        </h2>

        <p className="font-sans text-sm sm:text-base text-base-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          A SouJunior existe para fortalecer profissionais em início de carreira e criar um espaço onde conhecimento, oportunidades e colaboração possam circular.
        </p>

        {/* Carrossel infinito */}
        <CauseCarousel causes={CAUSES} />
      </div>
    </section>
  );
}
