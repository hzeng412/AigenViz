// src/components/dashboard/SidebarItem.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarItemProps {
  icon: string;
  text: string;
  path: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, path }) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link href={path}>
      <div className={`flex gap-4 items-center px-4 py-2 rounded-lg cursor-pointer transition-colors
        ${isActive ? 'bg-[#2a9688ff]' : 'hover:bg-gray-300'}`}>
        <img 
          loading="lazy" 
          src={icon} 
          alt={`${text} icon`}
          className="object-contain w-6 h-6"
        />
        <span className={`text-base text-black ${isActive ? 'font-medium bg-[#2a9688ff]' : 'font-normal'}`}>
          {text}
        </span>
      </div>
    </Link>
  );
};