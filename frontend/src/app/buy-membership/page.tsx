"use client";

import React, { useState } from "react";

const BuyMembership = () => {
  const [amount, setAmount] = useState("");
  const [recipientAddress, setRecipientAddress] = useState("");

  const handleBuy = () => {
    // Logic for swapping process
    console.log("Swapping...");
  };

  return (
    <div className="container mx-auto mt-8 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold"> Buy Membership</h2>
        <p className="text-gray-600">Wallet Address: 0x1234...5678</p>
      </div>
      <div className=" w-1/2 bg-gray-200 rounded-lg p-6 mb-6 mx-auto">
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
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg p-3"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          onClick={handleBuy}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default BuyMembership;
