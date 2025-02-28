// src/components/weed-pressure/WeedPressureContent.tsx
import * as React from "react";
import { useState } from "react";
import { WeedPressureMap } from "./WeedPressureMap";
import { WeedTypeCard } from "./WeedTypeCard";
// import { WeedPressureLegend } from "./WeedPressureLegend";

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

// Available dates for the slider (formatted YYYY-MM-DD)
const availableDates = [
  "2024-05-12",
  "2024-05-19",
  "2024-05-26", 
  "2024-06-02",
  "2024-06-09", 
  "2024-06-16", 
  "2024-06-23", 
  "2024-06-30"
];

// Updated farm data for display with new field identifiers
const farmData = {
  "1A": {
    name: "Field #1A",
    location: "Field06",
    // Function to generate image path based on date
    getImagePath: (date: string) => {
      return `/images/farm06/weed-maps/weed_pressure_farm06_field06_weekly/weed_pressure_farm06_field06_${date}.png`;
    }
  },
  "1B": {
    name: "Field #1B",
    location: "Field06",
    // Function to generate image path based on date
    getImagePath: (date: string) => {
      return `/images/farm06/weed-maps/weed_pressure_farm06_field06_weekly/weed_pressure_farm06_field06_${date}.png`;
    }
  }
};

// Weed pressure guide data with appropriate colors
const weedPressureGuide = [
  {
    level: "Extreme",
    description: "Extreme weed infestations or specific zones that require further analysis.",
    color: "#FFD700" // Yellow/gold
  },
  {
    level: "High",
    description: "High weed pressure, indicating critical zones that need immediate attention or treatment.",
    color: "#FF8C00" // Dark orange
  },
  {
    level: "Moderate",
    description: "Moderate weed pressure, signaling areas that may require some intervention.",
    color: "#20B2AA" // Light sea green
  },
  {
    level: "Low",
    description: "Low weed pressure or clean zones where weed infestation is minimal or non-existent.",
    color: "#8A2BE2" // Purple
  }
];

export const WeedPressureContent: React.FC = () => {
  const [selectedFarm, setSelectedFarm] = useState<string>("1B");
  const [selectedDateIndex, setSelectedDateIndex] = useState<number>(availableDates.length - 1); // Default to latest date
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  // Handle farm selection change
  const handleFarmChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFarm(e.target.value);
  };

  // Get current image path based on selections
  const currentImagePath = farmData[selectedFarm as keyof typeof farmData].getImagePath(
    availableDates[selectedDateIndex]
  );

  return (
    <div className="flex flex-col flex-grow h-full mt-3.5 max-md:mt-10 max-md:max-w-full">
      <h1 className="text-2xl font-bold mb-4">Weed Pressure</h1>
      
      <div className="flex flex-col rounded-xl">
        <div className="flex flex-col px-5 py-5 w-full bg-white rounded-xl max-md:pr-5 max-md:max-w-full">
          {/* Header with Field Selector */}
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <div className="text-base text-gray-600">
                <span className="font-medium">Field:</span> {farmData[selectedFarm as keyof typeof farmData].name}
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-medium">Location:</span> {farmData[selectedFarm as keyof typeof farmData].location}
              </div>
            </div>
            
            {/* Field Selection Dropdown */}
            <div className="flex items-center gap-4">
              <label htmlFor="field-select" className="text-sm font-medium text-gray-700">
                Select Field:
              </label>
              <select
                id="field-select"
                value={selectedFarm}
                onChange={handleFarmChange}
                className="block w-40 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="1A">Field #1A</option>
                <option value="1B">Field #1B</option>
              </select>
            </div>
          </div>

          {/* Map and Image Viewer Container */}
          <div className="flex gap-4 mt-5 max-md:flex-col">
            {/* Map Container - Now 45% width (smaller) */}
            <div className="w-[45%] overflow-hidden flex-col text-xs font-bold text-white bg-white rounded-xl max-md:w-full">
              <div className="w-full min-h-[688px]">
                <WeedPressureMap selectedFarm={selectedFarm} />
              </div>
            </div>
            
            {/* Image Viewer Container - Now 55% width (larger) */}
            <div className="w-[55%] flex flex-col bg-white rounded-xl overflow-hidden border border-gray-200 max-md:w-full">
              {/* Main Image Display */}
              <div className="relative w-full flex-grow bg-gray-100 flex items-center justify-center overflow-hidden">
                <img 
                  src={currentImagePath} 
                  alt={`Weed Pressure on ${availableDates[selectedDateIndex]}`}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Weed Pressure Guide/Legend */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Weed Pressure Guide</h3>
                <div className="grid grid-cols-1 gap-2 mb-4">
                  {weedPressureGuide.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div 
                        className="w-4 h-4 mt-1 rounded-sm flex-shrink-0" 
                        style={{ backgroundColor: item.color }}
                      />
                      <div>
                        <span className="text-xs font-medium">{item.level}: </span>
                        <span className="text-xs text-gray-600">{item.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Date Slider Control */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{formatDate(availableDates[0])}</span>
                    <span className="text-sm font-medium text-blue-600">{formatDate(availableDates[selectedDateIndex])}</span>
                    <span className="text-sm text-gray-500">{formatDate(availableDates[availableDates.length - 1])}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={availableDates.length - 1}
                    value={selectedDateIndex}
                    onChange={(e) => setSelectedDateIndex(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between mt-1">
                    <button 
                      className="text-sm text-blue-600 disabled:text-gray-400"
                      disabled={selectedDateIndex === 0}
                      onClick={() => setSelectedDateIndex(prev => Math.max(0, prev - 1))}
                    >
                      Previous Week
                    </button>
                    <button
                      className="text-sm text-blue-600 disabled:text-gray-400"
                      disabled={selectedDateIndex === availableDates.length - 1}
                      onClick={() => setSelectedDateIndex(prev => Math.min(availableDates.length - 1, prev + 1))}
                    >
                      Next Week
                    </button>
                  </div>
                </div>
              </div>
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