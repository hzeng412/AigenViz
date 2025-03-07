// src/app/crop-status/page.tsx
'use client';
import * as React from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { CropStatusContent } from "@/components/crop-status/CropStatusContent";

// WeatherConditions, SoilConditions, CropMetrics, FieldConnectivity 共同的样式
const commonContainerStyle = "flex flex-col w-3/12 max-md:ml-0 max-md:w-full";
const commonInnerStyle = "flex flex-col p-6 w-full h-[180px] rounded-xl bg-stone-50"; // 固定高度为 180px

// WeatherConditions.tsx
export const WeatherConditions: React.FC = () => {
  return (
    <div className={commonContainerStyle}>
      <div className={commonInnerStyle}>
        <h3 className="text-base font-semibold text-emerald-200 mb-4">
          Weather Conditions
        </h3>
        <div className="flex flex-col gap-4">
          {/* 内容保持不变 */}
        </div>
      </div>
    </div>
  );
};

// SoilConditions.tsx, CropMetrics.tsx, FieldConnectivity.tsx 
// 也使用相同的容器样式

export default function CropStatusPage() {
  return (
    <DashboardLayout>
      <CropStatusContent />
    </DashboardLayout>
  );
}