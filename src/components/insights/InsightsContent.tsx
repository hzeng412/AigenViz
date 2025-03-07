"use client";

import React from "react";
import { InsightsHeader } from "./InsightsHeader";
import GrowthTimeline from "./GrowthTimeline";
import { CropGallery } from "./CropGallery";
import { CropMetrics } from "./CropMetrics";
import { CropInsightsMap } from "./CropInsightsMap";

export const InsightsContent = () => {
  return (
    <main className="rounded-none">
      <InsightsHeader fieldName="#2B Zimmerman" />
      <GrowthTimeline />
      <CropInsightsMap />
      <CropGallery />
      <CropMetrics />
    </main>
  );
};

export default InsightsContent;