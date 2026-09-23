"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  {
    label: "Depoimentos",
    section: "depoimentos",
  },
  {
    label: "Por que apoiar?",
    section: "causa",
  },
  {
    label: "Impacto",
    section: "impacto",
  },
  {
    label: "Planos",
    section: "planos",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const menuButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const sectionIds = ["hero", "depoimentos", "causa", "impacto", "planos"];

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
        currentSection === "depoimentos" ||
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

  // Fecha o menu ao pressionar Esc
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  // Fecha o menu ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:font-sans focus:font-semibold focus:text-dark-text focus:outline-2 focus:outline-offset-2 focus:outline-yellow-accent"
      >
        Pular para o conteúdo
      </a>

      <header className="sticky top-0 z-50 bg-accent pt-6 px-6 min-[1000px]:bg-transparent">
        <nav
          aria-label="Navegação principal"
          className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md px-6 h-[55px] w-full max-w-[1222px] mx-auto"
        >
          <a
            href="#hero"
            aria-label="Voltar ao início"
            className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-accent"
          >
            <Image
              src="/images/logo-soujunior-white-small.svg"
              alt="SouJunior"
              width={157}
              height={24}
            />
          </a>

          <div className="hidden min-[1000px]:flex gap-8 font-radio text-base font-medium text-lavender">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.section}
                href={`#${item.section}`}
                className="relative rounded-sm group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-accent"
                onClick={() => handleNavClick(item.section)}
              >
                {item.label}

                <span
                  className={`absolute left-1/2 top-full mt-1 h-1 w-12 -translate-x-1/2 bg-yellow-accent transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100 ${
                    activeSection === item.section
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                />
              </a>
            ))}
          </div>

          <a
            href="https://apoia.se/soujunior"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-[1000px]:flex h-[37px] w-[137px] items-center justify-center rounded-[9.6px] border-[0.96px] border-yellow-accent bg-yellow-accent text-[15.361px] font-bold text-dark-text active:bg-primary active:text-white hover:scale-105 transition-transform duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Quero apoiar
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/30 text-white min-[1000px]:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-accent"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </nav>

        {menuOpen && (
          <div
            ref={mobileMenuRef}
            id="mobile-menu"
            className="mt-2 flex flex-col gap-4 rounded-2xl border border-white/20 bg-accent px-6 py-5 font-radio text-lavender min-[1000px]:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.section}
                href={`#${item.section}`}
                onClick={() => handleNavClick(item.section)}
                className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-accent"
              >
                {item.label}
              </a>
            ))}

            <a
              href="https://apoia.se/soujunior"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex h-[37px] w-[137px] items-center justify-center rounded-[9.6px] border-[0.96px] border-yellow-accent bg-yellow-accent font-sans text-[15.361px] font-bold text-dark-text transition-transform duration-200 hover:scale-105 active:bg-primary active:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Quero apoiar
            </a>
          </div>
        )}
      </header>
    </>
  );
}