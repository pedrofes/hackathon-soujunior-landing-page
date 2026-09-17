export default function Footer() {
  return (
    <footer
      id="footer"
      className="flex h-[308px] w-full flex-col items-start justify-center gap-[70px] bg-[#6366F1] px-[120px]"
    >
      {/* Parte superior do Footer */}
      <div className="flex w-full items-center justify-between">
        {/* Logo SouJunior + slogan */}
        <div className="flex w-[381px] flex-col items-start gap-8">
          {/* Logo SouJunior será reutilizada após o merge do Header */}

          <p className="font-sans text-[27.56px] font-light tracking-[0.012em] text-white">
            Mais do que um apoio,
            <br />
            é uma comunidade.
          </p>
        </div>

        {/* Badge Sem Fronteiras */}
        <img
          src="/images/badge-sem-fronteiras.svg"
          alt="Selo Sem Fronteiras"
          className="h-[156.16px] w-[148.83px]"
        />
      </div>

      {/* Logos da parte inferior */}
      <div className="flex items-center gap-[43.609px]">
        <img
          src="/images/logo-apoia-se.png"
          alt="Apoia.se"
          className="h-[36.2px] w-[157.66px]"
        />

        <img
          src="/images/logo-whatsapp.png"
          alt="WhatsApp"
          className="h-[36.9px] w-[161.86px]"
        />

        <img
          src="/images/logo-discord.png"
          alt="Discord"
          className="h-[36.9px] w-[190.8px]"
        />

        <img
          src="/images/logo-github.png"
          alt="GitHub"
          className="h-[36.9px] w-[161.86px]"
        />
      </div>
    </footer>
  );
}