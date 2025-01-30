// src/app/weed-pressure/page.tsx
'use client';
import * as React from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { WeedPressureContent } from "@/components/weed-pressure/WeedPressureContent";

export default function WeedPressurePage() {
  return (
    <DashboardLayout>
      <WeedPressureContent />
    </DashboardLayout>
  );
}