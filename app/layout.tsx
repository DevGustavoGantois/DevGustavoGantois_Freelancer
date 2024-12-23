import type { Metadata } from "next";
import { Audiowide, Inter } from 'next/font/google';
import "./globals.css";


const inter = Inter({
  weight: ["400", "300", "200", "100", "500", "600", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter"
});


const audiowide = Audiowide({
  weight: '400', 
  subsets: ['latin'],
  variable: '--font-audiowide',
});


export const metadata: Metadata = {
  title: "Portifólio DevGustavoGantois",
  description: "Este é um portifólio para mostrar meus seriviços como desenvolvedor de software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
      <meta name="google-site-verification" content="M4Pw1J2X-V6c2FotMav2KX72M48-Zvp0Lhnc9Q4qOnI" />
      </head>
      <body
        className={`${audiowide.variable} ${inter.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
