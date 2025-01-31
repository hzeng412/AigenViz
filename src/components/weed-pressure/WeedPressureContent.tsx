// src/components/weed-pressure/WeedPressureContent.tsx
import * as React from "react";
import { WeedPressureMap } from "./WeedPressureMap";

export const WeedPressureContent: React.FC = () => {
  return (
    <div className="flex flex-col mt-3.5 max-md:mt-10 max-md:max-w-full">
      <h1 className="text-2xl font-bold mb-4">Weed Pressure</h1>
      <WeedPressureMap />
    </div>
  );
};