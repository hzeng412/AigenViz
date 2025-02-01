import { TimelineItem, PressureIndicator, GalleryImage } from './types';

export const timelineData: TimelineItem[] = [
  {
    status: "Germination",
    date: "May 1 - May 15, 2025",
    color: "bg-green-500"
  },
  {
    status: "Vegetative Growth",
    date: "May 16 - June 30, 2025",
    color: "bg-green-500"
  },
  {
    status: "Reproductive Stage",
    date: "July 1 - July 31, 2025",
    color: "bg-yellow-500"
  },
  {
    status: "Harvest",
    date: "August 1 - August 15, 2025",
    color: "bg-gray-300"
  }
];

export const pressureIndicators: PressureIndicator[] = [
  {
    color: "bg-red-500",
    title: "High Pressure → Stressed Crop Zones:",
    description: "Critical areas requiring immediate intervention."
  },
  {
    color: "bg-yellow-400",
    title: "Moderate Pressure → Developing Growth:",
    description: "Suggests areas that may need attention."
  },
  {
    color: "bg-green-500",
    title: "Low Pressure → Healthy Crop Growth:",
    description: "Indicates optimal crop conditions"
  }
];

export const galleryImages: GalleryImage[] = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bea74d98a052a0a94a1dd687e8c4d9ab3224188bc96c41b32ae1c1516882947c?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0",
    date: "May 15, 2025",
    alt: "Crop progress image from May 15"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a2b091acc628b68e74d7f695796826d52af9304251f9d91354b995403277437?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0",
    date: "June 1, 2025",
    alt: "Crop progress image from June 1"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac6d6e2085ddee7a329a0db4c06f9d8d9e40e2f73097546456bc6e1a3a811750?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0",
    date: "June 15, 2025",
    alt: "Crop progress image from June 15"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb16c2a697f5819c61846755e61f96c0fcc1b2d71c522929e74068f8a8d61ca0?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0",
    date: "July 1, 2025",
    alt: "Crop progress image from July 1"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/70636755d512bce4bbc12820a652150ad89badebb08e6b175ad43611a3977bd3?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0",
    date: "July 15, 2025",
    alt: "Crop progress image from July 15"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9feafab6cd246730ddf4a2c3c5078344ab5d4acdf16101c2e57850a827d133d?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0",
    date: "August 1, 2025",
    alt: "Crop progress image from August 1"
  }
];