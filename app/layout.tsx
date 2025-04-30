import type { Metadata } from "next";
import { Geist, Geist_Mono, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ToastProvider from "@/providers/ToastProvider";

const lato = Lato({
  subsets: ['latin'],
  weight: ["100","300","400", "700", "900"]
})


export const metadata: Metadata = {
  title: "YouStore",
  description: "Your Number 1 store for you alone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} antialiased`}
      >
        <ToastProvider/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
