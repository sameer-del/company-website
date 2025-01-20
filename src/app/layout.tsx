import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Raleway, Merriweather_Sans } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const raleway = Raleway({
  variable: "--display-font",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RuduoTech",
  description:
    "At Ruduo Technologies, we are driven by innovation and a shared passion for technology. Founded by a team of like-minded software experts, each with deep expertise in diverse fields and domains, we are committed to revolutionizing the way businesses build and deploy products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${raleway.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
