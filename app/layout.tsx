import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Abhishek Yadav — Portfolio",
  description:
    "FullStack Engineer & Systems Dev. Building performant, human-centric applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text-primary)] font-[var(--font-sans)]">
        {/* Background layers */}
        <div className="bg-waves" aria-hidden="true" />
        <div className="bg-glow-left" aria-hidden="true" />
        <div className="bg-glow-right" aria-hidden="true" />

        {/* Content */}
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
