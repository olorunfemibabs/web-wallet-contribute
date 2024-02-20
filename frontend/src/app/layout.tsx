import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StarknetProvider } from "@/components/starknet-provider";
import { WalletProvider } from "../context/WalletContext";
import "./globals.css";
import NavBar from '@/components/NavBar';


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
      <body className="w-full h-screen flex-1 bg-gradient-to-br from-white via-cyan-200 to-blue-200 px-16 py-6 gap-y-4 flex flex-col">
        
        <StarknetProvider>
          <NavBar/>  
          {children}
        </StarknetProvider>
        {/* <WalletProvider>{children}</WalletProvider> */}
      </body>
    </html>
  );
}
