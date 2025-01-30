// src/components/dashboard/SidebarItem.tsx
import React from 'react';
import Link from 'next/link';

interface SidebarItemProps {
  icon: string;
  text: string;
  path: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, path }) => {
  return (
    <Link href={path}>
      <div className="flex gap-4 items-center px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
        <img 
          loading="lazy" 
          src={icon} 
          alt={`${text} icon`}
          className="object-contain w-6 h-6"
        />
        <span className="text-zinc-800 text-base">{text}</span>
      </div>
    </Link>
  );
};