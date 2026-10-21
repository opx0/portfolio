import type { Metadata } from "next";
import { Inter, Newsreader, JetBrains_Mono } from "next/font/google";
import HeadingNav from "./components/HeadingNav";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.opxz.dev"),
  title: {
    default: "Abhishek Yadav — Portfolio",
    template: "%s — Abhishek Yadav",
  },
  description:
    "Full-stack engineer and systems developer. Selected work in coursework platforms, public records, interview practice and agent permissions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Abhishek Yadav — Portfolio",
    description:
      "Full-stack engineer and systems developer. Explore the projects, decisions and code behind my work.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
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
        <a href="#main-content" className="skip-link">Skip to content</a>
        <HeadingNav />

        {/* Content */}
        <main id="main-content" tabIndex={-1} className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
