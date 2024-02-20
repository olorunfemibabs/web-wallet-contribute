"use client";
import WalletBar from "@/components/WalletBar";
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useMemo } from "react";
import { useAccount, useConnect } from "@starknet-react/core"
import { UserRound } from 'lucide-react';


export default function Home() {
  const { address, account } = useAccount();
  

  const shortenedAddress = useMemo(() => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }, [address]);

  return (
    <main className="flex flex-1 flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold"></h2>
        <p className="text-gray-600 flex items-center gap-x-2"><UserRound size={20} strokeWidth={2} /><span className="text-xs">{ shortenedAddress }</span></p>
      </div>
      
      <div className="m-auto">
        <Link href={'/get-membership'} className="px-6 py-2 bg-blue-700">Get Membership</Link>
      </div>
    </main>
  );
}
