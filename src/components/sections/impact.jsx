export default function Impact() {
  return (
    <section id="impacto" className="w-full py-16 px-6 border-b border-neutral/10">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs uppercase font-bold text-primary tracking-wider">
          [Impacto]
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary mt-2 mb-4">
          Nosso Impacto em Números
        </h2>
        <p className="font-sans text-neutral max-w-xl mx-auto mb-10">
          Resultados reais gerados por uma comunidade movida por voluntários e apoiadores.
        </p>

        {/* Grid de Impactos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-secondary/5 rounded-2xl border border-secondary/10">
            <h3 className="font-display text-4xl font-black text-primary">XX</h3>
            <p className="font-sans text-base font-medium text-secondary mt-2">Metas Conquistadas</p>
            <p className="font-sans text-xs text-neutral/70 mt-1">Devs inseridos no mercado de trabalho tech</p>
          </div>
          <div className="p-8 bg-secondary/5 rounded-2xl border border-secondary/10">
            <h3 className="font-display text-4xl font-black text-primary">XX</h3>
            <p className="font-sans text-base font-medium text-secondary mt-2">Mentores Ativos</p>
            <p className="font-sans text-xs text-neutral/70 mt-1">Profissionais seniores que orientam a comunidade</p>
          </div>
          <div className="p-8 bg-secondary/5 rounded-2xl border border-secondary/10">
            <h3 className="font-display text-4xl font-black text-primary">XX</h3>
            <p className="font-sans text-base font-medium text-secondary mt-2">Apoiadores Recorrentes</p>
            <p className="font-sans text-xs text-neutral/70 mt-1">Pessoas físicas que apoiam o projeto mensalmente</p>
          </div>
        </div>
      </div>
    </section>
  );
}
