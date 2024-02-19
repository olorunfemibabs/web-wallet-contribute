import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StarknetProvider } from "@/components/starknet-provider";
import { WalletProvider } from "../context/WalletContext";
import "./globals.css";
import NavBar from '@/components/NavBar';
import { useAccount, useConnect, useDisconnect } from "@starknet-react/core"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aeros Club",
  description: "Get our membership on this platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()
  const { address } = useAccount()

  return (
    <html lang="en">
      <body className="w-full h-screen flex-1 bg-gradient-to-br from-white via-cyan-200 to-blue-200 px-16 py-6 gap-y-4 flex flex-col">
        
        <StarknetProvider>
          <NavBar address={address} connectors={connectors} connect={connect} disconnect={disconnect}/>  
          {children}
        </StarknetProvider>
        {/* <WalletProvider>{children}</WalletProvider> */}
      </body>
    </html>
  );
}
