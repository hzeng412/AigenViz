import * as React from 'react';
import { EnvironmentalMetric } from './EnvironmentalMetric';
import { EnvironmentalSectionProps } from './types';

export const EnvironmentalSection: React.FC<EnvironmentalSectionProps> = ({ title, metrics }) => {
  return (
    <div className="p-4 rounded-xl bg-stone-50">
      <div className="mb-4 text-base font-semibold text-neutral-500">{title}</div>
      {metrics.map((metric, index) => (
        <EnvironmentalMetric key={index} {...metric} />
      ))}
    </div>
  );
};