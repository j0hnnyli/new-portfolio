import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[url('/gridBG.jpg')] bg-cover bg-center bg-no-repeat h-screen relative flex items-center justify-center`}
      >
        <Navbar />
        <div className="bg-black absolute h-full w-full opacity-60 z-10"></div>
        <main className="relative z-30 w-[80%] max-w-[1500px] mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}