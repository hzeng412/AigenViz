'use client';
import * as React from "react";
import { useState } from "react";
import { MinimalMap } from "./MinimalMap";
import { WeedPressureMap } from "../weed-pressure/WeedPressureMap";
import { WeedPressureContent } from "../weed-pressure/WeedPressureContent";

// Generate date range from start to end date
const generateDateRange = (startDate: Date, endDate: Date) => {
  const dates = [];
  const currentDate = new Date(startDate);
  
  while (currentDate <= endDate) {
    dates.push(currentDate.toISOString().split('T')[0]);
    currentDate.setDate(currentDate.getDate() + 1);
  }
  
  return dates;
};

// Generate all dates from 2024-05-08 to 2024-06-30
const availableDates = generateDateRange(
  new Date('2024-05-08'),
  new Date('2024-06-30')
);

const milestones = [
  { date: "01 May", label: "Germination" },
  { date: "16 June", label: "Today" },
  { date: "15 August", label: "End of Robot Deployment" }
];

export const HomeContent: React.FC = () => {
  const [selectedDateIndex, setSelectedDateIndex] = useState<number>(Math.floor(availableDates.length / 2));

  // Get weed pressure map path
  const getWeedPressureMapPath = (date: string) => {
    return `/images/farm06/weed-maps/weed_pressure_farm06_field06_daily/weed_pressure_farm06_field06_${date}.png`;
  };

  // Get crop disease map number (1-4) based on slider position
  const getCropDiseaseMapNumber = (index: number) => {
    // Divide the date range into 4 segments
    const totalDates = availableDates.length;
    const segmentSize = totalDates / 4;
    
    if (index < segmentSize) {
      return 1;
    } else if (index < segmentSize * 2) {
      return 2;
    } else if (index < segmentSize * 3) {
      return 3;
    } else {
      return 4;
    }
  };

  // Get crop disease map path
  const getCropDiseaseMapPath = (index: number) => {
    const mapNumber = getCropDiseaseMapNumber(index);
    return `/images/farm06/crop-disease-maps/Crop-Disease-Map-${mapNumber}.png`;
  };

  // Get crop density map path
  const getCropDensityMapPath = (date: string) => {
    return `/images/farm06/crop-maps/combined_crop_growth_farm06_field_daily/combined_crop_growth_farm06_field06_${date}.png`;
  };

  // For debugging
  React.useEffect(() => {
    console.log('Selected date:', availableDates[selectedDateIndex]);
    console.log('Disease map number:', getCropDiseaseMapNumber(selectedDateIndex));
    console.log('Total dates:', availableDates.length);
  }, [selectedDateIndex]);

  return (
    <div className="flex flex-col gap-6">
      <MinimalMap />
      
      {/* Field Information Table with improved visibility */}
      <div className="bg-white rounded-xl p-6">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left text-gray-800">Field:</th>
              <th className="text-left text-gray-800">Section</th>
              <th className="text-left text-gray-800">Size</th>
              <th className="text-left text-gray-800">Current Crop Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-gray-700">Field06</td>
              <td className="text-gray-700">#1A</td>
              <td className="text-gray-700">149 acres</td>
              <td className="text-gray-700">Sugar Beets</td>
            </tr>
            <tr>
              <td className="text-gray-700">Field06</td>
              <td className="text-gray-700">#1B</td>
              <td className="text-gray-700">152 acres</td>
              <td className="text-gray-700">Sugar Beets</td>
            </tr>
            <tr>
              <td className="text-gray-700">Field06</td>
              <td className="text-gray-700">#2A</td>
              <td className="text-gray-700">144 acres</td>
              <td className="text-gray-700">Cottons</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Date Slider Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-green-700">Date Slider</h2>
        <p className="text-gray-700 mb-8">Drag the slider to explore how the map evolves over time.</p>

        <div className="relative px-6 py-8">
          {/* Slider track background */}
          <div className="absolute w-full h-1.5 bg-gradient-to-r from-green-600 to-gray-200 rounded-full"></div>



          {/* Slider */}
          <input
            type="range"
            min="0"
            max={availableDates.length - 1}
            value={selectedDateIndex}
            onChange={(e) => setSelectedDateIndex(parseInt(e.target.value))}
            className="absolute w-full"
            style={{
              WebkitAppearance: 'none',
              background: 'transparent',
              marginTop: '-8px'
            }}
          />

          {/* Date markers */}
          <div className="flex justify-between mt-6">
            <div className="text-gray-700">
              May 08<br/>
              Germination
            </div>
            <div className="text-gray-700">
              {availableDates[selectedDateIndex]}<br/>
              <span className="bg-green-100 px-2 py-1 rounded text-green-700">Current</span>
            </div>
            <div className="text-gray-700">
              June 30<br/>
              End of Robot Deployment
            </div>
          </div>
        </div>

        {/* Map Display Area */}
        <div className="grid grid-cols-3 gap-8 mt-8">
          {/* Weed Pressure Map */}
          <div className="bg-white rounded-xl p-4">
            <h3 className="text-lg font-medium mb-4 text-gray-800">Weed Pressure Map</h3>
            <div className="aspect-square w-full overflow-hidden">
              <img 
                src={getWeedPressureMapPath(availableDates[selectedDateIndex])}
                alt={`Weed Pressure on ${availableDates[selectedDateIndex]}`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Crop Disease Severity Map */}
          <div className="bg-white rounded-xl p-4">
            <h3 className="text-lg font-medium mb-4 text-gray-800">
              Crop Disease Severity Map 
              <span className="ml-2 text-sm text-gray-500">
                (Stage {getCropDiseaseMapNumber(selectedDateIndex)})
              </span>
            </h3>
            <div className="aspect-square w-full overflow-hidden flex items-center justify-center">
              <div className="aspect-square w-full overflow-hidden">
                <img 
                  src={getCropDiseaseMapPath(selectedDateIndex)}
                  alt={`Crop Disease Severity Stage ${getCropDiseaseMapNumber(selectedDateIndex)}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Crop Density Map */}
          <div className="bg-white rounded-xl p-4">
            <h3 className="text-lg font-medium mb-4 text-gray-800">Crop Density Map</h3>
            <div className="aspect-square w-full overflow-hidden">
              <img 
                src={getCropDensityMapPath(availableDates[selectedDateIndex])}
                alt={`Crop Density on ${availableDates[selectedDateIndex]}`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};