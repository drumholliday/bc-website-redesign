import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bankruptcy Control | Creditor-Side Bankruptcy Case Management Software",
  description:
    "Bankruptcy Control helps creditors, lenders, and creditor-side firms manage bankruptcy cases, notices, documents, tasks, reporting, and internal workflows in one secure platform.",
  keywords: [
    "creditor bankruptcy software",
    "bankruptcy case management",
    "lender bankruptcy workflow",
    "creditor-side bankruptcy",
    "bankruptcy notice management",
    "bankruptcy workflow software",
    "secured creditor case management",
  ],
};

/*
  Root layout shared across every page in the App Router.
  The Navbar and Footer are placed here so every page receives the same shell.
*/
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen flex-col bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
          <Navbar />

          <main className="flex-1">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}