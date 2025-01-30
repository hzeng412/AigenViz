// src/app/insights/page.tsx
'use client';
import * as React from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { InsightsContent } from "@/components/insights/InsightsContent";

export default function InsightsPage() {
  return (
    <DashboardLayout>
      <InsightsContent />
    </DashboardLayout>
  );
}



