"use client";

import React from "react";

interface InsightsHeaderProps {
  fieldName: string;
}

export const InsightsHeader: React.FC<InsightsHeaderProps> = ({
  fieldName,
}) => {
  return (
    <header className="flex flex-wrap gap-5 justify-between px-7 py-6 w-full bg-white rounded-lg max-md:px-5 max-md:max-w-full">
      <div className="flex gap-8 my-auto">
        <h1 className="grow text-xl font-bold tracking-wide text-neutral-500">
          Actionable Insights
        </h1>
        <p className="my-auto text-base leading-none text-gray-600 basis-auto">
          Field: {fieldName}
        </p>
      </div>
      <div className="flex gap-4">
        <button className="px-5 py-3.5 text-base font-light text-center text-white rounded-lg border border-solid bg-neutral-500 border-neutral-500 max-md:px-5">
          Sugar Beets
        </button>
        <div className="grow shrink-0 basis-0 bg-black bg-opacity-0 w-fit">
          <button className="flex gap-4 px-3 py-3.5 w-full bg-white rounded-lg border border-solid">
            <span className="flex overflow-hidden justify-center items-center self-start min-h-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/47452267548999933b15ae670241b89f8243139eeba2e336dc070811cd1a47f7"
                className="object-contain self-stretch my-auto w-3 aspect-[0.75]"
                alt="Select field icon"
              />
            </span>
            <span className="flex-auto text-base text-gray-400 w-[253px]">
              Select Field
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
