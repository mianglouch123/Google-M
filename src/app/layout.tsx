import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css"

import Navigation from "../Components/Navigation";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Google Clone App",
  description: "This a google clone by created in Next Js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        
      <Navigation />

        {children}
        
        </body>
    </html>
  );
}
