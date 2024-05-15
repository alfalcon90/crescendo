import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { inter } from "@/ui/fonts";

export const metadata: Metadata = {
  title: "Speech Bubbles Stuttering Therapy",
  description: "Acceptance-First Speech Therapy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex h-screen flex-col items-center bg-beige-light text-green-dark antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
