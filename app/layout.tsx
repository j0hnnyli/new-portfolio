import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MediaNavbar from "@/components/MediaNavbar";
import Image from "next/image";

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
  title: "Johnny's Portfolio",
  description: "Highlights of Johnny's Skills and Personal Projects",
  icons: {
    icon: ['/favicon/favicon.ico'],
    apple: ['/favicon/apple-touch-icon.png'],
    shortcut: ['/favicon/favicon-32x32.png'],
  },
  manifest: '/favicon/site.webmanifest'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative md:flex md:justify-center md:items-center md:h-screen`}
      >
        <Navbar />
        <MediaNavbar/>
        <Image
          src='/gridBG.jpg'
          alt='grid-bg'
          width={300}
          height={300}
          priority
          className="brightness-50 h-full w-full fixed object-cover"
        /> 
        <main className="relative z-30 max-w-[1500px] md:w-[90%] lg:w-[80%] mx-auto pt-20 md:pt-0">
          {children}
        </main>

      </body>
    </html>
  );
}
