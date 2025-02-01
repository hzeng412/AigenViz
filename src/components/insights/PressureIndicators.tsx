import React from 'react';
import { PressureIndicator } from './types';

interface PressureIndicatorsProps {
  indicators: PressureIndicator[];
}

export const PressureIndicators: React.FC<PressureIndicatorsProps> = ({ indicators }) => {
  return (
    <div className="flex flex-col items-start pt-7 pr-7 pb-4 pl-2.5 mt-6 w-full text-lg leading-4 text-black rounded-xl bg-stone-50 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:pr-5 max-md:max-w-full">
      {indicators.map((indicator, index) => (
        <div key={index} className="flex gap-3 mt-5 first:mt-0">
          <div className={`flex shrink-0 self-start ${indicator.color} h-[17px] rounded-[14415px] w-[17px]`} />
          <div className="flex-auto">
            {indicator.title}
            <br />
            {indicator.description}
          </div>
        </div>
      ))}
    </div>
  );
};