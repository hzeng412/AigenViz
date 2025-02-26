// src/app/page.tsx
'use client';
import * as React from "react";
import dynamic from 'next/dynamic';
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { FieldList } from "@/components/dashboard/FieldList";
import { Map } from '@/components/dashboard/Map';

import { MinimalMap } from '@/components/dashboard/MinimalMap';

// Import Map component dynamically to avoid SSR issues with Mapbox
// This is critical because Mapbox requires client-side rendering
const DynamicMap = dynamic(
  () => import('@/components/dashboard/Map').then(mod => mod.Map),
  { 
    ssr: false, // Disable server-side rendering for this component
    loading: () => (
      <div className="w-full bg-white rounded-lg shadow-[0px_1px_3px_rgba(0,0,0,0.25)] overflow-hidden aspect-[1.63] max-md:max-w-full">
        <div className="w-full h-full bg-gray-100 animate-pulse"></div>
      </div>
    )
  }
);

export default function HomePage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col flex-grow mt-3.5 h-full max-md:mt-10 max-md:max-w-full">
        {/* Map Section */}
        <MinimalMap />

        {/* Field Information Section */}
        <div className="flex flex-col items-start pt-2.5 pr-20 pl-4 mt-4 w-full bg-white rounded-lg shadow-[0px_1px_3px_rgba(0,0,0,0.25)] max-md:pr-5 max-md:max-w-full">
          {/* <div className="flex z-10 flex-wrap gap-5 justify-between max-w-full text-xl font-bold leading-none w-[973px]">
            <div className="flex gap-10">
              <div className="text-gray-800 basis-auto">
                Field: North-East Quarter
              </div>
              <div className="text-black">Location</div>
            </div>
            <div className="flex gap-10 self-start text-black max-md:max-w-full">
              <div>Size</div>
              <div>Current Crop Type</div>
            </div>
          </div> */}
          <FieldList />
        </div>
      </div>
    </DashboardLayout>
  );
}