import React from 'react';
import { TimelineProgress } from './TimelineProgress';
import { PressureIndicators } from './PressureIndicators';
import { ImageGallery } from './ImageGallery';
import { timelineData, pressureIndicators, galleryImages } from './data';

export const CropAnalytics: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white rounded-lg border-2 border-gray-300 border-solid">
      <div className="flex overflow-hidden flex-col w-full bg-white rounded-lg border-2 border-gray-300 border-solid max-md:max-w-full">
        <div className="flex flex-col w-full bg-black bg-opacity-0 max-md:max-w-full">
          <div className="flex flex-col px-6 py-6 w-full bg-gray-50 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col justify-center p-4 w-full bg-white rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:mr-0.5 max-md:max-w-full">
              <div className="flex flex-wrap gap-5 justify-between py-px w-full bg-black bg-opacity-0 max-md:max-w-full">
                <div className="my-auto text-xl font-bold tracking-wide text-neutral-500">
                  Actionable Insights
                </div>
                <div className="flex gap-3 text-base text-center whitespace-nowrap bg-black bg-opacity-0">
                  <button className="flex gap-2.5 px-4 py-3 text-black bg-gray-100 rounded-lg">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/073edbd52874cf9241f585f616082c6cd85ebf19feefd47e7d02421a9e6eed25?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
                      alt=""
                      className="object-contain shrink-0 self-start w-4 aspect-square"
                    />
                    <span>Export</span>
                  </button>
                  <button className="flex gap-2.5 px-4 py-3 text-white rounded-lg bg-neutral-500">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2156bc7c9f4b07d4809850692ba383083fbf7b62ba7a094e296318e3ff26837?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
                      alt=""
                      className="object-contain shrink-0 self-start w-4 aspect-square"
                    />
                    <span>Filters</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col py-0.5 mt-6 w-full bg-black bg-opacity-0 max-md:max-w-full">
              <div className="max-md:mr-0.5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b501925409840c2d79f3a7dc859518d67ab95d2e11c5248579ebf4a02b9bd8b?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
                      alt="Crop analysis visualization"
                      className="object-contain grow w-full rounded-xl aspect-[1.56] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:mt-6 max-md:max-w-full"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow mt-2 max-md:mt-8 max-md:max-w-full">
                      <TimelineProgress items={timelineData} />
                      <PressureIndicators indicators={pressureIndicators} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-4 mt-6 w-full bg-white rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:mr-0.5 max-md:max-w-full">
                <div className="flex flex-wrap gap-5 justify-between w-full bg-black bg-opacity-0 max-md:max-w-full">
                  <div className="my-auto text-xl font-bold leading-none text-neutral-500">
                    Crop Height Trends
                  </div>
                  <div className="flex gap-3 text-base text-center text-black whitespace-nowrap bg-black bg-opacity-0">
                    <button className="px-4 py-3.5 bg-gray-100 rounded-lg">Weekly</button>
                    <button className="px-4 py-3.5 bg-gray-100 rounded-lg">Monthly</button>
                    <button className="px-4 pt-2.5 pb-5 text-white rounded-lg bg-neutral-500">Custom</button>
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ff005da5f0eb476fa915d9834740c8cfabb768b86439a5a7571b2cafc7c6aba?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
                  alt="Crop height trends graph"
                  className="object-contain mt-4 w-full rounded-lg aspect-[4.52] max-md:max-w-full"
                />
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/50f8e231-22bc-433a-ae92-750a04214f9a?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
                alt="Additional crop analytics visualization"
                className="object-contain mt-6 w-full aspect-[3.65] bg-black bg-opacity-0 max-md:max-w-full"
              />
              <ImageGallery images={galleryImages} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};