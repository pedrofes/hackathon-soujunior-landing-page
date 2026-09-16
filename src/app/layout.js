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

export const metadata = {
  title: "SouJunior — Nos Apoie!",
  description: "Apoie nossa comunidade SouJunior para que possamos continuar impactando talentos na tecnologia. Doe a partir de R$ 2/mês!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${funnelDisplay.variable} ${funnelSans.variable} ${radioCanada.variable}`}>
      <body className="font-sans bg-base-white text-neutral antialiased">
        {children}
      </body>
    </html>
  );
}

