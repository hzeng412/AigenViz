// src/components/weed-pressure/WeedPressureMap.tsx
import * as React from "react";
import { WeedTypeCard } from "./WeedTypeCard";
import { LegendItem } from "./LegendItem";

const weedTypes = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c64cb7a3c52b9d0c9cce14c6661bc41f530e7586c9e026b28582598a384152c9?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0",
    title: "Dandelion",
    description: "Common perennial weed with yellow flowers.",
    alt: "Image of Dandelion weed"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/56d286901eed35994eda09d498d203c20e874c0342f73b28d94d841f1d1c1d08?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0",
    title: "Crabgrass",
    description: "Annual grass weed that spreads quickly.",
    alt: "Image of Crabgrass weed"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/074a84d84b39d5907f80100520a090a508422b019ced7140f9e22c22936b075d?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0",
    title: "Thistle",
    description: "Prickly weed with purple flowers.",
    alt: "Image of Thistle weed"
  }
];

const legendItems = [
  { color: "bg-fuchsia-600", text: "Extreme weed infestations or specific zones that require further analysis." },
  { color: "bg-red-500", text: "High weed pressure, indicating critical zones that need immediate attention or treatment." },
  { color: "bg-yellow-400", text: "Moderate weed pressure, signaling areas that may require some intervention." },
  { color: "bg-green-500", text: "Low weed pressure or clean zones where weed infestation is minimal or non-existent." }
];

export const WeedPressureMap: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="flex flex-col w-full bg-black bg-opacity-0 max-md:max-w-full">
        <div className="flex flex-col pt-px pb-10 w-full bg-stone-50 max-md:max-w-full">
        
          <main className="flex flex-col px-8 py-8 mx-9 mt-12 bg-white rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.1)] max-md:px-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-5 justify-between items-start max-w-full bg-black bg-opacity-0 w-[1304px]">
              <div className="flex gap-6 self-start">
                <h1 className="grow text-xl font-bold tracking-wide text-neutral-500">
                  Weed Pressure Map
                </h1>
                <div className="text-base leading-none text-gray-600 basis-auto">
                  Field: North-East Quarter #2B
                </div>
              </div>
              <div className="flex z-10 flex-col my-auto mr-0 bg-black bg-opacity-0">
                <button className="flex gap-4 px-3 py-3.5 w-full bg-white rounded-lg border border-solid" aria-label="Select Field">
                  <div className="flex overflow-hidden justify-center items-center self-start min-h-[16px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d99ec0a10ea53c503914eb1b0c0d267970bde1995f7c0e876d1ff39ee159e12?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
                      alt=""
                      className="object-contain self-stretch my-auto w-3 aspect-[0.75]"
                    />
                  </div>
                  <div className="grow shrink text-base text-gray-400 w-[238px]">
                    Select Field
                  </div>
                </button>
              </div>
            </div>
            
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfee8f55-312f-4823-9f16-91e4895dc994?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
              alt="Weed pressure map visualization"
              className="object-contain mt-6 w-full rounded-lg aspect-[2.34] max-md:max-w-full"
            />

            <div className="flex flex-col items-start py-3 pr-20 pl-3 mt-6 ml-7 text-lg leading-none text-black bg-white rounded-lg shadow-[0px_1px_3px_rgba(0,0,0,0.05)] max-md:pr-5 max-md:max-w-full">
              {legendItems.map((item, index) => (
                <LegendItem key={index} {...item} />
              ))}
            </div>

            <div className="flex gap-5 self-end mt-16 text-base text-center whitespace-nowrap max-md:mt-10">
              <button className="px-14 pt-3 pb-5 text-white rounded-lg bg-neutral-500 max-md:px-5">
                Filter
              </button>
              <button className="px-16 py-4 rounded-lg border border-emerald-200 border-solid bg-black bg-opacity-0 text-neutral-500 max-md:px-5">
                Export
              </button>
            </div>
          </main>

          <section className="flex flex-col px-9 pt-8 pb-5 mt-14 mr-9 ml-9 bg-white rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.1)] max-md:px-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
            <div className="flex flex-wrap gap-5 justify-between w-full max-md:mr-1.5 max-md:max-w-full">
              <h2 className="my-auto text-xl font-bold tracking-wide text-neutral-500">
                Found Weed Types
              </h2>
              <div className="flex gap-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/837fb451949c30c43b742a021d7d7324e70bead1e87459406b85c38508c1a394?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
                  alt="Filter option"
                  className="object-contain shrink-0 w-11 aspect-[1.29]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4dac6215118e38657742adbf0eea11f51039eea157a37751c9dde95d3cab8b33?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
                  alt="Settings"
                  className="object-contain shrink-0 aspect-square w-[34px]"
                />
              </div>
            </div>
            
            <div className="px-1.5 pt-0.5 pb-3 mt-4 ml-5 bg-black bg-opacity-0 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                {weedTypes.map((weed, index) => (
                  <WeedTypeCard key={index} {...weed} />
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-5 justify-between items-start mt-1.5 ml-8 w-full max-w-[1318px] max-md:mr-1.5 max-md:max-w-full">
              <div className="flex gap-2.5 text-xs font-semibold leading-none whitespace-nowrap text-neutral-800">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cce574c26a188da97e31406bd02b92f31d8196fecd57ed13ef9c17695d1869d8?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
                  alt="Weed indicator"
                  className="object-contain shrink-0 self-start w-7 aspect-[1.75]"
                />
                <div>Weed</div>
                <div className="flex gap-2">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/098a92f72029e7cf9ccf8d7786ddef60fb9e8b737d700179ed311417e6fdcdc8?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
                    alt="Crop indicator"
                    className="object-contain shrink-0 self-start w-7 aspect-[1.75]"
                  />
                  <div>Crop</div>
                </div>
              </div>
              <button className="px-3.5 py-4 mt-4 text-base text-center text-white rounded-lg bg-neutral-500">
                Generate Report
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};