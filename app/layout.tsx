import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '../styles/globals.css'
import NavBar from "@/components/nav/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cars — Pixar Fan Site",
  description: "Fan project showcasing Cars movie characters, videos, posters, animations.",
  keywords: ["Cars", "Pixar", "McQueen", "Posters", "Fan website"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="navbar bgColor">
          <NavBar />
        </div>
        
        {children}
      </body>
    </html>
  );
}
