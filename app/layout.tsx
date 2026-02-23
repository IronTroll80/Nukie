import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RegisterSW from "./register-sw";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nukie",
  description: "Nukie PWA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#003883" />
        <link rel="icon" href="/applogo.jpg" />
      </head>
      <body className={inter.className}>
        <RegisterSW />
        {children}
      </body>
    </html>
  );
}