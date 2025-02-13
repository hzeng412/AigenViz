// src/components/weed-pressure/LegendItem.tsx
import * as React from "react";

interface LegendItemProps {
  color: string;
  text: string;
}

export const LegendItem: React.FC<LegendItemProps> = ({ color, text }) => {
  return React.createElement('div',
    { className: "flex flex-wrap gap-3 mt-1.5" },
    [
      React.createElement('div',
        {
          key: "color-indicator",
          className: `flex shrink-0 self-start ${color} h-[17px] rounded-[14415px] w-[17px]`
        }
      ),
      React.createElement('div',
        {
          key: "legend-text",
          className: "flex-auto max-md:max-w-full"
        },
        text
      )
    ]
  );
};