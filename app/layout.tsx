import type { Metadata } from "next";
import { Inter, Figtree } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const figtreeSans = Figtree({
  variable: "--font-figtree-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oxygen console",
  description: "Private NAS",
  icons:"oxygen.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} ${figtreeSans.variable} w-screen h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}