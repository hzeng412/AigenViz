import * as React from 'react';
import { GalleryImageProps } from './types';

export const GalleryImage: React.FC<GalleryImageProps> = ({ image, date, altText, showActions }) => {
  return (
    <div className="flex flex-col gap-3">
      <img src={image} alt={altText} className="object-cover w-full rounded-xl h-[200px]" />
      <div className="text-base text-right text-teal-600">{date}</div>
      {showActions && (
        <div className="flex gap-4 mt-6 max-sm:flex-col">
          <button className="px-6 py-3 text-base text-white rounded-lg cursor-pointer bg-neutral-500 border-[none] max-sm:w-full">
            Generate Report
          </button>
          <button className="px-6 py-3 text-base rounded-lg border border-emerald-200 border-solid cursor-pointer text-neutral-500 max-sm:w-full">
            Plan Treatment
          </button>
        </div>
      )}
    </div>
  );
};