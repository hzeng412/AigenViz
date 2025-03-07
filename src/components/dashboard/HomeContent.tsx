'use client';
import * as React from "react";
import { useState } from "react";
import { MinimalMap } from "./MinimalMap";
import { WeedPressureMap } from "../weed-pressure/WeedPressureMap";
import { WeedPressureContent } from "../weed-pressure/WeedPressureContent";

// 生成从开始日期到结束日期的所有日期数组
const generateDateRange = (startDate: Date, endDate: Date) => {
  const dates = [];
  const currentDate = new Date(startDate);
  
  while (currentDate <= endDate) {
    dates.push(currentDate.toISOString().split('T')[0]);
    currentDate.setDate(currentDate.getDate() + 1);
  }
  
  return dates;
};

// 生成从2024-05-08到2024-06-30的所有日期
const availableDates = generateDateRange(
  new Date('2024-05-08'),
  new Date('2024-06-30')
);

const milestones = [
  { date: "01 May", label: "Germination" },
  { date: "16 June", label: "Today" },
  { date: "15 August", label: "End of Harvest" }
];

export const HomeContent: React.FC = () => {
  const [selectedDateIndex, setSelectedDateIndex] = useState<number>(Math.floor(availableDates.length / 2));

  // 获取杂草压力图片路径
  const getWeedPressureMapPath = (date: string) => {
    return `/images/farm06/weed-maps/weed_pressure_farm06_field06_daily/weed_pressure_farm06_field06_${date}.png`;
  };

  // 获取作物密度图片路径
  const getCropDensityMapPath = (date: string) => {
    return `/images/farm06/crop-maps/combined_crop_growth_farm06_field_daily/combined_crop_growth_farm06_field06_${date}.png`;
  };

  // 用于调试
  React.useEffect(() => {
    console.log('Selected date:', availableDates[selectedDateIndex]);
    console.log('Total dates:', availableDates.length);
  }, [selectedDateIndex]);

  return (
    <div className="flex flex-col gap-6">
      <MinimalMap />
      
      {/* 保持现有的表格 */}
      <div className="bg-white rounded-xl p-6">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Field:</th>
              <th className="text-left">Section</th>
              <th className="text-left">Size</th>
              <th className="text-left">Current Crop Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Field06</td>
              <td>#1A</td>
              <td>149 acres</td>
              <td>Sugar Beets</td>
            </tr>
            <tr>
              <td>Field06</td>
              <td>#1B</td>
              <td>152 acres</td>
              <td>Sugar Beets</td>
            </tr>
            <tr>
              <td>Field06</td>
              <td>#2A</td>
              <td>144 acres</td>
              <td>Cottons</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 日期滑块部分 */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-green-700">Date Slider</h2>
        <p className="text-gray-600 mb-8">Drag the slider to explore how the map evolves over time.</p>

        <div className="relative px-6 py-8">
          {/* 滑轨背景 */}
          <div className="absolute w-full h-1.5 bg-gradient-to-r from-green-600 to-gray-200 rounded-full"></div>

          {/* 滑块 */}
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

          {/* 日期标记 */}
          <div className="flex justify-between mt-6">
            <div className="text-sm">
              May 08<br/>Germination
            </div>
            <div className="text-sm">
              {availableDates[selectedDateIndex]}<br/>
              <span className="bg-green-100 px-2 py-1 rounded">Current</span>
            </div>
            <div className="text-sm">
              June 30<br/>End of Season
            </div>
          </div>
        </div>

        {/* 地图显示区域 */}
        <div className="grid grid-cols-3 gap-8 mt-8">
          {/* Weed Pressure Map */}
          <div className="bg-white rounded-xl p-4">
            <h3 className="text-lg font-medium mb-4">Weed Pressure Map</h3>
            <div className="aspect-square w-full overflow-hidden">
              <img 
                src={getWeedPressureMapPath(availableDates[selectedDateIndex])}
                alt={`Weed Pressure on ${availableDates[selectedDateIndex]}`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Crop Disease Severity Map - 调整为85%大小 */}
          <div className="bg-white rounded-xl p-4">
            <h3 className="text-lg font-medium mb-4">Crop Disease Severity Map</h3>
            <div className="aspect-square w-full overflow-hidden flex items-center justify-center">
              <div className="aspect-square w-full overflow-hidden">
                <img 
                  src="/images/farm06/Crop-Disease-Maps/Crop-Disease-Map.png"
                  alt="Crop Disease Severity"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Crop Density Map */}
          <div className="bg-white rounded-xl p-4">
            <h3 className="text-lg font-medium mb-4">Crop Density Map</h3>
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