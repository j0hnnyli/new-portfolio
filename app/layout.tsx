import type { Metadata } from "next";
import localFont from "next/font/local";
import { Playfair_Display } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";
import MediaNavbar from "@/components/MediaNavbar";
import Footer from "@/components/Footer";

const playfairDisplay = Playfair_Display({
  weight: ["400"],     
  subsets: ["latin"],      
  variable: "--playfair-font", 
})

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
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased bg-primary_color text-secondary_color`}
      >
        <Navbar />
        <MediaNavbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
