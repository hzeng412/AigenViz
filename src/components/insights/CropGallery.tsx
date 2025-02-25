"use client";

import React from "react";
import { GrowthStageCard } from "./GrowthStageCard";

export const CropGallery = () => {
  return (
    <section className="flex flex-col px-8 pt-7 pb-24 w-full bg-white rounded-xl max-md:px-5 max-md:max-w-full">
      <div className="flex gap-7 self-start">
        <h2 className="my-auto text-xl font-bold tracking-wide basis-auto text-neutral-500">
          Crop Growth Gallery
        </h2>
        <button className="p-3.5 text-base font-light text-center text-gray-600 rounded-lg border border-solid">
          History Album
        </button>
      </div>
      <div className="flex flex-wrap gap-2.5 mt-4 max-md:max-w-full">
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
        <button className="flex flex-col justify-center items-end px-1.5 py-40 rounded-lg max-md:hidden max-md:py-24">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/89c2ccc48f3c770b27f2b30b24aee40ef30dbfeed10baba46c145db26027d41e"
            className="object-contain w-6 aspect-square max-md:-mr-2"
            alt="Next"
          />
        </button>
      </div>
    </section>
  );
};
