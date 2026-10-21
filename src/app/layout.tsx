import type { Metadata } from "next";
import localFont from "next/font/local";

const spaceGrotesk = localFont({ src: "./fonts/SpaceGrotesk.ttf", variable: "--font-space-grotesk", display: "swap", weight: "300 700" });
const jetbrainsMono = localFont({ src: "./fonts/JetBrainsMono.ttf", variable: "--font-jetbrains-mono", display: "swap", weight: "100 800" });
const oxanium = localFont({ src: "./fonts/Oxanium.ttf", variable: "--font-oxanium", display: "swap", weight: "200 800", preload: false });
import { profile } from "@/content/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description:
    "Priyanshu Raj's developer portfolio. Interests include artificial intelligence, machine learning, full-stack development, software engineering, and data science.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${oxanium.variable}`}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
