import type { Metadata } from "next";
import "./globals.css";
import styles from "./page.module.scss"
import StoreProvider from "./store/StoreProvider";

export const metadata: Metadata = {
  title: "La Libre - Cooperativa de libros y cultura",
  description: "Librería alternativa y centro cultural, ubicada en el barrio de San Telmo, en Buenos Aires.",
  openGraph: {
    title: "La Libre - Cooperativa de libros y cultura",
    description: "Librería alternativa y centro cultural, ubicada en el barrio de San Telmo, en Buenos Aires.",
    images: [
      {
        url: "https://la-libre.vercel.app/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Descripción de la imagen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Libre - Cooperativa de libros y cultura",
    description: "Librería alternativa y centro cultural, ubicada en el barrio de San Telmo, en Buenos Aires.",
    images: ["https://la-libre.vercel.app/thumbnail.jpg"],
  },
};

export default async function RootLayout({
  children}: {
  children: React.ReactNode,
}) {

  return (
    <StoreProvider>
      <html lang="en">
      <head>
        <title>La Libre - Cooperativa de libros y cultura</title>
        <meta name="description" content="Librería alternativa y centro cultural, ubicada en el barrio de San Telmo, en Buenos Aires." />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:title" content="La Libre - Cooperativa de libros y cultura" />
        <meta property="og:description" content="Librería alternativa y centro cultural, ubicada en el barrio de San Telmo, en Buenos Aires." />
        <meta property="og:image" content="https://la-libre.vercel.app/thumbnail.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Descripción de la imagen" />
        <meta property="og:url" content="https://la-libre.vercel.app/" />
        <meta property="og:type" content="website" />
        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="La Libre - Cooperativa de libros y cultura" />
        <meta name="twitter:description" content="Librería alternativa y centro cultural, ubicada en el barrio de San Telmo, en Buenos Aires." />
        <meta name="twitter:image" content="https://la-libre.vercel.app/thumbnail.jpg" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={styles.main}>{children}</body>
    </html>
    </StoreProvider>
  );
}
