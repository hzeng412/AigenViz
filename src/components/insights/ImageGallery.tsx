import React from 'react';
import { GalleryImage } from './types';

interface ImageGalleryProps {
  images: GalleryImage[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="flex flex-col p-4 mt-5 w-full bg-white rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:mr-0.5 max-md:max-w-full">
      <div className="py-1.5 text-xl font-bold bg-black bg-opacity-0 text-neutral-500 max-md:pr-5 max-md:max-w-full">
        Crop Image Gallery
      </div>
      <div className="flex flex-wrap gap-4 mt-4 text-xs text-white bg-black bg-opacity-0">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col flex-1 bg-black bg-opacity-0">
            <div className="flex relative flex-col items-start px-2 pt-24 pb-2 rounded-lg aspect-[1.664] w-[213px] max-md:pr-5">
              <img
                loading="lazy"
                src={image.src}
                alt={image.alt}
                className="object-cover absolute inset-0 size-full"
              />
              <div className="relative px-2 py-1.5 rounded bg-black bg-opacity-50">
                {image.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};