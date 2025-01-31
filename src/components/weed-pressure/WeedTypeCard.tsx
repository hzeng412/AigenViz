// src/components/weed-pressure/WeedTypeCard.tsx

import * as React from "react";
import { WeedTypeCardProps } from "./types";

export const WeedTypeCard: React.FC<WeedTypeCardProps> = ({ image, title, description, alt }) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col grow w-full leading-none bg-white rounded-xl shadow-[0px_2px_4px_rgba(0,0,0,0.1)] max-md:mt-7 max-md:max-w-full">
        <img
          loading="lazy"
          src={image}
          alt={alt}
          className="object-contain w-full aspect-[2.08] max-md:max-w-full"
        />
        <div className="flex flex-col items-start py-5 pr-20 pl-4 bg-black bg-opacity-0 max-md:pr-5 max-md:max-w-full">
          <div className="text-lg font-semibold text-neutral-800">{title}</div>
          <div className="mt-5 text-base text-neutral-600">{description}</div>
        </div>
      </div>
    </div>
  );
};