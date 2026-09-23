export default function PlanCard({ plan }) {
  return (
    <article className="glass-card border border-white/20 rounded-3xl overflow-hidden p-5 sm:p-7 lg:p-9 min-h-[230px] sm:min-h-[260px] flex flex-col justify-between select-none">
      <div>
        <p className="font-display text-2xl xs:text-3xl sm:text-4xl font-bold text-white tracking-tight">
          {plan.price}
          <span className="font-sans text-sm xs:text-base sm:text-lg font-normal text-white/75 ml-1">
            {plan.period}
          </span>
        </p>

        <h3 className="mt-4 sm:mt-5 font-display text-base sm:text-lg lg:text-xl font-semibold text-white leading-snug">
          {plan.title}
        </h3>
      </div>

      <p className="mt-3 sm:mt-4 font-sans text-xs sm:text-sm text-white/80 leading-relaxed">
        {plan.description}
      </p>
    </article>
  );
}
