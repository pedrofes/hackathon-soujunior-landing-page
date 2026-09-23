"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = ["causa", "impacto", "planos"];

    const updateActiveSection = () => {
      const footer = document.getElementById("footer");

      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        if (footerRect.top <= window.innerHeight * 0.8) {
          setActiveSection("");
          return;
        }
      }

      const referencePoint = window.innerHeight * 0.35;

      const currentSection = sectionIds.find((id) => {
        const section = document.getElementById(id);
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= referencePoint && rect.bottom > referencePoint;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      } else {
        setActiveSection("");
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection);
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 pt-5 px-4 sm:px-6">
      {/* Cápsula de Vidro Centralizada com o token glass-card */}
      <nav className="flex items-center justify-between glass-card rounded-full px-5 sm:px-7 h-[56px] w-full max-w-[1220px] mx-auto">

        {/* Logo SouJunior */}
        <a href="#hero" className="flex items-center">
          <Image
            src="/images/logo-soujunior-white-small.svg"
            alt="SouJunior"
            width={150}
            height={24}
            priority
            className="h-auto w-32 sm:w-36 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
          />
        </a>

        {/* Links Centrais (Desktop) */}
        <div className="hidden min-[1000px]:flex items-center gap-8 font-sans text-sm font-medium text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">          <a
          href="#causa"
          onClick={() => handleNavClick("causa")}
          className={`transition-colors hover:text-white pb-1 ${activeSection === "causa"
            ? "text-white border-b-2 border-yellow-accent font-semibold"
            : "text-white/80"
            }`}
        >
          Por que apoiar?
        </a>

          <a
            href="#impacto"
            onClick={() => handleNavClick("impacto")}
            className={`transition-colors hover:text-white pb-1 ${activeSection === "impacto"
              ? "text-white border-b-2 border-yellow-accent font-semibold"
              : "text-white/80"
              }`}
          >
            Impacto
          </a>

          <a
            href="#planos"
            onClick={() => handleNavClick("planos")}
            className={`transition-colors hover:text-white pb-1 ${activeSection === "planos"
              ? "text-white border-b-2 border-yellow-accent font-semibold"
              : "text-white/80"
              }`}
          >
            Planos
          </a>
        </div>

        {/* Botão Amarelo Pílula (Desktop) */}
        <a
          href="https://apoia.se/soujunior"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden min-[1000px]:flex items-center justify-center rounded-full bg-yellow-accent text-dark-text font-bold text-xs sm:text-sm px-5 py-2.5 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md"
        >
          Quero apoiar
        </a>

        {/* Botão Hambúrguer Ergonômico (Mobile) */}
        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 items-center justify-center text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white rounded-full min-[1000px]:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Menu Suspenso Mobile com glass-card */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="mt-3 flex flex-col gap-4 rounded-3xl glass-card px-6 py-5 text-white min-[1000px]:hidden shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <a
            href="#causa"
            onClick={() => handleNavClick("causa")}
            className="text-base font-medium py-1 hover:text-yellow-accent transition-colors"
          >
            Por que apoiar?
          </a>

          <a
            href="#impacto"
            onClick={() => handleNavClick("impacto")}
            className="text-base font-medium py-1 hover:text-yellow-accent transition-colors"
          >
            Impacto
          </a>

          <a
            href="#planos"
            onClick={() => handleNavClick("planos")}
            className="text-base font-medium py-1 hover:text-yellow-accent transition-colors"
          >
            Planos
          </a>

          <a
            href="https://apoia.se/soujunior"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center rounded-full bg-yellow-accent font-bold text-dark-text text-sm py-3 mt-2 shadow-md hover:scale-105 active:scale-95 transition-all"
          >
            Quero apoiar
          </a>
        </div>
      )}
    </header>
  );
}