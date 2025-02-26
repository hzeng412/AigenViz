import * as React from "react";
import { FieldInfo } from "./types";
import FieldInfoCard from "./FieldInfoCard";

const fieldData: FieldInfo[] = [
  {
    field: "Field06",
    section: "#1B",
    size: "149 acres",
    cropType: "Sugar Beets",
  },
  {
    field: "Field06",
    section: "#1B",
    size: "152 acres",
    cropType: "Sugar Beets",
  },
  {
    field: "Field06",
    section: "#2A",
    size: "144 acres",
    cropType: "Cottons",
  },
];

export const FieldList: React.FC = () => {
  return React.createElement('div',
    { className: "w-full max-w-[1200px] mx-auto p-4" },
    React.createElement(FieldInfoCard, {
      fieldInfo: fieldData
    })
  );
};
