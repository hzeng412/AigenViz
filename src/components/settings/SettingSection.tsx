import * as React from 'react';
import { SettingItem } from './SettingItem';
import { SettingSectionProps } from './types';

export const SettingSection: React.FC<SettingSectionProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col p-px w-full rounded shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:max-w-full">
      <div className="flex items-start py-1 pl-4 w-full text-base font-semibold tracking-normal text-white rounded-xl bg-neutral-500 max-md:max-w-full">
        <div className="overflow-hidden pr-96 min-w-[240px] max-md:max-w-full">
          {title}
        </div>
      </div>
      {items.map((item, index) => (
        <SettingItem key={index} {...item} />
      ))}
    </div>
  );
};