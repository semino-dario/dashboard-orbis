import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./store/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "CMS - Dashboard",
};

export default async function RootLayout({
  children}: {
  children: React.ReactNode,
}) {

  return (
    <StoreProvider>
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
    </StoreProvider>
  );
}
