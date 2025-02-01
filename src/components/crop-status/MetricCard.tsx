import * as React from 'react';
import { MetricCardProps } from './types';

export const MetricCard: React.FC<MetricCardProps> = ({ title, value, subtitle, description }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
      <div className="mb-4 text-xl font-bold text-neutral-500">{title}</div>
      <div className="overflow-hidden relative mb-4 rounded-xl bg-slate-100 min-h-[120px]">
        <div className="absolute inset-0 p-4 text-gray-600">
          {subtitle && <div className="mb-2 text-sm">{subtitle}</div>}
          <div className="mb-2 text-2xl font-bold">{value}</div>
          {description && <div className="text-xs text-gray-500">{description}</div>}
        </div>
      </div>
    </div>
  );
};