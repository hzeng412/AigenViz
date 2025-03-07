"use client";

import React, { useState, useEffect } from 'react';

interface CropInsightsMapProps {
  initialDates?: [string, string];
}

export const CropInsightsMap: React.FC<CropInsightsMapProps> = ({
  initialDates = ['2024-05-08', '2024-06-30']
}) => {
  const [selectedDates, setSelectedDates] = useState<[string, string]>(initialDates);
  const [isLeftDatePickerOpen, setIsLeftDatePickerOpen] = useState(false);
  const [isRightDatePickerOpen, setIsRightDatePickerOpen] = useState(false);

  // 生成从开始到结束日期的所有可用日期
  const generateAvailableDates = () => {
    const dates: string[] = [];
    const startDate = new Date('2024-05-08');
    const endDate = new Date('2024-06-30');
    
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      dates.push(currentDate.toISOString().split('T')[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const availableDates = generateAvailableDates();

  const getImagePath = (date: string) => {
    return `/images/farm06/crop-maps/combined_crop_growth_farm06_field_daily/combined_crop_growth_farm06_field06_${date}.png`;
  };

  // 将 YYYY-MM-DD 格式转换为显示格式 DD Month YY
  const formatDateForDisplay = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: '2-digit'
    });
  };

  const handleDateSelect = (date: string, isLeft: boolean) => {
    setSelectedDates(prev => 
      isLeft ? [date, prev[1]] : [prev[0], date]
    );
    if (isLeft) {
      setIsLeftDatePickerOpen(false);
    } else {
      setIsRightDatePickerOpen(false);
    }
  };

  // 日期选择器下拉菜单组件
  const DatePicker = ({ 
    isOpen, 
    onClose, 
    onSelect, 
    selectedDate 
  }: { 
    isOpen: boolean; 
    onClose: () => void; 
    onSelect: (date: string) => void;
    selectedDate: string;
  }) => {
    if (!isOpen) return null;

    return (
      <div className="absolute top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
        <div className="p-2">
          {availableDates.map((date) => (
            <button
              key={date}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 rounded ${
                date === selectedDate ? 'bg-gray-100' : ''
              }`}
              onClick={() => onSelect(date)}
            >
              {formatDateForDisplay(date)}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-medium text-[#4A7B6A]">Crop Density Map</h2>
      <div className="flex gap-4 justify-between">
        {/* 左侧图片容器 */}
        <div className="flex-1 relative">
          <img
            src={getImagePath(selectedDates[0])}
            alt={`Crop density map for ${formatDateForDisplay(selectedDates[0])}`}
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute bottom-4 right-4">
            <div className="relative">
              <button
                className="bg-[#E8F1EE] px-4 py-2 rounded-md text-sm text-[#4A7B6A] hover:bg-[#D8E5E1]"
                onClick={() => setIsLeftDatePickerOpen(!isLeftDatePickerOpen)}
              >
                {formatDateForDisplay(selectedDates[0])}
              </button>
              <DatePicker
                isOpen={isLeftDatePickerOpen}
                onClose={() => setIsLeftDatePickerOpen(false)}
                onSelect={(date) => handleDateSelect(date, true)}
                selectedDate={selectedDates[0]}
              />
            </div>
          </div>
        </div>

        {/* 右侧图片容器 */}
        <div className="flex-1 relative">
          <img
            src={getImagePath(selectedDates[1])}
            alt={`Crop density map for ${formatDateForDisplay(selectedDates[1])}`}
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute bottom-4 right-4">
            <div className="relative">
              <button
                className="bg-[#E8F1EE] px-4 py-2 rounded-md text-sm text-[#4A7B6A] hover:bg-[#D8E5E1]"
                onClick={() => setIsRightDatePickerOpen(!isRightDatePickerOpen)}
              >
                {formatDateForDisplay(selectedDates[1])}
              </button>
              <DatePicker
                isOpen={isRightDatePickerOpen}
                onClose={() => setIsRightDatePickerOpen(false)}
                onSelect={(date) => handleDateSelect(date, false)}
                selectedDate={selectedDates[1]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CropInsightsMap;
