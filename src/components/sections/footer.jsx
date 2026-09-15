export default function Footer() {
  return (
    <footer id="footer" className="w-full py-12 px-6 bg-secondary text-base-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="font-display text-2xl font-bold text-white">SouJunior</h3>
          <p className="font-sans text-xs text-base-white/70 mt-1">Formando e impulsionando talentos tech para o mercado.</p>
        </div>

        {/* 4 Links Obrigatórios da Arquitetura */}
        <nav className="flex flex-wrap gap-6 text-sm font-sans">
          <a href="#hero" className="hover:text-cyan transition-colors">Início</a>
          <a href="#causa" className="hover:text-cyan transition-colors">Transparência</a>
          <a href="#impacto" className="hover:text-cyan transition-colors">Impacto</a>
          <a href="#planos" className="hover:text-cyan transition-colors">Planos de Apoio</a>
        </nav>
      </div>

      <div className="max-w-4xl mx-auto mt-8 pt-6 border-t border-base-white/10 text-center text-xs text-base-white/50">
        © {new Date().getFullYear()} SouJunior. Hackathon Landing Page Apoia.se.
      </div>
    </footer>
  );
}
