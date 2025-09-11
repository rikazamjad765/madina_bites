import "./globals.css";
import { Inter, Inria_Serif, Love_Light, PT_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["700"], variable: "--font-inter" });
const inria = Inria_Serif({ subsets: ["latin"], weight: ["700"], variable: "--font-inria" });
const love = Love_Light({ subsets: ["latin"], weight: ["400"], variable: "--font-love" });
const pt = PT_Sans({ subsets: ["latin"], weight: ["400"], variable: "--font-pt" });

export const metadata = {
  title: "Madinah Bites",
  description: "Taste in Every Bite",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${inria.variable} ${love.variable} ${pt.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
