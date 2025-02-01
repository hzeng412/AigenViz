export interface MetricCardProps {
    title: string;
    value: string;
    subtitle?: string;
    description?: string;
  }
  
  export interface EnvironmentalMetricProps {
    icon: string;
    value: string;
  }
  
  export interface EnvironmentalSectionProps {
    title: string;
    metrics: EnvironmentalMetricProps[];
  }
  
  export interface GalleryImageProps {
    image: string;
    date: string;
    altText: string;
    showActions?: boolean;
  }