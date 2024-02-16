"use client";

import Image from "next/image";
import React, { useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { IoCloseCircle } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   console.log("Email:", email);
  //   console.log("Password:", password);
  // };

  const router = useRouter();

  const handleSendOTP = async (e: any) => {
    e.preventDefault();
    try {
      const response: AxiosResponse<string> = await axios.post(
        "http://localhost:3001/generate-otp",
        { email }
      );
      setMessage(response.data);
      console.log("data", response);
    } catch (error: any) {
      setMessage(error.response?.data || "Error occurred");
    }

    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    router.push("verify-access");
  };

  return (
    <div className="max-w-md mx-auto mt-36 p-6 bg-gray-200 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
      <form onSubmit={handleSendOTP}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mt-2 bg-white rounded-md focus:outline-none focus:bg-white focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mt-2 bg-white rounded-md focus:outline-none focus:bg-white focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Sign In
        </button>
        {message && <p>{message}</p>}
      </form>

      {message && isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="z-10 bg-white p-4 rounded-xl shadow-lg text-gray-600 flex flex-col text-2xl w-[30%]">
            <div className=" flex flex-col justify-center items-center -mt-1">
              <div className=" text-lg font-medium">{message}!!</div>
              <button
                className=" text-center bg-[#1d1d1d] p-2 rounded-xl text-base my-2 w-3/4 text-gray-300"
                onClick={closeModal}
              >
                Verify OTP
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
