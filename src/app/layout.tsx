import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Layout/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Virtual Galaxy Infotech",
  description: "AI Powered Enterprise Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}