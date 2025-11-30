import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/core/Navbar";
import Footer from "@/components/core/Footer";
import AosInit from "@/components/core/AosInit"; 


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Wooden Houses Kenya",
    template: "%s | Wooden Houses Kenya",
  },
  description: "Modern wooden houses construction in Kenya & East Africa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white! text-gray-900 min-h-screen`}
      >
        <AosInit />   
        <Navbar />
        <main className="pt-[120px] bg-white min-h-screen">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}