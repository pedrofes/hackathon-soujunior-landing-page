export default function Plans() {
  return (
    <section id="planos" className="w-full py-16 px-6 bg-base-white border-b border-neutral/10">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs uppercase font-bold text-primary tracking-wider">
          [Planos]
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary mt-2 mb-4">
          Escolha uma forma de apoio
        </h2>
        <p className="font-sans text-neutral max-w-xl mx-auto mb-10">
          Doações recorrentes a partir de R$ 2 no Apoia.se.
        </p>

        {/* Cards de Apoio */}
        <div className="max-w-md mx-auto p-8 bg-white rounded-2xl border border-primary/20 shadow-md flex flex-col items-center">
          <h3 className="font-display text-2xl font-bold text-secondary">Apoiador SouJunior</h3>
          <div className="my-4">
            <span className="font-display text-4xl font-extrabold text-primary">R$ 2</span>
            <span className="font-sans text-neutral/70"> / mês</span>
          </div>
          <p className="font-sans text-xs text-neutral/80 mb-6">
            Contribua para a comunidade
          </p>
          <a
            href="https://apoia.se/soujunior"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-yellow-accent hover:bg-yellow-500 text-neutral font-bold py-3 px-6 rounded-xl transition-all text-center shadow-sm"
          >
            Quero Apoiar
          </a>
        </div>
        <div className="max-w-md mx-auto p-8 bg-white rounded-2xl border border-primary/20 shadow-md flex flex-col items-center">
          <h3 className="font-display text-2xl font-bold text-secondary">Apoiador SouJunior</h3>
          <div className="my-4">
            <span className="font-display text-4xl font-extrabold text-primary">R$ 5</span>
            <span className="font-sans text-neutral/70"> / mês</span>
          </div>
          <p className="font-sans text-xs text-neutral/80 mb-6">
            Contribua para a comunidade
          </p>
          <a
            href="https://apoia.se/soujunior"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-yellow-accent hover:bg-yellow-500 text-neutral font-bold py-3 px-6 rounded-xl transition-all text-center shadow-sm"
          >
            Quero Apoiar
          </a>
        </div>
      </div>
    </section>
  );
}
