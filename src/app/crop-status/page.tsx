// src/app/crop-status/page.tsx
'use client';
import * as React from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { CropStatusContent } from "@/components/crop-status/CropStatusContent";

export default function CropStatusPage() {
  return (
    <DashboardLayout>
      <CropStatusContent />
    </DashboardLayout>
  );
}