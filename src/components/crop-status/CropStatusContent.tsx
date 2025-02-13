// src/components/crop-status/CropStatusContent.tsx
import * as React from "react";
import { CropMonitorStatus } from "./CropMonitorStatus";

export const CropStatusContent: React.FC = () => {
  return React.createElement('div',
    { className: "flex flex-col mt-3.5 max-md:mt-10 max-md:max-w-full" },
    [
      React.createElement('h1',
        {
          key: "title",
          className: "text-2xl font-bold mb-4"
        },
        "Crop Status"
      ),
      React.createElement(CropMonitorStatus, {
        key: "monitor",
        fieldName: "North-East Quarter #2B"
      })
    ]
  );
};