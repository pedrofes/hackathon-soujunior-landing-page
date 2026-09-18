import Image from "next/image";

// Dados estruturados da seção Causa (Data-driven UI)
const CAUSE_CARDS = [
  {
    id: "comunidade-ativa",
    title: "Manter a comunidade ativa",
    description:
      "Seu apoio garante que a SouJunior continue oferecendo conteúdos, mentorias e espaços de troca para quem está começando.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    alt: "Grupo de jovens profissionais e estudantes colaborando em equipe em volta de uma mesa com laptops",
  },
  {
    id: "ampliar-alcance",
    title: "Ampliar o alcance",
    description:
      "Seu apoio nos ajuda a chegar mais longe, impactando mais jovens em diferentes regiões com palestras, cursos e oportunidades na tecnologia.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    alt: "Desenvolvedora jovem concentrada trabalhando no computador com código na tela",
  },
  {
    id: "manter-infraestrutura",
    title: "Manter nossa infraestrutura",
    description:
      "Seu apoio ajuda a manter a SouJunior funcionando, cobrindo custos com banco de dados, APIs, domínio e ferramentas para eventos.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    alt: "Ambiente moderno de tecnologia e mentoria com profissionais sorrindo",
  },
];

export default function Cause() {
  return (
    <section
      id="causa"
      aria-labelledby="causa-title"
      className="w-full py-20 px-6 bg-secondary text-base-white border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Cabeçalho da Seção */}
        <h2
          id="causa-title"
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
        >
          Por que apoiar?
        </h2>

        <p className="font-sans text-sm md:text-base text-base-white/80 max-w-2xl mx-auto mb-14 leading-relaxed">
          A SouJunior existe para fortalecer profissionais em início de carreira
          e criar um espaço onde conhecimento, oportunidades e colaboração possam
          circular.
        </p>

        {/* Grid Responsivo de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CAUSE_CARDS.map((card) => (
            <article
              key={card.id}
              className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl aspect-[3/4] md:aspect-[4/5] bg-secondary/40 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              {/* Imagem Otimizada com Next/Image */}
              <Image
                src={card.image}
                alt={card.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Overlay Escuro para Alto Contraste (Acessibilidade WCAG AA) */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
                aria-hidden="true"
              />

              {/* Conteúdo do Card */}
              <div className="absolute inset-0 p-6 md:p-7 flex flex-col justify-end text-left z-10">
                <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2 leading-snug">
                  {card.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-base-white/85 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
