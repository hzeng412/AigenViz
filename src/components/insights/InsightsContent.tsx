"use client";

import React from "react";
import { InsightsHeader } from "./InsightsHeader";
import { GrowthTimeline } from "./GrowthTimeline";
import { CropGallery } from "./CropGallery";
import { CropMetrics } from "./CropMetrics";

export const InsightsContent = () => {
  return (
    <main className="rounded-none">
      <InsightsHeader fieldName="#2B Zimmerman" />
      <GrowthTimeline />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0d274bc858a0032f537c9e681fdbd93d39c6736b175bbaa5681ead9534b2040"
        className="object-contain mt-1 w-full rounded-xl aspect-[1.77] max-md:max-w-full"
        alt="Field overview"
      />
      <CropGallery />
      <CropMetrics />
    </main>
  );
};

export default InsightsContent;
