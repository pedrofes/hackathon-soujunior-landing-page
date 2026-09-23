export default function PlanCard({ plan }) {
  return (
    <article className="glass-card border border-white/20 rounded-3xl p-6 sm:p-8 lg:p-10 min-h-[250px] sm:min-h-[270px] flex flex-col justify-between select-none">
      <div>
        <p className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
          {plan.price}
          <span className="font-sans text-base sm:text-lg font-normal text-white/75 ml-1">
            {plan.period}
          </span>
        </p>

        <h3 className="mt-5 font-display text-lg sm:text-xl font-semibold text-white leading-snug">
          {plan.title}
        </h3>
      </div>

      <p className="mt-4 font-sans text-xs sm:text-sm text-white/80 leading-relaxed">
        {plan.description}
      </p>
    </article>
  );
}
