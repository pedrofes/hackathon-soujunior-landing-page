import CtaButton from "@/components/ui/CtaButton";
import PlanCarousel from "@/components/ui/PlanCarousel";
import { PLANS } from "@/data/plans";

export default function Plans() {
  return (
    <section className="w-full px-6 py-16 lg:py-24" id="planos">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          <span className="block">Apoie de forma</span>
          <span className="block">
            <span className="text-yellow-accent">simples</span> e{" "}
            <span className="text-yellow-accent">acessível</span>
          </span>
        </h2>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-12">
          <PlanCarousel plans={PLANS} />

          <div className="hidden w-px self-stretch bg-white/20 lg:block" />

          <div className="text-center lg:text-left">
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
              Faça parte dessa transformação.
            </h3>
            <p className="mt-4 font-sans text-sm sm:text-base text-white/90 leading-relaxed">
              Apoie quem está construindo o futuro na tecnologia.
            </p>
            <CtaButton
              href="https://apoia.se/soujunior"
              className="mt-8 shadow-xl hover:shadow-[0_16px_36px_rgba(0,0,0,0.4)]"
            >
              Apoie a SouJunior
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
