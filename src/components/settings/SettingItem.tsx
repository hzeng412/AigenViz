import * as React from 'react';
import { SettingItemProps } from './types';

export const SettingItem: React.FC<SettingItemProps> = ({ title, icon, description }) => {
  return (
    <div className="flex flex-wrap gap-2.5 items-start px-4 pt-4 pb-4 bg-white">
      <div className="flex-1 shrink pr-64 min-w-[240px] max-md:max-w-full">
        {description ? (
          <>
            <div>{title}</div>
            <div className="text-xs tracking-normal leading-loose text-neutral-600">
              {description}
            </div>
          </>
        ) : (
          title
        )}
      </div>
      {icon && (
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain shrink-0 aspect-[0.56] w-[9px]"
        />
      )}
    </div>
  );
};