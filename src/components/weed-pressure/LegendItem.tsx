// src/components/weed-pressure/LegendItem.tsx
import * as React from "react";
import { LegendItemProps } from "./types";

export const LegendItem: React.FC<LegendItemProps> = ({ color, text }) => {
  return (
    
    <div className="flex flex-wrap gap-3 mt-1.5">
      <div className={`flex shrink-0 self-start ${color} h-[17px] rounded-[14415px] w-[17px]`} />
      <div className="flex-auto max-md:max-w-full">{text}</div>
    </div>
  );
};