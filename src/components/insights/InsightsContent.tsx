// src/components/insights/InsightsContent.tsx
import * as React from "react";
import { CropAnalytics } from "./CropAnalytics";

export const InsightsContent = () => {
  return (
    <div className="flex flex-col mt-3.5 max-md:mt-10 max-md:max-w-full">
      <h1 className="text-2xl font-bold mb-4">Insights</h1>
      {/* Insights specific content */}
      <CropAnalytics />
    </div>
  );
};