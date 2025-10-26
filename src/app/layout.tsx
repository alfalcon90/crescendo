import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { inter } from "@/ui/fonts";

export const metadata: Metadata = {
  title: "Crescendo Performance Consulting",
  description: "Discover your voice and unlock your potential.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
<script src="https://unpkg.com/@botpoison/browser" async></script>
      </head>
      <body
        className={`${inter.className} flex h-screen flex-col items-center bg-green-dark text-green-dark antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
