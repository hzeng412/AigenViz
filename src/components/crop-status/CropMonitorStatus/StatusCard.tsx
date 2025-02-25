import * as React from 'react';
import Image from 'next/image';
import { StatusCardProps } from '../types';

export const StatusCard: React.FC<StatusCardProps> = ({ title, value, description, imageSrc, color }) => {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow items-start px-5 pt-4 pb-1.5 w-full bg-white rounded-xl border border border-solid max-md:mt-8">
        <div className="pt-0.5 pb-2 max-w-full text-lg font-bold tracking-wide bg-black bg-opacity-0 text-neutral-500 w-[260px] max-md:pr-5">
          {title}
        </div>
        <div className="flex z-10 flex-col pr-2 -mt-4 max-w-full bg-black bg-opacity-0 w-[260px]">
          <div className="flex shrink-0 h-5 bg-black bg-opacity-0" />
          <div className={`pt-px pb-3 mt-2.5 text-2xl font-bold ${color} whitespace-nowrap bg-black bg-opacity-0 max-md:pr-5`}>
            {value}
          </div>
          <div className="py-px text-xs text-gray-500 bg-black bg-opacity-0">
            {description}
          </div>
        </div>
        <Image
          src={imageSrc}
          alt={`${title} chart`}
          width={500}
          height={191}
          className="object-contain self-stretch mt-5 w-full rounded-xl aspect-[2.61]"
        />
      </div>
    </div>
  );
}; 