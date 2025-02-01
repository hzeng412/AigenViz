import React from 'react';
import { TimelineItem } from './types';

interface TimelineProgressProps {
  items: TimelineItem[];
}

export const TimelineProgress: React.FC<TimelineProgressProps> = ({ items }) => {
  return (
    <div className="flex flex-col py-7 pr-4 pl-2 bg-white rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:max-w-full">
      <div className="py-1.5 max-w-full text-xl font-bold bg-black bg-opacity-0 text-neutral-500 w-[416px] max-md:pr-5 max-md:ml-2">
        Sugar Beet Progress Timeline
      </div>
      <div className="flex flex-col mt-4 leading-none bg-black bg-opacity-0 max-md:max-w-full">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-start pr-20 pb-6 w-full bg-black bg-opacity-0 max-md:pr-5 max-md:max-w-full">
            <div className="flex gap-6 text-base font-semibold text-black whitespace-nowrap">
              <div className={`flex shrink-0 w-4 h-4 ${item.color} rounded-full`} />
              <div className="my-auto">{item.status}</div>
            </div>
            <div className="mt-2.5 ml-10 text-sm text-gray-600 max-md:ml-2.5">
              {item.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};