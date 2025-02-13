import * as React from 'react';
import { LegendItem } from './LegendItem';

const legendItems = [
  { color: "bg-fuchsia-600", text: "Extreme weed infestations or specific zones that require further analysis." },
  { color: "bg-red-500", text: "High weed pressure, indicating critical zones that need immediate attention or treatment." },
  { color: "bg-yellow-400", text: "Moderate weed pressure, signaling areas that may require some intervention." },
  { color: "bg-green-500", text: "Low weed pressure or clean zones where weed infestation is minimal or non-existent." }
];

export const WeedPressureLegend: React.FC = () => {
  return React.createElement('div',
    { className: "flex flex-col grow shrink-0 mr-0 basis-0 w-fit max-md:max-w-full" },
    React.createElement('div',
      {
        key: "legend-container",
        className: "flex flex-col items-start pt-3 pr-20 text-lg leading-none text-black bg-white rounded-lg border border border-solid max-md:pr-5 max-md:max-w-full"
      },
      React.createElement('div',
        {
          key: "items-container",
          className: "flex flex-col items-start ml-4 max-w-full w-[755px]"
        },
        legendItems.map((item, index) => 
          React.createElement(LegendItem, {
            key: index,
            ...item
          })
        )
      )
    )
  );
}; 