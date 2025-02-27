// src/components/weed-pressure/WeedPressureContent.tsx
import * as React from "react";
import { useState } from "react";
import { WeedPressureMap } from "./WeedPressureMap";
import { WeedTypeCard } from "./WeedTypeCard";
import { WeedPressureLegend } from "./WeedPressureLegend";

const weedTypes = [
  {
    name: "Dandelion",
    description: "Common perennial weed with yellow flowers.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/18c2bdea1903b8b1c801d82a3a86a4666ae7edc5bc303a17b561431b05145821?apiKey=a8eb05b1cab740ac8ba52685a6faf2c4&"
  },
  {
    name: "Crabgrass",
    description: "Annual grass weed that spreads quickly.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/afb1e57db58ca7988fac94f9efbe3acbb45e4945292fba311fff33eb4903365f?apiKey=a8eb05b1cab740ac8ba52685a6faf2c4&"
  },
  {
    name: "Thistle",
    description: "Prickly weed with purple flowers.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/545ec60bc636b41f51c09c066152913e1f28926c3e7187b3695d4b4c1c4f890d?apiKey=a8eb05b1cab740ac8ba52685a6faf2c4&"
  }
];

// Farm data for display
const farmData = {
  farm01: {
    name: "Kragnes_Jacob_Holt",
    location: "Rockstad"
  },
  farm06: {
    name: "Farm 06",
    location: "Eastern Fields"
  }
};

export const WeedPressureContent: React.FC = () => {
  const [selectedFarm, setSelectedFarm] = useState<string>("farm01");

  // Handle farm selection change
  const handleFarmChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFarm(e.target.value);
  };

  return (
    <div className="flex flex-col flex-grow h-full mt-3.5 max-md:mt-10 max-md:max-w-full">
      <h1 className="text-2xl font-bold mb-4">Weed Pressure</h1>
      
      <div className="flex flex-col rounded-xl">
        <div className="flex flex-col px-5 py-5 w-full bg-white rounded-xl max-md:pr-5 max-md:max-w-full">
          {/* Header with Field Selector */}
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <div className="text-base text-gray-600">
                Field: {farmData[selectedFarm as keyof typeof farmData].name}
              </div>
            </div>
            
            {/* Custom Farm Selection Dropdown */}
            <div className="flex items-center gap-4">
              <label htmlFor="farm-select" className="text-sm font-medium text-gray-700">
                Select Farm:
              </label>
              <select
                id="farm-select"
                value={selectedFarm}
                onChange={handleFarmChange}
                className="block w-40 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="farm01">Farm 01</option>
                <option value="farm06">Farm 06</option>
              </select>
            </div>
          </div>

          {/* Map Container */}
          <div className="flex overflow-hidden flex-col mt-5 text-xs font-bold text-white bg-white rounded-xl max-md:mr-2 max-md:max-w-full">
            <div className="w-full min-h-[688px]">
              <WeedPressureMap selectedFarm={selectedFarm} />
            </div>
          </div>

          {/* Legend and Action Buttons */}
          <div className="flex justify-between items-end mt-4 max-md:max-w-full">
            <WeedPressureLegend />
            <div className="flex gap-4 ml-4">
              <button className="px-8 py-3 text-base text-white rounded-lg bg-neutral-500">
                Filter
              </button>
              <button className="px-8 py-3 text-base rounded-lg border border-emerald-200 border-solid text-neutral-500">
                Export
              </button>
            </div>
          </div>

          {/* Weed Type Section */}
          <section className="flex flex-col mt-8 w-full bg-white rounded-xl">
            <div className="px-8 pt-8 pb-6">
              <h2 className="text-xl font-bold tracking-wide text-neutral-500">
                Found Weed Types
              </h2>
            </div>
            <div className="px-8 pb-8">
              <div className="flex gap-6">
                {weedTypes.map((weed, index) => (
                  <WeedTypeCard
                    key={index}
                    {...weed}
                    isLast={index === weedTypes.length - 1}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WeedPressureContent;