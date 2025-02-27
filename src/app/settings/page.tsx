// src/app/settomgs/page.tsx
'use client';
import * as React from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { SettingsPage as SettingsContent } from "@/components/settings/SettingsPage";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <SettingsContent />
    </DashboardLayout>
  );
}
