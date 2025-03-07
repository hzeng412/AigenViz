"use client";

import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export const CropMetrics = () => {
  // 作物高度数据
  const heightData = [
    { date: '08 May 25', field2B: 5, field1A: 4 },
    { date: '08 June 25', field2B: 35, field1A: 38 },
    { date: '16 July 25', field2B: 75, field1A: 68 }
  ];

  // 作物密度数据
  const densityData = [
    { date: '08 May 25', field2B: 13100, field1A: 13050 },
    { date: '08 June 25', field2B: 14000, field1A: 13800 },
    { date: '16 July 25', field2B: 14900, field1A: 14700 }
  ];

  const chartCommonProps = {
    width: 600,
    height: 400,
    margin: { top: 20, right: 30, left: 20, bottom: 20 }
  };

  const customLegend = () => {
    return (
      <div className="flex gap-8 justify-end mb-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-[2px] bg-[#FFB800]"></span>
          <span>Field #2B</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-8 h-[2px] bg-[#90EE90]"></span>
          <span>Field #1A</span>
        </div>
      </div>
    );
  };

  return (
    <section className="px-7 pt-8 pb-24 w-full bg-white rounded-xl">
      <h2 className="text-xl font-bold text-gray-500 mb-6">
        Crop Height Trends
      </h2>

      <div className="grid grid-cols-2 gap-8">
        {/* 作物高度图表 */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          {customLegend()}
          <LineChart {...chartCommonProps} data={heightData}>
            <CartesianGrid stroke="#E5E7EB" strokeDasharray="1 0" vertical={false} />
            <XAxis 
              dataKey="date" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
            />
            <YAxis 
              domain={[0, 80]} 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
            />
            <Line 
              type="monotone" 
              dataKey="field2B"
              stroke="#FFB800"
              strokeWidth={2}
              dot={{ r: 4, fill: "#FFB800", strokeWidth: 0 }}
              activeDot={{ r: 6 }}
              legendType="none"
            />
            <Line 
              type="monotone" 
              dataKey="field1A"
              stroke="#90EE90"
              strokeWidth={2}
              dot={{ r: 4, fill: "#90EE90", strokeWidth: 0 }}
              activeDot={{ r: 6 }}
              legendType="none"
            />
          </LineChart>
        </div>

        {/* 作物密度图表 */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          {customLegend()}
          <LineChart {...chartCommonProps} data={densityData}>
            <CartesianGrid stroke="#E5E7EB" strokeDasharray="1 0" vertical={false} />
            <XAxis 
              dataKey="date" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
            />
            <YAxis 
              domain={[13000, 15000]} 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
            />
            <Line 
              type="monotone" 
              dataKey="field2B"
              stroke="#006400"
              strokeWidth={2}
              dot={{ r: 4, fill: "#006400", strokeWidth: 0 }}
              activeDot={{ r: 6 }}
              legendType="none"
            />
            <Line 
              type="monotone" 
              dataKey="field1A"
              stroke="#90EE90"
              strokeWidth={2}
              dot={{ r: 4, fill: "#90EE90", strokeWidth: 0 }}
              activeDot={{ r: 6 }}
              legendType="none"
            />
          </LineChart>
        </div>
      </div>

      {/* 底部控制按钮 */}
      <div className="flex justify-between mt-6">
        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-gray-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          08 May 25 - 16 July 25
        </button>
        <button className="px-6 py-2 bg-gray-100 rounded-lg text-gray-600">
          Edit Metrics
        </button>
      </div>
    </section>
  );
};
