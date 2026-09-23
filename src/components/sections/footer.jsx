import Image from "next/image";

const SOCIAL_LINKS = [
  {
    name: "Apoia.se",
    href: "https://apoia.se/soujunior",
    image: "/images/logo-apoia-se.png",
    width: 158,
    height: 36,
    className: "h-auto w-24",
    ariaLabel: "Acessar SouJunior no Apoia.se",
  },
  {
    name: "WhatsApp",
    href: "https://chat.whatsapp.com/JJzCMlqMKlw1YOhOk7QB3W",
    image: "/images/logo-whatsapp.png",
    width: 162,
    height: 37,
    className: "h-auto w-24",
    ariaLabel: "Acessar comunidade SouJunior no WhatsApp",
  },
  {
    name: "Discord",
    href: "https://discord.gg/FkBcf3vdQZ",
    image: "/images/logo-discord.png",
    width: 191,
    height: 37,
    className: "h-auto w-28",
    ariaLabel: "Acessar comunidade SouJunior no Discord",
  },
  {
    name: "GitHub",
    href: "https://github.com/SouJunior",
    image: "/images/logo-github.png",
    width: 162,
    height: 37,
    className: "h-auto w-24",
    ariaLabel: "Acessar SouJunior no GitHub",
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-full bg-linear-to-br from-plans-start to-plans-end py-10 lg:py-12"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 md:px-10 lg:px-8">

        {/* Logo SouJunior + slogan */}
        <div className="flex flex-col items-center gap-6 md:items-start">
          <Image
            src="/images/logo-soujunior-footer.svg"
            alt="SouJunior"
            width={361}
            height={57}
            className="h-auto w-48 md:w-80"
          />

          <p className="text-center font-sans text-xl font-light tracking-wide text-white md:text-left md:text-2xl">
            Mais do que um apoio,
            <br />
            é uma comunidade.
          </p>
        </div>

        {/* Redes sociais */}
        <div className="flex w-full flex-wrap items-center justify-center gap-8 md:justify-start lg:gap-12">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-105"
              aria-label={social.ariaLabel}
            >
              <Image
                src={social.image}
                alt={social.name}
                width={social.width}
                height={social.height}
                className={social.className}
              />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}