import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const FontMontserat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={FontMontserat.className}>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}