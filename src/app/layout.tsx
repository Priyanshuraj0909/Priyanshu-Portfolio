import type { Metadata } from "next";
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
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
