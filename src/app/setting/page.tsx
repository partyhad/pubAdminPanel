"use client";
import dynamic from "next/dynamic";
import React from "react";
import CardDataStats from "@/components/CardDataStats";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
const MapOne = dynamic(() => import("@/components/Maps/MapOne"), {
  ssr: false,
});
const ECommerce: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="w-full h-230 text-2xl font-medium">
      <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Setting</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Old Private Key
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your old private key"
            />
          </div>

          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              New Private Key
            </label>
            <input
              id="password"
              onChange={(e) => {}}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your new privatekey"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Address
            </label>
            <input
              id="password"
              onChange={(e) => {}}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your address"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              OK
            </button>
          </div>
        </form>
      </div>
    </div>
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;
