"use client";

import React from "react";

export const CropMetrics = () => {
  return (
    <section className="px-7 pt-8 pb-24 w-full bg-white rounded-xl max-md:px-5 max-md:max-w-full">
      <div className="flex gap-10 max-w-full bg-black bg-opacity-0 w-[1304px]">
        <h2 className="grow shrink text-xl font-bold tracking-wide text-neutral-500 w-[158px]">
          Crop Height Trends
        </h2>
        <div className="flex z-10 flex-wrap gap-5 my-auto mr-0 max-md:max-w-full">
          <button className="flex gap-2 px-3.5 py-4 text-base text-center text-black bg-white rounded-lg border border-solid">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b041a8bb913e00d43acdee393ec024026049b85bdd430eb07701002ff32f46ae"
              className="object-contain shrink-0 self-start aspect-[3.8] w-[38px]"
              alt="Field icon"
            />
            <span>Field #2B</span>
          </button>
          <button className="px-16 py-4 text-base text-center text-black bg-white rounded-lg border border-solid max-md:pl-5">
            Field #1A
          </button>
        </div>
      </div>
      <div className="mt-6 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f238fff38cc5ed753a682c256c85d939a36c57aa2cc2de2361599c7b74cd5994"
              className="object-contain grow w-full rounded-lg aspect-[1.04] max-md:mt-4 max-md:max-w-full"
              alt="Height trends chart"
            />
          </div>
          <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e72a280fd7801049e2d4c9f48a409d256abce2727a254b97186bdaf99e9eb3d1"
              className="object-contain grow w-full rounded-lg aspect-[1.04] max-md:mt-4 max-md:max-w-full"
              alt="Density trends chart"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 justify-between mt-6 w-full text-base text-center text-black max-md:max-w-full">
        <button className="flex gap-2.5 px-3.5 py-3.5 rounded-lg border border-solid">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/afd86f18eb49896eb4d604d782bbeefd4aeb17343ca3aeef856b5a9d976e6c20"
            className="object-contain shrink-0 self-start w-3.5 aspect-[0.87]"
            alt="Calendar icon"
          />
          <span>08 May 25 - 16 July 25</span>
        </button>
        <div className="flex gap-4">
          <button className="px-7 py-4 bg-gray-200 rounded-lg max-md:px-5">
            Edit Metrics
          </button>
          <button className="flex gap-2.5 px-3.5 py-3.5 rounded-lg border border-solid">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9270aae754eac1ae66f901fe18bfc0c94b5692a40ee68cc73acf89a69fb20e8b"
              className="object-contain shrink-0 self-start w-3.5 aspect-[0.87]"
              alt="Calendar icon"
            />
            <span>08 May 25 - 16 July 25</span>
          </button>
        </div>
        <button className="px-7 py-4 bg-gray-200 rounded-lg max-md:px-5">
          Edit Metrics
        </button>
      </div>
    </section>
  );
};
