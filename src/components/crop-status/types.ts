export interface StatusCardProps {
  title: string;
  value: string;
  description: string;
  imageSrc: string;
  color: string;
}

export interface EnvironmentalDataProps {
  fieldName: string;
}

export interface CropMonitorStatusProps {
  fieldName: string;
}

export interface MetricCardProps {
  title: string;
  value: string | number;
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