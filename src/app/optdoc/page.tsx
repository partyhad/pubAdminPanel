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
        This is Manual Page...
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;
