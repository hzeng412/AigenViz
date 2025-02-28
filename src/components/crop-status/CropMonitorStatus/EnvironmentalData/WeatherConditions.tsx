import * as React from 'react';
import Image from 'next/image';

export const WeatherConditions: React.FC = () => {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col p-4 w-full h-full rounded-xl bg-stone-50">
        <h3 className="text-base font-semibold text-emerald-200">
          Weather Conditions
        </h3>
        
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/7429ebca99d7fccdaa9b0e456829166ef16f4b28fa6e33a3e6e7784e343e9747"
              alt="Temperature"
              className="w-5 h-5 object-contain"
            />
            <span className="text-sm font-semibold">72°F</span>
          </div>
          
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/948f2b7fe7068aba7ccd64c2fe2a83cb8e1fc9292cd8cfbe543de2d81c0e9e3a"
              alt="Humidity"
              className="w-5 h-5 object-contain"
            />
            <span className="text-sm font-semibold">65% Humidity</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/338c5818cded7a93793262b4dc936c193fc906ad7f0586ec510c41a27dbc7fcb"
            alt="Wind"
            className="w-5 h-5 object-contain"
          />
          <span className="text-sm font-semibold">5 mph NW</span>
        </div>
      </div>
    </div>
  );
}; 