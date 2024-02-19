import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StarknetProvider } from "@/components/starknet-provider";
import { WalletProvider } from "../context/WalletContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aeros flying club",
  description: "Platinum flying club",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" px-16 py-6">
        <WalletProvider>{children}</WalletProvider>
      </body>
    </html>
  );
}
