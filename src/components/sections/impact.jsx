import Image from "next/image";

const SUPPORTER_AVATARS = [
  "/images/ana-beatriz.png",
  "/images/gabriel-santos.png",
  "/images/lucas-ferreira.png",
];

const EMPLOYED_AVATARS = [
  "/images/marina-silva.png",
  "/images/lucas-ferreira.png",
  "/images/ana-beatriz.png",
  "/images/gabriel-santos.png",
];

function AvatarStack({ avatars, altPrefix }) {
  return (
    <div className="flex -space-x-3">
      {avatars.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`${altPrefix} ${index + 1}`}
          width={28}
          height={28}
          className="h-7 w-7 rounded-full border-2 border-white object-cover"
        />
      ))}
    </div>
  );
}

function IconBadge({ children }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white">
      {children}
    </span>
  );
}

function StatCard({ className, icon, label, children }) {
  return (
    <div
      className={`absolute w-44 rounded-xl bg-white p-4 text-left shadow-xl lg:w-52 ${className}`}
    >
      <div className="flex items-center gap-2">
        <IconBadge>{icon}</IconBadge>
        {label && <p className="font-sans text-xs font-semibold text-secondary lg:text-sm">{label}</p>}
      </div>
      {children}
    </div>
  );
}

export default function Impact() {
  return (
    <section
      id="impacto"
      className="w-full px-4 sm:px-6 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          O seu apoio nos ajuda
          <br />a <span className="text-yellow-accent">impactar</span> cada vez mais
        </h2>

        {/* Diagrama de impacto — visível a partir de md, com posicionamento absoluto fiel ao design */}
        <div className="relative mx-auto mt-10 hidden h-96 max-w-xl items-center justify-center md:flex">
          <div className="absolute h-80 w-80 rounded-full border border-white/15" />
          <div className="absolute h-56 w-56 rounded-full border border-white/15" />

          <Image
            src="/impact.png"
            alt="Ícone de impacto da SouJunior"
            width={624}
            height={624}
            className="relative z-10 h-28 w-28 drop-shadow-2xl lg:h-32 lg:w-32"
          />

          <StatCard
            className="left-0 top-0"
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            }
            label="Total de Apoiadores"
          >
            <div className="mt-2 flex items-end justify-between">
              <div>
                <p className="font-sans text-xl font-extrabold text-neutral lg:text-2xl">114</p>
                <p className="font-sans text-xs text-neutral/60">apoiadores</p>
              </div>
              <AvatarStack avatars={SUPPORTER_AVATARS} altPrefix="Apoiador" />
            </div>
          </StatCard>

          <StatCard
            className="right-0 top-16"
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            }
            label="Meta/ Mês"
          >
            <div className="mt-3 rounded-md border border-neutral/10 p-2">
              <p className="text-right font-sans text-xs font-bold text-neutral">R$ 1000</p>
              <div className="mt-2 h-5 w-full overflow-hidden rounded-sm bg-secondary/10">
                <div className="flex h-full w-[73%] items-center rounded-sm bg-primary pl-2">
                  <span className="font-sans text-xs font-semibold text-white">73%</span>
                </div>
              </div>
            </div>
          </StatCard>

          <StatCard
            className="bottom-0 left-0"
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            }
            label="Pessoas empregadas através da SouJunior"
          >
            <div className="mt-2 flex items-end justify-between">
              <div>
                <p className="font-sans text-xl font-extrabold text-neutral lg:text-2xl">+50</p>
                <p className="font-sans text-xs text-neutral/60">Pessoas empregadas</p>
              </div>
              <AvatarStack avatars={EMPLOYED_AVATARS} altPrefix="Pessoa empregada" />
            </div>
          </StatCard>

          <StatCard
            className="bottom-16 right-0 flex w-auto items-center gap-2"
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            }
            label={null}
          >
            <div>
              <p className="font-sans text-lg font-extrabold text-neutral">35</p>
              <p className="font-sans text-xs text-neutral/60">Mentores ativos</p>
            </div>
          </StatCard>
        </div>

        {/* Versão simplificada para telas pequenas */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:hidden">
          <div className="rounded-2xl bg-white p-5 text-left shadow-xl">
            <div className="flex items-center gap-3">
              <IconBadge>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </IconBadge>
              <p className="font-sans text-sm font-semibold text-secondary">Total de Apoiadores</p>
            </div>
            <div className="mt-3 flex items-end justify-between">
              <div>
                <p className="font-sans text-3xl font-extrabold text-neutral">114</p>
                <p className="font-sans text-xs text-neutral/60">apoiadores</p>
              </div>
              <AvatarStack avatars={SUPPORTER_AVATARS} altPrefix="Apoiador" />
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 text-left shadow-xl">
            <div className="flex items-center gap-3">
              <IconBadge>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </IconBadge>
              <p className="font-sans text-sm font-semibold text-secondary">Meta/ Mês</p>
            </div>
            <div className="mt-4 rounded-md border border-neutral/10 p-3">
              <p className="text-right font-sans text-sm font-bold text-neutral">R$ 1000</p>
              <div className="mt-2 h-6 w-full overflow-hidden rounded-sm bg-secondary/10">
                <div className="flex h-full w-[73%] items-center rounded-sm bg-primary pl-3">
                  <span className="font-sans text-xs font-semibold text-white">73%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 text-left shadow-xl">
            <div className="flex items-center gap-3">
              <IconBadge>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </IconBadge>
              <p className="font-sans text-sm font-semibold text-secondary">
                Pessoas empregadas através da SouJunior
              </p>
            </div>
            <div className="mt-3 flex items-end justify-between">
              <div>
                <p className="font-sans text-3xl font-extrabold text-neutral">+50</p>
                <p className="font-sans text-xs text-neutral/60">Pessoas empregadas</p>
              </div>
              <AvatarStack avatars={EMPLOYED_AVATARS} altPrefix="Pessoa empregada" />
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-white p-5 text-left shadow-xl">
            <IconBadge>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </IconBadge>
            <div>
              <p className="font-sans text-2xl font-extrabold text-neutral">35</p>
              <p className="font-sans text-xs text-neutral/60">Mentores ativos</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center sm:text-right font-sans text-xs sm:text-sm text-white/90">
          <p>Veja para onde vai o seu apoio →</p>
          <a
            href="https://hackathon.soujunior.tech/gastos_2026.csv"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-white/60 underline-offset-2 hover:text-white"
          >
            Baixe a planilha de gastos de 2026 (CSV).
          </a>
        </div>
      </div>
    </section>
  );
}
