"use client";

import React, { useState } from "react";

const VerifyAccess = () => {
  const [accessCodes, setAccessCodes] = useState(["", "", "", ""]);

  const handleChange = (index: number, value: string) => {
    const newAccessCodes = [...accessCodes];
    newAccessCodes[index] = value;
    setAccessCodes(newAccessCodes);
  };

  return (
    <div className="container mx-auto mt-8 p-6">
      <h2 className="text-2xl font-semibold mb-4">Verify Access Code</h2>
      <div className="flex justify-center">
        {accessCodes.map((code, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            className="w-12 h-12 text-2xl border border-gray-300 rounded-md mr-4 text-center focus:outline-none focus:border-blue-500"
            value={code}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        ))}
      </div>
      <p className="mt-4 text-gray-600 text-sm">
        Enter the 4-digit access code sent to your email.
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-6 hover:bg-blue-600 transition duration-300">
        Verify Code
      </button>
      <p className="mt-4 text-gray-600">
        Did not receive the code?{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Resend
        </a>
      </p>
    </div>
  );
};

export default VerifyAccess;
