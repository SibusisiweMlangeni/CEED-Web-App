import type { Metadata } from "next";
import { Geist, Geist_Mono, Lexend } from "next/font/google";
import "./globals.css";

import TemplateScripts from "@/components/TemplateScripts";
import Header from "../components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lexend = Geist_Mono({
  variable: "--font-lexends",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CEED",
  description: "An organisation focused on uplifting the community through digital technology.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>
) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lexend.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
