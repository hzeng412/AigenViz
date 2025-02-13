import * as React from "react";
import { FieldInfo } from "./types";
import FieldInfoCard from "./FieldInfoCard";

// 转换现有数据格式为新的 FieldInfo 格式
const fieldData: FieldInfo[] = [
  {
    field: "Zimmerman",
    section: "#2B",
    size: "214 acres",
    cropType: "Sugar Beet",
  },
  {
    field: "Lindemann",
    section: "#1A",
    size: "184 acres",
    cropType: "Cotton",
  },
  {
    field: "Sinimann",
    section: "#2C",
    size: "157 acres",
    cropType: "Cotton",
  },
];

export const FieldList: React.FC = () => {
  return React.createElement('div',
    { className: "w-full max-w-[1200px] mx-auto p-4" },
    React.createElement(FieldInfoCard, {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/36b00b944cd2093c5e1a37a0dbe16c7eb393f07b93a0cc6099d4d25e71e4a7ab",
      fieldInfo: fieldData
    })
  );
};
