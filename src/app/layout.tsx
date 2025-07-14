import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { 
  Montserrat, 
  Open_Sans, Poppins, 
  Lato, 
  Playfair_Display, 
  Inter, Oswald, 
  Roboto, 
  Raleway, 
  Merriweather 
} from 'next/font/google'
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-montserrat',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-open-sans',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-poppins',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-inter',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-oswald',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-raleway',
})

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
})

export const metadata: Metadata = {
  title: "portfolio",
  description: "A showcase of my web development projects and skills, featuring modern technologies and creative solutions"};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} ${poppins.variable} ${lato.variable} ${playfair.variable} ${inter.variable} ${oswald.variable} ${roboto.variable} ${raleway.variable} ${merriweather.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
