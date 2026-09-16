export default function PlanCard({ plan }) {
  return (
    <article className="rounded-3xl border border-white/25 bg-white/10 p-6 shadow-xl backdrop-blur-md lg:p-8">
      <p className="font-display text-3xl font-bold text-white lg:text-4xl">
        {plan.price}
        <span className="font-sans text-base font-normal text-white/70">
          {plan.period}
        </span>
      </p>
      <h3 className="mt-4 font-sans text-sm text-white/90 lg:text-base">
        {plan.title}
      </h3>
      <p className="mt-4 font-sans text-xs text-white/70">{plan.description}</p>
    </article>
  );
}
