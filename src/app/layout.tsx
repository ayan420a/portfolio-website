import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohd Ayan — Software Developer & AI Enthusiast",
  description:
    "Portfolio of Mohd Ayan — B.Tech CSE (AI & ML) student, software developer, and AI enthusiast. Explore my journey through projects, skills, and achievements.",
  keywords: [
    "Mohd Ayan",
    "Software Developer",
    "AI",
    "Machine Learning",
    "Portfolio",
    "Web Developer",
    "React",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen noise">{children}</body>
    </html>
  );
}
