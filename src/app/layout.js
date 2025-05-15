// app/layout.js o app/layout.tsx

import "./globals.css";
import { Kanit, Ephesis, Playfair_Display, Work_Sans } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // Podés agregar otros pesos si querés
  variable: "--font-kanit",
});

const ephesis = Ephesis({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ephesis",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-worksans",
});

export const metadata = {
  title: 'Tu Sitio',
  description: 'Descripción',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${kanit.variable} ${ephesis.variable} ${playfair.variable} ${workSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
