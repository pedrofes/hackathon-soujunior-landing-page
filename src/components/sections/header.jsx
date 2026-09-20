"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = ["hero", "causa", "impacto", "planos"];

    const updateActiveSection = () => {
      const footer = document.getElementById("footer");

      if (footer) {
        const footerRect = footer.getBoundingClientRect();

        const footerReachedActiveArea =
          footerRect.top <= window.innerHeight * 0.8;

        if (footerReachedActiveArea) {
          setActiveSection("");
          return;
        }
      }

      const referencePoint = window.innerHeight * 0.35;

      const currentSection = sectionIds.find((id) => {
        const section = document.getElementById(id);

        if (!section) {
          return false;
        }

        const rect = section.getBoundingClientRect();

        return rect.top <= referencePoint && rect.bottom > referencePoint;
      });

      if (
        currentSection === "causa" ||
        currentSection === "impacto" ||
        currentSection === "planos"
      ) {
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
    <header className="sticky top-0 z-50 pt-6 px-6">
      <nav className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md px-6 h-[55px] w-full max-w-[1222px] mx-auto">

        <div>
          <Image
            src="/images/logo-soujunior-white-small.svg"
            alt="SouJunior"
            width={157}
            height={24}
          />
        </div>

        <div className="hidden md:flex gap-[30.72px] font-radio text-[19.201px] font-medium text-[#F0E9FD]">
           <a
            href="#depoimentos"
            className="relative group"
            onClick={() => handleNavClick("depoimentos")}
          >
            Depoimentos
            <span
              className={`absolute left-1/2 top-full mt-1 h-[4px] w-[51px] -translate-x-1/2 bg-yellow-accent transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100 ${
                activeSection === "depoimentos" ? "opacity-100" : "opacity-0"
              }`}
            />
          </a>
          
          <a
            href="#causa"
            className="relative group"
            onClick={() => handleNavClick("causa")}
          >
            Por que apoiar?
            <span
              className={`absolute left-1/2 top-full mt-1 h-[4px] w-[51px] -translate-x-1/2 bg-yellow-accent transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100 ${
                activeSection === "causa" ? "opacity-100" : "opacity-0"
              }`}
            />
          </a>

          <a
            href="#impacto"
            className="relative group"
            onClick={() => handleNavClick("impacto")}
          >
            Impacto
            <span
              className={`absolute left-1/2 top-full mt-1 h-[4px] w-[51px] -translate-x-1/2 bg-yellow-accent transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100 ${
                activeSection === "impacto" ? "opacity-100" : "opacity-0"
              }`}
            />
          </a>

          <a
            href="#planos"
            className="relative group"
            onClick={() => handleNavClick("planos")}
          >
            Planos
            <span
              className={`absolute left-1/2 top-full mt-1 h-[4px] w-[51px] -translate-x-1/2 bg-yellow-accent transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100 ${
                activeSection === "planos" ? "opacity-100" : "opacity-0"
              }`}
            />
          </a>
        </div>

        <a
          href="https://apoia.se/soujunior"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex h-[37px] w-[137px] items-center justify-center rounded-[9.6px] border-[0.96px] border-yellow-accent bg-yellow-accent text-[15.361px] font-bold text-[#1D1B1B] active:bg-primary active:text-white hover:scale-105 transition-transform duration-200"
        >
          Quero apoiar
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/30 text-2xl text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="mt-2 flex flex-col gap-4 rounded-2xl bg-white/6 px-6 py-5 font-radio text-[#F0E9FD] md:hidden"
        >
          <a
            href="#causa"
            onClick={() => handleNavClick("causa")}
          >
            Por que apoiar?
          </a>

          <a
            href="#impacto"
            onClick={() => handleNavClick("impacto")}
          >
            Impacto
          </a>

          <a
            href="#planos"
            onClick={() => handleNavClick("planos")}
          >
            Planos
          </a>

          <a
            href="https://apoia.se/soujunior"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex h-[37px] w-[137px] items-center justify-center rounded-[9.6px] border-[0.96px] border-yellow-accent bg-yellow-accent font-sans text-[15.361px] font-bold text-[#1D1B1B] transition-transform duration-200 hover:scale-105 active:bg-primary active:text-white"
          >
            Quero apoiar
          </a>
        </div>
      )}

    </header>
  );
}