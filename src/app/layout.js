import { Funnel_Display, Funnel_Sans, Radio_Canada } from "next/font/google";
import "./globals.css";

// 1. Carrega a fonte para titulos/subtitulos (Funnel Display)
const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  variable: "--font-funnel-display",
  display: "swap",
});

// 2. Carrega a fonte para texto (Funnel Sans)
const funnelSans = Funnel_Sans({
  subsets: ["latin"],
  variable: "--font-funnel-sans",
  display: "swap",
});

const radioCanada = Radio_Canada({
  subsets: ["latin"],
  variable: "--font-radio-canada",
  display: "swap",
});

// src/app/layout.js (linhas 24 em diante)

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://hackathon-soujunior-landing-page.vercel.app"
  ),
  title: {
    default: "SouJunior — Apoie a Comunidade e Transforme Carreiras Tech",
    template: "%s | SouJunior",
  },
  description:
    "Apoie a SouJunior no Apoia.se a partir de R$ 2/mês. Fortaleça uma comunidade que transforma profissionais em início de carreira em oportunidades reais através de conteúdos, mentorias e projetos práticos.",
  keywords: [
    "SouJunior",
    "Apoia.se",
    "comunidade tech",
    "programadores juniores",
    "mentoria tecnologia",
    "carreira tech",
    "doação",
    "impacto social tech",
  ],
  authors: [{ name: "Comunidade SouJunior", url: "https://soujunior.tech" }],
  creator: "SouJunior",
  publisher: "SouJunior",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "SouJunior — Apoia.se",
    title: "SouJunior — Quem está começando hoje transforma a tecnologia amanhã",
    description:
      "Apoie a comunidade SouJunior no Apoia.se a partir de R$ 2/mês. Ajude a manter nossa infraestrutura, ampliar o alcance e apoiar novos talentos na tecnologia.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "SouJunior — Apoie quem está construindo o futuro na tecnologia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SouJunior — Nos Apoie no Apoia.se",
    description:
      "Apoie a comunidade SouJunior a partir de R$ 2/mês e ajude a transformar a carreira de milhares de pessoas na tecnologia.",
    creator: "@SouJuniorTech",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${funnelDisplay.variable} ${funnelSans.variable} ${radioCanada.variable}`} suppressHydrationWarning>
      <body className="font-sans bg-accent text-neutral antialiased overflow-x-clip">
        {children}
      </body>
    </html>
  );
}

