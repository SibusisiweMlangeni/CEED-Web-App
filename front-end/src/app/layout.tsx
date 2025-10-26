import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '../styles/vendor/css/aos.css';
import '../styles/vendor/css/bootstrap.min.css';
import '../styles/vendor/css/boxicons.min.css';
// import '../styles/vendor/css/owl.carousel.min.css';
import '../styles/vendor/css/flaticon.css';
import '../styles/vendor/css/magnific-popup.min.css';
import '../styles/vendor/css/header.css';
import '../styles/vendor/css/responsive.css';

import "./globals.css";

import TemplateScripts from "@/components/TemplateScripts";
import Header from "../components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <TemplateScripts />
      </body>
    </html>
  );
}
