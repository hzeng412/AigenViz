// src/app/page.tsx
'use client';
import * as React from "react";
import dynamic from 'next/dynamic';
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { FieldList } from "@/components/dashboard/FieldList";
import { Map } from '@/components/dashboard/Map';
import { HomeContent } from "@/components/dashboard/HomeContent";

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

export default function Home() {
  return (
    <DashboardLayout>
      <HomeContent />
    </DashboardLayout>
  );
}