import "./globals.css";
import { Inter, Inria_Serif } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["700"], variable: "--font-inter" });
const inria = Inria_Serif({ subsets: ["latin"], weight: ["700"], variable: "--font-inria" });

export const metadata = {
  title: "Madinah Bites",
  description: "Taste in Every Bite",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inria.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
