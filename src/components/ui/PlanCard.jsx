export default function PlanCard({ plan }) {
  return (
    <article className="w-full max-w-xs rounded-[2rem] border border-white/25 bg-white/5 p-8 shadow-xl backdrop-blur-md lg:p-10">
      <p className="font-display text-3xl font-medium text-white lg:text-4xl">
        {plan.price}
        <span>{plan.period}</span>
      </p>
      <h3 className="mt-6 font-display text-base font-medium text-white lg:text-lg">
        {plan.title}
      </h3>
      <p className="mt-6 font-sans text-sm font-light text-white">
        {plan.description}
      </p>
    </article>
  );
}
