import type { Metadata } from "next";
import { Inter, Rowdies, Special_Elite } from "next/font/google";

import "./globals.css";
// import StarsCanvas from "@/components/main/StarBackground";

const specialElite = Special_Elite({ subsets: ["latin"], weight: "400", variable: "--font-specialelite" });


const rowdies = Rowdies({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Detective Penguin Meme Coin",
  description: "DEPT",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rowdies.className} ${specialElite.variable} bg-gradient-to-br from-indigo-900 via-indigo-900 to-teal-500 overflow-y-scroll overflow-x-hidden`}>
       
      {children}
      </body>
    </html>
  );
}
