import * as React from 'react';
import Image from 'next/image';

export const SoilConditions: React.FC = () => {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col p-4 w-full h-full rounded-xl bg-stone-50">
        <h3 className="text-base font-semibold text-amber-300">
          Soil Conditions
        </h3>
        
        <div className="flex items-center gap-2 mt-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/1607c9ed641242e52f86c19f4a308a85e8f007442e80025c83e637471d7471a5"
            alt="Moisture"
            className="w-5 h-5 object-contain"
          />
          <span className="text-sm font-semibold">28% Moisture</span>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/640485aa9a53667166d032d6eff6acebf8bfa5429c081d5ffe47e68dcbdc6756"
            alt="pH"
            className="w-5 h-5 object-contain"
          />
          <span className="text-sm font-semibold">pH 6.5</span>
        </div>
      </div>
    </div>
  );
}; 