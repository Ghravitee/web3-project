import type { Metadata } from "next";
import { Inter, Permanent_Marker, Rowdies } from "next/font/google";

import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";

const inter = Inter({ subsets: ["latin"] });
const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400"
});

const rowdies = Rowdies({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Book of Memes",
  description: "A book of memes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${permanentMarker.className} ${rowdies.className} bg-gradient-to-br from-indigo-900 via-indigo-900 to-teal-500 overflow-y-scroll overflow-x-hidden`}>
        {/* ss */}
      {children}
      </body>
    </html>
  );
}
