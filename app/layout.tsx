import type { Metadata } from "next";
import { Inter, Newsreader, JetBrains_Mono } from "next/font/google";
import HeadingNav from "./components/HeadingNav";
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

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
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
      className={`${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body 
        className="min-h-screen flex flex-col text-[var(--text-primary)] font-[var(--font-sans)]"
        suppressHydrationWarning
      >
        {/* Background layers */}
        <div className="bg-waves" aria-hidden="true" />
        <div className="bg-glow-left" aria-hidden="true" />
        <div className="bg-glow-right" aria-hidden="true" />

        {/* Floating scroll indicator */}
        <HeadingNav />

        {/* Content */}
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
