import * as React from 'react';
import { EnvironmentalMetricProps } from './types';

export const EnvironmentalMetric: React.FC<EnvironmentalMetricProps> = ({ icon, value }) => {
  return (
    <div className="flex gap-3 items-center mb-2">
      <i className={`ti ti-${icon} text-xl text-neutral-500`} />
      <div className="text-sm font-medium">{value}</div>
    </div>
  );
};