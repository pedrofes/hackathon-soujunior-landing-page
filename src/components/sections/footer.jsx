import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="flex h-auto min-h-[380px] w-full flex-col items-start justify-center gap-[70px] bg-linear-to-br from-plans-start to-plans-end px-6 py-12 md:px-12 lg:h-[380px] lg:px-[120px] lg:py-0"
    >
      {/* Parte superior do Footer */}
      <div className="flex w-full flex-col items-center gap-8 md:flex-row md:justify-between">
        
        {/* Logo SouJunior + slogan */}
        <div className="flex flex-col items-center gap-8 md:w-[381px] md:items-start">
          <Image
            src="/images/logo-soujunior-footer.svg"
            alt="SouJunior"
            width={361}
            height={57}
            className="h-auto w-[200px] md:h-[57px] md:w-[361.29px]"
          />

          {/* Selo Sem Fronteiras - apenas mobile */}
          <Image
            src="/images/badge-sem-fronteiras.svg"
            alt="Selo Sem Fronteiras"
            width={149}
            height={156}
            className="h-auto w-[110px] md:hidden"
          />

          <p className="text-center font-sans text-[22px] font-light tracking-[0.012em] text-white md:text-left md:text-[27.56px]">
            Mais do que um apoio,
            <br />
            é uma comunidade.
          </p>
        </div>

        {/* Selo Sem Fronteiras - tablet e desktop */}
        <Image
          src="/images/badge-sem-fronteiras.svg"
          alt="Selo Sem Fronteiras"
          width={149}
          height={156}
          className="hidden h-[156.16px] w-[148.83px] md:block"
        />
      </div>

      {/* Redes sociais */}
      <div className="grid w-full grid-cols-2 place-items-center gap-x-8 gap-y-6 md:flex md:items-center md:justify-between lg:w-auto lg:justify-start lg:gap-[43.609px]">
        <a
          href="https://apoia.se/soujunior"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-200 hover:scale-105"
          aria-label="Acessar SouJunior no Apoia.se"
        >
          <Image
            src="/images/logo-apoia-se.png"
            alt="Apoia.se"
            width={158}
            height={36}
            className="h-auto w-[95px] shrink-0 md:w-[110px] lg:h-[36.2px] lg:w-[157.66px]"
          />
        </a>

        <a
          href="https://chat.whatsapp.com/JJzCMlqMKlw1YOhOk7QB3W"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-200 hover:scale-105"
          aria-label="Acessar comunidade SouJunior no WhatsApp"
        >
          <Image
            src="/images/logo-whatsapp.png"
            alt="WhatsApp"
            width={162}
            height={37}
            className="h-auto w-[98px] shrink-0 md:w-[113px] lg:h-[36.9px] lg:w-[161.86px]"
          />
        </a>

        <a
          href="https://discord.gg/FkBcf3vdQZ"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-200 hover:scale-105"
          aria-label="Acessar comunidade SouJunior no Discord"
        >
          <Image
            src="/images/logo-discord.png"
            alt="Discord"
            width={191}
            height={37}
            className="h-auto w-[115px] shrink-0 md:w-[133px] lg:h-[36.9px] lg:w-[190.8px]"
          />
        </a>

        <a
          href="https://github.com/SouJunior"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-200 hover:scale-105"
          aria-label="Acessar SouJunior no GitHub"
        >
          <Image
            src="/images/logo-github.png"
            alt="GitHub"
            width={162}
            height={37}
            className="h-auto w-[98px] shrink-0 md:w-[113px] lg:h-[36.9px] lg:w-[161.86px]"
          />
        </a>
      </div>
    </footer>
  );
}