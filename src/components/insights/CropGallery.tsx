"use client";

import React from "react";
import { GrowthStageCard } from "./GrowthStageCard";

export const CropGallery = () => {
  return (
    <section className="flex flex-col px-8 pt-7 pb-24 w-full bg-white rounded-xl max-md:px-5 max-md:max-w-full">
      <div className="flex gap-7 justify-between items-center">
        <h2 className="text-xl font-bold tracking-wide text-neutral-500">
          Crop Growth Gallery
        </h2>
        <button className="p-3.5 text-base font-light text-center text-gray-600 rounded-lg border border-solid">
          History Album
        </button>
      </div>
      
      {/* 横向滚动容器 */}
      <div className="relative mt-4">
        <div className="flex gap-6 overflow-x-auto hide-scrollbar">
          <GrowthStageCard
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/198c28cc9923e70a2ba37875978dfdda861066e58821f3d4b27f48ce690166f3"
            stage="Growth Stage 1"
            date="05 May 2025"
          />
          <GrowthStageCard
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/c713b0a836944e66337a66f037069ed553f6d9f2753b0fe03f5684d8e2ff6e19"
            stage="Growth Stage 2"
            date="16 May 2025"
          />
          <GrowthStageCard
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/57bc358cd5242c0dc430cad2056b313935d0280a62b50036f399e88954740586"
            stage="Growth Stage 3"
            date="01 July 2025"
          />
          <button className="flex items-center justify-center px-4 ml-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/89c2ccc48f3c770b27f2b30b24aee40ef30dbfeed10baba46c145db26027d41e"
              className="object-contain w-6 aspect-square"
              alt="Next"
            />
          </button>
        </div>
      </div>
    </section>
  );
};
