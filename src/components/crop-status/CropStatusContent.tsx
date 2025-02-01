// src/components/crop-status/CropStatusContent.tsx
import * as React from "react";
import { CropMonitor } from "./CropMonitor";

export const CropStatusContent = () => {
  return (
    <div className="flex flex-col mt-3.5 max-md:mt-10 max-md:max-w-full">
      <h1 className="text-2xl font-bold mb-4">Crop Status</h1>
      {/* Crop Status specific content */}
      <CropMonitor />
    </div>
  );
};