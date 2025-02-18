import "@/styles/globals.css";
import { Montserrat, Oxanium } from 'next/font/google';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevStage",
  description: "Participe de eventos exclusivos e concorra a prêmios indicando amigos! Acompanhe rankings, descubra novas oportunidades e maximize suas chances de ganhar. Inscreva-se agora!",
};


const montserrat = Montserrat({ weight: ["400", "600"], subsets: ["latin"], variable: "--font-body" })
const oxanium = Oxanium({ weight: ["500", "600"], subsets: ["latin"], variable: "--font-heading" })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${montserrat.variable} ${oxanium.variable}`}>
      <body className="antialiased bg-gray-900 text-gray-100 scroll-smooth bg-[url('/assets/background.png')] bg-no-repeat bg-top md:bg-right-top">
        <div className="container mx-auto py-8 px-4">
          { children }
        </div>
      </body>
    </html>
  );
}
