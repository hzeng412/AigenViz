import * as React from 'react';
import { MetricCard } from './MetricCard';
import { EnvironmentalSection } from './EnvironmentalSection';
import { GalleryImage } from './GalleryImage';

export const CropMonitor: React.FC = () => {
  const metricCards = [
    {
      title: "Average Height Growth",
      subtitle: "Height Growth",
      value: "12%",
      description: "in this month"
    },
    {
      title: "Latest Working Field",
      subtitle: "Seed Survival",
      value: "85%",
      description: "germination rate"
    },
    {
      title: "Crop Density",
      value: "65%"
    },
    {
      title: "Disease Risk",
      subtitle: "Disease Risk",
      value: "High",
      description: "rust detected at Field 2B Row 18"
    }
  ];

  const environmentalSections = [
    {
      title: "Weather Conditions",
      metrics: [
        { icon: "temperature", value: "72°F" },
        { icon: "droplet", value: "65% Humidity" },
        { icon: "wind", value: "5 mph NW" }
      ]
    },
    {
      title: "Soil Conditions",
      metrics: [
        { icon: "droplet", value: "28% Moisture" },
        { icon: "test-pipe", value: "pH 6.5" }
      ]
    },
    {
      title: "Crop Metrics",
      metrics: [
        { icon: "plant", value: "Leaf Area: 85%" },
        { icon: "plant-2", value: "Leaf Area: 85%" },
        { icon: "scale", value: "Est. Yield: 4.2 t/ha" }
      ]
    }
  ];

  const galleryImages = [
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/01d84c6c6ecfb1d0d46b3130c9243589ca6582363396b6705c56fa15b6c78f4a?apiKey=1733fe44aec44f7491ef147a718cebc0&", date: "5/10/2024", altText: "Crop growth May 10" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/86e3292578798f4e9346ff4e737e9654b2e40177a2379602d820d5a49973ffd4?apiKey=1733fe44aec44f7491ef147a718cebc0&", date: "6/4/2024", altText: "Crop growth June 4" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b8c6774beb62b72bf20e864df1ef8aebd280919c9edf7a9ba0608e31100af33b?apiKey=1733fe44aec44f7491ef147a718cebc0&", date: "7/1/2024", altText: "Crop growth July 1", showActions: true }
  ];

  const diseaseImages = [
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/cfdc388862f297378c02fa386d6f3d05e87aac4ac7ae3c834a1d3e229f31341e?apiKey=1733fe44aec44f7491ef147a718cebc0&", date: "5/10/2024", altText: "Disease tracking May 10" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4aa0a50d5c40ed14c787adcbdffdad6480683b69248a3a9df788ef0701684fb2?apiKey=1733fe44aec44f7491ef147a718cebc0&", date: "6/4/2024", altText: "Disease tracking June 4" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/77320d3326af318abe5daf0a82c9ef5e266184d599881bfd65b84c999ea020e6?apiKey=1733fe44aec44f7491ef147a718cebc0&", date: "7/1/2024", altText: "Disease tracking July 1", showActions: true }
  ];

  return (
    <div className="p-5 min-h-screen bg-stone-50">
      <div className="flex justify-between items-center mb-8">
        <div className="text-base text-gray-600">
          Field: North-East Quarter #2B
        </div>
      </div>

      <div className="grid gap-6 mb-10 grid-cols-[repeat(4,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
        {metricCards.map((card, index) => (
          <MetricCard key={index} {...card} />
        ))}
      </div>

      <div className="p-8 mb-10 bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
        <div className="flex justify-between mb-6">
          <div className="text-xl font-bold text-neutral-500">Environmental Data</div>
          <div className="text-base text-gray-600">Field Section: North-East Quarter #2B</div>
        </div>
        <div className="grid gap-6 grid-cols-[repeat(3,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
          {environmentalSections.map((section, index) => (
            <EnvironmentalSection key={index} {...section} />
          ))}
        </div>
      </div>

      <div className="p-8 mb-10 bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
        <div className="mb-6 text-xl font-bold text-neutral-500">Crop Growth Gallery</div>
        <div className="grid gap-6 grid-cols-[repeat(3,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
          {galleryImages.map((image, index) => (
            <GalleryImage key={index} {...image} />
          ))}
        </div>
      </div>

      <div className="p-8 mb-10 bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
        <div className="mb-6 text-xl font-bold text-neutral-500">Crop Diseases Tracking</div>
        <div className="grid gap-6 grid-cols-[repeat(3,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
          {diseaseImages.map((image, index) => (
            <GalleryImage key={index} {...image} />
          ))}
        </div>
      </div>
    </div>
  );
};