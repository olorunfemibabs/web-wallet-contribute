"use client";

import React, { useState } from "react";
import NavBar from '@/components/NavBar';
import { Contract } from 'starknet';
import abi from '@/abi.json';
// import chains from '@/components/starknet-provider'

const BuyMembership = () => {

  const [amount, setAmount] = useState("");
  const [recipientAddress, setRecipientAddress] = useState("");

  const contractAddress = "0x063b7280f7b185ca722a9a9d1afd805755241c5f614b991d1434f2f9e5c8c65b";

  const provider = "0x02b0761303c6cd1d6066bcfa74473e9e453e99c493d74d1b732325c2549867e6";

  const writeContract = new Contract(abi, contractAddress, provider);

  const handleBuy = async () => {
    // Logic for swapping process

    try {
      await writeContract.accept_deposit(amount)
      alert('deposit successful')
      
    } catch (error) {
        alert("error could not deposit")
    }


  };


  return (
    <div className="container flex-1">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold"> Buy Membership</h2>
        <p className="text-gray-600">Wallet Address: 0x1234...5678</p>
      </div>
      <div className=" w-5/12 shadow bg-white rounded-lg p-6 mb-6 mx-auto">
        <h3 className="text-lg font-semibold mb-4">Membership Fee</h3>
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Amount
          </label>
          <input
            type="text"
            id="amount"
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full placeholder-slate-300 sm:text-sm border-gray-300 rounded-lg border p-3"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white px-6 py-2 text-sm rounded-md hover:bg-blue-600 transition duration-300"
          onClick={handleBuy}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default BuyMembership;
