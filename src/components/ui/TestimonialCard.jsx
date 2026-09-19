import Image from "next/image";

// Aceita trechos em **negrito** dentro da citação, ex.: "A **SouJunior** foi..."
function renderQuote(quote) {
  const parts = quote.split(/\*\*(.+?)\*\*/g);

  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-bold">
        {part}
      </strong>
    ) : (
      <span key={index}>{part}</span>
    )
  );
}

export default function TestimonialCard({ testimonial }) {
  const { image, quote, name, role, subtitle } = testimonial;

  return (
    <article className="flex w-[340px] shrink-0 snap-center gap-5 rounded-[2rem] bg-white p-6 shadow-xl sm:w-[440px]">
      <div className="relative shrink-0">
        <span
          aria-hidden="true"
          className="absolute -left-4 top-1/2 h-14 w-14 -translate-y-1/2 rounded-full bg-primary sm:h-16 sm:w-16"
        />
        <span
          aria-hidden="true"
          className="absolute -right-4 -bottom-4 h-16 w-16 rounded-full bg-primary sm:h-20 sm:w-20"
        />

        <div className="relative h-full min-h-[170px] w-28 overflow-hidden rounded-2xl bg-linear-to-br from-primary/25 to-secondary/25 sm:w-36">
          <Image
            src={image}
            alt={`Foto de ${name}`}
            fill
            sizes="(min-width: 640px) 144px, 112px"
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <p className="font-sans text-sm leading-relaxed text-neutral">
          &ldquo;{renderQuote(quote)}&rdquo;
        </p>

        <div className="mt-4 flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            </svg>
          </span>

          <div>
            <p className="font-sans text-sm font-bold text-neutral">{name}</p>
            <p className="font-sans text-xs text-neutral/60">
              {role}
              <br />
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
